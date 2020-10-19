import {Injectable} from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';

declare global {
    interface Array<T> {
        clone(): Array<T>;
    }
}

Array.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this));
};

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    loading: HTMLIonLoadingElement = null;

    static FileIcon(type) {
        let iconName = '';
        switch (type) {
            case 'document':
                iconName = 'attachment1';
                break;
            case 'pdf':
                iconName = 'attachment2';
                break;
            case 'form':
                iconName = 'attachment3';
                break;
            case 'folder':
                iconName = 'attachment4';
                break;
            case 'image':
                iconName = 'attachment5';
                break;
            case 'video':
                iconName = 'attachment6';
                break;
            default:
                iconName = 'attachment1';

        }
        return './assets/icon/' + iconName + '.svg';
    }


    static findObj(list, key, value, defaultIndex = 0) {
        let resultData = list[defaultIndex];
        list.map((data) => {
            if (data[key] === value) {
                resultData = data;
                return;
            }
        });
        return resultData;
    }

    static randomBoolean() {
        return Math.round(Math.random());
    }

    constructor(
        private loadingController: LoadingController,
        public alertController: AlertController,
    ) {
    }

    async presentLoadingWithOptions(message = '') {
        this.loading = await this.loadingController.create({
            cssClass: 'my-loading-class',
            spinner: null,
            duration: 10000,
            message: '<ion-icon src="./assets/icon/Loader.svg"/>',
            translucent: false,
            backdropDismiss: false,
            mode: 'md'
        });
        await this.loading.present();

        const {role, data} = await this.loading.onDidDismiss();
        console.log('Loading dismissed with role:', role);
    }

    async hideLoading() {
        if (this.loading) {
            await this.loading.dismiss();
            this.loading = null;
        }
    }

    async showAlert(message = '', title = '', callBack = null) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: callBack
                }
            ]
        });

        await alert.present();
    }

     getCurrentDateTIme() {
        return new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
}
