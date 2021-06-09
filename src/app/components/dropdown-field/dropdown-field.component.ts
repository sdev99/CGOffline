import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-dropdown-field',
	templateUrl: './dropdown-field.component.html',
	styleUrls: ['./dropdown-field.component.scss'],
})
export class DropdownFieldComponent implements OnInit {
	@Input() inputName: string;
	@Input() interface = 'alert';
	@Input() form: FormGroup;
	@Input() label: string;
	@Input() list: Array<any>;
	@Input() listLabelKey: string;
	@Input() listValueKey: string;
	@Input() isError: boolean;
	@Input() placeholder: string;
	@Output() valueChange = new EventEmitter<any>();

	constructor() {}

	ngOnInit() {}
}
