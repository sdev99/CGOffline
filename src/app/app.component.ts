import {Component} from '@angular/core';
import {PermissionType, Plugins} from '@capacitor/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import {ObservablesService} from './services/observables.service';
import {EnumService} from './services/enum.service';
import {SharedDataService} from './services/shared-data.service';
import {UtilService} from './services/util.service';

const {Geolocation, PushNotifications, Permissions} = Plugins;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private uniqueDeviceID: UniqueDeviceID,
        private sharedDataService: SharedDataService,
        private utilService: UtilService,
        private observablesService: ObservablesService,
        private navController: NavController,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(async () => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            if (this.sharedDataService.isTablet) {
                localStorage.setItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE, 'true');
                this.sharedDataService.dedicatedMode = true;
            } else {
                localStorage.removeItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE);
                this.sharedDataService.dedicatedMode = false;
            }


            if (this.sharedDataService.dedicatedMode) {
                this.navController.navigateRoot('choose-location');
            }

            try {
                const notificationPermission = await Permissions.query({
                    name: PermissionType.Notifications
                });
                if (notificationPermission.state !== 'granted') {
                    await PushNotifications.requestPermission();
                }
                const locationPermission = await Permissions.query({
                    name: PermissionType.Geolocation
                });
                if (notificationPermission.state !== 'granted') {
                    await Geolocation.requestPermissions();
                }
            } catch (e) {

            }


            this.uniqueDeviceID.get()
                .then((uuid: any) => {
                    this.sharedDataService.deviceUID = uuid;
                })
                .catch((error: any) => console.log(error));

            Plugins.App.addListener('appRestoredResult', (data: any) => {
                this.observablesService.publishSomeData(EnumService.ObserverKeys.APP_RESTORED_RESULT, data.data);
            });

            Plugins.App.addListener('backButton', (data: any) => {

            });

        });
    }
}
