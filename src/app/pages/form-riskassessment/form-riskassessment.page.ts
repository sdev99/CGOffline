import {Component, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IonContent, ModalController, NavController,} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ExitConfirmationPage} from '../../modals/exit-confirmation/exit-confirmation.page';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EnumService} from '../../services/enum.service';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';
import {ObservablesService} from '../../services/observables.service';
import {Subscription} from 'rxjs';
import {SharedDataService} from '../../services/shared-data.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {UtilService} from '../../services/util.service';
import {StaticDataService} from '../../services/static-data.service';
import {ApiService} from '../../services/api.service';
import {Response, User} from '../../_models';
import {AccountService} from '../../services/account.service';
import {PhotoService} from '../../services/photo.service';
import {RiskRatingItem} from '../../_models/riskRatingItem';


@Component({
    selector: 'app-form-riskassessment',
    templateUrl: './form-riskassessment.page.html',
    styleUrls: ['./form-riskassessment.page.scss'],
})
export class FormRiskassessmentPage implements OnInit {
    @ViewChild(IonContent) content: IonContent;

    EnumService = EnumService;
    UtilService = UtilService;
    user: User;

    errorMessage = '';

    isSubmitted = false;
    formGroup: FormGroup;

    activityDetail;


    list = DemoDataService.riskAssesmentQuestions.clone();
    riskRatings: [RiskRatingItem];
    residualRiskRatings: [RiskRatingItem];

    users;
    groups;

    ionSelectInterface = 'popover';

    userGroupTypes = [{name: 'Users', id: 'users'}, {name: 'Groups', id: 'groups'}];

    screenOrientationSubscribe;
    isShowOritationPortrait = false;

    formBuilderDetail = JSON.parse('{"formId":131,"title":"Risk Assessment Form","description":null,"formVersionId":197,"formVersionNo":3,"isDraft":false,"formTypeID":2,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":208,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":true,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":311,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Risk Assessmentssss"}],"questions":[],"tasks":[{"taskId":29,"isRequired":true,"shouldShowTaskTemplate":false,"allowInstructionOrNote":true,"shouldShowOptionalComment":false,"allowAttachment":true,"displayOrder":1,"sectionID":208,"selectedTaskTemplateID":null,"taskTranslations":[{"taskTranslationId":32,"taskTranslationLanguageId":35,"taskTranslationTitle":"Task One","taskTranslationInstructionOrNote":"Test Note for task one"}],"taskAttachments":[{"questionAttachmentId":0,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"demo51.png","fileType":null,"fileExtension":"png","folderName":"Choose","questionID":29,"documentID":125,"folderID":null}],"hazards":[{"hazardId":34,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":1,"taskID":29,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":38,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Hazard One Test"}],"controlMeasures":[{"controlMeasureId":38,"shouldShowControlMeasureTemplate":false,"displayOrder":1,"controlMeasureTranslations":[{"controlMeasureTranslationId":44,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Wight measure"}]},{"controlMeasureId":39,"shouldShowControlMeasureTemplate":false,"displayOrder":2,"controlMeasureTranslations":[{"controlMeasureTranslationId":45,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Height measure"}]},{"controlMeasureId":40,"shouldShowControlMeasureTemplate":false,"displayOrder":3,"controlMeasureTranslations":[{"controlMeasureTranslationId":46,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Width measure"}]}]},{"hazardId":35,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":2,"taskID":29,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":39,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Hazard Two Test"}],"controlMeasures":[]}]},{"taskId":30,"isRequired":false,"shouldShowTaskTemplate":false,"allowInstructionOrNote":false,"shouldShowOptionalComment":false,"allowAttachment":false,"displayOrder":2,"sectionID":208,"selectedTaskTemplateID":null,"taskTranslations":[{"taskTranslationId":33,"taskTranslationLanguageId":35,"taskTranslationTitle":"Task Two","taskTranslationInstructionOrNote":""}],"taskAttachments":[],"hazards":[{"hazardId":36,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":1,"taskID":30,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":40,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Task two hazard one"}],"controlMeasures":[{"controlMeasureId":41,"shouldShowControlMeasureTemplate":false,"displayOrder":1,"controlMeasureTranslations":[{"controlMeasureTranslationId":47,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Level measure"}]},{"controlMeasureId":42,"shouldShowControlMeasureTemplate":false,"displayOrder":2,"controlMeasureTranslations":[{"controlMeasureTranslationId":48,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Pressure measure"}]}]}]}]},{"sectionId":209,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":312,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Two Custom Questions"}],"questions":[{"questionId":475,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":1,"sectionID":209,"questionTranslations":[{"questionTranslationId":553,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single Line Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":476,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":true,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":209,"questionTranslations":[{"questionTranslationId":554,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiple Choice Question","questionTranslationInstructionOrNote":"Choose multiple answers","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":527,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"turquoise","answerChoiceAttributeScoreOrWeight":3,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":646,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":528,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"red","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":647,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]},{"answerChoiceAttributeId":529,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"blue","answerChoiceAttributeScoreOrWeight":3,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":648,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]},{"answerChoiceAttributeId":530,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"blue","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":649,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]}],"questionLogics":[],"questionAttachments":[{"questionAttachmentId":36,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"videoplayback.mp4","fileType":null,"fileExtension":"mp4","folderName":"Choose","questionID":476,"documentID":228,"folderID":null}]},{"questionId":477,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":3,"sectionID":209,"questionTranslations":[{"questionTranslationId":555,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Integer","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":478,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":4,"sectionID":209,"questionTranslations":[{"questionTranslationId":556,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Decimal","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');

    questionElementIds = [];
    currentQuestionIndex = 0;
    scrollingDetail: any;


    constructor(
        public navCtrl: NavController,
        public modalController: ModalController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
        private screenOrientation: ScreenOrientation,
        private apiService: ApiService,
        private utilService: UtilService,
        private ngZone: NgZone,
        public accountService: AccountService,
        public photoService: PhotoService,
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }

        if (sharedDataService.riskRatingsList && sharedDataService.riskRatingsList.length > 0) {
            this.putRiskRatingInVariable();
        }

        this.formGroup = new FormGroup({});
        const sections = this.formBuilderDetail.sections;
        if (sections) {
            sections.map((section) => {
                if (!section.sectionIsHidden) {
                    if (section.isRiskAssessmentSection) {
                        const tasks = section.tasks;
                        tasks.map((task) => {
                            const hazards = task.hazards;
                            hazards.map((hazard) => {
                                hazard.addedUsers = {};
                                hazard.addedGroups = {};
                                hazard.riskRating = null;
                                hazard.residualRiskRating = null;
                                hazard.selectedUserGroupType = this.userGroupTypes[0];
                                hazard.selectedUser = null;
                                hazard.selectedGroup = null;
                                hazard.memberOfTheWorkForce = false;
                                hazard.memberOfThePublic = false;
                                hazard.memberOfThePublicDescription = '';
                            });

                            this.questionElementIds.push(UtilService.HtmlElementId(section.sectionId, task.taskId));

                        });
                    } else {
                        const questions = section.questions;
                        questions.map((question) => {
                            if (!question.questionIsHidden) {
                                this.utilService.addDynamicFormControls(question, this.formGroup);
                                this.questionElementIds.push(UtilService.HtmlElementId(section.sectionId, question.questionId));
                            }
                        });
                    }
                }
            });
        }


        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.activityDetail) {
                    this.activityDetail = JSON.parse(params.activityDetail);
                }
            }
            if (!this.activityDetail) {
                this.activityDetail = sharedDataService.viewFormDetail;
            }
            if (!this.activityDetail) {
                this.activityDetail = DemoDataService.dmForms[1];
            }
        });

    }

    ngOnInit() {
        this.getCompanyUserList();
        this.getRiskRatingOptionList();
    }

    ionViewDidEnter() {
        this.sharedDataService.isOpenImageAnnotation = false;
    }

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

    async getCompanyUserList() {
        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getCompanyUserList(this.user.companyID).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.users = response.Result;
            }
            this.getCompanyUserGroupList(loading);
        }, error => {
            this.getCompanyUserGroupList(loading);
        });
    }

    async getRiskRatingOptionList() {
        let loading;
        if (!this.sharedDataService.riskRatingsList) {
            loading = await this.utilService.startLoadingWithOptions();
        }
        this.apiService.getRiskRatingOptionList().subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                if (response.Result && response.Result.length > 0) {
                    this.sharedDataService.riskRatingsList = response.Result;
                    this.putRiskRatingInVariable();
                }
            }
        }, error => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    getCompanyUserGroupList(loading) {
        this.apiService.getCompanyUserGroupList(this.user.companyID).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.groups = response.Result;
            }
            this.utilService.hideLoadingFor(loading);
        }, error => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    putRiskRatingInVariable = () => {
        this.riskRatings = this.sharedDataService.riskRatingsList.clone() as [RiskRatingItem];
        this.residualRiskRatings = this.sharedDataService.riskRatingsList.clone() as [RiskRatingItem];
    };

    handleOrientation = () => {
        if(this.sharedDataService.dedicatedMode) {
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

    openFile(taskItem) {
        this.filehandlerService.openFile();
    }

    addImage(question) {
        this.photoService.choosePhotoOption((photo) => {
            this.openImageAnnotation(question, photo);
        });
    }

    openImageAnnotation = (question, photo) => {
        this.sharedDataService.isOpenImageAnnotation = true;
        this.sharedDataService.setAnnotationImage(photo);
        this.sharedDataService.onAnnotationImageDone = (image) => {
            question.answer = image;
        };

        this.navCtrl.navigateForward(['/image-annotation']);
    };

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

    isValid(index, question) {
        let isValid = true;
        if (this.isSubmitted && question.questionIsRequired) {
            isValid = false;
            const answer = question.answer;
            switch (question.selectedAnswerTypeId) {
                case EnumService.CustomAnswerType.DateField:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.TimeField:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.DateTimeField:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.PhotoVideoUpload:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.SingleChoiceSet:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.SingleLineText:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.MultiLineText:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.NumberFieldInteger:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.NumberFieldDecimal:
                    isValid = answer;
                    break;
                case EnumService.CustomAnswerType.MultipleChoiceSet:
                    question.answerChoiceAttributes.map((item) => {
                        if (item.checked) {
                            isValid = item.checked;
                            return;
                        }
                    });
                    break;

                default:
                    isValid = true;
            }
        }
        return isValid;
    }

    addUser(section) {
        if (!section.addedUsers) {
            section.addedUsers = {};
        }
        this.users.map((item) => {
            if (item.userId === section.selectedUser) {
                section.addedUsers[section.selectedUser] = item;
                return;
            }
        });
        section.selectedUser = null;
    }

    addGroup(section) {
        if (!section.addedGroups) {
            section.addedGroups = {};
        }
        this.groups.map((item) => {
            if (item.userGroupID === section.selectedGroup) {
                section.addedGroups[section.selectedGroup] = item;
                return;
            }
        });
        section.selectedGroup = null;
    }

    removeUser(section, id) {
        delete section.addedUsers[id];
    }

    removeGroup(section, id) {
        delete section.addedGroups[id];
    }

    // Check required field valid or not
    isTaskValid(task) {
        let isValid = true;
        if (this.isSubmitted && task.isRequired) {
            const hazards = task.hazards;
            hazards.map((hazard) => {
                if (
                    !this.isRiskRatingValid(task, hazard.riskRating) ||
                    !this.isRiskRatingValid(task, hazard.residualRiskRating) ||
                    !this.isMemberOfTheWorkForceValid(task, hazard) ||
                    !this.isMemberOfTheWorkForceValid(task, hazard)
                ) {
                    isValid = false;
                    return;
                }
            });
        }
        return isValid;
    }

    isRiskRatingValid(task, riskRating) {
        if (this.isSubmitted && task.isRequired && !riskRating) {
            return false;
        }
        return true;
    }

    isMemberOfTheWorkForceValid(task, hazard) {
        if (this.isSubmitted && task.isRequired &&
            hazard.memberOfTheWorkForce &&
            (Object.keys(hazard.addedUsers).length === 0 && Object.keys(hazard.addedGroups).length === 0)
        ) {
            return false;
        }
        return true;
    }

    isMemberOfThePublicValid(task, hazard) {
        if (this.isSubmitted && task.isRequired && hazard.memberOfThePublic && !hazard.memberOfThePublicDescription) {
            return false;
        }
        return true;
    }

    // --- End ---
    onContinue() {
        this.isSubmitted = true;
        this.errorMessage = '';

        this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, (status, result) => {
            if (status) {

            } else {
                this.errorMessage = result;
            }
        });
    }


}
