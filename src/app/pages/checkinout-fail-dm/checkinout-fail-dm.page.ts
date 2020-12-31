import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-fail-dm',
    templateUrl: './checkinout-fail-dm.page.html',
    styleUrls: ['./checkinout-fail-dm.page.scss'],
})
export class CheckinoutFailDmPage implements OnInit {

    pageTitle = '';
    title = '';
    errorTitle = '';
    errorMessage = '';

    constructor(
        public sharedDataService: SharedDataService,
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.pageTitle) {
                    this.pageTitle = res.pageTitle;
                }
                if (res.title) {
                    this.title = res.title;
                }
                if (res.errorTitle) {
                    this.errorTitle = res.errorTitle;
                }

                if (res.errorMessage) {
                    this.errorMessage = res.errorMessage;
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
