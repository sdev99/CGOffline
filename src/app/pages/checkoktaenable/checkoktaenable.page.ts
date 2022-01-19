import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DemoDataService } from "../../services/demo-data.service";
import { UtilService } from "../../services/util.service";
import { NavController } from "@ionic/angular";
import { AccountService } from "../../services/account.service";
// import { OktaAuthStateService } from "@okta/okta-angular";
import { oktaAuth } from "src/app/app.module";
import { SharedDataService } from "src/app/services/shared-data.service";
import { EnumService } from "src/app/services/enum.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-checkoktaenable",
  templateUrl: "./checkoktaenable.page.html",
  styleUrls: ["./checkoktaenable.page.scss"],
})
export class CheckoktaenablePage implements OnInit {
  errorMsg = "";
  isSubmitted = false;
  myForm: FormGroup;

  languages = DemoDataService.languages.clone();

  constructor(
    public utilService: UtilService,
    public accountService: AccountService,
    public sharedDataService: SharedDataService,
    public translateService: TranslateService,
    public navCtrl: NavController
  ) {
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
    oktaAuth
      .getUser()
      .then((res) => {
        console.log("Okta User Success", res);
        this.utilService.presentLoadingWithOptions();

        this.accountService.oktaUserSignIn(res.email).subscribe(
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
      })
      .catch((error) => {
        console.log("Okta User error", error);
      });
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
    oktaAuth
      .signInWithRedirect({
        originalUri: "/checkoktaenable",
      })
      .then((res) => {
        debugger;
      })
      .catch((error) => {
        debugger;
      });
  }
}
