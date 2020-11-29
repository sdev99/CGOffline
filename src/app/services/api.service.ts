import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {EnumService} from './enum.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Response} from '../_models/response';
import {SharedDataService} from './shared-data.service';
import {SignOffDetailsPostData} from '../_models/signOffDetailsPostData';
import {CheckInPostData} from '../_models/checkInPostData';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private http: HttpClient,
        private sharedDataService: SharedDataService,
    ) {
    }

    getTermsOfServices() {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetTermsOfServices}`);
    }

    getTimeZoneList() {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetTimeZoneList}`).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const list = data.Result;
                this.sharedDataService.timeZoneList = list;
                return list;
            }

            return null;
        }));
    }

    getCompanyLanguageList(companyId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetCompanyLanguageList}/${companyId}`).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const list = data.Result;
                this.sharedDataService.companyLanguageList = list;
                return list;
            }

            return null;
        }));
    }

    getEntityByQRCode(qrCode) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetEntityByQRCode}?code=${qrCode}`);
    }

    getLocationItemList(companyId) {
        return this.http.delete(`${environment.apiUrl}/${EnumService.ApiMethods.GetLocationItemList}/${companyId}`).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const list = data.Result;
                this.sharedDataService.locationItemList = list;
                return list;
            }
            return null;
        }));
    }

    getGlobalDirectories(companyFolderName) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetGlobalDirectories}?companyFolderName=${companyFolderName}`).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                return data.Result;
            }
            return null;
        }));
    }

    /**
     * This API will use for uploading a user photo at the time of check in
     * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "UserPhoto"
     * @param file image to be upload
     * Note: Please crop image before uploading as per design
     */
    checkInPhotoUpload(file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.CheckInPhotoUpload}`, formData);
    }

    /**
     * This API will use for uploading a user photo at the time of Induction signoff.
     * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "UserSignaturePhoto"
     * @param file image to be upload
     * Note: Please crop image before uploading as per design
     */
    inductionPhotoUpload(file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.InductionPhotoUpload}`, formData);
    }

    /**
     * This API will use for uploading a user signature at the time of Induction signoff.
     * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "DigitalInkSignature"
     * @param file image to be upload
     * Note: Please crop image before uploading as per design
     */
    inductionSignatureUpload(file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.InductionSignatureUpload}`, formData);
    }

    /**
     * This API will return the activity list by current logged in user.
     * @param userId Request Parameter {id} : just pass current logged in user id.
     * Note: FormattedDescription & FormattedInstructions fields contains the line break character "<br/>". Please replace it with line break character which is used in mobile app.
     */
    getActivityList(userId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetUserActivityList}/${userId}`);
    }

    /**
     *  This API will return activity details by using activityIndividualID.
     * @param activityId We will get activityIndividualID from GetUserActivityList API.
     */
    getActivityDetail(activityId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetUserActivityDetail}/${activityId}`);
    }

    /**
     * This API will update the activity status to complete. This API will use for Custom activity only
     * @param userId current logged in user
     * @param activityId we will get this from GetUserActivityList API
     */
    activityCompleted(userId, activityId) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.ActivityCompleted}?id=${userId}&activityIndividualID=${activityId}`, {});
    }

    /**
     * This API will return activity sign off form details
     * @param formId formID, we will get this from GetUserActivityList API
     * Note: If activity type is form sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for form signoff.
     */
    getActivitySignOffFormDetail(formId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetActivitySignOffFormDetail}/${formId}`);
    }

    /**
     * This API will return activity sign off document details
     * @param documentId documentID, we will get this from GetUserActivityList API
     * Note: If activity type is document sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for document signoff.
     */
    getActivitySignOffDocumentDetail(documentId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetActivitySignOffDocumentDetail}/${documentId}`);
    }

    /**
     * This API will use for downloading a document
     * @param filename we will get filename from related APIs
     * @param companyFolderName we will get company folder name at the time of login
     */
    downloadDocument(filename, companyFolderName) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.DownloadDocument}?fileName=${filename}&companyFolderName=${companyFolderName}`);
    }

    /**
     * This API will return all available form for current checked in locations
     * @param userId current logged in user id
     * @param companyID we will get company id at the time of login
     */
    getPersonalModeAvailableForms(userId, companyID) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetPersonalModeAvailableForms}/${userId}?CompanyID=${companyID}`);
    }

    /**
     * This API will return you the list of current locations which was checked in by current logged in user.
     * @param userId current logged in user id
     */
    getUserCurrentCheckingDetails(userId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetUserCurrentCheckInDetails}/${userId}`);
    }

    /**
     * This API will return all the details that will required for check in settings and induction steps.
     * @param userId current logged in user id
     * @param entityId You will get this ID from GetLocationItemList API
     */
    getCheckInDetails(userId, entityId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetCheckInDetails}/${userId}?EntityID=${entityId}`);
    }

    /**
     * This API will return signed documents of current logged in user.
     * @param userId for current logged in user.
     */
    getMySignedDocuments(userId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.MySignedDocuments}/${userId}`);
    }

    /**
     *  This API will use for Activity & Document/Form sign off
     * @param postBody SignOffDetailsPostData
     */
    insertPersonalModeSignOffDetails(postBody: SignOffDetailsPostData) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.InsertPersonalModeSignOffDetails}`, postBody);
    }

    /**
     *  This API will use for inserting the user's check in details
     * @param postBody SignOffDetailsPostData
     */
    insertCheckInDetails(postBody: CheckInPostData) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.InsertCheckInDetails}`, postBody);
    }
}
