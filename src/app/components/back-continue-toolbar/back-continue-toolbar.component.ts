import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-back-continue-toolbar',
    templateUrl: './back-continue-toolbar.component.html',
    styleUrls: ['./back-continue-toolbar.component.scss'],
})
export class BackContinueToolbarComponent implements OnInit {

    @Input() title: string;
    @Input() disableRightBtn: boolean;
    @Input() hideRightBtn: boolean;

    @Output() back = new EventEmitter<void>();
    @Output() continue = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

}
