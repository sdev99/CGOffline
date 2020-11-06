import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnumService {

    static SignOffType = {
        HAV: 'hav-form',
        ACCIDENT_REPORT: 'accident-report',
        CUSTOM_FORM: 'custom-form',
        RISK_ASSESSMENT: 'risk-assessment',
        INDUCTION: 'induction',
        DOCUMENT_DM: 'document_dedicated_mode',
        FORMS_DM: 'forms_dedicated_mode',
        WORK_PERMIT: 'work_permit',
    };

    static CheckInType = {
        QrCode: 'qr_code',
        MY_NAME: 'my_name',
        AS_GUEST: 'as_guest',
    };

    static ObserverKeys = {
        BACK_BUTTON_PRESSED: 'BACK_BUTTON_PRESSED',
        NEW_CHECKED_IN: 'NEW_CHECKED_IN',
        APP_RESTORED_RESULT: 'APP_RESTORED_RESULT',
    };

    static LocalStorageKeys = {
        IS_LOGGEDIN: 'isLoggedIn',
        USER_DATA: 'user_data',
        USER_PROFILE: 'user_profile',
        API_ACCESS_KEY: 'api_access_key',
        API_TOKEN: 'api_token',
        IS_DEDICATED_MODE: 'dedicated_mode',
        DEDICATED_MODE_LOCATION_USE: 'dedicated_mode_location_use',
        SYNC_DATE_TIME: 'sync_date_time'
    };

    static ApiMethods = {
        GetAccessKey: 'GetAccessKey',
        GetToken: 'GetToken',
        GetTermsOfServices: 'GetTermsOfServices',
        GetGlobalDirectories: 'GetGlobalDirectories',
        GetTimeZoneList: 'GetTimeZoneList',
        GetCompanyLanguageList: 'GetCompanyLanguageList',
        UpdatePushNotification: 'UpdatePushNotification',
        UserSignIn: 'UserSignIn',
        ForgotPassword: 'ForgotPassword',
        ResetPassword: 'ResetPassword',
        AccountSetup: 'AccountSetup',
        GetUserProfileById: 'GetUserProfileById',
        UpdateUserProfile: 'UpdateUserProfile',
        ChangePassword: 'ChangePassword',
        UserDeviceDelete: 'UserDeviceDelete',
        GetDeviceDetails: 'GetDeviceDetails',
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
