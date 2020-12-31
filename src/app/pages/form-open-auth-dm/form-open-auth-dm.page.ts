import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-form-open-auth-dm',
    templateUrl: './form-open-auth-dm.page.html',
    styleUrls: ['./form-open-auth-dm.page.scss'],
})
export class FormOpenAuthDmPage implements OnInit {
    queryParam;
    authenticationFor;

    constructor(
        public navController: NavController,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {

        switch (sharedDataService.dedicatedModeProcessType) {
            case EnumService.DedicatedModeProcessTypes.Document:
                this.authenticationFor = sharedDataService.signOffDocumentDetail?.documentTitle;
                break;
            case EnumService.DedicatedModeProcessTypes.Form:
            case EnumService.DedicatedModeProcessTypes.WorkPermit:
                this.authenticationFor = sharedDataService.signOffFormDetail?.formData?.formTitle;
                break;
        }
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.back();
    }

    checkInOutQR() {
        this.sharedDataService.dedicatedModeTempAuthBy = EnumService.DedicatedModeTempAuthBy.QRCode;
        this.navController.navigateForward('dashboard-qrscan');
    }

    checkInOutName() {
        this.sharedDataService.dedicatedModeTempAuthBy = EnumService.DedicatedModeTempAuthBy.Name;
        this.navController.navigateForward('checkinout-name-dm');
    }
}
