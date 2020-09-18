import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-form-hav',
    templateUrl: './form-hav.page.html',
    styleUrls: ['./form-hav.page.scss'],
})
export class FormHavPage implements OnInit {
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

    onContinue() {
        this.navCtrl.navigateForward(['/signoff-digitalink']);
    }

}
