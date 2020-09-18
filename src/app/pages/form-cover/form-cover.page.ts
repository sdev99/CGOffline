import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';

@Component({
    selector: 'app-form-cover',
    templateUrl: './form-cover.page.html',
    styleUrls: ['./form-cover.page.scss'],
})
export class FormCoverPage implements OnInit {
    fileTransfer: FileTransferObject;

    activityDetail = DemoDataService.activityList[4];

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private fileOpener: FileOpener,
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

    ngOnInit() {
    }

    openFile() {
        const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

        this.fileTransfer = this.transfer.create();
        this.fileTransfer
            .download(encodeURI(url), this.file.dataDirectory + 'form.pdf')
            .then(entry => {
                console.log('download complete: ' + entry.toURL());
                this.fileOpener
                    .showOpenWithDialog(entry.toURL(), 'application/pdf')
                    .then(() => console.log('File is opened'))
                    .catch(e => console.log('Error opening file', e));
            });
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        if (this.activityDetail.formType.id === 'hav') {
            this.navCtrl.navigateForward(['/form-hav']);
        } else if (this.activityDetail.formType.id === 'risk_assesstment') {
            this.navCtrl.navigateForward(['/form-riskassessment']);
        } else if (this.activityDetail.formType.id === 'custom') {
            this.navCtrl.navigateForward(['/form-custom']);
        } else if (this.activityDetail.formType.id === 'accident_report') {
            this.navCtrl.navigateForward(['/form-accident-report']);
        }
    }
}
