import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkin-fail',
    templateUrl: './checkin-fail.page.html',
    styleUrls: ['./checkin-fail.page.scss'],
})
export class CheckinFailPage implements OnInit {

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.navCtrl.navigateBack(['/tabs/dashboard']);
    }
}
