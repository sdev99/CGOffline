import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhotoService} from '../../services/photo.service';

@Component({
    selector: 'app-add-choose-photo',
    templateUrl: './add-choose-photo.component.html',
    styleUrls: ['./add-choose-photo.component.scss'],
})
export class AddChoosePhotoComponent implements OnInit {
    @Input() image;
    @Output() photoAdded = new EventEmitter<any>();
    @Output() photoRemoved = new EventEmitter<void>();

    constructor(
        public photoService: PhotoService,
    ) {
    }

    ngOnInit() {
    }

    addPhotoFromCamera() {
        this.photoService.takePhotoFromCamera((photo) => {
            this.photoAdded.emit(photo);
        });
    }

    addPhotoFromLibrary() {
        this.photoService.takePhotoFromGallery((photo) => {
            this.photoAdded.emit(photo);
        });
    }

    removeDatePhoto() {
        this.photoRemoved.emit();
    }

}
