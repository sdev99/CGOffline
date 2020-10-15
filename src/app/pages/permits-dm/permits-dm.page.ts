import {Component, OnInit} from '@angular/core';
import {FilehandlerService} from '../../services/filehandler.service';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-permits-dm',
    templateUrl: './permits-dm.page.html',
    styleUrls: ['./permits-dm.page.scss'],
})
export class PermitsDmPage implements OnInit {

    UtilService = UtilService;

    listType = 'Live Permits';
    listTypes = ['Live Permits', 'Permit Archive'];
    list = [];
    searchQuery = '';

    constructor(
        private filehandlerService: FilehandlerService,
        private sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.list = DemoDataService.dmPermits.clone();
        }, 2000);
    }

    onSearch(search) {
        this.searchQuery = search;
    }

    searchbarShowHide(visible) {
        if (!visible) {
            this.searchQuery = '';
        }
    }

    segmentChanged(event) {
        this.listType = event;
    }

    openFile(item) {
        this.filehandlerService.openFile();
    }
}
