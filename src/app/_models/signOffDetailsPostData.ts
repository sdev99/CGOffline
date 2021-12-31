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
  userSignaturePhotoImageVideoFileId?: number; //For offline mode
  digitalInkSignature: string;
  digitalInkSignatureImageVideoFileId?: number; //For offline mode
  documentID: number;
  isApproved: boolean;
  isRejected: boolean;
  rejectedReason: string;
  approvedRejectedBy: string;
  createdDate: string;
  formContent: string;
  formSubmitDataId?: string; // For offline mode
  answerNotificationList: string;
  signOffDate: string;
}
