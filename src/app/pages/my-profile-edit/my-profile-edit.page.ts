import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-my-profile-edit',
    templateUrl: './my-profile-edit.page.html',
    styleUrls: ['./my-profile-edit.page.scss'],
})
export class MyProfileEditPage implements OnInit {
    isError = false;
    timeZones = DemoDataService.timeZones;
    timeZone = DemoDataService.timeZones[0].offset;
    languages = DemoDataService.languages;
    language = DemoDataService.languages[0].code;

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

}
