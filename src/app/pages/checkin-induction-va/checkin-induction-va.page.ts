import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-checkin-induction-va',
    templateUrl: './checkin-induction-va.page.html',
    styleUrls: ['./checkin-induction-va.page.scss'],
})
export class CheckinInductionVaPage implements OnInit {

    inductionFiles = DemoDataService.inductionFiles.clone();
    files = [];
    currentIndex = 0;
    locationDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {
        this.inductionFiles.map((item) => {
            if (item.type === 'va') {
                this.files = item.content;
                return;
            }
        });
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.locationDetail) {
                    this.locationDetail = JSON.parse(params.locationDetail);
                }
            }
        });
    }

    ngOnInit() {
    }

    onBack() {
        this.navCtrl.back();
    }

    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateRoot('dashboard-dm');
        } else {
            this.navCtrl.navigateRoot('tabs/dashboard');
        }
    }

    onContinue() {
        if (this.files.length > (this.currentIndex + 1)) {
            this.currentIndex++;
        } else {
            if (this.sharedDataService.checkinoutDmAs === EnumService.CheckInType.AS_GUEST) {
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
                this.navCtrl.navigateForward(['/signoff-digitalink'], {
                    queryParams: {
                        type: EnumService.SignOffType.INDUCTION,
                        data: JSON.stringify(this.locationDetail),
                    }
                });
            }
        }
    }
}
