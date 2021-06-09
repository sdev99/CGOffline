import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { User } from '../../_models';
import { FormControl, FormGroup } from '@angular/forms';
import { DemoDataService } from '../../services/demo-data.service';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { PhotoService } from '../../services/photo.service';
import { SharedDataService } from '../../services/shared-data.service';
import { ObservablesService } from '../../services/observables.service';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { AccountService } from '../../services/account.service';
import { ExitConfirmationPage } from '../../modals/exit-confirmation/exit-confirmation.page';
import { WorkPermitAnswer } from '../../_models/workPermitAnswer';
import { EnumService } from '../../services/enum.service';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-form-workpermit',
	templateUrl: './form-workpermit.page.html',
	styleUrls: ['./form-workpermit.page.scss'],
})
export class FormWorkpermitPage {
	@ViewChild(IonContent) content: IonContent;
	UtilService = UtilService;
	EnumService = EnumService;

	expireDateTypes = [
		{ title: 'Expires On', type: 'date' },
		{ title: 'Expires After', type: 'duration' },
	];
	selectedExpireDateType = 'date';

	user: User;

	errorMessage = '';

	isSubmitted = false;
	formGroup: FormGroup;

	list = DemoDataService.activityCustomForm.clone();
	answer = {};

	totalPage = 32;

	screenOrientationSubscribe;
	isShowOritationPortrait = false;

	formBuilderDetail;

	questionElementIds = [];
	currentQuestionIndex = 0;
	scrollingDetail: any;

	expireDurationTypes = [];

	constructor(
		public navCtrl: NavController,
		public photoService: PhotoService,
		public sharedDataService: SharedDataService,
		public observablesService: ObservablesService,
		public modalController: ModalController,
		public route: ActivatedRoute,
		private screenOrientation: ScreenOrientation,
		private ngZone: NgZone,
		private apiService: ApiService,
		public utilService: UtilService,
		public translateService: TranslateService,
		public accountService: AccountService
	) {
		translateService
			.get([
				'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.DAYS',
				'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.WEEKS',
				'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.MONTHS',
				'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.YEARS',
			])
			.subscribe((res) => {
				this.expireDurationTypes.push({
					title: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.DAYS'],
					id: 1,
				});
				this.expireDurationTypes.push({
					title: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.WEEKS'],
					id: 2,
				});
				this.expireDurationTypes.push({
					title: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.MONTHS'],
					id: 3,
				});
				this.expireDurationTypes.push({
					title: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.YEARS'],
					id: 4,
				});
			});
		this.user = accountService.userValue;

		if (sharedDataService.formBuilderDetails) {
			this.formBuilderDetail = sharedDataService.formBuilderDetails;
		}

		// Add form controls for each type of fields
		this.formGroup = new FormGroup({
			expireAfterDuration: new FormControl(30),
			expireAfterDurationType: new FormControl(1),
			expireDate: new FormControl(null),
		});
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

			workPermitAnswer = new WorkPermitAnswer({
				workPermitId: this.formBuilderDetail.workPermitDetails.workPermitId,
				scoreAchieved,
				totalScore: this.formBuilderDetail.workPermitDetails.totalScore,
				whoDefinesDateType: this.formBuilderDetail?.workPermitDetails?.whoDefinesDateType,
			});
			const isExpireDateUserDefined = this.formBuilderDetail?.workPermitDetails?.whoDefinesDateType === 'UserDefined';
			if (isExpireDateUserDefined) {
				if (this.selectedExpireDateType === 'date') {
					const expireDateControl = this.formGroup.controls['expireDate'];
					const expireDate = expireDateControl?.value;
					if (!expireDate) {
						this.translateService.get('PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DATE_EMPTY_MSG').subscribe((res) => {
							this.errorMessage = res;
						});
						return;
					} else {
						workPermitAnswer.hasExpiresOn = true;
						workPermitAnswer.expiresOnDate = moment(expireDate).format('YYYY-MM-DD HH:mm:00.000');
					}
				} else if (this.selectedExpireDateType === 'duration') {
					const expireAfterDurationControl = this.formGroup.controls['expireAfterDuration'];
					const expireAfterDurationTypeControl = this.formGroup.controls['expireAfterDurationType'];
					if (!expireAfterDurationControl?.value || !expireAfterDurationTypeControl?.value) {
						this.translateService.get('PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DATE_EMPTY_MSG').subscribe((res) => {
							this.errorMessage = res;
						});
						return;
					} else {
						workPermitAnswer.hasExpiresAfter = true;
						workPermitAnswer.durationValue = expireAfterDurationControl.value;
						workPermitAnswer.durationTypeID = expireAfterDurationTypeControl.value;
					}
				}
			}
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
