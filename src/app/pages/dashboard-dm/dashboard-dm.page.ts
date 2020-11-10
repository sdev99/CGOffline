import {Component, OnInit} from '@angular/core';
import {MenuController, ModalController, NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {HomeExitDmPage} from '../../modals/home-exit-dm/home-exit-dm.page';
import {ApiService} from '../../services/api.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';

@Component({
    selector: 'app-dashboard-dm',
    templateUrl: './dashboard-dm.page.html',
    styleUrls: ['./dashboard-dm.page.scss'],
})
export class DashboardDmPage implements OnInit {
    dedicatedModeDeviceDetailData;

    constructor(
        public navController: NavController,
        private sharedDataService: SharedDataService,
        private apiService: ApiService,
        private accountService: AccountService,
    ) {
        this.dedicatedModeDeviceDetailData = this.sharedDataService.dedicatedModeDeviceDetailData;
    }


    ngOnInit() {
    }

    checkInOutClick() {
        this.navController.navigateForward('checkinout-option-dm');
    }

    documentsClick() {
        this.navController.navigateForward('documents-dm');
    }

    formsClick() {
        this.navController.navigateForward('forms-dm');
    }

    permitsClick() {
        this.navController.navigateForward('permits-dm');
    }

    evacuationClick() {
        this.navController.navigateForward('evacuation-dm');
    }

}
