import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    isError = false;

    constructor(
        public utilService: UtilService,
    ) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.isError = !this.isError;
        if (!this.isError) {
            this.utilService.presentLoadingWithOptions();
            setTimeout(() => {
                this.utilService.hideLoading();
            }, 2000);
        }
    }
}
