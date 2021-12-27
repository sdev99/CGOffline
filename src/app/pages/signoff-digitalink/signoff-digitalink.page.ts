import { Component, NgZone, OnInit } from "@angular/core";
import { IonRouterOutlet, NavController } from "@ionic/angular";
import { fabric } from "fabric";
import { ActivatedRoute } from "@angular/router";
import { ObservablesService } from "../../services/observables.service";
import { EnumService } from "../../services/enum.service";
import { SharedDataService } from "../../services/shared-data.service";
import { UtilService } from "../../services/util.service";
import { ApiService } from "../../services/api.service";
import { Response, User } from "../../_models";
import { AccountService } from "../../services/account.service";
import { FilehandlerService } from "../../services/filehandler.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { TranslateService } from "@ngx-translate/core";
import { OfflineManagerService } from "src/app/services/offline-manager.service";

@Component({
  selector: "app-signoff-digitalink",
  templateUrl: "./signoff-digitalink.page.html",
  styleUrls: ["./signoff-digitalink.page.scss"],
})
export class SignoffDigitalinkPage implements OnInit {
  screenOrientationSubscribe;
  errorMessage;

  user: User;
  isConfirm = false;
  canvasRef;

  isSignatureFilled = false;

  pageTitle = "Sign-Off";
  title = "You are signing-off";
  subTitle = "Digital Ink Signature";
  aggrementTitle =
    "I herby confirm that I've read and understood everything I viewed.";
  showDigitalInk = false;

  type;

  constructor(
    public navCtrl: NavController,
    public utilService: UtilService,
    public route: ActivatedRoute,
    public observablesService: ObservablesService,
    public sharedDataService: SharedDataService,
    public apiService: ApiService,
    private routerOutlet: IonRouterOutlet,
    private accountService: AccountService,
    private screenOrientation: ScreenOrientation,
    private ngZone: NgZone,
    private filehandlerService: FilehandlerService,
    private offlineManagerService: OfflineManagerService,
    private translateService: TranslateService
  ) {
    const signOffLangKey = "PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF";
    const signOffAgreementTitleLangKey =
      "PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF_AGREEMENT_TITLE";
    const youAreSigningOffLangKey =
      "PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF_AGREEMENT_TITLE";
    const digitalInkSingatureLangKey =
      "PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF_AGREEMENT_TITLE";
    this.translateService
      .get([
        signOffLangKey,
        signOffAgreementTitleLangKey,
        youAreSigningOffLangKey,
        digitalInkSingatureLangKey,
      ])
      .subscribe((res) => {
        this.pageTitle = res[signOffLangKey];
        this.title = res[youAreSigningOffLangKey];
        this.subTitle = res[digitalInkSingatureLangKey];
        this.aggrementTitle = res[signOffAgreementTitleLangKey];
      });

    this.user = this.accountService.userValue;

    if (sharedDataService.signOffFor) {
      this.type = sharedDataService.signOffFor;
    }
  }

  ionViewDidEnter = () => {
    this.routerOutlet.swipeGesture = false;
  };

  ionViewWillLeave = () => {
    this.routerOutlet.swipeGesture = true;
  };

  ngOnInit() {
    const inductionAgreementTitleLangKey =
      "PAGESPECIFIC_TEXT.SIGN_OFF.INDUCTION_AGREEMENT_TITLE";
    const inductionLangKey = "PAGESPECIFIC_TEXT.SIGN_OFF.INDUCTION";
    const documentActivityAgreementTitleLangKey =
      "PAGESPECIFIC_TEXT.SIGN_OFF.DOCUMENT_ACTIVITY_AGREEMENT_TITLE";
    const formActivityAgreementTitleLangKey =
      "PAGESPECIFIC_TEXT.SIGN_OFF.FORM_ACTIVITY_AGREEMENT_TITLE";
    const signOffLangKey = "PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF";
    const signOffAgreementTitleLangKey =
      "PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF_AGREEMENT_TITLE";

    this.translateService
      .get([
        signOffLangKey,
        signOffAgreementTitleLangKey,
        documentActivityAgreementTitleLangKey,
        formActivityAgreementTitleLangKey,
        inductionAgreementTitleLangKey,
        inductionLangKey,
      ])
      .subscribe((res) => {
        switch (this.type) {
          case EnumService.SignOffType.INDUCTION:
            this.aggrementTitle = res[inductionAgreementTitleLangKey];
            this.subTitle = res[inductionLangKey];
            if (
              this.sharedDataService.checkInDetail &&
              this.sharedDataService.checkInDetail.checkInInduction
                .isSignatureSignOff
            ) {
              this.showDigitalInk = true;
              this.initialiseDrawing();
            }
            break;

          case EnumService.SignOffType.DOCUMENT_ACTIVITY:
          case EnumService.SignOffType.DOCUMENT_CURRENT_CHECKIN:
            this.aggrementTitle = res[documentActivityAgreementTitleLangKey];
            if (this.sharedDataService.signOffDocumentDetail) {
              this.subTitle =
                this.sharedDataService.signOffDocumentDetail?.documentTitle;
              if (
                this.sharedDataService.signOffDocumentDetail &&
                this.sharedDataService.signOffDocumentDetail?.isSignatureSignOff
              ) {
                this.showDigitalInk = true;
                this.initialiseDrawing();
              }
            }
            break;

          case EnumService.SignOffType.FORM_ACTIVITY:
          case EnumService.SignOffType.FORM_CURRENT_CHECKIN:
          case EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN:
            this.aggrementTitle = res[formActivityAgreementTitleLangKey];
            if (this.sharedDataService.signOffFormDetail) {
              this.subTitle =
                this.sharedDataService.signOffFormDetail.formData.formTitle;
              if (
                this.sharedDataService.signOffFormDetail &&
                this.sharedDataService.signOffFormDetail.formData
                  .isSignatureSignOff
              ) {
                this.showDigitalInk = true;
                this.initialiseDrawing();
              }
            }
            break;

          case EnumService.SignOffType.DOCUMENT_DM:
            this.aggrementTitle = res[signOffAgreementTitleLangKey];
            if (this.sharedDataService.signOffDocumentDetail) {
              if (
                this.sharedDataService.signOffDocumentDetail &&
                this.sharedDataService.signOffDocumentDetail?.isSignatureSignOff
              ) {
                this.showDigitalInk = true;
                this.initialiseDrawing();
              }
            }
            this.pageTitle = res[signOffLangKey];
            this.title = res[signOffLangKey];
            this.subTitle = "";
            break;

          case EnumService.SignOffType.FORMS_DM:
          case EnumService.SignOffType.WORK_PERMIT_DM:
            this.aggrementTitle = res[signOffAgreementTitleLangKey];
            if (this.sharedDataService.signOffFormDetail) {
              this.subTitle =
                this.sharedDataService.signOffFormDetail?.formData?.formTitle;
              if (
                this.sharedDataService.signOffFormDetail &&
                this.sharedDataService.signOffFormDetail?.formData
                  ?.isSignatureSignOff
              ) {
                this.showDigitalInk = true;
                this.initialiseDrawing();
              }
            }
            this.pageTitle = res[signOffLangKey];
            this.title = res[signOffLangKey];
            this.subTitle = "";
            break;

          default:
            if (UtilService.isLocalHost()) {
              this.pageTitle = res[signOffLangKey];
              this.title = res[signOffLangKey];
              this.aggrementTitle = res[signOffAgreementTitleLangKey];
              this.showDigitalInk = false;
              this.initialiseDrawing();
            }
        }
      });
  }

  onConfirm = () => {
    this.ngZone.run(() => {
      this.isConfirm = !this.isConfirm;
    });
  };
  initialiseDrawing() {
    setTimeout(() => {
      if (!this.canvasRef) {
        const canvasRef = new fabric.Canvas("digital-signature");
        this.canvasRef = canvasRef;
      }
      if (
        this.sharedDataService.dedicatedMode ||
        this.sharedDataService.isTablet
      ) {
        this.canvasRef.setDimensions({
          width: (window.innerHeight * 50) / 100,
          height: (window.innerHeight * 25) / 100,
        });
      } else {
        this.canvasRef.setDimensions({
          width: window.innerWidth - 46,
          height: (window.innerHeight * 28) / 100,
        });
      }
      this.canvasRef.on("selection:created", () => {
        console.log("selection:created");
      });
      this.canvasRef.on("path:created", () => {
        console.log("path:created");
        this.ngZone.run(() => {
          this.isSignatureFilled = true;
        });
      });
      this.canvasRef.on("selection:cleared", () => {});
      this.canvasRef.freeDrawingBrush.color = "#171538";
      this.canvasRef.freeDrawingBrush.width = 4;
      this.canvasRef.isDrawingMode = true;
    }, 200);
  }

  ionViewWillEnter() {
    this.handleOrientation();
  }

  ionViewDidLeave(): void {
    if (this.sharedDataService.dedicatedMode) {
      if (!UtilService.isLocalHost()) {
        this.screenOrientation.lock(
          this.screenOrientation.ORIENTATIONS.LANDSCAPE
        );
        this.screenOrientationSubscribe.unsubscribe();
      }
    }
  }

  handleOrientation = () => {
    if (this.sharedDataService.dedicatedMode) {
      this.screenOrientationSubscribe = this.screenOrientation
        .onChange()
        .subscribe(() => {
          this.ngZone.run(() => {
            if (this.screenOrientation.type.includes("portrait")) {
            }
            if (this.screenOrientation.type.includes("landscape")) {
            }
            if (this.showDigitalInk) {
              // this.initialiseDrawing();
            }
          });
        });
    }
  };

  isDigitalSignEmpty = () => {
    if (this.canvasRef) {
      return this.canvasRef.isEmpty();
    }
    return true;
  };

  onClose() {
    if (
      this.sharedDataService.signOffFor === EnumService.SignOffType.DOCUMENT_DM
    ) {
      this.navCtrl.navigateBack("/documents-dm");
    } else if (
      this.sharedDataService.signOffFor === EnumService.SignOffType.FORMS_DM
    ) {
      this.navCtrl.navigateBack("/forms-dm");
    } else if (
      this.sharedDataService.signOffFor ===
      EnumService.SignOffType.WORK_PERMIT_DM
    ) {
      this.navCtrl.navigateBack("/permits-dm");
    } else if (
      this.sharedDataService.signOffFor === EnumService.SignOffType.INDUCTION
    ) {
      if (this.sharedDataService.dedicatedMode) {
        this.navCtrl.navigateBack("/dashboard-dm");
      } else {
        this.navCtrl.navigateBack("/checkinout-confirm");
      }
    } else {
      this.navCtrl.back();
    }
  }

  async onContinue() {
    this.errorMessage = "";

    if (this.isConfirm) {
      let downlaodImg;
      if (this.showDigitalInk) {
        this.canvasRef.discardActiveObject();
        downlaodImg = this.canvasRef.toDataURL("jpeg");

        const fileName =
          "signature" + this.utilService.getCurrentTimeStamp() + ".jpeg";
        const mimeType = "image/jpeg";
        if (this.sharedDataService.offlineMode) {
          this.filehandlerService.saveFileOnDevice(
            downlaodImg,
            (status, res) => {
              if (status) {
                this.offlineManagerService
                  .insertImageVideoFile({
                    fileUsedIn: "digitalink",
                    fileName: res,
                  })
                  .then((id: number) => {
                    this.nextStep({
                      imageVideoFileId: id,
                    });
                  });
              }
            }
          );
        } else {
          this.utilService.presentLoadingWithOptions();
          this.utilService.dataUriToFile(downlaodImg, fileName, mimeType).then(
            (file) => {
              this.apiService
                .inductionSignatureUpload(file, fileName)
                .subscribe(
                  (res: Response) => {
                    this.utilService.hideLoading();
                    if (
                      res.StatusCode ===
                      EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                      this.nextStep({ signatureFileName: res.Result });
                    } else {
                      this.errorMessage = res.Message;
                    }
                  },
                  (error) => {
                    this.utilService.hideLoading();
                    this.errorMessage = error.message ? error.message : error;
                  }
                );
            },
            (error) => {
              this.utilService.hideLoading();
            }
          );
        }
      } else {
        this.nextStep();
      }
    }
  }

  nextStep({
    signatureFileName,
    imageVideoFileId,
  }: {
    signatureFileName?: string;
    imageVideoFileId?: number;
  } = {}) {
    switch (this.type) {
      case EnumService.SignOffType.INDUCTION:
        if (this.showDigitalInk) {
          if (this.sharedDataService.offlineMode) {
            if (imageVideoFileId) {
              this.sharedDataService.checkInPostData.digitalInkSignatureImageVideoFileId =
                imageVideoFileId;
            }
          } else {
            if (signatureFileName) {
              this.sharedDataService.checkInPostData.digitalInkSignature =
                signatureFileName;
            }
          }
        }

        if (
          this.sharedDataService.checkInDetail &&
          this.sharedDataService.checkInDetail?.checkInInduction?.isPhotoSignOff
        ) {
          if (this.sharedDataService.dedicatedMode) {
            this.sharedDataService.dedicatedModeCapturePhotoFor =
              EnumService.DedicatedModeCapturePhotoForType.Signoff;
            this.navCtrl.navigateForward(["/checkinout-photoidentity-dm"]);
          } else {
            this.navCtrl.navigateForward(["/signoff-photo"]);
          }
        } else {
          if (this.sharedDataService.checkInPostData.guestPhone) {
            this.sharedDataService.submitInductionCheckInDataGuest(
              this.apiService
            );
          } else {
            this.sharedDataService.submitInductionCheckInData(this.apiService);
          }
        }
        break;

      case EnumService.SignOffType.DOCUMENT_DM:
      case EnumService.SignOffType.DOCUMENT_ACTIVITY:
      case EnumService.SignOffType.DOCUMENT_CURRENT_CHECKIN:
        if (this.showDigitalInk) {
          if (this.sharedDataService.offlineMode) {
            if (imageVideoFileId) {
              this.sharedDataService.signOffDetailsPostData.digitalInkSignatureImageVideoFileId =
                imageVideoFileId;
            }
          } else {
            if (signatureFileName) {
              this.sharedDataService.signOffDetailsPostData.digitalInkSignature =
                signatureFileName;
            }
          }
        }

        if (
          this.sharedDataService.signOffDocumentDetail &&
          this.sharedDataService.signOffDocumentDetail?.isPhotoSignOff
        ) {
          if (this.sharedDataService.dedicatedMode) {
            this.sharedDataService.dedicatedModeCapturePhotoFor =
              EnumService.DedicatedModeCapturePhotoForType.Signoff;
            this.navCtrl.navigateForward(["/checkinout-photoidentity-dm"]);
          } else {
            this.navCtrl.navigateForward(["/signoff-photo"]);
          }
        } else {
          this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
        }
        break;

      case EnumService.SignOffType.FORM_ACTIVITY:
      case EnumService.SignOffType.FORMS_DM:
      case EnumService.SignOffType.WORK_PERMIT_DM:
      case EnumService.SignOffType.FORM_CURRENT_CHECKIN:
      case EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN:
        if (this.showDigitalInk) {
          if (this.sharedDataService.offlineMode) {
            if (imageVideoFileId) {
              this.sharedDataService.signOffDetailsPostData.digitalInkSignatureImageVideoFileId =
                imageVideoFileId;
            }
          } else {
            if (signatureFileName) {
              this.sharedDataService.signOffDetailsPostData.digitalInkSignature =
                signatureFileName;
            }
          }
        }

        if (
          this.sharedDataService.signOffFormDetail &&
          this.sharedDataService.signOffFormDetail?.formData?.isPhotoSignOff
        ) {
          if (this.sharedDataService.dedicatedMode) {
            this.sharedDataService.dedicatedModeCapturePhotoFor =
              EnumService.DedicatedModeCapturePhotoForType.Signoff;
            this.navCtrl.navigateForward(["/checkinout-photoidentity-dm"]);
          } else {
            this.navCtrl.navigateForward(["/signoff-photo"]);
          }
        } else {
          this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
        }
        break;

      default:
      // if (this.sharedDataService.dedicatedMode) {
      //     if (UtilService.randomBoolean()) {
      //         this.navCtrl.navigateForward(['/checkinout-success-dm'], {
      //             queryParams: {
      //                 message: 'You have now checked-in',
      //                 nextPage: 'dashboard-dm'
      //             }
      //         });
      //     } else {
      //         this.navCtrl.navigateForward(['/checkinout-fail-dm'], {
      //             queryParams: {
      //                 failTitle: 'No Qualification',
      //                 failSubTitle: 'Check in Not Allowed',
      //                 failMessage: 'This check-in requires to have certain \n' +
      //                     'qualifications which you do not have.',
      //                 nextPage: 'dashboard-dm'
      //             }
      //         });
      //     }
      // }
    }
  }
}
