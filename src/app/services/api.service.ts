import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {EnumService} from './enum.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Response} from '../_models/response';
import {SharedDataService} from './shared-data.service';

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

    getGlobalDirectories(companyFolderName) {
        return this.http.get(`${environment.apiUrl}/${EnumService.ApiMethods.GetGlobalDirectories}?companyFolderName=${companyFolderName}`).pipe(map((data: Response) => {
            if (data.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                const globalDirectories = data.Result;
                this.sharedDataService.globalDirectories = globalDirectories;
                return globalDirectories;
            }

            return null;
        }));
    }
}
