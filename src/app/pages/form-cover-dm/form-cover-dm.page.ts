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

    formDetail;
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
                    this.formDetail = JSON.parse(params.activity);
                }
            }

            if (!this.formDetail) {
                this.formDetail = sharedDataService.viewFormDetail;
            }
            if (!this.formDetail) {
                this.formDetail = DemoDataService.dmForms[2];
            }
        });
    }


    ngOnInit(): void {
        switch (this.sharedDataService.signOffFor) {
            case EnumService.SignOffType.WORK_PERMIT:
                this.formType = 'WORK PERMIT';
                break;
            case EnumService.SignOffType.FORMS_DM:
                this.formType = this.formDetail.formType.title;
                break;
            default:
                if (this.formDetail.formType) {
                    this.formType = this.formDetail.formType.title;
                } else {
                    this.formType = 'CUSTOM FORM';
                }
        }
    }

    openFile() {
        this.filehandlerService.openFile();
    }

    onClose() {
        this.navCtrl.back();
    }

    async onContinue() {
        if (this.sharedDataService.signOffFor === EnumService.SignOffType.WORK_PERMIT) {
            this.navCtrl.navigateForward(['/permits-generate-dm'], {
                queryParams: {
                    formDetail: JSON.stringify(this.formDetail)
                }
            });
        } else if (this.formType === EnumService.SignOffType.FORMS_DM) {

            this.navCtrl.navigateForward(['/permits-generate-dm'], {
                queryParams: {
                    formDetail: JSON.stringify(this.formDetail)
                }
            });
        } else {
            if (this.formDetail.formType.id === 'hav') {
                this.navCtrl.navigateForward(['/form-hav'], {
                    queryParams: {
                        formDetail: JSON.stringify(this.formDetail)
                    }
                });
            } else if (this.formDetail.formType.id === 'risk_assesstment') {
                this.navCtrl.navigateForward(['/form-riskassessment'], {
                    queryParams: {
                        formDetail: JSON.stringify(this.formDetail)
                    }
                });
            } else if (this.formDetail.formType.id === 'custom') {
                this.navCtrl.navigateForward(['/form-custom'], {
                    queryParams: {
                        formDetail: JSON.stringify(this.formDetail)
                    }
                });
            } else if (this.formDetail.formType.id === 'accident_report') {
                this.navCtrl.navigateForward(['/form-accident-report'], {
                    queryParams: {
                        formDetail: JSON.stringify(this.formDetail)
                    }
                });
            }
        }
    }
}
