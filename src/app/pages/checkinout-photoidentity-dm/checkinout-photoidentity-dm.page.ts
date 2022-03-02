import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions,
} from "@ionic-native/camera-preview/ngx";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../../services/shared-data.service";
import { EnumService } from "../../services/enum.service";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { Response } from "../../_models";
import { PhotoService } from "../../services/photo.service";
import { StaticDataService } from "../../services/static-data.service";
import { FilehandlerService } from "src/app/services/filehandler.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";

@Component({
  selector: "app-checkinout-photoidentity-dm",
  templateUrl: "./checkinout-photoidentity-dm.page.html",
  styleUrls: ["./checkinout-photoidentity-dm.page.scss"],
})
export class CheckinoutPhotoidentityDmPage implements OnInit {
  @ViewChild("imagePreview", { read: ElementRef }) imagePreview: ElementRef;
  @ViewChild("headerView") headerView: any;
  @ViewChild("content", { read: ElementRef }) content: ElementRef;

  // For PWA app QR Scanning
  @ViewChild("video") video: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;
  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  videoStream: any = null;

  isWebApp = UtilService.isWebApp();

  //

  authFor = "Check In/Out by Name";
  photoCaptured: any;
  nextPage;

  errorMessage;

  viewLoaded = false;

  constructor(
    public navController: NavController,
    private cameraPreview: CameraPreview,
    public activatedRoute: ActivatedRoute,
    public sharedDataService: SharedDataService,
    public filehandlerService: FilehandlerService,
    public offlineManagerService: OfflineManagerService,
    public apiService: ApiService,
    public utilService: UtilService,
    public photoService: PhotoService
  ) {
    if (
      sharedDataService.dedicatedModeCapturePhotoFor ===
        EnumService.DedicatedModeCapturePhotoForType.Auth ||
      sharedDataService.dedicatedModeCapturePhotoFor ===
        EnumService.DedicatedModeCapturePhotoForType.LocationPhoto
    ) {
      if (
        this.sharedDataService.checkinoutDmAs ===
        EnumService.CheckInType.AS_GUEST
      ) {
        this.authFor = "Check In/Out as Guest";
      } else {
        this.authFor = "Check In/Out by Name";
      }
    } else if (
      sharedDataService.dedicatedModeCapturePhotoFor ===
      EnumService.DedicatedModeCapturePhotoForType.Signoff
    ) {
      this.authFor = "Sign-Off";
    }
  }

  ngOnInit() {}

  ionViewDidEnter = () => {
    setTimeout(() => {
      this.viewLoaded = true;

      if (this.isWebApp) {
        this.canvasElement = this.canvas.nativeElement;
        this.canvasContext = this.canvasElement.getContext("2d");
        this.videoElement = this.video.nativeElement;
      }

      this.startCamera();
    }, 100);
  };

  ionViewWillLeave = () => {
    if (this.isWebApp) {
      this.stopPhotoScanning();
    } else {
      this.cameraPreview.stopCamera();
    }
  };

  ionViewWillEnter() {
    const element = this.imagePreview.nativeElement;
    element.style.width = element.offsetHeight + "px";
  }

  stopPhotoScanning = () => {
    this.scanActive = false;
    this.videoStream.getTracks().forEach(function (track) {
      if (track.readyState == "live") {
        track.stop();
      }
    });
    this.videoStream = null;
    const vid = this.videoElement;
    const canvasContext = this.canvasContext;
    const canvasElement = this.canvasElement;
    debugger;
  };

  photoScanning = async () => {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      const element = this.imagePreview.nativeElement;
      const header = this.headerView.el;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      // const imageData = this.canvasContext.getImageData(
      //   element.offsetLeft,
      //   header.offsetHeight + element.offsetTop,
      //   element.offsetWidth,
      //   element.offsetHeight
      // );

      // imageData.data, imageData.width, imageData.height;

      if (!this.photoCaptured) {
        requestAnimationFrame(this.photoScanning);
      }
    } else {
      requestAnimationFrame(this.photoScanning);
    }
  };

  startCamera = () => {
    if (this.isWebApp) {
      this.scanActive = true;

      const startScan = async () => {
        // Not working on iOS standalone mode!
        if (!this.videoStream) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "user",
            },
          });
          this.videoStream = stream;
          this.videoElement.srcObject = stream;
          // Required for Safari
          this.videoElement.setAttribute("playsinline", true);

          this.videoElement.play();
          requestAnimationFrame(this.photoScanning);
        }
      };

      startScan();
    } else {
      const element = this.imagePreview.nativeElement;
      const header = this.headerView.el;

      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const left = element.offsetLeft;
      const top = header.offsetHeight + element.offsetTop;

      const disableExifHeaderStripping = localStorage.getItem(
        StaticDataService.disableExifHeaderStripping
      );

      const cameraPreviewOpts: CameraPreviewOptions = {
        camera: "front",
        width,
        height,
        x: left,
        y: top,
        // tapPhoto: true,
        // previewDrag: true,
        toBack: true,
        alpha: 1,
        disableExifHeaderStripping: disableExifHeaderStripping ? true : false,
      };
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };

  onBack() {
    this.navController.back();
  }

  takePhoto() {
    if (this.photoCaptured) {
      this.photoCaptured = null;
      this.startCamera();
    } else {
      if (this.isWebApp) {
        this.photoCaptured = this.canvasElement.toDataURL("image/png");
        this.stopPhotoScanning();
      } else {
        const pictureOpts: CameraPreviewPictureOptions = {
          quality: StaticDataService.photoQuality,
          width: StaticDataService.photoMaxHeight,
          height: StaticDataService.photoMaxHeight,
        };

        this.cameraPreview.takePicture(pictureOpts).then(
          (imageData) => {
            this.photoCaptured = "data:image/jpeg;base64," + imageData;
            this.cameraPreview.stopCamera();
          },
          (err) => {
            console.log(err);
            this.photoCaptured = "./assets/images/ProfileNone.png";
          }
        );
      }
    }
  }

  onContinue() {
    if (this.sharedDataService.offlineMode) {
      this.filehandlerService.saveFileOnDevice(
        this.photoCaptured,
        (status, res) => {
          if (status) {
            this.offlineManagerService
              .insertImageVideoFile({
                fileName: res,
                fileUsedIn: "checkinout",
              })
              .then((id: number) => {
                if (
                  (this.sharedDataService.dedicatedModeCapturePhotoFor ===
                    EnumService.DedicatedModeCapturePhotoForType.Auth ||
                    this.sharedDataService.dedicatedModeCapturePhotoFor ===
                      EnumService.DedicatedModeCapturePhotoForType
                        .LocationPhoto) &&
                  this.sharedDataService.dedicatedModeProcessType ===
                    EnumService.DedicatedModeProcessTypes.CheckinOut
                ) {
                  this.sharedDataService.dedicatedModeCapturedSelfieForCheckinProcess =
                    id;
                }

                this.processToNextScreen({
                  photoImageVideoFileId: id,
                });
              });
          } else {
            this.errorMessage = res;
          }
        }
      );
    } else {
      const fileName =
        "photo" + this.utilService.getCurrentTimeStamp() + ".jpeg";
      const mimeType = "image/jpeg";

      this.utilService
        .dataUriToFile(this.photoCaptured, fileName, mimeType)
        .then((file) => {
          if (
            (this.sharedDataService.dedicatedModeCapturePhotoFor ===
              EnumService.DedicatedModeCapturePhotoForType.Auth ||
              this.sharedDataService.dedicatedModeCapturePhotoFor ===
                EnumService.DedicatedModeCapturePhotoForType.LocationPhoto) &&
            this.sharedDataService.dedicatedModeProcessType ===
              EnumService.DedicatedModeProcessTypes.CheckinOut
          ) {
            this.checkInPhotoUpload(file, fileName, (photoName) => {
              this.sharedDataService.dedicatedModeCapturedSelfieForCheckinProcess =
                photoName;
              this.processToNextScreen({ photoName });
            });
          } else {
            this.uploadInductionPhoto(file, fileName, (photoName) => {
              this.processToNextScreen({ photoName });
            });
          }
        });
    }

    // if (this.nextPage) {
    //     this.navController.navigateForward(this.nextPage);
    // } else if (this.authFor === 'Authentication') {
    //     this.navController.navigateForward('/form-cover-dm');
    // } else {
    //     this.navController.navigateRoot('dashboard-dm');
    // }
  }

  /**
   * Upload photo for  signoff
   */
  uploadInductionPhoto = (file, fileName = "", callBack = null) => {
    this.utilService.presentLoadingWithOptions();
    this.apiService.inductionPhotoUpload(file, fileName).subscribe(
      (res: Response) => {
        this.utilService.hideLoading();
        if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
          UtilService.fireCallBack(callBack, res.Result);
        } else {
          this.errorMessage = res.Message;
        }
      },
      (error) => {
        this.utilService.hideLoading();
        this.errorMessage = error.message ? error.message : error;
      }
    );
  };

  checkInPhotoUpload = async (file, fileName = "", callBack = null) => {
    this.utilService.presentLoadingWithOptions();

    this.apiService.checkInPhotoUpload(file, fileName).subscribe(
      (res: Response) => {
        this.utilService.hideLoading();
        if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
          UtilService.fireCallBack(callBack, res.Result);
        } else {
          this.errorMessage = res.Message;
        }
      },
      (error) => {
        this.utilService.hideLoading();
        this.errorMessage = error.message ? error.message : error;
      }
    );
  };

  processToNextScreen = ({
    photoName,
    photoImageVideoFileId,
  }: { photoName?: string; photoImageVideoFileId?: number } = {}) => {
    if (
      this.sharedDataService.dedicatedModeCapturePhotoFor ===
      EnumService.DedicatedModeCapturePhotoForType.Auth
    ) {
      switch (this.sharedDataService.dedicatedModeProcessType) {
        case EnumService.DedicatedModeProcessTypes.CheckinOut: {
          switch (this.sharedDataService.checkinoutDmAs) {
            case EnumService.CheckInType.AS_GUEST:
              if (this.sharedDataService.offlineMode) {
                this.sharedDataService.dedicatedModeGuestDetail.guestPhotoImageVideoFileId =
                  photoImageVideoFileId;
              } else {
                this.sharedDataService.dedicatedModeGuestDetail.guestPhoto =
                  photoName;
              }
              const isGuestReturning = true;
              this.sharedDataService.getCheckinDetailsGuest(
                this.apiService,
                isGuestReturning
              );
              break;
            case EnumService.CheckInType.MY_NAME:
              this.sharedDataService.getCheckinDetailsForDedicatedMode(
                this.sharedDataService.dedicatedModeUserDetail?.userId,
                this.apiService,
                photoName
              );
              break;
          }
          break;
        }
        case EnumService.DedicatedModeProcessTypes.Document:
          this.sharedDataService.dedicatedModeDocumentSignOffProcess(photoName);
          break;
        case EnumService.DedicatedModeProcessTypes.Form:
          this.sharedDataService.dedicatedModeFormSignOffProcess(photoName);
          break;
        case EnumService.DedicatedModeProcessTypes.WorkPermit:
          this.sharedDataService.dedicatedModeWorkPermitSignOffProcess(
            photoName
          );
          break;
        default:
      }
    } else if (
      this.sharedDataService.dedicatedModeCapturePhotoFor ===
      EnumService.DedicatedModeCapturePhotoForType.LocationPhoto
    ) {
      switch (this.sharedDataService.checkinoutDmAs) {
        case EnumService.CheckInType.AS_GUEST:
          if (this.sharedDataService.offlineMode) {
            this.sharedDataService.checkInPostData.guestPhotoImageVideoFileId =
              photoImageVideoFileId;
          } else {
            this.sharedDataService.checkInPostData.guestPhoto = photoName;
          }
          break;
        case EnumService.CheckInType.MY_NAME:
          if (this.sharedDataService.offlineMode) {
            this.sharedDataService.checkInPostData.userPhotoImageVideoFileId =
              photoImageVideoFileId;
          } else {
            this.sharedDataService.checkInPostData.userPhoto = photoName;
          }
          break;
      }
      this.sharedDataService.processCheckinDetailsStepInduction(
        this.apiService,
        this.sharedDataService.checkinoutDmAs ===
          EnumService.CheckInType.AS_GUEST
      );
    } else if (
      this.sharedDataService.dedicatedModeCapturePhotoFor ===
      EnumService.DedicatedModeCapturePhotoForType.Signoff
    ) {
      switch (this.sharedDataService.signOffFor) {
        case EnumService.SignOffType.INDUCTION:
          if (this.sharedDataService.offlineMode) {
            this.sharedDataService.checkInPostData.userSignaturePhotoImageVideoFileId =
              photoImageVideoFileId;
          } else {
            this.sharedDataService.checkInPostData.userSignaturePhoto =
              photoName;
          }
          this.sharedDataService.processCheckinDetailsStepSubmit(
            this.apiService,
            this.sharedDataService.checkinoutDmAs ===
              EnumService.CheckInType.AS_GUEST
          );
          break;

        case EnumService.SignOffType.DOCUMENT_DM:
        case EnumService.SignOffType.FORMS_DM:
        case EnumService.SignOffType.WORK_PERMIT_DM:
          if (this.sharedDataService.offlineMode) {
            this.sharedDataService.signOffDetailsPostData.userSignaturePhotoImageVideoFileId =
              photoImageVideoFileId;
          } else {
            this.sharedDataService.signOffDetailsPostData.userSignaturePhoto =
              photoName;
          }
          this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
          break;

        default:
      }
    }
  };

  onClose() {
    if (
      this.sharedDataService.dedicatedModeCapturePhotoFor ===
        EnumService.DedicatedModeCapturePhotoForType.Auth ||
      this.sharedDataService.dedicatedModeCapturePhotoFor ===
        EnumService.DedicatedModeCapturePhotoForType.LocationPhoto
    ) {
      this.navController.navigateRoot("dashboard-dm", { replaceUrl: true });
    } else if (
      this.sharedDataService.dedicatedModeCapturePhotoFor ===
      EnumService.DedicatedModeCapturePhotoForType.Signoff
    ) {
      if (
        this.sharedDataService.signOffFor === EnumService.SignOffType.INDUCTION
      ) {
        this.navController.navigateRoot("/dashboard-dm", { replaceUrl: true });
      } else if (
        this.sharedDataService.signOffFor ===
        EnumService.SignOffType.DOCUMENT_DM
      ) {
        this.navController.navigateRoot("/documents-dm", { replaceUrl: true });
      } else if (
        this.sharedDataService.signOffFor === EnumService.SignOffType.FORMS_DM
      ) {
        this.navController.navigateRoot("/forms-dm", { replaceUrl: true });
      } else if (
        this.sharedDataService.signOffFor ===
        EnumService.SignOffType.WORK_PERMIT_DM
      ) {
        this.navController.navigateRoot("/permits-dm", { replaceUrl: true });
      }
    }
  }
}
