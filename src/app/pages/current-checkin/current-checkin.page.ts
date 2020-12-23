import {Component, OnInit, ViewChild} from '@angular/core';
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
import {DocumentDetail} from '../../_models/documentDetail';
import {FormItem} from '../../_models/formItem';
import {FilehandlerService} from '../../services/filehandler.service';
import {SignOffFormDetail} from '../../_models/signOffFormDetail';

@Component({
    selector: 'app-current-checkin',
    templateUrl: './current-checkin.page.html',
    styleUrls: ['./current-checkin.page.scss'],
})

export class CurrentCheckinPage implements OnInit {

    UtilService = UtilService;
    user: User;

    isCheckedIn = false;

    availableWorkPermits;
    availableDocuments: [DocumentDetail];
    availableForms: [FormItem];

    isLoading = false;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public apiService: ApiService,
        public utilService: UtilService,
        public route: ActivatedRoute,
        private accountService: AccountService,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
        public filehandlerService: FilehandlerService,
    ) {
        this.user = this.accountService.userValue;
        if (sharedDataService.checkedInPlaces && sharedDataService.checkedInPlaces.length > 0) {
            this.isCheckedIn = true;
        }
    }

    ngOnInit() {
        this.getPersonalModeData();
        this.observablesService.getObservable(EnumService.ObserverKeys.CURRENT_CHECKED_IN_CHANGED).subscribe(() => {
            this.isLoading = true;

            if (!this.sharedDataService.checkedInPlaces || this.sharedDataService.checkedInPlaces.length === 0) {
                this.isCheckedIn = false;
            }
            if (this.sharedDataService.checkedInPlaces && this.sharedDataService.checkedInPlaces.length > 0) {
                this.isCheckedIn = true;
            }

            this.getPersonalModeData(false, () => {
                this.isLoading = false;
            });
        });
    }

    doRefresh(event) {
        this.getPersonalModeData(false, () => {
            event.target.complete();
        });
    }

    getPersonalModeData = async (showLoading = true, callBack = null) => {
        if (showLoading) {
            this.utilService.presentLoadingWithOptions();
        }
        let responseRecievedCount = 0;
        const requestCount = 3;

        const checkAllRequestFinish = () => {
            responseRecievedCount++;
            if (responseRecievedCount === requestCount) {
                this.utilService.hideLoading();
                UtilService.fireCallBack(callBack);
            }
        };

        this.getPersonalModeAvailableWorkPermits(() => {
            checkAllRequestFinish();
        });
        this.getPersonalModeAvailableDocuments(() => {
            checkAllRequestFinish();
        });
        this.getPersonalModeAvailableForms(() => {
            checkAllRequestFinish();
        });
    };

    getPersonalModeAvailableForms = async (callBack = null) => {
        this.apiService.getPersonalModeAvailableForms(this.user.userId, this.user.companyID).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.availableForms = response.Result;
            }
            UtilService.fireCallBack(callBack);
        }, error => {
            this.availableForms = null;
            UtilService.fireCallBack(callBack);
        });
    };

    getPersonalModeAvailableDocuments = async (callBack = null) => {
        this.apiService.getPersonalModeAvailableDocuments(this.user.userId, this.user.companyID).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.availableDocuments = response.Result;
            }
            UtilService.fireCallBack(callBack);
        }, error => {
            this.availableDocuments = null;
            UtilService.fireCallBack(callBack);
        });
    };

    getPersonalModeAvailableWorkPermits = async (callBack = null) => {
        this.apiService.getPersonalModeAvailableWorkPermits(this.user.userId, this.user.companyID).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.availableWorkPermits = response.Result;
            }
            UtilService.fireCallBack(callBack);
        }, error => {
            this.availableWorkPermits = null;
            UtilService.fireCallBack(callBack);
        });
    };

    async openForm(form: FormItem) {
        const loading = await this.utilService.startLoadingWithOptions();
        const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
        this.apiService.getSignOffFormDetail(this.user.userId, form?.formID, place?.locationID, place?.projectID, place?.inventoryItemID).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.sharedDataService.viewFormFor = EnumService.ViewFormForType.CurrentCheckin;
                this.sharedDataService.signOffFormDetail = response.Result as SignOffFormDetail;
                this.navCtrl.navigateForward(['/form-cover']);
            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    openDocument(document: DocumentDetail) {
        this.navCtrl.navigateForward(['/document-openchoice'], {
            queryParams: {document: JSON.stringify(document)}
        });
    }

    openWorkPermit() {
        this.sharedDataService.availableWorkPermits = this.availableWorkPermits;
        this.navCtrl.navigateForward(['tabs/current-checkin/checkin-workpermit']);
    }

}
