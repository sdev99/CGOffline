import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkin-induction-va',
    templateUrl: './checkin-induction-va.page.html',
    styleUrls: ['./checkin-induction-va.page.scss'],
})
export class CheckinInductionVaPage implements OnInit {

    vaContent = 'Whereas, Visitor desires to visit Bluestar Silicones USA Corp.’s (“Bluestar”) facility for legitimate business purposes directly and only related to Visitor’s business and/or proposed business with Bluestar;\n' +
        'Whereas, Visitor recognizes, agrees, and understands that Bluestar would not provide Visitor with any access in or to its facility unless Visitor first agreed to be bound by, and to fully comply with, the terms and provisions of this Agreement;\n' +
        'Whereas, the Bluestar premises are not open to the public, and the equipment, materials, and documents contained within the Bluestar premises are not generally known; each and every person intending to enter the Bluestar premises, on that person’s own behalf and/or on behalf of that person’s employer, any affiliate, or subsidiary thereof (referred to collectively as “Visitor”), agrees to this Confidentiality Agreement by signing in.\n' +
        'As a condition for entry into the Bluestar premises and other good and valuable consideration, Visitor agrees that:\n' +
        '1. Visitor understands that having access to Bluestar’s facility may result in being exposed to Bluestar’s highly confidential, proprietary, and/or trade secret information (“Confidential Information”).\n' +
        '2. Visitor understands, acknowledges and agrees that Bluestar’s Confidential Information is extremely valuable to it and is sufficiently secret to derive economic value, actual or potential, from not being generally known by others, including Bluestar’s competitors, and is the subject of efforts that are reasonable to maintain its secrecy or confidentiality. Bluestar’s Confidential Information includes, but shall not be limited to: ';

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
