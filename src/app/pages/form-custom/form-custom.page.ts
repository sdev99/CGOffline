import { Component, NgZone, ViewChild } from '@angular/core';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { DemoDataService } from '../../services/demo-data.service';
import { PhotoService } from '../../services/photo.service';
import { SharedDataService } from '../../services/shared-data.service';
import { ExitConfirmationPage } from '../../modals/exit-confirmation/exit-confirmation.page';
import { FormGroup } from '@angular/forms';
import { EnumService } from '../../services/enum.service';
import { ActivatedRoute } from '@angular/router';
import { ObservablesService } from '../../services/observables.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AccountService } from '../../services/account.service';
import { User } from '../../_models';
import { UtilService } from '../../services/util.service';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-form-custom',
	templateUrl: './form-custom.page.html',
	styleUrls: ['./form-custom.page.scss'],
})
export class FormCustomPage {
	@ViewChild(IonContent) content: IonContent;
	EnumService = EnumService;
	UtilService = UtilService;
	user: User;

	errorMessage = '';

	isSubmitted = false;
	formGroup: FormGroup;

	list = DemoDataService.activityCustomForm.clone();
	answer = {};

	totalPage = 32;

	screenOrientationSubscribe;
	isShowOritationPortrait = false;

	formBuilderDetail;

	questionElementIds = [];
	currentQuestionIndex = 0;
	scrollingDetail: any;

	constructor(
		public navCtrl: NavController,
		public photoService: PhotoService,
		public sharedDataService: SharedDataService,
		public observablesService: ObservablesService,
		public modalController: ModalController,
		public route: ActivatedRoute,
		private screenOrientation: ScreenOrientation,
		private ngZone: NgZone,
		private apiService: ApiService,
		public utilService: UtilService,
		public accountService: AccountService
	) {
		this.user = accountService.userValue;

		if (sharedDataService.formBuilderDetails) {
			this.formBuilderDetail = sharedDataService.formBuilderDetails;
		}

		// Dynamic form controls add
		this.formGroup = new FormGroup({});
		const sections = this.formBuilderDetail.sections;
		this.utilService.questionElementIdsUpdate = (questionElementIds) => {
			this.questionElementIds = questionElementIds;
		};
		this.utilService.addFormControlsForVisibleFields(sections, this.formGroup);
		// --End
	}

	handleOrientation = () => {
		if (this.sharedDataService.dedicatedMode) {
			if (this.screenOrientation.type.includes('landscape')) {
				this.screenOrientation.unlock();
				this.isShowOritationPortrait = true;
			} else {
				if (!UtilService.isLocalHost()) {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
				}
			}

			this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
				this.ngZone.run(() => {
					if (this.screenOrientation.type.includes('portrait')) {
						if (!UtilService.isLocalHost()) {
							this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
						}
						this.isShowOritationPortrait = false;
					}
					if (this.screenOrientation.type.includes('landscape')) {
						this.isShowOritationPortrait = true;
					}
				});
			});
		}
	};

	ionViewDidEnter() {
		this.sharedDataService.isOpenSubScreen = false;
	}

	ionViewWillEnter() {
		this.handleOrientation();
	}

	ionViewDidLeave(): void {
		if (this.sharedDataService.dedicatedMode) {
			if (!this.sharedDataService.isOpenSubScreen) {
				if (!UtilService.isLocalHost()) {
					this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
					this.screenOrientationSubscribe.unsubscribe();
				}
			}
		}
	}

	async onClose() {
		const modal = await this.modalController.create({
			component: ExitConfirmationPage,
			swipeToClose: false,
			showBackdrop: false,
			backdropDismiss: false,
			animated: true,
			componentProps: {},
		});
		await modal.present();

		modal.onWillDismiss().then(({ data }) => {
			if (data) {
				this.onBack();
			}
		});
	}

	onBack() {
		if (this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction) {
			if (this.sharedDataService.dedicatedMode) {
				this.navCtrl.navigateBack('/checkinout-option-dm');
			} else {
				this.navCtrl.navigateBack('/checkinout-confirm');
			}
		} else {
			this.navCtrl.back();
		}
	}

	onSubmit() {
		this.isSubmitted = true;
		this.errorMessage = '';

		this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, (status, result) => {
			if (status) {
			} else {
				this.errorMessage = result;
				this._scrollToTop();
			}
		});
	}

	_scrollToTop() {
		this.content.scrollToTop(200);
	}

	// Navigate to question
	previous() {
		if (this.currentQuestionIndex > 0) {
			this.currentQuestionIndex--;
			this.scrollToQuestion();
		}
	}

	next() {
		if (this.currentQuestionIndex < this.questionElementIds.length - 1) {
			this.currentQuestionIndex++;
			this.scrollToQuestion();
		}
	}

	onScrollEnd = (event) => {
		if (this.scrollingDetail) {
			const scrollTop = this.scrollingDetail.scrollTop;
			if (scrollTop === 0) {
				this.currentQuestionIndex = 0;
			} else {
				this.questionElementIds.map((elementId, key) => {
					const y = document.getElementById(elementId)?.offsetTop;
					if (scrollTop >= y) {
						this.currentQuestionIndex = key;
						return;
					}
				});
			}
		}
	};

	onScroll = (event) => {
		this.scrollingDetail = event.detail;
	};

	scrollToQuestion = () => {
		const elementId = this.questionElementIds[this.currentQuestionIndex];
		const y = document.getElementById(elementId)?.offsetTop;
		this.content.scrollToPoint(0, y, 500);
	};

	// -- End -- Navigate to question
}
