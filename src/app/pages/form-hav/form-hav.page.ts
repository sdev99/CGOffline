import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { ExitConfirmationPage } from '../../modals/exit-confirmation/exit-confirmation.page';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumService } from '../../services/enum.service';
import { ObservablesService } from '../../services/observables.service';
import { SharedDataService } from '../../services/shared-data.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { UtilService } from '../../services/util.service';
import { ApiService } from '../../services/api.service';
import { AccountService } from '../../services/account.service';
import { Response, User } from '../../_models';
import { HavModelItem } from '../../_models/havModelItem';
import { HavExposure } from '../../_models/havExposure';
import { HavAnswerDetail } from 'src/app/_models/havAnswerDetail';
import { HavAssessmentTool } from 'src/app/_models/havAssessmentTool';
import { HavAnswerObject } from 'src/app/_models/havAnswerObject';
import { StaticDataService } from 'src/app/services/static-data.service';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { EntityItem } from 'src/app/_models/entityItem';

@Component({
	selector: 'app-form-hav',
	templateUrl: './form-hav.page.html',
	styleUrls: ['./form-hav.page.scss'],
})
export class FormHavPage implements OnInit {
	@ViewChild(IonContent) content: IonContent;

	UtilService = UtilService;
	EnumService = EnumService;
	user: User;

	isSubmitted = false;
	formGroup: FormGroup;
	errorMessage = '';

	screenOrientationSubscribe;
	isShowOritationPortrait = false;

	formBuilderDetail;

	currentExposure = 0;

	questionElementIds = [];
	companyId;

	toolManufacturers = [];

	isManuallyValueUpdate = false;

	constructor(
		public navCtrl: NavController,
		public modalController: ModalController,
		public route: ActivatedRoute,
		public observablesService: ObservablesService,
		public sharedDataService: SharedDataService,
		private apiService: ApiService,
		public accountService: AccountService,
		private screenOrientation: ScreenOrientation,
		private ngZone: NgZone,
		public utilService: UtilService,
		public translateService: TranslateService
	) {
		this.user = accountService.userValue;

		if (sharedDataService.formBuilderDetails) {
			this.formBuilderDetail = sharedDataService.formBuilderDetails;
		}

		if (this.sharedDataService.dedicatedMode) {
			this.companyId = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
		} else {
			this.companyId = this.user?.companyID;
		}

		if (!this.companyId) {
			this.companyId = this.formBuilderDetail.companyId;
		}

		// Add form controls for each type of fields
		this.formGroup = new FormGroup({});

		const sections = this.formBuilderDetail.sections;
		if (sections) {
			sections.map((section) => {
				if (section.isHAVSection) {
					const questions = section.questions;
					const clonedQuestions = JSON.parse(JSON.stringify(questions));
					section.havAssessmentTools = [
						{
							displayOrder: 1,
							questions: clonedQuestions,
						},
					];
				}
			});
		}
		this.utilService.questionElementIdsUpdate = (questionElementIds) => {
			this.questionElementIds = questionElementIds;
		};
		this.utilService.addFormControlsForVisibleFields(sections, this.formGroup);
		// -- End -- Add form controls for each type of fields
	}

	async ngOnInit() {
		this.utilService.presentLoadingWithOptions();

		this.apiService.getManufacturerList(this.companyId).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				this.toolManufacturers = response.Result;
			},
			(error) => {
				this.utilService.hideLoading();
			}
		);

		this.getUserTotalHAVExposureForToday();
	}

	scanUserQrCode = (event, havAssessmentTool) => {
		event.stopPropagation();

		const uniqueKey = UtilService.randomNumber();
		this.sharedDataService.isOpenSubScreen = true;

		const fromFormCallbackKey = EnumService.ObserverKeys.QRCODE_SCANNED_RESULT + '' + uniqueKey;
		this.observablesService.getObservable(fromFormCallbackKey).subscribe((result) => {
			this.sharedDataService.isOpenSubScreen = false;

			const entityItem = result as EntityItem;
			if (entityItem && entityItem.isHAVSData) {
				this.getTypeList(entityItem.havManufacturerID, havAssessmentTool, () => {
					this.getModelList(entityItem.havTypeID, havAssessmentTool, () => {
						this.isManuallyValueUpdate = true;
						this.setupHavData(havAssessmentTool, entityItem);
						setTimeout(() => {
							this.isManuallyValueUpdate = false;
						}, 500);
					});
				});
			}

			this.observablesService.removeObservable(fromFormCallbackKey);
		});
		this.navCtrl.navigateForward('/dashboard-qrscan', {
			queryParams: {
				fromFormPage: true,
				isOnlyInventryItemHasHav: true,
				fromFormCallbackKey: fromFormCallbackKey,
				fromFormAllowedQrCodeTypes: [EnumService.SelectedQRCodeType.InventoryItem],
			},
		});
	};

	setupHavData = (havAssessmentTool, entityItem) => {
		this.ngZone.run(() => {
			havAssessmentTool.questions.map((questionItem) => {
				if (questionItem.questionDisplayOrder === EnumService.HavFormFieldOrder.Manufacturer) {
					questionItem.value = entityItem.havManufacturerID;
				} else if (questionItem.questionDisplayOrder === EnumService.HavFormFieldOrder.Type) {
					questionItem.value = entityItem.havTypeID;
				} else if (questionItem.questionDisplayOrder === EnumService.HavFormFieldOrder.Model) {
					questionItem.value = entityItem.havModelID;
				}
			});
		});
	};

	getUserTotalHAVExposureForToday() {
		let userId = this.user?.userId;
		if (this.sharedDataService.dedicatedMode) {
			userId = this.sharedDataService.dedicatedModeUserDetail?.userId;
		}
		this.apiService.getUserTotalHAVExposureForToday(userId).subscribe((response: Response) => {
			if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
				this.currentExposure = UtilService.formattedNumberToNumber(response.Result);
			}
		});
	}

	setupDynamicChoiceListForHavAssessmentTool = (havAssessmentTool, listType, list) => {
		const questions = havAssessmentTool.questions;
		questions.map((question, questionIndex) => {
			const questionDisplayOrder = questionIndex + 1;
			if (questionDisplayOrder === listType) {
				if (questionDisplayOrder === EnumService.HavFormFieldOrder.Type) {
					question.answerChoiceAttributes = list;
					question.listValueKey = 'havTypeID';
					question.listLabelKey = 'havTypeName';
				} else if (questionDisplayOrder === EnumService.HavFormFieldOrder.Model) {
					question.answerChoiceAttributes = list;
					question.listValueKey = 'havModelID';
					question.listLabelKey = 'model';
				}
				question.value = '';
			}
		});
	};

	async getTypeList(manufacturer, havAssessmentTool, callBack = null) {
		this.setupDynamicChoiceListForHavAssessmentTool(havAssessmentTool, EnumService.HavFormFieldOrder.Type, []);
		this.setupDynamicChoiceListForHavAssessmentTool(havAssessmentTool, EnumService.HavFormFieldOrder.Model, []);

		this.utilService.presentLoadingWithOptions();

		this.apiService.getTypeList(this.companyId, manufacturer).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				const toolTypes = response.Result;
				this.setupDynamicChoiceListForHavAssessmentTool(havAssessmentTool, EnumService.HavFormFieldOrder.Type, toolTypes);
				this.setupDynamicChoiceListForHavAssessmentTool(havAssessmentTool, EnumService.HavFormFieldOrder.Model, []);
				callBack && callBack();
			},
			(error) => {
				this.utilService.hideLoading();
				this.errorMessage = error.message;
			}
		);
	}

	async getModelList(type, havAssessmentTool, callBack = null) {
		this.setupDynamicChoiceListForHavAssessmentTool(havAssessmentTool, EnumService.HavFormFieldOrder.Model, []);

		this.utilService.presentLoadingWithOptions();

		this.apiService.getModelList(this.companyId, type).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				const toolModels = response.Result;
				this.setupDynamicChoiceListForHavAssessmentTool(havAssessmentTool, EnumService.HavFormFieldOrder.Model, toolModels);
				callBack && callBack();
			},
			(error) => {
				this.utilService.hideLoading();
			}
		);
	}

	dropDownChange(havAssessmentTool, question, questionIndex) {
		if (!this.isManuallyValueUpdate) {
			const questionDisplayOrder = questionIndex + 1;
			if (questionDisplayOrder === EnumService.HavFormFieldOrder.Manufacturer) {
				this.getTypeList(question.value, havAssessmentTool);
			} else if (questionDisplayOrder === EnumService.HavFormFieldOrder.Type) {
				this.getModelList(question.value, havAssessmentTool);
			}
		}
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

	ionViewWillEnter() {
		this.handleOrientation();
	}

	ionViewDidLeave(): void {
		if (this.sharedDataService.dedicatedMode) {
			if (!UtilService.isLocalHost()) {
				this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
				this.screenOrientationSubscribe.unsubscribe();
			}
		}
	}

	addNewTool(section) {
		const questions = section.questions;
		const clonedQuestions = JSON.parse(JSON.stringify(questions));
		const havAssessmentTools = section.havAssessmentTools || [];
		havAssessmentTools.push({
			displayOrder: havAssessmentTools.length + 1,
			questions: clonedQuestions,
		});
		section.havAssessmentTools = havAssessmentTools;
		this.utilService.addFormControlsForVisibleFields(this.formBuilderDetail.sections, this.formGroup);
	}

	removeHavTool(section, havAssessmentToolsIndex) {
		this.translateService
			.get(['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.HAVs_FORM.DO_YOU_WANT_TO_REMOVE_THIS_ITEM', 'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.HAVs_FORM.DELETE_CONFIRMATION'])
			.subscribe((res) => {
				this.utilService.showConfirmAlert(
					res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.HAVs_FORM.DO_YOU_WANT_TO_REMOVE_THIS_ITEM'],
					res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.HAVs_FORM.DELETE_CONFIRMATION'],
					(status) => {
						if (status) {
							try {
								section.havAssessmentTools.splice(havAssessmentToolsIndex, 1);
								this.utilService.addFormControlsForVisibleFields(this.formBuilderDetail.sections, this.formGroup);
							} catch (error) {}
						}
					}
				);
			});
	}

	isError(question) {
		if (this.isSubmitted && (!question.value || parseInt(question.value) === 0)) {
			return true;
		}
		return false;
	}

	calculatePointsPerHour(havAssessmentTool) {
		let toolModel;
		let toolModels;
		havAssessmentTool.questions.some((question) => {
			if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Model) {
				toolModel = question;
				toolModels = question.answerChoiceAttributes;
				return true;
			}
		});
		if (toolModel) {
			let model: HavModelItem;

			if (toolModels) {
				toolModels.map((item) => {
					if (item.havModelID === toolModel.value) {
						model = item;
						return;
					}
				});
			}
			const vibrationValue = model ? UtilService.formattedNumberToNumber(model.vibrationValue) : 0;
			const kFactor = model ? UtilService.formattedNumberToNumber(model.kFactor) : 0;
			const vibrationMagnitude = vibrationValue + kFactor;
			return vibrationMagnitude * (vibrationMagnitude * 2);
		}
		return 0;
	}

	calculateExposure(havAssessmentTool, exposure = 0) {
		let plannedTime;
		havAssessmentTool.questions.some((question) => {
			if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.TimeField) {
				plannedTime = question;
				return true;
			}
		});
		if (plannedTime) {
			const plannedTimeOfUse = plannedTime.value ? UtilService.formattedNumberToNumber(plannedTime.value) : 0;
			const pointsPerHour = this.calculatePointsPerHour(havAssessmentTool);
			const calcualtedExposure = (plannedTimeOfUse / 60) * pointsPerHour;
			return Math.ceil(calcualtedExposure + exposure);
		}
		return Math.ceil(exposure);
	}

	totalCalculateExposure(section) {
		const havAssessmentTools = section.havAssessmentTools;
		let total = 0;
		havAssessmentTools.map((havAssessmentTool) => {
			const calculateExposure = this.calculateExposure(havAssessmentTool);
			total = total + calculateExposure;
		});
		return total + (this.currentExposure || 0);
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

		const havAnswerDetail: HavAnswerDetail = {
			initialExposure: this.currentExposure,
			calculatedExposure: 0,
			totalExposure: 0,
			havAssessmentTools: [],
		};

		const selectedLanguageID = this.sharedDataService.getLanguageIdForForm();
		const formVersionId = this.formBuilderDetail.formVersionId;

		if (this.formGroup.valid) {
			const sections = this.formBuilderDetail.sections;
			sections.some((section) => {
				if (section.isHAVSection) {
					const havAssessmentToolsList: Array<HavAssessmentTool> = [];

					let calculatedExposure = 0;
					const havAssessmentTools = section.havAssessmentTools;
					havAssessmentTools.some((havAssessmentTool, havAssessmentToolIndex) => {
						const havQuestionAnswers: Array<HavAnswerObject> = [];

						const questions = havAssessmentTool.questions;
						let plannedTime;
						let toolModel;
						let toolModels;

						questions.some((question, questionIndex) => {
							const questionDisplayOrder = questionIndex + 1;

							if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.TimeField) {
								plannedTime = question;
							}
							if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Model) {
								toolModel = question;
								toolModels = question.answerChoiceAttributes;
							}
							const questionLabel = UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', selectedLanguageID).questionTranslationTitle;

							const havQuestionAnswerObject: HavAnswerObject = {
								hAVQuestionAnswerId: 0,
								questionID: question.questionId,
								questionTitle: questionLabel,
								formVersionID: formVersionId,
								answerTypeID: question.selectedAnswerTypeId,
								hAVSequence: question.questionDisplayOrder,
								[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed]: question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed],
								[EnumService.QuestionLogic.ActionTypeForForm.Notify]: question[EnumService.QuestionLogic.ActionTypeForForm.Notify],
								[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity]: question[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity],
							};

							let isValueFilled = false;
							switch (questionDisplayOrder) {
								case EnumService.HavFormFieldOrder.DateOfUsage:
									if (question.value) {
										havQuestionAnswerObject.dateOfUsage = moment(question.value).format(StaticDataService.dateFormat);
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.Manufacturer:
									if (question.value) {
										havQuestionAnswerObject.hAVManufacturerID = question.value;
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.Type:
									if (question.value) {
										havQuestionAnswerObject.hAVTypeID = question.value;
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.Model:
									if (question.value) {
										havQuestionAnswerObject.hAVModelID = question.value;
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.PlannedTimeOfUsage:
									if (question.value) {
										isValueFilled = true;
										havQuestionAnswerObject.plannedTimeOfUse = Number(question.value);
									}
									break;
							}

							if (isValueFilled) {
								havQuestionAnswers.push(havQuestionAnswerObject);
							} else {
								this.translateService.get('SHARED_TEXT.ERRORS.ALL_FIELDS_REQUIRED').subscribe((res) => {
									this.errorMessage = res;
								});
							}
						});

						if (plannedTime.value && parseInt(plannedTime.value) > 0) {
							let model: HavModelItem;
							if (toolModels) {
								toolModels.some((item) => {
									if (item.havModelID === toolModel.value) {
										model = item;
										return true;
									}
								});
							}

							const exposurePoints = this.calculateExposure(havAssessmentTool);
							calculatedExposure = calculatedExposure + exposurePoints;

							const havExposure: HavExposure = {
								hAVExposureId: 0,
								vibrationMagnitude: model ? UtilService.formattedNumberToNumber(model.vibrationValue) : 0,
								pointsPerHour: this.calculatePointsPerHour(havAssessmentTool),
								exposurePoints: exposurePoints,
							};
							const HavAssessmentToolObject: HavAssessmentTool = {
								displayOrder: havAssessmentToolIndex + 1,
								havExposure: havExposure,
								havQuestionAnswers: havQuestionAnswers,
							};

							havAssessmentToolsList.push(HavAssessmentToolObject);
						} else {
							this.translateService.get('SHARED_TEXT.ERRORS.PLANNED_TIME_SHOULD_BE_GREATER_THEN_ZERO').subscribe((res) => {
								this.errorMessage = res;
							});
							return true;
						}
					});

					havAnswerDetail.calculatedExposure = calculatedExposure;
					havAnswerDetail.totalExposure = calculatedExposure + this.currentExposure;
					havAnswerDetail.havAssessmentTools = havAssessmentToolsList;
					return true;
				}
			});
		}

		if (!this.errorMessage) {
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
				havAnswerDetail
			);
		} else {
			this._scrollToTop();
		}
	}

	_scrollToTop() {
		this.content.scrollToTop(200);
	}

	ionViewDidEnter() {}

	ionViewWillLeave(): void {}
}
