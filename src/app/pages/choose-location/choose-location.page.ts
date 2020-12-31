import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {AccountService} from '../../services/account.service';
import {UtilService} from '../../services/util.service';
import {ApiService} from '../../services/api.service';
import {Response} from '../../_models';
import {DeviceEntityDetail} from '../../_models/deviceEntityDetail';

@Component({
    selector: 'app-choose-location',
    templateUrl: './choose-location.page.html',
    styleUrls: ['./choose-location.page.scss'],
})
export class ChooseLocationPage implements OnInit {
    locations: Array<DeviceEntityDetail>;
    selectedLocation;

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public accountService: AccountService,
        public apiService: ApiService,
        public utilService: UtilService,
    ) {
        this.locations = sharedDataService.dedicatedModeAssignedEntities;
    }

    ngOnInit() {
        if (this.locations) {
            this.getDeviceEntityDetails();
        }
    }

    // getLocationItemList = () => {
    //     if (this.sharedDataService.dedicatedModeDeviceDetailData) {
    //         this.apiService.getLocationItemList(this.sharedDataService.dedicatedModeDeviceDetailData.companyID).subscribe((res) => {
    //             if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
    //                 this.locations = res.Result;
    //             }
    //         }, (error) => {
    //         });
    //     }
    // };

    getDeviceEntityDetails = () => {
        if (this.sharedDataService.dedicatedModeDeviceDetailData) {
            this.apiService.getDeviceEntityDetails(this.sharedDataService.deviceUID).subscribe((res: Response) => {
                if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.sharedDataService.dedicatedModeDeviceDetailData = res.Result.deviceDetailData;
                    this.sharedDataService.dedicatedModeAssignedEntities = res.Result.deviceEntityData;
                    this.locations = res.Result.deviceEntityData;

                    localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL, JSON.stringify(res.Result?.deviceDetailData));
                    localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES, JSON.stringify(res.Result?.deviceEntityData));
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
