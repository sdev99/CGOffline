import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {DocumentDetail} from '../../_models/documentDetail';
import {SignOffFormDetail} from '../../_models/signOffFormDetail';
import {ApiService} from '../../services/api.service';
import {SignOffDetailsPostData} from '../../_models/signOffDetailsPostData';
import {User} from '../../_models';
import {AccountService} from '../../services/account.service';

@Component({
    selector: 'app-document-openchoice',
    templateUrl: './document-openchoice.page.html',
    styleUrls: ['./document-openchoice.page.scss'],
})
export class DocumentOpenchoicePage implements OnInit {
    document: DocumentDetail;
    user: User;

    constructor(
        private navController: NavController,
        public activatedRoute: ActivatedRoute,
        public filehandlerService: FilehandlerService,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
        private accountService: AccountService,
    ) {
        this.user = this.accountService.userValue;

        this.activatedRoute.queryParams.subscribe((params) => {
            if (params && params.document) {
                this.document = JSON.parse(params.document) as DocumentDetail;
            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.back();
    }

    viewAndSignOff() {
        this.sharedDataService.signOffFor = EnumService.SignOffType.DOCUMENT_CURRENT_CHECKIN;
        this.sharedDataService.signOffDocumentDetail = this.document as DocumentDetail;

        this.sharedDataService.signOffDetailsPostData = {
            userId: this.user?.userId,
            documentVersionID: this.document.documentVersionID,
            formVersionID: 0,
            latitude: this.sharedDataService.myCurrentGeoLocation?.coords?.latitude,
            longitude: this.sharedDataService.myCurrentGeoLocation?.coords?.longitude,
            locationID: this.sharedDataService.currentSelectedCheckinPlace?.locationID,
            projectID: this.sharedDataService.currentSelectedCheckinPlace?.projectID,
            inventoryItemID: this.sharedDataService.currentSelectedCheckinPlace?.inventoryItemID,
            userCheckInDetailID: this.sharedDataService.currentSelectedCheckinPlace?.userCheckInDetailID,
        } as SignOffDetailsPostData;

        if (this.document.isSignatureSignOff || this.document.isDigitalSignOff) {
            this.navController.navigateForward('/signoff-digitalink');
        } else if (this.document.isPhotoSignOff) {
            if (this.sharedDataService.dedicatedMode) {
                this.sharedDataService.dedicatedModeCapturePhotoFor = EnumService.DedicatedModeCapturePhotoForType.Signoff;
                this.navController.navigateForward(['/checkinout-photoidentity-dm']);
            } else {
                this.navController.navigateForward(['/signoff-photo']);
            }
        } else {
            this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
        }
        this.openDocument();
    }

    viewOnly() {
        this.openDocument();
    }

    openDocument() {
        if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && this.document && this.document.documentFileName) {
            this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + this.document.documentFileName);
        }
    }

}
