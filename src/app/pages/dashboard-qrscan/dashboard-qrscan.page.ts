import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { Response, User } from '../../_models';
import { PermissionType, Plugins } from '@capacitor/core';
import { LocationItem } from '../../_models/locationItem';
import { AccountService } from '../../services/account.service';
import { UserDetail } from '../../_models/userDetail';
import { CheckedInDetailItem } from '../../_models/checkedInDetailItem';
import { SignOffFormDetail } from '../../_models/signOffFormDetail';
import { DocumentDetail } from '../../_models/documentDetail';
import { StaticDataService } from '../../services/static-data.service';
import { TranslateService } from '@ngx-translate/core';
import { ObservablesService } from 'src/app/services/observables.service';
import { EntityItem } from 'src/app/_models/entityItem';
import { OfflineManagerService } from 'src/app/services/offline-manager.service';
import { DeviceUserDetail } from 'src/app/_models/offline/DeviceUserDetail';

const { Camera, Permissions } = Plugins;

@Component({
	selector: 'app-dashboard-qrscan',
	templateUrl: './dashboard-qrscan.page.html',
	styleUrls: ['./dashboard-qrscan.page.scss'],
})
export class DashboardQrscanPage implements OnInit {
	user: User;
	scanSub;
	isTablet = false;
	authFor;
	isLoaded = false;
	fromFormPage = false;
	isOnlyInventryItemHasHav = false;
	fromFormCallbackKey = '';
	fromFormAllowedQrCodeTypes = [];

	constructor(
		public navCtrl: NavController,
		private qrScanner: QRScanner,
		public accountService: AccountService,
		public apiService: ApiService,
		public utilService: UtilService,
		public sharedDataService: SharedDataService,
		public actionSheetController: ActionSheetController,
		public activatedRoute: ActivatedRoute,
		public translateService: TranslateService,
		public observablesService: ObservablesService,
		public offlineManagerService: OfflineManagerService
	) {
		this.user = this.accountService.userValue;
		this.isTablet = sharedDataService.isTablet;

		this.activatedRoute.queryParams.subscribe((res) => {
			if (res) {
				if (res.authFor) {
					this.authFor = res.authFor;
				}
				if (res.fromFormPage) {
					this.fromFormPage = res.fromFormPage;
				}
				if (res.fromFormAllowedQrCodeTypes) {
					this.fromFormAllowedQrCodeTypes = res.fromFormAllowedQrCodeTypes;
				}
				if (res.fromFormCallbackKey) {
					this.fromFormCallbackKey = res.fromFormCallbackKey;
				}
				if (res.isOnlyInventryItemHasHav) {
					this.isOnlyInventryItemHasHav = res.isOnlyInventryItemHasHav;
				}
			}
		});
	}

	ionViewWillEnter() {
		const QrCodeTestingInLocalHostFor: any = 'location2';

		if (QrCodeTestingInLocalHostFor && UtilService.isLocalHost()) {
			setTimeout(() => {
				switch (QrCodeTestingInLocalHostFor) {
					case 'project':
						this.checkQrCode('mCucrGcxCBTXwWCuKq/sMN6kgl0a1SVlOudJdHCHZHrMpc9RYv5JLo1AqRvdjcW/');
						break;
					case 'document':
						this.checkQrCode('0f75e6e3-8215-4186-92bf-ca0971b337b7');
						break;
					case 'document1':
						this.checkQrCode('711c59e0-e65e-4f6c-99e7-3901400a14d7');
						break;
					case 'form':
						this.checkQrCode('e37f99b2-cda6-4b19-b3e6-ba37a41ffd60');
						break;
					case 'form2':
						this.checkQrCode('6dadd75e-cb62-484d-a9be-deaab282761d');
						break;
					case 'form3':
						//Rosana test login
						this.checkQrCode('41c58f62-cf4e-4ac9-ba78-33730d27548a');
						break;
					case 'form_othercompany':
						this.checkQrCode('87b71cae-476a-4c08-9c63-f24ef7970f89\n');
						break;

					case 'location2':
						this.checkQrCode('78312786-35ab-4c9e-969e-6f7673ed7a5e');
						break;
					case 'location3':
						this.checkQrCode('3d663253-09ab-4299-a891-74fb1961d78c');
						break;
					case 'user':
						this.checkQrCode('1b5ee704-21f6-4e91-9544-0f2a6abd7aed');
						break;
					case 'user_demo_three':
						this.checkQrCode('4d0dd7ba-905e-4f2f-9bb7-afd17e6809bc');
						break;
					case 'inventryitemHav':
						this.checkQrCode('49a1b038-a7cf-4298-9992-86b322e14982');
						break;
					case 'inventryitem':
						this.checkQrCode('22dfd7f6-414c-4608-9b3a-fcc894487fc5');
						break;
				}
			}, 1000);
		}
	}

	ngOnInit() {}

	ionViewWillLeave() {
		console.log('ionViewWillLeave');
		if (!UtilService.isLocalHost()) {
			this.stopScanning();
		}
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter');
		setTimeout(() => {
			this.isLoaded = true;
			this.scan();
		}, 100);
	}

	stopScanning = () => {
		if (this.scanSub) {
			this.scanSub.unsubscribe(); // stop scanning
		}
		this.qrScanner.hide(); // hide camera preview
		this.qrScanner.destroy();
	};

	requestCameraPermission = async () => {
		const cameraPermission = await Permissions.query({
			name: PermissionType.Camera,
		});

		if (cameraPermission.state !== 'granted' && Camera && Camera.requestPermissions) {
			return await Camera.requestPermissions;
		}
		return true;
	};

	scan = () => {
		// await this.requestCameraPermission();

		// Optionally request the permission early
		this.qrScanner
			.prepare()
			.then((status: QRScannerStatus) => {
				if (status.authorized) {
					// camera permission was granted
					// start scanning
					this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
						console.log('Scanned something', text);
						if (text) {
							this.checkQrCode(text);
						}
					});
					this.qrScanner.show();
				} else if (status.denied) {
					this.translateService.get(['SHARED_TEXT.ERRORS.CAMERA_PERMISSION_PERMANENTLY_DENIED', 'SHARED_TEXT.ERRORS.PERMISSION_DENIED']).subscribe((res) => {
						this.utilService.showAlert(res['SHARED_TEXT.ERRORS.CAMERA_PERMISSION_PERMANENTLY_DENIED'], res['SHARED_TEXT.ERRORS.PERMISSION_DENIED']);
					});
					// camera permission was permanently denied
					// you must use QRScanner.openSettings() method to guide the user to the settings page
					// then they can grant the permission from there
				} else {
					this.translateService.get(['SHARED_TEXT.ERRORS.CAMERA_PERMISSION_DENIED', 'SHARED_TEXT.ERRORS.PERMISSION_DENIED']).subscribe((res) => {
						this.utilService.showAlert(res['SHARED_TEXT.ERRORS.CAMERA_PERMISSION_DENIED'], res['SHARED_TEXT.ERRORS.PERMISSION_DENIED'], async () => {
							const status1 = await this.requestCameraPermission();
							if (status1) {
								this.scan();
							}
						});
					});

					// permission was denied, but not permanently. You can ask for permission again at a later time.
				}
			})
			.catch((e: any) => console.log('Error is', e));
	};

	checkQrCode = async (qrCode) => {
		if (!UtilService.isLocalHost()) {
			this.stopScanning();
		}

		if (this.fromFormPage) {
			this.getAnswerChoiceEntityByQRCode(qrCode);
		} else if (this.sharedDataService.dedicatedMode) {
			this.getQrDetailForDedicatedMode(qrCode);
		} else {
			this.getQrDetailForPersonalMode(qrCode);
		}
	};

	getAnswerChoiceEntityByQRCode = (qrCode) => {
		const onSuccess = (res) => {
			const result: EntityItem = res as EntityItem;
			if (
				result &&
				result.entityID &&
				this.fromFormAllowedQrCodeTypes.indexOf(result.entityType) !== -1 &&
				(!this.isOnlyInventryItemHasHav || (result.entityType === EnumService.SelectedQRCodeType.InventoryItem && result.isHAVSData))
			) {
				this.observablesService.publishSomeData(this.fromFormCallbackKey, result);
				this.onClose();
			} else {
				this.translateService.get('SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID').subscribe((res) => {
					this.utilService.showAlert(res, '', () => {
						this.scan();
					});
				});
			}
		};

		if (this.sharedDataService.offlineMode) {
			this.offlineManagerService.getAnswerChoiceEntityByQRCode(qrCode, this.sharedDataService.dedicatedModeDeviceDetailData?.companyID).then((res) => {
				if (res) {
					onSuccess(res);
				} else {
					this.translateService.get(['SHARED_TEXT.ERRORS.NOT_FOUND', 'SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID']).subscribe((transRes) => {
						this.utilService.showAlert(transRes['SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID'], transRes['SHARED_TEXT.ERRORS.NOT_FOUND'], () => {
							this.scan();
						});
					});
				}
			});
		} else {
			this.utilService.presentLoadingWithOptions();

			this.apiService.getAnswerChoiceEntityByQRCode(qrCode).subscribe(
				(response: Response) => {
					this.utilService.hideLoading();
					if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
						onSuccess(response.Result);
					}
				},
				(error) => {
					this.utilService.hideLoading();

					this.translateService.get('SHARED_TEXT.ERRORS.NOT_FOUND').subscribe((res) => {
						this.utilService.showAlert(error.message || error, res, () => {
							this.scan();
						});
					});
				}
			);
		}
	};

	getQrDetailForDedicatedMode = (qrCode) => {
		if (this.sharedDataService.offlineMode) {
			this.offlineManagerService.getUserDetailByQRCode(qrCode).then((res) => {
				const userDetail = res as DeviceUserDetail;
				console.log('USER DETAIL', userDetail);
				if (userDetail?.userId && userDetail?.userId !== StaticDataService.userDefaultGuid) {
					this.openNextScreenForDedicatedMode(userDetail);
				} else {
					this.translateService.get('SHARED_TEXT.ERRORS.USER_NOT_VALID_FOR_ANY_OPERATION').subscribe((res) => {
						this.utilService.showAlert(res, '', () => {
							this.scan();
						});
					});
				}
			});
		} else {
			this.utilService.presentLoadingWithOptions();

			this.apiService.getUserByQRCode(qrCode).subscribe(
				(response: Response) => {
					this.utilService.hideLoading();
					if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
						const userDetail: UserDetail = response.Result as UserDetail;
						if (userDetail?.userId && userDetail?.userId !== StaticDataService.userDefaultGuid) {
							this.openNextScreenForDedicatedMode(userDetail);
						} else {
							this.translateService.get('SHARED_TEXT.ERRORS.USER_NOT_VALID_FOR_ANY_OPERATION').subscribe((res) => {
								this.utilService.showAlert(res, '', () => {
									this.scan();
								});
							});
						}
					}
				},
				(error) => {
					this.utilService.hideLoading();

					this.translateService.get('SHARED_TEXT.ERRORS.NOT_FOUND').subscribe((res) => {
						this.utilService.showAlert(error.message || error, res, () => {
							this.scan();
						});
					});
				}
			);
		}
	};

	getQrDetailForPersonalMode = (qrCode) => {
		this.utilService.presentLoadingWithOptions();

		this.apiService.getEntityByQRCode(qrCode).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					const locationItem: LocationItem = response.Result as LocationItem;
					if (locationItem && locationItem.locationID && locationItem.locationName) {
						this.openNextScreenForPersonalMode(locationItem);
					} else {
						this.translateService.get('SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID').subscribe((res) => {
							this.utilService.showAlert(res, '', () => {
								this.scan();
							});
						});
					}
				}
			},
			(error) => {
				this.utilService.hideLoading();

				this.translateService.get('SHARED_TEXT.ERRORS.NOT_FOUND').subscribe((res) => {
					this.utilService.showAlert(error.message || error, res, () => {
						this.scan();
					});
				});
			}
		);
	};

	openNextScreenForDedicatedMode = (detail) => {
		this.sharedDataService.dedicatedModeUserDetail = detail;
		switch (this.sharedDataService.dedicatedModeProcessType) {
			case EnumService.DedicatedModeProcessTypes.CheckinOut:
				this.sharedDataService.getCheckinDetailsForDedicatedMode(this.sharedDataService.dedicatedModeUserDetail.userId, this.apiService, null, ({ ischeckInPersonalQRNotAllowed }) => {
					if (ischeckInPersonalQRNotAllowed) {
						this.translateService.get('SHARED_TEXT.ERRORS.CANNOT_CHECKIN_WITH_PERSONAL_QR_CODE').subscribe((res) => {
							this.utilService.showAlert(res, '', () => {
								this.scan();
							});
						});
					}
				});
				break;
			case EnumService.DedicatedModeProcessTypes.Document:
				this.sharedDataService.dedicatedModeDocumentSignOffProcess();
				break;
			case EnumService.DedicatedModeProcessTypes.Form:
				this.sharedDataService.dedicatedModeFormSignOffProcess();
				break;
			case EnumService.DedicatedModeProcessTypes.WorkPermit:
				this.sharedDataService.dedicatedModeWorkPermitSignOffProcess();
				break;
			default:
		}
	};

	openNextScreenForPersonalMode = (detail) => {
		const locationItem = detail as LocationItem;
		const getEntityIds = this.utilService.getRelevantEntityId(locationItem.locationID);
		// if user scan form or document qr code
		if (getEntityIds.FormID > 0 || getEntityIds.DocumentID > 0) {
			// if checked in to location already
			if (this.sharedDataService.checkedInPlaces && this.sharedDataService.checkedInPlaces.length > 0) {
				this.showCheckedInLocations(getEntityIds);
			} else {
				this.translateService.get('SHARED_TEXT.ERRORS.FOR_ACCESS_THIS_ITEM_YOU_NEED_TO_CHECKIN_FIRST').subscribe((res) => {
					this.utilService.showAlert(res, '', () => {
						this.scan();
					});
				});
			}
		} else {
			this.sharedDataService.checkInForLocation = detail;
			this.sharedDataService.checkinLocationByOption = EnumService.CheckInLocationByOptions.QrCode;
			this.sharedDataService.getCheckinDetails(this.user?.userId, this.apiService);
		}
	};

	async showCheckedInLocations(getEntityIds) {
		this.translateService.get(['SHARED_TEXT.CANCEL', 'PAGESPECIFIC_TEXT.QR_SCANER.CHOOSE_PLACE']).subscribe(async (res) => {
			const checkedInPlaces = this.sharedDataService.checkedInPlaces;
			const buttons = [];
			checkedInPlaces.map((item) => {
				buttons.push({
					text: item.entityName,
					handler: () => {
						this.sharedDataService.currentSelectedCheckinPlace = item;
						if (getEntityIds.FormID > 0) {
							this.openForm(getEntityIds.FormID);
						} else if (getEntityIds.DocumentID > 0) {
							this.openDocument(getEntityIds.DocumentID);
						}
					},
				});
			});

			buttons.push({
				text: res['SHARED_TEXT.CANCEL'],
				role: 'cancel',
				handler: () => {
					this.scan();
				},
			});

			const actionSheet = await this.actionSheetController.create({
				header: res['PAGESPECIFIC_TEXT.QR_SCANER.CHOOSE_PLACE'],
				cssClass: 'my-custom-class',
				buttons,
			});
			await actionSheet.present();
		});
	}

	onClose() {
		this.navCtrl.back();
	}

	async openDocument(documentID) {
		this.utilService.presentLoadingWithOptions();

		this.apiService.getActivitySignOffDocumentDetail(documentID).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.stopScanning();
					const signOffDocumentDetail = response.Result as DocumentDetail;
					this.navCtrl.navigateForward(['/document-openchoice'], {
						queryParams: { document: JSON.stringify(signOffDocumentDetail) },
						replaceUrl: true,
					});
				}
			},
			(error) => {
				this.translateService.get('SHARED_TEXT.ERRORS.NOT_FOUND').subscribe((res) => {
					this.utilService.showAlert(error.message || error, res, () => {
						this.scan();
					});
				});
				this.utilService.hideLoading();
			}
		);
	}

	async openForm(formID) {
		this.utilService.presentLoadingWithOptions();

		const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
		this.apiService.getSignOffFormDetail(this.user?.userId, formID, place?.locationID, place?.projectID, place?.inventoryItemID).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.stopScanning();

					this.sharedDataService.viewFormFor = EnumService.ViewFormForType.CurrentCheckin;
					this.sharedDataService.signOffFormDetail = response.Result as SignOffFormDetail;
					this.navCtrl.navigateForward(['/form-cover'], { replaceUrl: true });
				}
			},
			(error) => {
				this.translateService.get('SHARED_TEXT.ERRORS.NOT_FOUND').subscribe((res) => {
					this.utilService.showAlert(error.message || error, res, () => {
						this.scan();
					});
				});
				this.utilService.hideLoading();
			}
		);
	}
}
