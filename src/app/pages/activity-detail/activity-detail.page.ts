import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';
import {SharedDataService} from '../../services/shared-data.service';
import {ActivityListItem} from '../../_models/activityListItem';
import {Response, User} from '../../_models';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {AttachmentItem} from '../../_models/attachmentItem';
import {AccountService} from '../../services/account.service';
import {ObservablesService} from '../../services/observables.service';
import {ActivitySignOffDocumentDetail} from '../../_models/activitySignOffDocumentDetail';
import {SignOffDetailsPostData} from '../../_models/signOffDetailsPostData';
import {ActivitySignOffFormDetail} from '../../_models/activitySignOffFormDetail';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.page.html',
    styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
    EnumService = EnumService;
    activityListItem: ActivityListItem;
    activityAttachments: Array<AttachmentItem>;
    user: User;

    errorMessage;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private sharedDataService: SharedDataService,
        private filehandlerService: FilehandlerService,
        private apiService: ApiService,
        private utilService: UtilService,
        public alertController: AlertController,
        private accountService: AccountService,
        private observablesService: ObservablesService,
    ) {
        this.user = this.accountService.userValue;
        this.activityListItem = this.sharedDataService.currentActivityOpen;
    }

    async ngOnInit() {
        const loading = await this.utilService.startLoadingWithOptions();
        this.getActivityDetail(() => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    /**
     * Back to the previous screen when close button click
     */
    onClose() {
        this.navCtrl.back();
    }

    /**
     * Get activity detail
     * @param callBack it is fire when api request finished with/without error
     */
    getActivityDetail = (callBack = null) => {
        const finished = () => {
            if (callBack) {
                callBack();
            }
        };

        if (this.activityListItem) {
            this.apiService.getActivityDetail(this.activityListItem.activityIndividualID).subscribe((response: Response) => {
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    const result = response.Result;
                    if (result) {
                        this.activityListItem = result.activityData;
                        this.activityAttachments = result.activityAttachments;
                    }
                }
                finished();
            }, (error) => {
                finished();
            });
        }
    };

    /**
     * Open attachement
     * @param attachment AttachmentItem
     */
    openFile(attachment: AttachmentItem) {
        // this.apiService.downloadDocument(attachment.documentFileName, this.user.companyFolderName).subscribe((response) => {
        //
        // }, (error) => {
        //
        // });
        if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && attachment && attachment.documentFileName) {
            this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + attachment.documentFileName);
        }
    }

    /**
     * Open form for Form type activity
     */
    async openForm() {
        if (this.activityListItem) {
            const loading = await this.utilService.startLoadingWithOptions();
            this.apiService.getActivitySignOffFormDetail(this.activityListItem.formID).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.sharedDataService.viewFormFor = EnumService.ViewFormForType.Activity;
                    this.sharedDataService.activitySignOffFormDetail = response.Result as ActivitySignOffFormDetail;
                    this.navCtrl.navigateForward(['/form-cover']);
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);
            });
        }
    }

    /**
     * Open document for Document type activity
     */
    async openDocument() {
        if (this.activityListItem) {
            const loading = await this.utilService.startLoadingWithOptions();
            this.apiService.getActivitySignOffDocumentDetail(this.activityListItem.documentID).subscribe((response: Response) => {
                this.utilService.hideLoadingFor(loading);
                if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    const activitySignOffDocumentDetail = response.Result as ActivitySignOffDocumentDetail;
                    this.sharedDataService.signOffFor = EnumService.SignOffType.DOCUMENT_ACTIVITY;
                    this.sharedDataService.activitySignOffDocumentDetail = activitySignOffDocumentDetail;

                    this.sharedDataService.signOffDetailsPostData = {
                        userId: this.user.userId,
                        activityIndividualID: this.activityListItem.activityIndividualID,
                        documentVersionID: activitySignOffDocumentDetail.documentVersionID,
                        formVersionID: 0,
                        latitude: this.sharedDataService.myCurrentGeoLocation.coords.latitude,
                        longitude: this.sharedDataService.myCurrentGeoLocation.coords.longitude,
                    } as SignOffDetailsPostData;

                    if (activitySignOffDocumentDetail.isDigitalSignOff) {
                        this.navCtrl.navigateForward(['/signoff-digitalink']);
                    } else if (activitySignOffDocumentDetail.isPhotoSignOff) {
                        this.navCtrl.navigateForward(['/signoff-photo']);
                    } else {
                        this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
                    }
                }
            }, (error) => {
                this.utilService.hideLoadingFor(loading);
            });
        }
    }

    /**
     * For custom activity only, Confirm before call api
     */
    async markAsCompleted() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Confirm Completion',
            message: 'You are about to mark this activity as completed. Please confirm. ',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {

                    }
                }, {
                    text: 'Ok',
                    handler: () => {
                        this.completeCustomActivity();
                    }
                }
            ]
        });
        await alert.present();
    }

    /**
     * For custom activity only
     */
    async completeCustomActivity() {
        if (this.activityListItem && this.activityListItem.activityIndividualID) {
            const loading = await this.utilService.startLoadingWithOptions();

            this.apiService.activityCompleted(this.user.userId, this.activityListItem.activityIndividualID).subscribe(() => {
                this.utilService.hideLoadingFor(loading);
                this.navCtrl.back();
                this.observablesService.publishSomeData(EnumService.ObserverKeys.ACTIVITY_COMPLETED, true);
            }, (error) => {
                this.errorMessage = error.message || error;
                this.utilService.hideLoadingFor(loading);
            });
        }
    }

}
