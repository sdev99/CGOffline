import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-checkin-induction-video-file',
    templateUrl: './checkin-induction-video-file.page.html',
    styleUrls: ['./checkin-induction-video-file.page.scss'],
})
export class CheckinInductionVideoFilePage implements OnInit {

    inductionFiles = DemoDataService.inductionFiles;
    files = [];
    currentIndex = 0;

    constructor(
        public navCtrl: NavController,
    ) {
        this.inductionFiles.map((item) => {
            if (item.type === 'video') {
                this.files = item.content;
                return;
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
            this.navCtrl.navigateForward('/checkin-induction-image-file');
        }
    }

}
