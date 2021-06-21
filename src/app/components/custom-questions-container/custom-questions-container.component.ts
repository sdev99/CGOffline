import { Component, Input, OnInit } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { UtilService } from '../../services/util.service';
import { EnumService } from '../../services/enum.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
	selector: 'app-custom-questions-container',
	templateUrl: './custom-questions-container.component.html',
	styleUrls: ['./custom-questions-container.component.scss'],
})
export class CustomQuestionsContainerComponent implements OnInit {
	UtilService = UtilService;
	EnumService = EnumService;

	@Input() sectionIndex: number;
	@Input() sectionId: number;
	@Input() formGroup: FormGroup;
	@Input() questions: Array<any>;
	@Input() questionElementIds: Array<string>;
	@Input() isSubmitted: boolean;
	@Input() section: any;

	constructor(public sharedDataService: SharedDataService, public utilService: UtilService) {}

	ngOnInit() {}

	shouldShowError(question) {
		if (
			question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleChoiceSet ||
			question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet ||
			question.selectedAnswerTypeId === EnumService.CustomAnswerType.ConfirmationBox
		) {
			return true;
		}
		return true;
		// return false;
	}

	isError(question, questionIndex) {
		const controlName = UtilService.FCUniqueName(this.section, question);
		return this.isSubmitted && !this.formGroup.controls[controlName].valid;
	}

	getAllowedQrCodeTypes = (question) => {
		const arr = [];
		if (question) {
			if (question.allowQRCodeLocation) {
				arr.push(EnumService.SelectedQRCodeType.Location);
			}
			if (question.allowQRCodeProject) {
				arr.push(EnumService.SelectedQRCodeType.Project);
			}
			if (question.allowQRCodeInventoryItem) {
				arr.push(EnumService.SelectedQRCodeType.InventoryItem);
			}
			if (question.allowQRCodeDocument) {
				arr.push(EnumService.SelectedQRCodeType.Document);
			}
			if (question.allowQRCodeForm) {
				arr.push(EnumService.SelectedQRCodeType.Form);
			}
			if (question.allowQRCodeUser) {
				arr.push(EnumService.SelectedQRCodeType.User);
			}
		}

		return arr;
	};
}
