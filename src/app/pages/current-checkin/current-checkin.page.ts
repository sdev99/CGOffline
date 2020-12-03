import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';
import {PhotoService} from '../../services/photo.service';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';
import {ObservablesService} from '../../services/observables.service';
import {Response, User} from '../../_models';
import {EnumService} from '../../services/enum.service';
import {CheckedInDetailItem} from '../../_models/checkedInDetailItem';
import {AccountService} from '../../services/account.service';

@Component({
    selector: 'app-current-checkin',
    templateUrl: './current-checkin.page.html',
    styleUrls: ['./current-checkin.page.scss'],
})
export class CurrentCheckinPage implements OnInit {
    UtilService = UtilService;
    user: User;

    list = [];

    isCheckedIn = false;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public apiService: ApiService,
        public utilService: UtilService,
        public route: ActivatedRoute,
        private accountService: AccountService,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
    ) {
        this.user = this.accountService.userValue;
        if (sharedDataService.checkedInPlaces && sharedDataService.checkedInPlaces.length > 0) {
            this.isCheckedIn = true;
        }
    }

    ngOnInit() {
        this.getPersonalModeAvailableDocuments();
        this.getPersonalModeAvailableForms();
    }

    getPersonalModeAvailableForms = () => {
        this.apiService.getPersonalModeAvailableForms(this.user.userId, this.user.companyID).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {

            }
        });
    };

    getPersonalModeAvailableDocuments = () => {
        this.apiService.getPersonalModeAvailableDocuments(this.user.userId, this.user.companyID).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {

            }
        });
    };

    openWorkPermit(item) {
        if (item.navigation_type === 'work-permit') {
            this.navCtrl.navigateForward(['tabs/current-checkin/checkin-workpermit']);
        }
    }
}
