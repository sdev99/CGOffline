import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.scss'],
})
export class DateFieldComponent implements OnInit {
    @Input() label: string;
    @Input() inputName: string;
    @Input() form: FormGroup;
    @Input() isError: boolean;
    @Input() placeholder: string;

    constructor() {
    }

    ngOnInit() {
    }

}
