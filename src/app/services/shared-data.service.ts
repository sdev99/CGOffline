import {Injectable} from '@angular/core';
import {EnumService} from './enum.service';
import {NavController, Platform} from '@ionic/angular';
import {Profile} from '../_models/profile';
import {CheckinDetail} from '../_models/checkinDetail';
import {LocationItem} from '../_models/locationItem';
import {GlobalDirectory} from '../_models/globalDirectory';
import {rejects} from 'assert';
import {GeolocationPosition} from '@capacitor/core';
import {ActivityListItem} from '../_models/activityListItem';
import {DocumentDetail} from '../_models/documentDetail';
import {CheckInPostData} from '../_models/checkInPostData';
import {SignOffDetailsPostData} from '../_models/signOffDetailsPostData';
import {UtilService} from './util.service';
import {ApiService} from './api.service';
import {Response, User} from '../_models';
import {ObservablesService} from './observables.service';
import {CheckedInDetailItem} from '../_models/checkedInDetailItem';
import {SignOffFormDetail} from '../_models/signOffFormDetail';
import {HavAnswerObject} from '../_models/havAnswerObject';
import {FormAnswerObject} from '../_models/formAnswerObject';
import {HavExposure} from '../_models/havExposure';
import {HavModelItem} from '../_models/havModelItem';
import {SubmitAnswersObject} from '../_models/submitAnswersObject';
import {FormControl, FormGroup} from '@angular/forms';
import {MultipleChoiceAnswerItem} from '../_models/multipleChoiceAnswerItem';
import * as moment from 'moment/moment';
import {WorkPermitAnswer} from '../_models/workPermitAnswer';
import {ArAnswerObject} from '../_models/arAnswerObject';
import {StaticDataService} from './static-data.service';
import {RiskRatingItem} from '../_models/riskRatingItem';
import {RiskAssessmentAnswerObject} from '../_models/riskAssessmentAnswerObject';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {
    apiServiceRerence: ApiService;

    myCurrentGeoLocation: GeolocationPosition;

    annotationImage;
    annotationColor = '#98C16B';
    onAnnotationImageDone;

    deviceUID = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
    // deviceUID = '00001'; // For test dedicated mode
    pushToken = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
    isTablet = false;
    dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
    // when open form or document , useful for next screens

    dedicatedModeDeviceDetailData;

    // Data from Api
    checkedInPlaces: Array<CheckedInDetailItem> = [];
    currentSelectedCheckinPlace: CheckedInDetailItem;

    userProfile: Profile;
    timeZoneList;
    companyLanguageList;
    riskRatingsList: [RiskRatingItem];
    globalDirectories: GlobalDirectory;
    locationItemList;

    // data for another pages
    checkInDetail: CheckinDetail;
    currentActivityOpen: ActivityListItem;
    signOffFormDetail: SignOffFormDetail; // For form activity signoff
    signOffDocumentDetail: DocumentDetail; // For activity document  signoff and current checkin document signoff
    viewFormDetail;

    dedicatedModeLocationUse;

    checkinoutDmAs = '';
    signOffFor = '';

    viewFormFor; // View form for induction process or activity detail
    inductionContentItemIndex = 0;

    // Store location data for checkinout
    checkInForLocation: LocationItem;
    checkOutForCheckedInDetail: CheckedInDetailItem;

    // Store  all screen checkin details for whole process and use this data on end of checkin data send to server
    checkInPostData: CheckInPostData;
    signOffDetailsPostData: SignOffDetailsPostData;

    formBuilderDetails;

    // for use in next screen
    availableWorkPermits;

    isOpenImageAnnotation = false;

    workPermitAnswer: WorkPermitAnswer;

    //
    currentLanguageId = 35;

    constructor(
        private router: Router,
        private platform: Platform,
        private navCtrl: NavController,
        private observablesService: ObservablesService,
        private utilService: UtilService,
    ) {
        this.isTablet = platform.is('tablet');
        this.dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
        const dedicatedModeLocationUse = localStorage.getItem(EnumService.LocalStorageKeys.DEDICATED_MODE_LOCATION_USE);
        if (dedicatedModeLocationUse) {
            this.dedicatedModeLocationUse = JSON.parse(dedicatedModeLocationUse);
        }
        const dedicatedModeDeviceDetail = localStorage.getItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL);
        if (dedicatedModeDeviceDetail) {
            this.dedicatedModeDeviceDetailData = JSON.parse(dedicatedModeDeviceDetail);
        }

        const userProfile = localStorage.getItem(EnumService.LocalStorageKeys.USER_PROFILE);
        if (userProfile) {
            this.userProfile = JSON.parse(userProfile);
        }

        const checkedInPlaces = localStorage.getItem(EnumService.LocalStorageKeys.CHECKED_IN_PLACES);
        if (checkedInPlaces) {
            this.checkedInPlaces = JSON.parse(checkedInPlaces);
        }

        const selectedCheckedInPlace = localStorage.getItem(EnumService.LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE);
        if (selectedCheckedInPlace) {
            this.currentSelectedCheckinPlace = JSON.parse(selectedCheckedInPlace);
        }

        const globalDirectories = localStorage.getItem(EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES);
        if (globalDirectories) {
            this.globalDirectories = JSON.parse(globalDirectories) as GlobalDirectory;
        }
    }

    setAnnotationImage(image) {
        this.annotationImage = image;
    }

    getAnnotationImage() {
        return this.annotationImage;
    }

    resetAllSharedVariable() {
        this.checkedInPlaces = [];
        this.currentSelectedCheckinPlace = null;
        this.userProfile = null;
        this.timeZoneList = null;
        this.companyLanguageList = null;
        this.globalDirectories = null;
        this.locationItemList = null;
        this.checkInDetail = null;
        this.currentActivityOpen = null;
        this.signOffFormDetail = null;
        this.signOffDocumentDetail = null;
        this.viewFormDetail = null;
        this.dedicatedModeLocationUse = null;
        this.checkinoutDmAs = '';
        this.signOffFor = '';
        this.viewFormFor = null;
        this.inductionContentItemIndex = 0;
        this.checkInForLocation = null;
        this.checkOutForCheckedInDetail = null;
        this.checkInPostData = null;
        this.signOffDetailsPostData = null;
        this.formBuilderDetails = null;
        this.availableWorkPermits = null;
        this.isOpenImageAnnotation = false;
        this.workPermitAnswer = null;
    }

    getLoggedInUser() {
        const user: User = JSON.parse(localStorage.getItem(EnumService.LocalStorageKeys.USER_DATA));
        return user;
    }

    public getCheckinDetails = async (userId, apiService: ApiService) => {
        if (userId && this.checkInForLocation) {
            let ifAlreadyCheckedinPlace;
            if (this.checkedInPlaces) {
                this.checkedInPlaces.map((place) => {
                    const entityIds = this.utilService.getRelevantEntityId(this.checkInForLocation.locationID);
                    if ((entityIds.InventoryID > 0 && entityIds.InventoryID === place.inventoryItemID) ||
                        (entityIds.ProjectID > 0 && entityIds.ProjectID === place.projectID) ||
                        (entityIds.LocationID > 0 && entityIds.LocationID === place.locationID)
                    ) {
                        ifAlreadyCheckedinPlace = place;
                        return;
                    }
                });
            }

            if (ifAlreadyCheckedinPlace) {
                this.checkOutForCheckedInDetail = ifAlreadyCheckedinPlace;
                this.navCtrl.navigateForward(['/checkinout-confirm'], {
                    queryParams: {
                        headerTitle: 'Check Out',
                        title: 'You are checking out',
                        subtitle: ifAlreadyCheckedinPlace.entityName,
                        buttonTitle: 'Check Out Now',
                        locationCheckType: EnumService.ConfirmForCheckType.CheckOut
                    }
                });
            } else {
                const loading = await this.utilService.startLoadingWithOptions();
                apiService.getCheckInDetails(userId, this.checkInForLocation.locationID).subscribe((response: Response) => {
                    this.utilService.hideLoadingFor(loading);
                    if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                        this.checkInDetail = response.Result as CheckinDetail;
                        this.checkInPostData = {
                            userId,
                            checkInLatitude: this.myCurrentGeoLocation?.coords.latitude,
                            checkInLongitude: this.myCurrentGeoLocation?.coords.longitude,
                            isGuestReturning: false,
                            projectID: this.checkInDetail.checkInEntityDetail.projectID,
                            inventoryItemID: this.checkInDetail.checkInEntityDetail.inventoryItemID,
                            locationID: this.checkInDetail.checkInEntityDetail.locationID,
                        } as CheckInPostData;

                        this.navCtrl.navigateForward(['/checkinout-confirm'], {
                            queryParams: {
                                headerTitle: 'Check In',
                                title: 'You are checking in',
                                subtitle: this.checkInForLocation.locationName,
                                buttonTitle: 'Check In Now',
                                nextPageData: JSON.stringify({
                                    locationDetail: JSON.stringify(this.checkInForLocation)
                                }),
                                nextPagePath: '/checkin-induction',
                                locationCheckType: EnumService.ConfirmForCheckType.CheckIn
                            }
                        });
                    }
                }, (error: any) => {
                    const errorField = error?.error?.ResponseException?.ValidationErrors[0].Field;

                    this.utilService.hideLoadingFor(loading);
                    if (errorField.indexOf('SimultaneousCheckIn') !== -1) {
                        this.navCtrl.navigateForward(['/checkin-fail'], {
                            queryParams: {
                                title: 'You cannot check-in',
                                errorTitle: 'Simultanious Check-In Not Allowed.',
                                errorMessage: 'You are already checked-in to another place.',
                                nextPage: '/tabs/dashboard'
                            }
                        });
                    } else {
                        this.navCtrl.navigateForward(['/checkin-fail'], {
                            queryParams: {
                                title: 'You cannot check-in',
                                errorTitle: 'No Qualification',
                                errorMessage: 'You do not have the required qualifications.',
                                nextPage: '/tabs/dashboard'
                            }
                        });
                    }
                });
            }
        }
    };

    public async saveFormAnswers(apiService: ApiService, formGroup: FormGroup, formBuilderDetail, user: User, callBack, havExposure: HavExposure = null, workPermitAnswer: WorkPermitAnswer = null) {

        const sections = formBuilderDetail.sections;

        let requiredFieldsCount = 0;
        let requiredFieldsValidCount = 0;

        if (sections) {
            sections.map((section) => {
                if (!section.sectionIsHidden) {
                    if (section.isRiskAssessmentSection) {
                        const tasks = section.tasks;
                        tasks.map((task) => {
                            if (task.isRequired) {
                                requiredFieldsCount++;
                                const hazards = task.hazards;
                                let isValid = true;
                                hazards.map((hazard) => {
                                    if (!hazard.riskRating || !hazard.residualRiskRating) {
                                        isValid = false;
                                    }

                                    if (hazard.memberOfTheWorkForce) {
                                        if (Object.keys(hazard.addedUsers).length === 0 && Object.keys(hazard.addedGroups).length === 0) {
                                            isValid = false;
                                        }
                                    }

                                    if (hazard.memberOfThePublic) {
                                        if (!hazard.memberOfThePublicDescription) {
                                            isValid = false;
                                        }
                                    }
                                });
                                if (isValid) {
                                    requiredFieldsValidCount++;
                                }
                            }
                        });
                    } else {
                        const questions = section.questions;
                        questions.map((question) => {
                            if (!question.questionIsHidden) {
                                const control = formGroup.controls[UtilService.FCName(question.questionId)];
                                if (question.questionIsRequired) {
                                    requiredFieldsCount++;
                                    if (control && control.valid) {
                                        requiredFieldsValidCount++;
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }


        if (formGroup.valid && requiredFieldsCount === requiredFieldsValidCount) {
            let attachmentCount = 0;
            let attachmentUploadedCount = 0;
            const attachemtUploaded = {};

            let loading;

            sections.map((section) => {
                if (!section.sectionIsHidden) {
                    const questions = section.questions;
                    questions.map((question) => {
                        if (!question.questionIsHidden) {
                            const control = formGroup.controls[UtilService.FCName(question.questionId)];
                            if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.PhotoVideoUpload) {
                                if (control && control.value) {
                                    attachmentCount++;

                                    const fileName = 'user' + this.utilService.getCurrentTimeStamp() + '.jpeg';
                                    const mimeType = 'image/jpeg';
                                    this.utilService.dataUriToFile(control.value, fileName, mimeType).then(async (file) => {
                                        if (!loading) {
                                            loading = await this.utilService.startLoadingWithOptions();
                                        }
                                        apiService.formPhotoOrVideoUpload(file, fileName).subscribe((response: Response) => {
                                            attachmentUploadedCount++;
                                            attachemtUploaded[question.questionId] = response.Result;
                                            if (attachmentCount === attachmentUploadedCount) {
                                                this.utilService.hideLoadingFor(loading);
                                                this.submitFormAnswers(apiService, formGroup, formBuilderDetail, user, callBack, havExposure, workPermitAnswer, attachemtUploaded);
                                            }
                                        }, (error) => {
                                            attachmentUploadedCount++;
                                            if (attachmentCount === attachmentUploadedCount) {
                                                this.utilService.hideLoadingFor(loading);
                                                this.submitFormAnswers(apiService, formGroup, formBuilderDetail, user, callBack, havExposure, workPermitAnswer, attachemtUploaded);
                                            }
                                        });
                                    }).catch(() => {
                                        attachmentUploadedCount++;
                                        if (attachmentCount === attachmentUploadedCount) {
                                            this.utilService.hideLoadingFor(loading);
                                            this.submitFormAnswers(apiService, formGroup, formBuilderDetail, user, callBack, havExposure, workPermitAnswer, attachemtUploaded);
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            });


            if (attachmentCount === 0) {
                this.submitFormAnswers(apiService, formGroup, formBuilderDetail, user, callBack, havExposure, workPermitAnswer);
            }
        } else if (requiredFieldsValidCount === 0) {
            const errorMessage = 'All Required fields missings.';
            callBack(false, errorMessage);
        } else {
            const missingFieldCount = requiredFieldsCount - requiredFieldsValidCount;
            const errorMessage = (missingFieldCount) + ' required field' + (missingFieldCount > 1 ? 's' : '') + ' missing';
            callBack(false, errorMessage);
        }
    }


    private submitFormAnswers = (apiService: ApiService, formGroup: FormGroup, formBuilderDetail, user: User, callBack, havExposure: HavExposure = null, workPermitAnswer: WorkPermitAnswer = null, attachemtUploaded = {}) => {
        const sections = formBuilderDetail.sections;
        const defaultLanguageId = formBuilderDetail.defaultLanguageId;
        const formVersionId = formBuilderDetail.formVersionId;

        const questionAnswers = [];
        const havQuestionAnswers = [];
        const accidentReportQuestionAnswers = [];
        const riskAssessmentAnswers = [];

        sections.map((section) => {
            if (!section.sectionIsHidden) {
                if (section.isRiskAssessmentSection) {
                    const tasks = section.tasks;
                    tasks.map((task) => {
                        const hazards = task.hazards;
                        hazards.map((hazard) => {
                            const answerObject: RiskAssessmentAnswerObject = {
                                riskAQuestionAnswerId: 0,
                                hazardID: hazard.hazardId,
                                formVersionID: formVersionId,
                                riskRatingID: hazard.riskRating,
                                residualRiskRatingID: hazard.residualRiskRating,
                                isMembersOfTheWorkForce: hazard.memberOfTheWorkForce,
                                isMembersOfThePublic: hazard.memberOfThePublic,
                            };

                            const controlMeasures = hazard.controlMeasures;
                            const controlMeasureIDs = [];
                            if (controlMeasures) {
                                controlMeasures.map((controlMeasure) => {
                                    if (controlMeasure.isSelected) {
                                        controlMeasureIDs.push(controlMeasure.controlMeasureId);
                                    }
                                });
                            }
                            answerObject.controlMeasureIDs = controlMeasureIDs.join(',');

                            if (hazard.memberOfTheWorkForce) {
                                answerObject.userIDs = Object.keys(hazard.addedUsers).join(',');
                                answerObject.userGroupIDs = Object.keys(hazard.addedGroups).join(',');
                            }

                            if (hazard.memberOfThePublic) {
                                answerObject.membersOfThePublicDescription = hazard.memberOfThePublicDescription;
                            }
                            riskAssessmentAnswers.push(answerObject);
                        });
                    });
                } else {
                    const questions = section.questions;

                    questions.map((question) => {
                        if (!question.questionIsHidden) {
                            const control = formGroup.controls[UtilService.FCName(question.questionId)];
                            if (control) {
                                const questionLabel = UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', this.currentLanguageId).questionTranslationTitle;

                                if (section.isHAVSection) {
                                    const answerObject: HavAnswerObject = {
                                        havQuestionAnswerId: 0,
                                        questionID: question.questionId,
                                        questionTitle: questionLabel,
                                        formVersionID: formVersionId,
                                        answerTypeID: question.selectedAnswerTypeId,
                                        havSequence: question.questionDisplayOrder,
                                    };

                                    switch (question.questionDisplayOrder) {
                                        case EnumService.HavFormFieldOrder.DateOfUsage:
                                            if (control.value) {
                                                answerObject.dateOfUsage = moment(control.value).format('YYYY-MM-DD HH:mm:ss.SSS');
                                            }
                                            break;
                                        case EnumService.HavFormFieldOrder.Manufacturer:
                                            answerObject.havManufacturerID = control.value;
                                            break;
                                        case EnumService.HavFormFieldOrder.Type:
                                            answerObject.havTypeID = control.value;
                                            break;
                                        case EnumService.HavFormFieldOrder.Model:
                                            answerObject.havModelID = control.value;
                                            break;
                                        case EnumService.HavFormFieldOrder.PlannedTimeOfUsage:
                                            answerObject.plannedTimeOfUse = control.value;
                                            break;
                                    }
                                    havQuestionAnswers.push(answerObject);
                                } else if (section.isAccidentReportSection) {
                                    const answerObject: ArAnswerObject = {
                                        accidentReportQuestionAnswerId: 0,
                                        questionID: question.questionId,
                                        questionTitle: questionLabel,
                                        formVersionID: formVersionId,
                                        answerTypeID: question.selectedAnswerTypeId,
                                        accidentAnswerSequence: question.questionDisplayOrder,
                                    };

                                    let isValueFilled = false;

                                    switch (question.questionDisplayOrder) {
                                        case EnumService.AccidentFormFieldOrder.AccidentDateTime:
                                            if (control.value) {
                                                isValueFilled = true;
                                                answerObject.accidentDateTime = moment(control.value).format('YYYY-MM-DD HH:mm:ss.SSS');
                                            }
                                            break;
                                        case EnumService.AccidentFormFieldOrder.AccidentLocation:
                                            const placeNotintheList = formGroup.controls.placeNotintheList;
                                            const locationName = formGroup.controls.locationName;

                                            if (placeNotintheList.value) {
                                                isValueFilled = true;
                                                answerObject.accidentLocationName = locationName.value;
                                            } else if (control.value) {
                                                isValueFilled = true;
                                                const entityIds = this.utilService.getRelevantEntityId(control.value);
                                                answerObject.accidentInventoryID = entityIds.InventoryID;
                                                answerObject.accidentProjectID = entityIds.ProjectID;
                                                answerObject.accidentLocationID = entityIds.LocationID;
                                            }
                                            break;
                                        case EnumService.AccidentFormFieldOrder.ReddorReport:
                                            const answerChoiceAttributes = question.answerChoiceAttributes;
                                            answerChoiceAttributes.map((choice) => {
                                                if (choice.answerChoiceAttributeId === control.value) {
                                                    const choiceTitle = UtilService.findObj(choice.answerChoiceAttributeHeaders, 'answerChoiceAttributeHeaderLanguageId', defaultLanguageId)?.answerChoiceAttributeHeaderTitle;
                                                    isValueFilled = true;
                                                    answerObject.accidentIsRIDDORReportNeeded = (choiceTitle === 'Yes') ? true : false;
                                                    return;
                                                }
                                            });
                                            break;
                                        case EnumService.AccidentFormFieldOrder.About:
                                            const formGroups = control.value as FormGroup;
                                            const multipleChoiceValueIDs = [];
                                            question.answerChoiceAttributes.map((choice) => {
                                                const choiceControl = formGroups[UtilService.FCName(choice.answerChoiceAttributeId)];
                                                if (choiceControl) {
                                                    multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
                                                }
                                            });
                                            if (multipleChoiceValueIDs.length > 0) {
                                                isValueFilled = true;
                                                answerObject.accidentAboutIDs = multipleChoiceValueIDs.join(',');
                                            }
                                            break;
                                        case EnumService.AccidentFormFieldOrder.Type:
                                            if (control.value) {
                                                isValueFilled = true;
                                                answerObject.accidentTypeID = control.value;
                                            }
                                            break;
                                        case EnumService.AccidentFormFieldOrder.Classification:
                                            if (control.value) {
                                                isValueFilled = true;
                                                answerObject.accidentClassificationID = control.value;
                                            }
                                            break;
                                        case EnumService.AccidentFormFieldOrder.BodyPartEffected:
                                            const bodyPartFormGroups = control.value as FormGroup;
                                            const bodyPartsIDs = [];
                                            StaticDataService.bodyParts.map((partGroup) => {
                                                partGroup.parts.map((part) => {
                                                    const choiceControl = bodyPartFormGroups[UtilService.FCName(part.id)];
                                                    if (choiceControl) {
                                                        bodyPartsIDs.push(part.id);
                                                    }
                                                });
                                            });
                                            if (bodyPartsIDs.length > 0) {
                                                isValueFilled = true;
                                                answerObject.accidentBodyPartIDs = bodyPartsIDs.join(',');
                                            }
                                            break;
                                        case EnumService.AccidentFormFieldOrder.Description:
                                            if (control.value) {
                                                isValueFilled = true;
                                                answerObject.accidentDescription = control.value;
                                            }
                                            break;
                                        case EnumService.AccidentFormFieldOrder.Attachment:
                                            if (attachemtUploaded[question.questionId]) {
                                                isValueFilled = true;
                                                answerObject.accidentAttachmentFileName = attachemtUploaded[question.questionId];
                                            }
                                            break;
                                    }

                                    if (isValueFilled) {
                                        accidentReportQuestionAnswers.push(answerObject);
                                    }
                                } else {
                                    const answerObject: FormAnswerObject = {
                                        questionAnswerId: 0,
                                        questionID: question.questionId,
                                        questionTitle: questionLabel,
                                        formVersionID: formVersionId,
                                        answerTypeID: question.selectedAnswerTypeId,
                                        multipleChoiceAnswers: [],
                                    };

                                    switch (question.selectedAnswerTypeId) {
                                        case EnumService.CustomAnswerType.ClassicDropdown:
                                            answerObject.singleChoiceValueID = control.value[question.listValueKey];
                                            break;
                                        case EnumService.CustomAnswerType.SingleLineText:
                                        case EnumService.CustomAnswerType.MultiLineText:
                                            answerObject.textValue = control.value;
                                            break;
                                        case EnumService.CustomAnswerType.SingleChoiceSet:
                                            answerObject.singleChoiceValueID = control.value;
                                            break;
                                        case EnumService.CustomAnswerType.MultipleChoiceSet:
                                            const formGroups = control.value as FormGroup;
                                            const multipleChoiceValueIDs = [];
                                            question.answerChoiceAttributes.map((choice) => {
                                                const choiceControl = formGroups[UtilService.FCName(choice.answerChoiceAttributeId)];
                                                if (choiceControl) {
                                                    multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
                                                }
                                            });
                                            answerObject.multipleChoiceValueIDs = multipleChoiceValueIDs.join(',');
                                            break;
                                        case EnumService.CustomAnswerType.NumberFieldInteger:
                                            answerObject.integerValue = control.value;
                                            break;
                                        case EnumService.CustomAnswerType.NumberFieldDecimal:
                                            answerObject.decimalValue = control.value;
                                            break;
                                        case EnumService.CustomAnswerType.DateField:
                                            if (control.value) {
                                                answerObject.dateValue = moment(control.value).format('YYYY-MM-DD');
                                            }
                                            break;
                                        case EnumService.CustomAnswerType.TimeField:
                                            if (control.value) {
                                                answerObject.timeValue = moment(control.value).format('hh:mmA');
                                            }
                                            break;
                                        case EnumService.CustomAnswerType.DateTimeField:
                                            if (control.value) {
                                                answerObject.dateTimeValue = moment(control.value).format('YYYY-MM-DD HH:mm:ss.SSS');
                                            }
                                            break;
                                        case EnumService.CustomAnswerType.PhotoVideoUpload:
                                            answerObject.imageVideoFileName = attachemtUploaded[question.questionId];
                                            break;
                                    }

                                    // if additional comment
                                    if (question.shouldShowOptionalComment) {
                                        const additionalControl = formGroup.controls[UtilService.FCNameAdditioanlNote(question.questionId)];
                                        if (additionalControl.value) {
                                            answerObject.questionComment = additionalControl.value;
                                        }
                                    }

                                    questionAnswers.push(answerObject);
                                }
                            }
                        }
                    });
                }
            }
        });

        const submitAnswersObject: SubmitAnswersObject = {
            formId: formBuilderDetail.formId,
            formVersionId,
            formTypeId: formBuilderDetail.formTypeID,
            userId: user.userId,
            companyId: user.companyID,
            questionAnswers,
            havQuestionAnswers,
            accidentReportQuestionAnswers,
            riskAssessmentAnswers,
            havExposure,
            workPermitAnswer
        };

        this.utilService.presentLoadingWithOptions();
        apiService.saveFormAnswers(submitAnswersObject).subscribe((response: Response) => {
            this.utilService.hideLoading();
            if (this.viewFormFor === EnumService.ViewFormForType.Activity ||
                this.viewFormFor === EnumService.ViewFormForType.CurrentCheckin ||
                this.viewFormFor === EnumService.ViewFormForType.CurrentCheckinWorkPermit
            ) {
                this.workPermitAnswer = workPermitAnswer;
                this.startFormSignOffProcess(user.userId, apiService);
            } else if (this.viewFormFor === EnumService.ViewFormForType.Induction) {
                this.inductionNavigationProcess(user.userId, this.inductionContentItemIndex);
            }
            callBack(true, response.Result);
        }, (error) => {
            callBack(false, error.message);
            this.utilService.hideLoading();
        });
    };


    private startFormSignOffProcess(userId, apiService: ApiService) {
        const signOffFormDetail = this.signOffFormDetail;
        this.signOffDetailsPostData = {
            userId,
            documentVersionID: 0,
            formVersionID: signOffFormDetail?.formData?.formVersionID,
            latitude: this.myCurrentGeoLocation?.coords?.latitude,
            longitude: this.myCurrentGeoLocation?.coords?.longitude,
            locationID: this.currentSelectedCheckinPlace?.locationID,
            projectID: this.currentSelectedCheckinPlace?.projectID,
            inventoryItemID: this.currentSelectedCheckinPlace?.inventoryItemID,
            userCheckInDetailID: this.currentSelectedCheckinPlace?.userCheckInDetailID,
        } as SignOffDetailsPostData;

        if (this.viewFormFor === EnumService.ViewFormForType.Activity) {
            this.signOffDetailsPostData.activityIndividualID = this.currentActivityOpen?.activityIndividualID;
            if (!this.currentSelectedCheckinPlace && signOffFormDetail.entityList.length > 0) {
                const locationItem = signOffFormDetail.entityList[0];
                const entityIds = this.utilService.getRelevantEntityId(locationItem.locationID);
                this.signOffDetailsPostData.locationID = entityIds.LocationID;
                this.signOffDetailsPostData.projectID = entityIds.ProjectID;
                this.signOffDetailsPostData.inventoryItemID = entityIds.InventoryID;
            }

            this.signOffFor = EnumService.SignOffType.FORM_ACTIVITY;
        } else if (this.viewFormFor === EnumService.ViewFormForType.CurrentCheckin) {
            this.signOffFor = EnumService.SignOffType.FORM_CURRENT_CHECKIN;
        } else if (this.viewFormFor === EnumService.ViewFormForType.CurrentCheckinWorkPermit) {
            this.signOffFor = EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN;
        }

        if (signOffFormDetail.formData.isDigitalSignOff || signOffFormDetail.formData.isSignatureSignOff) {
            this.navCtrl.navigateForward(['/signoff-digitalink']);
        } else if (signOffFormDetail.formData.isPhotoSignOff) {
            this.navCtrl.navigateForward(['/signoff-photo']);
        } else {
            this.submitPersonalModeSignoffData(apiService);
        }
    }

    async submitInductionCheckInData(apiService: ApiService) {
        const loading = await this.utilService.startLoadingWithOptions();

        apiService.insertCheckInDetails(this.checkInPostData).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);

            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.observablesService.publishSomeData(EnumService.ObserverKeys.NEW_CHECKED_IN, response.Result);

                this.navCtrl.navigateForward(['/checkin-success'], {
                    queryParams: {
                        message: 'You have now checked-in',
                        nextPage: '/tabs/dashboard',
                        actionBtnTitle: 'Continue'
                    }
                });
            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
            const exception = error.error as Response;
            if (exception?.ResponseException?.ValidationErrors?.length > 0 && exception.ResponseException.ValidationErrors[0].Field === 'Location') {
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {
                        title: 'You cannot check-in',
                        errorTitle: exception.ResponseException.ValidationErrors[0].Field,
                        errorMessage: exception.ResponseException.ValidationErrors[0].Message,
                        nextPage: '/tabs/dashboard'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {
                        title: 'You cannot check-in',
                        errorTitle: 'NOT QUALIFIED',
                        errorMessage: 'You do not have the required qualifications.',
                        nextPage: '/tabs/dashboard'
                    }
                });
            }
        });
    }

    /**
     * This function is use for submit personal mode sign off data
     */
    async submitPersonalModeSignoffData(apiService: ApiService) {
        const loading = await this.utilService.startLoadingWithOptions();

        apiService.insertPersonalModeSignOffDetails(this.signOffDetailsPostData).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);

            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                if (this.signOffFor === EnumService.SignOffType.FORM_ACTIVITY || this.signOffFor === EnumService.SignOffType.DOCUMENT_ACTIVITY) {
                    this.observablesService.publishSomeData(EnumService.ObserverKeys.ACTIVITY_COMPLETED, true);
                }

                // show work permit issue success/fail for work permit type form filled from current checkin or activity list
                const isWorkPermitCurrentCheckin = this.signOffFor === EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN;
                const isworkPermitActivity = (this.signOffFor === EnumService.SignOffType.FORM_ACTIVITY && this.signOffFormDetail?.formData?.formType === EnumService.FormTypes.WORK_PERMIT);
                if (isWorkPermitCurrentCheckin || isworkPermitActivity) {

                    let nextPage = '/tabs/dashboard';
                    if (isWorkPermitCurrentCheckin) {
                        nextPage = '/tabs/current-checkin/checkin-workpermit';
                    } else if (isworkPermitActivity) {
                        nextPage = '/tabs/dashboard';
                    }


                    if (this.workPermitAnswer.scoreAchieved >= this.workPermitAnswer.totalScore) {
                        this.navCtrl.navigateForward(['/checkin-success'], {
                            queryParams: {
                                title: 'Passed',
                                message: 'PERMIT ISSUED',
                                description: 'Your work permit is active',
                                nextPage
                            }
                        });
                    } else {
                        this.navCtrl.navigateForward(['/checkin-fail'], {
                            queryParams: {
                                title: 'Not Passed',
                                errorTitle: 'NO PERMIT',
                                errorMessage: 'You were found not eligible for a work permit.',
                                nextPage
                            }
                        });
                    }

                } else {
                    this.navCtrl.navigateForward(['/checkin-success'], {
                        queryParams: {
                            message: 'You Signed-Off Successfully',
                            nextPage: '/tabs/dashboard'
                        }
                    });
                }

            } else {
                if (this.signOffFor === EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN) {
                    this.navCtrl.navigateForward(['/checkin-fail'], {
                        queryParams: {
                            title: 'Not Passed',
                            errorTitle: 'NOT PERMIT',
                            errorMessage: 'You were found not eligible for a work permit.',
                            nextPage: '/tabs/current-checkin/checkin-workpermit'
                        }
                    });
                } else {
                    this.navCtrl.navigateForward(['/checkin-fail'], {
                        queryParams: {
                            title: 'You cannot Sign-Off',
                            errorTitle: 'NOT QUALIFIED',
                            errorMessage: response.Message,
                            nextPage: '/tabs/dashboard'
                        }
                    });
                }

            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);

            this.navCtrl.navigateForward(['/checkin-fail'], {
                queryParams: {
                    title: 'You cannot Sign-Off',
                    errorTitle: 'NOT QUALIFIED',
                    errorMessage: error.message || error,
                    nextPage: '/tabs/dashboard'
                }
            });
        });
    }

    // Not used
    showCheckInResultScreen = (status = false) => {
        if (this.dedicatedMode) {
            if (status) {
                this.navCtrl.navigateForward(['/checkinout-success-dm'], {
                    queryParams: {
                        message: 'You have now checked-in',
                        nextPage: 'dashboard-dm'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkinout-fail-dm'], {
                    queryParams: {
                        failTitle: 'No Qualification',
                        failSubTitle: 'Check in Not Allowed',
                        failMessage: 'This check-in requires to have certain \n' +
                            'qualifications which you do not have.',
                        nextPage: 'dashboard-dm'
                    }
                });
            }
        } else {
            if (status) {
                this.navCtrl.navigateForward(['/checkin-success'], {
                    queryParams: {
                        message: 'You Signed-Off Successfully',
                        nextPage: '/tabs/dashboard'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {}
                });
            }
        }
    };

    inductionNavigationProcess(userId, inductionContentItemIndex) {
        if (this.checkInDetail) {
            const inductionItems = this.checkInDetail.checkInInductionItems;
            if (inductionItems && inductionContentItemIndex < inductionItems.length - 1) {
                const inductionContentItem = inductionItems[inductionContentItemIndex + 1];
                if (inductionContentItem.contentType === EnumService.InductionContentTypes.FORM) {
                    const entityIds = this.utilService.getRelevantEntityId(this.checkInForLocation?.locationID);
                    this.utilService.presentLoadingWithOptions();
                    this.apiServiceRerence.getSignOffFormDetail(userId, inductionContentItem.formID, entityIds.LocationID, entityIds.ProjectID, entityIds.InventoryID).subscribe((response: Response) => {
                        this.utilService.hideLoading();
                        if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                            this.viewFormFor = EnumService.ViewFormForType.Induction;
                            this.signOffFormDetail = response.Result as SignOffFormDetail;
                            this.inductionContentItemIndex = inductionContentItemIndex + 1;
                            this.router.navigateByUrl(UtilService.InductionContentTypeScreenIdentify(inductionContentItem.contentType));
                        }
                    }, error => {
                        this.utilService.hideLoading();
                    });
                } else {
                    this.inductionContentItemIndex = inductionContentItemIndex + 1;
                    this.navCtrl.navigateForward(UtilService.InductionContentTypeScreenIdentify(inductionContentItem.contentType));
                }
            } else if (this.checkInDetail.checkInInduction.isDigitalSignOff || this.checkInDetail.checkInInduction.isSignatureSignOff) {
                this.signOffFor = EnumService.SignOffType.INDUCTION;
                this.navCtrl.navigateForward(['/signoff-digitalink']);
            }
        }
    }

}
