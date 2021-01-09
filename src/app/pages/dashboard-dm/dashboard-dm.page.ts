import {Component, OnInit} from '@angular/core';
import {MenuController, ModalController, NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {HomeExitDmPage} from '../../modals/home-exit-dm/home-exit-dm.page';
import {ApiService} from '../../services/api.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {GlobalDirectory} from '../../_models/globalDirectory';
import {EnumService} from '../../services/enum.service';
import {DedicatedModeDeviceDetailData} from '../../_models/dedicatedModeDeviceDetailData';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-dashboard-dm',
    templateUrl: './dashboard-dm.page.html',
    styleUrls: ['./dashboard-dm.page.scss'],
})
export class DashboardDmPage implements OnInit {
    dedicatedModeDeviceDetailData: DedicatedModeDeviceDetailData;

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
        private apiService: ApiService,
        private accountService: AccountService,
    ) {
        this.dedicatedModeDeviceDetailData = this.sharedDataService.dedicatedModeDeviceDetailData;
    }


    ngOnInit() {
        const companyFolderName = this.dedicatedModeDeviceDetailData?.companyFolderName;
        // const companyFolderName = 'B01F4CF5-C26C-4C8F-BE94-A7C68FEDE752';
        this.apiService.getGlobalDirectories(companyFolderName).subscribe((response) => {
            if (response) {
                this.sharedDataService.globalDirectories = response as GlobalDirectory;
                localStorage.setItem(EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES, JSON.stringify(response));
            }
        }, (error) => {

        });
        this.accountService.activateDevice().subscribe(() => {
        });

        if (UtilService.isLocalHost()) {
            setTimeout(() => {
                this.navController.navigateForward('signoff-digitalink');
            }, 3000);
        }
    }

    ionViewWillEnter() {
        this.accountService.checkForMobileLanguageId();
    }

    checkInOutClick() {
        this.navController.navigateForward('checkinout-option-dm');
    }

    documentsClick() {
        this.navController.navigateForward('documents-dm');
    }

    formsClick() {
        this.navController.navigateForward('forms-dm');
    }

    permitsClick() {
        this.navController.navigateForward('permits-dm');
    }

    evacuationClick() {
        this.navController.navigateForward('evacuation-dm');
    }

}
