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
    selector: 'app-new-account-setup',
    templateUrl: './new-account-setup.page.html',
    styleUrls: ['./new-account-setup.page.scss'],
})
export class NewAccountSetupPage implements OnInit {

    errorMessage = '';
    isSubmitted = false;
    myForm: FormGroup;
    isConfirm = false;

    userId;
    userProfile: Profile;

    constructor(
        public utilService: UtilService,
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public accountService: AccountService,
    ) {

        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.userId) {
                    this.userId = params.userId;
                }
            }
        });

        this.myForm = new FormGroup({
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])),
            passwordConfirm: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ]))
        });
    }

    async ngOnInit() {
        const loading = await this.utilService.startLoadingWithOptions();

        this.accountService.getUserProfile(this.userId).subscribe((userProfile) => {
            this.userProfile = userProfile;
            this.utilService.hideLoadingFor(loading);
        }, error => {
            this.utilService.hideLoadingFor(loading);
        });
    }

    async onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = '';

        if (this.myForm.valid) {
            const password = this.myForm.controls.password.value;
            const confirmPassword = this.myForm.controls.passwordConfirm.value;


            if (password === confirmPassword) {
                const loading = await this.utilService.startLoadingWithOptions();

                this.accountService.newAccountSetup({
                    userId: this.userId,
                    password,
                    confirmPassword
                }).subscribe((response) => {
                    this.utilService.hideLoadingFor(loading);
                    this.navCtrl.navigateRoot('/tabs/dashboard', {replaceUrl: true});
                }, (error) => {
                    this.utilService.hideLoadingFor(loading);
                });
            } else {
                this.errorMessage = 'Password not matching';
            }
        }
    }

}
