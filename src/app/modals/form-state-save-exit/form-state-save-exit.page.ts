import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";

@Component({
    selector: "app-form-state-save-exit",
    templateUrl: "./form-state-save-exit.page.html",
    styleUrls: ["./form-state-save-exit.page.scss"],
})
export class FormStateSaveExitPage implements OnInit {
    constructor(
        public navCtrl: NavController,
        public modalController: ModalController
    ) {}

    ngOnInit() {}

    onDismiss = (isConfirm) => {
        this.modalController.dismiss(isConfirm);
    };
}
