import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { UtilService } from '../../services/util.service';
import { AttachmentItem } from '../../_models/attachmentItem';
import { SharedDataService } from '../../services/shared-data.service';
import { FilehandlerService } from '../../services/filehandler.service';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
	selector: 'app-question-list-header',
	templateUrl: './question-list-header.component.html',
	styleUrls: ['./question-list-header.component.scss'],
})
export class QuestionListHeaderComponent {
	UtilService = UtilService;

	@Input() qNo: number;
	@Input() attachments: Array<any>;
	@Input() questionTitle: string;
	@Input() note: string;
	@Input() attachmentIcon: string;
	@Input() attachmentIconBinaryFile: string; // For offline mode
	@Input() required: boolean;
	@Input() isError: boolean;

	constructor(public sharedDataService: SharedDataService, private filehandlerService: FilehandlerService) {
		if (this.sharedDataService.offlineMode && this.attachments?.length > 0) {
			const extension = this.attachments[0].fileExtension || this.attachments[0].documentFileFormat;
			const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];
			this.attachmentIcon = 'data:' + mimeType + ';base64,' + (this.attachmentIconBinaryFile ? this.attachmentIconBinaryFile : this.attachments[0].documentIcon_BinaryFile);
		}
	}

	getImageTypeFile = (attachment) => {
		if (this.sharedDataService.offlineMode) {
			const extension = attachment.fileExtension;
			const mimeType = StaticDataService.fileMimeTypes[extension.toLowerCase()];
			const base64 = 'data:' + mimeType + ';base64,' + attachment.fileName_BinaryFile;
			return base64;
		}
		return this.sharedDataService.globalDirectories.documentDirectory + '' + attachment.fileName;
	};

	openFile(attachment) {
		if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && attachment && attachment.fileName) {
			if (this.sharedDataService.offlineMode) {
				const fileName_BinaryFile = attachment.fileName_BinaryFile;
				const fileName = attachment.fileName;
				this.filehandlerService.saveAndOpenFile(fileName_BinaryFile, fileName);
			} else {
				this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + attachment.fileName);
			}
		}
	}
}
