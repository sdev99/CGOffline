import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-permits-generate-dm',
    templateUrl: './permits-generate-dm.page.html',
    styleUrls: ['./permits-generate-dm.page.scss'],
})
export class PermitsGenerateDmPage implements OnInit {

    list: any = DemoDataService.dmGeneratePermits.clone();
    errorMessage = '';
    submitted = false;

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
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

    isValid(item) {
        if (item.required && !item.answer) {
            return false;
        }
        return true;
    }

    invalidCount() {
        let invalidCount = 0;
        this.list.map((item) => {
            if (item.required && !item.answer) {
                invalidCount++;
            }
        });
        return invalidCount;
    }

    onContinue() {
        this.errorMessage = '';
        this.submitted = true;
        if (!this.invalidCount()) {
            this.navController.navigateForward('signoff-digitalink', {
                queryParams: {
                    permitResult: UtilService.randomBoolean() ? 'success' : 'failed'
                }
            });
        } else {
            this.errorMessage = 'You have ' + this.invalidCount() + ' unanswered questions. Please review and answer them.';
        }

    }
}
