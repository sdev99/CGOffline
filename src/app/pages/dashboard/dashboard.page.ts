import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../services/api.service';
import {User} from '../../_models';
import {AccountService} from '../../services/account.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    user: User;
    activityList = [];

    constructor(
        public navCtrl: NavController,
        private apiService: ApiService,
        private accountService: AccountService,
    ) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.demoDataSetup();
        this.apiService.getGlobalDirectories(this.user.companyFolderName);
    }

    demoDataSetup() {
        setTimeout(() => {
            this.activityList = DemoDataService.activityList.clone();
        }, 6000);
    }

    openActivityDetail(activity) {
        this.navCtrl.navigateForward(['/activity-detail'], {
            queryParams: {
                activity: JSON.stringify(activity),
            }
        });
    }

}
