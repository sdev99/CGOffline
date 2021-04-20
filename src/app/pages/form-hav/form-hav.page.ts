import { Component, NgZone, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
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

@Component({
	selector: 'app-form-hav',
	templateUrl: './form-hav.page.html',
	styleUrls: ['./form-hav.page.scss'],
})
export class FormHavPage implements OnInit {
	UtilService = UtilService;
	EnumService = EnumService;
	user: User;

	isSubmitted = false;
	formGroup: FormGroup;
	errorMessage = '';

	toolModels: Array<HavModelItem>;

	screenOrientationSubscribe;
	isShowOritationPortrait = false;

	formBuilderDetail;

	currentExposure = 0;

	plannedTimeControlName;
	modelControlName;

	questionElementIds = [];
	companyId;

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
		public utilService: UtilService
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
			sections.map((section, sectionIndex) => {
				if (section.isHAVSection) {
					const questions = section.questions;
					questions.map((question, questionIndex) => {
						if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Model) {
							this.modelControlName = UtilService.FCUniqueName(section, question);
						}

						if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.TimeField) {
							this.plannedTimeControlName = UtilService.FCUniqueName(section, question);
						}
					});
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
				const toolManufacturers = response.Result;
				this.setupDynamicChoiceList(EnumService.HavFormFieldOrder.Manufacturer, toolManufacturers);
			},
			(error) => {
				this.utilService.hideLoading();
			}
		);

		this.getUserTotalHAVExposureForToday();
	}

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

	setupDynamicChoiceList = (listType, list) => {
		const sections = this.formBuilderDetail.sections;
		if (sections) {
			sections.map((section, key) => {
				if (section.isHAVSection) {
					this.setupDynamicChoiceListForSection(key, listType, list);
				}
			});
		}
	};

	setupDynamicChoiceListForSection = (sectionIndex, listType, list) => {
		const sections = this.formBuilderDetail.sections;
		if (sections) {
			const section = sections[sectionIndex];

			const questions = section.questions;
			questions.map((question, questionIndex) => {
				if (question.questionDisplayOrder === listType) {
					if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Manufacturer) {
						question.answerChoiceAttributes = list;
						question.listValueKey = 'havManufacturerID';
						question.listLabelKey = 'havManufacturerName';
					} else if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Type) {
						question.answerChoiceAttributes = list;
						question.listValueKey = 'havTypeID';
						question.listLabelKey = 'havTypeName';
					} else if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Model) {
						question.answerChoiceAttributes = list;
						question.listValueKey = 'havModelID';
						question.listLabelKey = 'model';
					}
					const controlName = UtilService.FCUniqueName(section, question);
					const control = this.formGroup.controls[controlName];
					control.setValue('');
				}
			});
		}
	};

	async getTypeList(manufacturer, sectionIndex, questionIndex) {
		const sections = this.formBuilderDetail.sections;
		const question = sections[sectionIndex]?.questions[questionIndex];
		this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Type, []);
		this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Model, []);

		this.utilService.presentLoadingWithOptions();

		this.apiService.getTypeList(this.companyId, manufacturer).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				const toolTypes = response.Result;
				this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Type, toolTypes);
				this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Model, []);
			},
			(error) => {
				this.utilService.hideLoading();
			}
		);
	}

	async getModelList(type, sectionIndex, questionIndex) {
		const sections = this.formBuilderDetail.sections;
		const question = sections[sectionIndex]?.questions[questionIndex];
		this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Model, []);

		this.utilService.presentLoadingWithOptions();

		this.apiService.getModelList(this.companyId, type).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				const toolModels = response.Result;
				this.toolModels = toolModels;
				this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Model, toolModels);
			},
			(error) => {
				this.utilService.hideLoading();
			}
		);
	}

	dropDownChange(section, question, sectionIndex, questionIndex) {
		const controlName = UtilService.FCUniqueName(section, question);
		const control = this.formGroup.controls[controlName];
		if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Manufacturer) {
			this.getTypeList(control.value, sectionIndex, questionIndex);
		} else if (question.questionDisplayOrder === EnumService.HavFormFieldOrder.Type) {
			this.getModelList(control.value, sectionIndex, questionIndex);
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

	isError(section, question) {
		const controlName = UtilService.FCUniqueName(section, question);
		return this.isSubmitted && !this.formGroup.controls[controlName].valid;
	}

	calculatePointsPerHour() {
		const toolModel = this.formGroup.controls[this.modelControlName];
		if (toolModel) {
			let model: HavModelItem;
			if (this.toolModels) {
				this.toolModels.map((item) => {
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

	calculateExposure(exposure = 0) {
		const plannedTime = this.formGroup.controls[this.plannedTimeControlName];
		if (plannedTime) {
			const plannedTimeOfUse = plannedTime.value ? UtilService.formattedNumberToNumber(plannedTime.value) : 0;
			const pointsPerHour = this.calculatePointsPerHour();
			const calcualtedExposure = (plannedTimeOfUse / 60) * pointsPerHour;
			return Math.ceil(calcualtedExposure + exposure);
		}
		return Math.ceil(exposure);
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

		const havExposure: HavExposure = {
			vibrationMagnitude: 0,
			pointsPerHour: 0,
			exposurePoints: 0,
			hAVExposureId: 0,
			initialExposure: 0,
			totalExposure: 0,
		};
		if (this.formGroup.valid) {
			const plannedTimeControl = this.formGroup.controls[this.plannedTimeControlName];
			if (plannedTimeControl.value > 0) {
				const toolModel = this.formGroup.controls[this.modelControlName];
				if (toolModel) {
					let model: HavModelItem;
					if (this.toolModels) {
						this.toolModels.map((item) => {
							if (item.havModelID === toolModel.value) {
								model = item;
								return;
							}
						});
					}

					havExposure.vibrationMagnitude = model ? UtilService.formattedNumberToNumber(model.vibrationValue) : 0;
					havExposure.pointsPerHour = this.calculatePointsPerHour();
					havExposure.exposurePoints = this.calculateExposure();
					havExposure.hAVExposureId = 0;
					havExposure.initialExposure = this.currentExposure;
					havExposure.totalExposure = this.calculateExposure(this.currentExposure);
				}
			} else {
				this.errorMessage = '"Planned time of use" should be greater then zero.';
				return;
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
				}
			},
			havExposure
		);
	}

	ionViewDidEnter() {}

	ionViewWillLeave(): void {}
}
