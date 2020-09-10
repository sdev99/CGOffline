import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    activityList = [
        {
            status: 'overdue',
            time: 'Last week',
            name: 'Audit Demo Location 1',
        },
        {
            status: 'overdue',
            time: 'Last week',
            name: 'Audit Demo Location 1',
        },
        {
            status: 'overdue',
            time: 'Last week',
            name: 'High priority and overdue activity goes here',
        },
        {
            status: 'rejected',
            time: 'Yesterday',
            name: 'High priority activity goes here',
        },
        {
            status: 'normal',
            time: 'Today',
            name: 'Regular activity title goes here on a single line of...',
        },
        {
            status: 'normal',
            time: 'Today',
            name: 'Just a simple overdue activity title goes here',
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
