import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {DemoDataService} from '../../services/demo-data.service';
import {ApiService} from '../../services/api.service';
import {AccountService} from '../../services/account.service';
import {Response, User} from '../../_models';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';
import {CheckinDetail} from '../../_models/checkinDetail';
import {LocationItem} from '../../_models/locationItem';

@Component({
    selector: 'app-checkinout-confirm',
    templateUrl: './checkinout-confirm.page.html',
    styleUrls: ['./checkinout-confirm.page.scss'],
})
export class CheckinoutConfirmPage implements OnInit {
    user: User;

    title = 'You are checking out';
    subtitle = 'Demo Location 1';
    buttonTitle = 'Check Out Now';
    headerTitle = 'Check Out';

    nextPageData;
    nextPagePath;

    checkInOutForLocation: LocationItem;
    checkinDetail: CheckinDetail;

    constructor(
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute,
        public apiService: ApiService,
        public sharedDataService: SharedDataService,
        public accountService: AccountService,
        public utilService: UtilService,
    ) {
        this.checkInOutForLocation = sharedDataService.checkInOutForLocation;

        this.user = this.accountService.userValue;
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
        this.getCheckinDetails();
    }

    onClose() {
        this.navCtrl.back();
    }

    getCheckinDetails = async () => {
        if (this.user && this.checkInOutForLocation) {
            const loading = await this.utilService.startLoadingWithOptions();
            this.apiService.getCheckInDetails(this.user.userId, this.checkInOutForLocation.locationID).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.checkinDetail = response.Result as CheckinDetail;
                    this.sharedDataService.checkInPostData.projectID = this.checkinDetail.checkInEntityDetail.projectID;
                    this.sharedDataService.checkInPostData.inventoryItemID = this.checkinDetail.checkInEntityDetail.inventoryItemID;
                    this.sharedDataService.checkInPostData.locationID = this.checkinDetail.checkInEntityDetail.locationID;
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);
            });
        }
    };

    onContinue() {
        if (this.checkinDetail.checkInEntityDetail.processInduction && this.checkinDetail.checkInInductionItems && this.checkinDetail.checkInInductionItems.length > 0) {
            this.sharedDataService.checkInDetail = this.checkinDetail;
            this.navCtrl.navigateForward(['checkin-induction']);
        } else if (this.checkinDetail.checkInEntityDetail.checkInPersonalPhoto) {
            this.sharedDataService.checkInDetail = this.checkinDetail;
            this.navCtrl.navigateForward(['signoff-photo']);
        } else {
            this.sharedDataService.submitInductionCheckInData(this.apiService);
        }
    }

}
