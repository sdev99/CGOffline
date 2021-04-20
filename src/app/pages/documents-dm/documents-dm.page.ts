import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { FilehandlerService } from '../../services/filehandler.service';
import { NavController } from '@ionic/angular';
import { SharedDataService } from '../../services/shared-data.service';
import { ApiService } from '../../services/api.service';
import { EnumService } from '../../services/enum.service';
import { Response } from '../../_models';
import { DocumentDetail } from '../../_models/documentDetail';
import { ArchivedDocumentDetail } from '../../_models/archivedDocumentDetail';

@Component({
	selector: 'app-documents-dm',
	templateUrl: './documents-dm.page.html',
	styleUrls: ['./documents-dm.page.scss'],
})
export class DocumentsDmPage implements OnInit {
	UtilService = UtilService;
	EnumService = EnumService;

	listType = EnumService.DedicatedModeDocumentListType.Available;
	listTypes = Object.values(EnumService.DedicatedModeDocumentListType);

	searchQuery = '';

	availableDocuments: Array<DocumentDetail>;
	archivedDocuments: Array<ArchivedDocumentDetail>;

	isLoadingDocument = false;

	constructor(
		private navController: NavController,
		private filehandlerService: FilehandlerService,
		public utilService: UtilService,
		public sharedDataService: SharedDataService,
		public apiService: ApiService
	) {}

	ngOnInit() {}

	ionViewWillEnter() {
		this.sharedDataService.dedicatedModeProcessType = EnumService.DedicatedModeProcessTypes.Document;
		this.getDedicatedModeAvailableDocuments();
		this.getDedicatedModeArchiveDocuments();
	}

	getDedicatedModeAvailableDocuments() {
		const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
		this.isLoadingDocument = true;
		this.apiService.getDedicatedModeAvailableDocuments(companyID).subscribe(
			(response: Response) => {
				this.isLoadingDocument = false;
				if (response) {
					this.availableDocuments = response.Result;
				}
			},
			(error) => {
				this.isLoadingDocument = false;
			}
		);
	}

	getDedicatedModeArchiveDocuments() {
		this.isLoadingDocument = true;
		const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
		this.apiService.getDedicatedModeArchiveDocuments(companyID).subscribe(
			(response: Response) => {
				this.isLoadingDocument = false;
				if (response) {
					this.archivedDocuments = response.Result;
				}
			},
			(error) => {
				this.isLoadingDocument = false;
			}
		);
	}

	onSearch(search) {
		this.searchQuery = search;
	}

	segmentChanged(event) {
		this.listType = event;
		if (event === EnumService.DedicatedModeDocumentListType.Available) {
			this.getDedicatedModeAvailableDocuments();
		} else if (event === EnumService.DedicatedModeDocumentListType.Archive) {
			this.getDedicatedModeArchiveDocuments();
		}
	}

	searchbarShowHide(visible) {
		if (!visible) {
			this.searchQuery = '';
		}
	}

	openAvailableDocument(item: DocumentDetail) {
		if (item.documentFileName) {
			this.navController.navigateForward('/document-openchoice-dm', {
				queryParams: {
					documentDetail: JSON.stringify(item),
				},
			});
		} else {
			this.utilService.showAlert('This device needs to be synced first in order to show the selected file. Please sync device and try again.', 'File Not Available Yet');
		}
	}

	openArchivedDocument(item: ArchivedDocumentDetail) {
		if (item.documentFileName) {
			this.filehandlerService.openFile(this.sharedDataService.globalDirectories?.documentDirectory + '' + item.documentFileName);
		} else {
			this.utilService.showAlert('This device needs to be synced first in order to show the selected file. Please sync device and try again.', 'File Not Available Yet');
		}
	}
}
