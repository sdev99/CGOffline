import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError, mergeMap, share } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EnumService } from '../services/enum.service';
import { SharedDataService } from '../services/shared-data.service';
import { AccountService } from '../services/account.service';
import { Response } from '../_models/response';

// WDEyREJVTTFqaEljUlc2U05HMlF1WWxNc3dXS2pVa3RKQ0F5c2drWnpSRU9GZWplTU02UHlKcU92a1FqRFF3dVBiNDhYUEFjdVoxT2grUmVRSjE5dkdzR1ZYWkFHWFdmNHU5T1pzbnk3ald0ckVuTkw1OHFvbEsrMXFvMURCb3E=
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
	constructor(public sharedDataService: SharedDataService, private accountService: AccountService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const accessID = this.sharedDataService.deviceUID;
		const token = localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN);

		// Authentication by setting header with token value
		if (accessID && token && !request.headers.has('accessID') && !request.headers.has('token')) {
			request = request.clone({
				setHeaders: {
					accessID,
					token,
				},
			});
		}

		// if (!request.headers.has('Content-Type')) {
		//     request = request.clone({
		//         setHeaders: {
		//             'content-type': 'application/json'
		//         }
		//     });
		// }

		request = request.clone({
			headers: request.headers.set('Accept', 'application/json'),
		});

		if (!this.sharedDataService.dedicatedMode) {
			if (this.accountService.userValue?.mobileAppLanguageID || this.sharedDataService.currentLanguageId || this.sharedDataService.userProfile?.mobileAppLanguageID) {
				const langId = this.sharedDataService.userProfile?.mobileAppLanguageID || this.sharedDataService.currentLanguageId || this.accountService.userValue?.mobileAppLanguageID;
				request = request.clone({
					headers: request.headers.set('languageID', langId.toString()),
				});
			}
			if (this.accountService.userValue?.userId || this.sharedDataService.userId) {
				const userId = this.accountService.userValue?.userId || this.sharedDataService.userId;
				request = request.clone({
					headers: request.headers.set('userID', userId),
				});
			}
		} else {
			if (this.sharedDataService.dedicatedModeUserDetail?.userId) {
				request = request.clone({
					headers: request.headers.set('userID', this.sharedDataService.dedicatedModeUserDetail.userId),
				});
			}
		}

		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					console.log('event--->>>', event);
				}
				return event;
			}),
			catchError((err: HttpErrorResponse) => {
				// if token expired then get new token and resend request again
				const error: Response = err.error;

				if (error) {
					if (error.StatusCode === EnumService.ApiResponseCode.InvalidToken) {
						return from(this.accountService.getToken()).pipe(
							mergeMap((res: any) => {
								request = request.clone({
									setHeaders: {
										accessID,
										token: res.token,
									},
								});
								return this.intercept(request, next);
							})
						);
					}
					let errorMessage = '';
					if (error.ResponseException && error.ResponseException.ValidationErrors && error.ResponseException.ValidationErrors.length > 0) {
						error.ResponseException.ValidationErrors.map((data) => {
							const errorField = this.sharedDataService.companyLangaugeTranslations[data.Field] || data.Field;
							const errorData = this.sharedDataService.companyLangaugeTranslations[data.Message] || data.Message;

							errorMessage = errorMessage + errorField + ' : ' + errorData + '\n';
						});
					}

					return throwError({
						error,
						message: errorMessage || error?.ResponseException?.ExceptionMessage || err.message,
					});
				}
				return throwError({
					error: err,
					message: err.message,
				});
			})
		);
	}
}
