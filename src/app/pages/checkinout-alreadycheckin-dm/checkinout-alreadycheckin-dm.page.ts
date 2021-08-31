import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../../services/util.service';
import { SharedDataService } from '../../services/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Response } from '../../_models';
import { EnumService } from '../../services/enum.service';
import { OfflineManagerService } from 'src/app/services/offline-manager.service';
import * as moment from 'moment';

@Component({
	selector: 'app-checkinout-alreadycheckin-dm',
	templateUrl: './checkinout-alreadycheckin-dm.page.html',
	styleUrls: ['./checkinout-alreadycheckin-dm.page.scss'],
})
export class CheckinoutAlreadycheckinDmPage implements OnInit {
	locationName;
	locationId;
	isAlreadyCheckedInSameLocation = false;

	constructor(
		public navController: NavController,
		public activatedRoute: ActivatedRoute,
		public sharedDataService: SharedDataService,
		public offlineManagerService: OfflineManagerService,
		public apiService: ApiService,
		public utilService: UtilService
	) {
		this.activatedRoute.queryParams.subscribe((res) => {
			if (res) {
				if (res.locationName) {
					this.locationName = res.locationName;
				}
				if (res.locationId) {
					this.locationId = res.locationId;
				}

				if (parseInt(res.isAlreadyCheckedInSameLocation, 0) === 1) {
					this.isAlreadyCheckedInSameLocation = res.isAlreadyCheckedInSameLocation;
				}
			}
		});
	}

	ngOnInit() {}

	onClose() {
		this.navController.navigateRoot('dashboard-dm', { replaceUrl: true });
	}

	onBack() {
		this.navController.back();
	}

	onContinue() {
		if (this.sharedDataService.checkinoutDmAs === EnumService.CheckInType.AS_GUEST) {
			this.utilService.presentLoadingWithOptions();
			this.apiService
				.insertCheckOutDetails_Guest({
					userCheckInDetailID: this.locationId,
					guestPhone: this.sharedDataService.dedicatedModeGuestDetail.guestPhone,
					guestFirsName: this.sharedDataService.dedicatedModeGuestDetail.guestFirsName,
					guestMiddleName: this.sharedDataService.dedicatedModeGuestDetail.guestMiddleName,
					guestLastName: this.sharedDataService.dedicatedModeGuestDetail.guestLastName,
					checkOutLatitude: this.sharedDataService.myCurrentGeoLocation?.coords?.latitude,
					checkOutLongitude: this.sharedDataService.myCurrentGeoLocation?.coords?.longitude,
				})
				.subscribe(
					() => {
						this.utilService.hideLoading();
						this.navController.navigateForward(['/checkinout-success-dm'], {
							queryParams: {
								message: 'You have now checked-out',
								nextPage: '/dashboard-dm',
								actionBtnTitle: 'Continue',
							},
						});
					},
					(error) => {
						this.utilService.hideLoading();
						const exception = error.error as Response;
						this.navController.navigateForward(['/checkinout-fail-dm'], {
							queryParams: {
								title: 'You cannot check-out',
								errorTitle: exception.ResponseException.ValidationErrors[0].Field,
								errorMessage: exception.ResponseException.ValidationErrors[0].Message,
								nextPage: '/dashboard-dm',
							},
						});
					}
				);
		} else {
			const onSuccess = (response) => {
				this.navController.navigateForward(['/checkinout-success-dm'], {
					queryParams: {
						message: 'You have now checked-out',
						nextPage: '/dashboard-dm',
						actionBtnTitle: 'Continue',
					},
				});
			};

			const onFail = (error) => {
				const exception = error.error as Response;
				this.navController.navigateForward(['/checkinout-fail-dm'], {
					queryParams: {
						title: 'You cannot check-out',
						errorTitle: exception.ResponseException.ValidationErrors[0].Field,
						errorMessage: exception.ResponseException.ValidationErrors[0].Message,
						nextPage: '/dashboard-dm',
					},
				});
			};

			if (this.sharedDataService.offlineMode) {
				const utcDateTime = moment().utc(false).format('DD.MM.YYYY HH:mm:ss');

				this.offlineManagerService
					.insertCheckOutDetails(
						{
							userId: this.sharedDataService.dedicatedModeUserDetail.userId,
							checkOutDate: utcDateTime,
							isOfflineDone: true,
							checkOutLatitude: this.sharedDataService.myCurrentGeoLocation?.coords?.latitude,
							checkOutLongitude: this.sharedDataService.myCurrentGeoLocation?.coords?.longitude,
						},
						{ userCheckInDetailID: this.locationId }
					)
					.then((response) => {
						onSuccess(response);
					})
					.catch((error) => {
						onFail(error);
					});
			} else {
				this.utilService.presentLoadingWithOptions();
				this.apiService
					.insertCheckOutDetails({
						userCheckInDetailID: this.locationId,
						userId: this.sharedDataService.dedicatedModeUserDetail.userId,
						checkOutLatitude: this.sharedDataService.myCurrentGeoLocation?.coords?.latitude,
						checkOutLongitude: this.sharedDataService.myCurrentGeoLocation?.coords?.longitude,
					})
					.subscribe(
						(response) => {
							this.utilService.hideLoading();
							onSuccess(response);
						},
						(error) => {
							this.utilService.hideLoading();
							onFail(error);
						}
					);
			}
		}
	}
}
