import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-checkin-induction-form',
    templateUrl: './checkin-induction-form.page.html',
    styleUrls: ['./checkin-induction-form.page.scss'],
})
export class CheckinInductionFormPage implements OnInit {

    list = DemoDataService.inductionForm.clone();
    locationDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.locationDetail) {
                    this.locationDetail = JSON.parse(params.locationDetail);
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
        this.navCtrl.navigateForward(['/checkin-induction-va'], {
            queryParams: {
                locationDetail: JSON.stringify(this.locationDetail)
            }
        });
    }


    previous() {

    }

    next() {

    }

}
