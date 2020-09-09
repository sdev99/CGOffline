import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    loading: HTMLIonLoadingElement = null;

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
