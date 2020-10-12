import {Component, OnInit} from '@angular/core';
import {MenuController, ModalController, NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {HomeExitDmPage} from '../../modals/home-exit-dm/home-exit-dm.page';

@Component({
    selector: 'app-dashboard-dm',
    templateUrl: './dashboard-dm.page.html',
    styleUrls: ['./dashboard-dm.page.scss'],
})
export class DashboardDmPage implements OnInit {

    constructor(
        public navController: NavController,
        private sharedDataService: SharedDataService,
    ) {
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
