import {Injectable} from '@angular/core';
import {EnumService} from './enum.service';
import {Platform} from '@ionic/angular';
import {Profile} from '../_models/profile';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {

    previewImage;
    annotationImage;
    annotationColor = '#98C16B';
    onAnnotationImageDone;
    checkedInPlaces = [];
    deviceUID = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
    // deviceUID = '00001'; // For test dedicated mode
    pushToken = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
    isTablet = false;
    dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
    // when open form or document , useful for next screens
    viewFormDetail;

    // Data from Api
    userProfile: Profile;
    timeZoneList;
    companyLanguageList;
    globalDirectories;


    dedicatedModeLocationUse;

    checkinoutDmAs = '';
    signOffFor = '';

    constructor(
        private platform: Platform,
    ) {
        this.isTablet = platform.is('tablet');
        this.dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
        const dedicatedModeLocationUse = localStorage.getItem(EnumService.LocalStorageKeys.DEDICATED_MODE_LOCATION_USE);
        if (dedicatedModeLocationUse) {
            this.dedicatedModeLocationUse = JSON.parse(dedicatedModeLocationUse);
        }

        const userProfile = localStorage.getItem(EnumService.LocalStorageKeys.USER_PROFILE);
        if (userProfile) {
            this.userProfile = JSON.parse(userProfile);
        }

        const checkedInPlaces = localStorage.getItem('CHECKED_IN_PLACES');
        if (checkedInPlaces) {
            this.checkedInPlaces = JSON.parse(checkedInPlaces);
        }
    }

    setAnnotationImage(image) {
        this.annotationImage = image;
    }

    getAnnotationImage() {
        return this.annotationImage;
    }

    setPreviewImage(image) {
        this.previewImage = image;
    }

    getPreviewImage() {
        return this.previewImage;
    }
}
