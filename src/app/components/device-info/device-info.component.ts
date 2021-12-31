import { Component, OnDestroy, OnInit } from "@angular/core";
import { PluginListenerHandle, Plugins } from "@capacitor/core";
import { MenuController, NavController } from "@ionic/angular";
import { SharedDataService } from "../../services/shared-data.service";
import { UtilService } from "../../services/util.service";
import { EnumService } from "../../services/enum.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { ObservablesService } from "src/app/services/observables.service";

const { Network } = Plugins;

@Component({
  selector: "app-device-info",
  templateUrl: "./device-info.component.html",
  styleUrls: ["./device-info.component.scss"],
})
export class DeviceInfoComponent implements OnInit, OnDestroy {
  networkChangeListner: PluginListenerHandle;

  isOnline = true;
  UtilService = UtilService;
  isSycronizationNeeded = false;

  lastSyncDateTime: string;

  constructor(
    private menu: MenuController,
    public navController: NavController,
    public sharedDataService: SharedDataService,
    public offlineManagerService: OfflineManagerService,
    public observablesService: ObservablesService
  ) {
    this.offlineManagerService.dbSetUp();
    this.observablesService
      .getObservable(EnumService.ObserverKeys.OFFLINE_MODE_CHANGE)
      .subscribe((res) => {
        this.checkForNetwork();
      });
  }

  ngOnInit() {
    this.checkForNetwork();
    this.networkChangeListner = Network.addListener(
      "networkStatusChange",
      (status) => {
        console.log("Network status changed", status);
        this.checkForNetwork();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.networkChangeListner) {
      this.networkChangeListner.remove();
    }
  }

  ionViewWillEnter() {
    this.checkForNetwork();
  }

  checkForNetwork = async () => {
    const ntstatus = await Network.getStatus();
    this.isOnline = ntstatus.connected;

    this.offlineManagerService.shouldOnlyUseInOfflineMode().then((res) => {
      if (res) {
        this.isSycronizationNeeded = true;
      } else {
        this.isSycronizationNeeded = false;
      }
    });

    const dateTime = localStorage.getItem(
      EnumService.LocalStorageKeys.SYNC_DATE_TIME
    );
    this.lastSyncDateTime = dateTime || "";
  };

  menuWillOpen() {
    this.checkForNetwork();
  }

  closeInfoMenu() {
    this.menu.close("infoMenu");
  }

  async syncClick() {
    this.closeInfoMenu();
    this.navController.navigateForward("device-sync-dm", {
      queryParams: {
        startSync: true,
      },
    });
  }
}
