import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-device-info',
    templateUrl: './device-info.component.html',
    styleUrls: ['./device-info.component.scss'],
})
export class DeviceInfoComponent implements OnInit {

    constructor(
        private menu: MenuController,
        private sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
    }

    closeInfoMenu() {
        this.menu.close('infoMenu');
    }

}
