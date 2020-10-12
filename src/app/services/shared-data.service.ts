import {Injectable} from '@angular/core';
import {EnumService} from './enum.service';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {

    previewImage;
    annotationImage;
    annotationColor = '#98C16B';
    onAnnotationImageDone;
    checkedInPlaces = [];
    deviceUID = 'TEST ID';
    isTablet = false;
    dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';

    constructor(
        private platform: Platform,
    ) {
        this.isTablet = platform.is('tablet');
        this.dedicatedMode = localStorage.getItem(EnumService.LocalStorageKeys.IS_DEDICATED_MODE) === 'true';


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
