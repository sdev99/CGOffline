import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DemoDataService } from "../../services/demo-data.service";
import { UtilService } from "../../services/util.service";
import { NavController } from "@ionic/angular";
import { AccountService } from "../../services/account.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { EnumService } from "src/app/services/enum.service";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { IAuthAction, AuthActions, AuthService } from "ionic-appauth";
import { environment } from "src/environments/environment";

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

  languages = DemoDataService.languages.clone();

  constructor(
    private auth: AuthService,
    public route: ActivatedRoute,
    public utilService: UtilService,
    public accountService: AccountService,
    public sharedDataService: SharedDataService,
    public translateService: TranslateService,
    public navCtrl: NavController
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

  ngOnInit() {
    // this.sub = this.auth.events$.subscribe((action) =>
    //   this.onSignInSuccess(action)
    // );
    // this.auth.addActionListener(this.onSignInSuccess);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  async onSubmit() {
    this.isSubmitted = true;
    this.errorMsg = "";

    if (this.myForm.valid) {
      const email = this.myForm.controls.email.value;
      this.utilService.presentLoadingWithOptions();

      this.accountService.checkOktaEnable(email).subscribe(
        (isOktaEnabled) => {
          this.utilService.hideLoading();
          if (isOktaEnabled) {
            this.loginWithOkta();
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

  async loginWithOkta() {
    this.auth.signIn({ audience: environment.auth_config.audience });
  }

  private onSignInSuccess = (action: IAuthAction) => {
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
          this.errorMsg = message;
        }
      );
    } else if (
      action.action === AuthActions.SignInFailed ||
      action.action === AuthActions.LoadUserInfoFailed
    ) {
      this.utilService.hideLoading();
      this.errorMsg = action.error;
    }
  };
}
