import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { Response } from '../../_models';
import { EnumService } from '../../services/enum.service';
import { AccountService } from '../../services/account.service';
import { ApiService } from '../../services/api.service';
import { UserDetail } from '../../_models/userDetail';
import { UtilService } from '../../services/util.service';
import { OfflineManagerService } from 'src/app/services/offline-manager.service';
import { DeviceCompanyUserDetail } from 'src/app/_models/offline/DeviceCompanyUserDetail';

@Component({
	selector: 'app-checkinout-name-dm',
	templateUrl: './checkinout-name-dm.page.html',
	styleUrls: ['./checkinout-name-dm.page.scss'],
})
export class CheckinoutNameDmPage implements OnInit {
	UtilService = UtilService;

	@ViewChild('itemRef') itemRef: any;
	name;
	showList = false;
	items: Array<UserDetail>;
	pageTitle;
	selectedUser: UserDetail;

	constructor(
		public activatedRoute: ActivatedRoute,
		public navController: NavController,
		public sharedDataService: SharedDataService,
		public accountService: AccountService,
		public apiService: ApiService,
		public offlineManagerService: OfflineManagerService,
		public ngZone: NgZone
	) {
		switch (sharedDataService.dedicatedModeProcessType) {
			case EnumService.DedicatedModeProcessTypes.CheckinOut:
				this.pageTitle = 'Check In/Out by Name';
				break;
			case EnumService.DedicatedModeProcessTypes.Document:
			case EnumService.DedicatedModeProcessTypes.Form:
			case EnumService.DedicatedModeProcessTypes.WorkPermit:
				this.pageTitle = 'Authentication';
				break;
			default:
		}
	}

	@HostListener('document:click', ['$event'])
	andClickEvent = (event) => {
		const item: any = this.itemRef.nativeElement || this.itemRef.el;
		if (!item.contains(event.target)) {
			this.showHideList(false);
		}
	};

	ngOnInit() {}

	showHideList = (showList) => {
		this.ngZone.run(() => {
			this.showList = showList;
		});
	};

	onClose() {
		this.navController.navigateRoot('dashboard-dm', { replaceUrl: true });
	}

	onBack() {
		this.navController.back();
	}

	getFullName = (item: any) => {
		if (this.sharedDataService.offlineMode) {
			const companyUser = item as DeviceCompanyUserDetail;
			return companyUser.firstAndLastName;
		}
		const user = item as UserDetail;
		return UtilService.getFullName(user.firstName, user.middleName, user.lastName);
	};

	getUserAutoSuggest = () => {
		if (this.sharedDataService.dedicatedModeDeviceDetailData && this.name) {
			if (this.sharedDataService.offlineMode) {
				this.offlineManagerService.getDeviceUsers(this.name).then((res) => {
					this.items = res as any;
				});
			} else {
				this.apiService.getUserAutoSuggest(this.sharedDataService.dedicatedModeDeviceDetailData.companyID, this.name).subscribe(
					(res: Response) => {
						if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
							this.items = res.Result;
						}
					},
					(error) => {}
				);
			}
		}
	};

	onContinue() {
		console.log('SelectedUser ', this.selectedUser);
		this.sharedDataService.dedicatedModeUserDetail = this.selectedUser;
		this.navController.navigateForward('checkinout-identityconfirm-dm');
	}

	searchBarFocus() {
		this.showHideList(true);
	}

	searchBarChange() {
		if (!this.selectedUser || this.getFullName(this.selectedUser) !== this.name) {
			this.showHideList(true);
			this.selectedUser = null;
			this.getUserAutoSuggest();
		}
	}

	onSelect(event, item: UserDetail) {
		event.stopPropagation();
		event.stopImmediatePropagation();
		this.name = this.getFullName(item);
		this.selectedUser = item;
		this.showHideList(false);
	}
}
