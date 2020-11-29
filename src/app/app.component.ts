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
import {NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {Capacitor} from '@capacitor/core';

const {Geolocation, PushNotifications, Permissions, App} = Plugins;

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
        private router: Router,
        private zone: NgZone
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(async () => {

            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.setupDeepLink();

            this.uniqueDeviceID.get()
                .then((uuid: any) => {
                    this.sharedDataService.deviceUID = uuid;
                    this.checkForAccessKey();
                })
                .catch((error: any) => {
                    console.log(error);
                    this.checkForAccessKey();
                });

            Plugins.App.addListener('appRestoredResult', (data: any) => {
                this.observablesService.publishSomeData(EnumService.ObserverKeys.APP_RESTORED_RESULT, data.data);
            });

            Plugins.App.addListener('backButton', (data: any) => {

            });
        });
    }

    setupDeepLink = () => {
        // reset password url https://cg.utopia-test.com/Login/ResetPassword?code=TTQ4LOM8
        // setup new account https://cg.utopia-test.com/Login/AccountSetup/545a1db3-f91c-48eb-be17-b9e4dd346322

        App.addListener('appUrlOpen', (data: any) => {
            this.zone.run(() => {
                // Example url: https://beerswift.app/tabs/tab2
                // slug = /tabs/tab2
                const url = data.url;
                if (url.indexOf('ResetPassword') !== -1) {
                    const code = UtilService.getQueryStringValue(url, 'code');
                    this.router.navigate(['forgot-password-reset'], {
                        queryParams: {
                            code
                        }
                    });
                } else if (url.indexOf('AccountSetup') !== -1) {
                    const userId = url.split('/').pop();
                    this.router.navigate(['new-account-setup'], {
                        queryParams: {
                            userId
                        }
                    });
                }
            });
        });
    };

    checkForAccessKey = async () => {
        if (!localStorage.getItem(EnumService.LocalStorageKeys.API_ACCESS_KEY)) {
            const loading = await this.utilService.startLoadingWithOptions();
            this.accountService.getAccessKey().subscribe((data) => {
                this.utilService.hideLoadingFor(loading);
                this.checkForToken();
            }, error => {
                this.utilService.hideLoadingFor(loading);
            });
        } else {
            this.checkForToken();
        }
    };

    checkForToken = async () => {
        if (!localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN)) {
            const loading = await this.utilService.startLoadingWithOptions();
            this.accountService.getToken().subscribe((token) => {
                this.utilService.hideLoadingFor(loading);
                this.checkDeviceForDedicatedMode();
            }, error => {
                this.utilService.hideLoadingFor(loading);
            });
        } else {
            this.checkDeviceForDedicatedMode();
        }
    };

    checkDeviceForDedicatedMode = async () => {
        this.apiService.getTimeZoneList().subscribe(() => {
        });

        const loading = await this.utilService.startLoadingWithOptions();
        this.accountService.getDeviceDetails(this.sharedDataService.deviceUID).subscribe((data) => {

            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful && data.Result && data.Result.companyID) {
                if (this.sharedDataService.isTablet) {
                    localStorage.setItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE, 'true');
                    localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL, JSON.stringify(data.Result));
                    this.sharedDataService.dedicatedMode = true;
                    this.sharedDataService.dedicatedModeDeviceDetailData = data.Result;
                    this.configureAppForDedicatedMode();
                    setTimeout(() => {
                        this.utilService.hideLoadingFor(loading);
                    }, 500);
                } else {
                    this.utilService.hideLoadingFor(loading);
                    localStorage.removeItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE);
                    this.sharedDataService.dedicatedMode = false;
                    this.configureAppForPersonalMode();
                }
            } else {
                this.utilService.hideLoadingFor(loading);

                localStorage.removeItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE);
                this.sharedDataService.dedicatedMode = false;
                this.configureAppForPersonalMode();
            }

        }, (error) => {
            this.utilService.hideLoadingFor(loading);

            localStorage.removeItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE);
            this.sharedDataService.dedicatedMode = false;
            this.configureAppForPersonalMode();
        });
    };

    configureAppForDedicatedMode = async () => {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        } catch (e) {

        }

        if (this.sharedDataService.dedicatedModeLocationUse) {
            this.navController.navigateRoot('dashboard-dm');
        } else {
            this.navController.navigateRoot('choose-location');
        }

    };

    configureAppForPersonalMode = async () => {

        try {

            if (Capacitor.isNative) {
                const notificationPermission = await Permissions.query({
                    name: PermissionType.Notifications
                });
                if (notificationPermission.state !== 'granted') {
                    await PushNotifications.requestPermission().then((result) => {
                        if (result.granted) {
                            // Register with Apple / Google to receive push via APNS/FCM
                            this.registerForPushNotification();
                        } else {
                            this.accountService.updatePushNotification({
                                isPushNotification: false
                            });
                        }
                    });
                } else {
                    this.registerForPushNotification();
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
            }

            const locationPermission = await Permissions.query({
                name: PermissionType.Geolocation
            });

            if (locationPermission.state !== 'granted') {
                await Geolocation.requestPermissions();
            }

            Geolocation.getCurrentPosition().then((response) => {
                if (response) {
                    this.sharedDataService.myCurrentGeoLocation = response;
                    console.log('Current Location CP', response);
                }
            }).catch((error) => {
                console.log('GetCurrentPosition Error ', error);
            });


            try {
                Geolocation.watchPosition({}, (response) => {
                    if (response) {
                        this.sharedDataService.myCurrentGeoLocation = response;
                        console.log('Current Location WP', response);
                    }
                });
            } catch (e) {
                console.log('WatchPosition Error ', e);
            }
        } catch (e) {

        }
    };


    registerForPushNotification = () => {
        // PushNotifications.register();
        // this.accountService.updatePushNotification({
        //     isPushNotification: true
        // });
    };
}
