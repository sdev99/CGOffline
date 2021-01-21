import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {MenuController, NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';

const {Network} = Plugins;

@Component({
    selector: 'app-device-info',
    templateUrl: './device-info.component.html',
    styleUrls: ['./device-info.component.scss'],
})
export class DeviceInfoComponent implements OnInit, OnDestroy {
    isOnline = true;
    UtilService = UtilService;

    constructor(
        private menu: MenuController,
        public navController: NavController,
        public sharedDataService: SharedDataService,
    ) {
        this.checkForNetwork();
    }

    ngOnInit() {
        Network.addListener('networkStatusChange', (status) => {
            console.log('Network status changed', status);
            this.checkForNetwork();
        });
    }

    ngOnDestroy(): void {
        Network.removeAllListeners();
    }


    checkForNetwork = async () => {
        const ntstatus = await Network.getStatus();
        this.isOnline = ntstatus.connected;
    };

    lastSyncTime() {
        const dateTime = localStorage.getItem(EnumService.LocalStorageKeys.SYNC_DATE_TIME);
        if (dateTime) {
            return dateTime;
        }
        return null;
    }

    menuWillOpen() {
        this.checkForNetwork();
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
