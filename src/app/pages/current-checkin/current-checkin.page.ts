import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { SharedDataService } from "../../services/shared-data.service";
import { UtilService } from "../../services/util.service";
import { PhotoService } from "../../services/photo.service";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { ObservablesService } from "../../services/observables.service";
import { Response, User } from "../../_models";
import { EnumService } from "../../services/enum.service";
import { CheckedInDetailItem } from "../../_models/checkedInDetailItem";
import { AccountService } from "../../services/account.service";
import { DocumentDetail } from "../../_models/documentDetail";
import { FormItem } from "../../_models/formItem";
import { FilehandlerService } from "../../services/filehandler.service";
import { SignOffFormDetail } from "../../_models/signOffFormDetail";
import { DynamicRouteService } from "src/app/services/dynamic-route.service";
import { FolderContentListPage } from "../folder-content-list/folder-content-list.page";

@Component({
    selector: "app-current-checkin",
    templateUrl: "./current-checkin.page.html",
    styleUrls: ["./current-checkin.page.scss"],
})
export class CurrentCheckinPage implements OnInit {
    UtilService = UtilService;
    user: User;

    isRefreshing = false;
    isCheckedIn = false;

    availableWorkPermits;
    availableDocuments: Array<DocumentDetail>;
    availableForms: Array<FormItem>;

    isLoading = false;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public apiService: ApiService,
        public utilService: UtilService,
        public route: ActivatedRoute,
        private accountService: AccountService,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
        public filehandlerService: FilehandlerService,
        private dynamicRouteService: DynamicRouteService
    ) {
        this.user = this.accountService.userValue;
        if (
            sharedDataService.checkedInPlaces &&
            sharedDataService.checkedInPlaces?.length > 0
        ) {
            this.isCheckedIn = true;
        }
    }

    ngOnInit() {
        this.getPersonalModeData();
        this.observablesService
            .getObservable(EnumService.ObserverKeys.CURRENT_CHECKED_IN_CHANGED)
            .subscribe(() => {
                this.isLoading = true;

                if (
                    !this.sharedDataService.checkedInPlaces ||
                    this.sharedDataService.checkedInPlaces?.length === 0
                ) {
                    this.isCheckedIn = false;
                }
                if (
                    this.sharedDataService.checkedInPlaces &&
                    this.sharedDataService.checkedInPlaces?.length > 0
                ) {
                    if (!this.sharedDataService.currentSelectedCheckinPlace) {
                        this.sharedDataService.currentSelectedCheckinPlace =
                            this.sharedDataService.checkedInPlaces[0];
                    }
                    this.isCheckedIn = true;
                }

                this.getPersonalModeData(false, () => {
                    this.isLoading = false;
                });
            });
    }

    ionViewWillEnter() {
        console.log("CurrentCheckin ionViewWillEnter");
        this.observablesService.publishSomeData(
            EnumService.ObserverKeys.REFRESH_CURRENT_CHECKIN_LIST,
            {}
        );
        this.observablesService.publishSomeData(
            EnumService.ObserverKeys.CHECK_FOR_LOCATION_ARCHIVE
        );
    }

    doRefresh(event) {
        this.isRefreshing = true;
        this.getPersonalModeData(false, () => {
            this.isRefreshing = false;
            event.target.complete();
        });
    }

    getPersonalModeData = async (showLoading = true, callBack = null) => {
        if (showLoading) {
            this.utilService.presentLoadingWithOptions();
        }
        let responseRecievedCount = 0;
        const requestCount = 3;

        const checkAllRequestFinish = () => {
            responseRecievedCount++;
            if (responseRecievedCount === requestCount) {
                this.utilService.hideLoading();
                UtilService.fireCallBack(callBack);
            }
        };

        this.getPersonalModeAvailableWorkPermits(() => {
            checkAllRequestFinish();
        });
        this.getPersonalModeAvailableDocuments(() => {
            checkAllRequestFinish();
        });
        this.getPersonalModeAvailableForms(() => {
            checkAllRequestFinish();
        });
    };

    getPersonalModeAvailableForms = async (callBack = null) => {
        this.apiService
            .getPersonalModeAvailableForms(
                this.user?.userId,
                this.user.companyID
            )
            .subscribe(
                (response: Response) => {
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.availableForms = response.Result;
                    }
                    UtilService.fireCallBack(callBack);
                },
                (error) => {
                    this.availableForms = [];
                    UtilService.fireCallBack(callBack);
                }
            );
    };

    getPersonalModeAvailableDocuments = async (callBack = null) => {
        this.apiService
            .getPersonalModeAvailableDocuments(
                this.user?.userId,
                this.user.companyID
            )
            .subscribe(
                (response: Response) => {
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.availableDocuments = response.Result;
                    }
                    UtilService.fireCallBack(callBack);
                },
                (error) => {
                    this.availableDocuments = [];
                    UtilService.fireCallBack(callBack);
                }
            );
    };

    getPersonalModeAvailableWorkPermits = async (callBack = null) => {
        this.apiService
            .getPersonalModeAvailableWorkPermits(
                this.user?.userId,
                this.user.companyID
            )
            .subscribe(
                (response: Response) => {
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.availableWorkPermits = response.Result;
                    }
                    UtilService.fireCallBack(callBack);
                },
                (error) => {
                    this.availableWorkPermits = [];
                    UtilService.fireCallBack(callBack);
                }
            );
    };

    async openForm(form: FormItem) {
        this.utilService.presentLoadingWithOptions();

        const place: CheckedInDetailItem =
            this.sharedDataService.currentSelectedCheckinPlace;
        this.apiService
            .getSignOffFormDetail(
                this.user?.userId,
                form?.formID,
                place?.locationID,
                place?.projectID,
                place?.inventoryItemID
            )
            .subscribe(
                (response: Response) => {
                    this.utilService.hideLoading();
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.sharedDataService.viewFormFor =
                            EnumService.ViewFormForType.CurrentCheckin;
                        this.sharedDataService.signOffFormDetail =
                            response.Result as SignOffFormDetail;
                        this.navCtrl.navigateForward(["/form-cover"]);
                    }
                },
                (error) => {
                    this.utilService.hideLoading();
                }
            );
    }

    openDocument(document: DocumentDetail) {
        this.navCtrl.navigateForward(["/document-openchoice"], {
            queryParams: { document: JSON.stringify(document) },
        });
    }

    openWorkPermit() {
        this.sharedDataService.availableWorkPermits = this.availableWorkPermits;
        this.navCtrl.navigateForward([
            "/tabs/current-checkin/checkin-workpermit",
        ]);
    }

    openFormFolder(item) {
        this.observablesService.publishSomeData(
            EnumService.ObserverKeys.CHECK_FOR_LOCATION_ARCHIVE
        );

        const newPath =
            "tabs/current-checkin/folder-content-list/" + item.formFolderID;
        this.dynamicRouteService.addDynamicRoute(
            newPath,
            FolderContentListPage,
            true
        );
        this.navCtrl.navigateForward([newPath], {
            queryParams: { itemType: "form", itemDetail: JSON.stringify(item) },
        });
    }

    openDocumentFolder(item) {
        this.observablesService.publishSomeData(
            EnumService.ObserverKeys.CHECK_FOR_LOCATION_ARCHIVE
        );

        const newPath =
            "tabs/current-checkin/folder-content-list/" + item.folderID;
        this.dynamicRouteService.addDynamicRoute(
            newPath,
            FolderContentListPage,
            true
        );
        this.navCtrl.navigateForward([newPath], {
            queryParams: {
                itemType: "document",
                itemDetail: JSON.stringify(item),
            },
        });
    }
}
