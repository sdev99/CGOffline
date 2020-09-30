import {Injectable} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {
    Plugins, CameraResultType, CameraSource, AppRestoredResult
} from '@capacitor/core';
import {ObservablesService} from './observables.service';
import {EnumService} from './enum.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';


@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(
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
                    this.takePhotoFromCordovaCamera(callBack);
                }
            }, {
                text: 'Gallery',
                icon: 'images-outline',
                handler: () => {
                    this.takePhotoFromCordovaGallery(callBack);
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

    async takePhotoFromCordovaCamera(callBack) {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            callBack({
                dataUrl: base64Image,
                format: 'image/jpeg'
            });
        }, (err) => {
            // Handle error
            this.takePhotoFromCamera(callBack);
        });

    }

    async takePhotoFromCordovaGallery(callBack) {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            callBack({
                dataUrl: base64Image,
                format: 'image/jpeg'
            });
        }, (err) => {
            // Handle error
            this.takePhotoFromGallery(callBack);
        });
    }

    async takePhotoFromCamera(callBack) {
        const subscribe = this.observablesService.getObservable(EnumService.ObserverKeys.APP_RESTORED_RESULT).subscribe((data) => {
            callBack(data.data);
            subscribe.unsubscribe();
        });
        const capturedPhoto = await Plugins.Camera.getPhoto({
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Camera,
            quality: 100
        });
        try {
            callBack(capturedPhoto);
        } catch (e) {

        }
    }

    async takePhotoFromGallery(callBack) {
        const capturedPhoto = await Plugins.Camera.getPhoto({
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Photos,
            quality: 100
        });
        try {
            callBack(capturedPhoto);
        } catch (e) {

        }
    }
}
