import { Injectable } from "@angular/core";
import { ActionSheetController, Platform } from "@ionic/angular";
import {
  CameraDirection,
  CameraResultType,
  CameraSource,
  Plugins,
} from "@capacitor/core";
import { ObservablesService } from "./observables.service";
import { EnumService } from "./enum.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { UtilService } from "./util.service";
import { StaticDataService } from "./static-data.service";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(
    public platform: Platform,
    public actionSheetController: ActionSheetController,
    private observablesService: ObservablesService,
    private camera: Camera
  ) {}

  async takePhotoFromNativeCamera(
    callBack,
    isFrontCamera = false,
    isSquarePhoto = false
  ) {
    const subscribe = this.observablesService
      .getObservable(EnumService.ObserverKeys.APP_RESTORED_RESULT)
      .subscribe((data) => {
        callBack(data.data);
        subscribe.unsubscribe();
      });

    let allowEditing = false;
    if (this.platform.is("ios") && isSquarePhoto) {
      allowEditing = true;
    }

    if (UtilService.isLocalHost()) {
      const capturedPhoto = await Plugins.Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: StaticDataService.photoQuality,
        allowEditing,
        height: StaticDataService.photoMaxHeight,
        correctOrientation: true,
        preserveAspectRatio: true,
        direction: isFrontCamera ? CameraDirection.Front : CameraDirection.Rear,
      });
      try {
        subscribe.unsubscribe();
        if (capturedPhoto) {
          callBack(capturedPhoto);
        }
      } catch (err) {
        console.log("Photo get Error " + JSON.stringify(err));
      }
    } else {
      const options: CameraOptions = {
        quality: StaticDataService.photoQuality,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true,
        allowEdit: allowEditing,
        targetHeight: StaticDataService.photoMaxHeight,
        cameraDirection: isFrontCamera
          ? this.camera.Direction.FRONT
          : this.camera.Direction.BACK,
      };

      this.camera.getPicture(options).then(
        (imageData) => {
          // const base64Image = "data:image/jpeg;base64," + imageData;
          if (imageData) {
            callBack({ dataUrl: imageData });
          }
          subscribe.unsubscribe();
        },
        (err) => {
          // Handle error
          console.log("Photo get Error " + JSON.stringify(err));
        }
      );
    }
  }

  cleanCamera() {
    this.camera.cleanup().then(() => {});
  }

  async takePhotoFromCamera(
    callBack,
    isFrontCamera = false,
    isSquarePhoto = false
  ) {
    const subscribe = this.observablesService
      .getObservable(EnumService.ObserverKeys.APP_RESTORED_RESULT)
      .subscribe((data) => {
        callBack(data.data);
        subscribe.unsubscribe();
      });
    let allowEditing = false;
    if (this.platform.is("ios") && isSquarePhoto) {
      allowEditing = true;
    }

    const capturedPhoto = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: StaticDataService.photoQuality,
      allowEditing,
      height: StaticDataService.photoMaxHeight,
      correctOrientation: true,
      preserveAspectRatio: true,
      direction: isFrontCamera ? CameraDirection.Front : CameraDirection.Rear,
    });
    try {
      if (capturedPhoto) {
        callBack(capturedPhoto);
      }
    } catch (err) {
      console.log("Photo get Error " + JSON.stringify(err));
    }
  }

  async takePhotoFromGallery(callBack, isAllMedia = false, isFileUrl = false) {
    if (UtilService.isLocalHost()) {
      const capturedPhoto = await Plugins.Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        quality: StaticDataService.photoQuality,
        height: StaticDataService.photoMaxHeight,
        preserveAspectRatio: true,
        correctOrientation: true,
      });
      try {
        if (capturedPhoto) {
          callBack(capturedPhoto);
        }
      } catch (err) {
        console.log("Photo get Error " + JSON.stringify(err));
      }
    } else {
      const options: CameraOptions = {
        quality: StaticDataService.photoQuality,
        destinationType: isFileUrl
          ? this.camera.DestinationType.FILE_URI
          : this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: isAllMedia
          ? this.camera.MediaType.ALLMEDIA
          : this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true,
        targetHeight: StaticDataService.photoMaxHeight,
      };

      debugger;
      this.camera
        .getPicture(options)
        .then((imageData) => {
          debugger;
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          if (imageData) {
            if (
              StaticDataService.videoFormats.indexOf(
                imageData.split(".").pop().toLowerCase()
              ) !== -1
            ) {
              callBack({ dataUrl: imageData, isVideo: true });
            } else {
              if (isFileUrl) {
                callBack({ dataUrl: imageData.split("?")[0] });
              } else {
                const base64Image = "data:image/jpeg;base64," + imageData;
                callBack({ dataUrl: base64Image });
              }
            }
          }
        })
        .catch((err) => {
          debugger;
          console.log("Photo get Error " + JSON.stringify(err));
        });
    }
  }
}
