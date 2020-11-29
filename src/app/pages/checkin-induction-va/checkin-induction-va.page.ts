import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';
import {InductionItem} from '../../_models/inductionItem';

@Component({
    selector: 'app-checkin-induction-va',
    templateUrl: './checkin-induction-va.page.html',
    styleUrls: ['./checkin-induction-va.page.scss'],
})
export class CheckinInductionVaPage implements OnInit {
    inductionContentItemIndex = 0;
    inductionItem: InductionItem;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                this.inductionContentItemIndex = params.inductionContentItemIndex;
                if (sharedDataService.checkInDetail
                    && sharedDataService.checkInDetail.checkInInductionItems
                    && sharedDataService.checkInDetail.checkInInductionItems.length > this.inductionContentItemIndex) {
                    this.inductionItem = sharedDataService.checkInDetail.checkInInductionItems[this.inductionContentItemIndex];
                }
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
            this.navCtrl.navigateRoot('tabs/dashboard');
        }
    }

    onContinue() {
        this.sharedDataService.inductionNavigationProcess(this.inductionContentItemIndex);

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
