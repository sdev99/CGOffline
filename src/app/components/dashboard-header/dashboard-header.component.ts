import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {ObservablesService} from '../../services/observables.service';

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
    checkedPlaces = [];
    checkedIn = false;

    showCheckedInPlacesList = false;
    selectedPlace;

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
    ) {
        this.checkedPlaces = sharedDataService.checkedInPlaces;

        if (this.checkedPlaces && this.checkedPlaces.length > 0) {
            this.checkedIn = true;
        }

        if (this.checkedIn && this.checkedPlaces) {
            this.selectedPlace = this.checkedPlaces[0];
        }
    }

    ngOnInit() {
        this.observablesService.getObservable('NEW_CHECKED_IN').subscribe((data) => {
            if (data) {
                let alreadyCheckedIn = false;
                this.sharedDataService.checkedInPlaces.map((item) => {
                    if (item.id === data.id) {
                        alreadyCheckedIn = true;
                        return;
                    }
                });
                if (!alreadyCheckedIn) {
                    this.sharedDataService.checkedInPlaces.push(data);
                    localStorage.setItem('CHECKED_IN_PLACES', JSON.stringify(this.sharedDataService.checkedInPlaces));
                }

            }

            this.checkedPlaces = this.sharedDataService.checkedInPlaces;
            if (this.checkedPlaces && this.checkedPlaces.length > 0) {
                this.checkedIn = true;
            }
        });
    }

    showCheckedInPlace() {
        if (!this.isCurrentCheckin) {
            if (this.checkedIn && this.checkedPlaces.length > 1) {
                this.showCheckedInPlacesList = true;
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
        this.navCtrl.navigateForward('/tabs/checkin-list');
    }

}
