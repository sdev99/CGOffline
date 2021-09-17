import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { UtilService } from "../../services/util.service";
import { ActivatedRoute } from "@angular/router";
import { EnumService } from "../../services/enum.service";
import { OfflineApiService } from "src/app/services/offline-api.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { Response } from "src/app/_models";
import { DeviceOfflineDetailViewModels } from "src/app/_models/offline/DeviceOfflineDetailViewModels";
import { FilehandlerService } from "src/app/services/filehandler.service";
import { Capacitor, Network } from "@capacitor/core";
import * as JSZip from "jszip";

@Component({
  selector: "app-device-sync-dm",
  templateUrl: "./device-sync-dm.page.html",
  styleUrls: ["./device-sync-dm.page.scss"],
})
export class DeviceSyncDmPage implements OnInit {
  UtilService = UtilService;
  synchProgressState = "pending";
  // synchProgressState = 'processing';
  // synchProgressState = 'completed';

  synchronisationErrorMessage;
  progress = 0;
  isSyncButtonDisabled = false;

  constructor(
    public navController: NavController,
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute,
    public utilService: UtilService,
    public offlineApiService: OfflineApiService,
    public offlineManagerService: OfflineManagerService,
    public sharedDataService: SharedDataService,
    public filehandlerService: FilehandlerService
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      if (data && data.startSync) {
        this.onSync();
      }
    });
  }

  ngOnInit() {
    this.checkForNetwork();
    Network.addListener("networkStatusChange", (status) => {
      this.checkForNetwork();
    });
  }

  ngOnDestroy(): void {
    Network.removeAllListeners();
  }

  checkForNetwork = async () => {
    const ntstatus = await Network.getStatus();
    this.isSyncButtonDisabled = !ntstatus.connected;
  };

  async onClose() {
    if (this.synchProgressState === "processing") {
      const alert = await this.alertController.create({
        header: "Quit Synchronisation!",
        message:
          "You are about to quit the device sync. Once quitted the current sync will be cancelled and sync progress will be lost. Are you sure you want to exit?",
        translucent: true,
        keyboardClose: false,
        backdropDismiss: false,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "danger",
            handler: (blah) => {
              console.log("Confirm Cancel: blah");
            },
          },
          {
            text: "Yes",
            handler: () => {
              this.navController.back();
            },
          },
        ],
      });

      await alert.present();
    } else {
      this.navController.back();
    }
  }

  isSpaceAvailableInDevice = (fileSize = 0) => {
    return new Promise((resolve, reject) => {
      // Insert condition for space check in device
      resolve(true);
    });
  };

  postOfflineDataToServerIfAvailable = () => {
    return new Promise((resolve, reject) => {
      this.offlineManagerService
        .prepareJsonFileForPost(
          this.sharedDataService.dedicatedModeDeviceDetailData.deviceID,
          this.offlineApiService
        )
        .then((postJsonData) => {
          if (postJsonData) {
            const fileName = "OfflinePost";
            var jsZipObj = new JSZip();
            debugger;
            jsZipObj.file(fileName + ".json", JSON.stringify(postJsonData));
            jsZipObj.generateAsync({ type: "base64" }).then((base64) => {
              debugger;
              this.utilService
                .dataUriToFile(base64, fileName + ".zip", "application/zip")
                .then((fileObj) => {
                  this.offlineApiService
                    .postOfflineZipFile(fileObj, fileName + ".zip")
                    .subscribe(
                      (res) => {
                        resolve(res);
                      },
                      (error) => {
                        debugger;
                        reject(error);
                      }
                    );
                });
            });
          } else {
            resolve(null);
          }
        });
    });
  };

  onSync() {
    this.progress = 0;
    this.synchProgressState = "processing";

    this.postOfflineDataToServerIfAvailable()
      .then((res) => {
        this.offlineManagerService.emptyAllTables(() => {
          this.progress = 5;
          this.callOfflineApi(() => {
            if (this.progress === 100) {
              this.synchProgressState = "completed";
              localStorage.setItem(
                EnumService.LocalStorageKeys.SYNC_DATE_TIME,
                this.utilService.getCurrentDateTIme()
              );
              localStorage.removeItem(
                EnumService.LocalStorageKeys.OFFLINE_MODE_ENABLE
              );
            } else {
              this.progress = this.progress + 5;
            }
          });
        });
      })
      .catch((error) => {
        this.progress = 0;
        this.synchProgressState = "failed";
        this.synchronisationErrorMessage = error.message;
      });
  }

  onContinue() {
    this.navController.back();
  }

  callOfflineApi = (callBack) => {
    // Need to check device storage
    // Need to check internet
    // Need to check file size
    // Delete all old files
    // Clear storage
    // Check all file download success and all file insert success or not, if not then clear and redownload

    this.offlineApiService
      .getDeviceOfflineDetails(this.sharedDataService.deviceUID)
      .subscribe(
        async (res: Response) => {
          this.progress = 10;
          if (
            res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful
          ) {
            if (res.Result) {
              const files = res.Result;
              let totalSizeWillBeDownloadB = 0;
              files.map((fileDetail) => {
                const zipFileSizeBytes = fileDetail.zipFileSize;
                const jsonFileSizeBytes = fileDetail.jsonFileSize;
                totalSizeWillBeDownloadB =
                  totalSizeWillBeDownloadB + zipFileSizeBytes;
              });

              this.isSpaceAvailableInDevice(totalSizeWillBeDownloadB).then(
                (isAvailable) => {
                  if (isAvailable) {
                    this.offlineApiService
                      .getDeviceOfflineFile(files)
                      .then(async (jsonFiles: any) => {
                        this.offlineManagerService.emptyAllTables(() => {
                          jsonFiles.map((jsonFile, isJsonData) => {
                            if (isJsonData) {
                              this.offlineManagerService.insertOfflineData(
                                jsonFile,
                                (progress) => {
                                  this.progress = progress;
                                  if (this.progress === 100) {
                                    callBack && callBack();
                                  }
                                }
                              );
                            } else {
                              this.filehandlerService
                                .readJsonFile(
                                  Capacitor.convertFileSrc(jsonFile)
                                )
                                .subscribe((offlineData: any) => {
                                  this.offlineManagerService.insertOfflineData(
                                    offlineData,
                                    (progress) => {
                                      this.progress = progress;
                                      if (this.progress === 100) {
                                        callBack && callBack();
                                      }
                                    }
                                  );
                                });
                            }
                          });
                        });
                      })
                      .catch((error) => {
                        this.synchProgressState = "failed";
                        this.synchronisationErrorMessage =
                          error?.message || "File download error";
                      });
                  } else {
                    this.synchProgressState = "failed";
                    this.synchronisationErrorMessage =
                      "No enough space available in your device";
                  }
                }
              );
            }
          }
        },
        (error) => {
          callBack && callBack();
        }
      );
  };
}
