import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {Response} from '../../_models';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-checkinout-guest-phone-dm',
    templateUrl: './checkinout-guest-phone-dm.page.html',
    styleUrls: ['./checkinout-guest-phone-dm.page.scss'],
})
export class CheckinoutGuestPhoneDmPage implements OnInit {
    phoneNumber;
    errorMessage = '';


    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
        public utilService: UtilService,
    ) {
    }


    ngOnInit() {

    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }


    onContinue() {
        this.errorMessage = '';
        if (this.phoneNumber) {
            if (this.sharedDataService.dedicatedModeDeviceDetailData && this.phoneNumber) {
                this.utilService.presentLoadingWithOptions();
                this.apiService.getGuestUserDetailByPhone(this.phoneNumber).subscribe((res: Response) => {
                    this.utilService.hideLoading();
                    if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                        if (res.Result?.guestPhone) {
                            this.sharedDataService.dedicatedModeGuestDetail = res.Result;
                            this.navController.navigateForward('checkinout-identityconfirm-dm', {
                                queryParams: {
                                    authFor: 'Check In/Out as Guest'
                                }
                            });
                        } else {
                            this.sharedDataService.dedicatedModeGuestDetail = {
                                guestPhone: this.phoneNumber
                            };
                            this.navController.navigateForward('checkinout-guest-dm');
                        }
                    }
                }, (error) => {
                    this.errorMessage = error.message;
                    this.utilService.hideLoading();
                });
            }
        }
    }

}
