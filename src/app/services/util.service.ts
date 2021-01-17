import {Injectable} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {EnumService} from './enum.service';
import {SharedDataService} from './shared-data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from './validator.service';
import * as moment from 'moment';
import {StaticDataService} from './static-data.service';
import {UserDetail} from '../_models/userDetail';
import {environment} from '../../environments/environment';
import {Capacitor} from '@capacitor/core';
import {File} from '@ionic-native/file/ngx';

declare global {
    interface Array<T> {
        clone(): Array<T>;
    }
}

Array.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this));
};

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    loading: HTMLIonLoadingElement = null;
    loadingStarting = false;
    loadingStopping = false;

    questionElementIds: Array<string>;
    questionElementIdsUpdate: any; // callback


    static isLocalHost() {
        return !environment.production && !Capacitor.isNative;
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

    static FileIcon(fileNameOrExtension = '') {
        let iconName = '';
        const type = fileNameOrExtension?.split('.').pop();

        switch (type) {
            case 'document':
                iconName = 'attachment1';
                break;
            case 'pdf':
                iconName = 'attachment2';
                break;
            case 'form':
                iconName = 'attachment3';
                break;
            case 'folder':
                iconName = 'attachment4';
                break;
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

    static formattedNumberToNumber(formattedNumber) {
        return Number(formattedNumber.replace(/[^0-9.-]+/g, ''));
    }

    static FCName(sectionIndex, questionIndex, questionId) {
        return 'FormControl_' + sectionIndex + '_' + questionIndex + '_' + questionId;
    }

    static CustomFCName(sectionId, questionId, isSectionDuplicate = false, isQuestionDuplicate = false) {
        return 'FormControl_' + (isSectionDuplicate ? 'Duplicate_' : '') + sectionId + '_' + (isQuestionDuplicate ? 'Duplicate_' : '') + questionId;
    }

    /**
     *  Dynamic FormControlName for multiple checkbox
     */
    static SubFCName(fcName, optionId) {
        return fcName + '_SubFormControl_' + optionId;
    }

    static FCNameAdditioanlNote(questionId) {
        return 'FormControlAdditionalNote_' + questionId;
    }

    static FCNameAdditioanlNoteUq(sectionIndex, questionIndex, questionId) {
        return 'FormControlAdditionalNote_' + sectionIndex + '_' + questionIndex + '_' + questionId;
    }

    /**
     *  Dynamic Html Element id
     */
    static HtmlElementIdUq(sectionIndex, questionIndex, sectionId, questionId) {
        return 'Question_' + sectionIndex + '_' + questionIndex + '_' + sectionId + '_' + questionId;
    }

    static HtmlElementId(sectionId, questionId) {
        return 'Question_' + sectionId + '_' + questionId;
    }

    static fixTimeString(value) {
        return value.replace('T', ' ');
    }

    static getQueryStringValue = (url, key) => {
        return decodeURIComponent(url.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
    };

    static fireCallBack(callBack = null, data = null) {
        if (callBack) {
            callBack(data);
        }
    }

    constructor(
        private loadingController: LoadingController,
        private file: File,
        private alertController: AlertController,
        private validatorService: ValidatorService,
        private navCtrl: NavController,
    ) {
    }

    async startLoadingWithOptions(message = ''): Promise<HTMLIonLoadingElement> {
        const loading = await this.loadingController.create({
            cssClass: 'my-loading-class',
            spinner: null,
            message: '<ion-icon src="./assets/icon/Loader.svg"/>',
            translucent: false,
            backdropDismiss: false,
            mode: 'md'
        });
        await loading.present();
        return loading;
    }

    async hideLoadingFor(loading: HTMLIonLoadingElement) {
        if (loading) {
            await loading.dismiss();
            loading = null;
        }
    }

    dataUriToFile(url, filename, mimeType) {
        return new Promise(async (resolve, reject) => {
            if (StaticDataService.videoFormats.indexOf(url.split('.').pop().toLowerCase()) !== -1) {
                let dirpath = url.substr(0, url.lastIndexOf('/') + 1);
                dirpath = dirpath.includes('file://') ? dirpath : 'file://' + dirpath;

                try {
                    const dirUrl = await this.file.resolveDirectoryUrl(dirpath);
                    const retrievedFile = await this.file.getFile(dirUrl, filename, {});

                    retrievedFile.file(data => {
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
                const imageBlob = new Blob([int8Array], {type: mimeType});
                resolve(imageBlob);
            }
        });
    }

    async presentLoadingWithOptions(message = '') {
        if (!this.loading && !this.loadingStarting) {
            this.loadingStopping = false;
            this.loadingStarting = true;
            this.loading = await this.loadingController.create({
                cssClass: 'my-loading-class',
                spinner: null,
                message: '<ion-icon src="./assets/icon/Loader.svg"/>',
                translucent: false,
                backdropDismiss: false,
                mode: 'md'
            });
            this.loadingStarting = false;
            await this.loading.present();

            if (this.loadingStopping) {
                this.hideLoading();
            }
        }
    }

    hideLoading() {
        this.loadingStopping = true;
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }

    async showAlert(message = '', title = '', callBack = null) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: callBack
                }
            ]
        });

        await alert.present();
    }

    getCurrentTimeStamp() {
        return Math.floor(Date.now());
    }

    getCurrentDateTIme() {
        return new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public shouldShowSection(section) {
        return section[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] ? true : (section[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] ? false : !section.sectionIsHidden);
    }

    public shouldShowQuestion(question) {
        return question[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] ? true : (question[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] ? false : !question.questionIsHidden);
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

        const formControlName = UtilService.CustomFCName(section.sectionId, question.questionId, section[EnumService.QuestionLogic.ActionTypeForForm.Duplicate], question[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]);

        if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
            const checkboxFormGroup = new FormGroup({}, {validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null});
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
            const checkboxFormGroup = new FormGroup({}, {validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null});
            question.bodyParts?.map((bodyPartGroup) => {
                bodyPartGroup.parts.map((part) => {
                    checkboxFormGroup.addControl(UtilService.SubFCName(formControlName, part.id), new FormControl(false));
                });
            });
            formGroup.addControl(formControlName, checkboxFormGroup);
        } else {
            const control = new FormControl('', Validators.compose(validators));
            control.valueChanges.subscribe(onValueChange);
            if (!formGroup.controls[formControlName]) {
                formGroup.addControl(formControlName, control);
            }
        }

        if (question.shouldShowOptionalComment) {
            const formControlAdditionalNote = UtilService.FCNameAdditioanlNoteUq(sectionIndex, questionIndex, question.questionId);
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
                    const tasks = section.tasks;
                    tasks.map((task, questionIndex) => {
                        const elementId = UtilService.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, task.taskId);
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
                } else {
                    const questions = section.questions;
                    const isSectionDuplicate = section[EnumService.QuestionLogic.ActionTypeForForm.Duplicate];
                    questions.map((question, questionIndex) => {
                        const elementId = UtilService.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, question.questionId);

                        if (section.isAccidentReportSection && question.selectedAnswerTypeId === EnumService.CustomAnswerType.LocationSelection) {
                            const controlName = UtilService.CustomFCName(section.sectionId, question.questionId, isSectionDuplicate, question[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]);
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
                                    this.checkAndApplyLogic(question, value, formGroup, sections);
                                });
                                if (questionElementIds.indexOf(elementId) !== -1) {
                                    questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
                                }
                                questionElementIds.push(elementId);
                            } else {
                                const controlName = UtilService.CustomFCName(section.sectionId, question.questionId, isSectionDuplicate, question[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]);
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


    checkAndApplyLogic(question, value, formGroup: FormGroup, sections) {

        if (question.allowQuestionLogic) {
            const questionLogics = question.questionLogics;

            // Reset applied logic from this question
            questionLogics.map((logic) => {
                if (EnumService.QuestionLogic.LogicApplicableForQuestionTypes.indexOf(question.selectedAnswerTypeId) !== -1) {

                    if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.MarkAsFailed) {
                        delete question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed];
                    } else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Notify) {
                        delete question[EnumService.QuestionLogic.ActionTypeForForm.Notify];
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
                            let duplicateSectionCount = 0;
                            sections.map((sectionItem, sectionKey) => {
                                if (sectionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                                    duplicateSectionCount++;
                                }

                                if (sectionKey === sectionIndex + duplicateSectionCount) {
                                    if (sectionIndex >= 0 && questionIndex >= 0) {
                                        let duplicateQuestionCount = 0;
                                        sectionItem.questions.some((questionItem, questionKey) => {
                                            if (questionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                                                duplicateQuestionCount++;
                                            }
                                            if (questionKey === questionIndex + duplicateQuestionCount) {
                                                questionObject = questionItem;
                                                currentIndexOfSection = sectionIndex + duplicateSectionCount;
                                                currentIndexOfQuestion = questionIndex + duplicateQuestionCount;
                                                return true;
                                            }
                                        });
                                    } else if (sectionIndex >= 0 && questionIndex < 0) {
                                        sectionObject = sectionItem;
                                        currentIndexOfSection = sectionIndex + duplicateSectionCount;
                                    }
                                    return;
                                }
                            });
                        }


                        if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Show) {
                            if (sectionObject) {
                                delete sectionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic];
                            } else if (questionObject) {
                                delete questionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic];
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
                                    if (section[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                                        sections.splice(key, 1);
                                        return true;
                                    }
                                });
                            } else if (questionObject) {
                                sections[currentIndexOfSection].questions.some((questionInner, key) => {
                                    if (questionInner[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                                        sections[currentIndexOfSection].questions.splice(key, 1);
                                        return true;
                                    }
                                });
                            }
                        }
                    }
                }
            });
            // -- End


            // check which logic applicable
            questionLogics.map((logic) => {
                if (EnumService.QuestionLogic.LogicApplicableForQuestionTypes.indexOf(question.selectedAnswerTypeId) !== -1) {

                    let isActionMeet = false;
                    if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleChoiceSet) {

                        const questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;
                        const questionChoiceSetTypeID = logic.questionChoiceSetTypeID;
                        const valueToBeCompare = question.answerChoiceAttributes[questionChoiceSetSequence];
                        // Check if condition meet
                        const isSelectedAndMeet = (questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.Selected && value === valueToBeCompare.answerChoiceAttributeId);
                        const isNotSelectedAndMeet = (questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && value !== valueToBeCompare.answerChoiceAttributeId);

                        isActionMeet = (isSelectedAndMeet || isNotSelectedAndMeet);
                    } else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {

                        const questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;
                        const questionChoiceSetTypeID = logic.questionChoiceSetTypeID;
                        const checkBoxValueSelected = value[Object.keys(value)[questionChoiceSetSequence]];
                        // Check if condition meet
                        const isSelectedAndMeet = (questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.Selected && checkBoxValueSelected);
                        const isNotSelectedAndMeet = (questionChoiceSetTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && !checkBoxValueSelected);

                        isActionMeet = (isSelectedAndMeet || isNotSelectedAndMeet);
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

                        if (isDateTimeObject &&
                            (
                                questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.EqualTo && selectedDateObj.isSame(dateObjToBeCompared) ||
                                questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThen && selectedDateObj.isBefore(dateObjToBeCompared) ||
                                questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThen && selectedDateObj.isAfter(dateObjToBeCompared) ||
                                questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThenEqualTo && selectedDateObj.isSameOrBefore(dateObjToBeCompared) ||
                                questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThenEqualTo && selectedDateObj.isSameOrAfter(dateObjToBeCompared) ||
                                questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.NotEqualTo && !selectedDateObj.isSame(dateObjToBeCompared)
                            )) {
                            isActionMeet = true;
                        } else if (
                            questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.EqualTo && selectedValue === valueToBeCompared ||
                            questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThen && selectedValue < valueToBeCompared ||
                            questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThen && selectedValue > valueToBeCompared ||
                            questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.LessThenEqualTo && selectedValue <= valueToBeCompared ||
                            questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.GreaterThenEqualTo && selectedValue >= valueToBeCompared ||
                            questionOperatorTypeID === EnumService.QuestionLogic.OtherValueOperationType.NotEqualTo && selectedValue !== valueToBeCompared
                        ) {
                            isActionMeet = true;
                        }
                    }


                    if (isActionMeet) {
                        this.applyLogicOn(question, logic, sections);
                    }
                }
            });

            this.addFormControlsForVisibleFields(sections, formGroup);
        }
    }

    applyLogicOn(question, logic, sections) {

        if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.MarkAsFailed) {
            question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
        } else if (logic.questionActionTypeID === EnumService.QuestionLogic.ActionType.Notify) {
            question[EnumService.QuestionLogic.ActionTypeForForm.Notify] = true;
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
                sections.some((sectionItem, sectionKey) => {
                    if (sectionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                        duplicateSectionCount++;
                    }

                    if (sectionKey === sectionIndex + duplicateSectionCount) {
                        if (sectionIndex >= 0 && questionIndex >= 0) {
                            let duplicateQuestionCount = 0;
                            sectionItem.questions.some((questionItem, questionKey) => {
                                if (questionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                                    duplicateQuestionCount++;
                                }
                                if (questionKey === questionIndex + duplicateQuestionCount) {

                                    questionObject = questionItem;
                                    currentIndexOfSection = sectionKey;
                                    currentIndexOfQuestion = questionKey;
                                    return true;
                                }
                            });
                        } else if (sectionIndex >= 0 && questionIndex < 0) {
                            sectionObject = sectionItem;
                            currentIndexOfSection = sectionKey;
                        }
                        return true;
                    }
                });
            }


            if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Show) {
                if (sectionObject) {
                    sectionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] = true;
                } else if (questionObject) {
                    questionObject[EnumService.QuestionLogic.ActionTypeForForm.ShowForLogic] = true;
                }
            } else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Hide) {
                if (sectionObject) {
                    sectionObject[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] = true;
                } else if (questionObject) {
                    questionObject[EnumService.QuestionLogic.ActionTypeForForm.HideForLogic] = true;
                }
            } else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Duplicate) {
                if (sectionObject) {
                    let canSectionBeDuplicate = true;

                    // check if already this section is duplicated
                    if (sections.length > currentIndexOfSection + 1) {
                        const sectionToBeShift = sections[currentIndexOfSection + 1];
                        if (sectionToBeShift[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] && sectionToBeShift.sectionId === sectionObject.sectionId) {
                            console.log('This Section is Already Duplicated');
                            canSectionBeDuplicate = false;
                        }
                    }

                    if (canSectionBeDuplicate) {
                        const duplicateSection = JSON.parse(JSON.stringify(sectionObject));
                        duplicateSection[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] = true;
                        sections.splice(currentIndexOfSection + 1, 0, duplicateSection);
                    }
                } else if (questionObject) {
                    let canQuestionBeDuplicate = true;

                    // check if already this question is duplicated
                    if (sections[currentIndexOfSection].questions.length > currentIndexOfQuestion + 1) {
                        const questionToBeShift = sections[currentIndexOfSection].questions[currentIndexOfQuestion + 1];
                        if (questionToBeShift[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] && questionToBeShift.questionId === questionObject.questionId) {
                            console.log('This Question is Already Duplicated');
                            canQuestionBeDuplicate = false;
                        }
                    }

                    if (canQuestionBeDuplicate) {
                        const duplicateQuestion = JSON.parse(JSON.stringify(questionObject));
                        duplicateQuestion[EnumService.QuestionLogic.ActionTypeForForm.Duplicate] = true;
                        sections[currentIndexOfSection].questions.splice(currentIndexOfQuestion + 1, 0, duplicateQuestion);
                    }
                }
            } else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.MarkAsFailed) {
                if (sectionObject) {
                    sectionObject[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
                } else if (questionObject) {
                    questionObject[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
                }
            } else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Notify) {
                if (sectionObject) {
                    sectionObject[EnumService.QuestionLogic.ActionTypeForForm.Notify] = true;
                } else if (questionObject) {
                    questionObject[EnumService.QuestionLogic.ActionTypeForForm.Notify] = true;
                }
            }
        }

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
