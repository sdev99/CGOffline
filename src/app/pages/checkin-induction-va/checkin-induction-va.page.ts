import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';
import {InductionItem} from '../../_models/inductionItem';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-checkin-induction-va',
    templateUrl: './checkin-induction-va.page.html',
    styleUrls: ['./checkin-induction-va.page.scss'],
})
export class CheckinInductionVaPage implements OnInit {
    user: User;

    inductionItem: InductionItem;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
        public accountService: AccountService,
        public sanitizer: DomSanitizer
    ) {
        this.user = accountService.userValue;

        this.route.queryParams.subscribe((parameters) => {
            const inductionContentItemIndex = parameters.inductionContentItemIndex;
            if (this.sharedDataService.checkInDetail?.checkInInductionItems?.length > inductionContentItemIndex) {
                this.inductionItem = this.sharedDataService.checkInDetail?.checkInInductionItems[inductionContentItemIndex];
            }
        });
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

        // if (this.files.length > (this.currentIndex + 1)) {
        //     this.currentIndex++;
        // } else {
        //     if (this.sharedDataService.checkinoutDmAs === EnumService.CheckInType.AS_GUEST) {
        //         if (UtilService.randomBoolean()) {
        //             this.navCtrl.navigateForward(['/checkinout-success-dm'], {
        //                 queryParams: {
        //                     message: 'You have now checked-in',
        //                     nextPage: 'dashboard-dm'
        //                 }
        //             });
        //         } else {
        //             this.navCtrl.navigateForward(['/checkinout-fail-dm'], {
        //                 queryParams: {
        //                     failTitle: 'No Qualification',
        //                     failSubTitle: 'Check in Not Allowed',
        //                     failMessage: 'This check-in requires to have certain \n' +
        //                         'qualifications which you do not have.',
        //                     nextPage: 'dashboard-dm'
        //                 }
        //             });
        //         }
        //     } else {
        //         this.navCtrl.navigateForward(['/signoff-digitalink'], {
        //             queryParams: {
        //                 type: EnumService.SignOffType.INDUCTION,
        //                 data: JSON.stringify(this.locationDetail),
        //             }
        //         });
        //     }
        // }
    }
}
