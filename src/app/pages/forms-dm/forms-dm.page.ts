import {Component, OnInit} from '@angular/core';
import {FilehandlerService} from '../../services/filehandler.service';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';

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
        private sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.list = DemoDataService.dmForms.clone();
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

    openForm(item) {
        this.sharedDataService.viewFormDetail = item;
        this.sharedDataService.signOffFor = EnumService.SignOffType.FORMS_DM;
        this.navController.navigateForward('/form-open-auth-dm', {
            queryParams: item
        });
    }

}
