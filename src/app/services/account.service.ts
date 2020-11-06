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
import {Platform} from '@ionic/angular';
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
        private sharedDataService: SharedDataService,
        private http: HttpClient,
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
            return throwError(new Error(data.ResponseException.ExceptionMessage));
        }));
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

    newAccountSetup(data) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.AccountSetup}`, {
            deviceID: this.sharedDataService.pushToken,
            platformName: this.platform.is('ios') ? 'IOS' : 'Android',
            ...data
        });
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

    resetpassword(email) {
        return this.http.post(`${environment.apiUrl}/${EnumService.ApiMethods.ResetPassword}`, {
            deviceID: this.sharedDataService.pushToken,
            platformName: this.platform.is('ios') ? 'IOS' : 'Android',
            email,
        }).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const message = data.Message;
                return message;
            }
            return null;
        }));
    }


    logout() {
        return this.http.delete(`${environment.apiUrl}/${EnumService.ApiMethods.UserDeviceDelete}/${this.sharedDataService.deviceUID}`, {
            params: {
                deviceID: this.sharedDataService.pushToken
            }
        }).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                // remove user from local storage and set current user to null
                localStorage.removeItem(EnumService.LocalStorageKeys.USER_DATA);
                this.userSubject.next(null);
                this.router.navigate(['/login']);
            }
            return data;
        }));
    }

}
