import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnumService } from './enum.service';
import { SharedDataService } from './shared-data.service';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { Zip } from 'capacitor-zip';
import { Capacitor } from '@capacitor/core';
import { UtilService } from './util.service';

@Injectable({
	providedIn: 'root',
})
export class OfflineApiService {
	zip: Zip;

	constructor(private httpClient: HttpClient, private http: HTTP, private file: File, public sharedDataService: SharedDataService) {
		this.zip = new Zip();
	}

	getDeviceOfflineDetails(deviceId) {
		return this.httpClient.get(`${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineDetails}/${deviceId}`);
	}

	getDeviceOfflineFile(fileName) {
		return new Promise((resolve, reject) => {
			const readJsonFile = (filePath) => {
				this.httpClient.get(filePath, {}).subscribe(
					(res) => {
						resolve(res);
					},
					(error) => {
						reject(error);
					}
				);
			};

			if (UtilService.isLocalHost()) {
				readJsonFile('./assets/202108101317573870376.json');
			} else {
				const fileUrl = `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineFile}?fileName=${fileName}`;
				const localFilePath = this.file.dataDirectory + fileName;

				const accessID = this.sharedDataService.deviceUID;
				const token = localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN);
				let headers = {};
				// Authentication by setting header with token value
				if (accessID && token) {
					headers = { accessID, token };
				}

				return this.http
					.downloadFile(fileUrl, {}, headers, localFilePath)
					.then(async (response) => {
						await this.zip
							.unZip(
								{
									source: localFilePath,
									destination: this.file.dataDirectory,
									overwrite: true, // Optional default true
								},
								(progress) => {
									console.log('Progress', progress);
								}
							)
							.then((zipResponse) => {
								console.log('Zip Completed ');
								const jsonFilePath = zipResponse.value + fileName.replace('zip', 'json');

								readJsonFile(Capacitor.convertFileSrc(jsonFilePath));
							})
							.catch((error) => {
								console.log('Zip error ', error);
							});
					})
					.catch((error) => {
						console.log('File Download Error ', error);
					});
			}
		});
	}
}
