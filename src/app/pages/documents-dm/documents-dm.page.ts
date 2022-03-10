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
import { ObservablesService } from "src/app/services/observables.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

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

  offlineMode: boolean = false;

  constructor(
    private dynamicRouteService: DynamicRouteService,
    private navCtrl: NavController,
    private filehandlerService: FilehandlerService,
    public utilService: UtilService,
    public sharedDataService: SharedDataService,
    public observablesService: ObservablesService,
    public offlineManagerService: OfflineManagerService,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      if (res) {
        if (res.itemDetail) {
          this.itemDetail = JSON.parse(res.itemDetail);
          this.pageTitle = this.itemDetail.documentTitle;
        }
      }
    });

    this.offlineMode = sharedDataService.offlineMode;

    this.observablesService
      .getObservable(EnumService.ObserverKeys.OFFLINE_MODE_CHANGE)
      .subscribe((res) => {
        if (this.offlineMode !== sharedDataService.offlineMode) {
          this.availableDocuments = null;
          this.archivedDocuments = null;
        }

        this.getDedicatedModeAvailableDocuments();
        this.getDedicatedModeArchiveDocuments();
        this.offlineMode = sharedDataService.offlineMode;
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

  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  openArchivedDocument(item: ArchivedDocumentDetail) {
    if (item.documentFileName) {
      if (this.sharedDataService.offlineMode) {
        const documentFileUrl = this.utilService.getOfflineFileUrl(
          item.documentFileName,
          "document"
        );
        this.filehandlerService.openDownloadedFile(
          documentFileUrl,
          item.documentFileName
        );
      } else {
        this.utilService.presentLoadingWithOptions();
        this.apiService
          .getDocumentDirectoryFilePath(item?.documentFileName)
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
    } else {
      this.utilService.showAlert(
        "This device needs to be synced first in order to show the selected file. Please sync device and try again.",
        "File Not Available Yet"
      );
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
