import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-checkinout-confirm',
    templateUrl: './checkinout-confirm.page.html',
    styleUrls: ['./checkinout-confirm.page.scss'],
})
export class CheckinoutConfirmPage implements OnInit {
    title = 'You are checking out';
    subtitle = 'Demo Location 1';
    buttonTitle = 'Check Out Now';
    headerTitle = 'Check Out';

    nextPageData;
    nextPagePath;

    constructor(
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.headerTitle) {
                    this.headerTitle = res.headerTitle;
                }
                if (res.title) {
                    this.title = res.title;
                }
                if (res.subtitle) {
                    this.subtitle = res.subtitle;
                }

                if (res.buttonTitle) {
                    this.buttonTitle = res.buttonTitle;
                }

                if (res.nextPageData) {
                    this.nextPageData = JSON.parse(res.nextPageData);
                }

                if (res.nextPagePath) {
                    this.nextPagePath = res.nextPagePath;
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
        if (this.nextPagePath) {
            this.navCtrl.navigateForward([this.nextPagePath], {
                queryParams: {
                    ...this.nextPageData
                }
            });
        } else {
            this.navCtrl.navigateForward(['/checkin-success'], {
                queryParams: {
                    type: 'checkout',
                    message: 'You have now checked out'
                }
            });
        }
    }

}
