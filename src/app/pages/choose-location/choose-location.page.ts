import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {AccountService} from '../../services/account.service';
import {UtilService} from '../../services/util.service';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-choose-location',
    templateUrl: './choose-location.page.html',
    styleUrls: ['./choose-location.page.scss'],
})
export class ChooseLocationPage implements OnInit {
    locations = [
        {title: 'Demo Location One', id: 1},
        {title: 'Demo Location Two', id: 2},
        {title: 'Demo Location Three', id: 3},
        {title: 'Demo Location Four', id: 3},
        {title: 'Demo Location Five', id: 3},
        {title: 'Demo Location Six', id: 3},
        {title: 'Demo Location Seven', id: 3},
        {title: 'Demo Location Eight', id: 3},
        {title: 'Demo Location Nine', id: 3},
        {title: 'Demo Location Ten', id: 3},
    ];
    selectedLocation;

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public accountService: AccountService,
        public apiService: ApiService,
        public utilService: UtilService,
    ) {
    }

    ngOnInit() {
        this.getLocationItemList();
    }

    getLocationItemList = () => {
        if (this.sharedDataService.dedicatedModeDeviceDetailData) {
            this.apiService.getLocationItemList(this.sharedDataService.dedicatedModeDeviceDetailData.companyID).subscribe((res) => {
                if (res) {
                    this.locations = res;
                }
            }, (error) => {
            });
        }
    };

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.sharedDataService.dedicatedModeLocationUse = this.selectedLocation;
        localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_LOCATION_USE, JSON.stringify(this.selectedLocation));
        this.navCtrl.navigateForward(['/dashboard-dm']);
    }

}
