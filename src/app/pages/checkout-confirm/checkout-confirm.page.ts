import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkout-confirm',
    templateUrl: './checkout-confirm.page.html',
    styleUrls: ['./checkout-confirm.page.scss'],
})
export class CheckoutConfirmPage implements OnInit {

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
        this.navCtrl.navigateForward(['/checkin-success'], {
            queryParams: {
                type: 'checkout',
                message: 'You have now checked out'
            }
        });
    }

}
