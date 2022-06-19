import { Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { User } from "../../_models";
import { FormControl, FormGroup } from "@angular/forms";
import { DemoDataService } from "../../services/demo-data.service";
import { IonContent, ModalController, NavController } from "@ionic/angular";
import { PhotoService } from "../../services/photo.service";
import { SharedDataService } from "../../services/shared-data.service";
import { ObservablesService } from "../../services/observables.service";
import { ActivatedRoute } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { AccountService } from "../../services/account.service";
import { ExitConfirmationPage } from "../../modals/exit-confirmation/exit-confirmation.page";
import { WorkPermitAnswer } from "../../_models/workPermitAnswer";
import { EnumService } from "../../services/enum.service";
import * as moment from "moment";
import { TranslateService } from "@ngx-translate/core";
import { StaticDataService } from "src/app/services/static-data.service";
import { FormStateSaveExitPage } from "src/app/modals/form-state-save-exit/form-state-save-exit.page";

@Component({
    selector: "app-form-workpermit",
    templateUrl: "./form-workpermit.page.html",
    styleUrls: ["./form-workpermit.page.scss"],
})
export class FormWorkpermitPage {
    @ViewChild(IonContent) content: IonContent;
    UtilService = UtilService;
    EnumService = EnumService;

    expireDateTypes = [
        {
            title: "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_EXPIRES_ON",
            type: "date",
        },
        {
            title: "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_EXPIRES_AFTER",
            type: "duration",
        },
    ];
    selectedExpireDateType = "date";

    user: User;

    errorMessage = "";

    isSubmitted = false;
    formGroup: FormGroup;
    isFormSubmitting = false;

    list = DemoDataService.activityCustomForm.clone();
    answer = {};

    totalPage = 32;

    screenOrientationSubscribe;
    isShowOritationPortrait = false;

    formBuilderDetail;

    questionElementIds = [];
    currentQuestionIndex = 0;
    scrollingDetail: any;

    expireDurationTypes = [];

    isFirstTime = true;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
        public modalController: ModalController,
        public route: ActivatedRoute,
        private screenOrientation: ScreenOrientation,
        private ngZone: NgZone,
        private apiService: ApiService,
        public utilService: UtilService,
        public translateService: TranslateService,
        public accountService: AccountService
    ) {
        translateService
            .get([
                "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_DAYS",
                "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_WEEKS",
                "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_MONTHS",
                "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_YEARS",
            ])
            .subscribe((res) => {
                this.expireDurationTypes.push({
                    title: res[
                        "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_DAYS"
                    ],
                    id: 1,
                });
                this.expireDurationTypes.push({
                    title: res[
                        "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_WEEKS"
                    ],
                    id: 2,
                });
                this.expireDurationTypes.push({
                    title: res[
                        "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_MONTHS"
                    ],
                    id: 3,
                });
                this.expireDurationTypes.push({
                    title: res[
                        "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DURATION_YEARS"
                    ],
                    id: 4,
                });
            });
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }

        // Add form controls for each type of fields
        this.formGroup = new FormGroup({
            expireAfterDuration: new FormControl(""),
            expireAfterDurationType: new FormControl(0),
            expireDate: new FormControl(null),
        });
        const sections = this.formBuilderDetail.sections;
        this.utilService.questionElementIdsUpdate = (questionElementIds) => {
            this.questionElementIds = questionElementIds;
        };
        this.utilService.addFormControlsForVisibleFields(
            sections,
            this.formGroup,
            this.sharedDataService.savedFormStateData
        );
        // -- End -- Add form controls for each type of fields
    }

    handleOrientation = () => {
        if (this.sharedDataService.dedicatedMode) {
            this.screenOrientationSubscribe?.unsubscribe();
            this.screenOrientationSubscribe = null;

            if (
                this.screenOrientation.type.includes("landscape") &&
                this.isFirstTime
            ) {
                this.screenOrientation.unlock();
                this.isShowOritationPortrait = true;
            } else {
                if (!UtilService.isLocalHost()) {
                    this.screenOrientation.lock(
                        this.screenOrientation.ORIENTATIONS.PORTRAIT
                    );
                }
                this.isShowOritationPortrait = false;
            }

            this.screenOrientationSubscribe = this.screenOrientation
                .onChange()
                .subscribe(() => {
                    this.ngZone.run(() => {
                        if (this.screenOrientation.type.includes("portrait")) {
                            if (!UtilService.isLocalHost()) {
                                this.screenOrientation.lock(
                                    this.screenOrientation.ORIENTATIONS.PORTRAIT
                                );
                            }
                            this.isShowOritationPortrait = false;
                        } else if (
                            this.screenOrientation.type.includes("landscape")
                        ) {
                            if (
                                this.sharedDataService
                                    .isGalleryOrCameraOpened ||
                                !this.isFirstTime
                            ) {
                                this.isShowOritationPortrait = false;
                                this.screenOrientation.lock(
                                    this.screenOrientation.ORIENTATIONS.PORTRAIT
                                );
                            } else {
                                this.isShowOritationPortrait = true;
                            }
                        }
                        if (this.isFirstTime) {
                            setTimeout(() => {
                                this.isFirstTime = false;
                            }, 1000);
                        }
                    });
                });
        } else {
            if (!UtilService.isLocalHost()) {
                this.screenOrientation.lock(
                    this.screenOrientation.ORIENTATIONS.PORTRAIT
                );
            }
        }
    };

    ionViewDidEnter() {
        this.sharedDataService.isOpenSubScreen = false;
    }

    ionViewWillEnter() {
        if (!UtilService.isWebApp()) {
            this.handleOrientation();
        }
    }

    ionViewDidLeave(): void {
        if (!UtilService.isWebApp()) {
            if (this.sharedDataService.dedicatedMode) {
                if (!this.sharedDataService.isOpenSubScreen) {
                    if (!UtilService.isLocalHost()) {
                        this.screenOrientationSubscribe.unsubscribe();
                        this.screenOrientation.lock(
                            this.screenOrientation.ORIENTATIONS.LANDSCAPE
                        );
                    }
                }
            }
        }
    }

    async onClose() {
        if (
            this.sharedDataService.viewFormFor ===
            EnumService.ViewFormForType.Induction
        ) {
            const modal = await this.modalController.create({
                component: ExitConfirmationPage,
                swipeToClose: false,
                showBackdrop: false,
                backdropDismiss: false,
                animated: true,
                componentProps: {},
                cssClass: "exit-confirmation-modal",
            });
            await modal.present();

            modal.onWillDismiss().then(({ data }) => {
                if (data) {
                    this.onBack();
                }
            });
        } else {
            const modal = await this.modalController.create({
                component: FormStateSaveExitPage,
                swipeToClose: false,
                showBackdrop: false,
                backdropDismiss: false,
                animated: true,
                cssClass: "form-state-save-exit-modal",
                componentProps: {},
            });
            await modal.present();

            modal.onWillDismiss().then(({ data }) => {
                if (data === 2) {
                    this.sharedDataService.saveFormState(
                        EnumService.FormTypes.WORK_PERMIT,
                        this.formGroup,
                        this.formBuilderDetail,
                        this.user,
                        (status, result) => {
                            this.isFormSubmitting = false;
                            if (status) {
                                this.onBack();
                            }
                        }
                    );
                } else if (data) {
                    this.onBack();
                }
            });
        }
    }
    onBack() {
        if (
            this.sharedDataService.viewFormFor ===
            EnumService.ViewFormForType.Induction
        ) {
            this.navCtrl.navigateBack("/checkinout-confirm");
        } else {
            this.navCtrl.back();
        }
    }

    onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = "";

        let workPermitAnswer: WorkPermitAnswer;
        if (this.formGroup.valid) {
            // Calculate score for work permit
            let scoreAchieved = 0;
            const sections = this.formBuilderDetail.sections;
            if (sections) {
                sections.map((section, sectionIndex) => {
                    if (this.utilService.shouldShowSection(section)) {
                        const questions = section.questions;
                        questions.map((question, questionIndex) => {
                            if (this.utilService.shouldShowQuestion(question)) {
                                const controlName = UtilService.FCUniqueName(
                                    section,
                                    question
                                );

                                if (
                                    question.selectedAnswerTypeId ===
                                    EnumService.CustomAnswerType.SingleChoiceSet
                                ) {
                                    const control =
                                        this.formGroup.controls[controlName];
                                    question.answerChoiceAttributes.map(
                                        (choice) => {
                                            if (
                                                choice.answerChoiceAttributeId ===
                                                control.value
                                            ) {
                                                scoreAchieved =
                                                    scoreAchieved +
                                                    choice.answerChoiceAttributeScoreOrWeight;
                                            }
                                        }
                                    );
                                } else if (
                                    question.selectedAnswerTypeId ===
                                    EnumService.CustomAnswerType
                                        .MultipleChoiceSet
                                ) {
                                    const control =
                                        this.formGroup.controls[controlName];
                                    const formGroups =
                                        control.value as FormGroup;
                                    question.answerChoiceAttributes.map(
                                        (choice) => {
                                            const choiceControl =
                                                formGroups[
                                                    UtilService.SubFCName(
                                                        controlName,
                                                        choice.answerChoiceAttributeId
                                                    )
                                                ];
                                            if (choiceControl) {
                                                scoreAchieved =
                                                    scoreAchieved +
                                                    choice.answerChoiceAttributeScoreOrWeight;
                                            }
                                        }
                                    );
                                }
                            }
                        });
                    }
                });
            }

            workPermitAnswer = {
                userWorkPermitID: 0,
                workPermitId:
                    this.formBuilderDetail.workPermitDetails.workPermitId,
                scoreAchieved,
                totalScore: this.formBuilderDetail.workPermitDetails.totalScore,
                whoDefinesDateType:
                    this.formBuilderDetail?.workPermitDetails
                        ?.whoDefinesDateType,
                hasExpiresOn: false,
                expiresOnDate: "",
                hasExpiresAfter: false,
                durationValue: 0,
                durationTypeID: 0,
            };
            const isExpireDateUserDefined =
                this.formBuilderDetail?.workPermitDetails
                    ?.whoDefinesDateType === "UserDefined";
            if (isExpireDateUserDefined) {
                if (this.selectedExpireDateType === "date") {
                    const expireDateControl =
                        this.formGroup.controls["expireDate"];
                    const expireDate = expireDateControl?.value;
                    if (!expireDate) {
                        this.translateService
                            .get(
                                "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DATE_EMPTY_MSG"
                            )
                            .subscribe((res) => {
                                this.errorMessage = res;
                            });
                        return;
                    } else {
                        workPermitAnswer.hasExpiresOn = true;
                        workPermitAnswer.expiresOnDate = moment(
                            expireDate
                        ).format(StaticDataService.dateZeroDateTimeFormat);
                    }
                } else if (this.selectedExpireDateType === "duration") {
                    const expireAfterDurationControl =
                        this.formGroup.controls["expireAfterDuration"];
                    const expireAfterDurationTypeControl =
                        this.formGroup.controls["expireAfterDurationType"];
                    if (
                        !expireAfterDurationControl?.value ||
                        !expireAfterDurationTypeControl?.value
                    ) {
                        this.translateService
                            .get(
                                "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.EXPIRATION_DATE_EMPTY_MSG"
                            )
                            .subscribe((res) => {
                                this.errorMessage = res;
                            });
                        return;
                    } else {
                        workPermitAnswer.hasExpiresAfter = true;
                        workPermitAnswer.durationValue =
                            expireAfterDurationControl.value;
                        workPermitAnswer.durationTypeID =
                            expireAfterDurationTypeControl.value;
                    }
                }
            }
        }
        this.isFormSubmitting = true;
        this.sharedDataService.saveFormAnswers({
            apiService: this.apiService,
            formGroup: this.formGroup,
            formBuilderDetail: this.formBuilderDetail,
            personalModeLoggedUser: this.user,
            originalCallBack: (status, result) => {
                this.isFormSubmitting = false;
                if (status) {
                } else {
                    this.errorMessage = result;
                    this._scrollToTop();
                }
            },
            workPermitAnswer,
        });
    }

    _scrollToTop() {
        this.content.scrollToTop(200);
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
}
