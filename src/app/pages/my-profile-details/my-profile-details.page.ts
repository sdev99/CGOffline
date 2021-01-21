import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UtilService} from '../../services/util.service';
import {DemoDataService} from '../../services/demo-data.service';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {Profile} from '../../_models/profile';

@Component({
    selector: 'app-my-profile-details',
    templateUrl: './my-profile-details.page.html',
    styleUrls: ['./my-profile-details.page.scss'],
})
export class MyProfileDetailsPage implements OnInit {
    user: User;
    profile: Profile;
    UtilService = UtilService;

    offsetData;
    languageData;

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        private accountService: AccountService,
        public utilService: UtilService,
    ) {
        this.user = accountService.userValue;
        this.profile = sharedDataService.userProfile;


        if (this.profile) {
            this.offsetData = UtilService.findObj(sharedDataService.timeZoneList, 'timeZoneID', this.profile.timeZoneID);
            this.languageData = UtilService.findObj(sharedDataService.companyLanguageList, 'code', this.profile.mobileAppLanguageID);
        }
    }

    ngOnInit() {
        this.accountService.getUserProfile(this.user?.userId).subscribe((profile) => {
            this.profile = profile;
        }, error => {
        });
    }

    onClose() {
        this.navCtrl.back();
    }

    async logout() {
        this.utilService.presentLoadingWithOptions();

        this.accountService.logout(this.user?.userId).subscribe(() => {
            Object.keys(EnumService.LocalStorageKeys).map((LocalStorageKey) => {
                if (
                    LocalStorageKey !== EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES &&
                    LocalStorageKey !== EnumService.LocalStorageKeys.API_ACCESS_KEY &&
                    LocalStorageKey !== EnumService.LocalStorageKeys.API_TOKEN
                ) {
                    localStorage.removeItem(LocalStorageKey);
                }
            });
            this.sharedDataService.resetAllSharedVariable();

            this.utilService.hideLoading();
        }, error => {
            this.utilService.hideLoading();
        });
    }
}
