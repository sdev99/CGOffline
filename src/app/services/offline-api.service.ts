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

	getDeviceOfflineFile(files) {
		return new Promise((resolve, reject) => {
			const downloadedJsonFilesPath = [];

			const onFileDownloaded = (jsonFilePath) => {
				downloadedJsonFilesPath.push(Capacitor.convertFileSrc(jsonFilePath));
				if (downloadedJsonFilesPath.length === files.length) {
					resolve(downloadedJsonFilesPath);
				}
			};

			if (UtilService.isLocalHost()) {
				downloadedJsonFilesPath.push('./assets/202108101317573870376.json');
				resolve(downloadedJsonFilesPath);
			} else {
				const accessID = this.sharedDataService.deviceUID;
				const token = localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN);
				let headers = {};
				if (accessID && token) {
					headers = { accessID, token };
				}

				files.map((obj: any) => {
					const fileName = obj.jsonFileName;
					const fileUrl = `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineFile}?fileName=${fileName}`;
					const localFilePath = this.file.dataDirectory + fileName;

					this.http
						.downloadFile(fileUrl, {}, headers, localFilePath)
						.then(async (response) => {
							console.log('File Download Completed ', response);
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
									console.log('UnZip Completed ');
									const jsonFilePath = zipResponse.value + fileName.replace('zip', 'json');
									onFileDownloaded(jsonFilePath);
								})
								.catch((error) => {
									console.log('UnZip error ', error);
								});
						})
						.catch((error) => {
							console.log('File Download Error ', error);
						});
				});
			}
		});
	}
}
