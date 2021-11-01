import { Component, OnInit } from "@angular/core";
import { DemoDataService } from "../../services/demo-data.service";
import { NavController } from "@ionic/angular";
import { SharedDataService } from "../../services/shared-data.service";
import { EnumService } from "../../services/enum.service";
import { FormItem } from "../../_models/formItem";
import { UtilService } from "../../services/util.service";
import { Response, User } from "../../_models";
import { SignOffFormDetail } from "../../_models/signOffFormDetail";
import { ApiService } from "../../services/api.service";
import { AccountService } from "../../services/account.service";
import { CheckedInDetailItem } from "../../_models/checkedInDetailItem";
import { ActivatedRoute } from "@angular/router";
import { DynamicRouteService } from "src/app/services/dynamic-route.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { DeviceEntityDetail } from "src/app/_models/deviceEntityDetail";

@Component({
  selector: "app-checkin-workpermit",
  templateUrl: "./checkin-workpermit.page.html",
  styleUrls: ["./checkin-workpermit.page.scss"],
})
export class CheckinWorkpermitPage implements OnInit {
  UtilService = UtilService;
  availableWorkPermits: Array<FormItem>;
  user: User;

  isCheckedIn = false;

  itemDetail: FormItem;
  pageTitle = "";

  constructor(
    public navController: NavController,
    public sharedDataService: SharedDataService,
    public dynamicRouteService: DynamicRouteService,
    public utilService: UtilService,
    public apiService: ApiService,
    public navCtrl: NavController,
    private accountService: AccountService,
    public activatedRoute: ActivatedRoute,
    public offlineManagerService: OfflineManagerService
  ) {
    if (!sharedDataService.dedicatedMode) {
      this.isCheckedIn = sharedDataService.checkedInPlaces
        ? sharedDataService.checkedInPlaces.length > 0
        : false;
      this.user = this.accountService.userValue;
    }
    this.availableWorkPermits = sharedDataService.availableWorkPermits;

    this.activatedRoute.queryParams.subscribe((res) => {
      if (res) {
        if (res.itemDetail) {
          this.itemDetail = JSON.parse(res.itemDetail);
          this.pageTitle = this.itemDetail.formTitle;
        }
      }
    });
  }

  ngOnInit() {
    if (this.itemDetail && this.itemDetail.formFolderID) {
      this.availableWorkPermits = [];

      this.utilService.presentLoadingWithOptions();

      if (this.sharedDataService.dedicatedMode) {
        this.getDedicatedModeAvailableWorkPermits(this.itemDetail, () => {
          this.utilService.hideLoading();
        });
      } else {
        this.getPersonalModeAvailableWorkPermits(this.itemDetail, () => {
          this.utilService.hideLoading();
        });
      }
    }
  }

  getDedicatedModeAvailableWorkPermits(itemDetail: FormItem, callBack = null) {
    const companyID =
      this.sharedDataService.dedicatedModeDeviceDetailData?.companyID;

    if (this.sharedDataService.offlineMode) {
      const dedicatedModeLocationUse: DeviceEntityDetail =
        this.sharedDataService.dedicatedModeLocationUse;
      this.offlineManagerService
        .getDeviceAvailableWorkPermits(
          dedicatedModeLocationUse,
          itemDetail.formFolderID
        )
        .then((res: any) => {
          this.availableWorkPermits = res;
          UtilService.fireCallBack(callBack);
        });
    } else {
      this.apiService
        .getDedicatedModeAvailableWorkPermits(
          companyID,
          itemDetail.formFolderID
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
    }
  }

  getPersonalModeAvailableWorkPermits = async (
    itemDetail: FormItem,
    callBack = null
  ) => {
    this.apiService
      .getPersonalModeAvailableWorkPermits(
        this.user?.userId,
        this.user.companyID,
        itemDetail.formFolderID
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

  fileIcon(type) {
    let iconName = "";
    switch (type) {
      case "document":
        iconName = "attachment1";
        break;
      case "pdf":
        iconName = "attachment2";
        break;
      case "form":
        iconName = "attachment3";
        break;
      case "folder":
        iconName = "attachment4";
        break;
      case "image":
        iconName = "attachment5";
        break;
      case "video":
        iconName = "attachment6";
        break;
      default:
        iconName = "attachment1";
    }
    return "./assets/icon/" + iconName + ".svg";
  }

  back() {
    this.navController.back();
  }

  onSelect(item) {
    if (this.sharedDataService.dedicatedMode) {
      this.sharedDataService.signOffFormDetail = item;
      this.sharedDataService.signOffFor =
        EnumService.SignOffType.WORK_PERMIT_DM;
      this.navController.navigateForward("form-open-auth-dm");
    } else {
      this.navController.navigateForward("form-cover", {
        queryParams: item,
      });
    }
  }

  async openForm(form: FormItem) {
    this.utilService.presentLoadingWithOptions();

    if (this.sharedDataService.dedicatedMode) {
      const onSuccess = (res) => {
        this.sharedDataService.signOffFor = EnumService.SignOffType.FORMS_DM;
        this.sharedDataService.viewFormFor =
          EnumService.ViewFormForType.WorkPermitDM;
        this.sharedDataService.signOffFormDetail = res as SignOffFormDetail;
        this.sharedDataService.dedicatedModeTempAuthFor =
          EnumService.DedicatedModeTempAuthType.WorkPermit;
        this.navController.navigateForward("/form-open-auth-dm");
      };

      if (this.sharedDataService.offlineMode) {
        this.offlineManagerService
          .getFormDetail(
            form.formID,
            form.formVersionID,
            form.formVersionNo,
            form.formFolderID
          )
          .then((res) => {
            this.utilService.hideLoading();

            if (res) {
              const signOffFormDetail = res as SignOffFormDetail;
              onSuccess(signOffFormDetail);
            }
          })
          .catch((error) => {
            this.utilService.hideLoading();
          });
      } else {
        this.apiService
          .getDedicatedModeSignOffFormDetail(form.formID)
          .subscribe(
            (response: Response) => {
              this.utilService.hideLoading();
              if (
                response.StatusCode ===
                EnumService.ApiResponseCode.RequestSuccessful
              ) {
                const signOffFormDetail = response.Result as SignOffFormDetail;
                onSuccess(signOffFormDetail);
              }
            },
            (error) => {
              this.utilService.hideLoading();
            }
          );
      }
    } else {
      const place: CheckedInDetailItem =
        this.sharedDataService.currentSelectedCheckinPlace;
      this.apiService
        .getSignOffFormDetail(
          this.user?.userId,
          form.formID,
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
                EnumService.ViewFormForType.CurrentCheckinWorkPermit;
              this.sharedDataService.signOffFormDetail =
                response.Result as SignOffFormDetail;
              this.navCtrl.navigateForward(["/form-cover"], {
                replaceUrl: true,
              });
            }
          },
          (error) => {
            this.utilService.hideLoading();
          }
        );
    }
  }

  openFormFolder(item: FormItem) {
    const newPath =
      (this.sharedDataService.dedicatedMode
        ? "checkin-workpermit/"
        : "tabs/current-checkin/checkin-workpermit/") + item.formFolderID;
    this.dynamicRouteService.addDynamicRoute(
      newPath,
      CheckinWorkpermitPage,
      true
    );
    this.navCtrl.navigateForward([newPath], {
      queryParams: { itemDetail: JSON.stringify(item) },
    });
  }
}
