import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {InductionItem} from '../../_models/inductionItem';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-checkin-induction-rich-text',
    templateUrl: './checkin-induction-rich-text.page.html',
    styleUrls: ['./checkin-induction-rich-text.page.scss'],
})
export class CheckinInductionRichTextPage implements OnInit {

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
    }
}
