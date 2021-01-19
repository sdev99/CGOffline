import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {NavController} from '@ionic/angular';
import {AccountService} from '../../services/account.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
    errorMsg = '';
    isSubmitted = false;
    myForm: FormGroup;

    languages = DemoDataService.languages.clone();


    constructor(
        public utilService: UtilService,
        public accountService: AccountService,
        public navCtrl: NavController,
    ) {
        this.myForm = new FormGroup({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    }

    async onSubmit() {
        this.isSubmitted = true;
        this.errorMsg = '';

        if (this.myForm.valid) {
            const email = this.myForm.controls.email.value;
            this.utilService.presentLoadingWithOptions();

            this.accountService.forgotpassword(email).subscribe((res) => {
                this.utilService.hideLoading();

                this.navCtrl.navigateRoot('/linksend-success');
            }, ({message}) => {
                this.utilService.hideLoading();

                this.errorMsg = message;
            });
        }
    }
}
