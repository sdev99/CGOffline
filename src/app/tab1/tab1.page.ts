import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {PhotoService} from '../services/photo.service';
import {SharedDataService} from '../services/shared-data.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public sharedDataService: SharedDataService,
    ) {
    }

    addPhoto() {
        this.photoService.choosePhotoOption((photo) => {
            this.sharedDataService.setAnnotationImage(photo);
            this.navCtrl.navigateForward(['/image-annotation']);
        });
    }
}
