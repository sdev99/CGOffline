import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {

    previewImage;
    annotationImage;
    annotationColor = '#98C16B';
    onAnnotationImageDone;
    checkedInPlaces = [];

    constructor() {
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
