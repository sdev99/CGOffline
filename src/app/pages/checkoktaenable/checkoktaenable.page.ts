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
import { AuthService } from "ionic-appauth";
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

  ngOnInit() {}

  ngOnDestroy() {}

  async onSubmit() {
    this.isSubmitted = true;
    this.errorMsg = "";

    if (this.myForm.valid) {
      const email = this.myForm.controls.email.value;
      this.utilService.presentLoadingWithOptions();

      this.accountService.checkOktaEnable(email).subscribe(
        ({ isOktaEnabled, okta_Mobile_ClientID, okta_Mobile_ServerHost }) => {
          this.utilService.hideLoading();
          if (isOktaEnabled) {
            this.auth.authConfig.server_host = okta_Mobile_ServerHost;
            this.auth.authConfig.client_id = okta_Mobile_ClientID;
            localStorage.setItem(
              EnumService.LocalStorageKeys.COMPANY_OKTA_DETAILS,
              JSON.stringify({ okta_Mobile_ClientID, okta_Mobile_ServerHost })
            );

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
}
