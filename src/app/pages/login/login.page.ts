import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data.service';
import { UtilService } from '../../services/util.service';
import { DemoDataService } from '../../services/demo-data.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { EnumService } from '../../services/enum.service';
import { AccountService } from '../../services/account.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	UtilService = UtilService;
	errorMessage = '';
	isSubmitted = false;
	loginForm: FormGroup;

	languages = DemoDataService.languages.clone();
	selectedLanguage = this.languages[0].code;

	constructor(
		public utilService: UtilService,
		public navCtrl: NavController,
		public actionSheetController: ActionSheetController,
		public sharedDataService: SharedDataService,
		public accountService: AccountService,
		private translateService: TranslateService
	) {
		this.selectedLanguage = localStorage.getItem(EnumService.LocalStorageKeys.APP_LANGUAGE);

		this.loginForm = new FormGroup({
			email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
			password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
		});
	}

	ngOnInit() {
		if (this.accountService.userValue?.userId && !this.accountService.userValue.isMobileSessionExpiration) {
			this.navCtrl.navigateRoot('/tabs/dashboard', { replaceUrl: true });
		}

		if (UtilService.isLocalHost()) {
			// setTimeout(() => {
			//     this.navCtrl.navigateRoot('/new-account-setup', {replaceUrl: true});
			// }, 3000);
		}
	}

	async openLanguages() {
		this.translateService.get('COMMON.CANCEL').subscribe(async (res) => {
			const buttons = [];
			this.languages.map((item) => {
				buttons.push({
					text: item.name,
					handler: () => {
						this.selectedLanguage = item.code;
						localStorage.setItem(EnumService.LocalStorageKeys.APP_LANGUAGE, this.selectedLanguage);
						this.translateService.use(this.selectedLanguage);
					},
				});
			});

			buttons.push({
				text: res,
				role: 'cancel',
				handler: () => {},
			});

			const actionSheet = await this.actionSheetController.create({
				cssClass: 'my-custom-class',
				buttons,
			});
			await actionSheet.present();
		});
	}

	async onSubmit() {
		this.isSubmitted = true;
		this.errorMessage = '';

		if (this.loginForm.valid) {
			const email = this.loginForm.controls.email.value;
			const password = this.loginForm.controls.password.value;

			this.utilService.presentLoadingWithOptions();

			this.accountService.login(email, password).subscribe(
				(data) => {
					this.utilService.hideLoading();
					this.sharedDataService.isLoginAfterAppOpen = true;

					this.navCtrl.navigateRoot('/tabs/dashboard');

					if (localStorage.getItem(EnumService.LocalStorageKeys.PUSH_PERMISSION_ALLOWED) === 'true') {
						this.sharedDataService.updatePushSettingOnServer(true);
					} else {
						this.sharedDataService.updatePushSettingOnServer(false);
					}
				},
				({ message }) => {
					this.utilService.hideLoading();
					this.errorMessage = message;
				}
			);
		}
	}
}
