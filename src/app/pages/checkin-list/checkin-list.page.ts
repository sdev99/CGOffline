import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkin-list',
    templateUrl: './checkin-list.page.html',
    styleUrls: ['./checkin-list.page.scss'],
})
export class CheckinListPage implements OnInit {

    locations = [{name: 'Demo Location 1'}, {name: 'Demo Location 2'}, {name: 'Demo Location 2'}];

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.navigateBack(['/tabs/tab1']);
    }

    openLocation(location) {
        this.navCtrl.navigateForward(['/checkin-induction']);
    }

}
