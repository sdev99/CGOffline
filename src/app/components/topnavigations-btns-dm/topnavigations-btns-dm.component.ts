import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-topnavigations-btns-dm',
    templateUrl: './topnavigations-btns-dm.component.html',
    styleUrls: ['./topnavigations-btns-dm.component.scss'],
})
export class TopnavigationsBtnsDmComponent implements OnInit {
    @Input() activeBtn: string;

    constructor(
        public navController: NavController,
    ) {
    }

    ngOnInit() {
    }

    checkInOutClick() {
        this.navController.navigateRoot('checkinout-option-dm');
    }

    documentsClick() {
        this.navController.navigateRoot('documents-dm');
    }

    formsClick() {
        this.navController.navigateRoot('forms-dm');
    }

    permitsClick() {
        this.navController.navigateRoot('permits-dm');
    }

    evacuationClick() {
        this.navController.navigateRoot('evacuation-dm');
    }

    generatePermitClick() {
        this.navController.navigateRoot('permits-generate-dm');
    }

}
