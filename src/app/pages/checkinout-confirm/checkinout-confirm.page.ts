import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
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

    title = '';
    subtitle = '';
    buttonTitle = '';
    headerTitle = '';

    locationCheckType = EnumService.ConfirmForCheckType.CheckIn;

    nextPageData;
    nextPagePath;

    checkInForLocation: LocationItem;
    checkinDetail: CheckinDetail;

    checkOutForCheckedInDetail: CheckedInDetailItem;

    constructor(
        public router: Router,
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
            this.checkinDetail = this.sharedDataService.checkInDetail;
            this.checkInForLocation = this.sharedDataService.checkInForLocation;
            this.sharedDataService.inductionContentItemIndex = 0;
        } else if (this.locationCheckType === EnumService.ConfirmForCheckType.CheckOut) {
            this.checkOutForCheckedInDetail = this.sharedDataService.checkOutForCheckedInDetail;
        }
    }

    onClose() {
        if (this.locationCheckType === EnumService.ConfirmForCheckType.CheckIn) {
            if (this.sharedDataService.checkinLocationByOption === EnumService.CheckInLocationByOptions.QrCode) {
                this.navCtrl.navigateBack('/tabs/dashboard', {replaceUrl: true});
            } else {
                this.navCtrl.navigateBack('/tabs/dashboard/checkin-list', {replaceUrl: true});
            }
        } else if (this.locationCheckType === EnumService.ConfirmForCheckType.CheckOut) {
            this.navCtrl.navigateBack('/tabs/dashboard');
        }
    }

    async onContinue() {
        if (this.locationCheckType === EnumService.ConfirmForCheckType.CheckOut) {
            this.utilService.presentLoadingWithOptions();

            this.apiService.insertCheckOutDetails({
                userCheckInDetailID: this.checkOutForCheckedInDetail.userCheckInDetailID,
                userId: this.user?.userId,
                checkOutLatitude: this.sharedDataService.myCurrentGeoLocation?.coords?.latitude,
                checkOutLongitude: this.sharedDataService.myCurrentGeoLocation?.coords?.longitude,
            }).subscribe((response: Response) => {
                this.utilService.hideLoading();
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
                this.utilService.hideLoading();
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
                this.navCtrl.navigateForward(['checkin-induction']);
            } else if (this.checkinDetail.checkInEntityDetail.checkInPersonalPhoto) {
                this.sharedDataService.signOffFor = EnumService.SignOffType.INDUCTION;
                this.navCtrl.navigateForward('/signoff-photo');
            } else {
                this.sharedDataService.submitInductionCheckInData(this.apiService);
            }
        }
    }

}
