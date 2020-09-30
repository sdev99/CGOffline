import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {PhotoService} from '../../services/photo.service';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.page.html',
    styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
    qrCodeValue = 'Oliver Egginton';
    elementType = 'url';
    profilePhoto;


    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    addProfilePhoto() {
        this.photoService.choosePhotoOption((photo) => {
            this.profilePhoto = photo.dataUrl;
        });
    }

}
