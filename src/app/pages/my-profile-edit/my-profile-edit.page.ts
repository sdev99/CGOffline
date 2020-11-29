import {Component, OnInit} from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import {User, Response} from '../../_models';
import {Profile} from '../../_models/profile';
import {AccountService} from '../../services/account.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-my-profile-edit',
    templateUrl: './my-profile-edit.page.html',
    styleUrls: ['./my-profile-edit.page.scss'],
})
export class MyProfileEditPage implements OnInit {
    errorMsg = '';
    isSubmitted = false;
    profileForm: FormGroup;

    timeZones = [];
    languages = [];

    user: User;
    profile: Profile;

    constructor(
        public navCtrl: NavController,
        private accountService: AccountService,
        private sharedDataService: SharedDataService,
        private utilService: UtilService,
        private toastController: ToastController,
    ) {
        this.user = accountService.userValue;
        this.profile = sharedDataService.userProfile;


        this.timeZones = sharedDataService.timeZoneList.clone();
        this.languages = sharedDataService.companyLanguageList.clone();

        this.profileForm = new FormGroup({
            email: new FormControl(this.profile.email, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            phone: new FormControl(this.profile.phone, Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.pattern('^[0-9()-]+$')
            ])),
            timezone: new FormControl(this.profile.timeZoneID, Validators.compose([
                Validators.required,
                Validators.minLength(2)
            ])),
            language: new FormControl(this.profile.mobileAppLanguageID, Validators.compose([
                Validators.required,
                Validators.minLength(2)
            ]))
        });
    }

    ngOnInit() {

    }

    onClose() {
        this.navCtrl.back();
    }

    async onSubmit() {
        this.isSubmitted = true;
        this.errorMsg = '';
        const {email, phone, timezone, language} = this.profileForm.controls;

        if (this.profileForm.valid) {
            const timezoneData = UtilService.findObj(this.sharedDataService.timeZoneList, 'timeZoneID', timezone.value);
            const languageData = UtilService.findObj(this.sharedDataService.companyLanguageList, 'code', language.value);
            const loading = await this.utilService.startLoadingWithOptions();


            this.accountService.updateProfile({
                userId: this.user.userId,
                email: email.value,
                userFullName: this.profile.userFullName,
                photo: this.profile.photo,
                qrCodeImage: this.profile.qrCodeImage,
                phoneCode: this.profile.phoneCode,
                phone: phone.value,
                timeZoneID: timezone.value,
                timeZoneName: timezoneData.timeZoneName,
                mobileAppLanguageID: language.value,
                languageName: languageData.languageName,
            }).subscribe((data: Response) => {

                // get updated userprofile detail
                this.accountService.getUserProfile(this.user.userId).subscribe(async (profile) => {
                    this.utilService.hideLoadingFor(loading);

                    this.profile = profile;
                    this.navCtrl.navigateBack(['/tabs/my-profile']);
                    const toast = await this.toastController.create({
                        message: data.Message,
                        position: 'top',
                        duration: 3000,
                    });
                    toast.present();
                }, error => {
                    this.utilService.hideLoadingFor(loading);

                });
            }, (error) => {
                this.errorMsg = error.message;
                this.utilService.hideLoadingFor(loading);

            });
        } else if (!email.value && !phone.value && !timezone.value && !language.value) {
            this.errorMsg = 'All fileds are required to be filled.';
        }

    }

}
