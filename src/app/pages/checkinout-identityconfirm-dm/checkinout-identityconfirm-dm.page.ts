import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-checkinout-identityconfirm-dm',
    templateUrl: './checkinout-identityconfirm-dm.page.html',
    styleUrls: ['./checkinout-identityconfirm-dm.page.scss'],
})
export class CheckinoutIdentityconfirmDmPage implements OnInit {
    @ViewChild('imagePreview', {read: ElementRef}) imagePreview: ElementRef;

    photoCaptured = './assets/images/ProfileNone.png';
    userName;
    pageTitle = '';

    constructor(
        public navController: NavController,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
        public utilService: UtilService,
    ) {
        switch (sharedDataService.dedicatedModeProcessType) {
            case EnumService.DedicatedModeProcessTypes.CheckinOut: {
                switch (this.sharedDataService.checkinoutDmAs) {
                    case EnumService.CheckInType.AS_GUEST:
                        this.pageTitle = 'Check In/Out as Guest';
                        const dedicatedModeGuestDetail = this.sharedDataService.dedicatedModeGuestDetail;
                        this.userName = UtilService.getFullName(dedicatedModeGuestDetail?.guestFirsName, dedicatedModeGuestDetail?.guestMiddleName, dedicatedModeGuestDetail?.guestLastName);
                        if (dedicatedModeGuestDetail?.guestPhoto) {
                            this.photoCaptured = this.sharedDataService.globalDirectories?.userDirectory + '' + dedicatedModeGuestDetail.guestPhoto;
                        }
                        break;
                    case EnumService.CheckInType.MY_NAME:
                        this.pageTitle = 'Check In/Out by Name';
                        const dedicatedModeUserDetail = this.sharedDataService.dedicatedModeUserDetail;
                        this.userName = UtilService.getFullName(dedicatedModeUserDetail?.firstName, dedicatedModeUserDetail?.middleName, dedicatedModeUserDetail?.lastName);
                        if (dedicatedModeUserDetail?.photo) {
                            this.photoCaptured = this.sharedDataService.globalDirectories?.userDirectory + '' + dedicatedModeUserDetail.photo;
                        }
                        break;
                }
                break;
            }
            case EnumService.DedicatedModeProcessTypes.Document:
            case EnumService.DedicatedModeProcessTypes.Form:
            case EnumService.DedicatedModeProcessTypes.WorkPermit:
                const userDetail = this.sharedDataService.dedicatedModeUserDetail;
                this.userName = UtilService.getFullName(userDetail?.firstName, userDetail?.middleName, userDetail?.lastName);
                if (userDetail?.photo) {
                    this.photoCaptured = this.sharedDataService.globalDirectories?.userDirectory + '' + userDetail.photo;
                }
                this.pageTitle = 'Authentication';
                break;
            default:
        }
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        const element = this.imagePreview.nativeElement;
        element.style.width = element.offsetHeight + 'px';
    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        switch (this.sharedDataService.dedicatedModeProcessType) {
            case EnumService.DedicatedModeProcessTypes.CheckinOut: {
                switch (this.sharedDataService.checkinoutDmAs) {
                    case EnumService.CheckInType.AS_GUEST:
                        this.sharedDataService.getCheckinDetailsGuest(this.apiService, true);
                        break;
                    case EnumService.CheckInType.MY_NAME:
                        this.sharedDataService.getCheckinDetailsForDedicatedMode(this.sharedDataService.dedicatedModeUserDetail.userId, this.apiService);
                        break;
                }
                break;
            }
            case EnumService.DedicatedModeProcessTypes.Document:
                this.sharedDataService.dedicatedModeDocumentSignOffProcess();
                break;
            case EnumService.DedicatedModeProcessTypes.Form:
                this.sharedDataService.dedicatedModeFormSignOffProcess();
                break;
            case EnumService.DedicatedModeProcessTypes.WorkPermit:
                this.sharedDataService.dedicatedModeWorkPermitSignOffProcess();
                break;
            default:
        }
    }

    thisIsNotMe() {
        this.navController.navigateForward('checkinout-photoidentity-dm');
    }

}
