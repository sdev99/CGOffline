import { Component, Input, OnDestroy } from "@angular/core";
import { PhotoService } from "../../services/photo.service";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SharedDataService } from "../../services/shared-data.service";
import {
  ActionSheetController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { StaticDataService } from "../../services/static-data.service";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureVideoOptions,
} from "@ionic-native/media-capture/ngx";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Capacitor } from "@capacitor/core";
import { FilehandlerService } from "src/app/services/filehandler.service";
import { UtilService } from "src/app/services/util.service";
import { TranslateService } from "@ngx-translate/core";
import { VideorecordPage } from "src/app/modals/videorecord/videorecord.page";

@Component({
  selector: "app-photo-field",
  templateUrl: "./photo-field.component.html",
  styleUrls: ["./photo-field.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhotoFieldComponent,
      multi: true,
    },
  ],
})
export class PhotoFieldComponent implements ControlValueAccessor, OnDestroy {
  StaticDataService = StaticDataService;
  UtilService = UtilService;
  Capacitor = Capacitor;

  @Input() label: string;
  image: any;
  private disabled = false;

  isVideo = false;
  videoUrl;

  photoThumbnail: any;

  isWebApp: Boolean = UtilService.isWebApp();

  private onChange: any = (image: any) => {};
  private onTouch: any = () => {};

  constructor(
    public photoService: PhotoService,
    private sanitizer: DomSanitizer,
    private mediaCapture: MediaCapture,
    public navCtrl: NavController,
    public translateService: TranslateService,
    public utilService: UtilService,
    public filehandlerService: FilehandlerService,
    public sharedDataService: SharedDataService,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController
  ) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  ngOnDestroy(): void {
    this.image = null;
    this.photoThumbnail = null;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    this.onChange(obj);
    this.image = obj;
  }

  editPhoto() {
    this.openImageAnnotation(Capacitor.convertFileSrc(this.image));
  }

  photoRemoved() {
    this.photoAdded(null);
  }

  photoAdded(photo) {
    this.writeValue(photo);
    this.onTouch();
  }

  addPhotoFromCamera() {
    this.photoService.takePhotoFromNativeCamera((photo) => {
      this.isVideo = false;
      this.savePhoto(photo.dataUrl);
    });
  }

  async addVideoFromCamera() {
    if (UtilService.isWebApp()) {
      const modal = await this.modalController.create({
        component: VideorecordPage,
        swipeToClose: false,
        showBackdrop: false,
        backdropDismiss: false,
        animated: true,
        componentProps: {},
        cssClass: "video-record-modal",
      });
      await modal.present();

      modal.onWillDismiss().then(({ data }) => {
        if (data.status) {
          this.isVideo = true;
          const videoData = data.data;
          this.videoUrl = videoData;
          this.photoAdded(videoData);
        }
      });
    } else {
      const options: CaptureVideoOptions = { limit: 1, duration: 3600 };
      this.mediaCapture.captureVideo(options).then(
        (data: MediaFile[]) => {
          this.isVideo = true;
          const capturedFile = data[0];
          const videoUrl = capturedFile.fullPath;
          this.videoUrl = Capacitor.convertFileSrc(videoUrl);
          this.photoAdded(videoUrl);
        },
        (err: CaptureError) => {
          console.error(err);
        }
      );
    }
  }

  async choosePhotoVideoOption() {
    const actionSheet = await this.actionSheetController.create({
      header: "Choose option",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Photo",
          icon: "camera-outline",
          handler: () => {
            this.addPhotoFromCamera();
          },
        },
        {
          text: "Video",
          icon: "videocam-outline",
          handler: () => {
            this.addVideoFromCamera();
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();
  }

  addPhotoFromLibrary() {
    const onPhotoVideoAdded = (urlOrBase64Data, isVideo) => {
      let extension = "";
      if (UtilService.IsBase64Sring(urlOrBase64Data)) {
        extension = urlOrBase64Data.match(/[^:/]\w+(?=;|,)/)[0];
      } else {
        extension = urlOrBase64Data.split(".").pop().toLowerCase();
      }
      debugger;
      if (isVideo) {
        if (StaticDataService.supportedVideoFormats.indexOf(extension) === -1) {
          this.translateService
            .get("SHARED_TEXT.MEDIA.VIDEO_FORMAT_NOT_SUPPORTED")
            .subscribe((res) => {
              this.utilService.showAlert(res);
            });
        } else {
          this.isVideo = true;
          const videoUrl = urlOrBase64Data;

          if (UtilService.isWebApp()) {
            this.videoUrl = videoUrl;
            this.photoAdded(videoUrl);
          } else {
            this.filehandlerService.saveFileOnDevicePath(
              videoUrl,
              StaticDataService.formImagesFolderName,
              (status, response) => {
                this.photoService.cleanCamera();
                if (status) {
                  this.videoUrl = Capacitor.convertFileSrc(response);
                  this.photoAdded(response);
                }
              }
            );
          }
        }
      } else {
        if (StaticDataService.supportedImageFormats.indexOf(extension) === -1) {
          this.translateService
            .get("SHARED_TEXT.MEDIA.IMAGE_FORMAT_NOT_SUPPORTED")
            .subscribe((res) => {
              this.utilService.showAlert(res);
            });
        } else {
          this.isVideo = false;
          this.savePhoto(urlOrBase64Data);
        }
      }
    };

    if (UtilService.isWebApp()) {
      this.photoService.chooseMediaFromAlbum((result, type) => {
        onPhotoVideoAdded(result, type === "video");
      });
    } else {
      this.photoService.takePhotoFromGallery(
        (photo) => {
          onPhotoVideoAdded(photo.dataUrl, photo.isVideo);
        },
        true,
        true
      );
    }
  }

  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  // Allow the Angular form control to disable this input
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  openImageAnnotation = (photo) => {
    this.sharedDataService.isOpenSubScreen = true;
    this.sharedDataService.setAnnotationImage(photo);
    this.sharedDataService.onAnnotationImageDone = (image) => {
      this.savePhoto(image);
      this.sharedDataService.setAnnotationImage(null);
      this.sharedDataService.onAnnotationImageDone = null;
    };
    this.navCtrl.navigateForward(["/image-annotation"]);
  };

  savePhoto(imageBase64) {
    if (UtilService.isWebApp()) {
      this.utilService.generateThumbnailFromImage(
        imageBase64,
        500,
        500,
        0.5,
        (data) => {
          this.photoThumbnail = data;
          this.photoAdded(imageBase64);
        }
      );
    } else {
      this.utilService.generateThumbnailFromImage(
        UtilService.IsBase64Sring(imageBase64)
          ? imageBase64
          : Capacitor.convertFileSrc(imageBase64),
        500,
        500,
        0.25,
        (data) => {
          this.photoThumbnail = data;
          this.filehandlerService.saveFileOnDevicePath(
            imageBase64,
            StaticDataService.formImagesFolderName,
            (status, response) => {
              this.photoService.cleanCamera();
              if (status) {
                this.photoAdded(response);
              }
            }
          );
        }
      );
    }
  }
}
