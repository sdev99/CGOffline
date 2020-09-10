import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
    @Input() checkedIn = true;
    @Input() checkedPlaces = ['Project name goes here on a single text line', 'Location name goes here on a single line xt...', 'Inventory item #4982 title goes here', 'Location name goes here on a single li text...'];
    // @Input() checkedPlaces = ['Project name goes here on a single text line'];
    @Output() scanQrCode = new EventEmitter<string>();

    showCheckedInPlacesList = false;
    selectedPlace;

    constructor() {
        if (this.checkedIn && this.checkedPlaces) {
            this.selectedPlace = this.checkedPlaces[0];
        }
    }

    ngOnInit() {
    }

    showCheckedInPlace() {
        if (this.checkedIn && this.checkedPlaces.length > 1) {
            this.showCheckedInPlacesList = true;
        }
    }

    placedChange(place) {
        console.log('placedChange');

        this.selectedPlace = place;
        this.showCheckedInPlacesList = false;
    }

    viewCheckinPlace(place) {

    }

}
