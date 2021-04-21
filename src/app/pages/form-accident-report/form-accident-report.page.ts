import { Component, NgZone } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { StaticDataService } from '../../services/static-data.service';
import { ExitConfirmationPage } from '../../modals/exit-confirmation/exit-confirmation.page';
import { ActivatedRoute } from '@angular/router';
import { EnumService } from '../../services/enum.service';
import { SharedDataService } from '../../services/shared-data.service';
import { ObservablesService } from '../../services/observables.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AccountService } from '../../services/account.service';
import { Response, User } from '../../_models';
import { UtilService } from '../../services/util.service';
import { ApiService } from '../../services/api.service';
import { LocationItem } from '../../_models/locationItem';

@Component({
	selector: 'app-form-accident-report',
	templateUrl: './form-accident-report.page.html',
	styleUrls: ['./form-accident-report.page.scss'],
})
export class FormAccidentReportPage {
	EnumService = EnumService;
	UtilService = UtilService;
	user: User;

	isSubmitted = false;
	errorMessage = '';

	formGroup: FormGroup;
	locations: Array<LocationItem>;
	types = [];
	classifications = [];
	bodyParts = StaticDataService.bodyParts.clone();
	currentBodyPartIndex = 0;
	selectedBodyParts = {};
	accidentImage;

	accidentAlertOptions: any = {
		header: 'Where the accident happened ?',
	};

	typeAlertOptions: any = {
		header: 'Select Type',
	};

	screenOrientationSubscribe;
	isShowOritationPortrait = false;

	formBuilderDetail;

	locationIdControlName;
	bodyPartControlName;

	questionElementIds = [];
	companyId;

	constructor(
		public navCtrl: NavController,
		public sharedDataService: SharedDataService,
		public modalController: ModalController,
		public route: ActivatedRoute,
		public observablesService: ObservablesService,
		private screenOrientation: ScreenOrientation,
		private ngZone: NgZone,
		public accountService: AccountService,
		public apiService: ApiService,
		public utilService: UtilService
	) {
		this.user = accountService.userValue;

		if (this.sharedDataService.dedicatedMode) {
			this.companyId = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
		} else {
			this.companyId = this.user?.companyID;
		}

		if (sharedDataService.formBuilderDetails) {
			this.formBuilderDetail = sharedDataService.formBuilderDetails;
		}

		if (!this.companyId) {
			this.companyId = this.formBuilderDetail.companyId;
		}

		// Add form controls for each type of fields
		this.formGroup = new FormGroup({});

		const sections = this.formBuilderDetail.sections;
		if (sections) {
			sections.map((section, sectionIndex) => {
				if (section.isAccidentReportSection) {
					const questions = section.questions;

					questions.map((question, questionIndex) => {
						const questionDisplayOrder = questionIndex + 1;
						if (section.isAccidentReportSection) {
							// Make photo attachment not required field for accident section, it should be from api but for temporary for here make it not required
							if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.PhotoVideoUpload) {
								question.questionIsRequired = false;
							}

							if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.BodyPartControl) {
								question.bodyParts = this.bodyParts;
								this.bodyPartControlName = UtilService.FCUniqueName(section, question);
							} else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.LocationSelection) {
								this.locationIdControlName = UtilService.FCUniqueName(section, question);
							}

							try {
								if (question.questionTranslations && question.questionTranslations.length > 0) {
									question.questionTranslations.some((item) => {
										if (item?.questionTranslationTitle === 'Is RIDDOR Report Needed?') {
											questions.splice(questionIndex, 1);
											return true;
										}
									});
								}
							} catch (error) {}

							if (!question.answerChoiceAttributes || question.answerChoiceAttributes.length === 0) {
								this.setupDynamicChoiceList(questionDisplayOrder);
							}
						}
					});
				}

				sharedDataService.formBuilderDetails = this.formBuilderDetail;
			});
		}

		this.utilService.questionElementIdsUpdate = (questionElementIds) => {
			this.questionElementIds = questionElementIds;
		};
		this.utilService.addFormControlsForVisibleFields(sections, this.formGroup);
		// -- End -- Add form controls for each type of fields
	}

	ionViewDidEnter() {
		this.sharedDataService.isOpenImageAnnotation = false;
		this.getLocationItemList();
		this.getAccidentTypeList();
		this.getAccidentClassificationList();
	}

	ionViewWillLeave(): void {}

	getAccidentTypeList = () => {
		this.apiService.getAccidentTypeList().subscribe(
			(response: Response) => {
				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.types = response.Result;
					this.setupDynamicChoiceList(EnumService.AccidentFormFieldOrder.Type);
				}
			},
			(error) => {}
		);
	};

	getAccidentClassificationList = () => {
		this.apiService.getAccidentClassificationList().subscribe(
			(response: Response) => {
				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.classifications = response.Result;
					this.setupDynamicChoiceList(EnumService.AccidentFormFieldOrder.Classification);
				}
			},
			(error) => {}
		);
	};

	getLocationItemList = () => {
		this.apiService.getLocationItemList(this.companyId).subscribe(
			(res) => {
				if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.locations = res.Result;
					this.setupDynamicChoiceList(EnumService.AccidentFormFieldOrder.AccidentLocation);
				}
			},
			(error) => {}
		);
	};

	// getAccidentBodyPartList = () => {
	//     this.apiService.getAccidentBodyPartList().subscribe((response: Response) => {
	//         if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
	//             this.bodyParts = response.Result;
	//         }
	//     }, (error) => {
	//     });
	// };

	setupDynamicChoiceList = (listType) => {
		const sections = this.formBuilderDetail.sections;
		if (sections) {
			sections.map((section) => {
				if (section.isAccidentReportSection) {
					const questions = section.questions;
					questions.map((question, questionIndex) => {
						const questionDisplayOrder = questionIndex + 1;
						if (questionDisplayOrder === listType) {
							this.ngZone.run(() => {
								if (questionDisplayOrder === EnumService.AccidentFormFieldOrder.Type) {
									question.answerChoiceAttributes = this.types;
									question.listValueKey = 'accidentTypeId';
									question.listLabelKey = 'accidentTypeTitle';
								} else if (questionDisplayOrder === EnumService.AccidentFormFieldOrder.Classification) {
									question.answerChoiceAttributes = this.classifications;
									question.listValueKey = 'accidentClassificationId';
									question.listLabelKey = 'accidentClassificationTitle';
								} else if (questionDisplayOrder === EnumService.AccidentFormFieldOrder.AccidentLocation) {
									question.answerChoiceAttributes = this.locations;
									question.listValueKey = 'locationName';
									question.listLabelKey = 'locationID';
								}
							});
						}
					});
				}
			});
		}
	};

	handleOrientation = () => {
		if (this.sharedDataService.dedicatedMode) {
			if (this.screenOrientation.type.includes('landscape')) {
				if (!UtilService.isLocalHost()) {
					this.screenOrientation.unlock();
				}
				this.isShowOritationPortrait = true;
			} else {
				if (!UtilService.isLocalHost()) {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
				}
			}

			this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
				this.ngZone.run(() => {
					if (this.screenOrientation.type.includes('portrait')) {
						this.isShowOritationPortrait = false;
						if (!UtilService.isLocalHost()) {
							this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
						}
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
			if (!this.sharedDataService.isOpenImageAnnotation) {
				if (!UtilService.isLocalHost()) {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
					this.screenOrientationSubscribe.unsubscribe();
				}
			}
		}
	}

	placeInTheListChange(event) {
		if (event.detail.value) {
			this.formGroup.controls[EnumService.AccidentCustomLocationControlsName.PlaceNotintheList].setValue(false);
			this.formGroup.controls[EnumService.AccidentCustomLocationControlsName.LocationName].setValue('');
		}
	}

	placeNotintheListChange(event, controlName) {
		if (event.detail.checked) {
			this.formGroup.controls[controlName].setValue('');
		} else {
			this.formGroup.controls[EnumService.AccidentCustomLocationControlsName.LocationName].setValue('');
		}
	}

	previousPart() {
		if (this.currentBodyPartIndex > 0) {
			this.currentBodyPartIndex--;
		}
	}

	nextPart() {
		if (this.currentBodyPartIndex < this.bodyParts.length - 1) {
			this.currentBodyPartIndex++;
		}
	}

	partSelectChange(item, event) {
		this.selectedBodyParts[item.id] = {
			...item,
			checked: event.detail.checked,
		};
		const element = document.getElementById(item.id);
		if (event.detail.checked) {
			element.style.fill = '#E74731';
		} else {
			element.style.fill = item.path.fill;
		}
	}

	pathSelect(type) {
		let selectedItem;
		this.bodyParts.map((item) => {
			item.parts.map((subItem) => {
				if (subItem.id === type) {
					selectedItem = subItem;
					return;
				}
			});
			if (selectedItem) {
				return;
			}
		});
		if (selectedItem) {
			const checked = this.selectedBodyParts[type] && this.selectedBodyParts[type].checked ? false : true;
			this.selectedBodyParts[type] = {
				...selectedItem,
				checked,
			};
			const bodyPartControlGroup = this.formGroup.controls[this.bodyPartControlName] as FormGroup;
			bodyPartControlGroup.controls[UtilService.SubFCName(this.bodyPartControlName, type)].setValue(checked);

			const element = document.getElementById(selectedItem.id);
			if (this.selectedBodyParts[type].checked) {
				element.style.fill = '#E74731';
			} else {
				element.style.fill = selectedItem.path.fill;
			}
		}
	}

	openImageAnnotation = (photo) => {
		this.sharedDataService.isOpenImageAnnotation = true;
		this.sharedDataService.setAnnotationImage(photo);
		this.sharedDataService.onAnnotationImageDone = (image) => {
			this.accidentImage = image;
		};

		this.navCtrl.navigateForward(['/image-annotation']);
	};

	photoAdded(photo) {
		this.openImageAnnotation(photo);
	}

	photoRemoved() {
		this.accidentImage = null;
	}

	removeSelectedBodyPart(item) {
		this.selectedBodyParts[item.id] = {
			...item,
			checked: false,
		};

		const bodyPartControlGroup = this.formGroup.controls[this.bodyPartControlName] as FormGroup;
		bodyPartControlGroup.controls[UtilService.SubFCName(this.bodyPartControlName, item.id)].setValue(false);

		const element = document.getElementById(item.id);
		element.style.fill = item.path.fill;
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

	isError(section, question) {
		const controlName = UtilService.FCUniqueName(section, question);
		return this.isSubmitted && !this.formGroup.controls[controlName].valid;
	}

	isBodyPartSelected = () => {
		return Object.keys(this.selectedBodyParts).length > 0;
	};

	// If location not selected or not entered manually
	isLocationSelected() {
		const locationIdControl = this.formGroup.controls[this.locationIdControlName];
		const locationNameControl = this.formGroup.controls[EnumService.AccidentCustomLocationControlsName.LocationName];
		if (locationIdControl && locationNameControl && !locationIdControl?.value && !locationNameControl?.value) {
			return false;
		}
		return true;
	}

	onContinue() {
		this.isSubmitted = true;
		this.errorMessage = '';

		if (this.formGroup.valid && !this.isLocationSelected()) {
			this.errorMessage = 'Please select a location or enter one manually.';
		}

		if (!this.errorMessage) {
			this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, (status, result) => {
				if (status) {
				} else {
					this.errorMessage = result;
				}
			});
		}
	}
}
