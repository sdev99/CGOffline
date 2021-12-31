import { DeviceUserQualificationDetail } from "./DeviceUserQualificationDetail";
export class DeviceUserDetail {
  companyID: number;
  firstName: string;
  lastName: string;
  middleName: string;
  photo: string;
  qrCode: string;
  timeDifference: string;
  userAutoCheckOutTime: string;
  userId: string;
  userPhoto: string;
  userQualifications: Array<DeviceUserQualificationDetail>;
}
