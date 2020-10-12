import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkinout-guest-phone-dm',
    templateUrl: './checkinout-guest-phone-dm.page.html',
    styleUrls: ['./checkinout-guest-phone-dm.page.scss'],
})
export class CheckinoutGuestPhoneDmPage implements OnInit {
    phoneNumber;


    constructor(
        public navController: NavController,
    ) {
    }


    ngOnInit() {

    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }


    onContinue() {
        if (this.phoneNumber) {
            this.navController.navigateForward('checkinout-alreadycheckin-dm');
        }
    }


}
