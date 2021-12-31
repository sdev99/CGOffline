import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-checkin-success",
  templateUrl: "./checkin-success.page.html",
  styleUrls: ["./checkin-success.page.scss"],
})
export class CheckinSuccessPage implements OnInit {
  message = "";
  nextPage = "/tabs/dashboard";
  actionBtnTitle = "";
  title = "";
  description = "";

  constructor(
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public translateService: TranslateService
  ) {
    this.translateService
      .get([
        "SHARED_TEXT.CONTINUE",
        "PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_HAVE_NOW_CHECKEDIN",
      ])
      .subscribe((res) => {
        if (!this.actionBtnTitle) {
          this.actionBtnTitle = res["SHARED_TEXT.CONTINUE"];
        }
        if (!this.message) {
          this.message =
            res["PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.YOU_HAVE_NOW_CHECKEDIN"];
        }
      });

    this.activatedRoute.queryParams.subscribe((res) => {
      if (res) {
        if (res.message) {
          this.message = res.message;
        }
        if (res.actionBtnTitle) {
          this.actionBtnTitle = res.actionBtnTitle;
        }
        if (res.title) {
          this.title = res.title;
        }
        if (res.description) {
          this.description = res.description;
        }
        if (res.nextPage) {
          this.nextPage = res.nextPage;
        }
      }
    });
  }

  ngOnInit() {}

  onClose() {
    this.navCtrl.back();
  }

  onContinue() {
    this.navCtrl.navigateBack([this.nextPage]);
  }
}
