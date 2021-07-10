import { DeviceUserQualificationDetail } from './DeviceUserQualificationDetail';
export class DeviceUserDetail {
	companyID: number;
	firstName: string;
	lastName: string;
	middleName: string;
	photo: string;
	photo_BinaryImage: string;
	qrCode: string;
	timeDifference: string;
	userAutoCheckOutTime: string;
	userId: string;
	userPhoto: string;
	userPhoto_BinaryImage: string;
	userQualifications: Array<DeviceUserQualificationDetail>;
}
