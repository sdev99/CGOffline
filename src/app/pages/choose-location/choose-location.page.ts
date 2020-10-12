import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-choose-location',
    templateUrl: './choose-location.page.html',
    styleUrls: ['./choose-location.page.scss'],
})
export class ChooseLocationPage implements OnInit {
    locations = [
        {title: 'Another location name goes here on a single line of text', id: 1},
        {title: 'My project name goes here', id: 2},
        {title: 'Inventory item #40', id: 3},
    ];
    selectedLocation;

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.navCtrl.navigateForward(['/dashboard-dm']);
    }

}
