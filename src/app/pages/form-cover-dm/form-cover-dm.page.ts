import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {UtilService} from '../../services/util.service';
import {SignOffFormDetail} from '../../_models/signOffFormDetail';
import {ApiService} from '../../services/api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {AttachmentItem} from '../../_models/attachmentItem';
import {Response} from '../../_models';
import {FormItem} from '../../_models/formItem';

@Component({
    selector: 'app-form-cover-dm',
    templateUrl: './form-cover-dm.page.html',
    styleUrls: ['./form-cover-dm.page.scss'],
})
export class FormCoverDmPage implements OnInit {
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
        if (this.sharedDataService.dedicatedModeProcessType === EnumService.DedicatedModeProcessTypes.Form ||
            this.sharedDataService.dedicatedModeProcessType === EnumService.DedicatedModeProcessTypes.WorkPermit ||
            this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction
        ) {
            this.signOffFormDetail = this.sharedDataService.signOffFormDetail;
        }
    }


    ngOnInit(): void {

    }

    openFile(attachmentItem: AttachmentItem) {
        this.filehandlerService.openFile(this.sharedDataService.globalDirectories?.documentDirectory + '' + attachmentItem.documentFileName);
    }

    onClose() {
        this.navCtrl.navigateBack('/dashboard-dm');
    }

    async getFormBuilderDetails(callBack) {
        const formData = this.signOffFormDetail?.formData;
        this.utilService.presentLoadingWithOptions();

        this.apiService.getFormBuilderDetails(formData?.formID, formData?.formVersionID).subscribe((response: Response) => {
            this.utilService.hideLoading();
            callBack(response.Result);
        }, error => {
            this.utilService.showAlert(error.message || error);
            this.utilService.hideLoading();
        });
    }

    async onContinue() {
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
