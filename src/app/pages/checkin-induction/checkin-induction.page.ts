import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {CheckinDetail} from '../../_models/checkinDetail';
import {LocationItem} from '../../_models/locationItem';
import {EnumService} from '../../services/enum.service';
import {UtilService} from '../../services/util.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-checkin-induction',
    templateUrl: './checkin-induction.page.html',
    styleUrls: ['./checkin-induction.page.scss'],
})
export class CheckinInductionPage implements OnInit {
    user: User;

    inductionFiles = DemoDataService.inductionFiles.clone();
    locationDetail;
    checkinDetail: CheckinDetail;
    checkInForLocation: LocationItem;


    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
        public accountService: AccountService,
        public sanitizer: DomSanitizer
    ) {
        if (!this.sharedDataService.dedicatedMode) {
            this.user = accountService.userValue;
            this.checkInForLocation = this.sharedDataService.checkInForLocation;
        }

        this.checkinDetail = this.sharedDataService.checkInDetail;
    }

    ngOnInit() {
    }


    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateBack('/dashboard-dm');
        } else {
            this.navCtrl.navigateBack('/checkinout-confirm');
        }
    }

    onContinue() {
        if (this.checkinDetail) {
            let userId;
            if (this.sharedDataService.dedicatedMode) {
                userId = this.sharedDataService.dedicatedModeUserDetail.userId;
            } else {
                userId = this.user?.userId;
            }
            this.sharedDataService.inductionNavigationProcess(userId, -1);
        }
    }
}
