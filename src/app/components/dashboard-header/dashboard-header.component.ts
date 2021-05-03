import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from '../../services/shared-data.service';
import { ObservablesService } from '../../services/observables.service';
import { EnumService } from '../../services/enum.service';
import { AccountService } from '../../services/account.service';
import { ApiService } from '../../services/api.service';
import { Response, User } from '../../_models';
import { CheckInPostData } from '../../_models/checkInPostData';
import { CheckedInDetailItem } from '../../_models/checkedInDetailItem';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard-header',
	templateUrl: './dashboard-header.component.html',
	styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit, OnDestroy {
	@Input() showPlaceNavigationBtns = false;
	@Input() isCurrentCheckin = false;
	@Input() hideCheckinButton = false;
	@Output() scanQrCode = new EventEmitter<string>();

	user: User;

	checkedPlaces: Array<CheckedInDetailItem> = [];
	checkedIn = false;

	showCheckedInPlacesList = false;
	selectedPlace: CheckedInDetailItem;

	currentCheckinPlaceIndex = 0;

	refreshCurrentCheckinIntervalRef: any;

	constructor(
		public router: Router,
		public navCtrl: NavController,
		public sharedDataService: SharedDataService,
		public observablesService: ObservablesService,
		private accountService: AccountService,
		private apiService: ApiService
	) {
		this.user = this.accountService.userValue;
		this.checkedPlaces = sharedDataService.checkedInPlaces;

		this.checkedPlaces.map((place, key) => {
			if (place.userCheckInDetailID === sharedDataService.currentSelectedCheckinPlace.userCheckInDetailID) {
				this.currentCheckinPlaceIndex = key;
			}
		});

		if (this.checkedPlaces && this.checkedPlaces.length > 0) {
			this.checkedIn = true;
		}

		if (this.checkedIn && this.checkedPlaces) {
			if (!sharedDataService.currentSelectedCheckinPlace) {
				const place = this.checkedPlaces[0];
				this.placedChange(place);
			} else {
				this.selectedPlace = sharedDataService.currentSelectedCheckinPlace;
			}
		}
	}

	ngOnInit() {
		console.log('ngOnInit Dashboard header');

		this.getUserCurrentCheckinDetails();
		this.refreshCurrentCheckinIntervalRef = setInterval(() => {
			this.getUserCurrentCheckinDetails();
		}, 1000 * 60);

		this.observablesService.getObservable(EnumService.ObserverKeys.NEW_CHECKED_IN).subscribe((data) => {
			if (data) {
				this.getUserCurrentCheckinDetails();
			}
		});

		this.observablesService.getObservable(EnumService.ObserverKeys.CURRENT_CHECKED_IN_CHANGED).subscribe((data) => {
			this.selectedPlace = this.sharedDataService.currentSelectedCheckinPlace;
		});
	}

	ngOnDestroy() {
		if (this.refreshCurrentCheckinIntervalRef) {
			clearInterval(this.refreshCurrentCheckinIntervalRef);
		}
	}

	getUserCurrentCheckinDetails = () => {
		this.apiService.getUserCurrentCheckingDetails(this.user?.userId).subscribe((response: Response) => {
			if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
				const checkedInPlaces = response.Result;
				this.sharedDataService.checkedInPlaces = checkedInPlaces;
				this.checkedPlaces = checkedInPlaces;
				localStorage.setItem(EnumService.LocalStorageKeys.CHECKED_IN_PLACES, JSON.stringify(checkedInPlaces));

				// Check if selected checkedInPlaces is currently checked or not
				// if not then select first place from list
				if (checkedInPlaces && checkedInPlaces.length > 0) {
					if (this.selectedPlace) {
						let found = false;
						checkedInPlaces.map((item: CheckedInDetailItem) => {
							if (this.selectedPlace.userCheckInDetailID === item.userCheckInDetailID) {
								found = true;
								return;
							}
						});
						if (!found) {
							const place = checkedInPlaces && checkedInPlaces.length > 0 ? checkedInPlaces[0] : null;
							this.placedChange(place);
						}
					} else {
						const place = this.checkedPlaces[0];
						this.placedChange(place);
					}
					this.checkedIn = true;
				} else {
					this.checkedIn = false;
					this.placedChange(null);
				}
			}
		});
	};

	showCheckedInPlace() {
		if (!this.isCurrentCheckin) {
			if (this.checkedIn && this.checkedPlaces.length > 1) {
				this.showCheckedInPlacesList = !this.showCheckedInPlacesList;
			} else if (this.checkedIn && this.checkedPlaces && this.checkedPlaces.length === 1) {
				this.placeChoose(this.checkedPlaces[0]);
			}
		}
	}

	placeChoose(place) {
		this.placedChange(place);
		this.navCtrl.navigateRoot('/tabs/current-checkin');
	}

	placedChange(place) {
		this.selectedPlace = place;
		this.sharedDataService.currentSelectedCheckinPlace = place;
		this.showCheckedInPlacesList = false;
		if (place) {
			localStorage.setItem(EnumService.LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE, JSON.stringify(place));
		} else {
			localStorage.removeItem(EnumService.LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE);
		}
		this.observablesService.publishSomeData(EnumService.ObserverKeys.CURRENT_CHECKED_IN_CHANGED);
	}

	checkoutPlace(place: CheckedInDetailItem, event) {
		event.stopPropagation();
		event.stopImmediatePropagation();
		this.showCheckedInPlacesList = false;

		this.sharedDataService.checkOutForCheckedInDetail = place;
		this.navCtrl.navigateForward(['/checkinout-confirm'], {
			queryParams: {
				headerTitle: 'Check Out',
				title: 'You are checking out',
				subtitle: place.entityName,
				buttonTitle: 'Check Out Now',
				locationCheckType: EnumService.ConfirmForCheckType.CheckOut,
			},
		});
	}

	checkByQrCode() {
		this.navCtrl.navigateForward('/dashboard-qrscan');
		this.scanQrCode.emit();
	}

	checkInByList() {
		this.navCtrl.navigateForward('/tabs/dashboard/checkin-list');
	}

	shouldShowNavigationPlaceBtns(btnType = 0) {
		let shouldShowBtn = true;
		if (btnType && btnType === 1 && this.currentCheckinPlaceIndex === 0) {
			shouldShowBtn = false;
		}
		if (btnType && btnType === 2 && this.currentCheckinPlaceIndex === this.checkedPlaces.length - 1) {
			shouldShowBtn = false;
		}
		return shouldShowBtn && this.showPlaceNavigationBtns && this.checkedPlaces && this.checkedPlaces.length > 1;
	}

	previousPlace() {
		if (this.currentCheckinPlaceIndex > 0) {
			this.currentCheckinPlaceIndex--;
			this.placedChange(this.checkedPlaces[this.currentCheckinPlaceIndex]);
		}
	}

	nextPlace() {
		if (this.currentCheckinPlaceIndex < this.checkedPlaces.length - 1) {
			this.currentCheckinPlaceIndex++;
			this.placedChange(this.checkedPlaces[this.currentCheckinPlaceIndex]);
		}
	}
}
