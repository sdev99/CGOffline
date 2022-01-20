import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { NavController } from "@ionic/angular";
import { AuthService, AuthActions } from "ionic-appauth";
import { Observable } from "rxjs";
import { filter, switchMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private navCtrl: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    this.auth
      .loadTokenFromStorage()
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      })
      .finally(() => {
        return false;
      });
    return false;
  }

  // public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //
  // }
}
