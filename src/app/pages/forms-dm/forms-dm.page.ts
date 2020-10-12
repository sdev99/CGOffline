import {Component, OnInit} from '@angular/core';
import {FilehandlerService} from '../../services/filehandler.service';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-forms-dm',
    templateUrl: './forms-dm.page.html',
    styleUrls: ['./forms-dm.page.scss'],
})
export class FormsDmPage implements OnInit {
    UtilService = UtilService;

    listType = 'Form List';
    listTypes = ['Form List', 'Form Archive'];
    list = [];
    searchQuery = '';

    constructor(
        private filehandlerService: FilehandlerService,
        private navController: NavController,
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.list = DemoDataService.dmDocuments.clone();
        }, 3000);
    }

    onSearch(search) {
        this.searchQuery = search;
    }

    segmentChanged(event) {
        this.listType = event;
    }

    openFile(item) {
        this.navController.navigateForward('/form-open-auth-dm', {
            queryParams: item
        });
        // this.filehandlerService.openFile();
    }

}
