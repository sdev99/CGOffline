import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {Response} from '../../_models';
import {EnumService} from '../../services/enum.service';
import {AccountService} from '../../services/account.service';
import {ApiService} from '../../services/api.service';
import {UserDetail} from '../../_models/userDetail';
import {UtilService} from '../../services/util.service';

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
            this.showList = false;
        }
    };

    ngOnInit() {

    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    getFullName = (user: UserDetail) => {
        return UtilService.getFullName(user.firstName, user.middleName, user.lastName);
    };

    getUserAutoSuggest = () => {
        if (this.sharedDataService.dedicatedModeDeviceDetailData && this.name) {
            this.apiService.getUserAutoSuggest(this.sharedDataService.dedicatedModeDeviceDetailData.companyID, this.name).subscribe((res: Response) => {
                if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                    this.items = res.Result;
                }
            }, (error) => {
            });
        }
    };

    onContinue() {
        this.sharedDataService.dedicatedModeUserDetail = this.selectedUser;
        this.navController.navigateForward('checkinout-identityconfirm-dm');
    }

    searchBarFocus() {
        console.log('searchBarFocus');
        this.showList = true;
    }

    searchBarChange() {
        console.log('searchBarChange');
        if (!this.selectedUser || this.getFullName(this.selectedUser) !== this.name) {
            this.showList = true;
            this.selectedUser = null;
            this.getUserAutoSuggest();
        }
    }

    onSelect(event, item: UserDetail) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.name = this.getFullName(item);
        this.selectedUser = item;
        this.showList = false;
    }
}
