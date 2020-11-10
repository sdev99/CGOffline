import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {UtilService} from '../../services/util.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';

@Component({
    selector: 'app-my-profile-changepass',
    templateUrl: './my-profile-changepass.page.html',
    styleUrls: ['./my-profile-changepass.page.scss'],
})
export class MyProfileChangepassPage implements OnInit {
    errorMsg = '';
    isSubmitted = false;
    profileForm: FormGroup;
    user: User;


    constructor(
        public navCtrl: NavController,
        public utilService: UtilService,
        public accountService: AccountService,
    ) {
        this.user = accountService.userValue;
        this.profileForm = new FormGroup({
            oldpassword: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            newpassword: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            confirmnewpassword: new FormControl('', Validators.compose([
                Validators.required,
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

        if (this.profileForm.valid) {
            const oldpassword = this.profileForm.controls.oldpassword.value;
            const password = this.profileForm.controls.newpassword.value;
            const passwordConfirm = this.profileForm.controls.confirmnewpassword.value;

            this.utilService.presentLoadingWithOptions();

            this.accountService.changePassword({
                userId: this.user.userId,
                firstName: this.user.firstName,
                oldPassword: oldpassword,
                newPassword: password,
                confirmPassword: passwordConfirm,
            }).subscribe(() => {
                this.utilService.hideLoading();
                if (password === passwordConfirm) {
                    this.navCtrl.navigateRoot(['checkin-success'], {
                        queryParams: {
                            message: 'New Password Set',
                            nextPage: '/tabs/my-profile'
                        }
                    });
                } else {
                    this.errorMsg = 'New (and confirmed) password must be identical';
                }
            }, (error) => {
                this.utilService.hideLoading();
                this.errorMsg = error.message;
            });
        }
    }

}

