import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-my-profile-edit',
    templateUrl: './my-profile-edit.page.html',
    styleUrls: ['./my-profile-edit.page.scss'],
})
export class MyProfileEditPage implements OnInit {
    errorMsg = '';
    isSubmitted = false;
    profileForm: FormGroup;

    timeZones = DemoDataService.timeZones;
    timeZone = DemoDataService.timeZones[0].offset;
    languages = DemoDataService.languages;
    language = DemoDataService.languages[0].code;

    constructor(
        public navCtrl: NavController,
    ) {
        this.profileForm = new FormGroup({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            phone: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(10)
            ])),
            timezone: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2)
            ])),
            language: new FormControl('', Validators.compose([
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

    onSubmit() {
        this.isSubmitted = true;
        this.errorMsg = '';
        const {email, phone, timezone, language} = this.profileForm.controls;
        if (this.profileForm.valid) {
            this.navCtrl.navigateBack(['/tabs/my-profile']);
        } else if (!email.value && !phone.value && !timezone.value && !language.value) {
            this.errorMsg = 'All fileds are required to be filled.';
        }

    }

}
