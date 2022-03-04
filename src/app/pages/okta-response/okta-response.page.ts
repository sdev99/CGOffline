import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { AccountService } from "src/app/services/account.service";
import { EnumService } from "src/app/services/enum.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-okta-response",
  templateUrl: "./okta-response.page.html",
  styleUrls: ["./okta-response.page.scss"],
})
export class OktaResponsePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private utilService: UtilService,
    private sharedDataService: SharedDataService,
    private navCtrl: NavController
  ) {
    this.route.queryParams.subscribe((param) => {
      if (param.success === 1 || param.success === "1") {
        this.loginSuccess();
      } else if (param.success === 0 || param.success === "0") {
        this.loginError(param.error);
      }
    });
  }

  ngOnInit() {}

  loginSuccess = () => {
    const email = localStorage.getItem(
      EnumService.LocalStorageKeys.LOGIN_WITH_OKTA_FOR_EMAIL
    );
    this.utilService.presentLoadingWithOptions();
    if (email) {
      this.accountService.oktaUserSignIn(email).subscribe(
        (user) => {
          this.utilService.hideLoading();
          if (user) {
            localStorage.setItem(
              EnumService.LocalStorageKeys.LOGIN_WITH_OKTA,
              "true"
            );
            this.sharedDataService.isLoginAfterAppOpen = true;
            this.navCtrl.navigateRoot("/tabs/dashboard");
            if (
              localStorage.getItem(
                EnumService.LocalStorageKeys.PUSH_PERMISSION_ALLOWED
              ) === "true"
            ) {
              this.sharedDataService.updatePushSettingOnServer(true);
            } else {
              this.sharedDataService.updatePushSettingOnServer(false);
            }
          }
        },
        ({ message }) => {
          this.utilService.hideLoading();
          this.navCtrl.navigateRoot("checkoktaenable", {
            queryParams: { message },
          });
        }
      );
    }
  };

  loginError = (errorMessage) => {
    this.navCtrl.navigateRoot("checkoktaenable", {
      queryParams: { message: errorMessage },
    });
  };
}
