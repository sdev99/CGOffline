import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-checkin-list',
    templateUrl: './checkin-list.page.html',
    styleUrls: ['./checkin-list.page.scss'],
})
export class CheckinListPage implements OnInit {

    locations = DemoDataService.locations;

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    openLocation(location) {
        this.navCtrl.navigateForward(['/checkin-induction'], {
            queryParams: {
                locationDetail: JSON.stringify(location)
            }
        });
    }

}
