import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-guest-dm',
    templateUrl: './checkinout-guest-dm.page.html',
    styleUrls: ['./checkinout-guest-dm.page.scss'],
})
export class CheckinoutGuestDmPage implements OnInit {
    isSubmitted = false;
    formGroup: FormGroup;

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
    ) {
        this.formGroup = new FormGroup({
            fname: new FormControl('', Validators.compose([Validators.required])),
            mname: new FormControl(false, Validators.compose([])),
            lname: new FormControl('', Validators.compose([Validators.required])),
        });
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
        this.isSubmitted = true;
        if (this.formGroup.valid) {
            this.navController.navigateForward('/checkin-induction');
        }
    }

}
