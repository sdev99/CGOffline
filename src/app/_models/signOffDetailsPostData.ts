export class SignOffDetailsPostData {
	signOffDocumentID: number;
	userId: string;
	userCheckInDetailID: number;
	activityIndividualID: number;
	documentVersionID: number;
	formVersionID: number;
	locationID: number;
	projectID: number;
	inventoryItemID: number;
	latitude: number;
	longitude: number;
	userSignaturePhoto: string;
	userSignaturePhotoFileName?: string; //For offline mode
	userSignaturePhotoBinaryFile?: string; //For offline mode
	digitalInkSignature: string;
	digitalInkSignatureFileName?: string; //For offline mode
	digitalInkSignatureBinaryFile?: string; //For offline mode
	documentID: number;
	isApproved: boolean;
	isRejected: boolean;
	rejectedReason: string;
	approvedRejectedBy: string;
	createdDate: string;
	formContent: string;
	answerNotificationList: string;
	signOffDate: string;
}
