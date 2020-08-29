import {Injectable} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {
    Plugins, CameraResultType, CameraSource
} from '@capacitor/core';

const {Camera} = Plugins;


@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(
        public actionSheetController: ActionSheetController
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

    async takePhotoFromCamera(callBack) {
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });
        callBack(capturedPhoto);
    }

    async takePhotoFromGallery(callBack) {
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Photos,
            quality: 100
        });
        callBack(capturedPhoto);
    }
}
