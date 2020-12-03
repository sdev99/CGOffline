import {Injectable} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {EnumService} from './enum.service';
import {SharedDataService} from './shared-data.service';

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
    loadingStarting = false;
    loadingStopping = false;

    static InductionContentTypeScreenIdentify(contentType) {
        let routeName = '';
        switch (contentType) {
            case EnumService.InductionContentTypes.VIDEO_FILE:
                routeName = 'checkin-induction-video-file';
                break;
            case EnumService.InductionContentTypes.IMAGE_FILE:
                routeName = 'checkin-induction-image-file';
                break;
            case EnumService.InductionContentTypes.RICH_TEXT:
                routeName = 'checkin-induction-rich-text';
                break;
            case EnumService.InductionContentTypes.FORM:
                // routeName = 'checkin-induction-form';
                routeName = 'form-cover';
                break;
            case EnumService.InductionContentTypes.VISITOR_AGREEMENT:
                routeName = 'checkin-induction-va';
                break;
        }
        return routeName;
    }

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


    static getQueryStringValue = (url, key) => {
        return decodeURIComponent(url.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
    };

    static fireCallBack(callBack = null, data = null) {
        if (callBack) {
            callBack(data);
        }
    }

    constructor(
        private loadingController: LoadingController,
        private alertController: AlertController,
        private navCtrl: NavController,
    ) {
    }

    async startLoadingWithOptions(message = ''): Promise<HTMLIonLoadingElement> {
        const loading = await this.loadingController.create({
            cssClass: 'my-loading-class',
            spinner: null,
            message: '<ion-icon src="./assets/icon/Loader.svg"/>',
            translucent: false,
            backdropDismiss: false,
            mode: 'md'
        });
        await loading.present();
        return loading;
    }

    async hideLoadingFor(loading: HTMLIonLoadingElement) {
        loading.dismiss();
        loading = null;
    }

    dataUriToFile(url, filename, mimeType) {
        return new Promise((resolve, reject) => {
            const byteString = window.atob(url.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }
            const imageBlob = new Blob([int8Array], {type: mimeType});
            resolve(imageBlob);
        });
    }

    presentLoadingWithOptions(message = '') {
        console.log('Show loading');
        if (!this.loading && !this.loadingStarting) {
            this.loadingStarting = true;
            console.log('Show loading 1');
            this.loadingController.create({
                cssClass: 'my-loading-class',
                spinner: null,
                message: '<ion-icon src="./assets/icon/Loader.svg"/>',
                translucent: false,
                backdropDismiss: false,
                mode: 'md'
            }).then((loading) => {
                this.loading = loading;
                this.loadingStarting = false;
                this.loading.present();
            });
        }
    }

    hideLoading() {
        console.log('Hide loading');
        if (this.loading) {
            this.loading.dismiss();
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

    getCurrentTimeStamp() {
        return Math.floor(Date.now());
    }

    getCurrentDateTIme() {
        return new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

}
