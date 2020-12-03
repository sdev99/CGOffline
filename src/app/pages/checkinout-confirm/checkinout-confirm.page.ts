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
import {CheckedInDetailItem} from '../../_models/checkedInDetailItem';
import {ObservablesService} from '../../services/observables.service';

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

    locationCheckType = EnumService.ConfirmForCheckType.CheckIn;

    nextPageData;
    nextPagePath;

    checkInForLocation: LocationItem;
    checkinDetail: CheckinDetail;

    checkOutForCheckedInDetail: CheckedInDetailItem;

    constructor(
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute,
        public apiService: ApiService,
        public sharedDataService: SharedDataService,
        public accountService: AccountService,
        public utilService: UtilService,
        private observablesService: ObservablesService,
    ) {


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

                if (res.locationCheckType) {
                    this.locationCheckType = res.locationCheckType;
                }

            }
        });
    }

    ngOnInit() {
        if (this.locationCheckType === EnumService.ConfirmForCheckType.CheckIn) {
            this.checkInForLocation = this.sharedDataService.checkInForLocation;
            this.getCheckinDetails();
        } else if (this.locationCheckType === EnumService.ConfirmForCheckType.CheckOut) {
            this.checkOutForCheckedInDetail = this.sharedDataService.checkOutForCheckedInDetail;
        }
    }

    onClose() {
        this.navCtrl.back();
    }

    getCheckinDetails = async () => {
        if (this.user && this.checkInForLocation) {
            const loading = await this.utilService.startLoadingWithOptions();
            this.apiService.getCheckInDetails(this.user.userId, this.checkInForLocation.locationID).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.checkinDetail = response.Result as CheckinDetail;
                    this.sharedDataService.checkInPostData.projectID = this.checkinDetail.checkInEntityDetail.projectID;
                    this.sharedDataService.checkInPostData.inventoryItemID = this.checkinDetail.checkInEntityDetail.inventoryItemID;
                    this.sharedDataService.checkInPostData.locationID = this.checkinDetail.checkInEntityDetail.locationID;
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);
                this.utilService.showAlert(error.message, '', () => {
                    if (this.checkIfSimultaneousCheckIn(error.message)) {
                        this.onClose();
                    }
                });

            });
        }
    };

    checkIfSimultaneousCheckIn = (error) => {
        if (error.indexOf('SimultaneousCheckIn') !== -1) {
            return true;
        }
        return false;
    };

    async onContinue() {
        if (this.locationCheckType === EnumService.ConfirmForCheckType.CheckOut) {
            const loading = await this.utilService.startLoadingWithOptions();
            this.apiService.insertCheckOutDetails({
                userCheckInDetailID: this.checkOutForCheckedInDetail.userCheckInDetailID,
                userId: this.user.userId,
                checkOutLatitude: this.sharedDataService.myCurrentGeoLocation?.coords?.latitude,
                checkOutLongitude: this.sharedDataService.myCurrentGeoLocation?.coords?.longitude,
            }).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.observablesService.publishSomeData(EnumService.ObserverKeys.NEW_CHECKED_IN, true);

                    this.navCtrl.navigateForward(['/checkin-success'], {
                        queryParams: {
                            message: 'You have now checked out',
                            nextPage: '/tabs/dashboard',
                            actionBtnTitle: 'Continue'
                        }
                    });
                } else {
                    this.navCtrl.navigateForward(['/checkin-fail'], {
                        queryParams: {
                            title: 'You cannot check out',
                            errorMessage: response.Message,
                            nextPage: '/tabs/dashboard'
                        }
                    });
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {
                        title: 'You cannot check out',
                        errorMessage: error.message || error,
                        nextPage: '/tabs/dashboard'
                    }
                });
            });
        } else {
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

}
