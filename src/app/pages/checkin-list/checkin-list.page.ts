import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ModalController} from '@ionic/angular';
import {SearchLocationPage} from '../../modals/search-location/search-location.page';
import {ApiService} from '../../services/api.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {LocationItem} from '../../_models/locationItem';

@Component({
    selector: 'app-checkin-list',
    templateUrl: './checkin-list.page.html',
    styleUrls: ['./checkin-list.page.scss'],
})
export class CheckinListPage implements OnInit {
    user: User;

    locations = [];

    constructor(
        public navCtrl: NavController,
        public modalController: ModalController,
        public apiService: ApiService,
        public accountService: AccountService,
        public sharedDataService: SharedDataService,
    ) {
        this.user = this.accountService.userValue;
        this.locations = sharedDataService.locationItemList;
    }

    ngOnInit() {
        this.getLocationItemList();
    }

    getLocationItemList = () => {
        this.apiService.getLocationItemList(this.user.companyID).subscribe((res) => {
            if (res) {
                this.locations = res;
            }
        }, (error) => {
        });
    };


    onClose() {
        this.navCtrl.back();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SearchLocationPage,
            cssClass: 'search-location',
            swipeToClose: true,
            showBackdrop: true,
            backdropDismiss: true,
            animated: false,
            componentProps: {
                list: this.locations
            }
        });
        await modal.present();

        modal.onWillDismiss().then(({data}) => {
            if (data) {
                this.openLocation(data);
            }
        });
    }

    openLocation(location: LocationItem) {
        this.sharedDataService.checkInForLocation = location;
        this.navCtrl.navigateForward(['/checkinout-confirm'], {
            queryParams: {
                headerTitle: 'Check In',
                title: 'You are checking in',
                subtitle: location.locationName,
                buttonTitle: 'Check In Now',
                nextPageData: JSON.stringify({
                    locationDetail: JSON.stringify(location)
                }),
                nextPagePath: '/checkin-induction',
                locationCheckType: EnumService.ConfirmForCheckType.CheckIn
            }
        });
    }

}
