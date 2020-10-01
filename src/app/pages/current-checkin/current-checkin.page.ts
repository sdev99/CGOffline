import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-current-checkin',
    templateUrl: './current-checkin.page.html',
    styleUrls: ['./current-checkin.page.scss'],
})
export class CurrentCheckinPage implements OnInit {
    // list = DemoDataService.currentCheckinFiles;
    list = [];

    isCheckedIn = false;

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
    ) {
        if (sharedDataService.checkedInPlaces && sharedDataService.checkedInPlaces.length > 0) {
            this.isCheckedIn = true;
        }
    }

    ngOnInit() {
        setTimeout(() => {
            this.list = DemoDataService.currentCheckinFiles.clone();
        }, 2000);
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

    openWorkPermit(item) {
        if (item.navigation_type === 'work-permit') {
            this.navCtrl.navigateForward(['tabs/current-checkin/checkin-workpermit']);
        }
    }
}
