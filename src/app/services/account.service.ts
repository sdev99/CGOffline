import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {User} from '../_models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {EnumService} from './enum.service';
import {environment} from '../../environments/environment';
import {SharedDataService} from './shared-data.service';
import {Response} from '../_models/response';
import {NavController, Platform} from '@ionic/angular';
import {Profile} from '../_models/profile';

declare global {
    interface Array<T> {
        clone(): Array<T>;
    }
}

Array.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this));
};

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        public sharedDataService: SharedDataService,
        private http: HttpClient,
        private navController: NavController,
        private platform: Platform,
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(EnumService.LocalStorageKeys.USER_DATA)));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(email = '', password = '', rememberMe = true) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.UserSignIn}`, {
            email,
            password,
            rememberMe,
            deviceID: this.sharedDataService.pushToken,
            platformName: this.platform.is('ios') ? 'IOS' : 'Android',
        }).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const userInfo = data.Result;
                localStorage.setItem(EnumService.LocalStorageKeys.USER_DATA, JSON.stringify(userInfo));
                this.userSubject.next(userInfo);
                return data;
            }
            return throwError(new Error(data?.ResponseException?.ExceptionMessage));
        }));
    }


    getUserProfile(userId) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetUserProfileById}/${userId}`).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const userProfile: Profile = data.Result;
                localStorage.setItem(EnumService.LocalStorageKeys.USER_PROFILE, JSON.stringify(userProfile));
                this.sharedDataService.userProfile = userProfile;
                return userProfile;
            }

            return null;
        }));
    }

    getDeviceDetails(deviceUID) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetDeviceDetails}/${deviceUID}`).pipe(map((data: Response) => {
            return data;
        }));
    }

    activateDevice() {
        const deviceDetailId = this.sharedDataService.dedicatedModeDeviceDetailData.deviceID;
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.ActivateDevice}?id=${deviceDetailId}`, {});
    }

    getAccessKey() {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetAccessKey}`).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const accessKey = data.Result;
                localStorage.setItem(EnumService.LocalStorageKeys.API_ACCESS_KEY, accessKey);
                return {accessKey};
            }

            return {
                accessKey: null
            };
        }));
    }

    getToken() {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetToken}`, {
            headers: new HttpHeaders({
                accessID: this.sharedDataService.deviceUID,
                accessKey: localStorage.getItem(EnumService.LocalStorageKeys.API_ACCESS_KEY),
            })
        }).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const token = data.Result;
                localStorage.setItem(EnumService.LocalStorageKeys.API_TOKEN, token);
                return {token};
            }

            return {
                token: null
            };
        }));
    }

    newAccountSetup(body) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.AccountSetup}`, {
            deviceID: this.sharedDataService.pushToken,
            platformName: this.platform.is('ios') ? 'IOS' : 'Android',
            ...body
        }).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const userInfo = data.Result;
                localStorage.setItem(EnumService.LocalStorageKeys.USER_DATA, JSON.stringify(userInfo));
                this.userSubject.next(userInfo);
                return data;
            }
            return throwError(new Error(data?.ResponseException?.ExceptionMessage));
        }));
    }

    forgotpassword(email) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.ForgotPassword}`, {email}).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const message = data.Message;
                return message;
            }
            return null;
        }));
    }

    updatePushNotification(body) {
        return this.http.put(`${environment.apiUrl}/${EnumService.ApiMethods.UpdatePushNotification}`, body).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                return true;
            }
            return false;
        }));
    }

    resetpassword(body) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.ResetPassword}`, {
            deviceID: this.sharedDataService.pushToken,
            platformName: this.platform.is('ios') ? 'IOS' : 'Android',
            ...body
        }).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const message = data.Message;
                return message;
            }
            return null;
        }));
    }

    changePassword(body) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.ChangePassword}`, body).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const message = data.Message;
                return message;
            }
            return data.Message;
        }));
    }

    updateProfile(body) {
        return this.http.put(`${environment.apiUrl}/${EnumService.ApiMethods.UpdateUserProfile}`, body).pipe(map((data: Response) => {
            return data;
        }));
    }


    logout(userId) {
        const option: any = {
            body: {
                deviceID: this.sharedDataService.deviceUID
            }
        };
        return this.http.delete(`${environment.apiUrl}/${EnumService.ApiMethods.UserDeviceDelete}/${userId}`, option).pipe(map((data: any) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                // remove user from local storage and set current user to null
                localStorage.removeItem(EnumService.LocalStorageKeys.USER_DATA);
                localStorage.removeItem(EnumService.LocalStorageKeys.USER_PROFILE);
                this.userSubject.next(null);
                this.navController.navigateRoot('/login');
            }
            return data;
        }));
    }

}
