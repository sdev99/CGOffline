import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth-input',
    templateUrl: './auth-input.component.html',
    styleUrls: ['./auth-input.component.scss'],
})
export class AuthInputComponent implements OnInit {
    @Input() type = 'text';
    @Input() value: string;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() autocapitalize: string;
    @Input() autocomplete: string;
    @Input() inputmode: string;

    constructor() {
    }

    ngOnInit() {
    }

}
