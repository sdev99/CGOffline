import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from '../../services/shared-data.service';
import { EnumService } from '../../services/enum.service';
import { AccountService } from '../../services/account.service';
import { UtilService } from '../../services/util.service';
import { ApiService } from '../../services/api.service';
import { Response } from '../../_models';
import { DeviceEntityDetail } from '../../_models/deviceEntityDetail';
import { OfflineManagerService } from 'src/app/services/offline-manager.service';

@Component({
	selector: 'app-choose-location',
	templateUrl: './choose-location.page.html',
	styleUrls: ['./choose-location.page.scss'],
})
export class ChooseLocationPage implements OnInit {
	locations: Array<DeviceEntityDetail>;
	selectedLocation;
	UtilService = UtilService;

	constructor(
		public navCtrl: NavController,
		public sharedDataService: SharedDataService,
		public accountService: AccountService,
		public apiService: ApiService,
		public utilService: UtilService,
		public offlineManagerService: OfflineManagerService
	) {
		this.locations = sharedDataService.dedicatedModeAssignedEntities;
	}

	ngOnInit() {}

	ionViewDidEnter() {
		this.getDeviceEntityDetails();
		this.accountService.activateDevice().subscribe(() => {});
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
		if (!this.sharedDataService.offlineMode) {
			this.offlineManagerService.getAssignedEnitities().then((entities) => {
				const list = entities as Array<any>;
				this.sharedDataService.dedicatedModeAssignedEntities = list;
				this.locations = this.sharedDataService.dedicatedModeAssignedEntities;
				localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES, JSON.stringify(list));
			});
			this.offlineManagerService
				.getDeviceDetail()
				.then((deviceDetail) => {
					this.sharedDataService.dedicatedModeDeviceDetailData = deviceDetail as any;
					localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL, JSON.stringify(this.sharedDataService.dedicatedModeDeviceDetailData));
				})
				.catch((error) => {});
		} else {
			if (this.sharedDataService.dedicatedModeDeviceDetailData) {
				this.apiService.getDeviceEntityDetails(this.sharedDataService.deviceUID).subscribe(
					(res: Response) => {
						if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
							if (res.Result.deviceDetailData) {
								this.sharedDataService.dedicatedModeDeviceDetailData = res.Result.deviceDetailData;
								this.sharedDataService.dedicatedModeAssignedEntities = res.Result.deviceEntityData;
								this.locations = res.Result.deviceEntityData;

								localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL, JSON.stringify(res.Result?.deviceDetailData));
								localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES, JSON.stringify(res.Result?.deviceEntityData));
							} else {
								this.sharedDataService.dedicatedModeDeviceDeleted();
							}
						}
					},
					(error) => {}
				);
			}
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
