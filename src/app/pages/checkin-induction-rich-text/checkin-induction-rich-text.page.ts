import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { DemoDataService } from "../../services/demo-data.service";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../../services/shared-data.service";
import { InductionItem } from "../../_models/inductionItem";
import { UtilService } from "../../services/util.service";
import { EnumService } from "../../services/enum.service";
import { AccountService } from "../../services/account.service";
import { User } from "../../_models";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-checkin-induction-rich-text",
  templateUrl: "./checkin-induction-rich-text.page.html",
  styleUrls: ["./checkin-induction-rich-text.page.scss"],
})
export class CheckinInductionRichTextPage implements OnInit {
  user: User;

  inductionItem: InductionItem;

  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public sharedDataService: SharedDataService,
    public utilService: UtilService,
    public accountService: AccountService,
    public sanitizer: DomSanitizer
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
      }
    });
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
}
