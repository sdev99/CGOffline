import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {HomeExitDmPage} from '../../modals/home-exit-dm/home-exit-dm.page';

@Component({
    selector: 'app-evacuation-dm',
    templateUrl: './evacuation-dm.page.html',
    styleUrls: ['./evacuation-dm.page.scss'],
})
export class EvacuationDmPage implements OnInit {

    list: any = DemoDataService.users.clone();
    evacuatedList = [];
    searchUser;
    searchEvacuatedUser;


    constructor(
        public activatedRoute: ActivatedRoute,
        public navController: NavController,
        public modalController: ModalController,
    ) {

    }

    ngOnInit() {
    }

    async onClose() {
        if (this.evacuatedList && this.evacuatedList.length > 0) {
            const modal = await this.modalController.create({
                component: HomeExitDmPage,
                cssClass: 'home-exit-dm',
                componentProps: {
                    title: 'Exit Evacuation',
                    description: 'Any data related to current evacuation will be lost.',
                    okBtnText: 'Exit Evacuation',
                    cancelBtnText: 'Cancel'
                }
            });
            await modal.present();

            modal.onWillDismiss().then(({data}) => {
                if (data) {
                    this.navController.navigateRoot('dashboard-dm');
                }
            });
        } else {
            this.navController.navigateRoot('dashboard-dm');
        }
    }

    onContinue() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    isEvacuatedCompleted() {
        return (!this.list || this.list.length === 0) && (this.evacuatedList && this.evacuatedList.length > 0);
    }

    evacuateUser(item, idx) {
        this.list.splice(idx, 1);
        this.evacuatedList.push(item);
    }

}
