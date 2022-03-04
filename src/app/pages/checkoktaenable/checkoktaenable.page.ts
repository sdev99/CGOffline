import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UtilService } from "../../services/util.service";
import { NavController } from "@ionic/angular";
import { AccountService } from "../../services/account.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { EnumService } from "src/app/services/enum.service";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-checkoktaenable",
  templateUrl: "./checkoktaenable.page.html",
  styleUrls: ["./checkoktaenable.page.scss"],
})
export class CheckoktaenablePage implements OnInit, OnDestroy {
  // events$ = this.auth.events$;
  sub: Subscription;

  errorMsg = "";
  isSubmitted = false;
  myForm: FormGroup;

  constructor(
    public route: ActivatedRoute,
    public utilService: UtilService,
    public accountService: AccountService,
    public sharedDataService: SharedDataService,
    public translateService: TranslateService,
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    this.route.queryParams.subscribe((res) => {
      if (res.message) {
        this.errorMsg = res.message;
      }
    });

    this.myForm = new FormGroup({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  async onSubmit() {
    this.isSubmitted = true;
    this.errorMsg = "";

    if (this.myForm.valid) {
      const email = this.myForm.controls.email.value;
      this.utilService.presentLoadingWithOptions();

      this.accountService.checkOktaEnable(email).subscribe(
        ({ isOktaEnabled }) => {
          this.utilService.hideLoading();
          if (isOktaEnabled) {
            // this.auth.authConfig.server_host = okta_Mobile_ServerHost;
            // this.auth.authConfig.client_id = okta_Mobile_ClientID;

            this.loginWithOkta(email);
          } else {
            this.translateService
              .get("PAGESPECIFIC_TEXT.CHECK_OKTA_ENABLE.OKTA_AUTH_FAILED")
              .subscribe(async (res) => {
                this.errorMsg = res;
              });
          }
        },
        ({ message }) => {
          this.utilService.hideLoading();
          this.errorMsg = message;
        }
      );
    }
  }

  async loginWithOkta(email) {
    let loginUrl = this.sharedDataService.siteBaseUrl + "/Login/OKTA_Login?email=" + email;
    if (UtilService.isWebApp()) {
      loginUrl = loginUrl + "&returnUrl=CG_WebApp";
      localStorage.setItem(
        EnumService.LocalStorageKeys.LOGIN_WITH_OKTA_FOR_EMAIL,
        email
      );
      window.open(loginUrl, "_self");
    } else {
      loginUrl = loginUrl + "&returnUrl=CG_Mobile";

      const browser = this.iab.create(loginUrl, "_blank", {
        clearcache: "yes",
        // clearsessioncache: "yes",
        // cleardata: "yes",
      });
      browser.on("loadstart").subscribe((event) => {
        const url = event.url;

        if (url.indexOf("OktaMResponse?success=1") !== -1) {
          browser.close();

          this.utilService.presentLoadingWithOptions();

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
        } else if (url.indexOf("OktaMResponse?success=0") !== -1) {
          browser.close();

          const errorMessage = UtilService.getQueryStringValue(url, "error");
          this.navCtrl.navigateRoot("checkoktaenable", {
            queryParams: { message: errorMessage },
          });
        }
      });
    }
  }
}
