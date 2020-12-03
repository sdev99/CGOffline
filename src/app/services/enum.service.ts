import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnumService {

    static ActivityType = {
        CUSTOM_ACTIVITY: 'Custom Activity',
        DOCUMENT_SIGNOFF_ACTIVITY: 'Document Sign-Off',
        FORM_SIGNOFF_ACTIVITY: 'Form Sign-Off',
    };

    static FormTypes = {
        CUSTOM: 'Custom',
        RISK_ASSESSMENT: 'Risk Assessment',
        WORK_PERMIT: 'Work Permits',
        HAV: 'HAV Exposure Calculator',
        ACCIDENT_REPORT: 'Accident Report'
    };

    static SignOffType = {
        HAV: 'hav-form',
        ACCIDENT_REPORT: 'accident-report',
        CUSTOM_FORM: 'custom-form',
        RISK_ASSESSMENT: 'risk-assessment',
        INDUCTION: 'induction',
        WORK_PERMIT: 'work_permit',
        DOCUMENT_ACTIVITY: 'document_activity',
        DOCUMENT_DM: 'document_dedicated_mode',
        FORMS_DM: 'forms_dedicated_mode',
    };

    static CheckInType = {
        QrCode: 'qr_code',
        MY_NAME: 'my_name',
        AS_GUEST: 'as_guest',
    };

    static ViewFormForType = {
        Induction: 'induction',
        Activity: 'activity',
    };

    static ConfirmForCheckType = {
        CheckIn: 'checkin',
        CheckOut: 'checkout',
    };

    static InductionContentTypes = {
        IMAGE_FILE: 'ImageFile',
        RICH_TEXT: 'RichText',
        VIDEO_FILE: 'VideoFile',
        FORM: 'Form',
        VISITOR_AGREEMENT: 'VisitorAgreement',
    };


    static ObserverKeys = {
        BACK_BUTTON_PRESSED: 'BACK_BUTTON_PRESSED',
        NEW_CHECKED_IN: 'NEW_CHECKED_IN',
        APP_RESTORED_RESULT: 'APP_RESTORED_RESULT',
        ACTIVITY_COMPLETED: 'ACTIVITY_COMPLETED',
    };

    static LocalStorageKeys = {
        IS_LOGGEDIN: 'isLoggedIn',
        USER_DATA: 'user_data',
        USER_PROFILE: 'user_profile',
        API_ACCESS_KEY: 'api_access_key',
        API_TOKEN: 'api_token',
        IS_DEDICATED_MODE: 'dedicated_mode',
        DEDICATED_MODE_DEVICE_DETAIL: 'dedicated_mode_device_detail',
        DEDICATED_MODE_LOCATION_USE: 'dedicated_mode_location_use',
        SYNC_DATE_TIME: 'sync_date_time',
        CHECKED_IN_PLACES: 'checked_in_places',
        CURRENT_SELECTED_CHECKIN_PLACE: 'current_selected_checkin_place',
        GLOBAL_DIRECTORIES: 'global_directories'
    };

    static ApiMethods = {
        GetAccessKey: 'GetAccessKey', // GET
        GetToken: 'GetToken', // GET
        GetTermsOfServices: 'GetTermsOfServices', // GET
        GetGlobalDirectories: 'GetGlobalDirectories', // GET
        GetTimeZoneList: 'GetTimeZoneList', // GET
        GetCompanyLanguageList: 'GetCompanyLanguageList', // GET
        UpdatePushNotification: 'UpdatePushNotification', // PUT
        UserSignIn: 'UserSignIn', // POST
        ForgotPassword: 'ForgotPassword', // POST
        ResetPassword: 'ResetPassword', // POST
        AccountSetup: 'AccountSetup', // POST
        GetUserProfileById: 'GetUserProfileById',  // GET
        UpdateUserProfile: 'UpdateUserProfile', // PUT
        ChangePassword: 'ChangePassword', // POST
        UserDeviceDelete: 'UserDeviceDelete', // DELETE
        GetLocationItemList: 'GetLocationItemList',  // DELETE
        GetDeviceDetails: 'GetDeviceDetails', // GET
        GetUserCurrentCheckInDetails: 'GetUserCurrentCheckInDetails', // GET
        GetEntityByQRCode: 'GetEntityByQRCode', // GET
        GetCheckInDetails: 'GetCheckInDetails', // GET
        InsertCheckInDetails: 'InsertCheckInDetails', // POST
        GetCheckInDetails_Guest: 'GetCheckInDetails_Guest', // GET
        InsertCheckInDetails_Guest: 'InsertCheckInDetails_Guest', // POST
        InsertCheckOutDetails: 'InsertCheckOutDetails', // POST
        CheckInPhotoUpload: 'CheckInPhotoUpload', // POST
        InductionPhotoUpload: 'InductionPhotoUpload', // POST
        InductionSignatureUpload: 'InductionSignatureUpload', // POST
        GetUserActivityList: 'GetUserActivityList', // GET
        GetUserActivityDetail: 'GetUserActivityDetail', // GET
        ActivityCompleted: 'ActivityCompleted', // POST
        GetActivitySignOffFormDetail: 'GetActivitySignOffFormDetail', // GET
        GetActivitySignOffDocumentDetail: 'GetActivitySignOffDocumentDetail', // GET
        GetPersonalModeAvailableDocuments: 'GetPersonalModeAvailableDocuments', // GET
        GetPersonalModeAvailableWorkPermits: 'GetPersonalModeAvailableWorkPermits', // GET
        GetPersonalModeAvailableForms: 'GetPersonalModeAvailableForms', // GET
        InsertPersonalModeSignOffDetails: 'InsertPersonalModeSignOffDetails', // POST
        MySignedDocuments: 'MySignedDocuments', // GET
        DownloadDocument: 'DownloadDocument', // GET
        GetDeviceEntityDetails: 'GetDeviceEntityDetails', // GET
        ActivateDevice: 'ActivateDevice', // POST
        SynchDevice: 'SynchDevice', // POST
        GetDedicatedModeAssignedItemDetail: 'GetDedicatedModeAssignedItemDetail', // GET
        GetUserByQRCode: 'GetUserByQRCode', // GET
        GetGuestUserDetailByPhone: 'GetGuestUserDetailByPhone', // GET
        ChangeAllQRCode: 'ChangeAllQRCode', // GET
    };

    static ApiResponseCode = {
        RequestSuccessful: 200,
        RequestDenied: 401,
        InvalidData: 412,
        UnalbeToProcess: 400,
        NoDataFound: 204,
        UrlNotFound: 501,
        InvalidToken: 419,
        GeneralError: 500
    };

    constructor() {
    }
}
