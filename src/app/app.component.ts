import {Component} from '@angular/core';
import {
    PermissionType,
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed,
} from '@capacitor/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import {ObservablesService} from './services/observables.service';
import {EnumService} from './services/enum.service';
import {SharedDataService} from './services/shared-data.service';
import {UtilService} from './services/util.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {AccountService} from './services/account.service';
import {ApiService} from './services/api.service';

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
        private screenOrientation: ScreenOrientation,
        private accountService: AccountService,
        private apiService: ApiService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(async () => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.uniqueDeviceID.get()
                .then((uuid: any) => {
                    this.sharedDataService.deviceUID = uuid;
                    this.checkForAccessKey();
                })
                .catch((error: any) => {
                    console.log(error);
                    this.checkForAccessKey();
                });


            if (this.sharedDataService.isTablet) {
                localStorage.setItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE, 'true');
                this.sharedDataService.dedicatedMode = true;
            } else {
                localStorage.removeItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE);
                this.sharedDataService.dedicatedMode = false;
            }


            this.accountService.getTimeZoneList().subscribe(() => {
            });

            // for test
            // this.sharedDataService.dedicatedMode = true;


            if (this.sharedDataService.dedicatedMode) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

                if (this.sharedDataService.dedicatedModeLocationUse) {
                    if (localStorage.getItem('test_login') !== 'true') {
                        this.navController.navigateRoot('dashboard-dm');
                    }
                } else {
                    this.navController.navigateRoot('choose-location');
                }
            }

            try {
                const notificationPermission = await Permissions.query({
                    name: PermissionType.Notifications
                });
                if (notificationPermission.state !== 'granted') {
                    await PushNotifications.requestPermission().then((result) => {
                        if (result.granted) {
                            // Register with Apple / Google to receive push via APNS/FCM
                            PushNotifications.register();
                        }
                    });
                } else {
                    PushNotifications.register();
                }

                // On success, we should be able to receive notifications
                PushNotifications.addListener('registration',
                    (token: PushNotificationToken) => {
                        this.sharedDataService.pushToken = token.value;
                        console.log('Push registration success, token: ' + token.value);
                    }
                );

                // Show us the notification payload if the app is open on our device
                PushNotifications.addListener('pushNotificationReceived',
                    (notification: PushNotification) => {
                        console.log('Push received: ' + JSON.stringify(notification));
                    }
                );

                // Method called when tapping on a notification
                PushNotifications.addListener('pushNotificationActionPerformed',
                    (notification: PushNotificationActionPerformed) => {
                        console.log('Push action performed: ' + JSON.stringify(notification));
                    }
                );


                const locationPermission = await Permissions.query({
                    name: PermissionType.Geolocation
                });
                if (notificationPermission.state !== 'granted') {
                    await Geolocation.requestPermissions();
                }
            } catch (e) {

            }


            Plugins.App.addListener('appRestoredResult', (data: any) => {
                this.observablesService.publishSomeData(EnumService.ObserverKeys.APP_RESTORED_RESULT, data.data);
            });

            Plugins.App.addListener('backButton', (data: any) => {

            });

        });
    }

    checkForAccessKey = () => {
        if (!localStorage.getItem(EnumService.LocalStorageKeys.API_ACCESS_KEY)) {
            this.utilService.presentLoadingWithOptions();
            this.accountService.getAccessKey().subscribe((data) => {
                this.checkForToken();
            }, error => {
                this.utilService.hideLoading();
            });
        } else {
            this.checkForToken();
        }
    };

    checkForToken = () => {
        if (!localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN)) {
            this.utilService.presentLoadingWithOptions();
            this.accountService.getToken().subscribe((token) => {
                this.utilService.hideLoading();
            }, error => {
                this.utilService.hideLoading();
            });
        }
    };

}
