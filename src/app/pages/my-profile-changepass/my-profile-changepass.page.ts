import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-my-profile-changepass',
    templateUrl: './my-profile-changepass.page.html',
    styleUrls: ['./my-profile-changepass.page.scss'],
})
export class MyProfileChangepassPage implements OnInit {
    errorMsg = '';
    isSubmitted = false;
    profileForm: FormGroup;


    constructor(
        public navCtrl: NavController,
        public utilService: UtilService,
    ) {
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
            const password = this.profileForm.controls.newpassword.value;
            const passwordConfirm = this.profileForm.controls.confirmnewpassword.value;

            this.utilService.presentLoadingWithOptions();
            setTimeout(() => {
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
            }, 1000);
        }
    }

}

