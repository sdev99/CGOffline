import {Injectable} from '@angular/core';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {UtilService} from './util.service';
import {HTTP} from '@ionic-native/http/ngx';
import {StaticDataService} from './static-data.service';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class FilehandlerService {
    fileTransfer: FileTransferObject;

    constructor(
        private fileOpener: FileOpener,
        private platform: Platform,
        private transfer: FileTransfer,
        private file: File,
        public utilService: UtilService,
        private http: HTTP
    ) {
    }

    async openFile(fileUrl = 'http://www.africau.edu/images/default/sample.pdf', openInDefaultApp = false) {
        this.utilService.presentLoadingWithOptions('File downloading...');

        const fileName = fileUrl.replace(/^.*[\\\/]/, '');
        const extension = fileName.split('.').pop();

        this.http.downloadFile(fileUrl, {}, {}, this.file.dataDirectory + fileName).then((response) => {
            this.utilService.hideLoading();

            const url = response.nativeURL;
            const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];
            if (extension.toLowerCase() === 'pdf' || openInDefaultApp) {
                this.fileOpener.open(url, mimeType).then(() => console.log('File is opened')).catch(e => console.log('Error opening file', e));
            } else if (this.platform.is('ios')) {
                this.fileOpener.open(url, mimeType).then(() => console.log('File is opened')).catch(e => console.log('Error opening file', e));
            } else {
                this.fileOpener.showOpenWithDialog(url, mimeType).then(() => console.log('File is opened')).catch(e => console.log('Error opening file', e));
            }
        }).catch((error) => {
            this.utilService.hideLoading();
            console.log('Error download file', error);
        });

        // const pdfUrl = 'http://www.africau.edu/images/default/sample.pdf';

        // this.fileTransfer = this.transfer.create();
        // this.fileTransfer
        //     .download(encodeURI(demoFile), this.file.dataDirectory + 'form.pdf')
        //     .then(entry => {
        //         debugger;
        //         this.utilService.hideLoading();
        //         console.log('download complete: ' + entry.toURL());
        //         const url = entry.toURL();
        //         this.fileOpener
        //             .showOpenWithDialog(url, 'application/pdf')
        //             .then(() => console.log('File is opened'))
        //             .catch(e => console.log('Error opening file', e));
        //     }).catch((error) => {
        //     debugger;
        //     this.utilService.hideLoading();
        //     console.log('Error download file', error);
        // });
    }
}
