import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EnumService } from "./enum.service";
import { SharedDataService } from "./shared-data.service";
import { HTTP } from "@ionic-native/http/ngx";
import { File } from "@ionic-native/file/ngx";
import { Capacitor } from "@capacitor/core";
import { UtilService } from "./util.service";

import * as JSZip from "jszip";
import { FilehandlerService } from "./filehandler.service";
import { DeviceOfflineDetailViewModels } from "../_models/offline/DeviceOfflineDetailViewModels";
import { Platform } from "@ionic/angular";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";

@Injectable({
  providedIn: "root",
})
export class OfflineApiService {
  constructor(
    private httpClient: HttpClient,
    private platform: Platform,
    private http: HTTP,
    private file: File,
    private fileTransfer: FileTransfer,
    public sharedDataService: SharedDataService,
    public filehandlerService: FilehandlerService
  ) {}

  getDeviceOfflineDetails(deviceId) {
    return this.httpClient.get(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineDetails}/${deviceId}`
    );
  }

  getSynchStatus(deviceId) {
    return this.httpClient.get(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetSynchStatus}/${deviceId}`
    );
  }

  deleteDownloadedFileFromServer(fileName) {
    return this.httpClient.delete(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.DeviceOfflineFileDelete}?fileName=${fileName}`
    );
  }

  downloadFile(path: string, headers) {
    return this.httpClient.get(`${path}`, { headers: headers });
  }

  getDeviceOfflineFile(files) {
    return new Promise((resolve, reject) => {
      const downloadedJsonFiles = [];

      const onFileDownloaded = (jsonObject) => {
        downloadedJsonFiles.push(jsonObject);
        if (downloadedJsonFiles.length === files.length) {
          resolve(downloadedJsonFiles);
        }
      };

      const onFileDownloadError = (error) => {
        reject(error?.message);
      };

      const accessID = this.sharedDataService.deviceUID;
      const token = localStorage.getItem(
        EnumService.LocalStorageKeys.API_TOKEN
      );
      let headers = {};
      if (accessID && token) {
        headers = { accessID, token };
      }

      files.map((obj: any) => {
        const fileName = obj.jsonFileName;
        const zipFileName = obj.zipFileName;

        // Download JSON file
        if (fileName) {
          let fileUrl = `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineFile}?fileName=${fileName}`;
          const writeDirectory = this.platform.is("ios")
            ? this.file.dataDirectory
            : this.file.dataDirectory;
          const localFilePath = writeDirectory + fileName;

          if (UtilService.isLocalHost()) {
            onFileDownloaded(fileUrl);
          } else {
            this.http
              .downloadFile(fileUrl, {}, headers, localFilePath)
              .then(async (response) => {
                console.log("File Download Completed ", response);
                this.deleteDownloadedFileFromServer(fileName).subscribe(
                  (res) => {}
                );
                this.deleteDownloadedFileFromServer(zipFileName).subscribe(
                  (res) => {}
                );

                onFileDownloaded(localFilePath);
              })
              .catch((error) => {
                console.log("File Download Error ", error);
                debugger;
                onFileDownloadError(error);
              });
          }
        }
      });
    });
  }

  getDeviceOfflineFileN(files) {
    return new Promise((resolve, reject) => {
      const downloadedJsonFileData = [];

      const onFileDownloaded = (jsonObject) => {
        downloadedJsonFileData.push(jsonObject);
        if (downloadedJsonFileData.length === files.length) {
          resolve(downloadedJsonFileData);
        }
      };

      // const isDemoFile = UtilService.isLocalHost();
      const isDemoFile = false;

      if (isDemoFile) {
        this.filehandlerService
          .readJsonFile("./assets/202108101317573870376.json")
          .subscribe((response) => {
            resolve(response);
          });
      } else {
        const accessID = this.sharedDataService.deviceUID;
        const token = localStorage.getItem(
          EnumService.LocalStorageKeys.API_TOKEN
        );
        let headers = {};
        if (accessID && token) {
          headers = { accessID, token };
        }

        const readBlob = (blob) => {
          try {
            var jsZipObj = new JSZip();
            debugger;
            jsZipObj
              .loadAsync(blob)
              .then(function (zip) {
                // you now have every files contained in the loaded zip
                debugger;
                if (zip.length > 0) {
                  Object.keys(zip.files).map((zippedFileName) => {
                    zip
                      .file(zippedFileName)
                      .async("string")
                      .then((response) => {
                        debugger;
                        onFileDownloaded(response);
                      })
                      .catch((error) => {
                        debugger;
                      }); // a promise of "Hello World\n"
                  });
                }
              })
              .catch((error) => {
                debugger;
              });
          } catch (error) {
            debugger;
          }
        };

        const sampleZipFile =
          "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip";
        fetch(sampleZipFile)
          .then((res) => res.blob())
          .then((res) => {
            debugger;
            readBlob(res);
          })
          .catch((error) => {
            debugger;
          });

        return;

        files.map((obj: any) => {
          const fileName = obj.jsonFileName;
          let fileUrl = `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineFile}?fileName=${fileName}`;
          const writeDirectory = this.platform.is("ios")
            ? this.file.dataDirectory
            : this.file.dataDirectory;
          const localFilePath = writeDirectory + fileName;

          const fileTransfer = this.fileTransfer.create();
          fileTransfer
            .download(fileUrl, localFilePath, true, {
              headers: headers,
              ...headers,
            })
            .then(
              (entry) => {
                //here logging our success downloaded file path in mobile.
                console.log("download completed: " + entry.toURL());
                readBlob(entry.toURL());
              },
              (error) => {
                //here logging our error its easier to find out what type of error occured.
                console.log("download failed: " + error);
              }
            );

          // this.http
          // 	.downloadFile(fileUrl, {}, headers, localFilePath)
          // 	.then(async (response) => {
          // 		console.log('File Download Completed ', response);
          // 		debugger;
          // 		debugger;
          // 		let { name, nativeURL } = response;
          // 		let path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
          // 		const fileName = name;
          // 		// if you already know the file extension, just assign it to           // variable below
          // 		const fileExtension = fileName.match(/\.[A-z0-9]+$/i)[0].slice(1);
          // 		// we are provided the name, so now read the file into a buffer
          // 		const buffer = await this.file.readAsArrayBuffer(path, name);
          // 		debugger;
          // 		if (buffer) {
          // 			let medBlob = new Blob([buffer], {
          // 				type: `application/${fileExtension}`,
          // 			});
          // 			readBlob(medBlob);
          // 		}
          // 	})
          // 	.catch((error) => {
          // 		debugger;
          // 		console.log('File Download Error ', error);
          // 	});
        });
      }
    });
  }

  uploadMultipleFiles = (formData) => {
    return this.httpClient.post(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.PostOfflineFormAnswerPhotoOrVideo}`,
      formData
    );
  };

  postOfflineZipFile = (fileObj, fileName) => {
    const formData = new FormData();
    formData.append("file", fileObj, fileName);
    return this.httpClient.post(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.PostDeviceOfflineFile}`,
      formData
    );
  };
}
