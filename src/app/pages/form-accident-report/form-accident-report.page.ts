import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {FormControl, FormGroup, FormGroupName, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {StaticDataService} from '../../services/static-data.service';
import {ExitConfirmationPage} from '../../modals/exit-confirmation/exit-confirmation.page';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';
import {ObservablesService} from '../../services/observables.service';
import {Subscription} from 'rxjs';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {AccountService} from '../../services/account.service';
import {Response, User} from '../../_models';
import {UtilService} from '../../services/util.service';
import {ApiService} from '../../services/api.service';
import {LocationItem} from '../../_models/locationItem';
import {ValidatorService} from '../../services/validator.service';

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

    activityDetail;
    placeNotintheList = false;

    accidentAlertOptions: any = {
        header: 'Where the accident happened ?',
    };

    typeAlertOptions: any = {
        header: 'Select Type',
    };

    screenOrientationSubscribe;
    isShowOritationPortrait = false;

    formBuilderDetail = JSON.parse('{"formId":112,"title":"Accident Report Form One","description":null,"formVersionId":163,"formVersionNo":1,"isDraft":false,"formTypeID":5,"companyId":27,"defaultLanguageId":0,"sections":[{"sectionId":156,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":true,"sectionTranslations":[{"sectionTranslationId":257,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Accident Report"}],"questions":[{"questionId":310,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":9,"questionDisplayOrder":1,"sectionID":156,"questionTranslations":[{"questionTranslationId":382,"questionTranslationLanguageId":35,"questionTranslationTitle":"Accident Date and Time","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":311,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":12,"questionDisplayOrder":2,"sectionID":156,"questionTranslations":[{"questionTranslationId":383,"questionTranslationLanguageId":35,"questionTranslationTitle":"Accident Location","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":312,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":3,"sectionID":156,"questionTranslations":[{"questionTranslationId":384,"questionTranslationLanguageId":35,"questionTranslationTitle":"Is RIDDOR Report Needed?","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[{"answerChoiceAttributeId":362,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":481,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Yes"}]},{"answerChoiceAttributeId":363,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":482,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"No"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":313,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":4,"sectionID":156,"questionTranslations":[{"questionTranslationId":385,"questionTranslationLanguageId":35,"questionTranslationTitle":"About","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[{"answerChoiceAttributeId":364,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":483,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"People"}]},{"answerChoiceAttributeId":365,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":484,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Equipment"}]},{"answerChoiceAttributeId":366,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":485,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Environment"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":314,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":5,"sectionID":156,"questionTranslations":[{"questionTranslationId":386,"questionTranslationLanguageId":35,"questionTranslationTitle":"Type","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":315,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":6,"sectionID":156,"questionTranslations":[{"questionTranslationId":387,"questionTranslationLanguageId":35,"questionTranslationTitle":"Classification","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":316,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":13,"questionDisplayOrder":7,"sectionID":156,"questionTranslations":[{"questionTranslationId":388,"questionTranslationLanguageId":35,"questionTranslationTitle":"Body Part Affected","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":317,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":4,"questionDisplayOrder":8,"sectionID":156,"questionTranslations":[{"questionTranslationId":389,"questionTranslationLanguageId":35,"questionTranslationTitle":"Description","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":318,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":10,"questionDisplayOrder":9,"sectionID":156,"questionTranslations":[{"questionTranslationId":390,"questionTranslationLanguageId":35,"questionTranslationTitle":"Attachment","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":7,"hasAccidentNotification":false,"notificationID":null,"formVersionID":163,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');


    locationIdControlName;
    bodyPartControlName;

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
        private utilService: UtilService,
        private validatorService: ValidatorService,
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }

        // Add form controls for each type of fields
        this.formGroup = new FormGroup({});

        const sections = this.formBuilderDetail.sections;
        if (sections) {
            sections.map((section) => {
                if (!section.sectionIsHidden) {
                    const questions = section.questions;

                    questions.map((question) => {
                        if (!question.questionIsHidden) {
                            if (section.isAccidentReportSection) {
                                // Make photo attachment not required field for accident section, it should be from api but for temporary for here make it not required
                                if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.PhotoVideoUpload) {
                                    question.questionIsRequired = false;
                                }


                                if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.BodyPartControl) {
                                    this.bodyPartControlName = UtilService.FCName(question.questionId);
                                    const checkboxFormGroup = new FormGroup({}, {validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null});
                                    this.bodyParts.map((bodyPartGroup) => {
                                        bodyPartGroup.parts.map((part) => {
                                            checkboxFormGroup.addControl(UtilService.FCName(part.id), new FormControl(false));
                                        });
                                    });
                                    this.formGroup.addControl(this.bodyPartControlName, checkboxFormGroup);
                                } else if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.LocationSelection) {
                                    this.locationIdControlName = UtilService.FCName(question.questionId);
                                    this.formGroup.addControl(this.locationIdControlName, new FormControl(''));
                                    this.formGroup.addControl(EnumService.AccidentCustomLocationControlsName.PlaceNotintheList, new FormControl(false));
                                    this.formGroup.addControl(EnumService.AccidentCustomLocationControlsName.LocationName, new FormControl(''));
                                } else {
                                    this.utilService.addDynamicFormControls(question, this.formGroup);
                                }

                                if (!question.answerChoiceAttributes || question.answerChoiceAttributes.length === 0) {
                                    this.setupDynamicChoiceList(question.questionDisplayOrder);
                                }
                            } else {
                                this.utilService.addDynamicFormControls(question, this.formGroup);
                            }
                        }
                    });
                }
            });
        }
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

    ionViewDidEnter() {
        this.sharedDataService.isOpenImageAnnotation = false;
        this.getLocationItemList();
        this.getAccidentTypeList();
        this.getAccidentClassificationList();
    }

    ionViewWillLeave(): void {

    }

    getAccidentTypeList = () => {
        this.apiService.getAccidentTypeList().subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.types = response.Result;
                this.setupDynamicChoiceList(EnumService.AccidentFormFieldOrder.Type);
            }
        }, (error) => {
        });
    };

    getAccidentClassificationList = () => {
        this.apiService.getAccidentClassificationList().subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.classifications = response.Result;
                this.setupDynamicChoiceList(EnumService.AccidentFormFieldOrder.Classification);
            }
        }, (error) => {
        });
    };

    getLocationItemList = () => {
        this.apiService.getLocationItemList(this.user.companyID).subscribe((res) => {
            if (res) {
                this.locations = res;
                this.setupDynamicChoiceList(EnumService.AccidentFormFieldOrder.AccidentLocation);
            }
        }, (error) => {
        });
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
                if (!section.sectionIsHidden) {
                    if (section.isAccidentReportSection) {
                        const questions = section.questions;
                        questions.map((question) => {
                            if (!question.questionIsHidden) {
                                if (question.questionDisplayOrder === listType) {
                                    if (question.questionDisplayOrder === EnumService.AccidentFormFieldOrder.Type) {
                                        question.answerChoiceAttributes = this.types;
                                        question.listValueKey = 'accidentTypeId';
                                        question.listLabelKey = 'accidentTypeTitle';
                                    } else if (question.questionDisplayOrder === EnumService.AccidentFormFieldOrder.Classification) {
                                        question.answerChoiceAttributes = this.classifications;
                                        question.listValueKey = 'accidentClassificationId';
                                        question.listLabelKey = 'accidentClassificationTitle';
                                    } else if (question.questionDisplayOrder === EnumService.AccidentFormFieldOrder.AccidentLocation) {
                                        question.answerChoiceAttributes = this.locations;
                                        question.listValueKey = 'locationName';
                                        question.listLabelKey = 'locationID';
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
    };


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
                        this.isShowOritationPortrait = false;
                        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                this.screenOrientationSubscribe.unsubscribe();
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
        }
    }

    previousPart() {
        if (this.currentBodyPartIndex > 0) {
            this.currentBodyPartIndex--;
        }
    }

    nextPart() {
        if (this.currentBodyPartIndex < (this.bodyParts.length - 1)) {
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
            const checked = (this.selectedBodyParts[type] && this.selectedBodyParts[type].checked) ? false : true;
            this.selectedBodyParts[type] = {
                ...selectedItem,
                checked,
            };
            const bodyPartControlGroup = this.formGroup.controls[this.bodyPartControlName] as FormGroup;
            bodyPartControlGroup.controls[UtilService.FCName(type)].setValue(checked);

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
        bodyPartControlGroup.controls[UtilService.FCName(item.id)].setValue(false);

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
            componentProps: {}
        });
        await modal.present();

        modal.onWillDismiss().then(({data}) => {
            if (data) {
                this.navCtrl.back();
            }
        });
    }

    isError(question) {
        return (this.isSubmitted && !this.formGroup.controls[UtilService.FCName(question.questionId)].valid);
    }

    isBodyPartSelected = () => {
        return Object.keys(this.selectedBodyParts).length > 0;
    };

    onContinue() {
        this.isSubmitted = true;
        this.errorMessage = '';

        if (this.formGroup.valid) {
            const locationIdControl = this.formGroup.controls[this.locationIdControlName];
            const locationNameControl = this.formGroup.controls[EnumService.AccidentCustomLocationControlsName.LocationName];
            if (!locationIdControl.value && !locationNameControl.value) {
                this.errorMessage = 'Select location or enter manual location';
            }
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
