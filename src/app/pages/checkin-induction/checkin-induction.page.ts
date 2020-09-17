import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-checkin-induction',
    templateUrl: './checkin-induction.page.html',
    styleUrls: ['./checkin-induction.page.scss'],
})
export class CheckinInductionPage implements OnInit {
    inductionFiles = DemoDataService.inductionFiles;

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    fileType(type) {
        let fileType = '';
        switch (type) {
            case 'video':
                fileType = 'Video File';
                break;
            case 'image':
                fileType = 'Image File';
                break;
            case 'richtext':
                fileType = 'Rich Text';
                break;
            case 'form':
                fileType = 'Form';
                break;
            case 'va':
                fileType = 'Visitor Agreement';
                break;
            default :
                fileType = '';
                break;
        }
        return fileType;
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.navCtrl.navigateForward(['/checkin-induction-video-file']);
    }
}
