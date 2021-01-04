import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {Response, User} from '../../_models';
import {PermissionType, Plugins} from '@capacitor/core';
import {LocationItem} from '../../_models/locationItem';
import {AccountService} from '../../services/account.service';
import {UserDetail} from '../../_models/userDetail';
import {FormItem} from '../../_models/formItem';
import {CheckedInDetailItem} from '../../_models/checkedInDetailItem';
import {SignOffFormDetail} from '../../_models/signOffFormDetail';
import {DocumentDetail} from '../../_models/documentDetail';

const {Camera, Permissions} = Plugins;

@Component({
    selector: 'app-dashboard-qrscan',
    templateUrl: './dashboard-qrscan.page.html',
    styleUrls: ['./dashboard-qrscan.page.scss'],
})
export class DashboardQrscanPage implements OnInit {
    user: User;
    scanSub;
    isTablet = false;
    authFor = 'Check In/Out via QR';
    isLoaded = false;

    constructor(
        public navCtrl: NavController,
        private qrScanner: QRScanner,
        public accountService: AccountService,
        public apiService: ApiService,
        public utilService: UtilService,
        public sharedDataService: SharedDataService,
        public activatedRoute: ActivatedRoute
    ) {
        this.user = this.accountService.userValue;
        this.isTablet = sharedDataService.isTablet;
        if (!this.isTablet && sharedDataService.dedicatedMode) {
            this.isTablet = true;
        }

        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.authFor) {
                    this.authFor = res.authFor;
                }
            }
        });
    }

    ionViewWillEnter() {

    }

    ngOnInit() {
        const QrCodeTestingInLocalHostFor: any = null;
        if (QrCodeTestingInLocalHostFor) {
            setTimeout(() => {
                switch (QrCodeTestingInLocalHostFor) {
                    case 'document':
                        this.checkQrCode('0f75e6e3-8215-4186-92bf-ca0971b337b7');
                        break;
                    case 'form':
                        this.checkQrCode('e37f99b2-cda6-4b19-b3e6-ba37a41ffd60');
                        break;
                    case 'form2':
                        this.checkQrCode('6dadd75e-cb62-484d-a9be-deaab282761d');
                        break;
                    case 'location':
                        this.checkQrCode('e165d1a3-a0a9-4b95-a543-8049b440c56d');
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
                }
            }, 1000);
        }
    }

    ionViewWillLeave() {
        this.stopScanning();
    }

    ionViewDidEnter() {
        setTimeout(() => {
            this.isLoaded = true;
            this.scan();
        }, 1000);
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
            name: PermissionType.Camera
        });

        if (cameraPermission.state !== 'granted' && Camera && Camera.requestPermissions) {
            return await Camera.requestPermissions;
        }
        return true;
    };

    scan = () => {
        // await this.requestCameraPermission();

        // Optionally request the permission early
        this.qrScanner.prepare()
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
                    this.utilService.showAlert('Camera permission was permanently denied.', 'Permission denied!');
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    this.utilService.showAlert('Camera permission was denied.', 'Permission denied!', async () => {
                        const status1 = await this.requestCameraPermission();
                        if (status1) {
                            this.scan();
                        }
                    });
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
    };

    checkQrCode = async (qrCode) => {
        this.stopScanning();

        const loading = await this.utilService.startLoadingWithOptions();

        if (this.sharedDataService.dedicatedMode) {
            this.apiService.getUserByQRCode(qrCode).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    const userDetail: UserDetail = response.Result as UserDetail;
                    if (userDetail && userDetail.userId) {
                        this.openNextScreen(userDetail);
                    } else {
                        this.utilService.showAlert('User not found', '', () => {
                            this.scan();
                        });
                    }
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);

                this.utilService.showAlert(error.message || error, 'Not found!', () => {
                    this.scan();
                });
            });
        } else {
            this.apiService.getEntityByQRCode(qrCode).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    const locationItem: LocationItem = response.Result as LocationItem;
                    if (locationItem && locationItem.locationID && locationItem.locationName) {
                        this.openNextScreen(locationItem);
                    } else {
                        this.utilService.showAlert('Location not found', '', () => {
                            this.scan();
                        });
                    }
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);

                this.utilService.showAlert(error.message || error, 'Not found!', () => {
                    this.scan();
                });
            });
        }

    };

    openNextScreen = (detail) => {
        if (this.sharedDataService.dedicatedMode) {
            this.sharedDataService.dedicatedModeUserDetail = detail;
            switch (this.sharedDataService.dedicatedModeProcessType) {
                case EnumService.DedicatedModeProcessTypes.CheckinOut:
                    this.sharedDataService.getCheckinDetailsForDedicatedMode(this.sharedDataService.dedicatedModeUserDetail.userId, this.apiService, null, (({ischeckInPersonalQRNotAllowed}) => {
                        if (ischeckInPersonalQRNotAllowed) {
                            this.utilService.showAlert('You cannot check-in to this location with personal qr code', '', () => {
                                this.scan();
                            });
                        }
                    }));
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
        } else {
            const locationItem = detail as LocationItem;
            const getEntityIds = this.utilService.getRelevantEntityId(locationItem.locationID);
            // if user scan form or document qr code
            if (getEntityIds.FormID > 0 || getEntityIds.DocumentID > 0) {
                // if checked in to location already
                if (this.sharedDataService.checkedInPlaces && this.sharedDataService.checkedInPlaces.length > 0) {
                    if (!this.sharedDataService.currentSelectedCheckinPlace) {
                        this.sharedDataService.currentSelectedCheckinPlace = this.sharedDataService.checkedInPlaces[0];
                    }
                    if (getEntityIds.FormID > 0) {
                        this.openForm(getEntityIds.FormID);
                    } else if (getEntityIds.DocumentID > 0) {
                        this.openDocument(getEntityIds.DocumentID);
                    }
                } else {
                    this.utilService.showAlert('Please check-in first', '', () => {
                        this.scan();
                    });
                }
            } else {
                this.sharedDataService.checkInForLocation = detail;
                this.sharedDataService.checkinLocationByOption = EnumService.CheckInLocationByOptions.QrCode;
                this.sharedDataService.getCheckinDetails(this.user?.userId, this.apiService);
            }
        }
    };

    onClose() {
        this.navCtrl.back();
    }

    async openDocument(documentID) {
        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getActivitySignOffDocumentDetail(documentID).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const signOffDocumentDetail = response.Result as DocumentDetail;
                this.navCtrl.navigateForward(['/document-openchoice'], {
                    queryParams: {document: JSON.stringify(signOffDocumentDetail)}
                });
            }
        }, (error) => {
            this.utilService.showAlert(error.message || error, 'Not found!', () => {
                this.scan();
            });
            this.utilService.hideLoadingFor(loading);
        });
    }

    async openForm(formID) {
        const loading = await this.utilService.startLoadingWithOptions();
        const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
        this.apiService.getSignOffFormDetail(this.user?.userId, formID, place?.locationID, place?.projectID, place?.inventoryItemID).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.sharedDataService.viewFormFor = EnumService.ViewFormForType.CurrentCheckin;
                this.sharedDataService.signOffFormDetail = response.Result as SignOffFormDetail;
                this.navCtrl.navigateForward(['/form-cover']);
            }
        }, (error) => {
            this.utilService.showAlert(error.message || error, 'Not found!', () => {
                this.scan();
            });
            this.utilService.hideLoadingFor(loading);
        });
    }
}
