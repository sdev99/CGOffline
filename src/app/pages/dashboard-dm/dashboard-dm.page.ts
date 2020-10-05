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
        private menu: MenuController,
        public modalController: ModalController,
        public navController: NavController,
        private sharedDataService: SharedDataService,
    ) {
    }


    ngOnInit() {
    }

    openInfoMenu() {
        this.menu.open('infoMenu');
    }

    async logOutClick() {
        const modal = await this.modalController.create({
            component: HomeExitDmPage,
            cssClass: 'home-exit-dm-modal'
        });
        await modal.present();

        modal.onWillDismiss().then(({data}) => {
            if (data) {
                this.navController.navigateRoot('choose-location');
            }
        });
    }

    checkInOutClick() {
        this.navController.navigateForward('checkinout-option-dm');
    }

    documentsClick() {

    }

    formsClick() {

    }

    permitsClick() {

    }

    evacuationClick() {

    }

}
