import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-checkin-induction-va',
    templateUrl: './checkin-induction-va.page.html',
    styleUrls: ['./checkin-induction-va.page.scss'],
})
export class CheckinInductionVaPage implements OnInit {

    inductionFiles = DemoDataService.inductionFiles;
    files = [];
    currentIndex = 0;
    locationDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
    ) {
        this.inductionFiles.map((item) => {
            if (item.type === 'va') {
                this.files = item.content;
                return;
            }
        });
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.locationDetail) {
                    this.locationDetail = JSON.parse(params.locationDetail);
                }
            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        if (this.files.length > (this.currentIndex + 1)) {
            this.currentIndex++;
        } else {
            this.navCtrl.navigateForward(['/signoff-digitalink'], {
                queryParams: {
                    type: EnumService.SignOffType.INDUCTION,
                    data: JSON.stringify(this.locationDetail),
                }
            });
        }
    }
}
