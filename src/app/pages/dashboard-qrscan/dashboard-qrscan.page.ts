import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {Response} from '../../_models';
import {PermissionType, Plugins} from '@capacitor/core';
import {LocationItem} from '../../_models/locationItem';

const {Camera, Permissions} = Plugins;

@Component({
    selector: 'app-dashboard-qrscan',
    templateUrl: './dashboard-qrscan.page.html',
    styleUrls: ['./dashboard-qrscan.page.scss'],
})
export class DashboardQrscanPage implements OnInit {
    scanSub;
    dedicatedMode = true;
    isTablet = false;
    authFor = 'Check In/Out via QR';

    constructor(
        public navCtrl: NavController,
        private qrScanner: QRScanner,
        public apiService: ApiService,
        public utilService: UtilService,
        public sharedDataService: SharedDataService,
        public activatedRoute: ActivatedRoute
    ) {
        this.dedicatedMode = sharedDataService.dedicatedMode;
        this.isTablet = sharedDataService.isTablet;
        if (!this.isTablet && this.dedicatedMode) {
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
        if (this.scanSub) {
            this.scanSub.unsubscribe(); // stop scanning
            this.qrScanner.hide(); // hide camera preview
        }
        this.qrScanner.destroy();
    }

    ionViewDidEnter() {
        this.scan();
    }

    requestCameraPermission = async () => {
        const locationPermission = await Permissions.query({
            name: PermissionType.Camera
        });

        if (locationPermission.state !== 'granted') {
            return await Camera.requestPermissions();
        }
        return true;
    };

    scan = async () => {
        await this.requestCameraPermission();

// Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    // start scanning
                    this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);
                        if (text) {
                            this.qrScanner.hide(); // hide camera preview
                            this.scanSub.unsubscribe(); // stop scanning
                            this.qrScanner.destroy();
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
        const loading = await this.utilService.startLoadingWithOptions();

        this.apiService.getEntityByQRCode(qrCode).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);

            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                if (response.Result && response.Result.entityID && response.Result.entityName) {
                    const locationItem: LocationItem = {
                        locationID: response.Result.entityID,
                        locationName: response.Result.entityName,
                    };
                    this.openNextScreen(locationItem);
                } else {
                    this.openNextScreen(response.Result);
                }
            } else {
                this.utilService.showAlert(response.Message, 'Not found!', () => {
                    this.scan();
                });
            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);

            this.utilService.showAlert(error.message || error, 'Not found!', () => {
                this.scan();
            });
        });
    };

    openNextScreen = (location) => {

        if (this.dedicatedMode) {
            if (this.sharedDataService.signOffFor === EnumService.SignOffType.WORK_PERMIT) {
                this.navCtrl.navigateForward('/form-cover-dm');
            } else {
                this.navCtrl.navigateForward(['/checkinout-confirm'], {
                    queryParams: {
                        headerTitle: 'Check In',
                        title: 'You are checking in',
                        subtitle: location.name,
                        buttonTitle: 'Check In Now',
                        nextPageData: JSON.stringify({
                            locationDetail: JSON.stringify(location)
                        }),
                        nextPagePath: '/checkin-induction',
                        locationCheckType: EnumService.ConfirmForCheckType.CheckIn
                    }
                });
            }
        } else {
            this.sharedDataService.checkInForLocation = location;
            this.navCtrl.navigateForward(['/checkinout-confirm'], {
                queryParams: {
                    headerTitle: 'Check In',
                    title: 'You are checking in',
                    subtitle: location.locationName,
                    buttonTitle: 'Check In Now',
                    nextPageData: JSON.stringify({
                        locationDetail: JSON.stringify(location)
                    }),
                    nextPagePath: '/checkin-induction',
                    locationCheckType: EnumService.ConfirmForCheckType.CheckIn
                }
            });
        }
    };

    onClose() {
        this.navCtrl.back();
    }
}
