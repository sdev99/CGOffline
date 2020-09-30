import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UtilService} from '../../services/util.service';
import {DemoDataService} from '../../services/demo-data.service';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

@Component({
    selector: 'app-my-profile-details',
    templateUrl: './my-profile-details.page.html',
    styleUrls: ['./my-profile-details.page.scss'],
})
export class MyProfileDetailsPage implements OnInit {
    user;
    offsetData;
    languageData;
    deviceUID = '';

    constructor(
        public navCtrl: NavController,
        private uniqueDeviceID: UniqueDeviceID
    ) {
        const userData = localStorage.getItem('USER_DATA');
        if (userData) {
            this.user = JSON.parse(userData);
            this.offsetData = UtilService.findObj(DemoDataService.timeZones, 'offset', this.user.timeZone);
            this.languageData = UtilService.findObj(DemoDataService.languages, 'code', this.user.language);
        }
    }

    ngOnInit() {
        this.uniqueDeviceID.get()
            .then((uuid: any) => {
                this.deviceUID = uuid;
            })
            .catch((error: any) => console.log(error));
    }


    onClose() {
        this.navCtrl.back();
    }


    logout() {
        localStorage.removeItem('isLoggedIn');
        this.navCtrl.navigateRoot('login');
    }
}
