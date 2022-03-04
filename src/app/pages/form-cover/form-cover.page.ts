import { Component, OnInit } from "@angular/core";
import { DemoDataService } from "../../services/demo-data.service";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import {
  FileTransfer,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FilehandlerService } from "../../services/filehandler.service";
import { SharedDataService } from "../../services/shared-data.service";
import { ActivityListItem } from "../../_models/activityListItem";
import { SignOffFormDetail } from "../../_models/signOffFormDetail";
import { EnumService } from "../../services/enum.service";
import { FormItem } from "../../_models/formItem";
import { AttachmentItem } from "../../_models/attachmentItem";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { Response } from "../../_models";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { share } from "rxjs/operators";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-form-cover",
  templateUrl: "./form-cover.page.html",
  styleUrls: ["./form-cover.page.scss"],
})
export class FormCoverPage {
  EnumService = EnumService;

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
    if (environment.isFormPreview) {
      this.route.queryParams.subscribe((param) => {
        if (param.userId) {
          sharedDataService.userId = param.userId;
        }
        if (param.formID && param.formVersionID) {
          if (param.languageID) {
            sharedDataService.currentLanguageId = param.languageID;
            sharedDataService.getLangFileTranslation(() => {
              this.getFormBuilderDetails(
                param.formType,
                param.formID,
                param.formVersionID
              );
            });
          } else {
            this.getFormBuilderDetails(
              param.formType,
              param.formID,
              param.formVersionID
            );
          }
        }
      });
    }
  }

  ionViewWillEnter() {
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

    if (!environment.isFormPreview) {
      if (
        this.sharedDataService.viewFormFor ===
          EnumService.ViewFormForType.Activity ||
        this.sharedDataService.viewFormFor ===
          EnumService.ViewFormForType.Induction ||
        this.sharedDataService.viewFormFor ===
          EnumService.ViewFormForType.CurrentCheckin ||
        this.sharedDataService.viewFormFor ===
          EnumService.ViewFormForType.CurrentCheckinWorkPermit
      ) {
        this.signOffFormDetail = this.sharedDataService.signOffFormDetail;
      }
    }
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
    if (
      this.sharedDataService.viewFormFor ===
      EnumService.ViewFormForType.Induction
    ) {
      this.navCtrl.navigateBack("/checkinout-confirm");
    } else {
      this.navCtrl.back();
    }
  }

  async getFormBuilderDetails(
    formType,
    formID,
    formVersionID,
    callBack = null
  ) {
    this.utilService.presentLoadingWithOptions();

    this.apiService.getFormBuilderDetails(formID, formVersionID).subscribe(
      (response: Response) => {
        this.utilService.hideLoading();
        const formDetails = response.Result;

        this.sharedDataService.formBuilderDetails = formDetails;

        switch (formType) {
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
            this.navCtrl.navigateForward(["/form-custom"]);
        }
      },
      (error) => {
        this.utilService.showAlert(error.message || error);
        this.utilService.hideLoading();
      }
    );
  }

  onContinue() {
    if (this.signOffFormDetail) {
      const formData: FormItem = this.signOffFormDetail?.formData;

      this.getFormBuilderDetails(
        formData?.formType,
        formData?.formID,
        formData?.formVersionID
      );
    }
  }
}
