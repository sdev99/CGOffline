import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkinout-alreadycheckin-dm',
    templateUrl: './checkinout-alreadycheckin-dm.page.html',
    styleUrls: ['./checkinout-alreadycheckin-dm.page.scss'],
})
export class CheckinoutAlreadycheckinDmPage implements OnInit {
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
        this.navController.navigateForward('checkinout-photoidentity-dm');
    }

}
