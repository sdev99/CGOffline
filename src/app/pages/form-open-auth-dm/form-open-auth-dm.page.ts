import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-form-open-auth-dm',
    templateUrl: './form-open-auth-dm.page.html',
    styleUrls: ['./form-open-auth-dm.page.scss'],
})
export class FormOpenAuthDmPage implements OnInit {
    queryParam;

    constructor(
        public navController: NavController,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                this.queryParam = res;
            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.back();
    }

    checkInOutName() {
        this.navController.navigateForward('checkinout-name-dm', {
            queryParams: {
                authFor: 'Authentication'
            }
        });
    }

    checkInOutQR() {
        this.navController.navigateForward('dashboard-qrscan', {
            queryParams: {
                authFor: 'Authentication'
            }
        });
    }

}
