import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ExitConfirmationPage} from '../../modals/exit-confirmation/exit-confirmation.page';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {ObservablesService} from '../../services/observables.service';
import {Subscription} from 'rxjs';
import {SharedDataService} from '../../services/shared-data.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {UtilService} from '../../services/util.service';
import {ApiService} from '../../services/api.service';
import {AccountService} from '../../services/account.service';
import {Response, User} from '../../_models';
import {HavManufacturerItem} from '../../_models/havManufacturerItem';
import {HavTypeItem} from '../../_models/havTypeItem';
import {HavModelItem} from '../../_models/havModelItem';
import {FormAnswerObject} from '../../_models/formAnswerObject';
import {HavAnswerObject} from '../../_models/havAnswerObject';
import {HavExposure} from '../../_models/havExposure';
import {SubmitAnswersObject} from '../../_models/submitAnswersObject';
import {ValidatorService} from '../../services/validator.service';

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
    activityDetail;

    toolModels: Array<HavModelItem>;

    screenOrientationSubscribe;
    isShowOritationPortrait = false;

    formBuilderDetail = JSON.parse('{"formId":111,"title":"Hav Form Test 1","description":null,"formVersionId":176,"formVersionNo":7,"isDraft":false,"formTypeID":4,"companyId":27,"defaultLanguageId":0,"sections":[{"sectionId":171,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":true,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":274,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"HAVs Assessment"}],"questions":[{"questionId":364,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":1,"sectionID":171,"questionTranslations":[{"questionTranslationId":442,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date of Usage","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":365,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":2,"sectionID":171,"questionTranslations":[{"questionTranslationId":443,"questionTranslationLanguageId":35,"questionTranslationTitle":"Manufacturer","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":366,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":3,"sectionID":171,"questionTranslations":[{"questionTranslationId":444,"questionTranslationLanguageId":35,"questionTranslationTitle":"Type","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":367,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":4,"sectionID":171,"questionTranslations":[{"questionTranslationId":445,"questionTranslationLanguageId":35,"questionTranslationTitle":"Model","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":368,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":5,"sectionID":171,"questionTranslations":[{"questionTranslationId":446,"questionTranslationLanguageId":35,"questionTranslationTitle":"Planned Time of Use (in minutes)","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":172,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":275,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"section 2"}],"questions":[{"questionId":369,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":true,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":172,"questionTranslations":[{"questionTranslationId":447,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single choice question","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":389,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":1,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":508,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"correct"}]},{"answerChoiceAttributeId":390,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":509,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"wrong"}]}],"questionLogics":[],"questionAttachments":[{"questionAttachmentId":29,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"demo51.png","fileType":null,"fileExtension":"png","folderName":"Choose","questionID":369,"documentID":125,"folderID":null}]},{"questionId":370,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":172,"questionTranslations":[{"questionTranslationId":448,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multi choice question","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":391,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"yellow","answerChoiceAttributeScoreOrWeight":3,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":510,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"correct"}]},{"answerChoiceAttributeId":392,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"purple","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":511,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"correct"}]},{"answerChoiceAttributeId":393,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":1,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":512,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"wrong"}]},{"answerChoiceAttributeId":394,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"grey","answerChoiceAttributeScoreOrWeight":1,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":513,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"wrong"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":371,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":3,"sectionID":172,"questionTranslations":[{"questionTranslationId":449,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single line text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":372,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":4,"questionDisplayOrder":4,"sectionID":172,"questionTranslations":[{"questionTranslationId":450,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiline Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":373,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":5,"sectionID":172,"questionTranslations":[{"questionTranslationId":451,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Integer","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":374,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":6,"sectionID":172,"questionTranslations":[{"questionTranslationId":452,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Decimal","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":375,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":7,"sectionID":172,"questionTranslations":[{"questionTranslationId":453,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":376,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":9,"questionDisplayOrder":8,"sectionID":172,"questionTranslations":[{"questionTranslationId":454,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date and Time Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":377,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":9,"sectionID":172,"questionTranslations":[{"questionTranslationId":455,"questionTranslationLanguageId":35,"questionTranslationTitle":"Time Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":378,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":10,"questionDisplayOrder":10,"sectionID":172,"questionTranslations":[{"questionTranslationId":456,"questionTranslationLanguageId":35,"questionTranslationTitle":"Photo Upload","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');
    currentExposure = 0;

    plannedTimeControlName;
    modelControlName;

    questionElementIds = [];

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
        private utilService: UtilService,
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
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
                            this.modelControlName = UtilService.FCNameUq(sectionIndex, questionIndex, question.questionId);
                        }

                        if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.TimeField) {
                            this.plannedTimeControlName = UtilService.FCNameUq(sectionIndex, questionIndex, question.questionId);
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


        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.activityDetail) {
                    this.activityDetail = JSON.parse(params.activityDetail);
                }
            }
            if (!this.activityDetail) {
                this.activityDetail = sharedDataService.viewFormDetail;
            }
        });
    }

    async ngOnInit() {
        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getManufacturerList(this.user.companyID).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            const toolManufacturers = response.Result;
            this.setupDynamicChoiceList(EnumService.HavFormFieldOrder.Manufacturer, toolManufacturers);
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
        });

        this.getUserTotalHAVExposureForToday();
    }

    getUserTotalHAVExposureForToday() {
        this.apiService.getUserTotalHAVExposureForToday(this.user.userId).subscribe((response: Response) => {
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
            const questions = sections[sectionIndex].questions;
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

                    const control = this.formGroup.controls[UtilService.FCNameUq(sectionIndex, questionIndex, question.questionId)];
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

        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getTypeList(this.user.companyID, manufacturer).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            const toolTypes = response.Result;
            this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Type, toolTypes);
            this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Model, []);
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    async getModelList(type, sectionIndex, questionIndex) {
        const sections = this.formBuilderDetail.sections;
        const question = sections[sectionIndex]?.questions[questionIndex];
        this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Model, []);

        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getModelList(this.user.companyID, type).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            const toolModels = response.Result;
            this.toolModels = toolModels;
            this.setupDynamicChoiceListForSection(sectionIndex, EnumService.HavFormFieldOrder.Model, toolModels);
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    dropDownChange(question, sectionIndex, questionIndex) {
        const control = this.formGroup.controls[UtilService.FCNameUq(sectionIndex, questionIndex, question.questionId)];
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
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }

            this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
                this.ngZone.run(() => {
                    if (this.screenOrientation.type.includes('portrait')) {
                        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            this.screenOrientationSubscribe.unsubscribe();
        }
    }

    isError(sectionIndex, questionIndex, question) {
        return (this.isSubmitted && !this.formGroup.controls[UtilService.FCNameUq(sectionIndex, questionIndex, question.questionId)].valid);
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
            componentProps: {}
        });
        await modal.present();

        modal.onWillDismiss().then(({data}) => {
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


        let havExposure: HavExposure;
        if (this.formGroup.valid) {
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

                havExposure = {
                    vibrationMagnitude: model ? UtilService.formattedNumberToNumber(model.vibrationValue) : 0,
                    pointsPerHour: this.calculatePointsPerHour(),
                    exposurePoints: this.calculateExposure(),
                    havExposureId: 0,
                    initialExposure: this.currentExposure,
                    totalExposure: 12,
                };
            }
        }

        this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, (status, result) => {
            if (status) {

            } else {
                this.errorMessage = result;
            }
        }, havExposure);
    }

    ionViewDidEnter() {

    }

    ionViewWillLeave(): void {

    }
}
