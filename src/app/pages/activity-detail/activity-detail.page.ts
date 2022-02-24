import { Component, NgZone, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { DemoDataService } from "../../services/demo-data.service";
import { ActivatedRoute } from "@angular/router";
import { FilehandlerService } from "../../services/filehandler.service";
import { SharedDataService } from "../../services/shared-data.service";
import { ActivityListItem } from "../../_models/activityListItem";
import { Response, User } from "../../_models";
import { EnumService } from "../../services/enum.service";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { AttachmentItem } from "../../_models/attachmentItem";
import { AccountService } from "../../services/account.service";
import { ObservablesService } from "../../services/observables.service";
import { DocumentDetail } from "../../_models/documentDetail";
import { SignOffDetailsPostData } from "../../_models/signOffDetailsPostData";
import { SignOffFormDetail } from "../../_models/signOffFormDetail";
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-activity-detail",
  templateUrl: "./activity-detail.page.html",
  styleUrls: ["./activity-detail.page.scss"],
})
export class ActivityDetailPage implements OnInit {
  EnumService = EnumService;
  activityListItem: ActivityListItem;
  activityAttachments: Array<AttachmentItem>;
  user: User;

  errorMessage;
  documentViewed = false;

  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public ngZone: NgZone,
    public sharedDataService: SharedDataService,
    private filehandlerService: FilehandlerService,
    private apiService: ApiService,
    public utilService: UtilService,
    public alertController: AlertController,
    private accountService: AccountService,
    private observablesService: ObservablesService,
    private translateService: TranslateService,
    public sanitizer: DomSanitizer
  ) {
    this.user = this.accountService.userValue;
    this.activityListItem = this.sharedDataService.currentActivityOpen;

    this.utilService.presentLoadingWithOptions();
    this.getActivityDetail(() => {
      this.utilService.hideLoading();
    });
  }

  async ngOnInit() {}

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
      this.apiService
        .getActivityDetail(this.activityListItem.activityIndividualID)
        .subscribe(
          (response: Response) => {
            if (
              response.StatusCode ===
              EnumService.ApiResponseCode.RequestSuccessful
            ) {
              const result = response.Result;
              if (result) {
                this.ngZone.run(() => {
                  this.activityListItem = result.activityData;
                  this.activityAttachments = result.activityAttachments;
                });
              }
            }
            finished();
          },
          (error) => {
            finished();
          }
        );
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
    if (attachment && attachment.documentFileName) {
      this.utilService.presentLoadingWithOptions();
      this.apiService
        .getDocumentDirectoryFilePath(attachment.documentFileName)
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

  /**
   * Open form for Form type activity
   */
  async openForm() {
    if (this.activityListItem) {
      this.utilService.presentLoadingWithOptions();

      this.apiService
        .getActivitySignOffFormDetail(
          this.user?.userId,
          this.activityListItem?.formID,
          this.activityListItem?.activityIndividualID
        )
        .subscribe(
          (response: Response) => {
            this.utilService.hideLoading();
            if (
              response.StatusCode ===
              EnumService.ApiResponseCode.RequestSuccessful
            ) {
              this.sharedDataService.viewFormFor =
                EnumService.ViewFormForType.Activity;
              this.sharedDataService.signOffFormDetail =
                response.Result as SignOffFormDetail;
              this.navCtrl.navigateForward(["/form-cover"]);
            }
          },
          (error) => {
            this.utilService.hideLoading();
          }
        );
    }
  }

  /**
   * Open document for Document type activity
   */
  async openDocument() {
    if (this.activityListItem) {
      this.utilService.presentLoadingWithOptions();

      this.apiService
        .getActivitySignOffDocumentDetail(this.activityListItem?.documentID)
        .subscribe(
          (response: Response) => {
            this.utilService.hideLoading();
            if (
              response.StatusCode ===
              EnumService.ApiResponseCode.RequestSuccessful
            ) {
              const signOffDocumentDetail = response.Result as DocumentDetail;
              this.sharedDataService.signOffFor =
                EnumService.SignOffType.DOCUMENT_ACTIVITY;
              this.sharedDataService.signOffDocumentDetail =
                signOffDocumentDetail;

              if (this.documentViewed) {
                this.sharedDataService.signOffDetailsPostData = {
                  userId: this.user?.userId,
                  documentID: this.activityListItem?.documentID,
                  activityIndividualID:
                    this.activityListItem?.activityIndividualID,
                  documentVersionID: signOffDocumentDetail?.documentVersionID,
                  formVersionID: 0,
                  latitude:
                    this.sharedDataService.myCurrentGeoLocation?.coords
                      .latitude,
                  longitude:
                    this.sharedDataService.myCurrentGeoLocation?.coords
                      .longitude,
                  locationID:
                    this.sharedDataService.currentSelectedCheckinPlace
                      ?.locationID,
                  projectID:
                    this.sharedDataService.currentSelectedCheckinPlace
                      ?.projectID,
                  userCheckInDetailID:
                    this.sharedDataService.currentSelectedCheckinPlace
                      ?.userCheckInDetailID,
                  inventoryItemID:
                    this.sharedDataService.currentSelectedCheckinPlace
                      ?.inventoryItemID,
                } as SignOffDetailsPostData;

                if (signOffDocumentDetail.isDigitalSignOff) {
                  this.navCtrl.navigateForward(["/signoff-digitalink"]);
                } else if (signOffDocumentDetail.isPhotoSignOff) {
                  this.navCtrl.navigateForward(["/signoff-photo"]);
                } else {
                  this.sharedDataService.submitPersonalModeSignoffData(
                    this.apiService
                  );
                }
              } else {
                this.utilService.presentLoadingWithOptions();
                this.apiService
                  .getDocumentDirectoryFilePath(
                    signOffDocumentDetail.documentFileName
                  )
                  .subscribe(
                    (path) => {
                      this.utilService.hideLoading();
                      this.filehandlerService.openFile(path).then(() => {
                        this.documentViewed = true;
                      });
                    },
                    (err) => {
                      this.utilService.hideLoading();
                    }
                  );
              }
            }
          },
          (error) => {
            this.utilService.hideLoading();
          }
        );
    }
  }

  /**
   * For custom activity only, Confirm before call api
   */
  async markAsCompleted() {
    const titleKey =
      "PAGESPECIFIC_TEXT.ACTIVITIES.ALERT_ACTIVITY_CONFIRM_COMPLETION_TITLE";
    const descriptionKey =
      "PAGESPECIFIC_TEXT.ACTIVITIES.ALERT_ACTIVITY_CONFIRM_COMPLETION_DESCRIPTION";
    const cancelKey = "SHARED_TEXT.CANCEL";
    const okKey = "SHARED_TEXT.OK";
    this.translateService
      .get([titleKey, descriptionKey, okKey, cancelKey])
      .subscribe(async (res: any) => {
        const alert = await this.alertController.create({
          cssClass: "my-custom-class",
          header: res[titleKey],
          message: res[descriptionKey],
          buttons: [
            {
              text: res[cancelKey],
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {},
            },
            {
              text: res[okKey],
              handler: () => {
                this.completeCustomActivity();
              },
            },
          ],
        });
        await alert.present();
      });
  }

  /**
   * For custom activity only
   */
  async completeCustomActivity() {
    if (this.activityListItem && this.activityListItem.activityIndividualID) {
      this.utilService.presentLoadingWithOptions();

      this.apiService
        .activityCompleted(
          this.user?.userId,
          this.activityListItem.activityIndividualID
        )
        .subscribe(
          () => {
            this.utilService.hideLoading();
            this.navCtrl.back();
            this.observablesService.publishSomeData(
              EnumService.ObserverKeys.ACTIVITY_COMPLETED,
              true
            );
          },
          (error) => {
            this.errorMessage = error.message || error;
            this.utilService.hideLoading();
          }
        );
    }
  }
}
