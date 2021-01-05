import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-checkinout-option-dm',
    templateUrl: './checkinout-option-dm.page.html',
    styleUrls: ['./checkinout-option-dm.page.scss'],
})
export class CheckinoutOptionDmPage implements OnInit {

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
    ) {
    }

    ngOnInit() {
        this.sharedDataService.dedicatedModeProcessType = EnumService.DedicatedModeProcessTypes.CheckinOut;
    }

    onClose() {
        this.navController.back();
    }

    checkInOutName() {
        this.sharedDataService.checkinoutDmAs = EnumService.CheckInType.MY_NAME;
        this.navController.navigateForward('checkinout-name-dm');
    }

    checkInOutQR() {
        if (this.sharedDataService.dedicatedModeLocationUse.checkInPersonalQR) {
            this.sharedDataService.checkinoutDmAs = EnumService.CheckInType.QrCode;
            this.navController.navigateForward('dashboard-qrscan');
        } else {
            this.utilService.showAlert('You cannot check-in to this location with personal qr code');
        }
    }

    checkInOutGuest() {
        this.sharedDataService.checkinoutDmAs = EnumService.CheckInType.AS_GUEST;
        this.navController.navigateForward('checkinout-guest-phone-dm');
    }
}
