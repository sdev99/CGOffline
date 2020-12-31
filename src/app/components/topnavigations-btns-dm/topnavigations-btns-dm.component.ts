import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';
import {Response} from '../../_models';
import {EnumService} from '../../services/enum.service';

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
    ) {
    }

    ngOnInit() {
    }

    checkInOutClick() {
        this.navController.navigateRoot('checkinout-option-dm');
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
        this.navController.navigateRoot('evacuation-dm');
    }

    generatePermitClick() {
        this.utilService.presentLoadingWithOptions();
        const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
        this.apiService.getDedicatedModeAvailableWorkPermits(companyID).subscribe((response: Response) => {
            this.utilService.hideLoading();
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.sharedDataService.availableWorkPermits = response.Result;
                this.navController.navigateForward('checkin-workpermit');
            }
        }, (error) => {
            this.utilService.hideLoading();
        });
    }

}
