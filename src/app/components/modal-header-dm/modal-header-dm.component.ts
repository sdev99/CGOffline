import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal-header-dm',
    templateUrl: './modal-header-dm.component.html',
    styleUrls: ['./modal-header-dm.component.scss'],
})
export class ModalHeaderDmComponent implements OnInit {

    @Input() modalTitle: string;
    @Input() modalSubTitle: string;

    @Output() closeModal = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

}
