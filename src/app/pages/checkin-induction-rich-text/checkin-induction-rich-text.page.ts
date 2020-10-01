import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-checkin-induction-rich-text',
    templateUrl: './checkin-induction-rich-text.page.html',
    styleUrls: ['./checkin-induction-rich-text.page.scss'],
})
export class CheckinInductionRichTextPage implements OnInit {

    inductionFiles = DemoDataService.inductionFiles.clone();
    files = [];
    currentIndex = 0;
    locationDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
    ) {
        this.inductionFiles.map((item) => {
            if (item.type === 'richtext') {
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
            this.navCtrl.navigateForward(['/checkin-induction-form'], {
                queryParams: {
                    locationDetail: JSON.stringify(this.locationDetail)
                }
            });
        }
    }
}
