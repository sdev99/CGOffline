import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DemoDataService } from '../../services/demo-data.service';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { InductionItem } from '../../_models/inductionItem';
import { UtilService } from '../../services/util.service';
import { EnumService } from '../../services/enum.service';
import { AccountService } from '../../services/account.service';
import { User } from '../../_models';
import { FilehandlerService } from '../../services/filehandler.service';

@Component({
	selector: 'app-checkin-induction-image-file',
	templateUrl: './checkin-induction-image-file.page.html',
	styleUrls: ['./checkin-induction-image-file.page.scss'],
})
export class CheckinInductionImageFilePage implements OnInit {
	user: User;

	inductionItem: InductionItem;
	imageUrl = '';

	constructor(
		public navCtrl: NavController,
		public route: ActivatedRoute,
		public sharedDataService: SharedDataService,
		public utilService: UtilService,
		public accountService: AccountService,
		public filehandlerService: FilehandlerService,
		public ngZone: NgZone
	) {
		if (!sharedDataService.dedicatedMode) {
			this.user = accountService.userValue;
		}

		this.route.queryParams.subscribe((parameters) => {
			const inductionContentItemIndex = parameters.inductionContentItemIndex;
			if (this.sharedDataService.checkInDetail?.checkInInductionItems?.length > inductionContentItemIndex) {
				this.inductionItem = this.sharedDataService.checkInDetail?.checkInInductionItems[inductionContentItemIndex];
				if (this.sharedDataService.offlineMode) {
					if (this.inductionItem.document_BinaryFile) {
						this.filehandlerService.saveBinaryFileOnDevice(this.inductionItem.document_BinaryFile, this.inductionItem.documentFileName, (url) => {
							this.ngZone.run(() => {
								this.imageUrl = url;
							});
						});
					}
				} else {
					this.imageUrl = sharedDataService.globalDirectories.documentDirectory + this.inductionItem.documentFileName;
				}
			}
		});
	}

	ngOnInit() {}

	ionViewWillLeave() {
		this.filehandlerService.removeSavedFile(this.inductionItem.documentFileName);
	}

	onBack() {
		this.navCtrl.back();
	}

	onClose() {
		if (this.sharedDataService.dedicatedMode) {
			this.navCtrl.navigateRoot('dashboard-dm', { replaceUrl: true });
		} else {
			this.navCtrl.navigateBack('/checkinout-confirm', { replaceUrl: true });
		}
	}

	onContinue() {
		let userId;
		if (this.sharedDataService.dedicatedMode) {
			userId = this.sharedDataService.dedicatedModeUserDetail.userId;
		} else {
			userId = this.user?.userId;
		}
		this.sharedDataService.inductionNavigationProcess(userId, this.sharedDataService.inductionContentItemIndex);
	}

	fullScreenImg() {
		const url = this.sharedDataService.globalDirectories.documentDirectory + '' + this.inductionItem.documentFileName;
		this.filehandlerService.openFile(url, true);
	}
}
