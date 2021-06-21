import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { DemoDataService } from '../../services/demo-data.service';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Response, User } from '../../_models';
import { AccountService } from '../../services/account.service';
import { SharedDataService } from '../../services/shared-data.service';
import { EnumService } from '../../services/enum.service';
import { GlobalDirectory } from '../../_models/globalDirectory';
import { UtilService } from '../../services/util.service';
import { ActivityListItem } from '../../_models/activityListItem';
import { ObservablesService } from '../../services/observables.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
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
		if (!this.sharedDataService.dedicatedMode) {
			// if no user found or company is deleted , logout the user

			if (this.accountService.userValue?.userId) {
				this.accountService.getUserProfile(this.accountService.userValue?.userId).subscribe(
					(profile) => {
						if (!profile) {
							this.accountService.logout(this.accountService.userValue?.userId, true).subscribe(() => {});
						} else {
							this.sharedDataService.getLangFileTranslation(() => {});
						}
					},
					(error) => {
						if (error.error.StatusCode === EnumService.ApiResponseCode.InvalidData) {
							this.accountService.logout(this.accountService.userValue?.userId, true).subscribe(() => {});
						}
					}
				);
			}

			this.apiService.getGlobalDirectories(this.user?.companyFolderName).subscribe(
				(response) => {
					if (response) {
						this.sharedDataService.globalDirectories = response as GlobalDirectory;
						localStorage.setItem(EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES, JSON.stringify(response));
					}
				},
				(error) => {}
			);

			this.observablesService.getObservable(EnumService.ObserverKeys.ACTIVITY_COMPLETED).subscribe(() => {
				this.getActivityList();
			});
		}

		this.utilService.presentLoadingWithOptions();
		this.sharedDataService.getLangFileTranslation(() => {
			this.utilService.hideLoading();
		});

		if (UtilService.isLocalHost()) {
			setTimeout(() => {
				// this.sharedDataService.formBuilderDetails = JSON.parse(
				// 	'{"formId":582,"title":"Custom Form  ScanQrCode Test","description":null,"formVersionId":914,"formVersionNo":1,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"isPreview":false,"sections":[{"sectionId":1963,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":2156,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section one"}],"questions":[{"questionId":5956,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":15,"questionDisplayOrder":1,"sectionID":1963,"questionTranslations":[{"questionTranslationId":6352,"questionTranslationLanguageId":35,"questionTranslationTitle":"Can you scan in your location, Projects,  Inventory Items?","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":true,"allowQRCodeProject":true,"allowQRCodeInventoryItem":true,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]},{"questionId":5957,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":15,"questionDisplayOrder":2,"sectionID":1963,"questionTranslations":[{"questionTranslationId":6353,"questionTranslationLanguageId":35,"questionTranslationTitle":"Can you scan in your forms?","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":true,"allowQRCodeUser":false,"matrixRows":[],"matrixColumns":[]},{"questionId":5958,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":15,"questionDisplayOrder":3,"sectionID":1963,"questionTranslations":[{"questionTranslationId":6354,"questionTranslationLanguageId":35,"questionTranslationTitle":"Can you scan in your Users?","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[],"questionAttachmentIconPath":null,"allowQRCodeLocation":false,"allowQRCodeProject":false,"allowQRCodeInventoryItem":false,"allowQRCodeDocument":false,"allowQRCodeForm":false,"allowQRCodeUser":true,"matrixRows":[],"matrixColumns":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"questionActivityTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"whoDefinesDateType":null,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedAvailableUsers":[],"permitIssuedAvailableUserGroups":[],"permitNotIssuedAvailableUsers":[],"permitNotIssuedAvailableUserGroups":[]},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"availableUsers":[],"availableUserGroups":[]},"riskAssessmentDetails":{"riskAssessmentId":0,"controlMeasureAddOptions":[],"allowEndUserToAddHazardsAndCM":true,"selectedControlMeasureAddOption":0,"formVersionID":914},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}'
				// );
				// this.navCtrl.navigateForward(['/form-custom']);
			}, 2000);
		}
	}

	ionViewWillEnter() {
		this.accountService.checkForMobileLanguageId();
		this.observablesService.publishSomeData(EnumService.ObserverKeys.REFRESH_CURRENT_CHECKIN_LIST, {});
	}

	async testFormPreview() {
		this.utilService.presentLoadingWithOptions();

		const formID = 383;
		const formVersionID = 588;

		this.apiService.getFormBuilderDetails(formID, formVersionID).subscribe(
			(response: Response) => {
				this.sharedDataService.formBuilderDetails = response.Result;
				this.navCtrl.navigateForward(['/form-custom']);

				this.utilService.hideLoading();
			},
			(error) => {
				this.utilService.hideLoading();
			}
		);
	}

	ngOnDestroy(): void {
		this.observablesService.removeObservable(EnumService.ObserverKeys.ACTIVITY_COMPLETED);
	}

	getActivityList = (callBack = null) => {
		this.apiService.getActivityList(this.user?.userId).subscribe(
			(response: Response) => {
				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					const result = response.Result;
					if (result) {
						this.activityList = result.activityList;
						this.activityOverviewData = result.activityOverviewData;
						this.sharedDataService.activityList = result.activityList;
						this.sharedDataService.activityOverviewData = result.activityOverviewData;
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
		this.navCtrl.navigateForward(['/activity-detail']);
	}
}
