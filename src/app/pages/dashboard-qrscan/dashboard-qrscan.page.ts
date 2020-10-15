import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';

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

    scan = () => {
// Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted

                    // start scanning
                    this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);
                        // alert(text);

                        if (text) {
                            this.qrScanner.hide(); // hide camera preview
                            this.scanSub.unsubscribe(); // stop scanning
                            this.qrScanner.destroy();
                            this.openNextScreen();
                        }

                        // this.qrScanner.hide(); // hide camera preview
                        // scanSub.unsubscribe(); // stop scanning
                    });
                    this.qrScanner.show();

                } else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
    };

    openNextScreen = () => {
        const location = DemoDataService.locations[0];
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
                        nextPagePath: '/checkin-induction'
                    }
                });
            }
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
                    nextPagePath: '/checkin-induction'
                }
            });
        }
    };

    onClose() {
        this.navCtrl.back();
    }
}
