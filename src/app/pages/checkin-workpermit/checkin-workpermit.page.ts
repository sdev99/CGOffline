import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkin-workpermit',
    templateUrl: './checkin-workpermit.page.html',
    styleUrls: ['./checkin-workpermit.page.scss'],
})
export class CheckinWorkpermitPage implements OnInit {

    list = DemoDataService.currentCheckinWorkPermits;

    isCheckedIn = true;

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    fileIcon(type) {
        let iconName = '';
        switch (type) {
            case 'document':
                iconName = 'attachment1';
                break;
            case 'pdf':
                iconName = 'attachment2';
                break;
            case 'form':
                iconName = 'attachment3';
                break;
            case 'folder':
                iconName = 'attachment4';
                break;
            case 'image':
                iconName = 'attachment5';
                break;
            case 'video':
                iconName = 'attachment6';
                break;
            default:
                iconName = 'attachment1';

        }
        return './assets/icon/' + iconName + '.svg';
    }

    back() {
        this.navCtrl.back();
    }

}
