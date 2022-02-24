import { Component, NgZone, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { DemoDataService } from "../../services/demo-data.service";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../../services/shared-data.service";
import { InductionItem } from "../../_models/inductionItem";
import { UtilService } from "../../services/util.service";
import { EnumService } from "../../services/enum.service";
import { AccountService } from "../../services/account.service";
import { User } from "../../_models";
import { FilehandlerService } from "../../services/filehandler.service";
import { StaticDataService } from "src/app/services/static-data.service";
import { Capacitor } from "@capacitor/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-checkin-induction-image-file",
  templateUrl: "./checkin-induction-image-file.page.html",
  styleUrls: ["./checkin-induction-image-file.page.scss"],
})
export class CheckinInductionImageFilePage implements OnInit {
  user: User;

  inductionItem: InductionItem;
  imageUrl: string = "";
  imageMimeType: string = "";

  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public sharedDataService: SharedDataService,
    public utilService: UtilService,
    public accountService: AccountService,
    public filehandlerService: FilehandlerService,
    public apiService: ApiService,
    public ngZone: NgZone
  ) {
    if (!sharedDataService.dedicatedMode) {
      this.user = accountService.userValue;
    }

    this.route.queryParams.subscribe((parameters) => {
      const inductionContentItemIndex = parameters.inductionContentItemIndex;
      if (
        this.sharedDataService.checkInDetail?.checkInInductionItems?.length >
        inductionContentItemIndex
      ) {
        this.inductionItem =
          this.sharedDataService.checkInDetail?.checkInInductionItems[
            inductionContentItemIndex
          ];
        if (this.sharedDataService.offlineMode) {
          if (this.inductionItem.documentFileName) {
            this.ngZone.run(() => {
              setTimeout(() => {
                this.imageUrl = Capacitor.convertFileSrc(
                  this.utilService.getOfflineFileUrl(
                    this.inductionItem.documentFileName,
                    "document"
                  )
                );
              }, 0);
            });
          }
        } else {
          this.imageUrl = this.inductionItem.documentFileNameWithPath;
        }
      }
    });
  }

  ngOnInit() {}

  ionViewWillLeave() {
    try {
      this.filehandlerService.removeSavedFile(
        this.inductionItem.documentFileName
      );
    } catch (error) {}
  }

  onBack() {
    this.navCtrl.back();
  }

  onClose() {
    if (this.sharedDataService.dedicatedMode) {
      this.navCtrl.navigateRoot("dashboard-dm", { replaceUrl: true });
    } else {
      this.navCtrl.navigateBack("/checkinout-confirm", { replaceUrl: true });
    }
  }

  onContinue() {
    let userId;
    if (this.sharedDataService.dedicatedMode) {
      userId = this.sharedDataService.dedicatedModeUserDetail?.userId;
    } else {
      userId = this.user?.userId;
    }
    this.sharedDataService.inductionNavigationProcess(
      userId,
      this.sharedDataService.inductionContentItemIndex
    );
  }

  fullScreenImg() {
    this.filehandlerService.openFile(this.inductionItem.documentFileNameWithPath, true);

   
  }
}
