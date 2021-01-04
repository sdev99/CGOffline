import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-archived-item',
    templateUrl: './archived-item.component.html',
    styleUrls: ['./archived-item.component.scss'],
})
export class ArchivedItemComponent implements OnInit {
    @Input() icon: string;
    @Input() colFirst: string;
    @Input() colSecond: string;
    @Input() colSecondHighlighted: string;
    @Input() colThird: string;
    @Input() colThirdHighlighted: string;
    @Output() itemSelect = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

}
