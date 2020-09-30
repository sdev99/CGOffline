import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-exit-confirmation',
    templateUrl: './exit-confirmation.page.html',
    styleUrls: ['./exit-confirmation.page.scss'],
})
export class ExitConfirmationPage implements OnInit {

    constructor(
        public navCtrl: NavController,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }

    onDismiss = (isConfirm) => {
        this.modalController.dismiss(isConfirm);
    };

}
