import { Component, OnInit } from "@angular/core";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-browserpairing",
  templateUrl: "./browserpairing.page.html",
  styleUrls: ["./browserpairing.page.scss"],
})
export class BrowserpairingPage implements OnInit {
  pairingCode = UtilService.uniqueIdForWebApp();

  constructor() {}

  ngOnInit() {}
}
