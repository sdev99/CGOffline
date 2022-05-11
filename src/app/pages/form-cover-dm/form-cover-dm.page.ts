import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { FilehandlerService } from "../../services/filehandler.service";
import { SharedDataService } from "../../services/shared-data.service";
import { EnumService } from "../../services/enum.service";
import { UtilService } from "../../services/util.service";
import { SignOffFormDetail } from "../../_models/signOffFormDetail";
import { ApiService } from "../../services/api.service";
import { DomSanitizer } from "@angular/platform-browser";
import { AttachmentItem } from "../../_models/attachmentItem";
import { Response } from "../../_models";
import { FormItem } from "../../_models/formItem";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
    selector: "app-form-cover-dm",
    templateUrl: "./form-cover-dm.page.html",
    styleUrls: ["./form-cover-dm.page.scss"],
})
export class FormCoverDmPage implements OnInit {
    signOffFormDetail: SignOffFormDetail;

    isSavedStates: boolean = false;
    displaySavedStatesList: boolean = false;
    savedStates = [];

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        private apiService: ApiService,
        public sharedDataService: SharedDataService,
        public offlineManagerService: OfflineManagerService,
        public utilService: UtilService,
        public sanitizer: DomSanitizer
    ) {}

    ionViewWillEnter() {
        if (
            this.sharedDataService.dedicatedModeProcessType ===
                EnumService.DedicatedModeProcessTypes.Form ||
            this.sharedDataService.dedicatedModeProcessType ===
                EnumService.DedicatedModeProcessTypes.WorkPermit ||
            this.sharedDataService.viewFormFor ===
                EnumService.ViewFormForType.Induction
        ) {
            this.signOffFormDetail = this.sharedDataService.signOffFormDetail;
        }

        if (!UtilService.isWebApp()) {
            // Remove all form images directory
            try {
                this.filehandlerService
                    .removeDirectory(
                        this.filehandlerService.offlineFilesDirectory(),
                        StaticDataService.formImagesFolderName
                    )
                    .then(() => {})
                    .catch(() => {});
            } catch (error) {}
        }
    }

    ngOnInit(): void {
        // demo saved states
        this.isSavedStates = true;
        this.savedStates = [
            {
                title: "Saved state 1",
                start_date: "14 Jul 2020, 11:40 PM",
                last_save: "14 Jul 2020, 11:40 PM",
            },
            {
                title: "Saved state 2",
                start_date: "14 Jul 2020, 11:40 PM",
                last_save: "14 Jul 2020, 11:40 PM",
            },
        ];
    }

    openFile(attachmentItem: AttachmentItem) {
        if (this.sharedDataService.offlineMode) {
            const fileUrl = this.utilService.getOfflineFileUrl(
                attachmentItem.documentFileName,
                "document"
            );

            this.filehandlerService.openDownloadedFile(
                fileUrl,
                attachmentItem.documentFileName
            );
        } else {
            this.utilService.presentLoadingWithOptions();
            this.apiService
                .getDocumentDirectoryFilePath(attachmentItem.documentFileName)
                .subscribe(
                    (path) => {
                        this.utilService.hideLoading();
                        this.filehandlerService.openFile(path);
                    },
                    (err) => {
                        this.utilService.hideLoading();
                    }
                );
        }
    }

    onClose() {
        this.navCtrl.navigateBack("/dashboard-dm");
    }

    /**
     * Remove form saved state
     */
    removeState(item) {
        this.utilService.showConfirmAlert(
            "You are about to delete “Saved State 1”. Please confim.",
            "Confirm Deletion.",
            (status) => {
                if (status) {
                    // Remove form state from localdb
                }
            },
            "Cancel",
            "Delete"
        );
    }

    async getFormBuilderDetails(callBack) {
        const formData = this.signOffFormDetail?.formData;

        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getFormBuilderDetail(
                    formData.formID,
                    formData.formVersionID,
                    formData.formVersionNo
                )
                .then((res) => {
                    callBack(res);
                });
        } else {
            this.utilService.presentLoadingWithOptions();

            this.apiService
                .getFormBuilderDetails(
                    formData?.formID,
                    formData?.formVersionID
                )
                .subscribe(
                    (response: Response) => {
                        this.utilService.hideLoading();
                        callBack(response.Result);
                    },
                    (error) => {
                        this.utilService.showAlert(error.message || error);
                        this.utilService.hideLoading();
                    }
                );
        }
    }

    async onContinue() {
        if (this.signOffFormDetail) {
            const formData: FormItem = this.signOffFormDetail?.formData;

            this.getFormBuilderDetails((formDetails) => {
                this.sharedDataService.formBuilderDetails = formDetails;

                switch (formData?.formType) {
                    case EnumService.FormTypes.HAV:
                        this.navCtrl.navigateForward(["/form-hav"]);
                        break;

                    case EnumService.FormTypes.RISK_ASSESSMENT:
                        this.navCtrl.navigateForward(["/form-riskassessment"]);
                        break;

                    case EnumService.FormTypes.CUSTOM:
                        this.navCtrl.navigateForward(["/form-custom"]);
                        break;

                    case EnumService.FormTypes.ACCIDENT_REPORT:
                        this.navCtrl.navigateForward(["/form-accident-report"]);
                        break;

                    case EnumService.FormTypes.WORK_PERMIT:
                        this.navCtrl.navigateForward(["/form-workpermit"]);
                        break;
                    default:
                }
            });
        }
    }
}
