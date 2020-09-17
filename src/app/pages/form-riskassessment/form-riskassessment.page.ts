import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-form-riskassessment',
    templateUrl: './form-riskassessment.page.html',
    styleUrls: ['./form-riskassessment.page.scss'],
})
export class FormRiskassessmentPage implements OnInit {
    list = DemoDataService.activityCustomForm;
    locations = DemoDataService.locations;

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    previous() {

    }

    next() {

    }

    onContinue() {
        this.navCtrl.navigateForward(['/tabs/dashboard']);
    }

}
