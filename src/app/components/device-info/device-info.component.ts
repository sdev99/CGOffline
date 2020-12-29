import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-device-info',
    templateUrl: './device-info.component.html',
    styleUrls: ['./device-info.component.scss'],
})
export class DeviceInfoComponent implements OnInit {
    isOnline = UtilService.randomBoolean();

    constructor(
        private menu: MenuController,
        public navController: NavController,
        public sharedDataService: SharedDataService,
        private utilService: UtilService,
    ) {
    }

    ngOnInit() {

    }

    lastSyncTime() {
        const dateTime = localStorage.getItem(EnumService.LocalStorageKeys.SYNC_DATE_TIME);
        if (dateTime) {
            return dateTime;
        }
        return null;
    }

    menuWillOpen() {
        this.isOnline = UtilService.randomBoolean();
        console.log('menuWillOpen');
    }

    closeInfoMenu() {
        this.menu.close('infoMenu');
    }

    async syncClick() {
        this.closeInfoMenu();
        this.navController.navigateForward('device-sync-dm', {
            queryParams: {
                startSync: true
            }
        });
    }

}
