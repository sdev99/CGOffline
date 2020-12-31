import {Component, OnInit} from '@angular/core';
import {FilehandlerService} from '../../services/filehandler.service';
import {DemoDataService} from '../../services/demo-data.service';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';
import {FormItem} from '../../_models/formItem';
import {ArchivedDocumentDetail} from '../../_models/archivedDocumentDetail';
import {Response} from '../../_models';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../services/api.service';
import {EnumService} from '../../services/enum.service';
import {WorkPermitDetail} from '../../_models/workPermitDetail';

@Component({
    selector: 'app-permits-dm',
    templateUrl: './permits-dm.page.html',
    styleUrls: ['./permits-dm.page.scss'],
})
export class PermitsDmPage implements OnInit {
    UtilService = UtilService;
    EnumService = EnumService;

    listType = EnumService.DedicatedModePermitListType.Live;
    listTypes = Object.values(EnumService.DedicatedModePermitListType);

    searchQuery = '';

    liveWorkPermits: Array<WorkPermitDetail>;
    archivedWorkPermits: Array<WorkPermitDetail>;

    constructor(
        private navController: NavController,
        private filehandlerService: FilehandlerService,
        public utilService: UtilService,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
    ) {
    }

    ngOnInit() {
        this.sharedDataService.dedicatedModeProcessType = EnumService.DedicatedModeProcessTypes.WorkPermit;

        this.getDedicatedModeLiveWorkPermits();
        this.getDedicatedModeArchiveWorkPermits();
    }

    getDedicatedModeLiveWorkPermits() {
        const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
        this.apiService.getDedicatedModeLiveWorkPermits(companyID).subscribe((response: Response) => {
            if (response) {
                this.liveWorkPermits = response.Result;
            }
        }, (error) => {

        });
    }

    getDedicatedModeArchiveWorkPermits() {
        const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
        this.apiService.getDedicatedModeArchiveWorkPermits(companyID).subscribe((response: Response) => {
            if (response) {
                this.archivedWorkPermits = response.Result;
            }
        }, (error) => {

        });
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

    openLiveWorkPermit(item: WorkPermitDetail) {
    }

    openArchivedWorkPermit(item: WorkPermitDetail) {
    }
}
