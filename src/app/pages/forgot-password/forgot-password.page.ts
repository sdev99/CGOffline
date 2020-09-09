import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
    isError = false;

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.isError = !this.isError;
    }

}
