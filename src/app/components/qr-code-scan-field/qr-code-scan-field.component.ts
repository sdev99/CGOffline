import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-qr-code-scan-field',
	templateUrl: './qr-code-scan-field.component.html',
	styleUrls: ['./qr-code-scan-field.component.scss'],
})
export class QrCodeScanFieldComponent implements OnInit {
	@Input() inputName: string;
	@Input() form: FormGroup;
	@Input() isError: boolean;

	constructor(public navCtrl: NavController) {}

	ngOnInit() {}

	scanQrCode() {
		this.navCtrl.navigateForward('/dashboard-qrscan', {
			queryParams: {
				fromFormCustomQuestion: true,
			},
		});
	}
}
