import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-new-account-setup',
    templateUrl: './new-account-setup.page.html',
    styleUrls: ['./new-account-setup.page.scss'],
})
export class NewAccountSetupPage {

    errorMessage = '';
    isSubmitted = false;
    myForm: FormGroup;
    isConfirm = false;


    constructor(
        public utilService: UtilService,
        public navCtrl: NavController,
    ) {
        this.myForm = new FormGroup({
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(8)
            ])),
            passwordConfirm: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(8)
            ]))
        });
    }


    onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = '';

        if (this.myForm.valid) {
            const password = this.myForm.controls.password.value;
            const passwordConfirm = this.myForm.controls.passwordConfirm.value;

            this.utilService.presentLoadingWithOptions();
            setTimeout(() => {
                this.utilService.hideLoading();
                if (password === passwordConfirm) {
                    localStorage.setItem('isLoggedIn', '1');
                    this.navCtrl.navigateRoot('/tabs/dashboard');
                } else {
                    this.errorMessage = 'Password not matching';
                }
            }, 1000);
        }
    }

}
