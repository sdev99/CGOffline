import { MultipleChoiceAnswerItem } from './multipleChoiceAnswerItem';

export class FormAnswerObject {
	questionAnswerId: number;
	questionID: number;
	questionTitle?: string;
	answerTypeID?: number;
	singleChoiceValueID?: number;
	textValue?: string;
	integerValue?: number;
	decimalValue?: number;
	dateValue?: string;
	timeValue?: string;
	dateTimeValue?: string;
	imageVideoFileName?: string;
	questionComment?: string;
	multipleChoiceValueIDs?: string;
	isConfirmBoxChecked?: boolean;
	questionDisplayOrder?: number;
	formVersionID?: number;
	multipleChoiceAnswers?: any;
	markAsFailed?: boolean;
	isNotify?: boolean;
}
