import { Component, Input } from "@angular/core";
import { PhotoService } from "../../services/photo.service";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SharedDataService } from "../../services/shared-data.service";
import { ActionSheetController, NavController } from "@ionic/angular";
import { StaticDataService } from "../../services/static-data.service";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureVideoOptions,
} from "@ionic-native/media-capture/ngx";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Capacitor } from "@capacitor/core";

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
export class PhotoFieldComponent implements ControlValueAccessor {
  StaticDataService = StaticDataService;

  @Input() label: string;
  image: any;
  private disabled = false;

  isVideo = false;
  videoUrl;

  private onChange: any = (image: any) => {};
  private onTouch: any = () => {};

  constructor(
    public photoService: PhotoService,
    private sanitizer: DomSanitizer,
    private mediaCapture: MediaCapture,
    public navCtrl: NavController,
    public sharedDataService: SharedDataService,
    public actionSheetController: ActionSheetController
  ) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    this.onChange(obj);
    this.image = obj;
  }

  editPhoto() {
    this.openImageAnnotation(this.image);
  }

  photoRemoved() {
    this.photoAdded(null);
  }

  photoAdded(photo) {
    this.writeValue(photo);
    this.onTouch();
  }

  addPhotoFromCamera() {
    this.photoService.takePhotoFromCamera((photo) => {
      this.isVideo = false;
      this.openImageAnnotation(photo);
    });
  }

  addVideoFromCamera() {
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
    this.photoService.takePhotoFromGallery((photo) => {
      if (photo.isVideo) {
        this.isVideo = true;
        const videoUrl = photo.dataUrl;
        this.videoUrl = Capacitor.convertFileSrc(videoUrl);
        this.photoAdded(videoUrl);
      } else {
        this.isVideo = false;
        this.openImageAnnotation(photo);
      }
    }, true);
  }

  tet(path) {
    // this.filehandlerService.saveFileOnDevice(
    //   path,
    //   this.utilService.Uniqueid(),
    //   ()=>{
    //   }
    // );
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
      this.photoAdded(image);
    };
    this.navCtrl.navigateForward(["/image-annotation"]);
  };
}
