import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-checkinout-fail-dm',
    templateUrl: './checkinout-fail-dm.page.html',
    styleUrls: ['./checkinout-fail-dm.page.scss'],
})
export class CheckinoutFailDmPage implements OnInit {

    failTitle = '';
    failSubTitle = '';
    failMessage = '';

    constructor(
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.failTitle) {
                    this.failTitle = res.failTitle;
                }
                if (res.failSubTitle) {
                    this.failSubTitle = res.failSubTitle;
                }

                if (res.failMessage) {
                    this.failMessage = res.failMessage;
                }

            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.navCtrl.navigateRoot(['/dashboard-dm']);
    }


}
