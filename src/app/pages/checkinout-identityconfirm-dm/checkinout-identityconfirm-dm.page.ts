import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { DeviceGuestUserDetail } from 'src/app/_models/offline/DeviceGuestUserDetail';
import { DeviceUserDetail } from 'src/app/_models/offline/DeviceUserDetail';

@Component({
	selector: 'app-checkinout-identityconfirm-dm',
	templateUrl: './checkinout-identityconfirm-dm.page.html',
	styleUrls: ['./checkinout-identityconfirm-dm.page.scss'],
})
export class CheckinoutIdentityconfirmDmPage implements OnInit {
	@ViewChild('imagePreview', { read: ElementRef }) imagePreview: ElementRef;

	photoCaptured = './assets/images/ProfileNone.png';
	userName;

	pageTitle = '';
	constructor(
		public navController: NavController,
		public activatedRoute: ActivatedRoute,
		public sharedDataService: SharedDataService,
		public apiService: ApiService,
		public utilService: UtilService
	) {
		switch (sharedDataService.dedicatedModeProcessType) {
			case EnumService.DedicatedModeProcessTypes.CheckinOut: {
				switch (this.sharedDataService.checkinoutDmAs) {
					case EnumService.CheckInType.AS_GUEST:
						this.setGuestProfileData('Check In/Out as Guest');
						break;
					case EnumService.CheckInType.MY_NAME:
						this.setUserProfileData('Check In/Out by Name');

						break;
				}
				break;
			}
			case EnumService.DedicatedModeProcessTypes.Document:
			case EnumService.DedicatedModeProcessTypes.Form:
			case EnumService.DedicatedModeProcessTypes.WorkPermit:
				this.setUserProfileData('Authentication');
				break;
			default:
		}
	}

	ngOnInit() {}

	ionViewWillEnter() {
		const element = this.imagePreview.nativeElement;
		element.style.width = element.offsetHeight + 'px';
	}

	setGuestProfileData = (pageTitle) => {
		this.pageTitle = pageTitle;
		const dedicatedModeGuestDetail = this.sharedDataService.dedicatedModeGuestDetail;
		this.userName = UtilService.getFullName(dedicatedModeGuestDetail?.guestFirsName, dedicatedModeGuestDetail?.guestMiddleName, dedicatedModeGuestDetail?.guestLastName);
		if (dedicatedModeGuestDetail?.guestPhoto) {
			if (this.sharedDataService.offlineMode) {
				this.photoCaptured = 'data:image/png;base64,' + (dedicatedModeGuestDetail as DeviceGuestUserDetail).guestPhoto_BinaryImage;
			} else {
				this.photoCaptured = this.sharedDataService.globalDirectories?.userCheckInSignOffDirectory + '' + dedicatedModeGuestDetail.guestPhoto;
			}
		}
	};

	setUserProfileData = (pageTitle) => {
		this.pageTitle = pageTitle;
		const userDetail = this.sharedDataService.dedicatedModeUserDetail;
		this.userName = UtilService.getFullName(userDetail?.firstName, userDetail?.middleName, userDetail?.lastName);
		if (this.sharedDataService.offlineMode) {
			const deviceUserDetail = userDetail as any as DeviceUserDetail;
			if (deviceUserDetail.photo_BinaryImage) {
				this.photoCaptured = 'data:image/png;base64,' + deviceUserDetail.photo_BinaryImage;
			} else if (deviceUserDetail.userPhoto_BinaryImage) {
				this.photoCaptured = 'data:image/png;base64,' + deviceUserDetail.userPhoto_BinaryImage;
			}
		} else {
			if (userDetail?.userPhoto) {
				this.photoCaptured = this.sharedDataService.globalDirectories?.userCheckInSignOffDirectory + '' + userDetail.userPhoto;
			} else if (userDetail?.photo) {
				this.photoCaptured = this.sharedDataService.globalDirectories?.userDirectory + '' + userDetail.photo;
			}
		}
	};

	onClose() {
		this.navController.navigateRoot('dashboard-dm', { replaceUrl: true });
	}

	onBack() {
		this.navController.back();
	}

	onContinue() {
		switch (this.sharedDataService.dedicatedModeProcessType) {
			case EnumService.DedicatedModeProcessTypes.CheckinOut: {
				switch (this.sharedDataService.checkinoutDmAs) {
					case EnumService.CheckInType.AS_GUEST:
						const isGuestReturning = true;
						this.sharedDataService.getCheckinDetailsGuest(this.apiService, isGuestReturning);
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
		this.sharedDataService.dedicatedModeCapturePhotoFor = EnumService.DedicatedModeCapturePhotoForType.Auth;
		this.navController.navigateForward('/checkinout-photoidentity-dm');
	}
}
