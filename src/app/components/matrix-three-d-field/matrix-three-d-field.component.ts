import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
	selector: 'app-matrix-three-d-field',
	templateUrl: './matrix-three-d-field.component.html',
	styleUrls: ['./matrix-three-d-field.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: MatrixThreeDFieldComponent,
			multi: true,
		},
	],
})
export class MatrixThreeDFieldComponent implements ControlValueAccessor {
	UtilService = UtilService;

	@Input() formControlName: string;
	@Input() isError: boolean;
	@Input() question: any;

	private disabled = false;

	private onChange: any = (obj: any) => {};
	private onTouch: any = () => {};

	valueData: any;

	checkBoxDataNgModel = {};

	constructor(public navCtrl: NavController, public sharedDataService: SharedDataService) {}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	writeValue(obj: any): void {
		this.onChange(obj);
		this.valueData = obj;
	}

	onCheckboxChange() {
		this.writeValue(this.checkBoxDataNgModel);
		this.onTouch();
	}

	// Allow the Angular form control to disable this input
	setDisabledState(disabled: boolean): void {
		this.disabled = disabled;
	}
}
