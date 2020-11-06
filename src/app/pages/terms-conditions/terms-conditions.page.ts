import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../services/api.service';
import {EnumService} from '../../services/enum.service';
import {Response} from '../../_models/response';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-terms-conditions',
    templateUrl: './terms-conditions.page.html',
    styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {


    termsConditionsText;

    loading = false;

    constructor(
        public navCtrl: NavController,
        public apiService: ApiService,
        public utilService: UtilService,
    ) {

    }

    ngOnInit() {
        this.loading = true;
        this.apiService.getTermsOfServices().subscribe((data: Response) => {
            this.loading = false;
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.termsConditionsText = data.Result;
            }
        }, error => {
            this.loading = false;
        });
    }

    onClose() {
        this.navCtrl.back();
    }

}
