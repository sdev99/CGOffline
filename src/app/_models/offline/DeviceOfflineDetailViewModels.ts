import { DeviceArchivedDocumentDetail } from "./DeviceArchivedDocumentDetail";
import { DeviceAvailableDocumentDetail } from "./DeviceAvailableDocumentDetail";
import { DeviceAvailableFormDetail } from "./DeviceAvailableFormDetail";
import { DeviceArchivedWorkPermitDetail } from "./DeviceArchivedWorkPermitDetail";
import { DeviceAvailableWorkPermitDetail } from "./DeviceAvailableWorkPermitDetail";
import { DeviceCheckInGuestInductionItemDetail } from "./DeviceCheckInGuestInductionItemDetail";
import { DeviceDetailData } from "./DeviceDetailData";
import { DeviceEntityData } from "./DeviceEntityData";
import { DeviceHazardItemDetail } from "./DeviceHazardItemDetail";
import { DeviceRiskItemDetail } from "./DeviceRiskItemDetail";
import { DeviceHAVModelDetail } from "./DeviceHAVModelDetail";
import { DeviceHAVTypeDetail } from "./DeviceHAVTypeDetail";
import { DeviceHAVManufacturerDetail } from "./DeviceHAVManufacturerDetail";
import { DeviceCompanyUserGroupDetail } from "./DeviceCompanyUserGroupDetail";
import { DeviceCompanyUserDetail } from "./DeviceCompanyUserDetail";
import { DeviceUserDetail } from "./DeviceUserDetail";
import { DeviceUserQualificationDetail } from "./DeviceUserQualificationDetail";
import { DeviceGuestUserDetail } from "./DeviceGuestUserDetail";
import { DeviceLiveWorkPermitDetail } from "./DeviceLiveWorkPermitDetail";
import { DeviceFormDetail } from "./DeviceFormDetail";
import { DeviceFormAttachmentDetail } from "./DeviceFormAttachmentDetail";
import { DeviceEvacuationDetail } from "./DeviceEvacuationDetail";
import { DeviceUserCheckInQualificationDetail } from "./DeviceUserCheckInQualificationDetail";
import { DeviceLocationDetail } from "./DeviceLocationDetail";
import { DeviceProjectDetail } from "./DeviceProjectDetail";
import { DeviceInventoryItemDetail } from "./DeviceInventoryItemDetail";
import { DeviceUserCheckinDetail } from "./DeviceUserCheckinDetail";
import { DeviceCheckInGuestInductionDetail } from "./DeviceCheckInGuestInductionDetail";
import { DeviceCheckInInductionItemDetail } from "./DeviceCheckInInductionItemDetail";
import { DeviceGuestUserCheckinDetail } from "./DeviceGuestUserCheckinDetail";
import { DeviceArchivedFormDetail } from "./DeviceArchivedFormDetail";
import { DeviceCheckInInductionDetail } from "./DeviceCheckInInductionDetail";
import { DeviceFormBuilderDetail } from "./DeviceFormBuilderDetail";

export class DeviceOfflineDetailViewModels {
  deviceDetailData: DeviceDetailData;
  deviceEntityData: Array<DeviceEntityData>;
  deviceUserList: Array<DeviceUserDetail>;
  deviceUserQualificationList: Array<DeviceUserQualificationDetail>;
  deviceGuestUserList: Array<DeviceGuestUserDetail>;
  deviceAvailableDocumentList: Array<DeviceAvailableDocumentDetail>;
  deviceArchivedDocumentList: Array<DeviceArchivedDocumentDetail>;
  deviceAvailableFormList: Array<DeviceAvailableFormDetail>;
  deviceArchivedFormList: Array<DeviceArchivedFormDetail>;
  deviceAvailableWorkPermitList: Array<DeviceAvailableWorkPermitDetail>;
  deviceLiveWorkPermitList: Array<DeviceLiveWorkPermitDetail>;
  deviceArchivedWorkPermitList: Array<DeviceArchivedWorkPermitDetail>;
  deviceFormDetailsList: Array<DeviceFormDetail>;
  deviceFormAttachmentList: Array<DeviceFormAttachmentDetail>;
  deviceEvacuationList: Array<DeviceEvacuationDetail>;
  deviceUserCheckInQualificationList: Array<DeviceUserCheckInQualificationDetail>;
  deviceLocationList: Array<DeviceLocationDetail>;
  deviceProjectList: Array<DeviceProjectDetail>;
  deviceInventoryItemList: Array<DeviceInventoryItemDetail>;
  deviceUserCheckinDetailList: Array<DeviceUserCheckinDetail>;
  deviceCheckInInductionList: Array<DeviceCheckInInductionDetail>;
  deviceCheckInInductionItemList: Array<DeviceCheckInInductionItemDetail>;
  deviceGuestUserCheckinDetailList: Array<DeviceGuestUserCheckinDetail>;
  deviceCheckInGuestInductionList: Array<DeviceCheckInGuestInductionDetail>;
  deviceCheckInGuestInductionItemList: Array<DeviceCheckInGuestInductionItemDetail>;
  deviceCompanyUserList: Array<DeviceCompanyUserDetail>;
  deviceCompanyUserGroupList: Array<DeviceCompanyUserGroupDetail>;
  deviceHAVManufacturerList: Array<DeviceHAVManufacturerDetail>;
  deviceHAVTypeList: Array<DeviceHAVTypeDetail>;
  deviceHAVModelList: Array<DeviceHAVModelDetail>;
  deviceRiskItemList: Array<DeviceRiskItemDetail>;
  deviceHazardItemList: Array<DeviceHazardItemDetail>;
  deviceAnswerChoiceQrCodeEntityDataList: Array<any>;
  deviceFormBuilderDetailsList: Array<DeviceFormBuilderDetail>;
  deviceLocationItemList: Array<any>;
  deviceAccidentTypeList: Array<any>;
  deviceAccidentClassificationList: Array<any>;
  deviceUserTotalHAVExposureList: Array<any>;
  deviceRiskAssessmentProbabilityOptionList: Array<any>;
  deviceRiskAssessmentSeverityOptionList: Array<any>;
}
