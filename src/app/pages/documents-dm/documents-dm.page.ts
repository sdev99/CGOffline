import { Component, OnInit } from "@angular/core";
import { UtilService } from "../../services/util.service";
import { FilehandlerService } from "../../services/filehandler.service";
import { NavController } from "@ionic/angular";
import { SharedDataService } from "../../services/shared-data.service";
import { ApiService } from "../../services/api.service";
import { EnumService } from "../../services/enum.service";
import { Response } from "../../_models";
import { DocumentDetail } from "../../_models/documentDetail";
import { ArchivedDocumentDetail } from "../../_models/archivedDocumentDetail";
import { ActivatedRoute } from "@angular/router";
import { DynamicRouteService } from "src/app/services/dynamic-route.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";

@Component({
  selector: "app-documents-dm",
  templateUrl: "./documents-dm.page.html",
  styleUrls: ["./documents-dm.page.scss"],
})
export class DocumentsDmPage implements OnInit {
  UtilService = UtilService;
  EnumService = EnumService;

  listType = EnumService.DedicatedModeDocumentListType.Available;
  listTypes = Object.values(EnumService.DedicatedModeDocumentListType);

  searchQuery = "";

  availableDocuments: Array<DocumentDetail>;
  archivedDocuments: Array<ArchivedDocumentDetail>;

  isLoadingDocument = false;

  itemDetail: DocumentDetail;
  pageTitle = "";

  constructor(
    private dynamicRouteService: DynamicRouteService,
    private navCtrl: NavController,
    private filehandlerService: FilehandlerService,
    public utilService: UtilService,
    public sharedDataService: SharedDataService,
    public offlineManagerService: OfflineManagerService,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      if (res) {
        if (res.itemDetail) {
          this.itemDetail = JSON.parse(res.itemDetail);
          this.pageTitle = this.itemDetail.documentTitle;
        }
      }
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.sharedDataService.dedicatedModeProcessType =
      EnumService.DedicatedModeProcessTypes.Document;
    this.getDedicatedModeAvailableDocuments();
    this.getDedicatedModeArchiveDocuments();
  }

  getDedicatedModeAvailableDocuments() {
    const folderID = this.itemDetail ? this.itemDetail.folderID : 0;
    const companyID =
      this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
    if (this.sharedDataService.offlineMode) {
      this.offlineManagerService
        .getAvailableDocuments(
          folderID,
          this.sharedDataService.dedicatedModeLocationUse
        )
        .then((res) => {
          this.availableDocuments = res as any;
        });
    } else {
      this.isLoadingDocument = true;
      this.apiService
        .getDedicatedModeAvailableDocuments(companyID, folderID)
        .subscribe(
          (response: Response) => {
            this.isLoadingDocument = false;
            if (response) {
              this.availableDocuments = response.Result;
            }
          },
          (error) => {
            this.isLoadingDocument = false;
          }
        );
    }
  }

  getDedicatedModeArchiveDocuments() {
    const companyID =
      this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
    if (this.sharedDataService.offlineMode) {
      this.offlineManagerService
        .getArchivedDocuments(this.sharedDataService.dedicatedModeLocationUse)
        .then((res) => {
          this.archivedDocuments = res as any;
        });
    } else {
      this.isLoadingDocument = true;
      this.apiService.getDedicatedModeArchiveDocuments(companyID).subscribe(
        (response: Response) => {
          this.isLoadingDocument = false;
          if (response) {
            this.archivedDocuments = response.Result;
          }
        },
        (error) => {
          this.isLoadingDocument = false;
        }
      );
    }
  }

  onSearch(search) {
    this.searchQuery = search;
  }

  segmentChanged(event) {
    this.listType = event;
    if (event === EnumService.DedicatedModeDocumentListType.Available) {
      this.getDedicatedModeAvailableDocuments();
    } else if (event === EnumService.DedicatedModeDocumentListType.Archive) {
      this.getDedicatedModeArchiveDocuments();
    }
  }

  getArchivedDocumentIcon = (item) => {
    if (this.sharedDataService.offlineMode) {
      if (!item.document_BinaryFile) {
        return UtilService.FileIcon("pdf");
      }
      return "data:image/png;base64," + item.documentIcon_BinaryFile;
    }
    return item.documentFileIconURL;
  };

  searchbarShowHide(visible) {
    if (!visible) {
      this.searchQuery = "";
    }
  }

  openAvailableDocument(item: DocumentDetail) {
    if (item.documentFileName) {
      this.navCtrl.navigateForward("/document-openchoice-dm", {
        queryParams: {
          documentDetail: JSON.stringify(item),
        },
      });
    } else {
      this.utilService.showAlert(
        "This device needs to be synced first in order to show the selected file. Please sync device and try again.",
        "File Not Available Yet"
      );
    }
  }

  openArchivedDocument(item: ArchivedDocumentDetail) {
    if (this.sharedDataService.offlineMode) {
      const docDetail = item as any;
      if (docDetail.document_BinaryFile) {
        const document_BinaryFile = docDetail.document_BinaryFile;
        const documentFileName = docDetail.documentFileName;
        this.filehandlerService.saveAndOpenFile(
          document_BinaryFile,
          documentFileName
        );
      } else {
        this.utilService.showAlert(
          "This device needs to be synced first in order to show the selected file. Please sync device and try again.",
          "File Not Available Yet"
        );
      }
    } else {
      if (item.documentFileName) {
        this.filehandlerService.openFile(
          this.sharedDataService.globalDirectories?.documentDirectory +
            "" +
            item.documentFileName
        );
      } else {
        this.utilService.showAlert(
          "This device needs to be synced first in order to show the selected file. Please sync device and try again.",
          "File Not Available Yet"
        );
      }
    }
  }

  openDocumentFolder(item: DocumentDetail) {
    const newPath = "documents-dm/" + item.folderID;
    this.dynamicRouteService.addDynamicRoute(newPath, DocumentsDmPage, true);
    this.navCtrl.navigateForward([newPath], {
      queryParams: { itemDetail: JSON.stringify(item) },
    });
  }
}
