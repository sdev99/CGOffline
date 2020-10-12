import {Component, OnInit} from '@angular/core';
import {FilehandlerService} from '../../services/filehandler.service';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';

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

    constructor(
        private filehandlerService: FilehandlerService
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.list = DemoDataService.dmPermits.clone();
        }, 5000);
    }

    segmentChanged(event) {
        this.listType = event;
    }

    openFile(item) {
        this.filehandlerService.openFile();
    }
}
