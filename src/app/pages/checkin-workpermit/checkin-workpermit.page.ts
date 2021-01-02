import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {FormItem} from '../../_models/formItem';
import {UtilService} from '../../services/util.service';
import {Response, User} from '../../_models';
import {SignOffFormDetail} from '../../_models/signOffFormDetail';
import {ApiService} from '../../services/api.service';
import {AccountService} from '../../services/account.service';
import {CheckedInDetailItem} from '../../_models/checkedInDetailItem';

@Component({
    selector: 'app-checkin-workpermit',
    templateUrl: './checkin-workpermit.page.html',
    styleUrls: ['./checkin-workpermit.page.scss'],
})
export class CheckinWorkpermitPage implements OnInit {
    UtilService = UtilService;
    availableWorkPermits: [FormItem];
    user: User;

    isCheckedIn = false;

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
        public apiService: ApiService,
        public navCtrl: NavController,
        private accountService: AccountService,
    ) {
        if (sharedDataService.dedicatedMode) {
            this.isCheckedIn = sharedDataService.checkedInPlaces ? sharedDataService.checkedInPlaces.length > 0 : false;
            this.user = this.accountService.userValue;
        }
        this.availableWorkPermits = sharedDataService.availableWorkPermits;
    }

    ngOnInit() {
    }

    fileIcon(type) {
        let iconName = '';
        switch (type) {
            case 'document':
                iconName = 'attachment1';
                break;
            case 'pdf':
                iconName = 'attachment2';
                break;
            case 'form':
                iconName = 'attachment3';
                break;
            case 'folder':
                iconName = 'attachment4';
                break;
            case 'image':
                iconName = 'attachment5';
                break;
            case 'video':
                iconName = 'attachment6';
                break;
            default:
                iconName = 'attachment1';

        }
        return './assets/icon/' + iconName + '.svg';
    }

    back() {
        this.navController.back();
    }

    onSelect(item) {
        if (this.sharedDataService.dedicatedMode) {
            this.sharedDataService.signOffFormDetail = item;
            this.sharedDataService.signOffFor = EnumService.SignOffType.WORK_PERMIT_DM;
            this.navController.navigateForward('form-open-auth-dm');
        } else {
            this.navController.navigateForward('form-cover', {
                queryParams: item
            });
        }
    }


    async openForm(form: FormItem) {
        const loading = await this.utilService.startLoadingWithOptions();

        if (this.sharedDataService.dedicatedMode) {
            const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
            this.apiService.getDedicatedModeSignOffFormDetail(form.formID).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.sharedDataService.signOffFor = EnumService.SignOffType.FORMS_DM;
                    this.sharedDataService.viewFormFor = EnumService.ViewFormForType.WorkPermitDM;
                    this.sharedDataService.signOffFormDetail = response.Result as SignOffFormDetail;
                    this.sharedDataService.dedicatedModeTempAuthFor = EnumService.DedicatedModeTempAuthType.WorkPermit;
                    this.navController.navigateForward('/form-open-auth-dm');
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);
            });
        } else {
            const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
            this.apiService.getSignOffFormDetail(this.user?.userId, form.formID, place?.locationID, place?.projectID, place?.inventoryItemID).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.sharedDataService.viewFormFor = EnumService.ViewFormForType.CurrentCheckinWorkPermit;
                    this.sharedDataService.signOffFormDetail = response.Result as SignOffFormDetail;
                    this.navCtrl.navigateForward(['/form-cover']);
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);
            });
        }
    }
}
