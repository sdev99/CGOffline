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
import { ApiService } from "src/app/services/api.service";

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
    private apiService: ApiService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    const images = this.attachments.filter((attachment) =>
      UtilService.IsFileImageType(attachment.fileExtension)
    );

    if (images.length > 0) {
      const attachmentsList = [];

      if (this.sharedDataService.offlineMode) {
        images.forEach((attachment) => {
          attachmentsList.push(
            Capacitor.convertFileSrc(
              this.utilService.getOfflineFileUrl(
                attachment.fileName,
                "document"
              )
            )
          );
        });

        this.ngZone.run(() => {
          setTimeout(() => {
            this.imageTypeAttachments = attachmentsList;
          }, 0);
        });
      } else {
        this.utilService.presentLoadingWithOptions();

        let pathSuccessFailCount = 0;
        const onPathSuccessOrFail = () => {
          pathSuccessFailCount++;
          if (pathSuccessFailCount === images.length) {
            this.utilService.hideLoading();

            this.ngZone.run(() => {
              setTimeout(() => {
                this.imageTypeAttachments = attachmentsList;
              }, 0);
            });
          }
        };
        images.forEach((attachment) => {
          this.apiService
            .getDocumentDirectoryFilePath(attachment.fileName)
            .subscribe(
              (path) => {
                attachmentsList.push(path);
                onPathSuccessOrFail();
              },
              (err) => {
                onPathSuccessOrFail();
              }
            );
        });
      }
    }
  }

  openFile(attachment) {
    if (this.sharedDataService.offlineMode) {
      const filrUrl = this.utilService.getOfflineFileUrl(
        attachment.fileName,
        "document"
      );
      this.filehandlerService.openDownloadedFile(filrUrl, attachment.fileName);
    } else {
      if (attachment && attachment.fileName) {
        this.utilService.presentLoadingWithOptions();
        this.apiService
          .getDocumentDirectoryFilePath(attachment.fileName)
          .subscribe(
            (path) => {
              this.utilService.hideLoading();
              this.filehandlerService.openFile(path);
            },
            (err) => {
              this.utilService.hideLoading();
            }
          );
      }
    }
  }
}
