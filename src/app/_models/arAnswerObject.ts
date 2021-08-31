export class ArAnswerObject {
	accidentReportQuestionAnswerId?: number;
	questionID: number;
	questionTitle: string;
	answerTypeID?: number;
	accidentDateTime?: string;
	accidentLocationID?: number;
	accidentProjectID?: number;
	accidentInventoryID?: number;
	accidentLocationName?: string;
	accidentAboutIDs?: string;
	accidentTypeID?: number;
	accidentClassificationID?: number;
	accidentBodyPartIDs?: string;
	accidentDescription?: string;
	accidentAttachmentFileName?: string;
	accidentAttachmentFileId?: string; // For offline mode , id of ImageVideoFiles table
	accidentAnswerSequence?: any;
	formVersionID?: number;
	markAsFailed?: boolean;
	isNotify?: boolean;
}
