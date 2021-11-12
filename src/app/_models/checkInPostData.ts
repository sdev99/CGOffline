export class CheckInPostData {
  userCheckInDetailID: number;
  userId: string;
  companyID: string;
  userPhoto: string;
  userPhotoImageVideoFileId?: number; //For offline mode
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
  guestPhotoImageVideoFileId?: number; //For offline mode
  digitalInkSignature: string;
  digitalInkSignatureImageVideoFileId?: number; //For offline mode
  userSignaturePhoto: string;
  userSignaturePhotoImageVideoFileId?: number; //For offline mode
  inductionFormList: Array<any>;
  formSubmitDataId: Array<any>; // For offline mode
  inductionFormContent: string;
  answerNotificationList: string;
  signOffDate: string;
}
