import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute } from '@angular/router';
import { EnumService } from '../../services/enum.service';
import { OfflineApiService } from 'src/app/services/offline-api.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { OfflineManagerService } from 'src/app/services/offline-manager.service';
import { Response } from 'src/app/_models';

@Component({
	selector: 'app-device-sync-dm',
	templateUrl: './device-sync-dm.page.html',
	styleUrls: ['./device-sync-dm.page.scss'],
})
export class DeviceSyncDmPage implements OnInit {
	synchProgressState = 'pending';
	// synchProgressState = 'processing';
	// synchProgressState = 'completed';

	progress = 0;

	constructor(
		public navController: NavController,
		public alertController: AlertController,
		public activatedRoute: ActivatedRoute,
		public utilService: UtilService,
		public offlineApiService: OfflineApiService,
		public offlineManagerService: OfflineManagerService,
		public sharedDataService: SharedDataService
	) {
		this.activatedRoute.queryParams.subscribe((data) => {
			if (data && data.startSync) {
				this.onSync();
			}
		});
	}

	ngOnInit() {}

	async onClose() {
		if (this.synchProgressState === 'processing') {
			const alert = await this.alertController.create({
				header: 'Quit Synchronisation!',
				message: 'You are about to quit the device sync. Once quitted the current sync will be cancelled and sync progress will be lost. Are you sure you want to exit?',
				translucent: true,
				keyboardClose: false,
				backdropDismiss: false,
				buttons: [
					{
						text: 'Cancel',
						role: 'cancel',
						cssClass: 'danger',
						handler: (blah) => {
							console.log('Confirm Cancel: blah');
						},
					},
					{
						text: 'Yes',
						handler: () => {
							this.navController.back();
						},
					},
				],
			});

			await alert.present();
		} else {
			this.navController.back();
		}
	}

	onSync() {
		this.progress = 0;
		this.synchProgressState = 'processing';
		this.callOfflineApi(() => {
			if (this.progress === 100) {
				if (UtilService.randomBoolean()) {
					this.synchProgressState = 'completed';
					localStorage.setItem(EnumService.LocalStorageKeys.SYNC_DATE_TIME, this.utilService.getCurrentDateTIme());
				} else {
					if (UtilService.randomBoolean()) {
						this.synchProgressState = 'failed';
					} else {
						this.synchProgressState = 'networkerror';
					}
				}
			} else {
				this.progress = this.progress + 5;
			}
		});
	}

	onContinue() {
		this.navController.back();
	}

	callOfflineApi = (callBack) => {
		this.offlineApiService.getLocationItemList(this.sharedDataService.dedicatedModeDeviceDetailData.companyID).subscribe((res1: Response) => {
			this.offlineApiService.getAccidentTypeList().subscribe((res2: Response) => {
				this.offlineApiService.getAccidentClassificationList().subscribe((res3: Response) => {
					this.offlineApiService.getRiskAssessmentProbabilityOptions().subscribe((res4: Response) => {
						this.offlineApiService.getRiskAssessmentSeverityOptions().subscribe((res5: Response) => {
							this.progress = 1;
							const locationItemList = res1.Result;
							const accidentTypeList = res2.Result;
							const accidentClassificationList = res3.Result;
							const riskAssessmentProbabilityOptions = res4.Result;
							const riskAssessmentSeverityOptions = res5.Result;

							this.offlineApiService.getDeviceOfflineDetails(this.sharedDataService.deviceUID).subscribe(
								async (res: Response) => {
									this.progress = 5;
									if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
										const offlineData = res.Result;
										offlineData.deviceLocationItemList = locationItemList;
										offlineData.deviceAccidentTypeList = accidentTypeList;
										offlineData.deviceAccidentClassificationList = accidentClassificationList;
										offlineData.deviceRiskAssessmentProbabilityOptions = riskAssessmentProbabilityOptions;
										offlineData.deviceRiskAssessmentSeverityOptions = riskAssessmentSeverityOptions;

										this.offlineManagerService.insertOfflineData(offlineData, (progress) => {
											this.progress = progress;
											if (this.progress === 100) {
												callBack && callBack();
											}
										});
									}
								},
								(error) => {
									callBack && callBack();
								}
							);
						});
					});
				});
			});
		});
	};
}
