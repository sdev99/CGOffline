import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuController, ModalController, NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {ObservablesService} from '../../services/observables.service';
import {EnumService} from '../../services/enum.service';
import {HomeExitDmPage} from '../../modals/home-exit-dm/home-exit-dm.page';

@Component({
    selector: 'app-dashboard-header-dm',
    templateUrl: './dashboard-header-dm.component.html',
    styleUrls: ['./dashboard-header-dm.component.scss'],
})
export class DashboardHeaderDmComponent implements OnInit {

    @Input() title = '';

    constructor(
        public navController: NavController,
        public modalController: ModalController,
        private menu: MenuController,
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
    ) {

    }

    ngOnInit() {

    }

    async syncClick() {
        this.navController.navigateForward('device-sync-dm');
    }

    infoClick() {
        this.menu.open('infoMenu');
    }

    async logoutClick() {
        const modal = await this.modalController.create({
            component: HomeExitDmPage,
            cssClass: 'home-exit-dm',
            componentProps: {
                title: 'Exit',
                description: 'You are about to exit this location that this device is dedicated for at the moment.\n' +
                    'Are you sure you want to exit?',
                okBtnText: 'Yes',
                cancelBtnText: 'Cancel'
            }
        });
        await modal.present();

        modal.onWillDismiss().then(({data}) => {
            if (data) {
                this.navController.navigateRoot('choose-location');
            }
        });
    }

}
