import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-my-profile-details',
    templateUrl: './my-profile-details.page.html',
    styleUrls: ['./my-profile-details.page.scss'],
})
export class MyProfileDetailsPage implements OnInit {

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
