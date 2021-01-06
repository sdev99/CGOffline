import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-checkin-fail',
    templateUrl: './checkin-fail.page.html',
    styleUrls: ['./checkin-fail.page.scss'],
})
export class CheckinFailPage implements OnInit {
    title = '';
    errorTitle = '';
    errorMessage = '';
    nextPage = '/tabs/dashboard';

    constructor(
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.title) {
                    this.title = res.title;
                }
                if (res.errorTitle) {
                    this.errorTitle = res.errorTitle;
                }
                if (res.errorMessage) {
                    this.errorMessage = res.errorMessage;
                }
                if (res.nextPage) {
                    this.nextPage = res.nextPage;
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
        this.navCtrl.navigateBack([this.nextPage], {replaceUrl: true});
    }
}
