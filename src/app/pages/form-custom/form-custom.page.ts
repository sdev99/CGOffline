import { Component, NgZone, ViewChild } from "@angular/core";
import { IonContent, ModalController, NavController } from "@ionic/angular";
import { DemoDataService } from "../../services/demo-data.service";
import { PhotoService } from "../../services/photo.service";
import { SharedDataService } from "../../services/shared-data.service";
import { ExitConfirmationPage } from "../../modals/exit-confirmation/exit-confirmation.page";
import { FormStateSaveExitPage } from "../../modals/form-state-save-exit/form-state-save-exit.page";
import { FormGroup } from "@angular/forms";
import { EnumService } from "../../services/enum.service";
import { ActivatedRoute } from "@angular/router";
import { ObservablesService } from "../../services/observables.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { AccountService } from "../../services/account.service";
import { User } from "../../_models";
import { UtilService } from "../../services/util.service";
import { ApiService } from "../../services/api.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-form-custom",
    templateUrl: "./form-custom.page.html",
    styleUrls: ["./form-custom.page.scss"],
})
export class FormCustomPage {
    @ViewChild(IonContent) content: IonContent;
    EnumService = EnumService;
    UtilService = UtilService;
    user: User;

    errorMessage = "";

    isSubmitted = false;
    isFormSubmitting = false;

    formGroup: FormGroup;

    list = DemoDataService.activityCustomForm.clone();
    answer = {};

    totalPage = 32;

    screenOrientationSubscribe: Subscription;
    isShowOritationPortrait = false;

    formBuilderDetail;

    questionElementIds = [];
    currentQuestionIndex = 0;
    scrollingDetail: any;

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
        public accountService: AccountService
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }

        // Dynamic form controls add
        this.formGroup = new FormGroup({});
        const sections = this.formBuilderDetail.sections;
        this.utilService.questionElementIdsUpdate = (questionElementIds) => {
            this.questionElementIds = questionElementIds;
        };
        this.utilService.addFormControlsForVisibleFields(
            sections,
            this.formGroup,
            this.sharedDataService.savedFormStateData,
            (elementId) => {
                setTimeout(() => {
                    const y = document.getElementById(elementId)?.offsetTop;
                    this.content.scrollToPoint(0, y, 500);
                }, 1000);
            }
        );
        // --End
    }

    isShowGenerateJsonButton = () => {
        if (this.sharedDataService.isDevelopmentMode) {
            // return true;
        }
        return false;
    };

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
        if (this.sharedDataService.dedicatedMode && !UtilService.isWebApp()) {
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
                        EnumService.FormTypes.CUSTOM,
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
            if (this.sharedDataService.dedicatedMode) {
                this.navCtrl.navigateBack("/checkinout-option-dm");
            } else {
                this.navCtrl.navigateBack("/checkinout-confirm");
            }
        } else {
            this.navCtrl.back();
        }
    }

    onSubmit(isGenerateTestJsonFile = false) {
        this.isSubmitted = true;
        this.errorMessage = "";

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
            isGenerateTestJsonFile,
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
                    const y = document.getElementById(elementId)?.offsetTop;
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
        const y = document.getElementById(elementId)?.offsetTop;
        this.content.scrollToPoint(0, y, 500);
    };

    // -- End -- Navigate to question
}
