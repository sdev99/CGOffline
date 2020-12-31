import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {InductionItem} from '../../_models/inductionItem';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';

@Component({
    selector: 'app-checkin-induction-form',
    templateUrl: './checkin-induction-form.page.html',
    styleUrls: ['./checkin-induction-form.page.scss'],
})
export class CheckinInductionFormPage implements OnInit {
    user: User;

    list = DemoDataService.inductionForm.clone().concat();
    errorMessage = '';
    isSubmitted = false;

    inductionItem: InductionItem;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
        public apiService: ApiService,
        public accountService: AccountService,
    ) {
        this.user = accountService.userValue;

        this.route.queryParams.subscribe((parameters) => {
            const inductionContentItemIndex = parameters.inductionContentItemIndex;
            if (this.sharedDataService.checkInDetail?.checkInInductionItems?.length > inductionContentItemIndex) {
                this.inductionItem = this.sharedDataService.checkInDetail?.checkInInductionItems[inductionContentItemIndex];
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
        const entityIds = this.utilService.getRelevantEntityId(this.sharedDataService.checkInForLocation?.locationID);
        this.apiService.getSignOffFormDetail(this.user.userId, this.inductionItem.formID, entityIds.LocationID, entityIds.ProjectID, entityIds.InventoryID).subscribe((response) => {
            this.utilService.hideLoadingFor(loading);
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateRoot('dashboard-dm');
        } else {
            this.navCtrl.navigateBack('/checkinout-confirm');
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
            let userId;
            if (this.sharedDataService.dedicatedMode) {
                userId = this.sharedDataService.dedicatedModeUserDetail.userId;
            } else {
                userId = this.user.userId;
            }
            this.sharedDataService.inductionNavigationProcess(userId, this.sharedDataService.inductionContentItemIndex);
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
