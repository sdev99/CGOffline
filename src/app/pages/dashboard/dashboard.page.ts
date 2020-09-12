import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    activityList = DemoDataService.activityList;

    constructor() {

    }

    ngOnInit() {
    }

}
