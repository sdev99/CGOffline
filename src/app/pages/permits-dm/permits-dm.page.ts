import { Component, OnInit } from "@angular/core";
import { UtilService } from "../../services/util.service";
import { SharedDataService } from "../../services/shared-data.service";
import { Response } from "../../_models";
import { ApiService } from "../../services/api.service";
import { EnumService } from "../../services/enum.service";
import { WorkPermitDetail } from "../../_models/workPermitDetail";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { ObservablesService } from "src/app/services/observables.service";

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
        public utilService: UtilService,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
        public apiService: ApiService,
        public offlineManagerService: OfflineManagerService
    ) {}

    ngOnInit() {}

    ionViewDidEnter() {
        this.observablesService.publishSomeData(
            EnumService.ObserverKeys.CHECK_FOR_LOCATION_ARCHIVE
        );

        this.sharedDataService.dedicatedModeProcessType =
            EnumService.DedicatedModeProcessTypes.WorkPermit;
        this.getDedicatedModeLiveWorkPermits();
        this.getDedicatedModeArchiveWorkPermits();
    }

    getDedicatedModeLiveWorkPermits() {
        this.isLoadingPermits = true;
        const companyID =
            this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getDeviceLiveWorkPermits(
                    this.sharedDataService.dedicatedModeLocationUse
                )
                .then((res) => {
                    this.isLoadingPermits = false;

                    if (res) {
                        this.liveWorkPermits = res as any;
                    }
                })
                .catch((error) => {
                    this.isLoadingPermits = false;
                });
        } else {
            this.apiService
                .getDedicatedModeLiveWorkPermits(companyID)
                .subscribe(
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
    }

    getDedicatedModeArchiveWorkPermits() {
        this.isLoadingPermits = true;
        const companyID =
            this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;
        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getDeviceArchivedWorkPermits(
                    this.sharedDataService.dedicatedModeLocationUse
                )
                .then((res) => {
                    this.isLoadingPermits = false;
                    this.archivedWorkPermits = res as any;
                })
                .catch((error) => {
                    this.isLoadingPermits = false;
                });
        } else {
            this.apiService
                .getDedicatedModeArchiveWorkPermits(companyID)
                .subscribe(
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
