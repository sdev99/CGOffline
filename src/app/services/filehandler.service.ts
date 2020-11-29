import {Injectable} from '@angular/core';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {UtilService} from './util.service';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
    providedIn: 'root'
})
export class FilehandlerService {
    fileTransfer: FileTransferObject;

    constructor(
        private fileOpener: FileOpener,
        private transfer: FileTransfer,
        private file: File,
        private utilService: UtilService,
        private http: HTTP
    ) {
    }

    async openFile(fileUrl = 'http://www.africau.edu/images/default/sample.pdf') {
        const loading = await this.utilService.startLoadingWithOptions('File downloading...');

        const fileName = fileUrl.replace(/^.*[\\\/]/, '');
        const extension = fileName.split('.').pop();

        this.http.downloadFile(fileUrl, {}, {}, this.file.dataDirectory + fileName).then((response) => {
            this.utilService.hideLoadingFor(loading);
            const url = response.nativeURL;
            this.fileOpener.showOpenWithDialog(url, 'application/' + extension).then(() => console.log('File is opened')).catch(e => console.log('Error opening file', e));
        }).catch((error) => {
            this.utilService.hideLoadingFor(loading);
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
