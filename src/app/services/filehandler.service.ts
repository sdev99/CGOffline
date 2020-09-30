import {Injectable} from '@angular/core';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';

@Injectable({
    providedIn: 'root'
})
export class FilehandlerService {
    fileTransfer: FileTransferObject;

    constructor(
        private fileOpener: FileOpener,
        private transfer: FileTransfer,
        private file: File
    ) {
    }

    openFile(fileUrl = '') {
        const url = './assets/dummy.pdf';

        // this.fileTransfer = this.transfer.create();
        // this.fileTransfer
        //     .download(encodeURI(url), this.file.dataDirectory + 'form.pdf')
        //     .then(entry => {
        //       console.log('download complete: ' + entry.toURL());
        //
        //     });

        this.fileOpener
            .showOpenWithDialog(url, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
    }
}
