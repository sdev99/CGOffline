import { DeviceCheckInGuestInductionItemDetail } from './DeviceCheckInGuestInductionItemDetail';

export class DeviceCheckInGuestInductionDetail {
	checkInInductionGuestID: number;
	guestInductionItems: Array<DeviceCheckInGuestInductionItemDetail>;
	introduction: string;
	inventoryItemID: number;
	isDigitalSignOff: boolean;
	isPhotoSignOff: boolean;
	isSignatureSignOff: boolean;
	locationID: number;
	projectID: number;
	renewEveryPeriod: number;
	renewEveryPeriodType: string;
}
