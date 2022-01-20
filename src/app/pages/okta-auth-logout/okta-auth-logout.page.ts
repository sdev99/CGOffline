import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthService } from "ionic-appauth";

@Component({
  selector: "app-okta-auth-logout",
  templateUrl: "./okta-auth-logout.page.html",
  styleUrls: ["./okta-auth-logout.page.scss"],
})
export class OktaAuthLogoutPage implements OnInit {
  constructor(private auth: AuthService, private navCtrl: NavController) {}

  ngOnInit() {
    this.auth.endSessionCallback();
    this.navCtrl.navigateRoot("login");
  }
}
