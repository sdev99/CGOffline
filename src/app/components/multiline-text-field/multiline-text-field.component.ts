import {Component, Input, OnInit} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-multiline-text-field',
    templateUrl: './multiline-text-field.component.html',
    styleUrls: ['./multiline-text-field.component.scss'],
})
export class MultilineTextFieldComponent implements OnInit {
    @Input() label: string;
    @Input() inputName: string;
    @Input() form: FormGroup;
    @Input() isError: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
