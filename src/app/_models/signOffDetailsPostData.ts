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
	digitalInkSignature: string;
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
