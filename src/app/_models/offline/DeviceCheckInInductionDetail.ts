import { DeviceCheckInInductionItemDetail } from './DeviceCheckInInductionItemDetail';
export class DeviceCheckInInductionDetail {
	checkInInductionID: number;
	inductionItems: Array<DeviceCheckInInductionItemDetail>;
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
