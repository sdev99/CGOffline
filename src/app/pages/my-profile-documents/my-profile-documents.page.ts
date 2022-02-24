import { Component, OnInit } from "@angular/core";
import { DemoDataService } from "../../services/demo-data.service";
import { NavController } from "@ionic/angular";
import { FilehandlerService } from "../../services/filehandler.service";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { Response, User } from "../../_models";
import { AccountService } from "../../services/account.service";
import { SharedDataService } from "../../services/shared-data.service";
import { MySignedDocumentItem } from "../../_models/mySignedDocumentItem";
import { EnumService } from "../../services/enum.service";

@Component({
  selector: "app-my-profile-documents",
  templateUrl: "./my-profile-documents.page.html",
  styleUrls: ["./my-profile-documents.page.scss"],
})
export class MyProfileDocumentsPage implements OnInit {
  list: Array<MySignedDocumentItem> = [];
  user: User;
  isLoadingMoreData = false;
  isRefreshing = false;

  constructor(
    public navCtrl: NavController,
    private filehandlerService: FilehandlerService,
    private apiService: ApiService,
    public accountService: AccountService,
    public sharedDataService: SharedDataService,
    public utilService: UtilService
  ) {
    this.user = this.accountService.userValue;
  }

  async ngOnInit() {
    this.utilService.presentLoadingWithOptions();
    this.getMySignedDocuments(() => {
      this.utilService.hideLoading();
    }, true);
  }

  doRefresh(event) {
    this.isRefreshing = true;
    this.getMySignedDocuments(() => {
      this.isRefreshing = false;
      event.target.complete();
    }, true);
  }

  loadMoreData(event) {
    this.isLoadingMoreData = true;
    this.getMySignedDocuments((isMoreData) => {
      event.target.complete();
      this.isLoadingMoreData = false;
      if (!isMoreData) {
        // event.target.disabled = true;
      }
    });
  }

  getMySignedDocuments = async (callBack, resetList = false) => {
    this.apiService.getMySignedDocuments(this.user?.userId).subscribe(
      (response: Response) => {
        let isMoreData = false;
        if (
          response.StatusCode === EnumService.ApiResponseCode.RequestSuccessful
        ) {
          if (resetList) {
            this.list = response.Result;
          } else {
            this.list = response.Result;
            // this.list = this.list.concat(response.Result);
          }
          isMoreData = true;
        }
        UtilService.fireCallBack(callBack, isMoreData);
      },
      (error) => {
        UtilService.fireCallBack(callBack, false);
      }
    );
  };

  onClose() {
    this.navCtrl.back();
  }

  openFile(attachment: MySignedDocumentItem) {
    if (attachment && attachment.documentFileName) {
      this.utilService.presentLoadingWithOptions();
      this.apiService
        .getDocumentDirectoryFilePath(attachment.documentFileName)
        .subscribe(
          (path) => {
            this.utilService.hideLoading();
            this.filehandlerService.openFile(path);
          },
          (err) => {
            this.utilService.hideLoading();
          }
        );
    }
  }
}
