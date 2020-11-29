import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {InductionItem} from '../../_models/inductionItem';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-checkin-induction-form',
    templateUrl: './checkin-induction-form.page.html',
    styleUrls: ['./checkin-induction-form.page.scss'],
})
export class CheckinInductionFormPage implements OnInit {

    list = DemoDataService.inductionForm.clone().concat();
    errorMessage = '';
    isSubmitted = false;

    inductionContentItemIndex = 0;
    inductionItem: InductionItem;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
        public apiService: ApiService,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                this.inductionContentItemIndex = params.inductionContentItemIndex;
                if (sharedDataService.checkInDetail
                    && sharedDataService.checkInDetail.checkInInductionItems
                    && sharedDataService.checkInDetail.checkInInductionItems.length > this.inductionContentItemIndex) {
                    this.inductionItem = sharedDataService.checkInDetail.checkInInductionItems[this.inductionContentItemIndex];
                }
            }
        });
    }

    ngOnInit() {
        this.getFormDetails();
    }

    onBack() {
        this.navCtrl.back();
    }

    async getFormDetails() {
        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getActivitySignOffFormDetail(this.inductionItem.formID).subscribe((response) => {
            this.utilService.hideLoadingFor(loading);
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
        });
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
            this.sharedDataService.inductionNavigationProcess(this.inductionContentItemIndex);
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
