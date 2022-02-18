import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { DemoDataService } from "../../services/demo-data.service";
import { NavController } from "@ionic/angular";
import { ApiService } from "../../services/api.service";
import { Response, User } from "../../_models";
import { AccountService } from "../../services/account.service";
import { SharedDataService } from "../../services/shared-data.service";
import { EnumService } from "../../services/enum.service";
import { GlobalDirectory } from "../../_models/globalDirectory";
import { UtilService } from "../../services/util.service";
import { ActivityListItem } from "../../_models/activityListItem";
import { ObservablesService } from "../../services/observables.service";
import { StaticDataService } from "src/app/services/static-data.service";
import { FilehandlerService } from "src/app/services/filehandler.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit, OnDestroy {
  user: User;
  activityList: Array<ActivityListItem>;
  activityOverviewData;
  isRefreshing = false;

  constructor(
    public navCtrl: NavController,
    private apiService: ApiService,
    public utilService: UtilService,
    private accountService: AccountService,
    private filehandlerService: FilehandlerService,
    public sharedDataService: SharedDataService,
    private observablesService: ObservablesService
  ) {
    this.activityList = sharedDataService.activityList;
    this.activityOverviewData = sharedDataService.activityOverviewData;

    this.user = this.accountService.userValue;

    if (!this.activityList) {
      this.utilService.presentLoadingWithOptions();
    }
    this.getActivityList(() => {
      this.utilService.hideLoading();
    });
  }

  ngOnInit() {
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

    if (!this.sharedDataService.dedicatedMode) {
      // if no user found or company is deleted , logout the user

      if (this.accountService.userValue?.userId) {
        this.accountService
          .getUserProfile(this.accountService.userValue?.userId)
          .subscribe(
            (profile) => {
              if (profile && profile.isActive) {
                this.sharedDataService.getLangFileTranslation(() => {});
              } else {
                this.accountService
                  .logout(this.accountService.userValue?.userId, true)
                  .subscribe(() => {});
              }
            },
            (error) => {
              if (
                error.error.StatusCode ===
                EnumService.ApiResponseCode.InvalidData
              ) {
                this.accountService
                  .logout(this.accountService.userValue?.userId, true)
                  .subscribe(() => {});
              }
            }
          );
      }

      this.apiService
        .getGlobalDirectories(this.user?.companyFolderName)
        .subscribe(
          (response) => {
            if (response) {
              this.sharedDataService.globalDirectories =
                response as GlobalDirectory;
              localStorage.setItem(
                EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES,
                JSON.stringify(response)
              );
            }
          },
          (error) => {}
        );

      this.observablesService
        .getObservable(EnumService.ObserverKeys.ACTIVITY_COMPLETED)
        .subscribe(() => {
          this.getActivityList();
        });
    }

    this.utilService.presentLoadingWithOptions();
    this.sharedDataService.getLangFileTranslation(() => {
      this.utilService.hideLoading();
    });

    if (UtilService.isLocalHost()) {
      setTimeout(() => {
        const testFormType: any = "";

        switch (testFormType) {
          case "hav":
            this.sharedDataService.formBuilderDetails = JSON.parse(
              '{"formId":541,"title":"Hav Form Test","description":null,"formVersionId":830,"formVersionNo":1,"isDraft":false,"formTypeID":4,"companyId":27,"defaultLanguageId":35,"isPreview":false,"sections":[{"sectionId":1811,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":true,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":1953,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"HAVs Assessment"}],"questions":[{"questionId":5569,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":1,"sectionID":1811,"questionTranslations":[{"questionTranslationId":5841,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date of Usage","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]},{"questionId":5570,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":2,"sectionID":1811,"questionTranslations":[{"questionTranslationId":5842,"questionTranslationLanguageId":35,"questionTranslationTitle":"Manufacturer","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]},{"questionId":5571,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":3,"sectionID":1811,"questionTranslations":[{"questionTranslationId":5843,"questionTranslationLanguageId":35,"questionTranslationTitle":"Type","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]},{"questionId":5572,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":4,"sectionID":1811,"questionTranslations":[{"questionTranslationId":5844,"questionTranslationLanguageId":35,"questionTranslationTitle":"Model","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]},{"questionId":5573,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":5,"sectionID":1811,"questionTranslations":[{"questionTranslationId":5845,"questionTranslationLanguageId":35,"questionTranslationTitle":"Planned Time of Use (in minutes)","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"questionActivityTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"whoDefinesDateType":null,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedAvailableUsers":[],"permitIssuedAvailableUserGroups":[],"permitNotIssuedAvailableUsers":[],"permitNotIssuedAvailableUserGroups":[]},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"availableUsers":[],"availableUserGroups":[]},"riskAssessmentDetails":{"riskAssessmentId":0,"controlMeasureAddOptions":[],"allowEndUserToAddHazardsAndCM":true,"selectedControlMeasureAddOption":0,"formVersionID":830},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}'
            );
            this.navCtrl.navigateForward(["/form-hav"]);

            break;
          case "custom":
            this.sharedDataService.formBuilderDetails = JSON.parse(
              '{"formId":582,"title":"Custom Form  ScanQrCode Test","description":null,"formVersionId":929,"formVersionNo":6,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"isPreview":false,"sections":[{"sectionId":1975,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":2169,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section one"}],"questions":[{"questionId":5984,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":16,"questionDisplayOrder":1,"sectionID":1975,"questionTranslations":[{"questionTranslationId":6381,"questionTranslationLanguageId":35,"questionTranslationTitle":"3D Matrix ","questionTranslationInstructionOrNote":"3D matrix note for table","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":false,"matrixRows":[{"matrixRowId":14,"matrixRowDisplayOrder":1,"matrixRowTranslations":[{"matrixRowTranslationId":14,"matrixRowTranslationLanguageId":35,"matrixRowTranslationName":"Row 1"}]},{"matrixRowId":15,"matrixRowDisplayOrder":2,"matrixRowTranslations":[{"matrixRowTranslationId":15,"matrixRowTranslationLanguageId":35,"matrixRowTranslationName":"EVENLY VERY LONG ROW NAME"}]},{"matrixRowId":16,"matrixRowDisplayOrder":3,"matrixRowTranslations":[{"matrixRowTranslationId":16,"matrixRowTranslationLanguageId":35,"matrixRowTranslationName":"Row3"}]},{"matrixRowId":17,"matrixRowDisplayOrder":4,"matrixRowTranslations":[{"matrixRowTranslationId":17,"matrixRowTranslationLanguageId":35,"matrixRowTranslationName":"EVENLY VERY LONG ROW NAME"}]}],"matrixColumns":[{"matrixColumnId":18,"matrixColumnDisplayOrder":1,"matrixColumnTranslations":[{"matrixColumnTranslationId":18,"matrixColumnTranslationLanguageId":35,"matrixColumnTranslationName":"EVENLY VERY LONG COLUMN NAME"}]},{"matrixColumnId":19,"matrixColumnDisplayOrder":2,"matrixColumnTranslations":[{"matrixColumnTranslationId":19,"matrixColumnTranslationLanguageId":35,"matrixColumnTranslationName":"COLUMN NAME"}]},{"matrixColumnId":20,"matrixColumnDisplayOrder":3,"matrixColumnTranslations":[{"matrixColumnTranslationId":20,"matrixColumnTranslationLanguageId":35,"matrixColumnTranslationName":"COLUMN NAME"}]},{"matrixColumnId":21,"matrixColumnDisplayOrder":4,"matrixColumnTranslations":[{"matrixColumnTranslationId":21,"matrixColumnTranslationLanguageId":35,"matrixColumnTranslationName":"COLUMN NAME"}]},{"matrixColumnId":22,"matrixColumnDisplayOrder":5,"matrixColumnTranslations":[{"matrixColumnTranslationId":22,"matrixColumnTranslationLanguageId":35,"matrixColumnTranslationName":"EVENLY VERY LONG COLUMN NAME"}]}]},{"questionId":5985,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":15,"questionDisplayOrder":2,"sectionID":1975,"questionTranslations":[{"questionTranslationId":6382,"questionTranslationLanguageId":35,"questionTranslationTitle":"Can you scan in your forms?","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":true,"allowQRCodeDocument":false,"allowQRCodeForm":true,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]},{"questionId":5986,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":15,"questionDisplayOrder":3,"sectionID":1975,"questionTranslations":[{"questionTranslationId":6383,"questionTranslationLanguageId":35,"questionTranslationTitle":"Can you scan in your Users?","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":true,"matrixRows":[],"matrixColumns":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"questionActivityTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"whoDefinesDateType":null,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedAvailableUsers":[],"permitIssuedAvailableUserGroups":[],"permitNotIssuedAvailableUsers":[],"permitNotIssuedAvailableUserGroups":[]},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"availableUsers":[],"availableUserGroups":[]},"riskAssessmentDetails":{"riskAssessmentId":0,"controlMeasureAddOptions":[],"allowEndUserToAddHazardsAndCM":true,"selectedControlMeasureAddOption":0,"formVersionID":929},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[{"userId":"e243237f-3147-4810-9dbd-6f5ea7bffb30","userName":"Demo Two App"}],"taskTemplates":[]}'
            );
            this.navCtrl.navigateForward(["/form-custom"]);
            break;
          case "riskassessment":
            this.sharedDataService.formBuilderDetails = JSON.parse(
              '{"formId":589,"title":"Risk Assessment QR Scan Test Form","description":null,"formVersionId":922,"formVersionNo":1,"isDraft":false,"formTypeID":2,"companyId":27,"defaultLanguageId":35,"isPreview":false,"sections":[{"sectionId":1969,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":true,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":2163,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Risk Assessment"}],"questions":[],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"questionActivityTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"whoDefinesDateType":null,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedAvailableUsers":[],"permitIssuedAvailableUserGroups":[],"permitNotIssuedAvailableUsers":[],"permitNotIssuedAvailableUserGroups":[]},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"availableUsers":[],"availableUserGroups":[]},"riskAssessmentDetails":{"riskAssessmentId":40,"controlMeasureAddOptions":[],"allowEndUserToAddHazardsAndCM":true,"selectedControlMeasureAddOption":3,"formVersionID":922},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}'
            );
            this.navCtrl.navigateForward(["/form-riskassessment"]);
            break;
          default:
            break;
        }
      }, 2000);
    }
  }

  ionViewWillEnter() {
    this.accountService.checkForMobileLanguageId();
    this.observablesService.publishSomeData(
      EnumService.ObserverKeys.REFRESH_CURRENT_CHECKIN_LIST,
      {}
    );
  }

  async testFormPreview() {
    this.utilService.presentLoadingWithOptions();

    const formID = 383;
    const formVersionID = 588;

    this.apiService.getFormBuilderDetails(formID, formVersionID).subscribe(
      (response: Response) => {
        this.sharedDataService.formBuilderDetails = response.Result;
        this.navCtrl.navigateForward(["/form-custom"]);

        this.utilService.hideLoading();
      },
      (error) => {
        this.utilService.hideLoading();
      }
    );
  }

  ngOnDestroy(): void {
    this.observablesService.removeObservable(
      EnumService.ObserverKeys.ACTIVITY_COMPLETED
    );
  }

  getActivityList = (callBack = null) => {
    this.apiService.getActivityList(this.user?.userId).subscribe(
      (response: Response) => {
        if (
          response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful
        ) {
          const result = response.Result;
          if (result) {
            this.activityList = result.activityList;
            this.activityOverviewData = result.activityOverviewData;
            this.sharedDataService.activityList = result.activityList;
            this.sharedDataService.activityOverviewData =
              result.activityOverviewData;
          }
        }
        UtilService.fireCallBack(callBack);
      },
      (error) => {
        this.activityList = null;
        this.activityOverviewData = null;
        this.sharedDataService.activityList = null;
        this.sharedDataService.activityOverviewData = null;
        UtilService.fireCallBack(callBack);
      }
    );
  };

  doRefresh(event) {
    this.isRefreshing = true;
    this.getActivityList(() => {
      this.isRefreshing = false;
      event.target.complete();
    });
  }

  openActivityDetail(activity: ActivityListItem) {
    this.sharedDataService.currentActivityOpen = activity;
    this.navCtrl.navigateForward(["/activity-detail"]);
  }
}
