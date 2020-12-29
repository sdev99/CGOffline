import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilehandlerService} from '../../services/filehandler.service';
import {SharedDataService} from '../../services/shared-data.service';
import {ActivityListItem} from '../../_models/activityListItem';
import {SignOffFormDetail} from '../../_models/signOffFormDetail';
import {EnumService} from '../../services/enum.service';
import {FormItem} from '../../_models/formItem';
import {AttachmentItem} from '../../_models/attachmentItem';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {Response} from '../../_models';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-form-cover',
    templateUrl: './form-cover.page.html',
    styleUrls: ['./form-cover.page.scss'],
})
export class FormCoverPage {
    signOffFormDetail: SignOffFormDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        private apiService: ApiService,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
        public sanitizer: DomSanitizer
    ) {


    }

    ionViewWillEnter() {
        if (this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Activity ||
            this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction ||
            this.sharedDataService.viewFormFor === EnumService.ViewFormForType.CurrentCheckin ||
            this.sharedDataService.viewFormFor === EnumService.ViewFormForType.CurrentCheckinWorkPermit
        ) {
            this.signOffFormDetail = this.sharedDataService.signOffFormDetail;
        }
    }

    openFile(attachmentItem: AttachmentItem) {
        this.filehandlerService.openFile(this.sharedDataService.globalDirectories?.documentDirectory + '' + attachmentItem.documentFileName);
    }

    onClose() {
        if (this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction) {
            this.navCtrl.navigateBack('/checkinout-confirm');
        } else {
            this.navCtrl.back();
        }
    }

    async getFormBuilderDetails(callBack) {
        const formData = this.signOffFormDetail?.formData;
        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getFormBuilderDetails(formData?.formID, formData?.formVersionID).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            callBack(response.Result);
        }, error => {
            this.utilService.showAlert(error.message || error);
            this.utilService.hideLoadingFor(loading);
        });
    }

    onContinue() {
        if (this.signOffFormDetail) {

            const formData: FormItem = this.signOffFormDetail?.formData;

            this.getFormBuilderDetails((formDetails) => {
                this.sharedDataService.formBuilderDetails = formDetails;

                switch (formData?.formType) {
                    case EnumService.FormTypes.HAV:
                        this.navCtrl.navigateForward(['/form-hav']);
                        break;

                    case EnumService.FormTypes.RISK_ASSESSMENT:
                        this.navCtrl.navigateForward(['/form-riskassessment']);
                        break;

                    case EnumService.FormTypes.CUSTOM:
                        this.navCtrl.navigateForward(['/form-custom']);
                        break;

                    case EnumService.FormTypes.ACCIDENT_REPORT:
                        this.navCtrl.navigateForward(['/form-accident-report']);
                        break;

                    case EnumService.FormTypes.WORK_PERMIT:
                        this.navCtrl.navigateForward(['/form-workpermit']);
                        break;
                    default:
                }
            });
        }
    }
}
