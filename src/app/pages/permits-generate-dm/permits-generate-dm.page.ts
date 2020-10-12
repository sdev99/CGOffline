import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-permits-generate-dm',
    templateUrl: './permits-generate-dm.page.html',
    styleUrls: ['./permits-generate-dm.page.scss'],
})
export class PermitsGenerateDmPage implements OnInit {

    list: any = DemoDataService.dmGeneratePermits.clone();

    constructor(
        public navController: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    isValid() {
        let valid = true;
        this.list.map((item) => {
            if (item.required && !item.answer) {
                valid = false;
            }
        });
        return valid;
    }

    onContinue() {
        this.navController.navigateForward('permit-issued-result-dm', {
            queryParams: {
                permitResult: UtilService.randomBoolean() ? 'success' : 'failed'
            }
        });
    }
}
