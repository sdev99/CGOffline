import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkin-induction-form',
    templateUrl: './checkin-induction-form.page.html',
    styleUrls: ['./checkin-induction-form.page.scss'],
})
export class CheckinInductionFormPage implements OnInit {

    list = DemoDataService.inductionForm.clone().concat();
    locationDetail;

    errorMessage = '';
    isSubmitted = false;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
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

    onBack() {
        this.navCtrl.back();
    }

    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateRoot('dashboard-dm');
        } else {
            this.navCtrl.navigateRoot('tabs/dashboard');
        }
    }


    onContinue() {
        this.isSubmitted = true;
        let isValid = true;
        let invalidCount = 0;
        this.list.map((item, key) => {
            if (!this.isValid(key, item)) {
                isValid = false;
                invalidCount++;
            }
        });

        if (isValid) {
            this.navCtrl.navigateForward(['/checkin-induction-va'], {
                queryParams: {
                    locationDetail: JSON.stringify(this.locationDetail)
                }
            });
        } else {
            this.errorMessage = invalidCount + ' required questions are not answered yet';
        }
    }

    previous() {

    }

    next() {

    }

    isValid(index, section) {
        let isValid = true;
        if (this.isSubmitted && section.required) {
            isValid = false;
            if (section.answer) {
                isValid = true;
            }
        }
        return isValid;
    }

}
