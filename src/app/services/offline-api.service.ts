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
import { Zip } from "@ionic-native/zip/ngx";
import { Platform } from "@ionic/angular";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OfflineApiService {
  constructor(
    private httpClient: HttpClient,
    private platform: Platform,
    private http: HTTP,
    private zip: Zip,
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

  getDeviceOfflineFile(files, progressCallBack = null) {
    return new Promise((resolve, reject) => {
      const unZippedFiles = [];

      const onFileDownloadError = (error) => {
        console.log("File Download Error ", error);

        if (typeof error === "object" && error?.message) {
          reject(error?.message);
        } else if (typeof error === "string") {
          reject(error);
        } else {
          reject("File download error");
        }
      };

      const accessID = this.sharedDataService.deviceUID;
      const token = localStorage.getItem(
        EnumService.LocalStorageKeys.API_TOKEN
      );
      let headers = {};
      if (accessID && token) {
        headers = { accessID, token };
      }

      const unZipFile = (localFilePath, fileIndex) => {
        this.zip
          .unzip(
            localFilePath,
            this.filehandlerService.offlineFilesDirectory(),
            (progress) => {
              if (progress.total > 0) {
                const percent = Math.round(
                  (progress.loaded / progress.total) * 100
                );

                const totalFiles = files.length * 2;
                const eachFilePercent = 100 / totalFiles;

                const finalPercent =
                  eachFilePercent * (fileIndex * 2 + 1) + percent / totalFiles;

                if (finalPercent > 0) {
                  progressCallBack && progressCallBack(finalPercent, "unzip");
                }

                console.log("Unzipping, " + finalPercent + "%");
              }
            }
          )
          .then((result) => {
            // UnZipping completed
            if (result === 0) {
              // For json file only
              const fileDetail = files[fileIndex];
              if (fileDetail.name !== "All_Files") {
                unZippedFiles.push(localFilePath.replace(".zip", ".json"));
              } else {
                const zipFileName = fileDetail.zipFileName;

                localStorage.setItem(
                  EnumService.LocalStorageKeys.OFFLINE_FILES_FOLDER_NAME,
                  zipFileName.replace(".zip", "")
                );
              }
              // Delete zip file
              this.filehandlerService
                .removeFile(localFilePath)
                .then(() => {
                  //Download Next zip file
                  if (++fileIndex < files.length) {
                    downloadFileFromServer(fileIndex);
                  } else {
                    // All files downloaded complete
                    resolve(unZippedFiles);
                  }
                })
                .catch((error) => {
                  reject(
                    new Error(
                      "Unable to remove downloaded zip file:: " + error.message
                    )
                  );
                });
            }
            // UnZipping Failed
            if (result === -1) {
              console.log("UnZipping FAILED");
              reject(new Error("Unable to unzip file " + fileIndex));
            }
          });
      };

      const downloadFileFromServer = (fileIndex) => {
        if (fileIndex < files.length) {
          const fileDetail = files[fileIndex];
          const jsonFileName = fileDetail.jsonFileName;
          const zipFileName = fileDetail.zipFileName;

          const fileName = UtilService.isLocalHost()
            ? jsonFileName
            : zipFileName;

          if (fileName) {
            let serverFileUrl = `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.GetDeviceOfflineFile}?fileName=${fileName}`;

            const deviceFilePath =
              this.filehandlerService.offlineFilesDirectory() + fileName;

            console.log("Device_file_path ", deviceFilePath);
            if (UtilService.isLocalHost()) {
              resolve([serverFileUrl]);
            } else {
              const onFileDownloadCompleted = (response) => {
                console.log("File Download Completed ", response);

                // Remove files from server
                this.deleteDownloadedFileFromServer(fileName).subscribe(
                  (res) => {}
                );
                this.deleteDownloadedFileFromServer(zipFileName).subscribe(
                  (res) => {}
                );

                unZipFile(deviceFilePath, fileIndex);
              };

              const calculateProgress = (progress) => {
                if (progress.total > 0) {
                  const percent = Math.round(
                    (progress.loaded / progress.total) * 100
                  );

                  const totalFiles = files.length * 2;
                  const eachFilePercent = 100 / totalFiles;

                  const finalPercent =
                    eachFilePercent * fileIndex * 2 + percent / totalFiles;
                  if (finalPercent > 0) {
                    progressCallBack && progressCallBack(finalPercent);
                  }
                  console.log("Downloading  " + finalPercent + "%");
                }
              };

              if (this.platform.is("android")) {
                // Loading with timer becuase
                let totalLoad = 100;
                let loaded = 1;
                const intervalRef = setInterval(() => {
                  loaded++;
                  if (loaded >= 100) {
                    clearInterval(intervalRef);
                    loaded = 100;
                  }
                  calculateProgress({ total: totalLoad, loaded });
                }, 1000);

                this.http
                  .downloadFile(serverFileUrl, {}, headers, deviceFilePath)
                  .then(async (response) => {
                    calculateProgress({ total: totalLoad, loaded: 100 });
                    clearInterval(intervalRef);

                    onFileDownloadCompleted(response);
                  })
                  .catch((error) => {
                    calculateProgress({ total: totalLoad, loaded: 100 });
                    clearInterval(intervalRef);
                    onFileDownloadError(error);
                  });
              } else {
                const fileTransfer = this.fileTransfer.create();
                fileTransfer
                  .download(serverFileUrl, deviceFilePath, false, {
                    headers: headers,
                  })
                  .then((response) => {
                    onFileDownloadCompleted(response);
                  })
                  .catch((error) => {
                    onFileDownloadError(error);
                  });

                fileTransfer.onProgress((progress) => {
                  calculateProgress(progress);
                });
              }
            }
          } else {
            onFileDownloadError(new Error("File not found on server"));
          }
        }
      };

      if (files && files.length > 0) {
        downloadFileFromServer(0);
      } else {
        onFileDownloadError(new Error("No files for download"));
      }
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
          .then((response) => {
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
          const writeDirectory =
            this.filehandlerService.offlineFilesDirectory();
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

  synchDevice = (deviceId) => {
    return this.httpClient.post(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.SynchDevice}?id=${deviceId}`,
      {}
    );
  };

  uploadMultipleFiles = (formData) => {
    return this.httpClient.post(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.PostOfflineFormAnswerPhotoOrVideo}`,
      formData
    );
  };

  postOfflineZipFile = (fileObj, fileName) => {
    const formData = new FormData();
    formData.append("file", fileObj, fileName);
    formData.append(
      "deviceID",
      this.sharedDataService.dedicatedModeDeviceDetailData.deviceID.toString()
    );
    return this.httpClient.post(
      `${this.sharedDataService.apiBaseUrl}/${EnumService.ApiMethods.PostDeviceOfflineFile}`,
      formData
    );
  };
}
