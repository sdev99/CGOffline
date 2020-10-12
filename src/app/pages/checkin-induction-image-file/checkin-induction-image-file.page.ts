import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkin-induction-image-file',
    templateUrl: './checkin-induction-image-file.page.html',
    styleUrls: ['./checkin-induction-image-file.page.scss'],
})
export class CheckinInductionImageFilePage implements OnInit {

    inductionFiles = DemoDataService.inductionFiles.clone();
    files = [];
    currentIndex = 0;
    locationDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {
        this.inductionFiles.map((item) => {
            if (item.type === 'image') {
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
        if (this.files.length > (this.currentIndex + 1)) {
            this.currentIndex++;
        } else {
            this.navCtrl.navigateForward(['/checkin-induction-rich-text'], {
                queryParams: {
                    locationDetail: JSON.stringify(this.locationDetail)
                }
            });
        }
    }

}
