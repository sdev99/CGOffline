import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-alreadycheckin-dm',
    templateUrl: './checkinout-alreadycheckin-dm.page.html',
    styleUrls: ['./checkinout-alreadycheckin-dm.page.scss'],
})
export class CheckinoutAlreadycheckinDmPage implements OnInit {
    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        // this.navController.navigateForward('checkinout-photoidentity-dm');
        if (UtilService.randomBoolean()) {
            this.navController.navigateForward(['/checkinout-success-dm'], {
                queryParams: {
                    type: 'checkout',
                    message: 'You have now checked out',
                }
            });
        } else {
            this.navController.navigateForward(['/checkinout-fail-dm'], {
                queryParams: {
                    failTitle: 'No Qualification',
                    failSubTitle: 'Check in Not Allowed',
                    failMessage: 'This check-in requires to have certain \n' +
                        'qualifications which you do not have.',
                }
            });
        }

    }

}
