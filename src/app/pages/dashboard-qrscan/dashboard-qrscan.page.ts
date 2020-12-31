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
                    this.sharedDataService.getCheckinDetailsForDedicatedMode(this.sharedDataService.dedicatedModeUserDetail.userId, this.apiService);
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
            this.sharedDataService.checkInForLocation = detail;
            this.sharedDataService.getCheckinDetails(this.user.userId, this.apiService);
        }
    };

    onClose() {
        this.navCtrl.back();
    }
}
