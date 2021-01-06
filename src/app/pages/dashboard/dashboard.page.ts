import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../services/api.service';
import {Response, User} from '../../_models';
import {AccountService} from '../../services/account.service';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {GlobalDirectory} from '../../_models/globalDirectory';
import {UtilService} from '../../services/util.service';
import {ActivityListItem} from '../../_models/activityListItem';
import {ObservablesService} from '../../services/observables.service';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
    user: User;
    activityList: Array<ActivityListItem>;
    activityOverviewData;
    isRefreshing = false;

    constructor(
        public navCtrl: NavController,
        private apiService: ApiService,
        public utilService: UtilService,
        private accountService: AccountService,
        public sharedDataService: SharedDataService,
        private observablesService: ObservablesService,
    ) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        if (!this.sharedDataService.dedicatedMode) {
            this.apiService.getGlobalDirectories(this.user?.companyFolderName).subscribe((response) => {
                if (response) {
                    this.sharedDataService.globalDirectories = response as GlobalDirectory;
                    localStorage.setItem(EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES, JSON.stringify(response));
                }
            }, (error) => {

            });

            this.utilService.presentLoadingWithOptions();

            this.getActivityList(() => {
                this.utilService.hideLoading();
            });

            this.observablesService.getObservable(EnumService.ObserverKeys.ACTIVITY_COMPLETED).subscribe(() => {
                this.getActivityList();
            });
        }
        this.sharedDataService.currentLanguageId = this.sharedDataService?.userProfile?.mobileAppLanguageID;

    }

    ionViewWillEnter() {
        this.accountService.checkForMobileLanguageId();
    }

    ngOnDestroy(): void {
        this.observablesService.removeObservable(EnumService.ObserverKeys.ACTIVITY_COMPLETED);
    }


    getActivityList = (callBack = null) => {
        this.apiService.getActivityList(this.user?.userId).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const result = response.Result;
                if (result) {
                    this.activityList = result.activityList;
                    this.activityOverviewData = result.activityOverviewData;
                }
            }
            UtilService.fireCallBack(callBack);
        }, (error) => {
            this.activityList = null;
            this.activityOverviewData = null;
            UtilService.fireCallBack(callBack);
        });
    };


    doRefresh(event) {
        this.isRefreshing = true;
        this.getActivityList(() => {
            this.isRefreshing = false;
            event.target.complete();
        });
    }

    openActivityDetail(activity: ActivityListItem) {
        this.sharedDataService.currentActivityOpen = activity;
        this.navCtrl.navigateForward(['/activity-detail']);
    }

}
