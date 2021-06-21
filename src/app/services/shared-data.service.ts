import { Injectable } from '@angular/core';
import { EnumService } from './enum.service';
import { NavController, Platform } from '@ionic/angular';
import { Profile } from '../_models/profile';
import { CheckinDetail } from '../_models/checkinDetail';
import { LocationItem } from '../_models/locationItem';
import { GlobalDirectory } from '../_models/globalDirectory';
import { Capacitor, GeolocationPosition, PermissionType, Plugins, PushNotification, PushNotificationActionPerformed, PushNotificationToken } from '@capacitor/core';
import { ActivityListItem } from '../_models/activityListItem';
import { DocumentDetail } from '../_models/documentDetail';
import { CheckInPostData } from '../_models/checkInPostData';
import { SignOffDetailsPostData } from '../_models/signOffDetailsPostData';
import { UtilService } from './util.service';
import { ApiService } from './api.service';
import { Response, User } from '../_models';
import { ObservablesService } from './observables.service';
import { CheckedInDetailItem } from '../_models/checkedInDetailItem';
import { SignOffFormDetail } from '../_models/signOffFormDetail';
import { HavAnswerObject } from '../_models/havAnswerObject';
import { FormAnswerObject } from '../_models/formAnswerObject';
import { SubmitAnswersObject } from '../_models/submitAnswersObject';
import { FormGroup } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import * as moment from 'moment/moment';
import { WorkPermitAnswer } from '../_models/workPermitAnswer';
import { ArAnswerObject } from '../_models/arAnswerObject';
import { StaticDataService } from './static-data.service';
import { RiskRatingItem } from '../_models/riskRatingItem';
import { Router } from '@angular/router';
import { DedicatedModeDeviceDetailData } from '../_models/dedicatedModeDeviceDetailData';
import { DeviceEntityDetail } from '../_models/deviceEntityDetail';
import { DedicatedModeGuestDetail } from '../_models/dedicatedModeGuestDetail';
import { UserDetail } from '../_models/userDetail';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { environment } from '../../environments/environment';
import { RiskRatingSeverityOption } from '../_models/riskRatingSeverityOption';
import { RiskRatingProbabilityOption } from '../_models/riskRatingProbabilityOption';
import { RAtaskTemplateItem } from '../_models/RAtaskTemplateItem';
import { AuthGuard } from '../helpers/auth.guard';
import { HavAnswerDetail } from '../_models/havAnswerDetail';
import { TranslateService } from '@ngx-translate/core';
import { EntityItem } from '../_models/entityItem';

const { PushNotifications, Permissions } = Plugins;

@Injectable({
	providedIn: 'root',
})
export class SharedDataService {
	apiServiceRerence: ApiService;

	apiBaseUrl = environment.apiUrl;

	myCurrentGeoLocation: GeolocationPosition;

	isNavigationTypeDeepLink = false;
	isLoginAfterAppOpen = false;

	annotationImage;
	annotationColor = '#98C16B';
	onAnnotationImageDone;

	deviceUID = ''; // For simulator ipad
	// deviceUID = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
	// deviceUID = "33F3FF08-8A4E-4E24-14DC-D8AF80B8EAC1"; // For test dedicated mode
	// deviceUID = "33F3FF08-8A4E-4E24-14DC-D8AF80B8EAC12222"; // For test dedicated mode assign one location
	// deviceUID = 'f5aa72ed-21ca-4b12-8485-a24447cb420d'; // Arvin ipad device id
	// deviceUID = "f44ab87b-a2d6-8df0-8637-870495265348"; // SdevAndroid
	// deviceUID = "67DA70A1-FD31-4B48-81F6-74E9EB356632"; // SdevIphone
	// deviceUID = '0d98044b-6541-c58e-6353-935090075482'; // Rosana Tablet5.1

	pushToken = '000';
	isTablet = false;
	dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
	// when open form or document , useful for next screens

	dedicatedModeDeviceDetailData: DedicatedModeDeviceDetailData;
	dedicatedModeAssignedEntities: Array<DeviceEntityDetail>;

	dedicatedModeGuestDetail: DedicatedModeGuestDetail;
	dedicatedModeUserDetail: UserDetail;

	// Data from Api
	checkedInPlaces: Array<CheckedInDetailItem> = [];
	currentSelectedCheckinPlace: CheckedInDetailItem;

	// Userful for personal mode dashbord
	activityList: Array<ActivityListItem>;
	activityOverviewData;

	userProfile: Profile;
	timeZoneList;
	companyLanguageList;

	riskRatingsList: [RiskRatingItem];
	severityRatings: Array<RiskRatingSeverityOption>;
	probabilityRatings: Array<RiskRatingProbabilityOption>;
	raTaskTemplateList: Array<RAtaskTemplateItem>;

	globalDirectories: GlobalDirectory;
	locationItemList;

	// data for another pages
	checkInDetail: CheckinDetail;
	currentActivityOpen: ActivityListItem;
	signOffFormDetail: SignOffFormDetail; // For form activity signoff
	signOffDocumentDetail: DocumentDetail; // For activity document  signoff and current checkin document signoff
	viewFormDetail;

	/** Location selected on choose-location page**/
	dedicatedModeLocationUse: DeviceEntityDetail;

	// For dedicated mode
	dedicatedModeProcessType = ''; // EnumService.DedicatedModeProcessTypes
	checkinoutDmAs = ''; // EnumService.CheckInType
	signOffFor = ''; // EnumService.SignOffType
	dedicatedModeTempAuthFor = ''; // EnumService.DedicatedModeTempAuthType
	dedicatedModeTempAuthBy = ''; // EnumService.DedicatedModeTempAuthBy
	dedicatedModeCapturePhotoFor = ''; // EnumService.DedicatedModeCapturePhotoForType
	dedicatedModeCapturedSelfieForCheckinProcess; // photo name of uploaded captured selfie during checkin process, (For reuse it for signoff)

	viewFormFor; // View form for induction process or activity detail
	inductionContentItemIndex = 0;

	// Store location data for checkinout
	checkinLocationByOption; // EnumService.CheckInLocationByOptions
	checkInForLocation: LocationItem;
	checkOutForCheckedInDetail: CheckedInDetailItem;

	// Store  all screen checkin details for whole process and use this data on end of checkin data send to server
	checkInPostData: CheckInPostData;
	signOffDetailsPostData: SignOffDetailsPostData;

	formBuilderDetails;

	// for use in next screen
	availableWorkPermits;

	isOpenImageAnnotation = false;

	workPermitAnswer: WorkPermitAnswer;

	currentLanguageId = 0;

	videoFileUpload;

	autocheckoutTimeoutRef = {};

	translateService: TranslateService;
	companyLangaugeTranslations = {};

	constructor(
		private router: Router,
		private platform: Platform,
		private file: File,
		private fileTransfer: FileTransfer,
		private navCtrl: NavController,
		private observablesService: ObservablesService,
		public utilService: UtilService,
		private screenOrientation: ScreenOrientation //  private translateService: TranslateService
	) {
		// Set dynamic api url for WebApp based on domain
		if (environment.isWebApp) {
			const currentHost = window.location.host;
			var apiUrlDevHostname = new URL(environment.apiUrlDev).hostname;
			var apiUrlStagingHostname = new URL(environment.apiUrlStaging).hostname;
			var apiUrlProdHostname = new URL(environment.apiUrlProd).hostname;
			if (currentHost === apiUrlDevHostname) {
				this.apiBaseUrl = environment.apiUrlDev;
			} else if (currentHost === apiUrlStagingHostname) {
				this.apiBaseUrl = environment.apiUrlStaging;
			} else if (currentHost === apiUrlProdHostname) {
				this.apiBaseUrl = environment.apiUrlProd;
			}
		}

		this.isTablet = platform.is('tablet');
		this.dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
		const dedicatedModeLocationUse = localStorage.getItem(EnumService.LocalStorageKeys.DEDICATED_MODE_LOCATION_USE);
		if (dedicatedModeLocationUse) {
			this.dedicatedModeLocationUse = JSON.parse(dedicatedModeLocationUse);
		}
		const dedicatedModeDeviceDetail = localStorage.getItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL);
		if (dedicatedModeDeviceDetail) {
			this.dedicatedModeDeviceDetailData = JSON.parse(dedicatedModeDeviceDetail);
		}

		const dedicatedModeAssignedEntities = localStorage.getItem(EnumService.LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES);
		if (dedicatedModeAssignedEntities) {
			this.dedicatedModeAssignedEntities = JSON.parse(dedicatedModeAssignedEntities);
		}

		const userProfile = localStorage.getItem(EnumService.LocalStorageKeys.USER_PROFILE);
		if (userProfile) {
			this.userProfile = JSON.parse(userProfile);
		}

		const timeZoneList = localStorage.getItem(EnumService.LocalStorageKeys.TIMEZONE_LIST);
		if (timeZoneList) {
			this.timeZoneList = JSON.parse(timeZoneList);
		}

		const checkedInPlaces = localStorage.getItem(EnumService.LocalStorageKeys.CHECKED_IN_PLACES);
		if (checkedInPlaces) {
			this.checkedInPlaces = JSON.parse(checkedInPlaces);
		}

		const pushToken = localStorage.getItem(EnumService.LocalStorageKeys.PUSH_TOKEN);
		if (pushToken) {
			this.pushToken = pushToken;
		}

		const selectedCheckedInPlace = localStorage.getItem(EnumService.LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE);
		if (selectedCheckedInPlace) {
			this.currentSelectedCheckinPlace = JSON.parse(selectedCheckedInPlace);
		}

		const globalDirectories = localStorage.getItem(EnumService.LocalStorageKeys.GLOBAL_DIRECTORIES);
		if (globalDirectories) {
			this.globalDirectories = JSON.parse(globalDirectories) as GlobalDirectory;
		}
	}

	addDynamicRoute(dynamicPath, component, canActivateAuth = false): void {
		const appRoutes = [...this.router.config];
		let alreadyAdded = false;
		appRoutes.map((route) => {
			if (route.path === dynamicPath) {
				alreadyAdded = true;
			}
		});
		const canActivate = [];
		if (canActivateAuth) {
			canActivate.push(AuthGuard);
		}
		if (!alreadyAdded) {
			const route = { path: dynamicPath, component, canActivate };
			appRoutes.push(route);
			this.router.resetConfig(appRoutes);
		}
	}

	setAnnotationImage(image) {
		this.annotationImage = image;
	}

	getAnnotationImage() {
		return this.annotationImage;
	}

	dedicatedModeDeviceDeleted() {
		this.dedicatedModeDeviceDetailData = null;
		this.dedicatedModeAssignedEntities = null;
		this.dedicatedMode = false;
		localStorage.removeItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE);
		localStorage.removeItem(EnumService.LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL);
		localStorage.removeItem(EnumService.LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES);
		this.navCtrl.navigateRoot('/login', { replaceUrl: true });
		if (!UtilService.isLocalHost()) {
			this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
		}
		this.configureForPushNotification();
	}

	resetAllSharedVariable() {
		this.checkedInPlaces = [];
		this.currentSelectedCheckinPlace = null;
		this.userProfile = null;
		this.timeZoneList = null;
		this.companyLanguageList = null;
		this.globalDirectories = null;
		this.locationItemList = null;
		this.checkInDetail = null;
		this.currentActivityOpen = null;
		this.signOffFormDetail = null;
		this.signOffDocumentDetail = null;
		this.dedicatedModeLocationUse = null;
		this.dedicatedModeCapturedSelfieForCheckinProcess = null;
		this.checkinoutDmAs = '';
		this.signOffFor = '';
		this.viewFormFor = null;
		this.inductionContentItemIndex = 0;
		this.checkInForLocation = null;
		this.checkOutForCheckedInDetail = null;
		this.checkInPostData = null;
		this.signOffDetailsPostData = null;
		this.formBuilderDetails = null;
		this.availableWorkPermits = null;
		this.isOpenImageAnnotation = false;
		this.workPermitAnswer = null;
	}

	getLoggedInUser() {
		const user: User = JSON.parse(localStorage.getItem(EnumService.LocalStorageKeys.USER_DATA));
		return user;
	}

	getLanguageIdForForm() {
		const formBuilderDetail = this.formBuilderDetails;
		if (!this.dedicatedMode && this.currentLanguageId) {
			let sections = formBuilderDetail.sections;
			let selectedLanguageID = formBuilderDetail.defaultLanguageId;

			if (selectedLanguageID !== this.currentLanguageId) {
				const firstSection = sections && sections.length > 0 ? sections[0] : null;
				if (firstSection && firstSection.sectionTranslations?.length > 1) {
					firstSection.sectionTranslations.some((item) => {
						if (item.sectionTranslationLanguageId === this.currentLanguageId) {
							selectedLanguageID = this.currentLanguageId;
							return true;
						}
					});
				}
			}
			return selectedLanguageID;
		} else {
			return this.formBuilderDetails?.defaultLanguageId;
		}
	}

	configureForPushNotification = async () => {
		if (Capacitor.isNative) {
			try {
				const notificationPermission = await Permissions.query({
					name: PermissionType.Notifications,
				});

				if (notificationPermission.state !== 'granted') {
					await PushNotifications.requestPermission().then((result) => {
						if (result.granted) {
							localStorage.setItem(EnumService.LocalStorageKeys.PUSH_PERMISSION_ALLOWED, 'true');
							// Register with Apple / Google to receive push via APNS/FCM
							this.registerForPushNotification();
						} else {
							localStorage.setItem(EnumService.LocalStorageKeys.PUSH_PERMISSION_ALLOWED, 'false');
							this.updatePushSettingOnServer(false);
						}
					});
				} else {
					localStorage.setItem(EnumService.LocalStorageKeys.PUSH_PERMISSION_ALLOWED, 'true');
					this.registerForPushNotification();
				}

				// On success, we should be able to receive notifications
				PushNotifications.addListener('registration', (token: PushNotificationToken) => {
					localStorage.setItem(EnumService.LocalStorageKeys.PUSH_TOKEN, token.value);
					this.pushToken = token.value;
					console.log('Push registration success, token: ' + token.value);
				});

				// Show us the notification payload if the app is open on our device
				PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
					console.log('Push received: ' + JSON.stringify(notification));
				});

				// Method called when tapping on a notification
				PushNotifications.addListener('pushNotificationActionPerformed', (notification: PushNotificationActionPerformed) => {
					if (notification.actionId === 'tap') {
						const notificationData = notification.notification.data;
						switch (notificationData.action) {
							case EnumService.NotificationActionType.NewActivityAssigned:
							case EnumService.NotificationActionType.SignOffRejected:
							case EnumService.NotificationActionType.ActivityOverdue:
								if (!this.dedicatedMode && this.getLoggedInUser() && this.getLoggedInUser().userId) {
									setTimeout(() => {
										const contentlink = notificationData.contentlink;
										const activityId = contentlink.split('_').pop();

										const activityList = this.activityList;
										let currentActivityOpen: ActivityListItem;
										if (activityList) {
											activityList.map((item) => {
												if (item.activityIndividualID === activityId) {
													currentActivityOpen = item;
													return;
												}
											});
										}
										if (!currentActivityOpen) {
											currentActivityOpen = {
												activityIndividualID: activityId,
											} as ActivityListItem;
										}

										this.currentActivityOpen = currentActivityOpen;
										console.log('Push currentActivityOpen', currentActivityOpen);
										this.navCtrl.navigateForward(['/activity-detail']);
									}, 100);
								}
								break;
						}
					}
					// {"actionId":"tap","notification":{"body":"You have a new Activity Assigned","badge":1,"id":"A50F97EA-2426-4407-B9B6-80E576527CD1","subtitle":"","data":{"google.c.a.e":"1","contentlink":"https://cg.utopia-test.com/Activity/ActivityDetail/0_1339","action":"New Activity Assigned","aps":{"alert":{"title":"ComplianceGenie","body":"You have a new Activity Assigned"},"sound":"default","category":"FCM_PLUGIN_ACTIVITY"},"content":"You have a new Activity Assigned","gcm.message_id":"1610621468120206","google.c.sender.id":"1005975349422"},"title":"ComplianceGenie"}}
					console.log('Push action performed: ' + JSON.stringify(notification));
				});
			} catch (e) {}
		}
	};

	registerForPushNotification = () => {
		PushNotifications.register();
		this.updatePushSettingOnServer(true);
	};

	updatePushSettingOnServer = (isEnable) => {
		if (this.dedicatedMode) {
			this.apiServiceRerence
				.updatePushNotification(
					{
						isPushNotification: isEnable,
					},
					this.deviceUID
				)
				.subscribe(() => {});
		} else {
			if (this.getLoggedInUser()?.userId) {
				this.apiServiceRerence
					.updatePushNotification(
						{
							isPushNotification: isEnable,
						},
						this.getLoggedInUser()?.userId
					)
					.subscribe(() => {});
			}
		}
	};

	/**
	 * GetLangFileTranslation from api
	 * @param callBack
	 */
	getLangFileTranslation = (callBack, resetPassCode = null) => {
		const onSuccessCallBack = (response: Response) => {
			if (response) {
				this.translateService.setTranslation('en', response, true);
				this.translateService.use('en');
				this.companyLangaugeTranslations = response;
			}
			callBack && callBack();
		};

		const onErrorCallBack = (error) => {
			callBack && callBack();
		};

		if (resetPassCode) {
			this.apiServiceRerence.getCompanyLanguageTemplateByCode(resetPassCode).subscribe(onSuccessCallBack, onErrorCallBack);
		} else {
			this.apiServiceRerence.getCompanyLanguageTemplate().subscribe(onSuccessCallBack, onErrorCallBack);
		}
	};

	/**
	 * checkAutoCheckOutForCurrentCheckin
	 */
	public checkAutoCheckOutForCurrentCheckin() {
		const timeZoneList = this.timeZoneList;
		let userProfileTimeZone;
		timeZoneList?.some((item) => {
			if (item.timeZoneID === this.userProfile?.timeZoneID) {
				userProfileTimeZone = item;
				return true;
			}
		});

		//Clear previous timeout
		Object.keys(this.autocheckoutTimeoutRef).map((timeoutRef: any) => {
			clearTimeout(timeoutRef);
		});
		this.autocheckoutTimeoutRef = {};

		const currentCheckinList = this.checkedInPlaces;
		if (currentCheckinList && currentCheckinList.length > 0) {
			currentCheckinList.map((item) => {
				let autoCheckoutDateTime;
				const currentCheckinMyTime = moment(item.checkInDate).add(userProfileTimeZone?.timeDifference || 0, 'minutes');
				let isAutoCheckOut = false;

				if ((item.userAutoCheckOutTime && item.userAutoCheckOutTime.indexOf(':') !== -1) || (item.locationAutoCheckOutTime && item.locationAutoCheckOutTime.indexOf(':') !== -1)) {
					let parts;
					if (item.userAutoCheckOutTime && item.userAutoCheckOutTime.indexOf(':') !== -1) {
						parts = item.userAutoCheckOutTime.split(':');
					} else {
						parts = item.locationAutoCheckOutTime.split(':');
					}
					let hour = parseInt(parts[0]);
					let minute = parseInt(parts[1]);
					let checkInDate = moment(item.checkInDate);
					autoCheckoutDateTime = moment(checkInDate.format('YYYY-MM-DDT' + UtilService.appendZero(hour) + ':' + UtilService.appendZero(minute) + ':00.00'));

					isAutoCheckOut = true;
				}

				if (!isAutoCheckOut) {
					if (item.locationAutoCheckOutHour > 0) {
						autoCheckoutDateTime = moment(currentCheckinMyTime).add(item.locationAutoCheckOutHour, 'hour');
						isAutoCheckOut = true;
					}
				}

				if (isAutoCheckOut) {
					const userProfileCurrentDate = moment(item.currentUTCDate).add(userProfileTimeZone?.timeDifference || 0, 'minutes');
					if (userProfileCurrentDate < autoCheckoutDateTime) {
						const seconds = autoCheckoutDateTime.diff(userProfileCurrentDate, 'seconds');
						if (seconds > 0) {
							this.autocheckoutTimeoutRef[item.userCheckInDetailID] = setTimeout(() => {
								if (this.checkedInPlaces) {
									this.checkedInPlaces.some((place, placeIndex) => {
										if (place.userCheckInDetailID === item.userCheckInDetailID) {
											this.checkedInPlaces.splice(placeIndex, 1);
											this.observablesService.publishSomeData(EnumService.ObserverKeys.UPDATE_CURRENT_CHECKIN_LIST_IN_COMPONENT, {});
											return true;
										}
									});
								}
								setTimeout(() => {
									this.observablesService.publishSomeData(EnumService.ObserverKeys.REFRESH_CURRENT_CHECKIN_LIST, {});
								}, 1000 * 60 * 3);
							}, seconds * 1000);
						}
					}
				}
			});
		}
	}

	/**
	 * For dedicated mode
	 */
	public getCurrentCheckedInEntityName = () => {
		return this.getEntityName(this.dedicatedModeLocationUse);
	};

	/**
	 * For dedicated mode
	 */
	public getEntityName = (deviceEntityDetail: DeviceEntityDetail) => {
		if (deviceEntityDetail?.locationID > 0) {
			return deviceEntityDetail?.locationName;
		} else if (deviceEntityDetail?.projectID > 0) {
			return deviceEntityDetail?.projectName;
		} else if (deviceEntityDetail?.inventoryItemID > 0) {
			return deviceEntityDetail?.itemName;
		}
		return '';
	};

	public getCheckinDetails = async (userId, apiService: ApiService) => {
		if (userId && this.checkInForLocation) {
			let ifAlreadyCheckedinPlace;
			if (this.checkedInPlaces) {
				this.checkedInPlaces.map((place) => {
					const entityIds = this.utilService.getRelevantEntityId(this.checkInForLocation.locationID);
					if (
						(entityIds.InventoryID > 0 && entityIds.InventoryID === place.inventoryItemID) ||
						(entityIds.ProjectID > 0 && entityIds.ProjectID === place.projectID) ||
						(entityIds.LocationID > 0 && entityIds.LocationID === place.locationID)
					) {
						ifAlreadyCheckedinPlace = place;
						return;
					}
				});
			}

			if (ifAlreadyCheckedinPlace) {
				this.checkOutForCheckedInDetail = ifAlreadyCheckedinPlace;

				this.translateService
					.get(['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_OUT', 'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_ARE_CHECKING_OUT', 'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_OUT_NOW'])
					.subscribe((res) => {
						this.navCtrl.navigateForward(['/checkinout-confirm'], {
							queryParams: {
								headerTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_OUT'],
								title: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_ARE_CHECKING_OUT'],
								subtitle: ifAlreadyCheckedinPlace.entityName,
								buttonTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_OUT_NOW'],
								locationCheckType: EnumService.ConfirmForCheckType.CheckOut,
							},
							replaceUrl: true,
						});
					});
			} else {
				this.utilService.presentLoadingWithOptions();
				apiService.getCheckInDetails(userId, this.checkInForLocation.locationID).subscribe(
					(response: Response) => {
						this.utilService.hideLoading();
						if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
							this.checkInDetail = response.Result as CheckinDetail;
							this.checkInPostData = {
								userId,
								checkInLatitude: this.myCurrentGeoLocation?.coords.latitude,
								checkInLongitude: this.myCurrentGeoLocation?.coords.longitude,
								isGuestReturning: false,
								projectID: this.checkInDetail.checkInEntityDetail.projectID,
								inventoryItemID: this.checkInDetail.checkInEntityDetail.inventoryItemID,
								locationID: this.checkInDetail.checkInEntityDetail.locationID,
							} as CheckInPostData;

							this.translateService
								.get(['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_IN', 'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_ARE_CHECKING_IN', 'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_IN_NOW'])
								.subscribe((res) => {
									this.navCtrl.navigateForward(['/checkinout-confirm'], {
										queryParams: {
											headerTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_IN'],
											title: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_ARE_CHECKING_IN'],
											subtitle: this.checkInForLocation.locationName,
											buttonTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_IN_NOW'],
											nextPageData: JSON.stringify({
												locationDetail: JSON.stringify(this.checkInForLocation),
											}),
											nextPagePath: '/checkin-induction',
											locationCheckType: EnumService.ConfirmForCheckType.CheckIn,
										},
										replaceUrl: true,
									});
								});
						}
					},
					(error: any) => {
						const errorField = error?.error?.ResponseException?.ValidationErrors[0].Field;

						this.utilService.hideLoading();
						if (errorField.indexOf('SimultaneousCheckIn') !== -1) {
							this.translateService
								.get([
									'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN',
									'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.SIMULTANIOUS_CHECKIN_NOT_ALLOWED',
									'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_ARE_ALREADY_CHECKEDIN_TO_ANOTHER_PLACE',
								])
								.subscribe((res) => {
									this.navCtrl.navigateForward(['/checkin-fail'], {
										queryParams: {
											title: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN'],
											errorTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.SIMULTANIOUS_CHECKIN_NOT_ALLOWED'],
											errorMessage: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_ARE_ALREADY_CHECKEDIN_TO_ANOTHER_PLACE'],
											nextPage: '/tabs/dashboard',
										},
										replaceUrl: true,
									});
								});
						} else {
							this.translateService
								.get([
									'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN',
									'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.NO_QUALIFICATION',
									'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_DO_NOT_HAVE_THE_REQUIRED_QUALIFICATIONS',
								])
								.subscribe((res) => {
									this.navCtrl.navigateForward(['/checkin-fail'], {
										queryParams: {
											title: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN'],
											errorTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.NO_QUALIFICATION'],
											errorMessage: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_DO_NOT_HAVE_THE_REQUIRED_QUALIFICATIONS'],
											nextPage: '/tabs/dashboard',
										},
										replaceUrl: true,
									});
								});
						}
					}
				);
			}
		}
	};

	/**
	 * Get Checkin Details for Dedicated mode
	 * @param userId temp auth user id
	 * @param apiService ApiService class refrence
	 * @param userPhoto userPhoto if captured and uploaded to CheckInPhotoUpload api
	 * @param callBack call back to the block where it is called
	 */
	public getCheckinDetailsForDedicatedMode = async (userId, apiService: ApiService, userPhoto = null, callBack = null) => {
		if (userId && this.dedicatedModeLocationUse) {
			const entityId = this.utilService.getEntityIdFromId(this.dedicatedModeLocationUse);

			this.utilService.presentLoadingWithOptions();
			apiService.getCheckInDetails(userId, entityId).subscribe(
				(response: Response) => {
					this.utilService.hideLoading();
					if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
						let canUserCheckinToLocation = true;
						if (this.dedicatedModeProcessType === EnumService.DedicatedModeProcessTypes.CheckinOut && this.checkinoutDmAs === EnumService.CheckInType.QrCode) {
							const checkinDetail = response.Result as CheckinDetail;
							if (!checkinDetail.checkInEntityDetail.checkInPersonalQR) {
								canUserCheckinToLocation = false;
								UtilService.fireCallBack(callBack, {
									ischeckInPersonalQRNotAllowed: true,
								});
							}
						}

						if (canUserCheckinToLocation) {
							this.checkInDetail = response.Result as CheckinDetail;
							this.checkInPostData = {
								userId,
								userPhoto,
								checkInLatitude: this.myCurrentGeoLocation?.coords.latitude,
								checkInLongitude: this.myCurrentGeoLocation?.coords.longitude,
								isGuestReturning: false,
								projectID: this.dedicatedModeLocationUse.projectID,
								inventoryItemID: this.dedicatedModeLocationUse.inventoryItemID,
								locationID: this.dedicatedModeLocationUse.locationID,
							} as CheckInPostData;

							this.processCheckinDetailsStepInitial(apiService, false);
						}
					}
				},
				(error: any) => {
					this.utilService.hideLoading();
					this.processCheckInError(error, '/dashboard-dm');
				}
			);
		}
	};

	public getCheckinDetailsGuest = (apiService: ApiService, isGuestReturning = false) => {
		const entityId = this.utilService.getEntityIdFromId(this.dedicatedModeLocationUse);
		const nextScreen = this.dedicatedMode ? '/dashboard-dm' : '/tabs/dashboard';

		const dedicatedModeDeviceDetailData = this.dedicatedModeDeviceDetailData;
		const dedicatedModeGuestDetail = this.dedicatedModeGuestDetail;
		const dedicatedModeLocationUse = this.dedicatedModeLocationUse;

		this.utilService.presentLoadingWithOptions();
		apiService
			.getCheckInDetails_Guest(
				dedicatedModeGuestDetail.guestPhone || '',
				dedicatedModeGuestDetail.guestFirsName || '',
				dedicatedModeGuestDetail.guestMiddleName || '',
				dedicatedModeGuestDetail.guestLastName || '',
				entityId
			)
			.subscribe(
				(res: Response) => {
					this.utilService.hideLoading();

					if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
						this.checkInDetail = res.Result;
						this.checkInPostData = {
							checkInLatitude: this.myCurrentGeoLocation?.coords.latitude,
							checkInLongitude: this.myCurrentGeoLocation?.coords.longitude,
							isGuestReturning,
							projectID: dedicatedModeLocationUse.projectID,
							inventoryItemID: dedicatedModeLocationUse.inventoryItemID,
							locationID: dedicatedModeLocationUse.locationID,
							guestPhone: dedicatedModeGuestDetail.guestPhone,
							guestFirsName: dedicatedModeGuestDetail.guestFirsName,
							guestMiddleName: dedicatedModeGuestDetail.guestMiddleName,
							guestLastName: dedicatedModeGuestDetail.guestLastName,
							guestPhoto: dedicatedModeGuestDetail.guestPhoto,
							companyID: dedicatedModeDeviceDetailData.companyID,
						} as unknown as CheckInPostData;

						this.processCheckinDetailsStepInitial(apiService, true);
					}
				},
				(error) => {
					this.utilService.hideLoading();
					this.processCheckInError(error, nextScreen);
				}
			);
	};

	/**
	 * Process checking for Dedicated mode
	 * @param apiService ApiService Refrence
	 * @param isGuest is CHeckin Type Guest User
	 */
	processCheckinDetailsStepInitial(apiService, isGuest) {
		if (
			(this.checkinoutDmAs === EnumService.CheckInType.AS_GUEST && this.checkInDetail?.checkInEntityDetail?.checkInGuestPhoto) ||
			(this.checkinoutDmAs === EnumService.CheckInType.MY_NAME && this.checkInDetail?.checkInEntityDetail?.checkInPersonalPhoto)
		) {
			if (this.dedicatedModeCapturedSelfieForCheckinProcess) {
				if (this.checkinoutDmAs === EnumService.CheckInType.AS_GUEST) {
					this.checkInPostData.guestPhoto = this.dedicatedModeCapturedSelfieForCheckinProcess;
				} else if (this.checkinoutDmAs === EnumService.CheckInType.MY_NAME) {
					this.checkInPostData.userPhoto = this.dedicatedModeCapturedSelfieForCheckinProcess;
				}
				this.processCheckinDetailsStepInduction(apiService, isGuest);
			} else {
				this.dedicatedModeCapturePhotoFor = EnumService.DedicatedModeCapturePhotoForType.LocationPhoto;
				this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
			}
		} else {
			this.processCheckinDetailsStepInduction(apiService, isGuest);
		}
	}

	processCheckinDetailsStepInduction(apiService, isGuest) {
		if (this.checkInDetail?.checkInEntityDetail?.processInduction && this.checkInDetail?.checkInInductionItems?.length > 0) {
			this.navCtrl.navigateForward(['checkin-induction']);
		} else {
			this.processCheckinDetailsStepSubmit(apiService, isGuest);
		}
	}

	processCheckinDetailsStepSubmit(apiService, isGuest) {
		if (isGuest) {
			this.submitInductionCheckInDataGuest(apiService);
		} else {
			this.submitInductionCheckInData(apiService);
		}
	}

	uploadVideo(selectedVideo, mimeType, callBack, progress) {
		const accessID = this.deviceUID;
		const token = localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN);

		const url = this.apiBaseUrl + '/' + EnumService.ApiMethods.FormPhotoOrVideoUpload;
		const filename = selectedVideo.substr(selectedVideo.lastIndexOf('/') + 1);
		const options: FileUploadOptions = {
			fileName: filename,
			fileKey: 'file',
			mimeType,
			headers: {
				accessID,
				token,
			},
		};
		this.videoFileUpload = this.fileTransfer.create();

		this.videoFileUpload
			.upload(selectedVideo, url, options)
			.then((data) => {
				UtilService.fireCallBack(progress, 0);
				return JSON.parse(data.response);
			})
			.then((data) => {
				UtilService.fireCallBack(progress, 100);
				UtilService.fireCallBack(callBack, { status: true, result: data });
			})
			.catch((err) => {
				UtilService.fireCallBack(progress, 0);
				UtilService.fireCallBack(callBack, { status: false, result: err });
			});
		this.videoFileUpload.onProgress((data) => {
			const uploadPercent = Math.round((data.loaded / data.total) * 100);
			UtilService.fireCallBack(progress, uploadPercent);
		});
	}

	public async saveFormAnswers(
		apiService: ApiService,
		formGroup: FormGroup,
		formBuilderDetail,
		personalModeLoggedUser: User,
		callBack,
		havAnswerDetail: HavAnswerDetail = null,
		workPermitAnswer: WorkPermitAnswer = null
	) {
		if (!environment.isWebApp) {
			const sections = formBuilderDetail.sections;

			let requiredFieldsCount = 0;
			let requiredFieldsValidCount = 0;

			let filledFieldsCount = 0;
			let filledFieldsValidCount = 0;

			if (sections) {
				sections.map((section, sectionIndex) => {
					if (this.utilService.shouldShowSection(section)) {
						if (section.isRiskAssessmentSection) {
							const tasks = section.riskAssessmentAnswerDetails?.taskAnswers;
							tasks.map((task) => {
								if (task.isRequired) {
									requiredFieldsCount++;
									const hazards = task.hazardAnswers;
									let isValid = true;
									if (!task.taskAnswerTitle) {
										isValid = false;
									}
									hazards.map((hazard) => {
										if (!hazard.hazardAnswerTitle) {
											isValid = false;
										}
										if (!hazard.riskRatingSeverityID || !hazard.riskRatingProbabilityID) {
											isValid = false;
										}
										if (!hazard.residualRiskRatingSeverityID || !hazard.residualRiskRatingProbabilityID) {
											isValid = false;
										}

										if (hazard.isMembersOfTheWorkForce) {
											if (!hazard.isMembersOfTheWorkForceUserIDs && !hazard.isMembersOfTheWorkForceUserGroupIDs.length) {
												isValid = false;
											}
											if (hazard.hasPersonnelExposedNotification) {
												if (!hazard.personnelExposedNotificationUserIDs && !hazard.personnelExposedNotificationUserGroupIDs) {
													isValid = false;
												}
											}
										}

										if (hazard.isMembersOfThePublic) {
											if (!hazard.membersOfThePublicDescription) {
												isValid = false;
											}
										}

										const controlMeasures = hazard.controlMeasureAnswers;
										if (controlMeasures && controlMeasures.length > 0) {
											controlMeasures.map((controlMeasure) => {
												if (!controlMeasure.controlMeasureAnswerTitle) {
													isValid = false;
												}
											});
										} else {
											isValid = false;
										}
									});
									if (isValid) {
										requiredFieldsValidCount++;
										filledFieldsCount++;
									}
								}
							});
						} else if (section.isHAVSection) {
							requiredFieldsCount++;
							filledFieldsCount++;
							requiredFieldsValidCount++;
							//skip
						} else {
							const questions = section.questions;
							questions.map((question, questionIndex) => {
								if (this.utilService.shouldShowQuestion(question)) {
									const controlName = UtilService.FCUniqueName(section, question);
									const control = formGroup.controls[controlName];
									if (question.questionIsRequired) {
										requiredFieldsCount++;
									}

									if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
										const formGroups = control.value as FormGroup;
										const multipleChoiceValueIDs = [];
										question.answerChoiceAttributes.map((choice) => {
											const choiceControl = formGroups[UtilService.SubFCName(controlName, choice.answerChoiceAttributeId)];
											if (choiceControl) {
												multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
											}
										});
										if (multipleChoiceValueIDs.length > 0) {
											filledFieldsValidCount++;
											filledFieldsValidCount++;
											if (question.questionIsRequired) {
												requiredFieldsValidCount++;
											}
										}
									} else {
										if (control.value) {
											filledFieldsCount++;
											if (control.valid) {
												filledFieldsValidCount++;
												if (question.questionIsRequired) {
													requiredFieldsValidCount++;
												}
											}
										} else if (section.isAccidentReportSection && question.selectedAnswerTypeId === EnumService.CustomAnswerType.LocationSelection) {
											const locationNameControl = formGroup.controls[EnumService.AccidentCustomLocationControlsName.LocationName];
											if (locationNameControl.value && locationNameControl.valid) {
												if (question.questionIsRequired) {
													requiredFieldsValidCount++;
												}
											}
										}
									}
								}
							});
						}
					}
				});
			}

			if (formGroup.valid && requiredFieldsCount === requiredFieldsValidCount && filledFieldsCount > 0) {
				let attachmentCount = 0;
				let attachmentUploadedCount = 0;
				const attachemtUploaded = {};

				let loading;

				sections.map((section, sectionIndex) => {
					if (this.utilService.shouldShowSection(section)) {
						const questions = section.questions;
						questions.map(async (question, questionIndex) => {
							if (this.utilService.shouldShowQuestion(question)) {
								const controlName = UtilService.FCUniqueName(section, question);
								const control = formGroup.controls[controlName];

								if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.PhotoVideoUpload) {
									if (control && control.value) {
										attachmentCount++;

										let fileName = 'photo' + this.utilService.getCurrentTimeStamp() + '.jpeg';
										let mimeType = 'image/jpeg';
										let isVideo = false;
										if (StaticDataService.videoFormats.indexOf(control.value.split('.').pop().toLowerCase()) !== -1) {
											isVideo = true;
											fileName = control.value.substr(control.value.lastIndexOf('/') + 1);
											mimeType = StaticDataService.fileMimeTypes[control.value.split('.').pop().toLowerCase()];
										}

										this.utilService
											.dataUriToFile(control.value, fileName, mimeType)
											.then(async (file) => {
												if (!loading) {
													this.utilService.presentLoadingWithOptions();
													loading = true;
												}

												if (isVideo) {
													this.uploadVideo(
														file,
														mimeType,
														(response) => {
															console.log('Uploaded ' + ' ' + fileName + '' + response);
															if (response.status) {
																attachemtUploaded[question.questionId] = response.result.Result;
															}
															attachmentUploadedCount++;
															if (attachmentCount === attachmentUploadedCount) {
																loading = false;
																this.utilService.hideLoading();
																this.submitFormAnswers(
																	apiService,
																	formGroup,
																	formBuilderDetail,
																	personalModeLoggedUser,
																	callBack,
																	havAnswerDetail,
																	workPermitAnswer,
																	attachemtUploaded
																);
															}
														},
														(progress) => {
															console.log('Progress ' + ' ' + fileName + '' + progress);
														}
													);
												} else {
													apiService.formPhotoOrVideoUpload(file, fileName).subscribe(
														(response: Response) => {
															attachemtUploaded[question.questionId] = response.Result;
															attachmentUploadedCount++;
															if (attachmentCount === attachmentUploadedCount) {
																loading = false;
																this.utilService.hideLoading();
																this.submitFormAnswers(
																	apiService,
																	formGroup,
																	formBuilderDetail,
																	personalModeLoggedUser,
																	callBack,
																	havAnswerDetail,
																	workPermitAnswer,
																	attachemtUploaded
																);
															}
														},
														(error) => {
															attachmentUploadedCount++;
															if (attachmentCount === attachmentUploadedCount) {
																loading = false;
																this.utilService.hideLoading();
																this.submitFormAnswers(
																	apiService,
																	formGroup,
																	formBuilderDetail,
																	personalModeLoggedUser,
																	callBack,
																	havAnswerDetail,
																	workPermitAnswer,
																	attachemtUploaded
																);
															}
														}
													);
												}
											})
											.catch(() => {
												attachmentUploadedCount++;
												if (attachmentCount === attachmentUploadedCount) {
													loading = false;
													this.utilService.hideLoading();
													this.submitFormAnswers(
														apiService,
														formGroup,
														formBuilderDetail,
														personalModeLoggedUser,
														callBack,
														havAnswerDetail,
														workPermitAnswer,
														attachemtUploaded
													);
												}
											});
									}
								}
							}
						});
					}
				});

				if (attachmentCount === 0) {
					this.submitFormAnswers(apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack, havAnswerDetail, workPermitAnswer);
				}
			} else if (requiredFieldsCount === 0 && filledFieldsCount === 0) {
				this.translateService.get('SHARED_TEXT.ERRORS.ATLEAST_ONE_ANSWER_TO_BE_FILLED_IN').subscribe((res) => {
					const errorMessage = res;
					callBack(false, errorMessage);
				});
			} else if (requiredFieldsValidCount === 0) {
				this.translateService.get('SHARED_TEXT.ERRORS.ALL_FIELDS_REQUIRED').subscribe((res) => {
					const errorMessage = res;
					callBack(false, errorMessage);
				});
			} else {
				const missingFieldCount = requiredFieldsCount - requiredFieldsValidCount;
				if (missingFieldCount === 0 && filledFieldsCount !== filledFieldsValidCount) {
					this.translateService.get('SHARED_TEXT.ERRORS.INCORRECT_DATA_FOUND_PLS_CHECK_ANSWERS').subscribe((res) => {
						const errorMessage = res;
						callBack(false, errorMessage);
					});
				} else {
					this.translateService.get('SHARED_TEXT.ERRORS.REQUIRED_FIELDS_NEED_TO_FILL').subscribe((res) => {
						const errorMessage = missingFieldCount + ' ' + res;
						callBack(false, errorMessage);
					});
				}
			}
		}
	}

	private submitFormAnswers = (
		apiService: ApiService,
		formGroup: FormGroup,
		formBuilderDetail,
		personalModeLoggedUser: User,
		callBack,
		havAnswerDetail: HavAnswerDetail = null,
		workPermitAnswer: WorkPermitAnswer = null,
		attachemtUploaded = {}
	) => {
		const sections = formBuilderDetail.sections;
		const workPermitDetails = formBuilderDetail.workPermitDetails;
		const accidentReport = formBuilderDetail.accidentReport;
		const formVersionId = formBuilderDetail.formVersionId;

		const questionAnswers = [];
		const accidentReportQuestionAnswers = [];
		const riskAssessmentAnswers = [];
		const riskAssessmentAnswerDetails = { taskAnswers: [] };

		const selectedLanguageID = this.getLanguageIdForForm();

		const formattedSections = [];

		const userId = this.dedicatedMode ? this.dedicatedModeUserDetail.userId : personalModeLoggedUser.userId;
		const companyId = this.dedicatedMode ? this.dedicatedModeDeviceDetailData.companyID : personalModeLoggedUser.companyID;

		sections.map((section, sectionIndex) => {
			if (this.utilService.shouldShowSection(section)) {
				const formattedAnswers = [];
				const sectionFormattedObject: any = JSON.parse(JSON.stringify(section));

				if (section.isRiskAssessmentSection) {
					const tasks = section.riskAssessmentAnswerDetails?.taskAnswers;
					riskAssessmentAnswerDetails.taskAnswers = tasks;
					tasks.map((task) => {
						if (this.utilService.shouldShowQuestion(task)) {
							const answerFormattedObject: any = JSON.parse(JSON.stringify(task));
							const hazardsAnswers = task.hazardAnswers;

							answerFormattedObject.answerData = hazardsAnswers;
							formattedAnswers.push(answerFormattedObject);
						}
					});

					sectionFormattedObject.taskAnswerData = formattedAnswers;
				} else if (section.isHAVSection) {
					const havAssessmentTools = section.havAssessmentTools;
					havAssessmentTools.some((havAssessmentTool) => {
						const questions = havAssessmentTool.questions;

						questions.some((question, questionIndex) => {
							const questionDisplayOrder = questionIndex + 1;
							const questionLabel = UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', selectedLanguageID).questionTranslationTitle;
							const answerFormattedObject: any = JSON.parse(JSON.stringify(question));

							const havQuestionAnswerObject: HavAnswerObject = {
								hAVQuestionAnswerId: 0,
								questionID: question.questionId,
								questionTitle: questionLabel,
								formVersionID: formVersionId,
								answerTypeID: question.selectedAnswerTypeId,
								hAVSequence: question.questionDisplayOrder,
								[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed]: question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed],
								[EnumService.QuestionLogic.ActionTypeForForm.Notify]: question[EnumService.QuestionLogic.ActionTypeForForm.Notify],
								[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity]: question[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity],
							};

							let isValueFilled = false;
							switch (questionDisplayOrder) {
								case EnumService.HavFormFieldOrder.DateOfUsage:
									if (question.value) {
										havQuestionAnswerObject.dateOfUsage = moment(question.value).format(StaticDataService.dateFormat);
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.Manufacturer:
									if (question.value) {
										havQuestionAnswerObject.hAVManufacturerID = question.value;
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.Type:
									if (question.value) {
										havQuestionAnswerObject.hAVTypeID = question.value;
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.Model:
									if (question.value) {
										havQuestionAnswerObject.hAVModelID = question.value;
										isValueFilled = true;
									}
									break;
								case EnumService.HavFormFieldOrder.PlannedTimeOfUsage:
									if (question.value) {
										isValueFilled = true;
										havQuestionAnswerObject.plannedTimeOfUse = Number(question.value);
									}
									break;
							}

							if (isValueFilled) {
								answerFormattedObject.havAnswerData = havQuestionAnswerObject;
								formattedAnswers.push(answerFormattedObject);
							}
						});
					});

					sectionFormattedObject.answerData = formattedAnswers;
				} else {
					const questions = section.questions;

					questions.map((question, questionIndex) => {
						const questionDisplayOrder = questionIndex + 1;
						if (this.utilService.shouldShowQuestion(question)) {
							const answerFormattedObject: any = JSON.parse(JSON.stringify(question));
							const controlName = UtilService.FCUniqueName(section, question);
							const control = formGroup.controls[controlName];
							let isValueFilled = false;

							if (control) {
								const questionLabel = UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', selectedLanguageID).questionTranslationTitle;

								if (section.isAccidentReportSection) {
									const answerObject: ArAnswerObject = {
										accidentReportQuestionAnswerId: 0,
										questionID: question.questionId,
										questionTitle: questionLabel,
										formVersionID: formVersionId,
										answerTypeID: question.selectedAnswerTypeId,
										accidentAnswerSequence: question.questionDisplayOrder,
										[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed]: question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed],
										[EnumService.QuestionLogic.ActionTypeForForm.Notify]: question[EnumService.QuestionLogic.ActionTypeForForm.Notify],
										[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity]: question[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity],
									};

									switch (questionDisplayOrder) {
										case EnumService.AccidentFormFieldOrder.AccidentDateTime:
											if (control.value) {
												isValueFilled = true;
												answerObject.accidentDateTime = moment(control.value).format(StaticDataService.dateTimeFormat);
											}
											break;
										case EnumService.AccidentFormFieldOrder.AccidentLocation:
											const placeNotintheList = formGroup.controls.placeNotintheList;
											const locationName = formGroup.controls.locationName;

											if (placeNotintheList.value) {
												isValueFilled = true;
												answerObject.accidentLocationName = locationName.value;
											} else if (control.value) {
												isValueFilled = true;
												const entityIds = this.utilService.getRelevantEntityId(control.value);
												answerObject.accidentInventoryID = entityIds.InventoryID;
												answerObject.accidentProjectID = entityIds.ProjectID;
												answerObject.accidentLocationID = entityIds.LocationID;
											}
											break;

										case EnumService.AccidentFormFieldOrder.About:
											const formGroups = control.value as FormGroup;
											const multipleChoiceValueIDs = [];
											question.answerChoiceAttributes.map((choice) => {
												const choiceControl = formGroups[UtilService.SubFCName(controlName, choice.answerChoiceAttributeId)];
												if (choiceControl) {
													multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
												}
											});
											if (multipleChoiceValueIDs.length > 0) {
												isValueFilled = true;
												answerObject.accidentAboutIDs = multipleChoiceValueIDs.join(',');
											}
											break;
										case EnumService.AccidentFormFieldOrder.Type:
											if (control.value) {
												isValueFilled = true;
												answerObject.accidentTypeID = control.value;
											}
											break;
										case EnumService.AccidentFormFieldOrder.Classification:
											if (control.value) {
												isValueFilled = true;
												answerObject.accidentClassificationID = control.value;
											}
											break;
										case EnumService.AccidentFormFieldOrder.BodyPartEffected:
											const bodyPartFormGroups = control.value as FormGroup;
											const bodyPartsIDs = [];
											StaticDataService.bodyParts.map((partGroup) => {
												partGroup.parts.map((part) => {
													const choiceControl = bodyPartFormGroups[UtilService.SubFCName(controlName, part.id)];
													if (choiceControl) {
														bodyPartsIDs.push(part.id);
													}
												});
											});
											if (bodyPartsIDs.length > 0) {
												isValueFilled = true;
												answerObject.accidentBodyPartIDs = bodyPartsIDs.join(',');
											}
											break;
										case EnumService.AccidentFormFieldOrder.Description:
											if (control.value) {
												isValueFilled = true;
												answerObject.accidentDescription = control.value;
											}
											break;
										case EnumService.AccidentFormFieldOrder.Attachment:
											if (attachemtUploaded[question.questionId]) {
												isValueFilled = true;
												answerObject.accidentAttachmentFileName = attachemtUploaded[question.questionId];
											}
											break;
									}

									if (isValueFilled) {
										accidentReportQuestionAnswers.push(answerObject);
										answerFormattedObject.arAnswerData = answerObject;
									}
								} else {
									const answerObject: FormAnswerObject = {
										questionAnswerId: 0,
										questionID: question.questionId,
										questionTitle: questionLabel,
										formVersionID: formVersionId,
										answerTypeID: question.selectedAnswerTypeId,
										multipleChoiceAnswers: [],
										[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed]: question[EnumService.QuestionLogic.ActionTypeForForm.MarkAsFailed],
										[EnumService.QuestionLogic.ActionTypeForForm.Notify]: question[EnumService.QuestionLogic.ActionTypeForForm.Notify],
										[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity]: question[EnumService.QuestionLogic.ActionTypeForForm.CreateNewActivity],
									};

									switch (question.selectedAnswerTypeId) {
										case EnumService.CustomAnswerType.ClassicDropdown:
											if (control.value) {
												isValueFilled = true;
												answerObject.singleChoiceValueID = control.value[question.listValueKey];
											}
											break;
										case EnumService.CustomAnswerType.SingleLineText:
										case EnumService.CustomAnswerType.MultiLineText:
											if (control.value) {
												isValueFilled = true;
												answerObject.textValue = control.value;
											}
											break;
										case EnumService.CustomAnswerType.SingleChoiceSet:
											if (control.value) {
												isValueFilled = true;
												answerObject.singleChoiceValueID = control.value;
											}
											break;

										case EnumService.CustomAnswerType.MultipleChoiceSet:
											const formGroups = control.value as FormGroup;
											const multipleChoiceValueIDs = [];
											question.answerChoiceAttributes.map((choice) => {
												const choiceControl = formGroups[UtilService.SubFCName(controlName, choice.answerChoiceAttributeId)];
												if (choiceControl) {
													multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
												}
											});
											if (multipleChoiceValueIDs.length > 0) {
												isValueFilled = true;
												answerObject.multipleChoiceValueIDs = multipleChoiceValueIDs.join(',');
											}
											break;
										case EnumService.CustomAnswerType.ConfirmationBox:
											if (control.value) {
												isValueFilled = true;
												answerObject.isConfirmBoxChecked = true;
											}
											break;
										case EnumService.CustomAnswerType.ScanQrCodeField:
											if (control.value) {
												isValueFilled = true;
												const entityItem: EntityItem = control.value as EntityItem;
												answerObject.selectedQRCodeType = entityItem.entityType;
												switch (entityItem.entityType) {
													case EnumService.SelectedQRCodeType.Location:
														answerObject.qrCodeLocationID = entityItem.entityID;
														answerObject.qrCodeLocationName = entityItem.entityName;
														break;
													case EnumService.SelectedQRCodeType.Project:
														answerObject.qrCodeProjectID = entityItem.entityID;
														answerObject.qrCodeProjectName = entityItem.entityName;
														break;
													case EnumService.SelectedQRCodeType.InventoryItem:
														answerObject.qrCodeInventoryItemID = entityItem.entityID;
														answerObject.qrCodeInventoryItemName = entityItem.entityName;
														break;
													case EnumService.SelectedQRCodeType.Document:
														answerObject.qrCodeDocumentID = entityItem.entityID;
														answerObject.qrCodeDocumentName = entityItem.entityName;
														break;
													case EnumService.SelectedQRCodeType.Form:
														answerObject.qrCodeFormID = entityItem.entityID;
														answerObject.qrCodeFormTitle = entityItem.entityName;
														break;
													case EnumService.SelectedQRCodeType.User:
														answerObject.qrCodeUserID = entityItem.entityID;
														answerObject.qrCodeUserName = entityItem.entityName;
														break;

													default:
														break;
												}
											}
											break;
										case EnumService.CustomAnswerType.NumberFieldInteger:
											if (control.value) {
												isValueFilled = true;
												answerObject.integerValue = Number(control.value);
											}
											break;
										case EnumService.CustomAnswerType.NumberFieldDecimal:
											if (control.value) {
												isValueFilled = true;
												answerObject.decimalValue = Number(control.value);
											}
											break;
										case EnumService.CustomAnswerType.DateField:
											if (control.value) {
												isValueFilled = true;
												answerObject.dateValue = moment(control.value).format(StaticDataService.dateFormat);
											}
											break;
										case EnumService.CustomAnswerType.TimeField:
											if (control.value) {
												isValueFilled = true;
												answerObject.timeValue = moment(control.value).format(StaticDataService.timeFormat);
											}
											break;
										case EnumService.CustomAnswerType.DateTimeField:
											if (control.value) {
												isValueFilled = true;
												answerObject.dateTimeValue = moment(control.value).format(StaticDataService.dateTimeFormat);
											}
											break;
										case EnumService.CustomAnswerType.PhotoVideoUpload:
											if (attachemtUploaded[question.questionId]) {
												isValueFilled = true;
												answerObject.imageVideoFileName = attachemtUploaded[question.questionId];
											}
											break;
									}

									// if additional comment
									if (question.shouldShowOptionalComment) {
										const additionalControl = formGroup.controls[UtilService.FCNameAdditioanlNoteUq(controlName)];
										if (additionalControl.value) {
											answerObject.questionComment = additionalControl.value;
										}
									}

									if (isValueFilled) {
										questionAnswers.push(answerObject);
										answerFormattedObject.answerData = answerObject;
									}
								}
							}

							if (isValueFilled) {
								formattedAnswers.push(answerFormattedObject);
							}
						}
					});
					sectionFormattedObject.answerData = formattedAnswers;
				}

				if (
					(sectionFormattedObject.answerData && sectionFormattedObject.answerData.length > 0) ||
					(sectionFormattedObject.taskAnswerData && sectionFormattedObject.taskAnswerData.length > 0)
				) {
					formattedSections.push(sectionFormattedObject);
				}
			}
		});

		const submitAnswersObject: SubmitAnswersObject = {
			formId: formBuilderDetail.formId,
			formVersionId,
			selectedLanguageID,
			formTypeId: formBuilderDetail.formTypeID,
			userId,
			companyId,
			questionAnswers,
			accidentReportQuestionAnswers,
			riskAssessmentAnswers,
			havAnswerDetail: havAnswerDetail,
			workPermitAnswer,
			formattedSections,
			workPermitDetails,
			accidentReport,
			riskAssessmentAnswerDetails,
		};

		// if (UtilService.isLocalHost()) {
		// 	console.log('Submit Answers', JSON.stringify(submitAnswersObject));
		// 	return;
		// }

		this.utilService.presentLoadingWithOptions();
		apiService.saveFormAnswers(submitAnswersObject).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				if (
					this.viewFormFor === EnumService.ViewFormForType.Activity ||
					this.viewFormFor === EnumService.ViewFormForType.CurrentCheckin ||
					this.viewFormFor === EnumService.ViewFormForType.CurrentCheckinWorkPermit ||
					this.viewFormFor === EnumService.ViewFormForType.FormDM ||
					this.viewFormFor === EnumService.ViewFormForType.WorkPermitDM
				) {
					this.workPermitAnswer = workPermitAnswer;
					this.startFormSignOffProcess(userId, apiService, response.Result);
				} else if (this.viewFormFor === EnumService.ViewFormForType.Induction) {
					if (this.checkInPostData) {
						this.checkInPostData.inductionFormContent = response.Result.formAnswerHtmlString;
						this.checkInPostData.answerNotificationList = response.Result.answerNotificationList;
					}
					this.inductionNavigationProcess(userId, this.inductionContentItemIndex);
				}
				callBack(true, response.Result);
			},
			(error) => {
				callBack(false, error.message);
				this.utilService.hideLoading();
			}
		);
	};

	private startFormSignOffProcess(userId, apiService: ApiService, saveAnswerResult) {
		const signOffFormDetail = this.signOffFormDetail;

		if (this.dedicatedMode) {
			this.signOffDetailsPostData = {
				userId,
				formVersionID: signOffFormDetail?.formData?.formVersionID,
				latitude: this.myCurrentGeoLocation?.coords?.latitude,
				longitude: this.myCurrentGeoLocation?.coords?.longitude,
				locationID: this.dedicatedModeLocationUse?.locationID,
				projectID: this.dedicatedModeLocationUse?.projectID,
				inventoryItemID: this.dedicatedModeLocationUse?.inventoryItemID,
				formContent: saveAnswerResult.formAnswerHtmlString,
				answerNotificationList: saveAnswerResult.answerNotificationList,
			} as SignOffDetailsPostData;
		} else {
			this.signOffDetailsPostData = {
				userId,
				formVersionID: signOffFormDetail?.formData?.formVersionID,
				latitude: this.myCurrentGeoLocation?.coords?.latitude,
				longitude: this.myCurrentGeoLocation?.coords?.longitude,
				locationID: this.currentSelectedCheckinPlace?.locationID,
				projectID: this.currentSelectedCheckinPlace?.projectID,
				inventoryItemID: this.currentSelectedCheckinPlace?.inventoryItemID,
				userCheckInDetailID: this.currentSelectedCheckinPlace?.userCheckInDetailID,
				formContent: saveAnswerResult.formAnswerHtmlString,
				answerNotificationList: saveAnswerResult.answerNotificationList,
			} as SignOffDetailsPostData;
		}

		if (this.viewFormFor === EnumService.ViewFormForType.Activity) {
			this.signOffDetailsPostData.activityIndividualID = this.currentActivityOpen?.activityIndividualID;
			if (!this.currentSelectedCheckinPlace && signOffFormDetail.entityList.length > 0) {
				const locationItem = signOffFormDetail.entityList[0];
				const entityIds = this.utilService.getRelevantEntityId(locationItem.locationID);
				this.signOffDetailsPostData.locationID = entityIds.LocationID;
				this.signOffDetailsPostData.projectID = entityIds.ProjectID;
				this.signOffDetailsPostData.inventoryItemID = entityIds.InventoryID;
			}
			this.signOffFor = EnumService.SignOffType.FORM_ACTIVITY;
		} else if (this.viewFormFor === EnumService.ViewFormForType.CurrentCheckin) {
			this.signOffFor = EnumService.SignOffType.FORM_CURRENT_CHECKIN;
		} else if (this.viewFormFor === EnumService.ViewFormForType.CurrentCheckinWorkPermit) {
			this.signOffFor = EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN;
		} else if (this.viewFormFor === EnumService.ViewFormForType.FormDM) {
			this.signOffFor = EnumService.SignOffType.FORMS_DM;
		} else if (this.viewFormFor === EnumService.ViewFormForType.WorkPermitDM) {
			this.signOffFor = EnumService.SignOffType.WORK_PERMIT_DM;
		}

		if (signOffFormDetail.formData.isDigitalSignOff || signOffFormDetail.formData.isSignatureSignOff) {
			this.navCtrl.navigateForward(['/signoff-digitalink']);
		} else if (signOffFormDetail.formData.isPhotoSignOff) {
			if (this.dedicatedMode) {
				this.dedicatedModeCapturePhotoFor = EnumService.DedicatedModeCapturePhotoForType.Signoff;
				this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
			} else {
				this.navCtrl.navigateForward(['/signoff-photo']);
			}
		} else {
			this.submitPersonalModeSignoffData(apiService);
		}
	}

	submitInductionCheckInData(apiService: ApiService) {
		this.utilService.presentLoadingWithOptions();
		const nextScreen = this.dedicatedMode ? '/dashboard-dm' : '/tabs/dashboard';

		const utcDateTime = moment().utc(false).format('DD.MM.YYYY HH:mm:ss');
		this.checkInPostData.signOffDate = utcDateTime;

		apiService.insertCheckInDetails(this.checkInPostData).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();

				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.observablesService.publishSomeData(EnumService.ObserverKeys.NEW_CHECKED_IN, response.Result);

					const suucessScreen = this.dedicatedMode ? '/checkinout-success-dm' : '/checkin-success';
					this.translateService.get(['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_HAVE_NOW_CHECKEDIN', 'SHARED_TEXT.CONTINUE']).subscribe((res) => {
						this.navCtrl.navigateForward([suucessScreen], {
							queryParams: {
								message: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_HAVE_NOW_CHECKEDIN'],
								nextPage: nextScreen,
								actionBtnTitle: res['SHARED_TEXT.CONTINUE'],
							},
							replaceUrl: true,
						});
					});
				}
			},
			(error) => {
				this.utilService.hideLoading();
				this.processCheckInError(error, nextScreen);
			}
		);
	}

	async submitInductionCheckInDataGuest(apiService: ApiService) {
		this.utilService.presentLoadingWithOptions();

		const nextScreen = this.dedicatedMode ? '/dashboard-dm' : '/tabs/dashboard';

		const utcDateTime = moment().utc(false).format('DD.MM.YYYY HH:mm:ss');
		this.checkInPostData.signOffDate = utcDateTime;

		apiService.insertCheckInDetailsGuest(this.checkInPostData).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();

				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.translateService.get(['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_HAVE_NOW_CHECKEDIN', 'SHARED_TEXT.CONTINUE']).subscribe((res) => {
						this.navCtrl.navigateForward(['/checkinout-success-dm'], {
							queryParams: {
								message: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_HAVE_NOW_CHECKEDIN'],
								nextPage: nextScreen,
								actionBtnTitle: res['SHARED_TEXT.CONTINUE'],
							},
							replaceUrl: true,
						});
					});
				}
			},
			(error) => {
				this.utilService.hideLoading();
				this.processCheckInError(error, nextScreen);
			}
		);
	}

	processCheckInError(error, nextScreen) {
		const exception = error.error as Response;
		const failScreen = this.dedicatedMode ? '/checkinout-fail-dm' : '/checkin-fail';

		if (exception?.ResponseException?.ValidationErrors?.length > 0) {
			const fieldsInfo = exception.ResponseException.ValidationErrors[0].Field.split('#');
			const fieldName = fieldsInfo[0];
			const message = exception.ResponseException.ValidationErrors[0].Message;

			if (fieldName === 'SimultaneousCheckIn') {
				const locationName = message.match(/\'(.*)\'/).pop();
				this.navCtrl.navigateForward(['/checkinout-alreadycheckin-dm'], {
					queryParams: {
						locationName,
						locationId: fieldsInfo[1],
					},
					replaceUrl: true,
				});
			} else if (fieldName === 'Location' && fieldsInfo.length > 1) {
				const locationName = this.getCurrentCheckedInEntityName();
				this.navCtrl.navigateForward(['/checkinout-alreadycheckin-dm'], {
					queryParams: {
						isAlreadyCheckedInSameLocation: 1,
						locationName,
						locationId: fieldsInfo[1],
					},
					replaceUrl: true,
				});
			} else if (fieldName === 'Qualification') {
				this.translateService
					.get([
						'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN',
						'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.NO_QUALIFICATION',
						'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_DO_NOT_HAVE_THE_REQUIRED_QUALIFICATIONS',
					])
					.subscribe((res) => {
						this.navCtrl.navigateForward([failScreen], {
							queryParams: {
								title: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN'],
								errorTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.NO_QUALIFICATION'],
								errorMessage: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_DO_NOT_HAVE_THE_REQUIRED_QUALIFICATIONS'],
								nextPage: nextScreen,
							},
							replaceUrl: true,
						});
					});
			} else {
				this.translateService.get('PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN').subscribe((res) => {
					this.navCtrl.navigateForward([failScreen], {
						queryParams: {
							title: res,
							errorTitle: fieldName,
							errorMessage: message,
							nextPage: nextScreen,
						},
						replaceUrl: true,
					});
				});
			}
		} else {
			this.translateService
				.get([
					'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN',
					'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.NO_QUALIFICATION',
					'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_DO_NOT_HAVE_THE_REQUIRED_QUALIFICATIONS',
				])
				.subscribe((res) => {
					this.navCtrl.navigateForward([failScreen], {
						queryParams: {
							title: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_CANNOT_CHECKIN'],
							errorTitle: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.NO_QUALIFICATION'],
							errorMessage: res['PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_DO_NOT_HAVE_THE_REQUIRED_QUALIFICATIONS'],
							nextPage: nextScreen,
						},
						replaceUrl: true,
					});
				});
		}
	}

	/**
	 * This function is use for submit personal mode sign off data
	 */
	async submitPersonalModeSignoffData(apiService: ApiService) {
		this.utilService.presentLoadingWithOptions();

		const checkInSuccessPage = this.dedicatedMode ? '/checkinout-success-dm' : '/checkin-success';
		const checkInFailPage = this.dedicatedMode ? '/checkinout-fail-dm' : '/checkin-fail';
		let nextPage = this.dedicatedMode ? 'dashboard-dm' : '/tabs/dashboard';

		const isWorkPermitCurrentCheckin = this.signOffFor === EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN || this.signOffFor === EnumService.SignOffType.WORK_PERMIT_DM;
		const isworkPermitActivity = this.signOffFor === EnumService.SignOffType.FORM_ACTIVITY && this.signOffFormDetail?.formData?.formType === EnumService.FormTypes.WORK_PERMIT;

		if (this.dedicatedMode) {
			switch (this.dedicatedModeProcessType) {
				case EnumService.DedicatedModeProcessTypes.Document:
					nextPage = 'documents-dm';
					break;
				case EnumService.DedicatedModeProcessTypes.Form:
					nextPage = 'forms-dm';
					break;
				case EnumService.DedicatedModeProcessTypes.WorkPermit:
					nextPage = 'permits-dm';
					break;
			}
		} else {
			if (isWorkPermitCurrentCheckin) {
				nextPage = '/tabs/current-checkin/checkin-workpermit';
			} else if (isworkPermitActivity) {
				nextPage = '/tabs/dashboard';
			}
		}

		const utcDateTime = moment().utc(false).format('DD.MM.YYYY HH:mm:ss');
		this.signOffDetailsPostData.signOffDate = utcDateTime;

		apiService.insertPersonalModeSignOffDetails(this.signOffDetailsPostData).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();

				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					if (this.signOffFor === EnumService.SignOffType.FORM_ACTIVITY || this.signOffFor === EnumService.SignOffType.DOCUMENT_ACTIVITY) {
						this.observablesService.publishSomeData(EnumService.ObserverKeys.ACTIVITY_COMPLETED, true);
					}

					// show work permit issue success/fail for work permit type form filled from current checkin or activity list

					if (isWorkPermitCurrentCheckin || isworkPermitActivity) {
						if (this.workPermitAnswer.scoreAchieved >= this.workPermitAnswer.totalScore) {
							this.translateService
								.get([
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.PASSED',
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.PERMIT_ISSUED',
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.YOUR_WORK_PERMIT_IS_ACTIVE',
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.WORK_PERMIT',
								])
								.subscribe((res) => {
									this.navCtrl.navigateForward([checkInSuccessPage], {
										queryParams: {
											title: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.PASSED'],
											message: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.PERMIT_ISSUED'],
											description: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.YOUR_WORK_PERMIT_IS_ACTIVE'],
											nextPage,
											pageTitle: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.WORK_PERMIT'],
										},
										replaceUrl: true,
									});
								});
						} else {
							this.translateService
								.get([
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_PASSED',
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NO_PERMIT',
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_ELIGIBLE_FOR_WORK_PERMIT',
									'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.WORK_PERMIT',
								])
								.subscribe((res) => {
									this.navCtrl.navigateForward([checkInFailPage], {
										queryParams: {
											title: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_PASSED'],
											errorTitle: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NO_PERMIT'],
											errorMessage: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_ELIGIBLE_FOR_WORK_PERMIT'],
											nextPage,
											pageTitle: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.WORK_PERMIT'],
										},
										replaceUrl: true,
									});
								});
						}
					} else {
						this.translateService.get(['PAGESPECIFIC_TEXT.SIGN_OFF.YOU_SIGNOFF_OFF_SUCCESSFULLY', 'PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF']).subscribe((res) => {
							this.navCtrl.navigateForward([checkInSuccessPage], {
								queryParams: {
									message: res['PAGESPECIFIC_TEXT.SIGN_OFF.YOU_SIGNOFF_OFF_SUCCESSFULLY'],
									nextPage,
									pageTitle: res['PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF'],
								},
							});
						});
					}
				} else {
					if (isWorkPermitCurrentCheckin || isworkPermitActivity) {
						this.translateService
							.get([
								'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_PASSED',
								'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NO_PERMIT',
								'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_ELIGIBLE_FOR_WORK_PERMIT',
								'PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.WORK_PERMIT',
							])
							.subscribe((res) => {
								this.navCtrl.navigateForward([checkInFailPage], {
									queryParams: {
										title: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_PASSED'],
										errorTitle: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NO_PERMIT'],
										errorMessage: res['PAGESPECIFIC_TEXT.FORM_LIST.SPECIFIC_FORMS.WORK_PERMIT_FORM.NOT_ELIGIBLE_FOR_WORK_PERMIT'],
										nextPage,
										pageTitle: res['PAGESPECIFIC_TEXT.PAGESPECIFIC_TEXT.FORM_LIST'],
									},
									replaceUrl: true,
								});
							});
					} else {
						this.translateService
							.get(['PAGESPECIFIC_TEXT.SIGN_OFF.YOU_CANNOT_SIGNOFF', 'PAGESPECIFIC_TEXT.SIGN_OFF.NOT_QUALIFIED', 'PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF'])
							.subscribe((res) => {
								this.navCtrl.navigateForward([checkInFailPage], {
									queryParams: {
										title: res['PAGESPECIFIC_TEXT.SIGN_OFF.YOU_CANNOT_SIGNOFF'],
										errorTitle: res['PAGESPECIFIC_TEXT.SIGN_OFF.NOT_QUALIFIED'],
										errorMessage: response.Message,
										nextPage,
										pageTitle: res['PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF'],
									},
									replaceUrl: true,
								});
							});
					}
				}
			},
			(error) => {
				this.utilService.hideLoading();

				this.translateService.get(['PAGESPECIFIC_TEXT.SIGN_OFF.YOU_CANNOT_SIGNOFF', 'PAGESPECIFIC_TEXT.SIGN_OFF.NOT_QUALIFIED', 'PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF']).subscribe((res) => {
					this.navCtrl.navigateForward([checkInFailPage], {
						queryParams: {
							title: res['PAGESPECIFIC_TEXT.SIGN_OFF.YOU_CANNOT_SIGNOFF'],
							errorTitle: res['PAGESPECIFIC_TEXT.SIGN_OFF.NOT_QUALIFIED'],
							errorMessage: error.message || error,
							nextPage,
							pageTitle: res['PAGESPECIFIC_TEXT.SIGN_OFF.SIGNOFF'],
						},
						replaceUrl: true,
					});
				});
			}
		);
	}

	/**
	 * Navigate to the induction item type screen
	 * @param userId for personal mode, it will get on the time of login
	 * @param inductionContentItemIndex index of induction item
	 */

	inductionNavigationProcess(userId = null, inductionContentItemIndex) {
		if (this.checkInDetail) {
			const inductionItems = this.checkInDetail.checkInInductionItems;
			if (inductionItems && inductionContentItemIndex < inductionItems.length - 1) {
				const inductionContentItem = inductionItems[inductionContentItemIndex + 1];
				if (inductionContentItem.contentType === EnumService.InductionContentTypes.FORM) {
					if (this.dedicatedMode) {
						this.utilService.presentLoadingWithOptions();
						this.apiServiceRerence.getDedicatedModeSignOffFormDetail(inductionContentItem.formID).subscribe(
							(response: Response) => {
								this.utilService.hideLoading();
								if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
									this.viewFormFor = EnumService.ViewFormForType.Induction;
									this.signOffFormDetail = response.Result as SignOffFormDetail;
									this.inductionContentItemIndex = inductionContentItemIndex + 1;
									this.navCtrl.navigateForward(UtilService.InductionContentTypeScreenIdentify(inductionContentItem.contentType, this.dedicatedMode), {
										queryParams: {
											inductionContentItemIndex: this.inductionContentItemIndex,
										},
										replaceUrl: true,
									});
								}
							},
							(error) => {
								this.utilService.hideLoading();
							}
						);
					} else {
						const entityIds = this.utilService.getRelevantEntityId(this.checkInForLocation?.locationID);
						const LocationID = entityIds.LocationID;
						const ProjectID = entityIds.ProjectID;
						const InventoryID = entityIds.InventoryID;

						this.utilService.presentLoadingWithOptions();
						this.apiServiceRerence.getSignOffFormDetail(userId, inductionContentItem.formID, LocationID, ProjectID, InventoryID).subscribe(
							(response: Response) => {
								this.utilService.hideLoading();
								if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
									this.viewFormFor = EnumService.ViewFormForType.Induction;
									this.signOffFormDetail = response.Result as SignOffFormDetail;
									this.inductionContentItemIndex = inductionContentItemIndex + 1;
									this.navCtrl.navigateForward(UtilService.InductionContentTypeScreenIdentify(inductionContentItem.contentType, this.dedicatedMode), {
										queryParams: {
											inductionContentItemIndex: this.inductionContentItemIndex,
										},
										replaceUrl: true,
									});
								}
							},
							(error) => {
								this.utilService.hideLoading();
							}
						);
					}
				} else {
					this.inductionContentItemIndex = inductionContentItemIndex + 1;
					this.navCtrl.navigateForward(UtilService.InductionContentTypeScreenIdentify(inductionContentItem.contentType, this.dedicatedMode), {
						queryParams: {
							inductionContentItemIndex: this.inductionContentItemIndex,
						},
						replaceUrl: true,
					});
				}
			} else if (this.checkInDetail.checkInInduction.isDigitalSignOff || this.checkInDetail.checkInInduction.isSignatureSignOff) {
				this.signOffFor = EnumService.SignOffType.INDUCTION;
				this.navCtrl.navigateForward(['/signoff-digitalink']);
			} else if (this.checkInDetail.checkInInduction.isPhotoSignOff) {
				this.signOffFor = EnumService.SignOffType.INDUCTION;
				if (this.dedicatedMode) {
					if (this.dedicatedModeCapturedSelfieForCheckinProcess) {
						this.checkInPostData.userSignaturePhoto = this.dedicatedModeCapturedSelfieForCheckinProcess;
						if (this.checkinoutDmAs === EnumService.CheckInType.AS_GUEST) {
							this.submitInductionCheckInDataGuest(this.apiServiceRerence);
						} else {
							this.submitInductionCheckInData(this.apiServiceRerence);
						}
					} else {
						this.dedicatedModeCapturePhotoFor = EnumService.DedicatedModeCapturePhotoForType.Signoff;
						this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
					}
				} else {
					this.navCtrl.navigateForward(['/signoff-photo']);
				}
			} else {
				this.submitInductionCheckInData(this.apiServiceRerence);
			}
		}
	}

	dedicatedModeDocumentSignOffProcess(photoName = null) {
		this.signOffDetailsPostData.userId = this.dedicatedModeUserDetail?.userId;
		if (this.signOffDocumentDetail.isDigitalSignOff || this.signOffDocumentDetail.isSignatureSignOff) {
			this.navCtrl.navigateForward(['/signoff-digitalink']);
		} else if (this.signOffDocumentDetail.isPhotoSignOff) {
			this.dedicatedModeCapturePhotoFor = EnumService.DedicatedModeCapturePhotoForType.Signoff;
			this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
		} else {
			this.submitPersonalModeSignoffData(this.apiServiceRerence);
		}
	}

	dedicatedModeFormSignOffProcess(photoName = null) {
		this.navCtrl.navigateForward(['/form-cover-dm']);
	}

	dedicatedModeWorkPermitSignOffProcess(photoName = null) {
		this.navCtrl.navigateForward(['/form-cover-dm']);
	}
}
