import { Component, OnInit } from '@angular/core';
import { FilehandlerService } from '../../services/filehandler.service';
import { UtilService } from '../../services/util.service';
import { NavController } from '@ionic/angular';
import { SharedDataService } from '../../services/shared-data.service';
import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { Response } from '../../_models';
import { ArchivedDocumentDetail } from '../../_models/archivedDocumentDetail';
import { FormItem } from '../../_models/formItem';
import { SignOffFormDetail } from '../../_models/signOffFormDetail';
import { ActivatedRoute } from '@angular/router';
import { DynamicRouteService } from 'src/app/services/dynamic-route.service';
import { OfflineManagerService } from 'src/app/services/offline-manager.service';

@Component({
	selector: 'app-forms-dm',
	templateUrl: './forms-dm.page.html',
	styleUrls: ['./forms-dm.page.scss'],
})
export class FormsDmPage implements OnInit {
	UtilService = UtilService;
	EnumService = EnumService;

	listType = EnumService.DedicatedModeFormListType.Available;
	listTypes = Object.values(EnumService.DedicatedModeFormListType);

	searchQuery = '';

	availableForms: Array<FormItem>;
	archivedForms: Array<ArchivedDocumentDetail>;

	isLoadingForms = false;

	itemDetail: FormItem;
	pageTitle = '';

	constructor(
		private dynamicRouteService: DynamicRouteService,
		private navController: NavController,
		private filehandlerService: FilehandlerService,
		public utilService: UtilService,
		public sharedDataService: SharedDataService,
		public apiService: ApiService,
		public activatedRoute: ActivatedRoute,
		public offlineManagerService: OfflineManagerService
	) {
		this.activatedRoute.queryParams.subscribe((res) => {
			if (res) {
				if (res.itemDetail) {
					this.itemDetail = JSON.parse(res.itemDetail);
					this.pageTitle = this.itemDetail.formTitle;
				}
			}
		});
	}

	ngOnInit() {}

	ionViewWillEnter() {
		this.sharedDataService.dedicatedModeProcessType = EnumService.DedicatedModeProcessTypes.Form;
		this.getDedicatedModeAvailableForms();
		this.getDedicatedModeArchiveForms();
	}

	getDedicatedModeAvailableForms() {
		this.isLoadingForms = true;
		const folderID = this.itemDetail ? this.itemDetail.formFolderID : 0;
		const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
		if (this.sharedDataService.offlineMode) {
			this.offlineManagerService.getAvailableForms(folderID, this.sharedDataService.dedicatedModeLocationUse).then((res) => {
				this.availableForms = res as any;
			});
		} else {
			this.apiService.getDedicatedModeAvailableForms(companyID, folderID).subscribe(
				(response: Response) => {
					this.isLoadingForms = false;
					if (response) {
						this.availableForms = response.Result;
					}
				},
				(error) => {
					this.isLoadingForms = false;
				}
			);
		}
	}

	getDedicatedModeArchiveForms() {
		this.isLoadingForms = true;
		const companyID = this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;

		if (this.sharedDataService.offlineMode) {
			this.offlineManagerService.getArchivedForms(this.sharedDataService.dedicatedModeLocationUse).then((res) => {
				this.archivedForms = res as any;
			});
		} else {
			this.apiService.getDedicatedModeArchiveForms(companyID).subscribe(
				(response: Response) => {
					this.isLoadingForms = false;
					if (response) {
						this.archivedForms = response.Result;
					}
				},
				(error) => {
					this.isLoadingForms = false;
				}
			);
		}
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
		if (event === EnumService.DedicatedModeFormListType.Available) {
			this.getDedicatedModeAvailableForms();
		} else if (event === EnumService.DedicatedModeFormListType.Archive) {
			this.getDedicatedModeArchiveForms();
		}
	}

	openForm(item: FormItem) {
		this.utilService.presentLoadingWithOptions();
		this.apiService.getDedicatedModeSignOffFormDetail(item.formID).subscribe(
			(response: Response) => {
				this.utilService.hideLoading();
				if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					this.sharedDataService.signOffFor = EnumService.SignOffType.FORMS_DM;
					this.sharedDataService.viewFormFor = EnumService.ViewFormForType.FormDM;
					this.sharedDataService.signOffFormDetail = response.Result as SignOffFormDetail;
					this.sharedDataService.dedicatedModeTempAuthFor = EnumService.DedicatedModeTempAuthType.Form;
					this.navController.navigateForward('/form-open-auth-dm');
				}
			},
			(error) => {
				this.utilService.hideLoading();
			}
		);
	}

	openArchivedForm(item: ArchivedDocumentDetail) {
		if (item.documentFileName) {
			this.filehandlerService.openFile(this.sharedDataService.globalDirectories?.documentDirectory + '' + item.documentFileName);
		} else {
			this.utilService.showAlert('This device needs to be synced first in order to show the selected file. Please sync device and try again.', 'File Not Available Yet');
		}
	}

	openFormFolder(item: FormItem) {
		const newPath = 'documents-dm/' + item.formFolderID;
		this.dynamicRouteService.addDynamicRoute(newPath, FormsDmPage, true);
		this.navController.navigateForward([newPath], {
			queryParams: { itemDetail: JSON.stringify(item) },
		});
	}
}
