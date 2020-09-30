import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilehandlerService} from '../../services/filehandler.service';

@Component({
    selector: 'app-form-cover',
    templateUrl: './form-cover.page.html',
    styleUrls: ['./form-cover.page.scss'],
})
export class FormCoverPage {
    fileTransfer: FileTransferObject;
    activityDetail = DemoDataService.activityList[4];

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        private transfer: FileTransfer,
        private file: File
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.activity) {
                    this.activityDetail = JSON.parse(params.activity);
                }
            }
        });
    }

    openFile() {
        this.filehandlerService.openFile();
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
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
