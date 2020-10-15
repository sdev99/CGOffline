import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-form-cover-dm',
    templateUrl: './form-cover-dm.page.html',
    styleUrls: ['./form-cover-dm.page.scss'],
})
export class FormCoverDmPage implements OnInit {

    activityDetail = DemoDataService.activityList[4];
    formType = 'WORK PERMIT';

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.activity) {
                    this.activityDetail = JSON.parse(params.activity);
                }
            }
        });
    }


    ngOnInit(): void {
        switch (this.sharedDataService.signOffFor) {
            case EnumService.SignOffType.WORK_PERMIT:
                this.formType = 'WORK PERMIT';
                break;
            case EnumService.SignOffType.FORMS_DM:
                this.formType = this.activityDetail.formType.title;
                break;
            default:
                this.formType = 'CUSTOM FORM';
        }
    }

    openFile() {
        this.filehandlerService.openFile();
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        if (this.sharedDataService.signOffFor === EnumService.SignOffType.WORK_PERMIT) {
            this.navCtrl.navigateForward(['/permits-generate-dm'], {
                queryParams: {
                    activityDetail: JSON.stringify(this.activityDetail)
                }
            });
        } else if (this.formType === EnumService.SignOffType.FORMS_DM) {
            this.utilService.presentLoadingWithOptions();
            this.navCtrl.navigateForward(['/permits-generate-dm'], {
                queryParams: {
                    activityDetail: JSON.stringify(this.activityDetail)
                }
            });
        } else {
            if (this.activityDetail.formType.id === 'hav') {
                this.navCtrl.navigateForward(['/form-hav'], {
                    queryParams: {
                        activityDetail: JSON.stringify(this.activityDetail)
                    }
                });
            } else if (this.activityDetail.formType.id === 'risk_assesstment') {
                this.navCtrl.navigateForward(['/form-riskassessment'], {
                    queryParams: {
                        activityDetail: JSON.stringify(this.activityDetail)
                    }
                });
            } else if (this.activityDetail.formType.id === 'custom') {
                this.navCtrl.navigateForward(['/form-custom'], {
                    queryParams: {
                        activityDetail: JSON.stringify(this.activityDetail)
                    }
                });
            } else if (this.activityDetail.formType.id === 'accident_report') {
                this.navCtrl.navigateForward(['/form-accident-report'], {
                    queryParams: {
                        activityDetail: JSON.stringify(this.activityDetail)
                    }
                });
            }
        }
    }
}
