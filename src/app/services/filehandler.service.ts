import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { UtilService } from './util.service';
import { HTTP } from '@ionic-native/http/ngx';
import { StaticDataService } from './static-data.service';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class FilehandlerService {
	constructor(private httpClient: HttpClient, private fileOpener: FileOpener, private platform: Platform, private file: File, public utilService: UtilService, private http: HTTP) {}

	readJsonFile(filePath) {
		return this.httpClient.get(filePath, {});
	}

	saveBinaryFileOnDevice(base64File: string, fileName: string, callBack) {
		const extension = fileName.split('.').pop();
		const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];

		const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
		try {
			this.file
				.writeFile(writeDirectory, fileName, UtilService.convertBase64ToBlob(base64File, 'data:' + mimeType + ';base64'), { replace: true })
				.then(() => {
					callBack(writeDirectory + fileName);
				})
				.catch(() => {
					console.error('Error writing pdf file');
				});
		} catch (error) {}
	}

	removeSavedFile(fileName) {
		try {
			const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
			this.file.removeFile(writeDirectory, fileName).then((res) => {
				console.log('File remove successfully');
			});
		} catch (error) {}
	}

	saveAndOpenFile(base64File: string, fileName: string) {
		this.saveBinaryFileOnDevice(base64File, fileName, (url) => {
			this.openFile(url);
		});
	}

	async openFile(fileUrl = '', openInDefaultApp = false) {
		this.utilService.presentLoadingWithOptions('File downloading...');

		const fileName = fileUrl.replace(/^.*[\\\/]/, '');
		const extension = fileName.split('.').pop();

		this.http
			.downloadFile(fileUrl, {}, {}, this.file.dataDirectory + fileName)
			.then((response) => {
				this.utilService.hideLoading();

				const url = response.nativeURL;
				const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];
				if (extension.toLowerCase() === 'pdf' || openInDefaultApp) {
					this.fileOpener
						.open(url, mimeType)
						.then(() => console.log('File is opened'))
						.catch((e) => console.log('Error opening file', e));
				} else if (this.platform.is('ios')) {
					this.fileOpener
						.open(url, mimeType)
						.then(() => console.log('File is opened'))
						.catch((e) => console.log('Error opening file', e));
				} else {
					this.fileOpener
						.showOpenWithDialog(url, mimeType)
						.then(() => console.log('File is opened'))
						.catch((e) => console.log('Error opening file', e));
				}
			})
			.catch((error) => {
				this.utilService.hideLoading();
				console.log('Error download file', error);
			});
	}
}
