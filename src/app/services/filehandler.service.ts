import { Injectable } from "@angular/core";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File } from "@ionic-native/file/ngx";
import { UtilService } from "./util.service";
import { HTTP } from "@ionic-native/http/ngx";
import { StaticDataService } from "./static-data.service";
import { Platform } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Capacitor } from "@capacitor/core";
import { EnumService } from "./enum.service";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";

@Injectable({
  providedIn: "root",
})
export class FilehandlerService {
  constructor(
    private httpClient: HttpClient,
    private fileOpener: FileOpener,
    private platform: Platform,
    private file: File,
    public utilService: UtilService,
    public fileTransfer: FileTransfer,
    private http: HTTP
  ) {}

  readJsonFile(filePath, accessID = "") {
    const token = localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN);

    // Authenticaotion by setting header with token value
    let headers: any = {};
    if (accessID && token) {
      headers = {
        accessID,
        token,
        Accept: "application/json",
      };
    }

    return fetch(filePath, { headers: headers }).then((res) => res.json());
  }

  // saveBinaryFileOnDevice(base64File: string, fileName: string, callBack) {
  //   const extension = fileName.split(".").pop();
  //   const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];

  //   const writeDirectory = this.platform.is("ios")
  //     ? this.file.dataDirectory
  //     : this.file.externalDataDirectory;
  //   try {
  //     this.file
  //       .writeFile(
  //         writeDirectory,
  //         fileName,
  //         UtilService.convertBase64ToBlob(
  //           base64File,
  //           "data:" + mimeType + ";base64"
  //         ),
  //         { replace: true }
  //       )
  //       .then(() => {
  //         callBack(writeDirectory + fileName);
  //       })
  //       .catch(() => {
  //         console.error("Error writing pdf file");
  //         callBack(false);
  //       });
  //   } catch (error) {
  //     callBack(false);
  //   }
  // }

  offlineFilesDirectory = () => {
    return this.file.dataDirectory;
  };

  async saveFileOnDevicePath(base64String, folderName, callBack) {
    debugger;

    let targetFileName: string = this.utilService.Uniqueid();
    const writeDirectory = this.offlineFilesDirectory();

    //Create folder if not exist
    try {
      await this.file.createDir(writeDirectory, folderName, false);
    } catch (error) {}

    if (UtilService.IsBase64Sring(base64String)) {
      const base64Data = base64String;
      let extension = "jpeg";
      try {
        extension = base64Data.split(";")[0].split("/")[1];
      } catch (error) {}

      targetFileName += "." + extension;
      const blob = UtilService.convertBase64ToBlob(
        UtilService.FixBase64String(base64Data),
        "image/" + extension
      );
      this.file
        .writeFile(writeDirectory, folderName + "/" + targetFileName, blob)
        .then((res) => {
          callBack(
            true,
            writeDirectory + "/" + folderName + "/" + targetFileName
          );
        })
        .catch((error) => {
          callBack(false, error);
        });
    } else {
      const extension = base64String.split(".").pop();
      targetFileName += "." + extension;

      try {
        const sourceFileName = base64String.split("\\").pop().split("/").pop();
        const sourceDirectory = UtilService.fixDeviceDirPath(
          base64String.replace(sourceFileName, "")
        );

        this.file
          .copyFile(
            sourceDirectory,
            sourceFileName,
            writeDirectory,
            folderName + "/" + targetFileName
          )
          .then((res) => {
            callBack(
              true,
              writeDirectory + "/" + folderName + "/" + targetFileName
            );
          })
          .catch((error) => {
            callBack(false, error);
          });
      } catch (error) {
        callBack(false, error);
      }
    }
  }

  async saveFileOnDevice(path, callBack) {
    let targetFileName: string = this.utilService.Uniqueid();
    const folderName = StaticDataService.offlineFilesFolderName;
    const writeDirectory = this.offlineFilesDirectory();

    //Create folder if not exist
    try {
      await this.file.createDir(writeDirectory, folderName, false);
    } catch (error) {}
    debugger;

    if (
      UtilService.IsBase64Sring(path.dataUrl) ||
      UtilService.IsBase64Sring(path)
    ) {
      const base64Data = path.dataUrl || path;
      let extension = "jpeg";
      try {
        extension = base64Data.split(";")[0].split("/")[1];
      } catch (error) {}

      targetFileName += "." + extension;
      const blob = UtilService.convertBase64ToBlob(
        UtilService.FixBase64String(base64Data),
        "image/" + extension
      );
      this.file
        .writeFile(writeDirectory, folderName + "/" + targetFileName, blob)
        .then((res) => {
          debugger;
          callBack(true, targetFileName);
        })
        .catch((error) => {
          debugger;

          callBack(false, error);
        });
    } else {
      const extension = path.split(".").pop();
      targetFileName += "." + extension;

      try {
        const sourceFileName = path.split("\\").pop().split("/").pop();
        const sourceDirectory = UtilService.fixDeviceDirPath(
          path.replace(sourceFileName, "")
        );

        this.file
          .copyFile(
            sourceDirectory,
            sourceFileName,
            writeDirectory,
            folderName + "/" + targetFileName
          )
          .then((res) => {
            debugger;
            callBack(true, targetFileName);
          })
          .catch((error) => {
            debugger;
            callBack(false, error);
          });
      } catch (error) {
        debugger;
        callBack(false, error);
      }
    }
  }

  removeSavedFile(fileName) {
    try {
      const writeDirectory = this.offlineFilesDirectory();
      this.file.removeFile(writeDirectory, fileName).then((res) => {
        console.log("File remove successfully");
      });
    } catch (error) {}
  }

  removeFile(fileUrl: string) {
    return new Promise((resolve, reject) => {
      try {
        const fileName = fileUrl.split("\\").pop().split("/").pop();
        const directory = fileUrl.replace(fileName, "");

        this.file
          .removeFile(directory, fileName)
          .then((res) => {
            console.log("File removed successfully");
            resolve(res);
          })
          .catch((error) => {
            console.log("File removed error" + JSON.stringify(error));
            reject(error);
          });
      } catch (error) {
        reject(error);
        console.log("File removed error" + JSON.stringify(error));
      }
    });
  }

  removeDirectory(directory: string, directoryName: string) {
    return new Promise((resolve, reject) => {
      try {
        this.file
          .removeRecursively(directory, directoryName)
          .then((res) => {
            console.log("Directory removed successfully");
            resolve(res);
          })
          .catch((error) => {
            console.log("Directory removed error" + JSON.stringify(error));
            reject(error);
          });
      } catch (error) {
        reject(error);
        console.log("Directory removed error" + JSON.stringify(error));
      }
    });
  }

  // saveAndOpenFile(base64File: string, fileName: string) {
  //   this.utilService.presentLoadingWithOptions("Loading...");

  //   this.saveBinaryFileOnDevice(base64File, fileName, (url) => {
  //     this.utilService.hideLoading();

  //     if (url) {
  //       this.openDownloadedFile(url, fileName);
  //     }
  //   });
  // }

  showErrorAlert = (error, defaultErrorMessage = "") => {
    let errorMessage = defaultErrorMessage;
    if (typeof error === "string") {
      errorMessage = error;
    } else if (typeof error === "object" && (error.message || error.error)) {
      if (error.error) {
        errorMessage = error.error;
      } else {
        errorMessage = error.message;
      }
    }
    this.utilService.showAlert(errorMessage, "Alert !");
  };

  async openFile(fileUrl = "", openInDefaultApp = false) {
    if (UtilService.isWebApp()) {
      window.open(fileUrl, "__blank");
    } else {
      this.utilService.presentLoadingWithOptions("File downloading...");

      const fileName = new URL(fileUrl).pathname.split("/").pop();
      this.http
        .downloadFile(fileUrl, {}, {}, this.file.dataDirectory + fileName)
        .then((response) => {
          this.utilService.hideLoading();
          const url = response.nativeURL;
          this.openDownloadedFile(url, fileName, openInDefaultApp);
        })
        .catch((error) => {
          this.utilService.hideLoading();
          this.showErrorAlert(error, "File download error");
          console.log("Error download file", error);
        });
    }
  }

  openDownloadedFile(url = "", fileName = "", openInDefaultApp = false) {
    const extension = fileName.split(".").pop();

    const onError = (error) => {
      this.showErrorAlert(error, "File cannot open");
    };

    if (!url) {
      onError("File not found.");
      return;
    }

    const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];
    if (extension.toLowerCase() === "pdf" || openInDefaultApp) {
      this.fileOpener
        .open(url, mimeType)
        .then(() => console.log("File is opened"))
        .catch((e) => onError(e));
    } else if (this.platform.is("ios")) {
      this.fileOpener
        .open(url, mimeType)
        .then(() => console.log("File is opened"))
        .catch((e) => onError(e));
    } else {
      this.fileOpener
        .showOpenWithDialog(url, mimeType)
        .then(() => console.log("File is opened"))
        .catch((e) => onError(e));
    }
  }
}
