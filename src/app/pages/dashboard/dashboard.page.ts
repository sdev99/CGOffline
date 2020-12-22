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

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
    user: User;
    activityList: Array<ActivityListItem>;
    activityOverviewData;

    constructor(
        public navCtrl: NavController,
        private apiService: ApiService,
        private utilService: UtilService,
        private accountService: AccountService,
        private sharedDataService: SharedDataService,
        private observablesService: ObservablesService,
    ) {
        this.user = this.accountService.userValue;
    }

    async ngOnInit() {
        this.apiService.getGlobalDirectories(this.user.companyFolderName).subscribe((response) => {
            if (response) {
                this.sharedDataService.globalDirectories = response as GlobalDirectory;
                localStorage.setItem(EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES, JSON.stringify(response));
            }
        }, (error) => {

        });

        const loading = await this.utilService.startLoadingWithOptions();

        this.getActivityList(() => {
            this.utilService.hideLoadingFor(loading);
        });

        this.observablesService.getObservable(EnumService.ObserverKeys.ACTIVITY_COMPLETED).subscribe(() => {
            this.getActivityList();
        });
    }

    ngOnDestroy(): void {
        this.observablesService.removeObservable(EnumService.ObserverKeys.ACTIVITY_COMPLETED);
    }


    getActivityList = (callBack = null) => {
        this.apiService.getActivityList(this.user.userId).subscribe((response: Response) => {
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
        this.getActivityList(() => {
            event.target.complete();
        });
    }

    openActivityDetail(activity: ActivityListItem) {
        this.sharedDataService.currentActivityOpen = activity;
        this.navCtrl.navigateForward(['/activity-detail']);
    }

}
