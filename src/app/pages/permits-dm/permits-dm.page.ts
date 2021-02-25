import { Component, OnInit } from "@angular/core";
import { FilehandlerService } from "../../services/filehandler.service";
import { DemoDataService } from "../../services/demo-data.service";
import { UtilService } from "../../services/util.service";
import { SharedDataService } from "../../services/shared-data.service";
import { FormItem } from "../../_models/formItem";
import { ArchivedDocumentDetail } from "../../_models/archivedDocumentDetail";
import { Response } from "../../_models";
import { NavController } from "@ionic/angular";
import { ApiService } from "../../services/api.service";
import { EnumService } from "../../services/enum.service";
import { WorkPermitDetail } from "../../_models/workPermitDetail";

@Component({
  selector: "app-permits-dm",
  templateUrl: "./permits-dm.page.html",
  styleUrls: ["./permits-dm.page.scss"],
})
export class PermitsDmPage implements OnInit {
  UtilService = UtilService;
  EnumService = EnumService;

  listType = EnumService.DedicatedModePermitListType.Live;
  listTypes = Object.values(EnumService.DedicatedModePermitListType);

  searchQuery = "";

  liveWorkPermits: Array<WorkPermitDetail>;
  archivedWorkPermits: Array<WorkPermitDetail>;

  isLoadingPermits = false;

  constructor(
    private navController: NavController,
    private filehandlerService: FilehandlerService,
    public utilService: UtilService,
    public sharedDataService: SharedDataService,
    public apiService: ApiService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.sharedDataService.dedicatedModeProcessType =
      EnumService.DedicatedModeProcessTypes.WorkPermit;
    this.getDedicatedModeLiveWorkPermits();
    this.getDedicatedModeArchiveWorkPermits();
  }

  getDedicatedModeLiveWorkPermits() {
    this.isLoadingPermits = true;
    const companyID = this.sharedDataService.dedicatedModeDeviceDetailData
      ?.companyID;
    this.apiService.getDedicatedModeLiveWorkPermits(companyID).subscribe(
      (response: Response) => {
        this.isLoadingPermits = false;
        if (response) {
          this.liveWorkPermits = response.Result;
        }
      },
      (error) => {
        this.isLoadingPermits = false;
      }
    );
  }

  getDedicatedModeArchiveWorkPermits() {
    this.isLoadingPermits = true;
    const companyID = this.sharedDataService.dedicatedModeDeviceDetailData
      ?.companyID;
    this.apiService.getDedicatedModeArchiveWorkPermits(companyID).subscribe(
      (response: Response) => {
        this.isLoadingPermits = false;
        if (response) {
          this.archivedWorkPermits = response.Result;
        }
      },
      (error) => {
        this.isLoadingPermits = false;
      }
    );
  }

  onSearch(search) {
    this.searchQuery = search;
  }

  searchbarShowHide(visible) {
    if (!visible) {
      this.searchQuery = "";
    }
  }

  segmentChanged(event) {
    this.listType = event;
    if (event === EnumService.DedicatedModePermitListType.Live) {
      this.getDedicatedModeLiveWorkPermits();
    } else if (event === EnumService.DedicatedModePermitListType.Archive) {
      this.getDedicatedModeArchiveWorkPermits();
    }
  }

  openLiveWorkPermit(item: WorkPermitDetail) {}

  openArchivedWorkPermit(item: WorkPermitDetail) {}
}
