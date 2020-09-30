import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    activityList = [];

    constructor(
        public navCtrl: NavController,
    ) {

    }

    ngOnInit() {
        this.demoDataSetup();
    }

    demoDataSetup() {
        setTimeout(() => {
            this.activityList = DemoDataService.activityList;
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
