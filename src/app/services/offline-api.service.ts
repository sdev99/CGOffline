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

	getLocationItemList(companyId) {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetLocationItemList}/${companyId}`);
	}

	getRiskAssessmentSeverityOptions() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetRiskAssessmentSeverityOptions}`);
	}

	getRiskAssessmentProbabilityOptions() {
		return this.http.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetRiskAssessmentProbabilityOptions}`);
	}
}
