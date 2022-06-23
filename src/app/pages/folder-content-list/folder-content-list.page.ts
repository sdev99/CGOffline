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
import { AccountService } from "../../services/account.service";
import { DocumentDetail } from "../../_models/documentDetail";
import { FormItem } from "../../_models/formItem";
import { FilehandlerService } from "../../services/filehandler.service";
import { CheckedInDetailItem } from "src/app/_models/checkedInDetailItem";
import { SignOffFormDetail } from "src/app/_models/signOffFormDetail";
import { DynamicRouteService } from "src/app/services/dynamic-route.service";

@Component({
    selector: "app-folder-content-list",
    templateUrl: "./folder-content-list.page.html",
    styleUrls: ["./folder-content-list.page.scss"],
})
export class FolderContentListPage implements OnInit {
    UtilService = UtilService;
    user: User;

    isRefreshing = false;
    isCheckedIn = false;

    availableDocuments: Array<DocumentDetail>;
    availableForms: Array<FormItem>;

    isLoading = false;

    itemType: "form" | "document";
    itemDetail: DocumentDetail | FormItem;

    pageTitle = "";

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public apiService: ApiService,
        private dynamicRouteService: DynamicRouteService,
        public utilService: UtilService,
        private accountService: AccountService,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
        public filehandlerService: FilehandlerService,
        public activatedRoute: ActivatedRoute
    ) {
        this.user = this.accountService.userValue;
        if (
            sharedDataService.checkedInPlaces &&
            sharedDataService.checkedInPlaces?.length > 0
        ) {
            this.isCheckedIn = true;
        }
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.itemDetail) {
                    this.itemDetail = JSON.parse(res.itemDetail);
                }

                if (res.itemType) {
                    this.itemType = res.itemType;
                }
            }
        });
    }

    ngOnInit() {
        this.isLoading = true;
        this.getPersonalModeData(() => {
            this.isLoading = false;
        });
    }

    back() {
        this.navCtrl.back();
    }

    getPersonalModeData = (callBack) => {
        if (this.itemType === "form") {
            const formItem = this.itemDetail as FormItem;
            this.pageTitle = formItem.formTitle;
            this.getPersonalModeAvailableForms(formItem, callBack);
        } else if (this.itemType === "document") {
            const documentDetail = this.itemDetail as DocumentDetail;
            this.pageTitle = documentDetail.documentTitle;
            this.getPersonalModeAvailableDocuments(documentDetail, callBack);
        } else {
            callBack && callBack();
        }
    };

    doRefresh(event) {
        this.isRefreshing = true;
        this.getPersonalModeData(() => {
            this.isRefreshing = false;
            event.target.complete();
        });
    }

    getPersonalModeAvailableForms(formItem: FormItem, callBack = null) {
        this.apiService
            .getPersonalModeAvailableForms(
                this.user?.userId,
                this.user.companyID,
                formItem.formFolderID
            )
            .subscribe(
                (response: Response) => {
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.availableForms = response.Result;
                    }
                    callBack && callBack();
                },
                (error) => {
                    this.availableForms = [];
                    callBack && callBack();
                }
            );
    }

    getPersonalModeAvailableDocuments(
        documentDetail: DocumentDetail,
        callBack = null
    ) {
        this.apiService
            .getPersonalModeAvailableDocuments(
                this.user?.userId,
                this.user.companyID,
                documentDetail.folderID
            )
            .subscribe(
                (response: Response) => {
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.availableDocuments = response.Result;
                    }
                    callBack && callBack();
                },
                (error) => {
                    this.availableDocuments = [];
                    callBack && callBack();
                }
            );
    }

    openFormFolder(item: FormItem) {
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

    openDocumentFolder(item: DocumentDetail) {
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
}
