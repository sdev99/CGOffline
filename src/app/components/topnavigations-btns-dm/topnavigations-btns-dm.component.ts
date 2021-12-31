import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { SharedDataService } from '../../services/shared-data.service';
import { Response } from '../../_models';
import { EnumService } from '../../services/enum.service';
import { OfflineManagerService } from 'src/app/services/offline-manager.service';
import { DeviceEntityDetail } from 'src/app/_models/deviceEntityDetail';

@Component({
	selector: 'app-topnavigations-btns-dm',
	templateUrl: './topnavigations-btns-dm.component.html',
	styleUrls: ['./topnavigations-btns-dm.component.scss'],
})
export class TopnavigationsBtnsDmComponent implements OnInit {
	@Input() activeBtn: string;

	constructor(
		public navController: NavController,
		public apiService: ApiService,
		public sharedDataService: SharedDataService,
		public utilService: UtilService,
		public offlineManagerService: OfflineManagerService
	) {}

	ngOnInit() {}

	checkInOutClick() {
		this.navController.navigateForward('checkinout-option-dm');
	}

	documentsClick() {
		this.navController.navigateRoot('documents-dm');
	}

	formsClick() {
		this.navController.navigateRoot('forms-dm');
	}

	permitsClick() {
		this.navController.navigateRoot('permits-dm');
	}

	evacuationClick() {
		this.navController.navigateForward('evacuation-dm');
	}

	generatePermitClick() {
		if (this.sharedDataService.offlineMode) {
			const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
			this.offlineManagerService.getDeviceAvailableWorkPermits(dedicatedModeLocationUse).then((res) => {
				this.sharedDataService.availableWorkPermits = res;
				this.navController.navigateForward('checkin-workpermit');
			});
		} else {
			this.utilService.presentLoadingWithOptions();
			const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
			this.apiService.getDedicatedModeAvailableWorkPermits(companyID).subscribe(
				(response: Response) => {
					this.utilService.hideLoading();
					if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
						this.sharedDataService.availableWorkPermits = response.Result;
						this.navController.navigateForward('checkin-workpermit');
					}
				},
				(error) => {
					this.utilService.hideLoading();
				}
			);
		}
	}
}
