import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';

@Component({
    selector: 'app-dashboard-qrscan',
    templateUrl: './dashboard-qrscan.page.html',
    styleUrls: ['./dashboard-qrscan.page.scss'],
})
export class DashboardQrscanPage implements OnInit {
    constructor(
        public navCtrl: NavController,
        private qrScanner: QRScanner
    ) {
    }

    ngOnInit() {
        this.scan();
    }

    scan = () => {
// Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted


                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);
                        alert(text);
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

    onContinue() {
        this.navCtrl.navigateBack(['/tabs/tab1']);
    }

}
