import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-modal-header-dm',
    templateUrl: './modal-header-dm.component.html',
    styleUrls: ['./modal-header-dm.component.scss'],
})
export class ModalHeaderDmComponent implements OnInit {

    @Input() modalTitle: string;
    @Input() modalSubTitle: string;
    @Input() showEvacuation: boolean;

    @Output() closeModal = new EventEmitter<string>();

    constructor(
        private navController: NavController
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        if (this.closeModal) {
            this.closeModal.emit();
        } else {
            this.navController.back();
        }
    }
}
