import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { User } from '../../_models';
import { FormGroup } from '@angular/forms';
import { DemoDataService } from '../../services/demo-data.service';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { PhotoService } from '../../services/photo.service';
import { SharedDataService } from '../../services/shared-data.service';
import { ObservablesService } from '../../services/observables.service';
import { ActivatedRoute } from '@angular/router';
import { FilehandlerService } from '../../services/filehandler.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { AccountService } from '../../services/account.service';
import { ExitConfirmationPage } from '../../modals/exit-confirmation/exit-confirmation.page';
import { HavExposure } from '../../_models/havExposure';
import { HavModelItem } from '../../_models/havModelItem';
import { WorkPermitAnswer } from '../../_models/workPermitAnswer';
import { EnumService } from '../../services/enum.service';

@Component({
	selector: 'app-form-workpermit',
	templateUrl: './form-workpermit.page.html',
	styleUrls: ['./form-workpermit.page.scss'],
})
export class FormWorkpermitPage {
	@ViewChild(IonContent) content: IonContent;
	UtilService = UtilService;
	EnumService = EnumService;

	user: User;

	errorMessage = '';

	isSubmitted = false;
	formGroup: FormGroup;

	list = DemoDataService.activityCustomForm.clone();
	answer = {};

	totalPage = 32;

	screenOrientationSubscribe;
	isShowOritationPortrait = false;

	formBuilderDetail = JSON.parse(
		'{"formId":124,"title":"Work Permit Two","description":null,"formVersionId":203,"formVersionNo":5,"isDraft":false,"formTypeID":3,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":218,"sectionIsHidden":true,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":321,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section One"}],"questions":[{"questionId":499,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":218,"questionTranslations":[{"questionTranslationId":577,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single Choice","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":550,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":669,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":551,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":670,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":500,"questionIsHidden":true,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":218,"questionTranslations":[{"questionTranslationId":578,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiple Choice","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":552,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":671,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":553,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":672,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":554,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":673,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]}],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":219,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":322,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Two"}],"questions":[{"questionId":501,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":1,"sectionID":219,"questionTranslations":[{"questionTranslationId":579,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single Line Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":502,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":4,"questionDisplayOrder":2,"sectionID":219,"questionTranslations":[{"questionTranslationId":580,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multi Line Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":503,"questionIsHidden":true,"questionIsRequired":false,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":3,"sectionID":219,"questionTranslations":[{"questionTranslationId":581,"questionTranslationLanguageId":35,"questionTranslationTitle":"Decimal Point","questionTranslationInstructionOrNote":"For eg 1.10","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":504,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":true,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":4,"sectionID":219,"questionTranslations":[{"questionTranslationId":582,"questionTranslationLanguageId":35,"questionTranslationTitle":"Integer value","questionTranslationInstructionOrNote":"For eg 1","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":26,"totalScore":10,"hasExpirationDate":true,"hasExpiresOn":true,"expiresOnDate":"01/12/2020","hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":2,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":203,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[{"userId":"e243237f-3147-4810-9dbd-6f5ea7bffb30","userName":"Demo Two App"}],"taskTemplates":[]}'
	);

	questionElementIds = [];
	currentQuestionIndex = 0;
	scrollingDetail: any;

	constructor(
		public navCtrl: NavController,
		public photoService: PhotoService,
		public sharedDataService: SharedDataService,
		public observablesService: ObservablesService,
		public modalController: ModalController,
		public route: ActivatedRoute,
		private filehandlerService: FilehandlerService,
		private screenOrientation: ScreenOrientation,
		private ngZone: NgZone,
		private apiService: ApiService,
		public utilService: UtilService,
		public accountService: AccountService
	) {
		this.user = accountService.userValue;

		if (sharedDataService.formBuilderDetails) {
			this.formBuilderDetail = sharedDataService.formBuilderDetails;
		}

		// Add form controls for each type of fields
		this.formGroup = new FormGroup({});
		const sections = this.formBuilderDetail.sections;
		this.utilService.questionElementIdsUpdate = (questionElementIds) => {
			this.questionElementIds = questionElementIds;
		};
		this.utilService.addFormControlsForVisibleFields(sections, this.formGroup);
		// -- End -- Add form controls for each type of fields
	}

	handleOrientation = () => {
		if (this.sharedDataService.dedicatedMode) {
			if (this.screenOrientation.type.includes('landscape')) {
				this.screenOrientation.unlock();
				this.isShowOritationPortrait = true;
			} else {
				if (!UtilService.isLocalHost()) {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
				}
			}

			this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
				this.ngZone.run(() => {
					if (this.screenOrientation.type.includes('portrait')) {
						if (!UtilService.isLocalHost()) {
							this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
						}
						this.isShowOritationPortrait = false;
					}
					if (this.screenOrientation.type.includes('landscape')) {
						this.isShowOritationPortrait = true;
					}
				});
			});
		}
	};

	ionViewDidEnter() {
		this.sharedDataService.isOpenImageAnnotation = false;
	}

	ionViewWillEnter() {
		this.handleOrientation();
	}

	ionViewDidLeave(): void {
		if (this.sharedDataService.dedicatedMode) {
			if (!this.sharedDataService.isOpenImageAnnotation) {
				if (!UtilService.isLocalHost()) {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
					this.screenOrientationSubscribe.unsubscribe();
				}
			}
		}
	}

	async onClose() {
		const modal = await this.modalController.create({
			component: ExitConfirmationPage,
			swipeToClose: false,
			showBackdrop: false,
			backdropDismiss: false,
			animated: true,
			componentProps: {},
		});
		await modal.present();

		modal.onWillDismiss().then(({ data }) => {
			if (data) {
				this.onBack();
			}
		});
	}

	onBack() {
		if (this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction) {
			this.navCtrl.navigateBack('/checkinout-confirm');
		} else {
			this.navCtrl.back();
		}
	}

	onSubmit() {
		this.isSubmitted = true;
		this.errorMessage = '';

		let workPermitAnswer: WorkPermitAnswer;
		if (this.formGroup.valid) {
			// Calculate score for work permit
			let scoreAchieved = 0;
			const sections = this.formBuilderDetail.sections;
			if (sections) {
				sections.map((section, sectionIndex) => {
					if (this.utilService.shouldShowSection(section)) {
						const isSectionDuplicate = section[EnumService.QuestionLogic.ActionTypeForForm.Duplicate];

						const questions = section.questions;
						questions.map((question, questionIndex) => {
							if (this.utilService.shouldShowQuestion(question)) {
								const controlName = UtilService.FCUniqueName(section, question);

								if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleChoiceSet) {
									const control = this.formGroup.controls[controlName];
									question.answerChoiceAttributes.map((choice) => {
										if (choice.answerChoiceAttributeId === control.value) {
											scoreAchieved = scoreAchieved + choice.answerChoiceAttributeScoreOrWeight;
										}
									});
								} else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
									const control = this.formGroup.controls[controlName];
									const formGroups = control.value as FormGroup;
									question.answerChoiceAttributes.map((choice) => {
										const choiceControl = formGroups[UtilService.SubFCName(controlName, choice.answerChoiceAttributeId)];
										if (choiceControl) {
											scoreAchieved = scoreAchieved + choice.answerChoiceAttributeScoreOrWeight;
										}
									});
								}
							}
						});
					}
				});
			}

			workPermitAnswer = {
				workPermitId: this.formBuilderDetail.workPermitDetails.workPermitId,
				scoreAchieved,
				totalScore: this.formBuilderDetail.workPermitDetails.totalScore,
			};
		}

		this.sharedDataService.saveFormAnswers(
			this.apiService,
			this.formGroup,
			this.formBuilderDetail,
			this.user,
			(status, result) => {
				if (status) {
				} else {
					this.errorMessage = result;
					this._scrollToTop();
				}
			},
			null,
			workPermitAnswer
		);
	}

	_scrollToTop() {
		this.content.scrollToTop(200);
	}

	// Navigate to question
	previous() {
		if (this.currentQuestionIndex > 0) {
			this.currentQuestionIndex--;
			this.scrollToQuestion();
		}
	}

	next() {
		if (this.currentQuestionIndex < this.questionElementIds.length - 1) {
			this.currentQuestionIndex++;
			this.scrollToQuestion();
		}
	}

	onScrollEnd = (event) => {
		if (this.scrollingDetail) {
			const scrollTop = this.scrollingDetail.scrollTop;
			if (scrollTop === 0) {
				this.currentQuestionIndex = 0;
			} else {
				this.questionElementIds.map((elementId, key) => {
					const y = document.getElementById(elementId).offsetTop;
					if (scrollTop >= y) {
						this.currentQuestionIndex = key;
						return;
					}
				});
			}
		}
	};

	onScroll = (event) => {
		this.scrollingDetail = event.detail;
	};

	scrollToQuestion = () => {
		const elementId = this.questionElementIds[this.currentQuestionIndex];
		const y = document.getElementById(elementId).offsetTop;
		this.content.scrollToPoint(0, y, 500);
	};

	// -- End -- Navigate to question
}
