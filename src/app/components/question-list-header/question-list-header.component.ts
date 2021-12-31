import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
} from "@angular/core";
import { FormControlName, FormGroup } from "@angular/forms";
import { UtilService } from "../../services/util.service";
import { AttachmentItem } from "../../_models/attachmentItem";
import { SharedDataService } from "../../services/shared-data.service";
import { FilehandlerService } from "../../services/filehandler.service";
import { StaticDataService } from "src/app/services/static-data.service";
import { Capacitor } from "@capacitor/core";

@Component({
  selector: "app-question-list-header",
  templateUrl: "./question-list-header.component.html",
  styleUrls: ["./question-list-header.component.scss"],
})
export class QuestionListHeaderComponent implements OnInit {
  UtilService = UtilService;

  @Input() qNo: number;
  @Input() attachments: Array<any>;
  @Input() questionTitle: string;
  @Input() note: string;
  @Input() attachmentIcon: string;
  @Input() required: boolean;
  @Input() isError: boolean;

  imageTypeAttachments: any = [];

  constructor(
    public sharedDataService: SharedDataService,
    private filehandlerService: FilehandlerService,
    private utilService: UtilService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    let attachmentsList = [];

    this.attachments.forEach((attachment) => {
      const isImageType = UtilService.IsFileImageType(attachment.fileExtension);

      if (isImageType) {
        if (this.sharedDataService.offlineMode) {
          attachmentsList.push(
            Capacitor.convertFileSrc(
              this.utilService.getOfflineFileUrl(
                attachment.fileName,
                "document"
              )
            )
          );
        } else {
          attachmentsList.push(
            this.sharedDataService.globalDirectories.documentDirectory +
              "" +
              attachment.fileName
          );
        }
      }
    });

    this.ngZone.run(() => {
      setTimeout(() => {
        this.imageTypeAttachments = attachmentsList;
      }, 0);
    });
  }

  openFile(attachment) {
    if (this.sharedDataService.offlineMode) {
      const filrUrl = this.utilService.getOfflineFileUrl(
        attachment.fileName,
        "document"
      );
      this.filehandlerService.openDownloadedFile(filrUrl, attachment.fileName);
    } else {
      if (
        this.sharedDataService.globalDirectories &&
        this.sharedDataService.globalDirectories.documentDirectory &&
        attachment &&
        attachment.fileName
      ) {
        this.filehandlerService.openFile(
          this.sharedDataService.globalDirectories.documentDirectory +
            "" +
            attachment.fileName
        );
      }
    }
  }
}
