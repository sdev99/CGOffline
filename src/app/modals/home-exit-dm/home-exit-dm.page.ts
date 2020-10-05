import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-home-exit-dm',
    templateUrl: './home-exit-dm.page.html',
    styleUrls: ['./home-exit-dm.page.scss'],
})
export class HomeExitDmPage implements OnInit {
    constructor(
        public modalController: ModalController
    ) {
    }

    ngOnInit() {

    }

    onDismiss = (status) => {
        this.modalController.dismiss(status);
    };

}
