import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {PhotoService} from '../../services/photo.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-form-custom',
    templateUrl: './form-custom.page.html',
    styleUrls: ['./form-custom.page.scss'],
})
export class FormCustomPage implements OnInit {


    list = DemoDataService.activityCustomForm;
    answer = {};

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.navCtrl.navigateForward(['/checkin-induction-va']);
    }

    addImage(index) {
        this.photoService.choosePhotoOption((photo) => {
            this.sharedDataService.setAnnotationImage(photo);
            this.sharedDataService.onAnnotationImageDone = (image) => {
                this.answer[index] = {
                    image
                };
            };

            this.navCtrl.navigateForward(['/image-annotation']);
        });
    }

    addDateNote(index) {
        this.answer[index] = {
            ...this.answer[index],
            addNote: true,
        };
    }

    photoAdded(index, photo) {
        this.answer[index] = {
            ...this.answer[index],
            image: photo,
        };
    }

    photoRemoved(index) {
        this.answer[index] = {
            ...this.answer[index],
            image: null,
        };
    }

    timeSelect(index, time) {
        this.answer[index] = {
            ...this.answer[index],
            timePeriod: time,
        };
    }


    previous() {

    }

    next() {

    }


}
