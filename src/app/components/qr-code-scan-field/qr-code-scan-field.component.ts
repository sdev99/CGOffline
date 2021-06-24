import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { EnumService } from 'src/app/services/enum.service';
import { ObservablesService } from 'src/app/services/observables.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
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

	constructor(public navCtrl: NavController, public observablesService: ObservablesService, public sharedDataService: SharedDataService) {}

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

	removeScanResult() {
		this.writeValue(null);
		this.onTouch();
	}

	scanQrCode() {
		const fromFormCallbackKey = EnumService.ObserverKeys.QRCODE_SCANNED_RESULT + '' + this.formControlName;
		this.sharedDataService.isOpenSubScreen = true;
		this.observablesService.getObservable(fromFormCallbackKey).subscribe((result) => {
			console.log('QR Scan success ', result);
			this.sharedDataService.isOpenSubScreen = false;

			this.writeValue(result);
			this.onTouch();
			this.observablesService.removeObservable(fromFormCallbackKey);
		});
		this.navCtrl.navigateForward('/dashboard-qrscan', {
			queryParams: {
				fromFormPage: true,
				fromFormCallbackKey: fromFormCallbackKey,
				fromFormAllowedQrCodeTypes: this.allowedQrCodeTypes,
			},
		});
	}
}
