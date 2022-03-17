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

  public chooseMediaFromAlbum = (callBack: any) => {
    this.triggerUpload(
      "album",
      (media: any) => {
        if (media.indexOf("image") !== -1) {
          callBack && callBack(media, "image");
        } else if (media.indexOf("video") !== -1) {
          callBack && callBack(media, "video");
        } else {
          callBack && callBack(media, "image");
        }
      },
      "photovideo"
    );
  };

  triggerUpload(type = "album", callBack: any = null, mediaType = "photo") {
    let input: any = document.createElement("input");
    input.type = "file";

    if (mediaType === "photo") {
      input.accept = "image/png,image/jpeg";
    } else if (mediaType === "photovideo") {
      input.accept =
        "image/png,image/jpeg,image/jpg,image/gif,video/mov,video/mp4,video/mpeg,video/wmv";
    }
    if (type === "camera") {
      input.capture = "environment";
      // input.capture = 'user'; //for front
    } else {
      // input.capture = 'filesystem';
    }
    input.onchange = (event: any) => {
      const fileCount = event.target.files.length;

      //if (canMultipleSelect && fileCount > 0) {

      for (let index = 0; index < fileCount; index++) {
        let reader = new FileReader();
        const file = event.target.files[index];
        reader.readAsDataURL(file);
        reader.onload = async () => {
          const base64String = reader.result as string;
          base64String.replace("data:", "").replace(/^.+,/, "");
          input = null;
          callBack && callBack(base64String);
        };
        reader.onerror = async () => {
          callBack && callBack("");
        };
      }
      /*} else {
				const file = event.target.files[0];

				//Convert file object to base64 string
				reader.onloadend = async () => {
					const base64String = reader.result as string;
					base64String.replace('data:', '').replace(/^.+,/, '');
					callBack && callBack(base64String);
					input = null;
				};
				reader.readAsDataURL(file);
			}*/
    };
    setTimeout(function () {
      input.click();
    }, 200);
  }

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

    if (UtilService.isLocalHost() || UtilService.isWebApp()) {
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

    this.camera
      .getPicture(options)
      .then((imageData) => {
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
        console.log("Photo get Error " + JSON.stringify(err));
      });
  }
}
