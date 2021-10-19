export class DeviceAvailableDocumentDetail {
	folderID?: number;
	documentID: number;
	documentVersionID: null;
	documentTitle: string;
	isDigitalSignOff: boolean;
	isSignatureSignOff: boolean;
	isPhotoSignOff: boolean;
	documentFileName: string;
	documentFileFormat: string;
	documentFileIconURL: string;
	isReviewal: boolean;
	reviewerId: string;
	isSystemReviewer: boolean;
	isEmailReviewer: boolean;
	isSmsReviewer: boolean;
	createdDate: string;
	documentVersionNo: number;
	expirationDate: string;
	formattedCreatedDate: string;
	inventoryItemID: number;
	locationID: number;
	parentFolderID: number;
	projectID: number;
	timeDifference: string;
}
