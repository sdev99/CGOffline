import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

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

    constructor(
        private loadingController: LoadingController
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


}
