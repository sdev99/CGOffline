export class CheckInPostData {
	userCheckInDetailID: number;
	userId: string;
	companyID: string;
	userPhoto: string;
	userPhotoFileName?: string; //For offline mode
	userPhotoBinaryFile?: string; //For offline mode
	locationID: number;
	projectID: number;
	inventoryItemID: number;
	checkInLatitude: number;
	checkInLongitude: number;
	isGuestReturning: boolean;
	guestPhone: string;
	guestFirsName: string;
	guestMiddleName: string;
	guestLastName: string;
	guestPhoto: string;
	guestPhotoFileName?: string; //For offline mode
	guestPhotoBinaryFile?: string; //For offline mode
	digitalInkSignature: string;
	digitalInkSignatureFileName?: string; //For offline mode
	digitalInkSignatureBinaryFile?: string; //For offline mode
	userSignaturePhoto: string;
	userSignaturePhotoFileName?: string; //For offline mode
	userSignaturePhotoBinaryFile?: string; //For offline mode
	inductionFormContent: string;
	answerNotificationList: string;
	signOffDate: string;
}
