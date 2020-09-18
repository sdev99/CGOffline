import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-terms-conditions',
    templateUrl: './terms-conditions.page.html',
    styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {


    termsConditionsText = DemoDataService.termsConditionsText;


    constructor(
        public navCtrl: NavController,
    ) {

    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }


}
