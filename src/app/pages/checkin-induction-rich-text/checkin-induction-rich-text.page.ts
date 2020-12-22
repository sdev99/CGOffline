import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {InductionItem} from '../../_models/inductionItem';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';

@Component({
    selector: 'app-checkin-induction-rich-text',
    templateUrl: './checkin-induction-rich-text.page.html',
    styleUrls: ['./checkin-induction-rich-text.page.scss'],
})
export class CheckinInductionRichTextPage implements OnInit {
    user: User;

    inductionItem: InductionItem;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
        public accountService: AccountService,
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.checkInDetail
            && sharedDataService.checkInDetail.checkInInductionItems
            && sharedDataService.checkInDetail.checkInInductionItems.length > this.sharedDataService.inductionContentItemIndex) {
            this.inductionItem = sharedDataService.checkInDetail.checkInInductionItems[this.sharedDataService.inductionContentItemIndex];
        }
    }

    ngOnInit() {
    }

    onBack() {
        this.navCtrl.back();
    }

    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateRoot('dashboard-dm');
        } else {
            this.navCtrl.navigateBack('/checkinout-confirm');
        }
    }

    onContinue() {
        this.sharedDataService.inductionNavigationProcess(this.user.userId, this.sharedDataService.inductionContentItemIndex);
    }
}
