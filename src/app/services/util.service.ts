import { Injectable } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { EnumService } from './enum.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from './validator.service';
import * as moment from 'moment';
import { StaticDataService } from './static-data.service';
import { environment } from '../../environments/environment';
import { Capacitor } from '@capacitor/core';
import { File } from '@ionic-native/file/ngx';
import { TranslateService } from '@ngx-translate/core';

declare global {
	interface Array<T> {
		clone(): Array<T>;
	}
}

Array.prototype.clone = function () {
	return JSON.parse(JSON.stringify(this));
};

@Injectable({
	providedIn: 'root',
})
export class UtilService {
	loading: HTMLIonLoadingElement = null;
	loadingStarting = false;
	loadingStopping = false;
	isLoadingRequestedInitiated = false;

	questionElementIds: Array<string>;
	questionElementIdsUpdate: any; // callback
	translateService: TranslateService;

	static modifyUDID(udid) {
		if (!udid || udid.length === 0) {
			return 'This device cannot be used in Dedicated Mode';
		}
		return udid;
	}

	static isLocalHost() {
		return !environment.production && !Capacitor.isNative;
	}

	static appendZero(num) {
		if (num < 10) {
			return '0' + num;
		}
		return num;
	}

	static getColorForAnswerChoice(color) {
		switch (color) {
			case 'black':
				return '#000000';
			case 'green':
				return '#7ED321';
			case 'gold':
				return '#df951b';
			case 'yellow':
				return '#d1c20b';
			case 'red':
				return '#D0021B';
			case 'blue':
				return '#4A90E2';
			case 'grey':
				return '#9f9898';
			case 'turquoise':
				return '#50E3C2';
			case 'purple':
				return '#9150E3';
			case 'orange':
				return '#EE5A35';
			case 'white':
				return '#000';
		}
		return color;
	}

	static InductionContentTypeScreenIdentify(contentType, isDedicatedMode = false) {
		let routeName = '';
		switch (contentType) {
			case EnumService.InductionContentTypes.VIDEO_FILE:
				routeName = 'checkin-induction-video-file';
				break;
			case EnumService.InductionContentTypes.IMAGE_FILE:
				routeName = 'checkin-induction-image-file';
				break;
			case EnumService.InductionContentTypes.RICH_TEXT:
				routeName = 'checkin-induction-rich-text';
				break;
			case EnumService.InductionContentTypes.FORM:
				// routeName = 'checkin-induction-form';
				routeName = isDedicatedMode ? 'form-cover-dm' : 'form-cover';
				break;
			case EnumService.InductionContentTypes.VISITOR_AGREEMENT:
				routeName = 'checkin-induction-va';
				break;
		}
		return routeName;
	}

	static getFullName = (firstName, middleName, lastName) => {
		const names = [];
		if (firstName) {
			names.push(firstName);
		}
		if (middleName) {
			names.push(middleName);
		}
		if (lastName) {
			names.push(lastName);
		}
		return names.join(' ');
	};

	static IsFileImageType(fileNameOrExtension = '') {
		const type = fileNameOrExtension?.split('.').pop()?.toLowerCase();
		let isImage = false;
		switch (type) {
			case 'png':
			case 'jpeg':
			case 'jpg':
			case 'gif':
			case 'image':
				isImage = true;
				break;
			default:
		}
		return isImage;
	}

	static FileIcon(fileNameOrExtension = '') {
		let iconName = '';
		const type = fileNameOrExtension?.split('.').pop()?.toLowerCase();

		switch (type) {
			case 'xlsx':
			case 'document':
				iconName = 'attachment1';
				break;
			case 'pdf':
				iconName = 'attachment2';
				break;
			case 'form':
				iconName = 'attachment3';
				break;
			case 'docx':
			case 'folder':
				iconName = 'attachment4';
				break;
			case 'png':
			case 'jpeg':
			case 'jpg':
			case 'gif':
			case 'image':
				iconName = 'attachment5';
				break;
			case 'video':
				iconName = 'attachment6';
				break;
			default:
				iconName = 'attachment2';
		}
		return './assets/icon/' + iconName + '.svg';
	}

	static isArray(obj) {
		return !!obj && obj.constructor === Array;
	}

	static isObject(obj) {
		return !!obj && obj.constructor === Object;
	}

	static findObj(list, key, value, defaultIndex = 0) {
		if (list && list.length > 0) {
			let resultData = list[defaultIndex];
			list.some((data) => {
				if (data[key] === value) {
					resultData = data;
					return true;
				}
			});
			return resultData;
		}
		return null;
	}

	static randomBoolean() {
		return Math.round(Math.random());
	}

	static randomNumber() {
		return Math.floor(Math.random() * 1000000 + 1);
	}

	static formattedNumberToNumber(formattedNumber) {
		return formattedNumber ? Number(formattedNumber.replace(/[^0-9.-]+/g, '')) : 0;
	}

	static FCUniqueName(section, question) {
		let preString = '';
		let isSectionDuplicate = false;
		if (section) {
			isSectionDuplicate = section[EnumService.QuestionLogic.ActionTypeForForm.Duplicate];
		} else {
		}
		let isQuestionDuplicate = false;
		if (question) {
			isQuestionDuplicate = question[EnumService.QuestionLogic.ActionTypeForForm.Duplicate];
		} else {
		}
		if (section && section[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName]) {
			preString = preString + '' + section[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName];
		}
		if (question && question[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName]) {
			preString = preString + '' + question[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName];
		}
		return preString + 'FormControl_' + (isSectionDuplicate ? 'Duplicate_' : '') + section.sectionId + '_' + (isQuestionDuplicate ? 'Duplicate_' : '') + question.questionId;
	}

	/**
	 *  Dynamic FormControlName for multiple checkbox
	 */
	static SubFCName(fcName, optionId) {
		return fcName + '_SubFormControl_' + optionId;
	}

	static FCNameAdditioanlNoteUq(formControlName) {
		return 'FormControlAdditionalNote_' + formControlName;
	}

	/**
	 *  Dynamic Html Element id
	 */
	static HtmlElementIdUq(sectionIndex, questionIndex, sectionId, questionId) {
		return 'Question_' + sectionIndex + '_' + questionIndex + '_' + sectionId + '_' + questionId;
	}

	static fixTimeString(value) {
		return value.replace('T', ' ');
	}

	static convertToQuerystring(obj) {
		let str = [];
		for (const p in obj)
			if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
			}
		return str.join('&');
	}

	static getQueryStringValue = (url, key) => {
		return decodeURIComponent(url.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
	};

	static fireCallBack(callBack = null, data = null) {
		if (callBack) {
			callBack(data);
		}
	}

	static convertBase64ToBlob(b64Data, contentType): Blob {
		contentType = contentType || '';
		const sliceSize = 512;
		b64Data = b64Data.replace(/^[^,]+,/, '');
		b64Data = b64Data.replace(/\s/g, '');
		const byteCharacters = window.atob(b64Data);
		const byteArrays = [];
		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);
			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}
		return new Blob(byteArrays, { type: contentType });
	}

	constructor(private loadingController: LoadingController, private file: File, private alertController: AlertController, private validatorService: ValidatorService) {}

	dataUriToFile(url, filename, mimeType) {
		return new Promise(async (resolve, reject) => {
			if (StaticDataService.videoFormats.indexOf(url.split('.').pop().toLowerCase()) !== -1) {
				let dirpath = url.substr(0, url.lastIndexOf('/') + 1);
				dirpath = dirpath.includes('file://') ? dirpath : 'file://' + dirpath;

				try {
					const dirUrl = await this.file.resolveDirectoryUrl(dirpath);
					const retrievedFile = await this.file.getFile(dirUrl, filename, {});

					retrievedFile.file((data) => {
						// if (data.size > MAX_FILE_SIZE) return this.presentAlert("Error", "You cannot upload more than 5mb.");
						// if (data.type !== ALLOWED_MIME_TYPE) return this.presentAlert("Error", "Incorrect file type.");
						const selectedVideo = retrievedFile.nativeURL;
						resolve(selectedVideo);
					});
				} catch {
					reject();
				}
			} else {
				const byteString = window.atob(url.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
				const arrayBuffer = new ArrayBuffer(byteString.length);
				const int8Array = new Uint8Array(arrayBuffer);
				for (let i = 0; i < byteString.length; i++) {
					int8Array[i] = byteString.charCodeAt(i);
				}
				const imageBlob = new Blob([int8Array], { type: mimeType });
				resolve(imageBlob);
			}
		});
	}

	Uniqueid() {
		// always start with a letter (for DOM friendlyness)
		var idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
		do {
			// between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
			var ascicode = Math.floor(Math.random() * 42 + 48);
			if (ascicode < 58 || ascicode > 64) {
				// exclude all chars between : (58) and @ (64)
				idstr += String.fromCharCode(ascicode);
			}
		} while (idstr.length < 32);

		return idstr;
	}

	async presentLoadingWithOptions(message = '') {
		this.isLoadingRequestedInitiated = true;

		if (!this.loading && !this.loadingStarting) {
			this.loadingStopping = false;
			this.loadingStarting = true;
			this.loading = await this.loadingController.create({
				cssClass: 'my-loading-class',
				spinner: null,
				message: '<ion-icon src="./assets/icon/Loader.svg"/>',
				translucent: false,
				backdropDismiss: false,
				mode: 'md',
			});
			this.loadingStarting = false;
			await this.loading.present();

			if (this.loadingStopping) {
				this.hideLoading();
			}
		}
	}

	hideLoading() {
		this.isLoadingRequestedInitiated = false;

		setTimeout(() => {
			if (!this.isLoadingRequestedInitiated) {
				this.loadingStopping = true;
				if (this.loading) {
					this.loading.dismiss();
					this.loading = null;
				}
			}
		}, 500);
	}

	async showAlert(message = '', title = '', callBack = null) {
		this.translateService.get('SHARED_TEXT.CANCEL').subscribe(async (res) => {
			const alert = await this.alertController.create({
				cssClass: 'my-custom-class',
				header: title,
				message,
				buttons: [
					{
						text: res,
						role: 'cancel',
						cssClass: 'secondary',
						handler: callBack,
					},
				],
			});

			await alert.present();
		});
	}

	async showConfirmAlert(message = '', title = '', callBack = null) {
		this.translateService.get(['SHARED_TEXT.NO', 'SHARED_TEXT.YES']).subscribe(async (res) => {
			const alert = await this.alertController.create({
				cssClass: 'my-custom-class',
				header: title,
				message,
				buttons: [
					{
						text: res['SHARED_TEXT.NO'],
						role: 'cancel',
						cssClass: 'secondary',
						handler: () => {
							callBack(false);
						},
					},
					{
						text: res['SHARED_TEXT.YES'],
						handler: () => {
							callBack(true);
						},
					},
				],
			});

			await alert.present();
		});
	}

	getCurrentTimeStamp() {
		return Math.floor(Date.now());
	}

	getCurrentDateTIme() {
		return new Date().toISOString().slice(0, 19).replace('T', ' ');
	}

	public shouldShowSection(section) {
		return section[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] ? true : section[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] ? false : !section.sectionIsHidden;
	}

	public shouldShowQuestion(question) {
		return question[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] ? true : question[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] ? false : !question.questionIsHidden;
	}

	addDynamicFormControlsIfNotExist(section, sectionIndex, questionIndex, question, formGroup: FormGroup, onValueChange = null) {
		const validators = [];
		if (question.questionIsRequired) {
			validators.push(Validators.required);
		}

		if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.NumberFieldDecimal) {
			validators.push(Validators.pattern('\\d+([.]\\d+)?'));
		}
		if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.NumberFieldInteger) {
			validators.push(Validators.pattern('[0-9]*'));
		}

		const formControlName = UtilService.FCUniqueName(section, question);

		if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
			const checkboxFormGroup = new FormGroup(
				{},
				{
					validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null,
				}
			);
			if (question.answerChoiceAttributes) {
				question.answerChoiceAttributes.map((choice) => {
					checkboxFormGroup.addControl(UtilService.SubFCName(formControlName, choice.answerChoiceAttributeId), new FormControl(false));
				});
			}
			checkboxFormGroup.valueChanges.subscribe(onValueChange);
			if (!formGroup.controls[formControlName]) {
				formGroup.addControl(formControlName, checkboxFormGroup);
			}
		} else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.BodyPartControl) {
			const checkboxFormGroup = new FormGroup(
				{},
				{
					validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null,
				}
			);
			question.bodyParts?.map((bodyPartGroup) => {
				bodyPartGroup.parts.map((part) => {
					checkboxFormGroup.addControl(UtilService.SubFCName(formControlName, part.id), new FormControl(false));
				});
			});
			formGroup.addControl(formControlName, checkboxFormGroup);
		} else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.ConfirmationBox) {
			const control = new FormControl(false, Validators.compose(validators));
			control.valueChanges.subscribe(onValueChange);
			if (!formGroup.controls[formControlName]) {
				formGroup.addControl(formControlName, control);
			}
		} else {
			const control = new FormControl('', Validators.compose(validators));
			control.valueChanges.subscribe(onValueChange);
			if (!formGroup.controls[formControlName]) {
				formGroup.addControl(formControlName, control);
			}
		}

		if (question.shouldShowOptionalComment) {
			const formControlAdditionalNote = UtilService.FCNameAdditioanlNoteUq(formControlName);
			if (!formGroup.controls[formControlAdditionalNote]) {
				formGroup.addControl(formControlAdditionalNote, new FormControl(''));
			}
		}
	}

	addFormControlsForVisibleFields = (sections, formGroup: FormGroup) => {
		const questionElementIds = [];
		if (sections) {
			sections.map((section, sectionIndex) => {
				// No need to add form control for Risk Assessment section because we are not using form controls, we using ngModel
				if (section.isRiskAssessmentSection) {
					const tasks = section.riskAssessmentAnswerDetails?.taskAnswers;

					tasks.map((task, questionIndex) => {
						const elementId = UtilService.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, task.taskAnswerId);
						if (this.shouldShowSection(section) && this.shouldShowQuestion(task)) {
							if (questionElementIds.indexOf(elementId) !== -1) {
								questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
							}
							questionElementIds.push(elementId);
						} else {
							const indexOfElement = questionElementIds.indexOf(elementId);
							if (indexOfElement !== -1) {
								questionElementIds.splice(indexOfElement, 1);
							}
						}
					});
				} // No need to add form control for Hav section because we are not using form controls, we using ngModel
				else if (section.isHAVSection) {
					const havAssessmentTools = section.havAssessmentTools;

					havAssessmentTools.map((havAssessmentTool, havAssessmentToolIndex) => {
						havAssessmentTool.questions.map((question, questionIndex) => {
							const elementId = UtilService.HtmlElementIdUq(sectionIndex + '' + havAssessmentToolIndex, questionIndex, section.sectionId, question.questionId);
							if (this.shouldShowSection(section) && this.shouldShowQuestion(question)) {
								if (questionElementIds.indexOf(elementId) !== -1) {
									questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
								}
								questionElementIds.push(elementId);
							} else {
								const indexOfElement = questionElementIds.indexOf(elementId);
								if (indexOfElement !== -1) {
									questionElementIds.splice(indexOfElement, 1);
								}
							}
						});
					});
				} else {
					const questions = section.questions;
					questions.map((question, questionIndex) => {
						const elementId = UtilService.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, question.questionId);

						if (section.isAccidentReportSection && question.selectedAnswerTypeId === EnumService.CustomAnswerType.LocationSelection) {
							const controlName = UtilService.FCUniqueName(section, question);
							if (this.shouldShowSection(section) && this.shouldShowQuestion(question)) {
								formGroup.addControl(controlName, new FormControl(''));
								formGroup.addControl(EnumService.AccidentCustomLocationControlsName.PlaceNotintheList, new FormControl(false));
								formGroup.addControl(EnumService.AccidentCustomLocationControlsName.LocationName, new FormControl(''));

								if (questionElementIds.indexOf(elementId) !== -1) {
									questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
								}
								questionElementIds.push(elementId);
							} else {
								this.removeFieldIfAdded(formGroup, controlName);
								this.removeFieldIfAdded(formGroup, EnumService.AccidentCustomLocationControlsName.PlaceNotintheList);
								this.removeFieldIfAdded(formGroup, EnumService.AccidentCustomLocationControlsName.LocationName);
								const indexOfElement = questionElementIds.indexOf(elementId);
								if (indexOfElement !== -1) {
									questionElementIds.splice(indexOfElement, 1);
								}
							}
						} else {
							if (this.shouldShowSection(section) && this.shouldShowQuestion(question)) {
								this.addDynamicFormControlsIfNotExist(section, sectionIndex, questionIndex, question, formGroup, (value) => {
									this.checkAndApplyLogic(question, value, formGroup, sections, sectionIndex);
								});
								if (questionElementIds.indexOf(elementId) !== -1) {
									questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
								}
								questionElementIds.push(elementId);
							} else {
								const controlName = UtilService.FCUniqueName(section, question);
								this.removeFieldIfAdded(formGroup, controlName);
								const indexOfElement = questionElementIds.indexOf(elementId);
								if (indexOfElement !== -1) {
									questionElementIds.splice(indexOfElement, 1);
								}
							}
						}
					});
				}
			});
		}

		UtilService.fireCallBack(this.questionElementIdsUpdate, questionElementIds);
	};

	/**
	 * Check logic for question and apply it to relevent section/question
	 * @param question
	 * @param value
	 * @param formGroup
	 * @param sections
	 */
	checkAndApplyLogic(question, value, formGroup: FormGroup, sections, sectionIndex) {
		if (question.allowQuestionLogic) {
			const questionLogics = question.questionLogics;

			this.resetAppliedLogicByQuestion(question, sections, sectionIndex, formGroup);

			// check which logic applicable
			questionLogics.some((logic) => {
				if (EnumService.QuestionLogic.LogicApplicableForQuestionTypes.indexOf(question.selectedAnswerTypeId) !== -1) {
					let isActionMeet = false;
					if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleChoiceSet) {
						const questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;
						const questionChoiceSetTypeID = logic.questionChoiceSetTypeID;
						const valueToBeCompare = question.answerChoiceAttributes[questionChoiceSetSequence];
						// Check if condition meet
						const isSelectedAndMeet =
							questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.Selected && value === valueToBeCompare.answerChoiceAttributeId;
						const isNotSelectedAndMeet =
							questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && value !== valueToBeCompare.answerChoiceAttributeId;

						isActionMeet = isSelectedAndMeet || isNotSelectedAndMeet;
					} else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
						const questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;
						const questionChoiceSetTypeID = logic.questionChoiceSetTypeID;
						const checkBoxValueSelected = value[Object.keys(value)[questionChoiceSetSequence]];
						// Check if condition meet
						const isSelectedAndMeet = questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.Selected && checkBoxValueSelected;
						const isNotSelectedAndMeet = questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && !checkBoxValueSelected;

						isActionMeet = isSelectedAndMeet || isNotSelectedAndMeet;
					} else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.ConfirmationBox) {
						const questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;
						const questionChoiceSetTypeID = logic.questionChoiceSetTypeID;
						const valueToBeCompare = question.answerChoiceAttributes[questionChoiceSetSequence];
						// Check if condition meet
						const isSelectedAndMeet = questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.Selected && (value || value === 'true');
						const isNotSelectedAndMeet = questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && !value;

						isActionMeet = isSelectedAndMeet || isNotSelectedAndMeet;
					} else {
						const questionOperatorTypeID = logic.questionOperatorTypeID;

						let valueToBeCompared;
						let selectedValue;

						let dateObjToBeCompared;
						let selectedDateObj;

						let isDateTimeObject = false;

						switch (question.selectedAnswerTypeId) {
							case EnumService.CustomAnswerType.NumberFieldInteger:
								valueToBeCompared = parseInt(logic.integerValue, 0);
								selectedValue = parseInt(value, 0);
								break;
							case EnumService.CustomAnswerType.NumberFieldDecimal:
								valueToBeCompared = parseFloat(logic.decimalValue);
								selectedValue = parseFloat(value);
								break;
							case EnumService.CustomAnswerType.DateTimeField:
								const dtDateValue = logic.dateValue;
								const dtTimeValue = logic.timeValue;
								const dtHourFormatID = logic.hourFormatID;
								const dtDateSplit = dtDateValue.split('/');
								const dtTimeValueSplit = dtTimeValue.split(' ');
								valueToBeCompared = dtDateSplit[2] + '-' + dtDateSplit[1] + '-' + dtDateSplit[0] + ' ' + dtTimeValueSplit[0] + ' ' + (dtHourFormatID === 1 ? 'AM' : 'PM');

								selectedValue = moment(value).utc().format(StaticDataService.dateTimeFormatAMPM);

								dateObjToBeCompared = moment(valueToBeCompared, StaticDataService.dateTimeFormatAMPM);
								selectedDateObj = moment(selectedValue, StaticDataService.dateTimeFormatAMPM);
								isDateTimeObject = true;
								break;
							case EnumService.CustomAnswerType.DateField:
								const dateValue = logic.dateValue;
								const dateSplit = dateValue.split('/');
								valueToBeCompared = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0];

								selectedValue = moment(value).utc().format(StaticDataService.dateFormat);

								dateObjToBeCompared = moment(valueToBeCompared, StaticDataService.dateFormat);
								selectedDateObj = moment(selectedValue, StaticDataService.dateFormat);
								isDateTimeObject = true;
								break;
							case EnumService.CustomAnswerType.TimeField:
								const timeValue = logic.timeValue;
								const hourFormatID = logic.hourFormatID;
								const timeValueSplit = timeValue.split(' ');
								valueToBeCompared = timeValueSplit[0] + '' + (hourFormatID === 1 ? 'AM' : 'PM');

								selectedValue = moment(value).utc().format(StaticDataService.timeFormat);

								dateObjToBeCompared = moment(valueToBeCompared, StaticDataService.timeFormat);
								selectedDateObj = moment(selectedValue, StaticDataService.timeFormat);
								isDateTimeObject = true;
								break;
						}

						if (
							isDateTimeObject &&
							((questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.EqualTo && selectedDateObj.isSame(dateObjToBeCompared)) ||
								(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThen && selectedDateObj.isBefore(dateObjToBeCompared)) ||
								(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThen && selectedDateObj.isAfter(dateObjToBeCompared)) ||
								(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThenEqualTo && selectedDateObj.isSameOrBefore(dateObjToBeCompared)) ||
								(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThenEqualTo && selectedDateObj.isSameOrAfter(dateObjToBeCompared)) ||
								(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.NotEqualTo && !selectedDateObj.isSame(dateObjToBeCompared)))
						) {
							isActionMeet = true;
						} else if (
							(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.EqualTo && selectedValue === valueToBeCompared) ||
							(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThen && selectedValue < valueToBeCompared) ||
							(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThen && selectedValue > valueToBeCompared) ||
							(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThenEqualTo && selectedValue <= valueToBeCompared) ||
							(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThenEqualTo && selectedValue >= valueToBeCompared) ||
							(questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.NotEqualTo && selectedValue !== valueToBeCompared)
						) {
							isActionMeet = true;
						}
					}

					if (isActionMeet) {
						this.applyLogicOn(question, logic, sections, sectionIndex, formGroup);
					}
				}
			});

			this.addFormControlsForVisibleFields(sections, formGroup);
		}
	}

	/**
	 * Reset all applied logics for passed question
	 * @param question
	 * @param sections
	 */
	resetAppliedLogicByQuestion = (question, sections, currentSectionIndex, formGroup) => {
		const questionLogics = question.questionLogics;

		// Reset applied logic from this question
		questionLogics.some((logic) => {
			if (EnumService.QuestionLogic.LogicApplicableForQuestionTypes.indexOf(question.selectedAnswerTypeId) !== -1) {
				if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.MarkAsFailed) {
					delete question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed];
				} else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Notify) {
					delete question[EnumService.QuestionLogic.ActionTypeForForm.Notify];
				} else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.CreateNewActivity) {
					delete question[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity];
				} else {
					const questionActionOnID = logic.questionActionOnID;
					const sectionAndQuestionNo = questionActionOnID.split('-');
					const sectionIndex = sectionAndQuestionNo[0] - 1;
					const questionIndex = sectionAndQuestionNo[1] - 1;

					let sectionObject;
					let questionObject;

					// For find current index to insert new duplicate item
					let currentIndexOfSection = 0;
					let currentIndexOfQuestion = 0;

					if (sectionIndex >= 0) {
						// Find Section/Question Index that was changed by current logic
						for (let sectionKey = 0; sectionKey < sections.length; sectionKey++) {
							const sectionItem = sections[sectionKey];

							const isQuestionChanged = sectionIndex >= 0 && questionIndex >= 0;
							const isSectionChanged = sectionIndex >= 0 && questionIndex < 0;

							if (isQuestionChanged) {
								for (let questionKey = 0; questionKey < sectionItem.questions.length; questionKey++) {
									const questionItem = sectionItem.questions[questionKey];
									if (questionItem['applied_relation_ids'] && logic['applied_relation_id'] && questionItem['applied_relation_ids'].indexOf(logic['applied_relation_id']) != -1) {
										questionObject = questionItem;
										currentIndexOfSection = sectionKey;
										currentIndexOfQuestion = questionKey;
										break;
									}
								}
							} else if (isSectionChanged) {
								if (sectionItem['applied_relation_ids'] && logic['applied_relation_id'] && sectionItem['applied_relation_ids'].indexOf(logic['applied_relation_id']) != -1) {
									sectionObject = sectionItem;
									currentIndexOfSection = sectionKey;
									break;
								}
							}
						}

						// let duplicateSectionCount = 0;

						// for (let sectionKey = 0; sectionKey < sections.length; sectionKey++) {
						// 	const sectionItem = sections[sectionKey];
						// 	if (sectionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
						// 		duplicateSectionCount++;
						// 	}

						// 	if (sectionKey === sectionIndex + duplicateSectionCount) {
						// 		if (sectionIndex >= 0 && questionIndex >= 0) {
						// 			let duplicateQuestionCount = 0;

						// 			for (let questionKey = 0; questionKey < sectionItem.questions.length; questionKey++) {
						// 				const questionItem = sectionItem.questions[questionKey];
						// 				if (questionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
						// 					duplicateQuestionCount++;
						// 				}
						// 				if (questionKey === questionIndex + duplicateQuestionCount) {
						// 					questionObject = questionItem;
						// 					currentIndexOfSection = sectionIndex + duplicateSectionCount;
						// 					currentIndexOfQuestion = questionIndex + duplicateQuestionCount;
						// 					break;
						// 				}
						// 			}
						// 		} else if (sectionIndex >= 0 && questionIndex < 0) {
						// 			sectionObject = sectionItem;
						// 			currentIndexOfSection = sectionIndex + duplicateSectionCount;
						// 		}
						// 		break;
						// 	}
						// }
					}

					if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Show) {
						if (sectionObject) {
							delete sectionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic];
						} else if (questionObject) {
							delete questionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic];

							//Reset for sublogic applied
							const controlName = UtilService.FCUniqueName(sections[currentSectionIndex], questionObject);
							formGroup.controls[controlName]?.reset();
							this.resetAppliedLogicByQuestion(questionObject, sections, currentSectionIndex, formGroup);
						}
					} else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Hide) {
						if (sectionObject) {
							delete sectionObject[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic];
						} else if (questionObject) {
							delete questionObject[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic];
						}
					} else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Duplicate) {
						if (sectionObject) {
							sections.some((section, key) => {
								const uniquePreString = question.questionId + '' + logic.questionLogicId;
								if (section[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] && section[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName] === uniquePreString) {
									sections.splice(key, 1);
								}
							});
						} else if (questionObject) {
							sections[currentIndexOfSection].questions.some((questionInner, key) => {
								const uniquePreString = question.questionId + '' + logic.questionLogicId;
								if (
									questionInner[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] &&
									questionInner[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName] === uniquePreString
								) {
									sections[currentIndexOfSection].questions.splice(key, 1);
								}
							});
						}
					}
				}
			}
		});
		// -- End
	};

	applyLogicOn(question, logic, sections, currentSectionIndex, formGroup) {
		if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.MarkAsFailed) {
			question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
		} else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Notify) {
			question[EnumService.QuestionLogic.ActionTypeForForm.Notify] = true;
		} else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.CreateNewActivity) {
			question[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity] = true;
		} else {
			const questionActionTypeID = logic.questionActionTypeID;
			const questionActionOnID = logic.questionActionOnID;
			const sectionAndQuestionNo = questionActionOnID.split('-');
			const sectionIndex = sectionAndQuestionNo[0] - 1;
			const questionIndex = sectionAndQuestionNo[1] - 1;

			let sectionObject;
			let questionObject;

			// For find current index to insert new duplicate item
			let currentIndexOfSection = 0;
			let currentIndexOfQuestion = 0;

			// TO find original question/section index except duplicate question/section index
			if (sectionIndex >= 0) {
				let duplicateSectionCount = 0;

				const currentSection = sections[currentSectionIndex];

				let isValueFound = false;

				for (let sectionKey = 0; sectionKey < sections.length; sectionKey++) {
					const sectionItem = sections[sectionKey];
					if (sectionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
						duplicateSectionCount++;
					}

					if (sectionKey === sectionIndex + duplicateSectionCount) {
						if (sectionIndex >= 0 && questionIndex >= 0) {
							let duplicateQuestionCount = 0;

							let questions;
							if (sectionItem.sectionId === currentSection.sectionId) {
								questions = currentSection.questions;
							} else {
								questions = sectionItem.questions;
							}
							for (let questionKey = 0; questionKey < questions.length; questionKey++) {
								const questionItem = questions[questionKey];
								if (questionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
									duplicateQuestionCount++;
								}
								if (questionKey === questionIndex + duplicateQuestionCount) {
									questionObject = questionItem;
									currentIndexOfSection = sectionKey;
									currentIndexOfQuestion = questionKey;
									isValueFound = true;
									break;
								}
							}
						} else if (sectionIndex >= 0 && questionIndex < 0) {
							sectionObject = sectionItem;
							currentIndexOfSection = sectionKey;
							isValueFound = true;
							break;
						}
					}
					if (isValueFound) {
						break;
					}
				}
			}

			if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Show) {
				if (sectionObject) {
					sectionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
				} else if (questionObject) {
					questionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
				}
			} else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Hide) {
				if (sectionObject) {
					sectionObject[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
				} else if (questionObject) {
					questionObject[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
				}
			} else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Duplicate) {
				if (sectionObject) {
					const duplicateSection = JSON.parse(JSON.stringify(sectionObject));
					duplicateSection[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] = true;
					duplicateSection[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName] = question.questionId + '' + logic.questionLogicId;

					try {
						this.removeLogicHelpersFromObjectForDuplicate(duplicateSection);
						duplicateSection.questions?.map((quesItem) => {
							const controlName = UtilService.FCUniqueName(duplicateSection, quesItem);
							formGroup.controls[controlName]?.reset();
							this.removeLogicHelpersFromObjectForDuplicate(quesItem);
						});
					} catch (error) {}

					sections.splice(currentIndexOfSection + 1, 0, duplicateSection);
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(duplicateSection, logic);
				} else if (questionObject) {
					const duplicateQuestion = JSON.parse(JSON.stringify(questionObject));
					duplicateQuestion[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] = true;
					duplicateQuestion[EnumService.QuestionLogic.FormControlNamePreStringForUniqueName] = question.questionId + '' + logic.questionLogicId;

					try {
						const controlName = UtilService.FCUniqueName(sections[currentSectionIndex], duplicateQuestion);
						formGroup.controls[controlName]?.reset();
						this.removeLogicHelpersFromObjectForDuplicate(duplicateQuestion);
					} catch (error) {}

					sections[currentIndexOfSection].questions.splice(currentIndexOfQuestion + 1, 0, duplicateQuestion);
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(duplicateQuestion, logic);
				}
			} else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.MarkAsFailed) {
				if (sectionObject) {
					sectionObject[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
				} else if (questionObject) {
					questionObject[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
				}
			} else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Notify) {
				if (sectionObject) {
					sectionObject[EnumService.QuestionLogic.ActionTypeForForm.Notify] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
				} else if (questionObject) {
					questionObject[EnumService.QuestionLogic.ActionTypeForForm.Notify] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
				}
			} else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.CreateNewActivity) {
				if (sectionObject) {
					sectionObject[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
				} else if (questionObject) {
					questionObject[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity] = true;
					this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
				}
			}
		}
	}

	removeLogicHelpersFromObjectForDuplicate(newObject) {
		delete newObject[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic];
		delete newObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic];
		delete newObject[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed];
		delete newObject[EnumService.QuestionLogic.ActionTypeForForm.Notify];
		delete newObject[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity];
	}

	setUniqueRelationIdOnLogicAndQuestionOrSection(question, logic) {
		const uniqueId = this.Uniqueid();
		logic['applied_relation_id'] = uniqueId;
		let relationIds = question['applied_relation_ids'];
		if (!relationIds) {
			relationIds = [];
		}
		relationIds.push(uniqueId);
		question['applied_relation_ids'] = relationIds;
	}

	removeFieldIfAdded(formGroup: FormGroup, formControlName) {
		if (formGroup.controls[formControlName]) {
			formGroup.removeControl(formControlName);
		}
	}

	// Extract id from string (eg. L|10)
	getRelevantEntityId = (entityId) => {
		const response = {
			InventoryID: null,
			ProjectID: null,
			LocationID: null,
			DocumentID: null,
			FormID: null,
		};
		const entityIdSplits = entityId.split('|');
		if (entityIdSplits && entityIdSplits.length >= 2) {
			if (entityIdSplits[0] === 'I') {
				response.InventoryID = parseInt(entityIdSplits[1], 0);
			} else if (entityIdSplits[0] === 'P') {
				response.ProjectID = parseInt(entityIdSplits[1], 0);
			} else if (entityIdSplits[0] === 'L') {
				response.LocationID = parseInt(entityIdSplits[1], 0);
			} else if (entityIdSplits[0] === 'F') {
				response.FormID = parseInt(entityIdSplits[1], 0);
			} else if (entityIdSplits[0] === 'D') {
				response.DocumentID = parseInt(entityIdSplits[1], 0);
			} else {
				response.LocationID = parseInt(entityIdSplits[1], 0);
			}
		}
		return response;
	};

	getEntityIdFromId(locationDetails) {
		let entityId = '';
		if (locationDetails.locationID > 0) {
			entityId = 'L|' + locationDetails.locationID;
		} else if (locationDetails.projectID > 0) {
			entityId = 'P|' + locationDetails.projectID;
		} else if (locationDetails.inventoryItemID > 0) {
			entityId = 'I|' + locationDetails.inventoryItemID;
		}
		return entityId;
	}
}
