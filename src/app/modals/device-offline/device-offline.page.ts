import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { UtilService } from "../../services/util.service";
import { ActivatedRoute } from "@angular/router";
import { OfflineApiService } from "src/app/services/offline-api.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { EnumService } from "src/app/services/enum.service";

@Component({
  selector: "app-device-offline",
  templateUrl: "./device-offline.page.html",
  styleUrls: ["./device-offline.page.scss"],
})
export class DeviceOfflinePage implements OnInit {
  UtilService = UtilService;
  isDeviceHaveOfflineData = false;
  lastSyncDate;

  constructor(
    public navController: NavController,
    public modalController: ModalController,
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute,
    public utilService: UtilService,
    public offlineApiService: OfflineApiService,
    public offlineManagerService: OfflineManagerService,
    public sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    const syncDate = localStorage.getItem(
      EnumService.LocalStorageKeys.SYNC_DATE_TIME
    );
    this.lastSyncDate = syncDate;
    if (this.lastSyncDate) {
      this.isDeviceHaveOfflineData = true;
    } else {
      this.isDeviceHaveOfflineData = false;
    }
  }

  loadDataset() {
    this.sharedDataService.offlineMode = true;
    localStorage.setItem(
      EnumService.LocalStorageKeys.OFFLINE_MODE_ENABLE,
      "true"
    );
    this.modalController.dismiss();
  }

  closeApp() {
    try {
      navigator["app"].exitApp();
    } catch (error) {}
  }
}
