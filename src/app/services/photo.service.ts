import {Injectable} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {CameraDirection, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {ObservablesService} from './observables.service';
import {EnumService} from './enum.service';


@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(
        public actionSheetController: ActionSheetController,
        private observablesService: ObservablesService,
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

    async takePhotoFromCamera(callBack, isFrontCamera = false) {
        const subscribe = this.observablesService.getObservable(EnumService.ObserverKeys.APP_RESTORED_RESULT).subscribe((data) => {
            callBack(data.data);
            subscribe.unsubscribe();
        });
        const capturedPhoto = await Plugins.Camera.getPhoto({
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Camera,
            quality: 70,
            width: 500,
            height: 500,
            direction: isFrontCamera ? CameraDirection.Front : CameraDirection.Rear
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
            quality: 70,
            width: 500,
            height: 500,
        });
        try {
            callBack(capturedPhoto);
        } catch (e) {

        }
    }
}
