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
import {UtilService} from '../../services/util.service';
import {Router} from '@angular/router';

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
        public utilService: UtilService,
        public router: Router,
        public accountService: AccountService,
        public sharedDataService: SharedDataService,
    ) {
        this.user = this.accountService.userValue;
        this.filterLocationList(sharedDataService.locationItemList);
    }

    ngOnInit() {
        this.getLocationItemList();
    }

    getLocationItemList = () => {
        this.apiService.getLocationItemList(this.user.companyID).subscribe((res) => {
            if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.filterLocationList(res.Result);
            }
        }, (error) => {
        });
    };


    filterLocationList = (list) => {
        if (list) {
            const locations = [];
            list.map((item) => {
                let found = false;
                const entityIds = this.utilService.getRelevantEntityId(item.locationID);
                this.sharedDataService.checkedInPlaces.map((checkedInDetailItem) => {
                    if ((entityIds.LocationID > 0 && entityIds.LocationID === checkedInDetailItem.locationID) ||
                        (entityIds.ProjectID > 0 && entityIds.ProjectID === checkedInDetailItem.projectID) ||
                        (entityIds.InventoryID > 0 && entityIds.InventoryID === checkedInDetailItem.inventoryItemID)
                    ) {
                        found = true;
                        return;
                    }
                });

                if (!found) {
                    locations.push(item);
                }
            });

            this.locations = locations;
        }
    };

    onClose() {
        this.navCtrl.navigateBack(['/tabs/dashboard'], {replaceUrl: true});
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
        this.sharedDataService.checkinLocationByOption = EnumService.CheckInLocationByOptions.List;
        this.sharedDataService.checkInForLocation = location;
        this.sharedDataService.getCheckinDetails(this.user?.userId, this.apiService);
    }

}
