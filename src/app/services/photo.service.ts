import {Injectable} from '@angular/core';
import {ActionSheetController, Platform} from '@ionic/angular';
import {CameraDirection, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {ObservablesService} from './observables.service';
import {EnumService} from './enum.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {UtilService} from './util.service';
import {StaticDataService} from './static-data.service';


@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(
        public platform: Platform,
        public actionSheetController: ActionSheetController,
        private observablesService: ObservablesService,
        private camera: Camera
    ) {
    }

    async choosePhotoOption(callBack) {

        const actionSheet = await this.actionSheetController.create({
            header: 'Take photo from',
            cssClass: 'my-custom-class',
            buttons: [{
                text: 'Camera',
                icon: 'camera-outline',
                handler: () => {
                    this.takePhotoFromCamera(callBack);
                }
            }, {
                text: 'Gallery',
                icon: 'images-outline',
                handler: () => {
                    this.takePhotoFromGallery(callBack);
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {

                }
            }]
        });
        await actionSheet.present();
    }

    async takePhotoFromCamera(callBack, isFrontCamera = false, isSquarePhoto = false) {
        const subscribe = this.observablesService.getObservable(EnumService.ObserverKeys.APP_RESTORED_RESULT).subscribe((data) => {
            callBack(data.data);
            subscribe.unsubscribe();
        });
        let allowEditing = false;
        if (this.platform.is('ios') && isSquarePhoto) {
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
            direction: isFrontCamera ? CameraDirection.Front : CameraDirection.Rear
        });
        try {
            callBack(capturedPhoto);
        } catch (e) {
        }
    }

    async takePhotoFromGallery(callBack, isAllMedia = false) {
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
                callBack(capturedPhoto);
            } catch (e) {

            }
        } else {
            const options: CameraOptions = {
                quality: StaticDataService.photoQuality,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: isAllMedia ? this.camera.MediaType.ALLMEDIA : this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                correctOrientation: true,
                targetHeight: StaticDataService.photoMaxHeight
            };

            this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                if (StaticDataService.videoFormats.indexOf(imageData.split('.').pop().toLowerCase()) !== -1) {
                    callBack({dataUrl: imageData, isVideo: true});
                } else {
                    const base64Image = 'data:image/jpeg;base64,' + imageData;
                    callBack({dataUrl: base64Image});
                }
            }, (err) => {
                // Handle error
            });
        }
    }
}
