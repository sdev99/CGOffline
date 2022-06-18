import { Component, NgZone, ViewChild } from "@angular/core";
import { IonContent, ModalController, NavController } from "@ionic/angular";
import { FormGroup } from "@angular/forms";
import { StaticDataService } from "../../services/static-data.service";
import { ExitConfirmationPage } from "../../modals/exit-confirmation/exit-confirmation.page";
import { ActivatedRoute } from "@angular/router";
import { EnumService } from "../../services/enum.service";
import { SharedDataService } from "../../services/shared-data.service";
import { ObservablesService } from "../../services/observables.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { AccountService } from "../../services/account.service";
import { Response, User } from "../../_models";
import { UtilService } from "../../services/util.service";
import { ApiService } from "../../services/api.service";
import { LocationItem } from "../../_models/locationItem";
import { TranslateService } from "@ngx-translate/core";
import { EntityItem } from "src/app/_models/entityItem";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { FormStateSaveExitPage } from "src/app/modals/form-state-save-exit/form-state-save-exit.page";

@Component({
    selector: "app-form-accident-report",
    templateUrl: "./form-accident-report.page.html",
    styleUrls: ["./form-accident-report.page.scss"],
})
export class FormAccidentReportPage {
    @ViewChild(IonContent) content: IonContent;
    window = window;

    EnumService = EnumService;
    UtilService = UtilService;
    user: User;

    isSubmitted = false;
    errorMessage = "";
    isFormSubmitting = false;

    formGroup: FormGroup;
    locations: Array<LocationItem>;
    types = [];
    classifications = [];
    bodyParts = StaticDataService.bodyParts.clone();
    currentBodyPartIndex = 0;
    selectedBodyParts = {};
    accidentImage;

    accidentAlertOptions: any = {};

    screenOrientationSubscribe;
    isShowOritationPortrait = false;
    isWebApp: Boolean = UtilService.isWebApp();

    formBuilderDetail;

    locationIdControlName;
    bodyPartControlName;

    questionElementIds = [];
    companyId;

    isFirstTime = true;

    isTrue = true;

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
        public offlineManagerService: OfflineManagerService,
        public utilService: UtilService,
        public translateService: TranslateService
    ) {
        this.translateService
            .get(
                "PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.ACCIDENTREPORT_FORM.WHERE_THE_ACCIDENT_HAPPENED"
            )
            .subscribe((res) => {
                this.accidentAlertOptions.header = res;
            });

        this.user = accountService.userValue;

        if (this.sharedDataService.dedicatedMode) {
            this.companyId =
                this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
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
                            if (
                                question.selectedAnswerTypeId ===
                                EnumService.CustomAnswerType.PhotoVideoUpload
                            ) {
                                question.questionIsRequired = false;
                            }

                            if (
                                question.selectedAnswerTypeId ===
                                EnumService.CustomAnswerType.BodyPartControl
                            ) {
                                question.bodyParts = this.bodyParts;
                                this.bodyPartControlName =
                                    UtilService.FCUniqueName(section, question);
                            } else if (
                                question.selectedAnswerTypeId ===
                                EnumService.CustomAnswerType.LocationSelection
                            ) {
                                this.locationIdControlName =
                                    UtilService.FCUniqueName(section, question);
                            }

                            try {
                                if (
                                    question.questionTranslations &&
                                    question.questionTranslations.length > 0
                                ) {
                                    question.questionTranslations.some(
                                        (item) => {
                                            if (
                                                item?.questionTranslationTitle ===
                                                "Is RIDDOR Report Needed?"
                                            ) {
                                                questions.splice(
                                                    questionIndex,
                                                    1
                                                );
                                                return true;
                                            }
                                        }
                                    );
                                }
                            } catch (error) {}

                            if (
                                !question.answerChoiceAttributes ||
                                question.answerChoiceAttributes.length === 0
                            ) {
                                this.setupDynamicChoiceList(
                                    questionDisplayOrder
                                );
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
        this.utilService.addFormControlsForVisibleFields(
            sections,
            this.formGroup,
            this.sharedDataService.savedFormStateData
        );
        // -- End -- Add form controls for each type of fields

        // Set value for body parts from saved form state

        setTimeout(() => {
            if (sections) {
                sections.map((section, sectionIndex) => {
                    if (section.isAccidentReportSection) {
                        const questions = section.questions;

                        questions.map((question) => {
                            if (section.isAccidentReportSection) {
                                if (
                                    question.selectedAnswerTypeId ===
                                    EnumService.CustomAnswerType.BodyPartControl
                                ) {
                                    question.bodyParts = this.bodyParts;
                                    // this.bodyPartControlName;
                                    StaticDataService.bodyParts.map(
                                        (partGroup) => {
                                            partGroup.parts.map((part: any) => {
                                                const subControlName =
                                                    UtilService.SubFCName(
                                                        this
                                                            .bodyPartControlName,
                                                        part.id
                                                    );
                                                if (
                                                    this.sharedDataService
                                                        .savedFormStateData &&
                                                    this.sharedDataService
                                                        .savedFormStateData[
                                                        this.bodyPartControlName
                                                    ] &&
                                                    this.sharedDataService
                                                        .savedFormStateData[
                                                        this.bodyPartControlName
                                                    ][subControlName]
                                                ) {
                                                    this.selectedBodyParts[
                                                        part.id
                                                    ] = {
                                                        ...part,
                                                        checked: true,
                                                    };
                                                    const element =
                                                        document.getElementById(
                                                            part.id
                                                        );
                                                    element.style.fill =
                                                        "#E74731";
                                                }
                                            });
                                        }
                                    );
                                }
                            }
                        });
                    }

                    sharedDataService.formBuilderDetails =
                        this.formBuilderDetail;
                });
            }
        }, 1000);

        // --End Set value for body parts from saved form state
    }

    ionViewDidEnter() {
        this.sharedDataService.isOpenSubScreen = false;
        this.getLocationItemList();
        this.getAccidentTypeList();
        this.getAccidentClassificationList();
    }

    ionViewWillLeave(): void {}

    getAccidentTypeList = () => {
        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getDeviceAccidentTypeList()
                .then((res: any) => {
                    this.types = res;
                    this.setupDynamicChoiceList(
                        EnumService.AccidentFormFieldOrder.Type
                    );
                });
        } else {
            this.apiService.getAccidentTypeList().subscribe(
                (response: Response) => {
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.types = response.Result;
                        this.setupDynamicChoiceList(
                            EnumService.AccidentFormFieldOrder.Type
                        );
                    }
                },
                (error) => {}
            );
        }
    };

    getAccidentClassificationList = () => {
        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getDeviceAccidentClassificationList()
                .then((res: any) => {
                    this.classifications = res;
                    this.setupDynamicChoiceList(
                        EnumService.AccidentFormFieldOrder.Classification
                    );
                });
        } else {
            this.apiService.getAccidentClassificationList().subscribe(
                (response: Response) => {
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.classifications = response.Result;
                        this.setupDynamicChoiceList(
                            EnumService.AccidentFormFieldOrder.Classification
                        );
                    }
                },
                (error) => {}
            );
        }
    };

    getLocationItemList = () => {
        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getDeviceLocationItemList()
                .then((res: any) => {
                    this.locations = res;
                    setTimeout(() => {
                        this.setupDynamicChoiceList(
                            EnumService.AccidentFormFieldOrder.AccidentLocation
                        );
                    }, 100);
                });
        } else {
            this.apiService.getLocationItemList(this.companyId).subscribe(
                (res) => {
                    if (
                        res.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.locations = res.Result;
                        this.setupDynamicChoiceList(
                            EnumService.AccidentFormFieldOrder.AccidentLocation
                        );
                    }
                },
                (error) => {}
            );
        }
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
                                setTimeout(() => {
                                    if (
                                        questionDisplayOrder ===
                                        EnumService.AccidentFormFieldOrder.Type
                                    ) {
                                        question.answerChoiceAttributes =
                                            this.types;
                                        question.listValueKey =
                                            "accidentTypeId";
                                        question.listLabelKey =
                                            "accidentTypeTitle";
                                    } else if (
                                        questionDisplayOrder ===
                                        EnumService.AccidentFormFieldOrder
                                            .Classification
                                    ) {
                                        question.answerChoiceAttributes =
                                            this.classifications;
                                        question.listValueKey =
                                            "accidentClassificationId";
                                        question.listLabelKey =
                                            "accidentClassificationTitle";
                                    } else if (
                                        questionDisplayOrder ===
                                        EnumService.AccidentFormFieldOrder
                                            .AccidentLocation
                                    ) {
                                        question.answerChoiceAttributes =
                                            this.locations;
                                        question.listValueKey = "locationName";
                                        question.listLabelKey = "locationID";
                                    }
                                }, 0);
                            });
                        }
                    });
                }
            });
        }
    };

    scanUserQrCode = (event, formControlName) => {
        event.stopPropagation();
        this.sharedDataService.isOpenSubScreen = true;

        const fromFormCallbackKey =
            EnumService.ObserverKeys.QRCODE_SCANNED_RESULT +
            "" +
            formControlName;
        this.observablesService
            .getObservable(fromFormCallbackKey)
            .subscribe((result) => {
                this.sharedDataService.isOpenSubScreen = false;

                const entityItem = result as EntityItem;
                this.ngZone.run(() => {
                    setTimeout(() => {
                        let locationId = "";
                        switch (entityItem.entityType) {
                            case EnumService.SelectedQRCodeType.Location:
                                locationId = "L|";
                                break;
                            case EnumService.SelectedQRCodeType.Project:
                                locationId = "P|";
                                break;
                            case EnumService.SelectedQRCodeType.InventoryItem:
                                locationId = "I|";
                                break;
                            case EnumService.SelectedQRCodeType.Document:
                                locationId = "D|";
                                break;
                            case EnumService.SelectedQRCodeType.Form:
                                locationId = "F|";
                                break;
                            case EnumService.SelectedQRCodeType.User:
                                locationId = "U|";
                                break;
                            default:
                                break;
                        }
                        this.formGroup.controls[formControlName].setValue(
                            locationId + "" + entityItem.entityID
                        );
                    }, 0);
                });

                this.observablesService.removeObservable(fromFormCallbackKey);
            });

        this.navCtrl.navigateForward("/dashboard-qrscan", {
            queryParams: {
                fromFormPage: true,
                fromFormCallbackKey: fromFormCallbackKey,
                fromFormAllowedQrCodeTypes: [
                    EnumService.SelectedQRCodeType.Location,
                ],
            },
        });
    };

    handleOrientation = () => {
        if (this.sharedDataService.dedicatedMode) {
            this.screenOrientationSubscribe?.unsubscribe();
            this.screenOrientationSubscribe = null;
            if (
                this.screenOrientation.type.includes("landscape") &&
                this.isFirstTime
            ) {
                if (!UtilService.isLocalHost()) {
                    this.screenOrientation.unlock();
                }
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
                            this.isShowOritationPortrait = false;
                            if (!UtilService.isLocalHost()) {
                                this.screenOrientation.lock(
                                    this.screenOrientation.ORIENTATIONS.PORTRAIT
                                );
                            }
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

    ionViewWillEnter() {
        if (!UtilService.isWebApp()) {
            this.handleOrientation();
        }
    }

    ionViewDidLeave(): void {
        if (!UtilService.isWebApp()) {
            if (
                this.sharedDataService.dedicatedMode &&
                !this.sharedDataService.isOpenSubScreen &&
                !UtilService.isLocalHost()
            ) {
                this.screenOrientationSubscribe.unsubscribe();
                this.screenOrientation.lock(
                    this.screenOrientation.ORIENTATIONS.LANDSCAPE
                );
            }
        }
    }

    placeInTheListChange(event) {
        if (event.detail.value) {
            this.formGroup.controls[
                EnumService.AccidentCustomLocationControlsName.PlaceNotintheList
            ].setValue(false);
            this.formGroup.controls[
                EnumService.AccidentCustomLocationControlsName.LocationName
            ].setValue("");
        }
    }

    placeNotintheListChange(event, controlName) {
        if (event.detail.checked) {
            this.formGroup.controls[controlName].setValue("");
        } else {
            this.formGroup.controls[
                EnumService.AccidentCustomLocationControlsName.LocationName
            ].setValue("");
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
            element.style.fill = "#E74731";
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
            const checked =
                this.selectedBodyParts[type] &&
                this.selectedBodyParts[type].checked
                    ? false
                    : true;
            this.selectedBodyParts[type] = {
                ...selectedItem,
                checked,
            };
            const bodyPartControlGroup = this.formGroup.controls[
                this.bodyPartControlName
            ] as FormGroup;
            bodyPartControlGroup.controls[
                UtilService.SubFCName(this.bodyPartControlName, type)
            ].setValue(checked);

            const element = document.getElementById(selectedItem.id);
            if (this.selectedBodyParts[type].checked) {
                element.style.fill = "#E74731";
            } else {
                element.style.fill = selectedItem.path.fill;
            }
        }
    }

    openImageAnnotation = (photo) => {
        this.sharedDataService.isOpenSubScreen = true;
        this.sharedDataService.setAnnotationImage(photo);
        this.sharedDataService.onAnnotationImageDone = (image) => {
            this.accidentImage = image;
        };

        this.navCtrl.navigateForward(["/image-annotation"]);
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

        const bodyPartControlGroup = this.formGroup.controls[
            this.bodyPartControlName
        ] as FormGroup;
        bodyPartControlGroup.controls[
            UtilService.SubFCName(this.bodyPartControlName, item.id)
        ].setValue(false);

        const element = document.getElementById(item.id);
        element.style.fill = item.path.fill;
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
                        EnumService.FormTypes.ACCIDENT_REPORT,
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

    isError(section, question) {
        const controlName = UtilService.FCUniqueName(section, question);
        return this.isSubmitted && !this.formGroup.controls[controlName].valid;
    }

    isBodyPartSelected = () => {
        return Object.keys(this.selectedBodyParts).length > 0;
    };

    // If location not selected or not entered manually
    isLocationSelected() {
        const locationIdControl =
            this.formGroup.controls[this.locationIdControlName];
        const locationNameControl =
            this.formGroup.controls[
                EnumService.AccidentCustomLocationControlsName.LocationName
            ];
        if (
            locationIdControl &&
            locationNameControl &&
            !locationIdControl?.value &&
            !locationNameControl?.value
        ) {
            return false;
        }
        return true;
    }

    _scrollToTop() {
        this.content.scrollToTop(200);
    }

    onContinue() {
        this.isSubmitted = true;
        this.errorMessage = "";

        if (this.formGroup.valid && !this.isLocationSelected()) {
            this.translateService
                .get(
                    "SHARED_TEXT.ERRORS.PLEASE_SELECT_LOCATION_OR_ENTER_MANUALLY"
                )
                .subscribe((res) => {
                    this.errorMessage = res;
                });
        }

        if (!this.errorMessage) {
            this.isFormSubmitting = true;
            this.sharedDataService.saveFormAnswers(
                this.apiService,
                this.formGroup,
                this.formBuilderDetail,
                this.user,
                (status, result) => {
                    this.isFormSubmitting = false;
                    if (status) {
                    } else {
                        this.errorMessage = result;
                        this._scrollToTop();
                    }
                }
            );
        } else {
            this._scrollToTop();
        }
    }
}
