import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-checkin-induction-video-file',
    templateUrl: './checkin-induction-video-file.page.html',
    styleUrls: ['./checkin-induction-video-file.page.scss'],
})
export class CheckinInductionVideoFilePage implements OnInit {

    inductionFiles = DemoDataService.inductionFiles.clone();
    files = [];
    currentIndex = 0;
    locationDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
    ) {
        this.inductionFiles.map((item) => {
            if (item.type === 'video') {
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

    ionViewWillLeave() {
        const iframes = document.getElementsByTagName('iframe');
        if (iframes != null) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].src = iframes[i].src; // causes a reload so it stops playing, music, video, etc.
            }
        }
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');
    }

    onContinue() {
        if (this.files.length > (this.currentIndex + 1)) {
            this.currentIndex++;
        } else {
            this.navCtrl.navigateForward(['/checkin-induction-image-file'], {
                queryParams: {
                    locationDetail: JSON.stringify(this.locationDetail)
                }
            });
        }
    }

}
