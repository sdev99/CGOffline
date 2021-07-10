import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnumService } from './enum.service';
import { SharedDataService } from './shared-data.service';

@Injectable({
	providedIn: 'root',
})
export class OfflineApiService {
	constructor(private http: HttpClient, public sharedDataService: SharedDataService) {}

	getDeviceOfflineDetails(deviceId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineDetails}/${deviceId}`);
	}
}
