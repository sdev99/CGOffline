import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {ObservablesService} from '../../services/observables.service';
import {EnumService} from '../../services/enum.service';
import {AccountService} from '../../services/account.service';
import {ApiService} from '../../services/api.service';
import {Response, User} from '../../_models';
import {CheckInPostData} from '../../_models/checkInPostData';
import {CheckedInDetailItem} from '../../_models/checkedInDetailItem';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
    @Input() showPlaceNavigationBtns = false;
    @Input() isCurrentCheckin = false;
    @Input() hideCheckinButton = false;
    // @Input() checkedPlaces = ['Project name goes here on a single text line'];
    @Output() scanQrCode = new EventEmitter<string>();
    @Output() nextPlace = new EventEmitter<void>();
    @Output() previousPlace = new EventEmitter<void>();

    user: User;

    checkedPlaces: Array<CheckedInDetailItem> = [];
    checkedIn = false;

    showCheckedInPlacesList = false;
    selectedPlace: CheckedInDetailItem;

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
        private accountService: AccountService,
        private apiService: ApiService,
    ) {
        this.user = this.accountService.userValue;
        this.checkedPlaces = sharedDataService.checkedInPlaces;

        if (this.checkedPlaces && this.checkedPlaces.length > 0) {
            this.checkedIn = true;
        }

        if (this.checkedIn && this.checkedPlaces) {
            if (!sharedDataService.currentSelectedCheckinPlace) {
                const place = this.checkedPlaces[0];
                sharedDataService.currentSelectedCheckinPlace = place;
                localStorage.setItem(EnumService.LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE, JSON.stringify(place));
                this.selectedPlace = place;
            } else {
                this.selectedPlace = sharedDataService.currentSelectedCheckinPlace;
            }
        }
    }

    ngOnInit() {
        this.getUserCurrentCheckinDetails();
        this.observablesService.getObservable(EnumService.ObserverKeys.NEW_CHECKED_IN).subscribe((data) => {
            if (data) {
                this.getUserCurrentCheckinDetails();
            }
        });
    }

    getUserCurrentCheckinDetails = () => {
        this.apiService.getUserCurrentCheckingDetails(this.user.userId).subscribe((response: Response) => {
            if (response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const checkedInPlaces = response.Result;
                this.sharedDataService.checkedInPlaces = checkedInPlaces;
                this.checkedPlaces = checkedInPlaces;
                localStorage.setItem(EnumService.LocalStorageKeys.CHECKED_IN_PLACES, JSON.stringify(checkedInPlaces));

                if (checkedInPlaces && checkedInPlaces.length > 0) {
                    this.checkedIn = true;
                }
            }
        });
    };

    showCheckedInPlace() {
        if (!this.isCurrentCheckin) {
            if (this.checkedIn && this.checkedPlaces.length > 1) {
                this.showCheckedInPlacesList = !this.showCheckedInPlacesList;
            }
        }
    }

    placedChange(place) {
        this.selectedPlace = place;
        this.showCheckedInPlacesList = false;
    }

    viewCheckinPlace(place) {
        this.navCtrl.navigateBack(['/tabs/current-checkin'], {
            queryParams: {
                place: JSON.stringify(place)
            }
        });
    }

    checkByQrCode() {
        this.navCtrl.navigateForward('/dashboard-qrscan');
        this.scanQrCode.emit();
    }

    checkInByList() {
        this.sharedDataService.checkInPostData = {
            userId: this.user.userId,
            checkInLatitude: this.sharedDataService.myCurrentGeoLocation?.coords.latitude,
            checkInLongitude: this.sharedDataService.myCurrentGeoLocation?.coords.longitude,
            isGuestReturning: false
        } as CheckInPostData;
        this.navCtrl.navigateForward('/tabs/dashboard/checkin-list');
    }

}
