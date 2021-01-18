import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {
    @Input() modalTitle: string;

    @Output() closeModal = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

}
