import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-identityconfirm-dm',
    templateUrl: './checkinout-identityconfirm-dm.page.html',
    styleUrls: ['./checkinout-identityconfirm-dm.page.scss'],
})
export class CheckinoutIdentityconfirmDmPage implements OnInit {
    photoCaptured = './assets/images/demo-profile.svg';
    userName;
    authFor = 'Check In/Out by Name';

    constructor(
        public navController: NavController,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.name) {
                    this.userName = res.name;
                    this.authFor = res.authFor;
                }
            }
        });
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
        if (this.authFor === 'Authentication') {
            this.navController.navigateForward('/form-cover-dm');
        } else {
            this.navController.navigateForward('/checkin-induction');
        }
    }

    thisisNotMe() {
        this.navController.navigateForward('checkinout-photoidentity-dm', {
            queryParams: {
                authFor: this.authFor,
            }
        });
    }

}
