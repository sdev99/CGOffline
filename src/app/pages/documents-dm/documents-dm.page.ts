import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {FilehandlerService} from '../../services/filehandler.service';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-documents-dm',
    templateUrl: './documents-dm.page.html',
    styleUrls: ['./documents-dm.page.scss'],
})
export class DocumentsDmPage implements OnInit {
    UtilService = UtilService;

    listType = 'Document List';
    listTypes = ['Document List', 'Document Archive'];
    list = [];
    searchQuery = '';

    constructor(
        private navController: NavController,
        private filehandlerService: FilehandlerService,
        private utilService: UtilService,
        public sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.list = DemoDataService.dmDocuments.clone();
        }, 2000);
    }

    onSearch(search) {
        this.searchQuery = search;
    }

    segmentChanged(event) {
        this.listType = event;
    }

    searchbarShowHide(visible) {
        if (!visible) {
            this.searchQuery = '';
        }
    }

    openFile(item) {
        if (item.available) {
            this.navController.navigateForward('/document-openchoice-dm', {
                queryParams: item
            });
            // this.filehandlerService.openFile();
        } else {
            this.utilService.showAlert('This device needs to be synced first in order to show the selected file. Please sync device and try again.', 'File Not Available Yet');
        }
    }
}
