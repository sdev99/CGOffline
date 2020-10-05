import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkinout-name-dm',
    templateUrl: './checkinout-name-dm.page.html',
    styleUrls: ['./checkinout-name-dm.page.scss'],
})
export class CheckinoutNameDmPage implements OnInit {
    name;
    showList = false;
    items = ['Fisher Serenity', 'Alreadycheckin Test', 'Murphy Claire', 'Edwards Priscilla', 'Flores Esther', 'Lane Connie', 'Cooper Regina', 'Mccoy Kristin'];

    constructor(
        public navController: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        if (this.name === 'Alreadycheckin Test') {
            this.navController.navigateForward('checkinout-alreadycheckin-dm');
        } else {
            this.navController.navigateRoot('dashboard-dm');
        }
    }

    onSelect(item) {
        console.log('Item ' + item);
        this.name = item;
        this.showList = false;
    }
}
