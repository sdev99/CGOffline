import { DeviceCheckInGuestInductionItemDetail } from './DeviceCheckInGuestInductionItemDetail';

export class DeviceCheckInGuestInductionDetail {
	checkInInductionGuestID: 8;
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
