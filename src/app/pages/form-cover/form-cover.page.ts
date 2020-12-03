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
import {ActivitySignOffFormDetail} from '../../_models/activitySignOffFormDetail';
import {EnumService} from '../../services/enum.service';
import {FormItem} from '../../_models/formItem';
import {AttachmentItem} from '../../_models/attachmentItem';

@Component({
    selector: 'app-form-cover',
    templateUrl: './form-cover.page.html',
    styleUrls: ['./form-cover.page.scss'],
})
export class FormCoverPage {
    activitySignOffFormDetail: ActivitySignOffFormDetail;
    entityName;

    inductionContentItemIndex = 0;
    inductionItem;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        public sharedDataService: SharedDataService,
    ) {
        if (sharedDataService.viewFormFor === EnumService.ViewFormForType.Activity || this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction) {
            this.activitySignOffFormDetail = sharedDataService.activitySignOffFormDetail;
        }

        if (sharedDataService.viewFormFor === EnumService.ViewFormForType.Activity) {
            this.entityName = sharedDataService?.currentSelectedCheckinPlace?.entityName;
        } else if (sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction) {
            this.entityName = sharedDataService?.checkInForLocation?.locationName;

            route.queryParams.subscribe((params: any) => {
                if (params) {
                    this.inductionContentItemIndex = params.inductionContentItemIndex;
                    if (sharedDataService.checkInDetail
                        && sharedDataService.checkInDetail.checkInInductionItems
                        && sharedDataService.checkInDetail.checkInInductionItems.length > this.inductionContentItemIndex) {
                        this.inductionItem = sharedDataService.checkInDetail.checkInInductionItems[this.inductionContentItemIndex];
                    }
                }
            });
        }
    }

    openFile(attachmentItem: AttachmentItem) {
        this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + attachmentItem.documentFileName);
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        let formData: FormItem;
        if (this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Activity || this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction) {
            formData = this.activitySignOffFormDetail?.formData;
        }

        // when form data api create we will navigate

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
            default:
        }
    }
}
