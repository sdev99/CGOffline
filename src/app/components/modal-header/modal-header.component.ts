import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {
    @Input() modalTitle = 'Test Activity';

    @Output() closeModal = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

}
