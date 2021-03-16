import { Component, Input, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormGroupName } from '@angular/forms';
import { UtilService } from '../../services/util.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
	selector: 'app-confirm-box-field',
	templateUrl: './confirm-box-field.component.html',
	styleUrls: ['./confirm-box-field.component.scss'],
})
export class ConfirmBoxFieldComponent implements OnInit {
	UtilService = UtilService;

	@Input() inputName: string;
	@Input() form: FormGroup;
	@Input() list: Array<any>;

	constructor(public sharedDataService: SharedDataService) {}

	ngOnInit() {}
}
