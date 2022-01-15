import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OktaAuthStateService } from "@okta/okta-angular";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.page.html",
  styleUrls: ["./callback.page.scss"],
})
export class CallbackPage implements OnInit {
  constructor(public route: ActivatedRoute) {
    console.log("CallbackPage");
    route.queryParams.subscribe((res) => {
      console.log("CallbackPage Res", res);
      debugger;
    });
  }

  ngOnInit() {}
}
