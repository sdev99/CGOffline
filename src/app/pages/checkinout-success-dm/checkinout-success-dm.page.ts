import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-success-dm',
    templateUrl: './checkinout-success-dm.page.html',
    styleUrls: ['./checkinout-success-dm.page.scss'],
})
export class CheckinoutSuccessDmPage implements OnInit {


    message = 'You have now checked-in';
    nextPage = 'dashboard-dm';

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.message) {
                    this.message = res.message;
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
        this.navCtrl.navigateBack([this.nextPage]);
    }

}
