import {Component, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IonContent, ModalController, NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {PhotoService} from '../../services/photo.service';
import {SharedDataService} from '../../services/shared-data.service';
import {ExitConfirmationPage} from '../../modals/exit-confirmation/exit-confirmation.page';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EnumService} from '../../services/enum.service';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';
import {ObservablesService} from '../../services/observables.service';
import {Subscription} from 'rxjs';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {UtilService} from '../../services/util.service';
import {HavExposure} from '../../_models/havExposure';
import {HavModelItem} from '../../_models/havModelItem';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-form-custom',
    templateUrl: './form-custom.page.html',
    styleUrls: ['./form-custom.page.scss'],
})
export class FormCustomPage {
    @ViewChild(IonContent) content: IonContent;
    user: User;

    errorMessage = '';

    isSubmitted = false;
    formGroup: FormGroup;

    activityDetail;

    list = DemoDataService.activityCustomForm.clone();
    answer = {};


    totalPage = 32;

    screenOrientationSubscribe;
    isShowOritationPortrait = false;

    formBuilderDetail = JSON.parse('{"formId":122,"title":"Custom Form - 2","description":null,"formVersionId":219,"formVersionNo":4,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":239,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":351,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section One"}],"questions":[{"questionId":555,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":true,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":1,"sectionID":239,"questionTranslations":[{"questionTranslationId":646,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Single Choice","questionTranslationInstructionOrNote":"test ote","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":556,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":239,"questionTranslations":[{"questionTranslationId":647,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Multiple Choice","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":592,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"grey","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":711,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":593,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"gold","answerChoiceAttributeScoreOrWeight":1,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":712,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"incorrect"}]},{"answerChoiceAttributeId":594,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"turquoise","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":713,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"correct"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":557,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":true,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":3,"sectionID":239,"questionTranslations":[{"questionTranslationId":648,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Date Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":"Enter Date"}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":240,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":352,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Two"}],"questions":[{"questionId":558,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":true,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":1,"sectionID":240,"questionTranslations":[{"questionTranslationId":649,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Time","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":"Enter Time"}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":559,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":true,"allowTextLabel":true,"shouldShowOptionalComment":true,"allowAttachment":true,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":2,"sectionID":240,"questionTranslations":[{"questionTranslationId":650,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number type question","questionTranslationInstructionOrNote":"enter question carefully","questionTranslationTextLabel":"Enter Number"}],"answerChoiceAttributes":[],"questionLogics":[{"questionLogicId":63,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":5,"integerValue":null,"decimalValue":"10.00","dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"1-3","questionID":559,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":64,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":2,"integerValue":null,"decimalValue":"15.00","dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":2,"questionActionOnID":"2-2","questionID":559,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[{"questionAttachmentId":38,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"demo51.png","fileType":null,"fileExtension":"png","folderName":"Choose","questionID":559,"documentID":125,"folderID":null}]},{"questionId":560,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":true,"shouldShowOptionalComment":true,"allowAttachment":true,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":10,"questionDisplayOrder":3,"sectionID":240,"questionTranslations":[{"questionTranslationId":651,"questionTranslationLanguageId":35,"questionTranslationTitle":"Upload a photo","questionTranslationInstructionOrNote":"Site photo to be uploaded","questionTranslationTextLabel":"attachment"}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[{"questionAttachmentId":39,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"demo51.png","fileType":null,"fileExtension":"png","folderName":"Choose","questionID":560,"documentID":125,"folderID":null}]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[{"userId":"e243237f-3147-4810-9dbd-6f5ea7bffb30","userName":"Demo Two App"}],"taskTemplates":[]}');

    questionElementIds = [];
    currentQuestionIndex = 0;
    scrollingDetail: any;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
        public modalController: ModalController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        private screenOrientation: ScreenOrientation,
        private ngZone: NgZone,
        private apiService: ApiService,
        private utilService: UtilService,
        public accountService: AccountService,
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }


        // Dynamic form controls add
        this.formGroup = new FormGroup({});
        const sections = this.formBuilderDetail.sections;
        if (sections) {
            sections.map((section) => {
                if (!section.sectionIsHidden) {
                    const questions = section.questions;
                    questions.map((question) => {
                        if (!question.questionIsHidden) {
                            this.utilService.addDynamicFormControls(question, this.formGroup);
                            this.questionElementIds.push(UtilService.HtmlElementId(section.sectionId, question.questionId));
                        }
                    });
                }
            });
        }
        // --End

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


    onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = '';

        this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, (status, result) => {
            if (status) {

            } else {
                this.errorMessage = result;
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


    // Unused

    addImage(index) {
        this.photoService.choosePhotoOption((photo) => {
            this.openImageAnnotation(index, photo);
        });
    }

    openImageAnnotation = (index, photo) => {
        this.sharedDataService.isOpenImageAnnotation = true;
        this.sharedDataService.setAnnotationImage(photo);
        this.sharedDataService.onAnnotationImageDone = (image) => {
            this.answer[index] = {
                ...this.answer[index],
                image
            };
        };

        this.navCtrl.navigateForward(['/image-annotation']);
    };

    addDateNote(index) {
        this.answer[index] = {
            ...this.answer[index],
            addNote: true,
        };
    }

    isValid(index, section) {
        let isValid = true;
        if (this.isSubmitted && section.required) {
            isValid = false;
            const answer = this.answer[index];
            if (answer) {
                switch (section.question_type) {
                    case 'date':
                        isValid = answer.date;
                        break;
                    case 'image_annotation':
                        isValid = answer.image;
                        break;
                    case 'options':
                        if (section.canMultipleAsnwer) {
                            section.options.map((item) => {
                                if (item.checked) {
                                    isValid = item.checked;
                                    return;
                                }
                            });
                        } else {
                            isValid = section.selectedValue;
                        }
                        break;
                    case 'photo':
                        isValid = answer.image;
                        break;
                    case 'time':
                        isValid = answer.time;
                        break;
                    default:
                        isValid = true;
                }
            }
        }
        return isValid;
    }

    photoAdded(index, photo) {
        this.openImageAnnotation(index, photo);
    }

    photoRemoved(index) {
        this.answer[index] = {
            ...this.answer[index],
            image: null,
        };
    }

    timeSelect(index, time) {
        this.answer[index] = {
            ...this.answer[index],
            timePeriod: time,
        };
    }

    openFile() {

    }
}
