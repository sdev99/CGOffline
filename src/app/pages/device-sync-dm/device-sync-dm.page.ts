import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {UtilService} from '../../services/util.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-device-sync-dm',
    templateUrl: './device-sync-dm.page.html',
    styleUrls: ['./device-sync-dm.page.scss'],
})
export class DeviceSyncDmPage implements OnInit {
    synchProgressState = 'pending';
    // synchProgressState = 'processing';
    // synchProgressState = 'completed';

    progress = 0;

    constructor(
        public navController: NavController,
        public alertController: AlertController,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((data) => {
            if (data && data.startSync) {
                this.onSync();
            }
        });
    }

    ngOnInit() {

    }


    async onClose() {
        if (this.synchProgressState === 'processing') {
            const alert = await this.alertController.create({
                header: 'Quit Synchronisation!',
                message: 'You are about to quit the device sync. Once quitted the current sync will be cancelled and sync progress will be lost. Are you sure you want to exit?',
                translucent: true,
                keyboardClose: false,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.navController.back();
                        }
                    }
                ]
            });

            await alert.present();
        } else {
            this.navController.back();
        }
    }

    onSync() {
        this.progress = 0;
        this.synchProgressState = 'processing';
        const interval = setInterval(() => {
            if (this.progress === 100) {
                clearInterval(interval);
                if (UtilService.randomBoolean()) {
                    this.synchProgressState = 'completed';
                } else {
                    if (UtilService.randomBoolean()) {
                        this.synchProgressState = 'failed';
                    } else {
                        this.synchProgressState = 'networkerror';
                    }
                }
            } else {
                this.progress = this.progress + 5;
            }
        }, 100);
    }

    onContinue() {
        this.navController.back();
    }

}
