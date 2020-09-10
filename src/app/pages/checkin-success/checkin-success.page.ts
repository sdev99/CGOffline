import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkin-success',
    templateUrl: './checkin-success.page.html',
    styleUrls: ['./checkin-success.page.scss'],
})
export class CheckinSuccessPage implements OnInit {

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
        this.navCtrl.navigateBack(['/tabs/tab1']);
    }

}
