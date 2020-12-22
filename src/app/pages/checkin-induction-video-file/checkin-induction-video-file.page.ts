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
    selector: 'app-checkin-induction-video-file',
    templateUrl: './checkin-induction-video-file.page.html',
    styleUrls: ['./checkin-induction-video-file.page.scss'],
})
export class CheckinInductionVideoFilePage implements OnInit {
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

    ionViewWillLeave() {
        this.stopVideoPlay();
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');
    }

    stopVideoPlay() {
        const iframes = document.getElementsByTagName('iframe');
        if (iframes != null) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].src = iframes[i].src; // causes a reload so it stops playing, music, video, etc.
                iframes[i].contentWindow.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'stopVideo'
                }), '*');
            }
        }
    }

    onContinue() {
        this.stopVideoPlay();
        this.sharedDataService.inductionNavigationProcess(this.user.userId, this.sharedDataService.inductionContentItemIndex);
    }

}
