import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.page.html',
    styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
    qrCodeValue = 'Oliver Egginton';
    elementType = 'url';

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
