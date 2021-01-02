import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedDataService} from '../../services/shared-data.service';
import {ApiService} from '../../services/api.service';
import {Response} from '../../_models';
import {EnumService} from '../../services/enum.service';
import {UtilService} from '../../services/util.service';
import {CheckInPostData} from '../../_models/checkInPostData';

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
        public apiService: ApiService,
        public utilService: UtilService,
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
        this.navController.navigateRoot('dashboard-dm',{replaceUrl: true});
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        this.isSubmitted = true;
        if (this.formGroup.valid) {
            if (this.sharedDataService.dedicatedModeGuestDetail) {
                this.sharedDataService.dedicatedModeGuestDetail.guestFirsName = this.formGroup.controls.fname.value;
                this.sharedDataService.dedicatedModeGuestDetail.guestMiddleName = this.formGroup.controls.mname.value;
                this.sharedDataService.dedicatedModeGuestDetail.guestLastName = this.formGroup.controls.lname.value;

                this.sharedDataService.getCheckinDetailsGuest(this.apiService);
            }
        }
    }
}
