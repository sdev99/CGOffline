import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-modal-header",
  templateUrl: "./modal-header.component.html",
  styleUrls: ["./modal-header.component.scss"],
})
export class ModalHeaderComponent implements OnInit {
  @Input() modalTitle: string;

  @Output() closeModal = new EventEmitter<string>();

  showCloseButton = true;
  constructor() {
    if (environment.isWebApp) {
      this.showCloseButton = false;
    }
  }

  ngOnInit() {}
}
