import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { UtilService } from "../../services/util.service";
import { ActivatedRoute } from "@angular/router";
import { OfflineApiService } from "src/app/services/offline-api.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { OfflineManagerService } from "src/app/services/offline-manager.service";

@Component({
  selector: "app-device-offline",
  templateUrl: "./device-offline.page.html",
  styleUrls: ["./device-offline.page.scss"],
})
export class DeviceOfflinePage implements OnInit {
  UtilService = UtilService;
  isDeviceHaveOfflineData = true;

  constructor(
    public navController: NavController,
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute,
    public utilService: UtilService,
    public offlineApiService: OfflineApiService,
    public offlineManagerService: OfflineManagerService,
    public sharedDataService: SharedDataService
  ) {}

  ngOnInit() {}

  loadDataset() {}

  exitApp() {}
}
