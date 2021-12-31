import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Capacitor, FilesystemDirectory } from "@capacitor/core";
import { File } from "@ionic-native/file/ngx";
import { SharedDataService } from "src/app/services/shared-data.service";

@Component({
  selector: "app-archived-item",
  templateUrl: "./archived-item.component.html",
  styleUrls: ["./archived-item.component.scss"],
})
export class ArchivedItemComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() icon: string;
  @Input() colFirst: string;
  @Input() colSecond: string;
  @Input() colSecondHighlighted: string;
  @Input() colThird: string;
  @Input() colThirdHighlighted: string;
  @Output() itemSelect = new EventEmitter<void>();

  constructor(
    private sharedDataService: SharedDataService,
    private file: File
  ) {}

  ngOnInit() {}
}
