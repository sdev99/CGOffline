import { Platform } from "@ionic/angular";
import { StorageBackend, Requestor } from "@openid/appauth";
import { AuthService, Browser } from "ionic-appauth";
import { App } from "@capacitor/core";
import { environment } from "src/environments/environment";
import { NgZone } from "@angular/core";

export let authFactory = (
  platform: Platform,
  ngZone: NgZone,
  requestor: Requestor,
  browser: Browser,
  storage: StorageBackend
) => {
  const authService = new AuthService(browser, storage, requestor);
  authService.authConfig = environment.auth_config;

  if (!platform.is("cordova")) {
    authService.authConfig.redirect_url =
      window.location.origin + "/auth/callback";
    authService.authConfig.end_session_redirect_url =
      window.location.origin + "/auth/logout";
  }

  if (platform.is("capacitor")) {
    App.addListener("appUrlOpen", (data: any) => {
      console.log("AUTH_FACTORY->APP_URL_OPEN ", data);
      if (data.url !== undefined) {
        ngZone.run(() => {
          if (data.url.indexOf("auth/callback") !== -1) {
            let url = "auth/callback" + data.url.split("auth/callback").pop();
            authService.authorizationCallback(url);
          } else if (data.url.indexOf("auth/logout") !== -1) {
            authService.endSessionCallback();
          }
        });
      }
    });
  }

  return authService;
};
