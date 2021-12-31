import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { SharedDataService } from "../services/shared-data.service";
import { NavController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private navController: NavController,
    private sharedDataService: SharedDataService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.sharedDataService.accountServiceRef?.userValue;
    if (this.sharedDataService.dedicatedMode) {
      if (this.sharedDataService.dedicatedModeLocationUse) {
        return true;
      } else {
        this.navController.navigateRoot(["/choose-location"], {
          replaceUrl: true,
        });
        return false;
      }
    } else if (user) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
