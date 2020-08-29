import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {

    previewImage;
    annotationImage;

    constructor() {

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
