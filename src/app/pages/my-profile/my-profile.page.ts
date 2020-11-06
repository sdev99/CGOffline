import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {PhotoService} from '../../services/photo.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {SharedDataService} from '../../services/shared-data.service';
import {Profile} from '../../_models/profile';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.page.html',
    styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
    qrCodeValue = 'Oliver Egginton';
    elementType = 'url';
    capturedPhoto;

    user: User;
    profile: Profile;


    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public accountService: AccountService,
        public sharedDataService: SharedDataService,
    ) {
        this.user = accountService.userValue;
        this.profile = sharedDataService.userProfile;
        accountService.user.subscribe((user) => {
            this.user = user;
        });
    }

    ngOnInit() {
        this.accountService.getUserProfile(this.user.userId).subscribe((profile) => {
            this.profile = profile;
        }, error => {
        });
        this.accountService.getCompanyLanguageList(this.user.companyID).subscribe((user) => {
        }, error => {
        });
    }

    onClose() {
        this.navCtrl.back();
    }

    addProfilePhoto() {
        this.photoService.choosePhotoOption((photo) => {
            this.capturedPhoto = photo;
        });
    }

}
