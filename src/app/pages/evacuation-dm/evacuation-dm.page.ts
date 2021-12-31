import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { DemoDataService } from "../../services/demo-data.service";
import { HomeExitDmPage } from "../../modals/home-exit-dm/home-exit-dm.page";
import { SharedDataService } from "../../services/shared-data.service";
import { Response } from "../../_models";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { EnumService } from "../../services/enum.service";
import { EvacuationUserDetail } from "../../_models/evacuationUserDetail";
import { OfflineManagerService } from "src/app/services/offline-manager.service";

@Component({
  selector: "app-evacuation-dm",
  templateUrl: "./evacuation-dm.page.html",
  styleUrls: ["./evacuation-dm.page.scss"],
})
export class EvacuationDmPage implements OnInit {
  UtilService = UtilService;
  EnumService = EnumService;

  evacuatedList: Array<EvacuationUserDetail> = [];
  searchUser;
  searchEvacuatedUser;

  evacuationList: Array<EvacuationUserDetail> = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public navController: NavController,
    public modalController: ModalController,
    public sharedDataService: SharedDataService,
    public offlineManagerService: OfflineManagerService,
    public apiService: ApiService,
    public utilService: UtilService
  ) {}

  ngOnInit() {
    this.getEvacuationList();
  }

  getEvacuationList() {
    if (this.sharedDataService.offlineMode) {
      this.offlineManagerService
        .getDeviceEvacuations(this.sharedDataService.dedicatedModeLocationUse)
        .then((res) => {
          if (res) {
            this.evacuationList = res as any;
          }
        })
        .catch(() => {});
    } else {
      this.utilService.presentLoadingWithOptions();

      this.apiService.getEvacuationList().subscribe(
        (response: Response) => {
          this.utilService.hideLoading();
          if (response) {
            this.evacuationList = response.Result;
          }
        },
        (error) => {
          this.utilService.hideLoading();
        }
      );
    }
  }

  getUserPhoto(evacuationUserDetail: EvacuationUserDetail) {
    if (this.sharedDataService.offlineMode) {
      if (evacuationUserDetail.userPhoto) {
        return this.utilService.getOfflineFileUrl(
          evacuationUserDetail.userPhoto,
          "checkin"
        );
      } else if (evacuationUserDetail.userDetailPhoto) {
        return this.utilService.getOfflineFileUrl(
          evacuationUserDetail.userDetailPhoto,
          "user"
        );
      } else if (evacuationUserDetail.offlineUserPhoto) {
        return this.utilService.getOfflineFileUrl(
          evacuationUserDetail.offlineUserPhoto,
          "offline_user"
        );
      }
    } else {
      if (evacuationUserDetail.userPhoto) {
        return (
          this.sharedDataService.globalDirectories
            ?.userCheckInSignOffDirectory +
          "" +
          evacuationUserDetail.userPhoto
        );
      } else if (evacuationUserDetail.userDetailPhoto) {
        return (
          this.sharedDataService.globalDirectories?.userDirectory +
          "" +
          evacuationUserDetail.userDetailPhoto
        );
      }
    }

    return "./assets/images/ProfileNone.png";
  }

  async onClose() {
    if (this.evacuatedList && this.evacuatedList.length > 0) {
      const modal = await this.modalController.create({
        component: HomeExitDmPage,
        cssClass: "home-exit-dm",
        componentProps: {
          title: "Exit Evacuation",
          description: "Any data related to current evacuation will be lost.",
          okBtnText: "Exit Evacuation",
          cancelBtnText: "Cancel",
        },
      });
      await modal.present();

      modal.onWillDismiss().then(({ data }) => {
        if (data) {
          this.navController.back();
        }
      });
    } else {
      this.navController.back();
    }
  }

  isEvacuatedCompleted() {
    return (
      (!this.evacuationList || this.evacuationList.length === 0) &&
      this.evacuatedList &&
      this.evacuatedList.length > 0
    );
  }

  evacuateUser(item, idx) {
    this.evacuationList.splice(idx, 1);
    this.evacuatedList.push(item);
  }
}
