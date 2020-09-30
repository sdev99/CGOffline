import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-dashboard-qrscan',
    templateUrl: './dashboard-qrscan.page.html',
    styleUrls: ['./dashboard-qrscan.page.scss'],
})
export class DashboardQrscanPage implements OnInit {
    scanSub;

    constructor(
        public navCtrl: NavController,
        private qrScanner: QRScanner
    ) {
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

                            const location = DemoDataService.locations[0];
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

    onClose() {
        this.navCtrl.back();
    }
}
