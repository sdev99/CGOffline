import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {PhotoService} from '../../services/photo.service';
import {ObservablesService} from '../../services/observables.service';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-signoff-photo',
    templateUrl: './signoff-photo.page.html',
    styleUrls: ['./signoff-photo.page.scss'],
})
export class SignoffPhotoPage implements OnInit {
    capturedPhoto;

    type;
    data;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public route: ActivatedRoute,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.type) {
                    this.type = params.type;
                }
                if (params.data) {
                    this.data = JSON.parse(params.data);
                }
            }
        });
    }

    ngOnInit() {
    }

    takePhoto() {
        this.photoService.takePhotoFromCamera((photo) => {
            this.capturedPhoto = photo;
        });
    }

    onClose() {
        this.navCtrl.back();
    }

    continue() {
        switch (this.type) {
            case EnumService.SignOffType.HAV:
            case EnumService.SignOffType.ACCIDENT_REPORT:
            case EnumService.SignOffType.CUSTOM_FORM:
            case EnumService.SignOffType.RISK_ASSESSMENT:
            case EnumService.SignOffType.DOCUMENT_DM:
                this.showCheckInResultScreen();
                break;

            case EnumService.SignOffType.INDUCTION:
                this.showCheckInResultScreen();
                this.observablesService.publishSomeData(EnumService.ObserverKeys.NEW_CHECKED_IN, this.data);
                break;

            case EnumService.SignOffType.WORK_PERMIT:
                this.navCtrl.navigateForward('permit-issued-result-dm', {
                    queryParams: {
                        permitResult: UtilService.randomBoolean() ? 'success' : 'failed'
                    }
                });
                break;

            default:
                this.navCtrl.navigateForward(['/checkin-fail'], {});
        }
    }

    showCheckInResultScreen = () => {
        if (this.sharedDataService.dedicatedMode) {
            if (UtilService.randomBoolean()) {
                this.navCtrl.navigateForward(['/checkinout-success-dm'], {
                    queryParams: {
                        message: 'You have now checked-in',
                        nextPage: 'dashboard-dm'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkinout-fail-dm'], {
                    queryParams: {
                        failTitle: 'No Qualification',
                        failSubTitle: 'Check in Not Allowed',
                        failMessage: 'This check-in requires to have certain \n' +
                            'qualifications which you do not have.',
                        nextPage: 'dashboard-dm'
                    }
                });
            }
        } else {
            if (UtilService.randomBoolean()) {
                this.navCtrl.navigateForward(['/checkin-success'], {
                    queryParams: {
                        message: 'You Signed-Off Successfully',
                        nextPage: '/tabs/dashboard'
                    }
                });
            } else {
                this.navCtrl.navigateForward(['/checkin-fail'], {
                    queryParams: {}
                });
            }
        }

    };
}
