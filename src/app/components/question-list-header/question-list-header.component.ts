import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import {AttachmentItem} from '../../_models/attachmentItem';
import {SharedDataService} from '../../services/shared-data.service';
import {FilehandlerService} from '../../services/filehandler.service';

@Component({
    selector: 'app-question-list-header',
    templateUrl: './question-list-header.component.html',
    styleUrls: ['./question-list-header.component.scss'],
})
export class QuestionListHeaderComponent implements OnInit {
    UtilService = UtilService;

    @Input() qNo: number;
    @Input() attachments: Array<any>;
    @Input() questionTitle: string;
    @Input() note: string;
    @Input() required: boolean;
    @Input() isError: boolean;

    constructor(
        private sharedDataService: SharedDataService,
        private filehandlerService: FilehandlerService,
    ) {
    }

    ngOnInit() {
    }

    openFile(attachment) {
        if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && attachment && attachment.fileName) {
            this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + attachment.fileName);
        }
    }

}
