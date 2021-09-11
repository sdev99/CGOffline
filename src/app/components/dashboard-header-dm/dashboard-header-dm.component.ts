import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuController, ModalController, NavController } from "@ionic/angular";
import { SharedDataService } from "../../services/shared-data.service";
import { ObservablesService } from "../../services/observables.service";
import { EnumService } from "../../services/enum.service";
import { HomeExitDmPage } from "../../modals/home-exit-dm/home-exit-dm.page";
import { AccountService } from "../../services/account.service";
import { UtilService } from "src/app/services/util.service";
import { Network } from "@capacitor/core";

@Component({
  selector: "app-dashboard-header-dm",
  templateUrl: "./dashboard-header-dm.component.html",
  styleUrls: ["./dashboard-header-dm.component.scss"],
})
export class DashboardHeaderDmComponent implements OnInit {
  @Input() title = "";

  isSycronizationNeeded = false;
  isSyncButtonDisabled = false;

  constructor(
    public navController: NavController,
    public modalController: ModalController,
    private menu: MenuController,
    public sharedDataService: SharedDataService,
    public accountService: AccountService,
    public observablesService: ObservablesService
  ) {
    this.isSycronizationNeeded = UtilService.isOfflineSycronizarionNeeded();
  }

  ngOnInit() {
    this.checkForNetwork();
    Network.addListener("networkStatusChange", (status) => {
      this.checkForNetwork();
    });
  }

  ngOnDestroy(): void {
    Network.removeAllListeners();
  }

  checkForNetwork = async () => {
    const ntstatus = await Network.getStatus();
    this.isSyncButtonDisabled = !ntstatus.connected;
  };

  async syncClick() {
    this.navController.navigateForward("device-sync-dm");
  }

  infoClick() {
    this.menu.open("infoMenu");
  }

  async logoutClick() {
    const modal = await this.modalController.create({
      component: HomeExitDmPage,
      cssClass: "home-exit-dm",
      componentProps: {
        title: "Exit",
        description:
          "You are about to exit this location that this device is dedicated for at the moment.\n" +
          "Are you sure you want to exit?",
        okBtnText: "Yes",
        cancelBtnText: "Cancel",
      },
    });
    await modal.present();

    modal.onWillDismiss().then(({ data }) => {
      if (data) {
        this.sharedDataService.resetAllSharedVariable();
        localStorage.removeItem(
          EnumService.LocalStorageKeys.DEDICATED_MODE_LOCATION_USE
        );
        this.navController.navigateRoot("choose-location");
      }
    });
  }
}
