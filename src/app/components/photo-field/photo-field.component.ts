import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SharedDataService} from '../../services/shared-data.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-photo-field',
    templateUrl: './photo-field.component.html',
    styleUrls: ['./photo-field.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: PhotoFieldComponent,
        multi: true
    }]
})
export class PhotoFieldComponent implements ControlValueAccessor {
    @Input() label: string;
    image: any;
    private disabled = false;
    isVideo = false;
    private onChange: any = (image: any) => {
    };
    private onTouch: any = () => {
    };

    constructor(
        public photoService: PhotoService,
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
    ) {
    }

    editPhoto() {
        this.openImageAnnotation(this.image);
    }

    photoRemoved() {
        this.photoAdded(null);
    }

    photoAdded(photo) {
        this.writeValue(photo);
        this.onTouch();
    }

    addPhotoFromCamera() {
        this.photoService.takePhotoFromCamera((photo) => {
            this.openImageAnnotation(photo);
        });
    }

    addPhotoFromLibrary() {
        this.photoService.takePhotoFromGallery((photo) => {
            this.openImageAnnotation(photo);
        }, false);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    writeValue(obj: any): void {
        this.onChange(obj);
        this.image = obj;
    }

    // Allow the Angular form control to disable this input
    setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
    }

    openImageAnnotation = (photo) => {
        this.sharedDataService.isOpenImageAnnotation = true;
        this.sharedDataService.setAnnotationImage(photo);
        this.sharedDataService.onAnnotationImageDone = (image) => {
            this.photoAdded(image);
        };
        this.navCtrl.navigateForward(['/image-annotation']);
    };
}
