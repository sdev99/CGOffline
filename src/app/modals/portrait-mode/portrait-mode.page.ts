import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../services/shared-data.service';
import {ModalController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-portrait-mode',
    templateUrl: './portrait-mode.page.html',
    styleUrls: ['./portrait-mode.page.scss'],
})
export class PortraitModePage implements OnInit {

    constructor(
        public sharedDataService: SharedDataService,
        public navController: NavController,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.modalController.dismiss(true);
    }
}
