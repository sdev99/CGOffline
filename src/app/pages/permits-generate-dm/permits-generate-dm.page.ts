import {Component, NgZone, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
    selector: 'app-permits-generate-dm',
    templateUrl: './permits-generate-dm.page.html',
    styleUrls: ['./permits-generate-dm.page.scss'],
})
export class PermitsGenerateDmPage implements OnInit {

    list: any = DemoDataService.dmGeneratePermits.clone();
    errorMessage = '';
    submitted = false;

    screenOrientationSubscribe;
    isShowOritationPortrait = false;

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
        private screenOrientation: ScreenOrientation,
        private ngZone: NgZone,
    ) {
    }

    ngOnInit() {
    }

    handleOrientation = () => {
        if (this.sharedDataService.dedicatedMode) {
            if (this.screenOrientation.type.includes('landscape')) {
                this.screenOrientation.unlock();
                this.isShowOritationPortrait = true;
            }

            this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
                this.ngZone.run(() => {
                    if (this.screenOrientation.type.includes('portrait')) {
                        this.isShowOritationPortrait = false;
                    }
                    if (this.screenOrientation.type.includes('landscape')) {
                        this.isShowOritationPortrait = true;
                    }
                });
            });
        }
    };


    ionViewWillEnter() {
        this.handleOrientation();
    }

    ionViewDidLeave(): void {

        if (this.sharedDataService.dedicatedMode) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            this.screenOrientationSubscribe.unsubscribe();
        }
    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm', {replaceUrl: true});
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
