import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EnumService } from './enum.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Response } from '../_models/response';
import { SharedDataService } from './shared-data.service';
import { SignOffDetailsPostData } from '../_models/signOffDetailsPostData';
import { CheckInPostData } from '../_models/checkInPostData';
import { CheckedInDetailItem } from '../_models/checkedInDetailItem';
import { DeviceEntityDetail } from '../_models/deviceEntityDetail';
import { UtilService } from './util.service';
import { Observable, Observer } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient, public sharedDataService: SharedDataService) {}

	getTermsOfServices() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetTermsOfServices}`);
	}

	getTimeZoneList() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetTimeZoneList}`).pipe(
			map((data: Response) => {
				if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					const list = data.Result;
					this.sharedDataService.timeZoneList = list;
					return list;
				}

				return null;
			})
		);
	}

	getCompanyLanguageList(companyId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetCompanyLanguageList}/${companyId}`).pipe(
			map((data: Response) => {
				if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					const list = data.Result;
					this.sharedDataService.companyLanguageList = list;
					return list;
				}

				return null;
			})
		);
	}

	getEntityByQRCode(qrCode) {
		let companyID;
		if (this.sharedDataService.dedicatedMode) {
			companyID = this.sharedDataService.dedicatedModeDeviceDetailData.companyID;
		} else {
			companyID = this.sharedDataService.getLoggedInUser().companyID;
		}
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetEntityByQRCode}?code=${qrCode}&companyID=${companyID}`);
	}

	getLocationItemList(companyId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetLocationItemList}/${companyId}`).pipe(
			map((data: Response) => {
				if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					const list = data.Result;
					this.sharedDataService.locationItemList = list;
				}
				return data;
			})
		);
	}

	getGlobalDirectories(companyFolderName) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetGlobalDirectories}?companyFolderName=${companyFolderName}`).pipe(
			map((data: Response) => {
				if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					return data.Result;
				}
				return null;
			})
		);
	}

	updatePushNotification(body, userId) {
		return this.http.put(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.UpdatePushNotification}/${userId}`, body).pipe(
			map((data: Response) => {
				if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
					return true;
				}
				return false;
			})
		);
	}

	/**
	 * This API will use for uploading a user photo at the time of check in
	 * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "UserPhoto"
	 * @param file image to be upload
	 * Note: Please crop image before uploading as per design
	 */
	checkInPhotoUpload(file, fileName = '') {
		const formData = new FormData();
		formData.append('file', file, fileName);
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.CheckInPhotoUpload}`, formData);
	}

	/**
	 * This API will use for uploading a user photo at the time of Induction signoff.
	 * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "UserSignaturePhoto"
	 * @param file image to be upload
	 * Note: Please crop image before uploading as per design
	 */
	inductionPhotoUpload(file, fileName = '') {
		const formData = new FormData();
		formData.append('file', file, fileName);
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.InductionPhotoUpload}`, formData);
	}

	/**
	 * This API will use for uploading a attachment at the time of Form submit.
	 * This Api will return uploaded file name which will be used in savAnswer API’s "
	 * @param file image to be upload
	 * Note: Please crop image before uploading as per design
	 */
	formPhotoOrVideoUpload(file, fileName = '') {
		const formData = new FormData();
		formData.append('file', file, fileName);
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.FormPhotoOrVideoUpload}`, formData);
	}

	/**
	 * This API will use for uploading a user signature at the time of Induction signoff.
	 * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "DigitalInkSignature"
	 * @param file image to be upload
	 * Note: Please crop image before uploading as per design
	 */
	inductionSignatureUpload(file, fileName = '') {
		const formData = new FormData();
		formData.append('file', file, fileName);
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.InductionSignatureUpload}`, formData);
	}

	/**
	 * This API will return the activity list by current logged in user.
	 * @param userId Request Parameter {id} : just pass current logged in user id.
	 * Note: FormattedDescription & FormattedInstructions fields contains the line break character "<br/>". Please replace it with line break character which is used in mobile app.
	 */
	getActivityList(userId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetUserActivityList}/${userId}`);
	}

	/**
	 *  This API will return activity details by using activityIndividualID.
	 * @param activityId We will get activityIndividualID from GetUserActivityList API.
	 */
	getActivityDetail(activityId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetUserActivityDetail}/${activityId}`);
	}

	/**
	 * This API will update the activity status to complete. This API will use for Custom activity only
	 * @param userId current logged in user
	 * @param activityId we will get this from GetUserActivityList API
	 */
	activityCompleted(userId, activityId) {
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.ActivityCompleted}?id=${userId}&activityIndividualID=${activityId}`, {});
	}

	/**
	 * This API will return activity sign off form details
	 * @param userId current logged in user
	 * @param formId : formID, we will get this from GetUserActivityList API
	 * @param activityIndividualID : activityIndividualID, we will get this from GetUserActivityList API.
	 * Note: If activity type is form sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for form signoff.
	 */
	getActivitySignOffFormDetail(userId, formId, activityIndividualID) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetActivitySignOffFormDetail}?id=${userId}&formId=${formId}&activityIndividualID=${activityIndividualID}`);
	}

	/**
	 * This API will return sign off form details
	 * @param userId current logged in user
	 * @param formId : formID, we will get this from GetUserActivityList API
	 * @param locationID : locationID, we will get this from Entity detail
	 * @param projectID : projectID, we will get this from Entity detail
	 * @param inventoryItemID : inventoryItemID, we will get this from Entity detail
	 * Note: If activity type is form sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for form signoff.
	 */
	getSignOffFormDetail(userId, formId, locationID = 0, projectID = 0, inventoryItemID = 0) {
		return this.http.get(
			`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetSignOffFormDetail}?id=${userId}&formId=${formId}&LocationID=${locationID}&ProjectID=${projectID}&InventoryItemID=${inventoryItemID}`
		);
	}

	/**
	 * This API will return activity sign off document details
	 * @param documentId documentID, we will get this from GetUserActivityList API
	 * Note: If activity type is document sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for document signoff.
	 */
	getActivitySignOffDocumentDetail(documentId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetActivitySignOffDocumentDetail}/${documentId}`);
	}

	/**
	 * This API will return activity sign off document details for dedicated mode
	 * @param formId formId, we will get this from induction item
	 * Note: If IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed signoff steps for form signoff.
	 */
	getDedicatedModeSignOffFormDetail(formId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeSignOffFormDetail}?formID=${formId}`);
	}

	/**
	 * This API will use for downloading a document
	 * @param filename we will get filename from related APIs
	 * @param companyFolderName we will get company folder name at the time of login
	 */
	downloadDocument(filename, companyFolderName) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.DownloadDocument}?fileName=${filename}&companyFolderName=${companyFolderName}`);
	}

	/**
	 * This API will return all available form for current checked in locations
	 * @param userId current logged in user id
	 * @param companyID we will get company id at the time of login
	 */
	getPersonalModeAvailableForms(userId, companyID, folderId = 0) {
		const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
		if (companyID && place && (place.locationID || place.projectID || place.inventoryItemID)) {
			const queryParam = {
				CompanyID: companyID,
				LocationID: place?.locationID,
				ProjectID: place?.projectID,
				InventoryItemID: place?.inventoryItemID,
				FormFolderID: folderId,
			};
			const queryString = UtilService.convertToQuerystring(queryParam);
			return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetPersonalModeAvailableForms}/${userId}?${queryString}`);
		}
		return new Observable((observer: Observer<any>) => {
			observer.error(new Error('No current checkin found'));
			observer.complete();
		});
	}

	/**
	 * This API will return all available documents for current checked in locations
	 * @param userId current logged in user id
	 * @param companyID we will get company id at the time of login
	 */
	getPersonalModeAvailableDocuments(userId, companyID, folderId = 0) {
		const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
		if (companyID && place && (place.locationID || place.projectID || place.inventoryItemID)) {
			const queryParam = {
				CompanyID: companyID,
				LocationID: place?.locationID,
				ProjectID: place?.projectID,
				InventoryItemID: place?.inventoryItemID,
				FolderID: folderId,
			};
			const queryString = UtilService.convertToQuerystring(queryParam);
			return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetPersonalModeAvailableDocuments}/${userId}?${queryString}`);
		}
		return new Observable((observer: Observer<any>) => {
			observer.error(new Error('No current checkin found'));
			observer.complete();
		});
	}

	/**
	 * This API will return all available work permits for current checked in locations
	 * @param userId current logged in user id
	 * @param companyID we will get company id at the time of login
	 */
	getPersonalModeAvailableWorkPermits(userId, companyID, folderId = 0) {
		const place: CheckedInDetailItem = this.sharedDataService.currentSelectedCheckinPlace;
		if (companyID && place && (place.locationID || place.projectID || place.inventoryItemID)) {
			const queryParam = {
				CompanyID: companyID,
				LocationID: place?.locationID,
				ProjectID: place?.projectID,
				InventoryItemID: place?.inventoryItemID,
				FormFolderID: folderId,
			};
			const queryString = UtilService.convertToQuerystring(queryParam);
			return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetPersonalModeAvailableWorkPermits}/${userId}?${queryString}`);
		}
		return new Observable((observer: Observer<any>) => {
			observer.error(new Error('No current checkin found'));
			observer.complete();
		});
	}

	/**
	 * This API will return form details
	 * @param formId we will get this from GetPersonalModeAvailableForms api
	 * @param formVersionId we will get this from GetPersonalModeAvailableForms api
	 */
	getFormBuilderDetails(formId, formVersionId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetFormBuilderDetails}/${formId}?formVersionId=${formVersionId}`);
	}

	/**
	 * This API will return you the list of current locations which was checked in by current logged in user.
	 * @param userId current logged in user id
	 */
	getUserCurrentCheckingDetails(userId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetUserCurrentCheckInDetails}/${userId}`);
	}

	/**
	 * This API will return all the details that will required for check in settings and induction steps.
	 * @param userId current logged in user id
	 * @param entityId You will get this ID from GetLocationItemList API
	 */
	getCheckInDetails(userId, entityId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetCheckInDetails}/${userId}?EntityID=${entityId}`);
	}

	/**
	 *  This API will return all the details that will required for check in settings and induction steps .
	 * @param userId current logged in user id
	 * @param entityId You will get this ID from GetLocationItemList API
	 */
	getCheckInDetails_Guest(phone, firstName, middleName, lastName, entityId) {
		return this.http.get(
			`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetCheckInDetails_Guest}?phone=${phone}&firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&entityId=${entityId}`
		);
	}

	/**
	 * This API will return signed documents of current logged in user.
	 * @param userId for current logged in user.
	 */
	getMySignedDocuments(userId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.MySignedDocuments}/${userId}`);
	}

	/**
	 *  This API will use for Activity & Document/Form sign off
	 * @param postBody SignOffDetailsPostData
	 */
	insertPersonalModeSignOffDetails(postBody: SignOffDetailsPostData) {
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.InsertPersonalModeSignOffDetails}`, postBody);
	}

	/**
	 *  This API will use for inserting the user's check in details
	 * @param postBody SignOffDetailsPostData
	 */
	insertCheckInDetails(postBody: CheckInPostData) {
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.InsertCheckInDetails}`, postBody);
	}

	/**
	 *  This API will use for inserting the user's check in details
	 * @param postBody SignOffDetailsPostData
	 */
	insertCheckInDetailsGuest(postBody: CheckInPostData) {
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.InsertCheckInDetails_Guest}`, postBody);
	}

	/**
	 *  This API will use at the time of user check out from the location
	 * @param postBody user checkout details
	 */
	insertCheckOutDetails(postBody: { userCheckInDetailID?: number; userId?: string; checkOutLatitude?: number; checkOutLongitude?: number }) {
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.InsertCheckOutDetails}`, postBody);
	}

	/**
	 *  This API will use at the time of user check out from the location
	 * @param postBody guest checkout details
	 */
	insertCheckOutDetails_Guest(postBody: {
		userCheckInDetailID?: number;
		guestPhone?: string;
		guestFirsName?: string;
		guestMiddleName: string;
		guestLastName: string;
		checkOutLatitude?: number;
		checkOutLongitude?: number;
	}) {
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.InsertCheckOutDetails_Guest}`, postBody);
	}

	/**
	 *  This API we  call when we want company User list
	 * @param companyId we will get companyID when user logged into the system
	 */
	getCompanyUserList(companyId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetCompanyUserList}/${companyId}`);
	}

	/**
	 *  This API we  call when we want company Group list
	 * @param companyId we will get companyID when user logged into the system
	 */
	getCompanyUserGroupList(companyId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetCompanyUserGroupList}/${companyId}`);
	}

	/**
	 *  We will call this API when we want company Manufacturer list.
	 * @param companyId we will get companyID when user logged into the system
	 */
	getManufacturerList(companyId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetManufacturerList}/${companyId}`);
	}

	/**
	 *  We will call this API when we want company Type list by Manufacturer.
	 * @param companyId we will get companyID when user logged into the system
	 * @param manufacturerID we will manufacturerID from API GetManufacturerList
	 */
	getTypeList(companyId, manufacturerId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetTypeList}?companyID=${companyId}&manufacturerID=${manufacturerId}`);
	}

	/**
	 *  We will call this API when we want company Model list by Type.
	 * @param companyId we will get companyID when user logged into the system
	 * @param typeId we will get typeID from API GetTypeList
	 */
	getModelList(companyId, typeId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetModelList}?companyID=${companyId}&typeID=${typeId}`);
	}

	/**
	 *  We will call this API when we want User TotalHAVExposure For Today on Hav form.
	 * @param userId current logged in user id
	 */
	getUserTotalHAVExposureForToday(userId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetUserTotalHAVExposureForToday}/${userId}`);
	}

	/**
	 *  This API will use for Save Form Answers
	 * @param postBody answers JSON object
	 */
	saveFormAnswers(postBody) {
		return this.http.post(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.SaveFormAnswers}`, postBody);
	}

	/**
	 *  We will call this API when we want Accident Body Part List.
	 */
	getAccidentBodyPartList() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetAccidentBodyPartList}`);
	}

	/**
	 *  We will call this API when we want Accident Classification List.
	 */
	getAccidentClassificationList() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetAccidentClassificationList}`);
	}

	/**
	 *  We will call this API when we want Accident Type List.
	 */
	getAccidentTypeList() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetAccidentTypeList}`);
	}

	/**
	 *  We will call this API when we want GetRiskRatingOptionList.
	 */
	getRiskRatingOptionList() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetRiskRatingOptionList}`);
	}

	/**
	 *  We will call this API when we want GetRiskAssessmentProbabilityOptions.
	 */
	getRiskAssessmentProbabilityOptions() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetRiskAssessmentProbabilityOptions}`);
	}

	/**
	 *  We will call this API when we want GetRiskAssessmentSeverityOptions.
	 */
	getRiskAssessmentSeverityOptions() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetRiskAssessmentSeverityOptions}`);
	}

	/**
	 *  We will call this API when we want task template for risk assessment form.
	 */
	getRiskItemList(companyId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetRiskItemList}/${companyId}`);
	}

	/**
	 *  We will call this API when we want control measures template for risk assessment form.
	 */
	getHazardItemList(companyId, riskItemId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetHazardItemList}?companyID=${companyId}&companyRiskItemID=${riskItemId}`);
	}

	// Dedicated mode api

	/**
	 *  This API will return User details by QR Code.
	 *  @param deviceId unique device id
	 */
	getDeviceEntityDetails(deviceId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceEntityDetails}/${deviceId}`);
	}

	/**
	 *  This API will return User details by QR Code.
	 *  @param qrCode qrCode of the user
	 */
	getUserByQRCode(qrCode) {
		let companyID;
		if (this.sharedDataService.dedicatedMode) {
			companyID = this.sharedDataService.dedicatedModeDeviceDetailData.companyID;
		} else {
			companyID = this.sharedDataService.getLoggedInUser().companyID;
		}
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetUserByQRCode}?code=${qrCode}&companyID=${companyID}`);
	}

	/**
	 *  This API will return User details by name.
	 *  @param prefix Auto suggest prefix (more than 1 character required)
	 *  @param companyId: we will get this from GetDeviceEntityDetails API.
	 */
	getUserAutoSuggest(companyId, prefix) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetUserAutoSuggest}?companyID=${companyId}&prefix=${prefix}`);
	}

	/**
	 *  This API will return the value of guest user by phone. If we will get value from this API result then we will pass “isGuestReturning” parameter value of API InsertCheckInDetails to true otherwise false.
	 *  @param phone phonenumber
	 */
	getGuestUserDetailByPhone(phone) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetGuestUserDetailByPhone}?phone=${phone}`);
	}

	/**
	 * This API will return all archived documents for dedicated mode
	 * @param companyID we will get this from GetDeviceEntityDetails API.
	 */
	getDedicatedModeAvailableDocuments(companyID, folderId = 0) {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		const queryParam = {
			CompanyID: companyID,
			LocationID: dedicatedModeLocationUse?.locationID,
			ProjectID: dedicatedModeLocationUse?.projectID,
			InventoryItemID: dedicatedModeLocationUse?.inventoryItemID,
			FolderID: folderId,
		};
		const queryString = UtilService.convertToQuerystring(queryParam);

		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeAvailableDocuments}?${queryString}`);
	}

	/**
	 * This API will return all archived documents for dedicated mode
	 * @param companyID we will get this from GetDeviceEntityDetails API.
	 */
	getDedicatedModeArchiveDocuments(companyID) {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		return this.http.get(
			`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeArchiveDocuments}?CompanyID=${companyID}&LocationID=${dedicatedModeLocationUse?.locationID}&ProjectID=${dedicatedModeLocationUse?.projectID}&InventoryItemID=${dedicatedModeLocationUse?.inventoryItemID}`
		);
	}

	/**
	 *  This API will return all available forms for dedicated mode
	 * @param companyID we will get this from GetDeviceEntityDetails API.
	 */
	getDedicatedModeAvailableForms(companyID, folderId = 0) {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		const queryParam = {
			CompanyID: companyID,
			LocationID: dedicatedModeLocationUse?.locationID,
			ProjectID: dedicatedModeLocationUse?.projectID,
			InventoryItemID: dedicatedModeLocationUse?.inventoryItemID,
			FormFolderID: folderId,
		};
		const queryString = UtilService.convertToQuerystring(queryParam);
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeAvailableForms}?${queryString}`);
	}

	/**
	 * This API will return all archived forms for dedicated mode
	 * @param companyID we will get this from GetDeviceEntityDetails API.
	 */
	getDedicatedModeArchiveForms(companyID) {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		return this.http.get(
			`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeArchiveForms}?CompanyID=${companyID}&LocationID=${dedicatedModeLocationUse?.locationID}&ProjectID=${dedicatedModeLocationUse?.projectID}&InventoryItemID=${dedicatedModeLocationUse?.inventoryItemID}`
		);
	}

	/**
	 *   This API will return Evacuation user list for current checked in location
	 */
	getEvacuationList() {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		return this.http.get(
			`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetEvacuationList}?LocationID=${dedicatedModeLocationUse?.locationID}&ProjectID=${dedicatedModeLocationUse?.projectID}&InventoryItemID=${dedicatedModeLocationUse?.inventoryItemID}`
		);
	}

	/**
	 *  This API will return all live work permits for dedicated mode
	 * @param companyID we will get this from GetDeviceEntityDetails API.
	 */
	getDedicatedModeLiveWorkPermits(companyID) {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		return this.http.get(
			`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeLiveWorkPermits}?CompanyID=${companyID}&LocationID=${dedicatedModeLocationUse?.locationID}&ProjectID=${dedicatedModeLocationUse?.projectID}&InventoryItemID=${dedicatedModeLocationUse?.inventoryItemID}`
		);
	}

	/**
	 *  This API will return all archived work permits for dedicated mode
	 * @param companyID we will get this from GetDeviceEntityDetails API.
	 */
	getDedicatedModeArchiveWorkPermits(companyID) {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		return this.http.get(
			`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeArchiveWorkPermits}?CompanyID=${companyID}&LocationID=${dedicatedModeLocationUse?.locationID}&ProjectID=${dedicatedModeLocationUse?.projectID}&InventoryItemID=${dedicatedModeLocationUse?.inventoryItemID}`
		);
	}

	/**
	 *  This API will return all available work permits for dedicated mode
	 * @param companyID we will get this from GetDeviceEntityDetails API.
	 * @param folderId we will get this from getDedicatedModeAvailableWorkPermits  API.
	 */
	getDedicatedModeAvailableWorkPermits(companyID, folderId = 0) {
		const dedicatedModeLocationUse: DeviceEntityDetail = this.sharedDataService.dedicatedModeLocationUse;
		const queryParam = {
			CompanyID: companyID,
			LocationID: dedicatedModeLocationUse?.locationID,
			ProjectID: dedicatedModeLocationUse?.projectID,
			InventoryItemID: dedicatedModeLocationUse?.inventoryItemID,
			FormFolderID: folderId,
		};
		const queryString = UtilService.convertToQuerystring(queryParam);
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDedicatedModeAvailableWorkPermits}?${queryString}`);
	}
}
