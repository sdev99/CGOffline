import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ModalController} from '@ionic/angular';
import {SearchLocationPage} from '../../modals/search-location/search-location.page';

@Component({
    selector: 'app-checkin-list',
    templateUrl: './checkin-list.page.html',
    styleUrls: ['./checkin-list.page.scss'],
})
export class CheckinListPage implements OnInit {

    locations = DemoDataService.locations;

    constructor(
        public navCtrl: NavController,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SearchLocationPage,
            cssClass: 'search-location-modal',
            swipeToClose: true,
            showBackdrop: true,
            backdropDismiss: true,
            animated: false,
            componentProps: {
                list: this.locations
            }
        });
        await modal.present();

        modal.onWillDismiss().then((data) => {
            if (data) {
                this.openLocation(data);
            }
        });

    }

    openLocation(location) {
        this.navCtrl.navigateForward(['/checkinout-confirm'], {
            queryParams: {
                headerTitle: 'Check In',
                title: 'You are checking in',
                subtitle: location.name,
                buttonTitle: 'Check In Now',
                nextPageData: JSON.stringify({
                    locationDetail: JSON.stringify(location)
                }),
                nextPagePath: '/checkin-induction'
            }
        });
    }

}
