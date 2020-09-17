import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-checkin-induction-va',
    templateUrl: './checkin-induction-va.page.html',
    styleUrls: ['./checkin-induction-va.page.scss'],
})
export class CheckinInductionVaPage implements OnInit {

    inductionFiles = DemoDataService.inductionFiles;
    files = [];
    currentIndex = 0;

    constructor(
        public navCtrl: NavController,
    ) {
        this.inductionFiles.map((item) => {
            if (item.type === 'va') {
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
            this.navCtrl.navigateForward(['/signoff-digitalink'], {
                queryParams: {
                    aggrementTitle: 'I confirm that I\'ve read the induction.',
                    signoffFor: 'Induction',
                    isSignOffWithDigitalInk: 1
                }
            });
        }
    }
}
