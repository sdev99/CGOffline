import { DeviceFormAttachmentDetail } from './DeviceFormAttachmentDetail';
export class DeviceFormDetail {
	formAttachments: Array<DeviceFormAttachmentDetail>;
	formFolderID: number;
	formID: number;
	formTitle: string;
	formType: string;
	formVersionID: number;
	formVersionNo: number;
	formattedDescription: string;
	formattedInstructions: string;
	inventoryItemID: number;
	isDigitalSignOff: boolean;
	isEmailReviewer: boolean;
	isPhotoSignOff: boolean;
	isReviewal: boolean;
	isSignatureSignOff: boolean;
	isSmsReviewer: boolean;
	isSystemReviewer: boolean;
	locationID: number;
	parentFormFolderID: number;
	projectID: number;
	reviewerId: string;
}
