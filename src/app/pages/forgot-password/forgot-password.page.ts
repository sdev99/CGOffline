import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
    errorMsg = '';
    isSubmitted = false;
    myForm: FormGroup;

    languages = DemoDataService.languages;


    constructor(
        public utilService: UtilService,
        public navCtrl: NavController,
    ) {
        this.myForm = new FormGroup({
            email: new FormControl('test@gmail.com', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    }

    onSubmit() {
        this.isSubmitted = true;
        this.errorMsg = '';

        if (this.myForm.valid) {
            const email = this.myForm.controls.email.value;

            this.utilService.presentLoadingWithOptions();
            setTimeout(() => {
                this.utilService.hideLoading();
                this.navCtrl.navigateRoot('/linksend-success');
            }, 2000);
        }
    }
}
