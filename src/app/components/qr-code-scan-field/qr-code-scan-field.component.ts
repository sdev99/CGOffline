import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { EnumService } from 'src/app/services/enum.service';
import { ObservablesService } from 'src/app/services/observables.service';
import { EntityItem } from 'src/app/_models/entityItem';

@Component({
	selector: 'app-qr-code-scan-field',
	templateUrl: './qr-code-scan-field.component.html',
	styleUrls: ['./qr-code-scan-field.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: QrCodeScanFieldComponent,
			multi: true,
		},
	],
})
export class QrCodeScanFieldComponent implements ControlValueAccessor {
	@Input() formControlName: string;
	@Input() isError: boolean;
	@Input() allowedQrCodeTypes: Array<string>;

	entityItem: EntityItem;

	private disabled = false;

	private onChange: any = (entityItem: EntityItem) => {};
	private onTouch: any = () => {};

	constructor(public navCtrl: NavController, public observablesService: ObservablesService) {}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	writeValue(obj: EntityItem): void {
		this.onChange(obj);
		this.entityItem = obj;
	}

	// Allow the Angular form control to disable this input
	setDisabledState(disabled: boolean): void {
		this.disabled = disabled;
	}

	scanQrCode() {
		const fromFormCustomQuestionCallbackKey = EnumService.ObserverKeys.QRCODE_SCANNED_RESULT + '' + this.formControlName;
		this.observablesService.getObservable(fromFormCustomQuestionCallbackKey).subscribe((result) => {
			console.log('QR Scan success ', result);
			this.writeValue(result);
			this.onTouch();
			this.observablesService.removeObservable(fromFormCustomQuestionCallbackKey);
		});
		this.navCtrl.navigateForward('/dashboard-qrscan', {
			queryParams: {
				fromFormCustomQuestion: true,
				fromFormCustomQuestionCallbackKey: fromFormCustomQuestionCallbackKey,
				fromFormAllowedQrCodeTypes: this.allowedQrCodeTypes,
			},
		});
	}
}
