import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-current-checkin',
    templateUrl: './current-checkin.page.html',
    styleUrls: ['./current-checkin.page.scss'],
})
export class CurrentCheckinPage implements OnInit {
    UtilService = UtilService;

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

    openWorkPermit(item) {
        if (item.navigation_type === 'work-permit') {
            this.navCtrl.navigateForward(['tabs/current-checkin/checkin-workpermit']);
        }
    }
}
