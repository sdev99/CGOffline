import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-linksend-success',
    templateUrl: './linksend-success.page.html',
    styleUrls: ['./linksend-success.page.scss'],
})
export class LinksendSuccessPage implements OnInit {

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onContinue() {
        this.navCtrl.navigateBack(['/login']);
    }
}
