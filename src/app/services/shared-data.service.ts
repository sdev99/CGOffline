import {Injectable} from '@angular/core';
import {EnumService} from './enum.service';
import {NavController, Platform} from '@ionic/angular';
import {Profile} from '../_models/profile';
import {CheckinDetail} from '../_models/checkinDetail';
import {LocationItem} from '../_models/locationItem';
import {GlobalDirectory} from '../_models/globalDirectory';
import {rejects} from 'assert';
import {GeolocationPosition} from '@capacitor/core';
import {ActivityListItem} from '../_models/activityListItem';
import {ActivitySignOffDocumentDetail} from '../_models/activitySignOffDocumentDetail';
import {CheckInPostData} from '../_models/checkInPostData';
import {SignOffDetailsPostData} from '../_models/signOffDetailsPostData';
import {UtilService} from './util.service';
import {ApiService} from './api.service';
import {Response} from '../_models';
import {ObservablesService} from './observables.service';
import {CheckedInDetailItem} from '../_models/checkedInDetailItem';
import {ActivitySignOffFormDetail} from '../_models/activitySignOffFormDetail';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {
    apiServiceRerence: ApiService;

    myCurrentGeoLocation: GeolocationPosition;

    annotationImage;
    annotationColor = '#98C16B';
    onAnnotationImageDone;

    deviceUID = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
    // deviceUID = '00001'; // For test dedicated mode
    pushToken = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
    isTablet = false;
    dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
    // when open form or document , useful for next screens

    dedicatedModeDeviceDetailData;

    // Data from Api
    checkedInPlaces: Array<CheckedInDetailItem> = [];
    currentSelectedCheckinPlace: CheckedInDetailItem;

    userProfile: Profile;
    timeZoneList;
    companyLanguageList;
    globalDirectories: GlobalDirectory;
    locationItemList;

    // data for another pages
    checkInDetail: CheckinDetail;
    currentActivityOpen: ActivityListItem;
    activitySignOffDocumentDetail: ActivitySignOffDocumentDetail; // For document activity signoff
    activitySignOffFormDetail: ActivitySignOffFormDetail; // For form activity signoff
    viewFormDetail;

    dedicatedModeLocationUse;

    checkinoutDmAs = '';
    signOffFor = '';

    viewFormFor; // View form for induction process or activity detail

    // Store location data for checkinout
    checkInForLocation: LocationItem;
    checkOutForCheckedInDetail: CheckedInDetailItem;

    // Store  all screen checkin details for whole process and use this data on end of checkin data send to server
    checkInPostData: CheckInPostData;
    signOffDetailsPostData: SignOffDetailsPostData;

    constructor(
        private platform: Platform,
        private navCtrl: NavController,
        private observablesService: ObservablesService,
        private utilService: UtilService,
    ) {
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

        const userProfile = localStorage.getItem(EnumService.LocalStorageKeys.USER_PROFILE);
        if (userProfile) {
            this.userProfile = JSON.parse(userProfile);
        }

        const checkedInPlaces = localStorage.getItem(EnumService.LocalStorageKeys.CHECKED_IN_PLACES);
        if (checkedInPlaces) {
            this.checkedInPlaces = JSON.parse(checkedInPlaces);
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

    setAnnotationImage(image) {
        this.annotationImage = image;
    }

    getAnnotationImage() {
        return this.annotationImage;
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
        this.activitySignOffDocumentDetail = null;
        this.viewFormDetail = null;
        this.dedicatedModeLocationUse = null;
        this.checkinoutDmAs = '';
        this.signOffFor = '';
        this.checkInForLocation = null;
        this.checkInPostData = null;
        this.signOffDetailsPostData = null;
    }

    async submitInductionCheckInData(apiService: ApiService) {
        const loading = await this.utilService.startLoadingWithOptions();

        apiService.insertCheckInDetails(this.checkInPostData).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);

            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.observablesService.publishSomeData(EnumService.ObserverKeys.NEW_CHECKED_IN, response.Result);

                this.navCtrl.navigateForward(['/checkin-success'], {
                    queryParams: {
                        message: 'You have now checked-in',
                        nextPage: '/tabs/dashboard',
                        actionBtnTitle: 'Continue'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {
                        title: 'You cannot check-in',
                        errorTitle: 'NOT QUALIFIED',
                        errorMessage: response.Message,
                        nextPage: '/tabs/dashboard'
                    }
                });
            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
            const exception = error.error as Response;
            this.navCtrl.navigateForward(['/checkin-fail'], {
                queryParams: {
                    title: 'You cannot check-in',
                    errorTitle: exception ? exception.ResponseException?.ValidationErrors[0].Field : '',
                    errorMessage: exception ? exception.ResponseException?.ValidationErrors[0].Message : error.message,
                    nextPage: '/tabs/dashboard'
                }
            });
        });
    }

    /**
     * This function is use for submit personal mode sign off data
     */
    async submitPersonalModeSignoffData(apiService: ApiService) {
        const loading = await this.utilService.startLoadingWithOptions();

        apiService.insertPersonalModeSignOffDetails(this.signOffDetailsPostData).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);

            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                this.navCtrl.navigateForward(['/checkin-success'], {
                    queryParams: {
                        message: 'You Signed-Off Successfully',
                        nextPage: '/tabs/dashboard'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {
                        title: 'You cannot Sign-Off',
                        errorTitle: 'NOT QUALIFIED',
                        errorMessage: response.Message,
                        nextPage: '/tabs/dashboard'
                    }
                });
            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);

            this.navCtrl.navigateForward(['/checkin-fail'], {
                queryParams: {
                    title: 'You cannot Sign-Off',
                    errorTitle: 'NOT QUALIFIED',
                    errorMessage: error.message || error,
                    nextPage: '/tabs/dashboard'
                }
            });
        });
    }

    // Not used
    showCheckInResultScreen = (status = false) => {
        if (this.dedicatedMode) {
            if (status) {
                this.navCtrl.navigateForward(['/checkinout-success-dm'], {
                    queryParams: {
                        message: 'You have now checked-in',
                        nextPage: 'dashboard-dm'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkinout-fail-dm'], {
                    queryParams: {
                        failTitle: 'No Qualification',
                        failSubTitle: 'Check in Not Allowed',
                        failMessage: 'This check-in requires to have certain \n' +
                            'qualifications which you do not have.',
                        nextPage: 'dashboard-dm'
                    }
                });
            }
        } else {
            if (status) {
                this.navCtrl.navigateForward(['/checkin-success'], {
                    queryParams: {
                        message: 'You Signed-Off Successfully',
                        nextPage: '/tabs/dashboard'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {}
                });
            }
        }
    };

    inductionNavigationProcess(inductionContentItemIndex) {
        if (this.checkInDetail) {
            const inductionItems = this.checkInDetail.checkInInductionItems;

            if (inductionItems && inductionContentItemIndex < inductionItems.length - 1) {
                const inductionContentItem = inductionItems[inductionContentItemIndex + 1];
                if (inductionContentItem.contentType === EnumService.InductionContentTypes.FORM) {
                    this.apiServiceRerence.getActivitySignOffFormDetail(inductionContentItem.formID).subscribe((response: Response) => {
                        if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                            this.viewFormFor = EnumService.ViewFormForType.Induction;
                            this.activitySignOffFormDetail = response.Result as ActivitySignOffFormDetail;
                            this.navCtrl.navigateForward(UtilService.InductionContentTypeScreenIdentify(inductionContentItem.contentType), {
                                queryParams: {
                                    inductionContentItemIndex: inductionContentItemIndex + 1
                                }
                            });
                        }
                    });

                } else {
                    this.navCtrl.navigateForward(UtilService.InductionContentTypeScreenIdentify(inductionContentItem.contentType), {
                        queryParams: {
                            inductionContentItemIndex: inductionContentItemIndex + 1
                        }
                    });
                }
            } else if (this.checkInDetail.checkInInduction.isDigitalSignOff || this.checkInDetail.checkInInduction.isSignatureSignOff) {
                this.signOffFor = EnumService.SignOffType.INDUCTION;
                this.navCtrl.navigateForward(['/signoff-digitalink']);
            }
        }
    }

}
