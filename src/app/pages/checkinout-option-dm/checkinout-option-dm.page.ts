import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkinout-option-dm',
    templateUrl: './checkinout-option-dm.page.html',
    styleUrls: ['./checkinout-option-dm.page.scss'],
})
export class CheckinoutOptionDmPage implements OnInit {

    constructor(
        public navController: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.back();
    }

    checkInOutName() {
        this.navController.navigateForward('checkinout-name-dm');
    }

    checkInOutQR() {
        this.navController.navigateForward('dashboard-qrscan');
    }

    checkInOutGuest() {
        this.navController.navigateForward('checkinout-guest-dm');
    }
}
