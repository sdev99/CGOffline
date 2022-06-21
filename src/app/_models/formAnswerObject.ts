export class FormAnswerObject {
    questionAnswerId: number;
    questionID: number;
    questionTitle?: string;
    answerTypeID?: number;
    singleChoiceValueID?: number;
    textValue?: string;
    integerValue?: number;
    integerValueInString?: string;
    decimalValue?: number;
    dateValue?: string;
    timeValue?: string;
    dateTimeValue?: string;
    imageVideoFileName?: string;
    imageVideoFileId?: string; // For offline mode only , Id of ImageVideFiles table
    questionComment?: string;
    multipleChoiceValueIDs?: string;
    isConfirmBoxChecked?: boolean;
    questionDisplayOrder?: number;
    formVersionID?: number;
    multipleChoiceAnswers?: any;
    matrixAnswer?: any;
    markAsFailed?: boolean;
    isNotify?: boolean;
    selectedQRCodeType?: string;
    qrCodeLocationID?: number;
    qrCodeLocationName?: string;
    qrCodeProjectID?: number;
    qrCodeProjectName?: string;
    qrCodeInventoryItemID?: number;
    qrCodeInventoryItemName?: string;
    qrCodeDocumentID?: number;
    qrCodeDocumentName?: string;
    qrCodeFormID?: number;
    qrCodeFormTitle?: string;
    qrCodeUserID?: number;
    qrCodeUserName?: string;
}
