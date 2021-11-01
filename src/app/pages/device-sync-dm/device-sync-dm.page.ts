import { Component, NgZone, OnInit } from "@angular/core";
import { AlertController, NavController, Platform } from "@ionic/angular";
import { UtilService } from "../../services/util.service";
import { ActivatedRoute } from "@angular/router";
import { EnumService } from "../../services/enum.service";
import { OfflineApiService } from "src/app/services/offline-api.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { Response } from "src/app/_models";
import { FilehandlerService } from "src/app/services/filehandler.service";
import { Capacitor, Network, PluginListenerHandle } from "@capacitor/core";
import * as JSZip from "jszip";
import * as moment from "moment";
import { ObservablesService } from "src/app/services/observables.service";
import { Insomnia } from "@ionic-native/insomnia/ngx";
import { StaticDataService } from "src/app/services/static-data.service";

const { Device } = Capacitor.Plugins;

@Component({
  selector: "app-device-sync-dm",
  templateUrl: "./device-sync-dm.page.html",
  styleUrls: ["./device-sync-dm.page.scss"],
})
export class DeviceSyncDmPage implements OnInit {
  networkChangeListner: PluginListenerHandle;

  UtilService = UtilService;
  synchProgressState: string = "pending"; // EnumService.SyncProcessState

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
    public observablesService: ObservablesService,
    public filehandlerService: FilehandlerService,
    public ngZone: NgZone,
    public platform: Platform,
    private insomnia: Insomnia
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      if (data && data.startSync) {
        this.onSync();
      }
    });
  }

  ngOnInit() {
    this.checkForNetwork();
    this.networkChangeListner = Network.addListener(
      "networkStatusChange",
      (status) => {
        this.checkForNetwork();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.networkChangeListner) {
      this.networkChangeListner.remove();
    }
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

  isSpaceAvailableInDevice = (fileSizeInBytes = 0) => {
    return new Promise(async (resolve) => {
      const info = await Device.getInfo();
      const availableSpaceInBytes = info.diskFree;
      const bytesInMb = 1048576;
      console.log("Available Free Space ", availableSpaceInBytes / bytesInMb);
      if (UtilService.isLocalHost()) {
        resolve(true);
      } else {
        if (availableSpaceInBytes > fileSizeInBytes) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    });
  };

  postOfflineDataToServerIfAvailable = () => {
    this.updateSyncState(
      EnumService.SyncProcessState.OFFLINE_DATA_PREPARE_START
    );

    return new Promise((resolve, reject) => {
      this.offlineManagerService
        .prepareJsonFileForPost(
          this.sharedDataService.dedicatedModeDeviceDetailData.deviceID,
          this.offlineApiService
        )
        .then((postJsonData) => {
          if (postJsonData) {
            let progress = 0;
            const timerRef = setInterval(() => {
              if (progress < 100) {
                this.updateProgress(progress, 0);
              } else {
                clearInterval(timerRef);
              }
              progress++;
            }, 2000);

            this.updateSyncState(
              EnumService.SyncProcessState.OFFLINE_DATA_UPLOAD_START
            );

            const fileName = "Offline" + this.utilService.Uniqueid();
            var jsZipObj = new JSZip();
            debugger;
            jsZipObj.file(fileName + ".json", JSON.stringify(postJsonData));

            // Convert json file to zip base64
            jsZipObj
              .generateAsync({ type: "base64" })
              .then((base64) => {
                debugger;
                // Convert zip base64 to fileobj
                this.utilService
                  .dataUriToFile(base64, fileName + ".zip", "application/zip")
                  .then((fileObj) => {
                    // Post zip file to server
                    this.offlineApiService
                      .postOfflineZipFile(fileObj, fileName + ".zip")
                      .subscribe(
                        (res) => {
                          clearInterval(timerRef);
                          resolve(res);
                        },
                        (error) => {
                          clearInterval(timerRef);
                          reject(error);
                        }
                      );
                  })
                  .catch((error) => {
                    clearInterval(timerRef);
                    reject(error);
                  });
              })
              .catch((error) => {
                clearInterval(timerRef);
                reject(error);
              });
          } else {
            resolve(null);
          }
        });
    });
  };

  onSyncFailed = (message) => {
    this.insomnia.allowSleepAgain().then(
      () => console.log("success"),
      (error) => console.log(" allowSleepAgain error", error)
    );

    this.updateSyncState(EnumService.SyncProcessState.FAILED);
    this.ngZone.run(() => {
      this.progress = 0;
      this.synchProgressState = "failed";
      this.synchronisationErrorMessage = message;
    });
  };

  onSyncCompleted = () => {
    this.insomnia.allowSleepAgain().then(
      () => console.log("success"),
      (error) => console.log(" allowSleepAgain error", error)
    );

    this.synchProgressState = "completed";
    localStorage.setItem(
      EnumService.LocalStorageKeys.SYNC_DATE_TIME,
      moment().toISOString(true)
    );
    this.updateSyncState(EnumService.SyncProcessState.COMPLETED);

    localStorage.removeItem(EnumService.LocalStorageKeys.OFFLINE_MODE_ENABLE);
    this.observablesService.publishSomeData(
      EnumService.ObserverKeys.OFFLINE_DATA_SYNC_NEEDED,
      true
    );

    //remove offline data json/zip files
    const offlineDataFiles = localStorage.getItem(
      EnumService.LocalStorageKeys.OFFLINE_DATA_FILES
    );
    if (offlineDataFiles) {
      try {
        const files = JSON.parse(offlineDataFiles);
        files.forEach((fileUrl) => {
          this.filehandlerService.removeFile(fileUrl);
        });
        localStorage.removeItem(
          EnumService.LocalStorageKeys.OFFLINE_DATA_FILES
        );
      } catch (error) {}
    }

    // if it is already offline mode then publish event to update UI on other pages that are subscribed for changes
    if (this.sharedDataService.offlineMode) {
      this.sharedDataService.offlineMode = false;
      this.observablesService.publishSomeData(
        EnumService.ObserverKeys.OFFLINE_MODE_CHANGE,
        false
      );
    }
  };

  onSync() {
    this.progress = 0;
    this.synchProgressState = "processing";
    this.updateSyncState(EnumService.SyncProcessState.STARTED);
    this.insomnia.keepAwake().then(
      () => console.log("keepAwake success"),
      (error) => console.log("keepAwake error", error)
    );

    const onOfflineRemoved = () => {
      this.updateSyncState(
        EnumService.SyncProcessState.OFFLINE_DATA_DOWNLOAD_START
      );
      this.offlineManagerService.emptyAllTables(() => {
        this.callOfflineApi((status, res) => {
          if (status) {
            this.onSyncCompleted();
          } else {
            this.onSyncFailed(res.message);
          }
        });
      });
    };

    this.postOfflineDataToServerIfAvailable()
      .then((res) => {
        this.updateProgress(100, 0);
        // First Remove folder that contains all offline created files before download new offline files
        this.filehandlerService
          .removeDirectory(
            this.filehandlerService.offlineFilesDirectory(),
            StaticDataService.offlineFilesFolderName
          )
          .then(() => {
            onOfflineRemoved();
          })
          .catch(() => {
            onOfflineRemoved();
          });
      })
      .catch((error) => {
        this.onSyncFailed(error.message);
      });
  }

  onContinue() {
    this.navController.back();
  }

  updateProgress = (progress: number = 0, currentSyncStep: number = 0) => {
    let totalSyncStep = 4;
    let finalProgress = (100 / totalSyncStep) * currentSyncStep + progress / 4;
    if (finalProgress > 100) {
      finalProgress = 100;
    }

    this.ngZone.run(() => {
      this.progress = finalProgress;
    });
  };

  updateSyncState = (state: string) => {
    localStorage.setItem(
      EnumService.LocalStorageKeys.OFFLINEMODE_SYNC_STATE,
      state
    );
  };

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
          this.updateProgress(100, 1);

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
                  totalSizeWillBeDownloadB +
                  UtilService.formattedNumberToNumber(zipFileSizeBytes);
              });

              // First Remove folder that contains all file before download new offline files
              this.filehandlerService
                .removeDirectory(
                  this.filehandlerService.offlineFilesDirectory(),
                  localStorage.getItem(
                    EnumService.LocalStorageKeys.OFFLINE_FILES_FOLDER_NAME
                  )
                )
                .then(() => {
                  getOfflineDataFromServer();
                })
                .catch(() => {
                  getOfflineDataFromServer();
                });

              const getOfflineDataFromServer = () => {
                this.isSpaceAvailableInDevice(totalSizeWillBeDownloadB).then(
                  (isAvailable) => {
                    if (isAvailable) {
                      this.offlineApiService
                        .getDeviceOfflineFile(files, (zipProgress) => {
                          this.updateProgress(zipProgress, 2);
                        })
                        .then(async (jsonFiles: any) => {
                          localStorage.setItem(
                            EnumService.LocalStorageKeys.OFFLINE_DATA_FILES,
                            JSON.stringify(jsonFiles)
                          );

                          // Empty all sqlite tables data
                          this.offlineManagerService.emptyAllTables(() => {
                            const readJsonFileAndInsertInDb = (fileIndex) => {
                              const jsonFile = jsonFiles[fileIndex];
                              this.filehandlerService
                                .readJsonFile(
                                  Capacitor.convertFileSrc(jsonFile),
                                  this.sharedDataService.deviceUID
                                )
                                .then((offlineData: any) => {
                                  this.updateSyncState(
                                    EnumService.SyncProcessState
                                      .OFFLINE_DATA_INSERT_START
                                  );

                                  let progressCount = 0;

                                  this.offlineManagerService.insertOfflineData(
                                    offlineData,
                                    (insertionDone) => {
                                      progressCount += 2;

                                      this.updateProgress(progressCount, 3);
                                      if (insertionDone) {
                                        if (jsonFiles?.length > ++fileIndex) {
                                          readJsonFileAndInsertInDb(fileIndex);
                                        } else {
                                          callBack &&
                                            callBack(
                                              true,
                                              "All data inserted success"
                                            );
                                        }
                                      }
                                    }
                                  );
                                })
                                .catch((error) => {
                                  this.onSyncFailed(
                                    error?.message || "File Read error"
                                  );
                                });
                            };

                            if (jsonFiles?.length > 0) {
                              readJsonFileAndInsertInDb(0);
                            }
                          });
                        })
                        .catch((error) => {
                          this.onSyncFailed(
                            error?.message || "File download error"
                          );
                        });
                    } else {
                      this.onSyncFailed(
                        "No enough space available in your device"
                      );
                    }
                  }
                );
              };
            }
          }
        },
        (error) => {
          callBack && callBack(false, error);
        }
      );
  };
}
