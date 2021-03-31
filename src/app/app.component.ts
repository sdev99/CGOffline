import { Component } from '@angular/core';
import { PermissionType, Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed } from '@capacitor/core';

import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { ObservablesService } from './services/observables.service';
import { EnumService } from './services/enum.service';
import { SharedDataService } from './services/shared-data.service';
import { UtilService } from './services/util.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AccountService } from './services/account.service';
import { ApiService } from './services/api.service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Response, User } from './_models';
import { Badge } from '@ionic-native/badge/ngx';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

const { Geolocation, Permissions, App, SplashScreen } = Plugins;

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private ngZone: NgZone,
		private statusBar: StatusBar,
		private uniqueDeviceID: UniqueDeviceID,
		public sharedDataService: SharedDataService,
		public utilService: UtilService,
		private observablesService: ObservablesService,
		private navController: NavController,
		private screenOrientation: ScreenOrientation,
		private accountService: AccountService,
		private apiService: ApiService,
		private router: Router,
		private badge: Badge,
		private translateService: TranslateService
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(async () => {
			this.statusBar.styleDefault();
			this.sharedDataService.apiServiceRerence = this.apiService;

			const appLang = localStorage.getItem(EnumService.LocalStorageKeys.APP_LANGUAGE);
			if (appLang) {
				this.translateService.use(appLang);
			}

			Plugins.App.addListener('appRestoredResult', (data: any) => {
				this.observablesService.publishSomeData(EnumService.ObserverKeys.APP_RESTORED_RESULT, data.data);
			});

			Plugins.App.addListener('backButton', (data: any) => {});

			this.setupDeepLink();
			this.loadAppSettings();
			setTimeout(() => {
				this.ngZone.run(() => {
					SplashScreen.hide();
					this.badge.clear();
				});
			}, 1500);
		});
	}

	appSettingLoaded = (isDeviceAssignedForDedicatedMode, data = null) => {
		this.ngZone.run(() => {
			this.utilService.hideLoading();

			if (isDeviceAssignedForDedicatedMode) {
				// If already personal mode user logged in then logout it
				if (!this.sharedDataService.dedicatedMode && this.accountService.userValue && this.accountService.userValue?.userId) {
					this.accountService.logout(this.accountService.userValue.userId, false);
				}
				this.configureAppForDedicatedMode(data);
			} else {
				// If already dedicated mode then clear dedicated mode data
				if (this.sharedDataService.dedicatedMode) {
					this.sharedDataService.dedicatedModeDeviceDeleted();
				}
				this.configureAppForPersonalMode();
			}
		});
	};

	async loadAppSettings() {
		this.utilService.presentLoadingWithOptions();
		this.getDeviceUniqueId(() => {
			this.checkForAccessKey(() => {
				this.checkForToken(() => {
					this.apiService.getTimeZoneList().subscribe(() => {});

					// Test demo - should be remove after development complete

					// For test dedicated mode in mobile
					// if (this.sharedDataService.deviceUID === '67DA70A1-FD31-4B48-81F6-74E9EB356632' ||
					//     this.sharedDataService.deviceUID === 'd99fe84c-5538-25ce-8637-870495265348') {
					//     this.sharedDataService.isTablet = true;
					//     setTimeout(() => {
					//         this.navController.navigateForward('checkinout-photoidentity-dm');
					//     }, 7000);
					// }

					//   if (
					//     localStorage.getItem(StaticDataService.anyScreenTestLocalStoragekey)
					//   ) {
					//     // this.sharedDataService.isTablet = true;
					//     setTimeout(() => {
					//       this.navController.navigateForward(
					//         localStorage.getItem(
					//           StaticDataService.anyScreenTestLocalStoragekey
					//         )
					//       );
					//     }, 7000);
					//   }

					//   if (localStorage.getItem(StaticDataService.isDeviceTestTablet)) {
					//     this.sharedDataService.isTablet = true;
					//   }
					// end

					if (!environment.isWebApp) {
						if (this.sharedDataService.isTablet) {
							this.checkDeviceForDeticatedMode(({ isDeviceAssigned, data }) => {
								this.appSettingLoaded(isDeviceAssigned, data);
							});
						} else {
							this.appSettingLoaded(false);
						}
					} else {
						this.utilService.hideLoading();
					}
				});
			});
		});
	}

	getDeviceUniqueId = (callBack) => {
		this.uniqueDeviceID
			.get()
			.then((uuid: any) => {
				console.log('Device UUID ', uuid);
				if (uuid && uuid.length > 0) {
					this.sharedDataService.deviceUID = uuid;
				} else {
					this.sharedDataService.deviceUID = '';
				}

				UtilService.fireCallBack(callBack);
			})
			.catch((error: any) => {
				console.log(error);
				this.sharedDataService.deviceUID = '';
				if (UtilService.isLocalHost()) {
					this.sharedDataService.deviceUID = '67DA70A1-FD31-4B48-81F6-74E9EB356632';
				}
				console.log('Device UID ', this.sharedDataService.deviceUID);
				UtilService.fireCallBack(callBack);
			});
	};

	setupDeepLink = () => {
		if (!environment.isWebApp) {
			// reset password url https://cg.utopia-test.com/Login/ResetPassword?code=TTQ4LOM8
			// setup new account https://cg.utopia-test.com/Login/AccountSetup/545a1db3-f91c-48eb-be17-b9e4dd346322
			//
			// reset password url https://login.be-safetech.com/Login/ResetPassword?code=TTQ4LOM8
			// setup new account https://login.be-safetech.com/Login/AccountSetup/545a1db3-f91c-48eb-be17-b9e4dd346322

			App.addListener('appUrlOpen', (data: any) => {
				this.ngZone.run(() => {
					// Example url: https://beerswift.app/tabs/tab2
					// slug = /tabs/tab2
					const url = data.url;
					if (url.indexOf('ResetPassword') !== -1) {
						this.sharedDataService.isNavigationTypeDeepLink = true;
						const code = UtilService.getQueryStringValue(url, 'code');
						this.router.navigate(['forgot-password-reset'], {
							queryParams: {
								code,
							},
						});
					} else if (url.indexOf('AccountSetup') !== -1) {
						this.sharedDataService.isNavigationTypeDeepLink = true;
						const userId = url.split('/').pop();
						this.router.navigate(['new-account-setup'], {
							queryParams: {
								userId,
							},
						});
					}
				});
			});
		}
	};

	checkForAccessKey = async (callBack) => {
		if (!localStorage.getItem(EnumService.LocalStorageKeys.API_ACCESS_KEY)) {
			this.accountService.getAccessKey().subscribe(
				async (data) => {
					UtilService.fireCallBack(callBack);
				},
				async (error) => {
					UtilService.fireCallBack(callBack);
				}
			);
		} else {
			UtilService.fireCallBack(callBack);
		}
	};

	checkForToken = async (callBack) => {
		if (!localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN)) {
			this.accountService.getToken().subscribe(
				async (token) => {
					UtilService.fireCallBack(callBack);
				},
				async (error) => {
					UtilService.fireCallBack(callBack);
				}
			);
		} else {
			UtilService.fireCallBack(callBack);
		}
	};

	checkDeviceForDeticatedMode = async (callBack) => {
		this.apiService.getDeviceEntityDetails(this.sharedDataService.deviceUID).subscribe(
			async (data: Response) => {
				if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful && data.Result && data.Result?.deviceDetailData && data.Result?.deviceDetailData?.companyID) {
					UtilService.fireCallBack(callBack, {
						isDeviceAssigned: true,
						data,
					});
				} else {
					UtilService.fireCallBack(callBack, { isDeviceAssigned: false });
				}
			},
			async (error) => {
				UtilService.fireCallBack(callBack, {
					isDeviceAssigned: this.sharedDataService.dedicatedMode,
				});
			}
		);
	};

	configureAppForDedicatedMode = async (data: Response = null) => {
		localStorage.setItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE, 'true');
		this.sharedDataService.dedicatedMode = true;

		if (data) {
			localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL, JSON.stringify(data.Result?.deviceDetailData));
			localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES, JSON.stringify(data.Result?.deviceEntityData));

			this.sharedDataService.dedicatedModeDeviceDetailData = data.Result?.deviceDetailData;
			this.sharedDataService.dedicatedModeAssignedEntities = data.Result?.deviceEntityData;

			if (this.sharedDataService.dedicatedModeAssignedEntities && this.sharedDataService.dedicatedModeAssignedEntities.length === 1) {
				this.sharedDataService.dedicatedModeLocationUse = this.sharedDataService.dedicatedModeAssignedEntities[0];
				localStorage.setItem(EnumService.LocalStorageKeys.DEDICATED_MODE_LOCATION_USE, JSON.stringify(this.sharedDataService.dedicatedModeAssignedEntities[0]));
			}
		}

		try {
			if (!UtilService.isLocalHost()) {
				if (this.platform.is('ios')) {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY);
				} else {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
				}
			}
		} catch (e) {}

		if (!this.sharedDataService.isNavigationTypeDeepLink) {
			if (this.sharedDataService.dedicatedModeLocationUse) {
				this.navController.navigateRoot('dashboard-dm', { replaceUrl: true });
			} else {
				this.navController.navigateRoot('choose-location');
			}
		}

		setTimeout(() => {
			this.configureForLocation();
		}, 1000);

		this.sharedDataService.updatePushSettingOnServer(false);
	};

	configureAppForPersonalMode = async () => {
		try {
			if (!UtilService.isLocalHost()) {
				this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
			}
		} catch (e) {}

		if (!this.sharedDataService.isNavigationTypeDeepLink) {
			const user: User = this.accountService.userValue;
			if (user?.userId && !user.isMobileSessionExpiration) {
				this.navController.navigateRoot('/tabs/dashboard', {
					replaceUrl: true,
				});

				if (UtilService.isLocalHost()) {
					this.navController.navigateRoot('/form-riskassessment', {
						replaceUrl: true,
					});
				}

				if (!this.sharedDataService.isLoginAfterAppOpen && user?.companyID) {
					this.accountService.checkMobileSessionExpirationSetting(user?.companyID).subscribe((response: Response) => {
						if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
							if (response.Result?.isMobileSessionExpiration) {
								this.navController.navigateRoot('/login', {
									replaceUrl: true,
								});
							}
						}
					});
				}
			} else {
				this.navController.navigateRoot('/login');
			}
		}

		localStorage.removeItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE);

		setTimeout(() => {
			this.sharedDataService.configureForPushNotification();
			this.configureForLocation();
		}, 1000);
	};

	configureForLocation = async () => {
		try {
			const locationPermission = await Permissions.query({
				name: PermissionType.Geolocation,
			});

			if (locationPermission.state !== 'granted' && Geolocation && Geolocation.requestPermissions) {
				await Geolocation.requestPermissions();
			}

			Geolocation.getCurrentPosition()
				.then((response) => {
					if (response) {
						this.sharedDataService.myCurrentGeoLocation = response;
						console.log('Current Location CP', response);
					}
				})
				.catch((error) => {
					console.log('GetCurrentPosition Error ', error);
				});
		} catch (e) {}

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
	};
}
