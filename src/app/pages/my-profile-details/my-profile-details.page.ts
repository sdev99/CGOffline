import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UtilService} from '../../services/util.service';
import {DemoDataService} from '../../services/demo-data.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-my-profile-details',
    templateUrl: './my-profile-details.page.html',
    styleUrls: ['./my-profile-details.page.scss'],
})
export class MyProfileDetailsPage implements OnInit {
    user;
    offsetData;
    languageData;

    constructor(
        public navCtrl: NavController,
        private sharedDataService: SharedDataService
    ) {
        const userData = localStorage.getItem('USER_DATA');
        if (userData) {
            this.user = JSON.parse(userData);
            this.offsetData = UtilService.findObj(DemoDataService.timeZones, 'offset', this.user.timeZone);
            this.languageData = UtilService.findObj(DemoDataService.languages, 'code', this.user.language);
        }
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }


    logout() {
        localStorage.removeItem('isLoggedIn');
        this.navCtrl.navigateRoot('login');
    }
}
