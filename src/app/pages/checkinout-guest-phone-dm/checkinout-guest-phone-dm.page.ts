import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-guest-phone-dm',
    templateUrl: './checkinout-guest-phone-dm.page.html',
    styleUrls: ['./checkinout-guest-phone-dm.page.scss'],
})
export class CheckinoutGuestPhoneDmPage implements OnInit {
    phoneNumber;
    errorMessage = '';


    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
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
        this.errorMessage = '';
        if (this.phoneNumber) {
            if (this.phoneNumber.toString() === '1111111111') {
                this.errorMessage = 'Mobile number is already used on another device.';
            } else {
                if (this.phoneNumber.toString() === '0123456789') {
                    this.navController.navigateForward('checkinout-identityconfirm-dm', {
                        queryParams: {
                            userName: 'Guest User ',
                            authFor: 'Check In/Out as Guest'
                        }
                    });
                } else {
                    this.navController.navigateForward('checkinout-guest-dm');
                }
            }
        }
    }


}
