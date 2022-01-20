import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthActions, IAuthAction, AuthService } from "ionic-appauth";
import { Subscription } from "rxjs";
import { AccountService } from "src/app/services/account.service";
import { UtilService } from "src/app/services/util.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { EnumService } from "src/app/services/enum.service";

@Component({
  selector: "app-okta-auth-callback",
  templateUrl: "./okta-auth-callback.page.html",
  styleUrls: ["./okta-auth-callback.page.scss"],
})
export class OktaAuthCallbackPage implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(
    private auth: AuthService,
    private navCtrl: NavController,
    private router: Router,
    public accountService: AccountService,
    public utilService: UtilService,
    public sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.auth.addActionListener(this.postCallback);
    this.auth.authorizationCallback(window.location.origin + this.router.url);
  }

  ngOnDestroy() {}

  postCallback = (action: IAuthAction) => {
    if (action.action === AuthActions.SignInSuccess) {
      this.utilService.presentLoadingWithOptions();
      this.auth.loadUserInfo();
    } else if (action.action === AuthActions.LoadUserInfoSuccess) {
      this.accountService.oktaUserSignIn(action.user?.email).subscribe(
        (user) => {
          this.utilService.hideLoading();
          if (user) {
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
    } else if (
      action.action === AuthActions.LoadUserInfoFailed ||
      action.action === AuthActions.SignInFailed
    ) {
      this.utilService.hideLoading();

      this.navCtrl.navigateRoot("checkoktaenable", {
        queryParams: { message: action.error },
      });
    }
  };
}
