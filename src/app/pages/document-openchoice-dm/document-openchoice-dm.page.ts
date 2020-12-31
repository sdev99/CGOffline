import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {FilehandlerService} from '../../services/filehandler.service';
import {DocumentDetail} from '../../_models/documentDetail';
import {Response} from '../../_models';
import {SignOffDetailsPostData} from '../../_models/signOffDetailsPostData';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-document-openchoice-dm',
    templateUrl: './document-openchoice-dm.page.html',
    styleUrls: ['./document-openchoice-dm.page.scss'],
})
export class DocumentOpenchoiceDmPage implements OnInit {
    documentDetail: DocumentDetail;

    constructor(
        private navController: NavController,
        public activatedRoute: ActivatedRoute,
        public filehandlerService: FilehandlerService,
        public utilService: UtilService,
        public apiService: ApiService,
        public sharedDataService: SharedDataService,
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res && res.documentDetail) {
                this.documentDetail = JSON.parse(res.documentDetail);
            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.back();
    }

    viewAndSignOff() {
        this.filehandlerService.openFile(this.sharedDataService.globalDirectories?.documentDirectory + '' + this.documentDetail?.documentFileName);
        this.getDocumentSignOffDetail();
    }

    viewOnly() {
        this.filehandlerService.openFile(this.sharedDataService.globalDirectories?.documentDirectory + '' + this.documentDetail?.documentFileName);
    }

    async getDocumentSignOffDetail() {
        const loading = await this.utilService.startLoadingWithOptions();
        this.apiService.getActivitySignOffDocumentDetail(this.documentDetail?.documentID).subscribe((response: Response) => {
            this.utilService.hideLoadingFor(loading);
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const signOffDocumentDetail = response.Result as DocumentDetail;
                this.sharedDataService.signOffFor = EnumService.SignOffType.DOCUMENT_DM;
                this.sharedDataService.signOffDocumentDetail = signOffDocumentDetail;


                this.sharedDataService.signOffDetailsPostData = {
                    documentID: this.documentDetail?.documentID,
                    documentVersionID: this.documentDetail?.documentVersionID,
                    formVersionID: 0,
                    latitude: this.sharedDataService.myCurrentGeoLocation?.coords.latitude,
                    longitude: this.sharedDataService.myCurrentGeoLocation?.coords.longitude,
                    locationID: this.sharedDataService.dedicatedModeLocationUse?.locationID,
                    projectID: this.sharedDataService.dedicatedModeLocationUse?.projectID,
                    inventoryItemID: this.sharedDataService.dedicatedModeLocationUse?.inventoryItemID
                } as SignOffDetailsPostData;


                this.sharedDataService.dedicatedModeTempAuthFor = EnumService.DedicatedModeTempAuthType.Document;
                this.navController.navigateForward('/form-open-auth-dm');
            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
        });
    }


}
