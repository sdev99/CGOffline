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
import { StaticDataService } from "../../services/static-data.service";
import { Capacitor } from "@capacitor/core";

@Component({
  selector: "app-checkin-induction-video-file",
  templateUrl: "./checkin-induction-video-file.page.html",
  styleUrls: ["./checkin-induction-video-file.page.scss"],
})
export class CheckinInductionVideoFilePage implements OnInit {
  user: User;
  StaticDataService = StaticDataService;

  inductionItem: InductionItem;
  videoUrl: string = "";
  videoFileType: string = "";

  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public sharedDataService: SharedDataService,
    public utilService: UtilService,
    public accountService: AccountService,
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

        const extension = this.inductionItem.documentFileName
          .split(".")
          ?.pop()
          ?.toLowerCase();
        this.videoFileType = StaticDataService.fileMimeTypes[extension];

        if (this.sharedDataService.offlineMode) {
          if (this.inductionItem.documentFileName) {
            this.ngZone.run(() => {
              setTimeout(() => {
                this.videoUrl = Capacitor.convertFileSrc(
                  this.utilService.getOfflineFileUrl(
                    this.inductionItem.documentFileName,
                    "document"
                  )
                );
              }, 0);
            });
          }
        } else {
          this.videoUrl =
            sharedDataService.globalDirectories.documentDirectory +
            this.inductionItem.documentFileName;
        }
      }
    });
  }

  ionViewWillLeave() {
    this.stopVideoPlay();
  }

  ngOnInit() {}

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

  stopVideoPlay() {
    const iframes = document.getElementsByTagName("iframe");
    if (iframes != null) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src; // causes a reload so it stops playing, music, video, etc.
        iframes[i].contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "stopVideo",
          }),
          "*"
        );
      }
    }
  }

  onContinue() {
    this.stopVideoPlay();
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
}
