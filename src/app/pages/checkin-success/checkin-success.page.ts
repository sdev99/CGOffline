import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-checkin-success',
    templateUrl: './checkin-success.page.html',
    styleUrls: ['./checkin-success.page.scss'],
})
export class CheckinSuccessPage implements OnInit {

    message = 'You have now checked-in';

    constructor(
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res && res.message) {
                this.message = res.message;
            }
        });
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
