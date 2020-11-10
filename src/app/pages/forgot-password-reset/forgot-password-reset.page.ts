import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {NavController} from '@ionic/angular';
import {EnumService} from '../../services/enum.service';
import {AccountService} from '../../services/account.service';
import {Profile} from '../../_models/profile';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-forgot-password-reset',
    templateUrl: './forgot-password-reset.page.html',
    styleUrls: ['./forgot-password-reset.page.scss'],
})
export class ForgotPasswordResetPage implements OnInit {

    errorMessage = '';
    isSubmitted = false;
    myForm: FormGroup;
    isConfirm = false;

    resetCode;


    constructor(
        public utilService: UtilService,
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public accountService: AccountService,
    ) {

        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.code) {
                    this.resetCode = JSON.parse(params.code);
                }
            }
        });

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

    ngOnInit() {
        this.utilService.presentLoadingWithOptions();
    }

    onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = '';

        if (this.myForm.valid) {
            const password = this.myForm.controls.password.value;
            const confirmPassword = this.myForm.controls.passwordConfirm.value;


            if (password === confirmPassword) {
                this.utilService.presentLoadingWithOptions();
                this.accountService.resetpassword({
                    password,
                    confirmPassword,
                    shortCode: this.resetCode,
                }).subscribe((response) => {
                    this.utilService.hideLoading();
                    this.navCtrl.navigateRoot('/login');
                }, (error) => {
                    this.utilService.hideLoading();
                });
            } else {
                this.errorMessage = 'Password not matching';
            }
        }
    }

}
