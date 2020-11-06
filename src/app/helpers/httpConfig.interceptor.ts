import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import {from, Observable, throwError} from 'rxjs';
import {map, catchError, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {EnumService} from '../services/enum.service';
import {SharedDataService} from '../services/shared-data.service';
import {AccountService} from '../services/account.service';
import {Response} from '../_models/response';

// WDEyREJVTTFqaEljUlc2U05HMlF1WWxNc3dXS2pVa3RKQ0F5c2drWnpSRU9GZWplTU02UHlKcU92a1FqRFF3dVBiNDhYUEFjdVoxT2grUmVRSjE5dkdzR1ZYWkFHWFdmNHU5T1pzbnk3ald0ckVuTkw1OHFvbEsrMXFvMURCb3E=
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        private sharedDataService: SharedDataService,
        private accountService: AccountService,
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessID = this.sharedDataService.deviceUID;
        const token = localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN);

        // Authentication by setting header with token value
        if (accessID && token && !request.headers.has('accessID') && !request.headers.has('token')) {
            request = request.clone({
                setHeaders: {
                    accessID,
                    token
                }
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });


        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                // if token expired then get new token and resend request again
                if (err.error.StatusCode === EnumService.ApiResponseCode.InvalidToken) {
                    return from(this.accountService.getToken()).pipe(mergeMap(res => {
                        request = request.clone({
                            setHeaders: {
                                accessID,
                                token: res.token
                            }
                        });
                        return this.intercept(request, next);
                    }));
                }
                const error: Response = err.error;
                if (error.StatusCode === EnumService.ApiResponseCode.InvalidData) {
                    let errorMessage = '';
                    error.ResponseException.ValidationErrors.map((data) => {
                        errorMessage = errorMessage + data.Field + ' : ' + data.Message + '\n';
                    });
                    return throwError({
                        error,
                        message: errorMessage
                    });
                }
                return throwError({
                    error,
                    message: error.ResponseException.ExceptionMessage
                });
            }));
    }
}
