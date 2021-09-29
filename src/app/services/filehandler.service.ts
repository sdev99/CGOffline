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
    private http: HTTP
  ) {}

  readJsonFile(filePath, accessID = "") {
    const token = localStorage.getItem(EnumService.LocalStorageKeys.API_TOKEN);

    // Authentication by setting header with token value
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

  readJsonFileOld(filePath) {
    return this.httpClient.get(filePath, {});
  }

  saveBinaryFileOnDevice(base64File: string, fileName: string, callBack) {
    const extension = fileName.split(".").pop();
    const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];

    const writeDirectory = this.platform.is("ios")
      ? this.file.dataDirectory
      : this.file.externalDataDirectory;
    try {
      this.file
        .writeFile(
          writeDirectory,
          fileName,
          UtilService.convertBase64ToBlob(
            base64File,
            "data:" + mimeType + ";base64"
          ),
          { replace: true }
        )
        .then(() => {
          callBack(writeDirectory + fileName);
        })
        .catch(() => {
          console.error("Error writing pdf file");
          callBack(false);
        });
    } catch (error) {
      callBack(false);
    }
  }

  removeSavedFile(fileName) {
    try {
      const writeDirectory = this.platform.is("ios")
        ? this.file.dataDirectory
        : this.file.externalDataDirectory;
      this.file.removeFile(writeDirectory, fileName).then((res) => {
        console.log("File remove successfully");
      });
    } catch (error) {}
  }

  removeFile(fileUrl: string) {
    try {
      const fileName = fileUrl.split("\\").pop().split("/").pop();
      const directory = fileUrl.replace(fileName, "");

      this.file.removeFile(directory, fileName).then((res) => {
        console.log("File remove successfully");
      });
    } catch (error) {}
  }

  saveAndOpenFile(base64File: string, fileName: string) {
    this.utilService.presentLoadingWithOptions("Loading...");

    this.saveBinaryFileOnDevice(base64File, fileName, (url) => {
      this.utilService.hideLoading();

      if (url) {
        this.openDownloadedFile(url, fileName);
      }
    });
  }

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
    this.utilService.presentLoadingWithOptions("File downloading...");

    const fileName = fileUrl.replace(/^.*[\\\/]/, "");

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
