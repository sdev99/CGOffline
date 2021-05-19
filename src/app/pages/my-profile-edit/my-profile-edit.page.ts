import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../../services/util.service';
import { User, Response } from '../../_models';
import { Profile } from '../../_models/profile';
import { AccountService } from '../../services/account.service';
import { SharedDataService } from '../../services/shared-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-my-profile-edit',
	templateUrl: './my-profile-edit.page.html',
	styleUrls: ['./my-profile-edit.page.scss'],
})
export class MyProfileEditPage implements OnInit {
	errorMsg = '';
	isSubmitted = false;
	profileForm: FormGroup;

	timeZones = [];
	languages = [];

	user: User;
	profile: Profile;

	constructor(
		public navCtrl: NavController,
		private accountService: AccountService,
		public sharedDataService: SharedDataService,
		public utilService: UtilService,
		public translateService: TranslateService,
		public ngZone: NgZone
	) {
		this.user = accountService.userValue;
		this.profile = sharedDataService.userProfile;

		this.timeZones = sharedDataService.timeZoneList.clone();
		this.languages = sharedDataService.companyLanguageList.clone();

		this.profileForm = new FormGroup({
			email: new FormControl(this.profile.email),
			phone: new FormControl(this.profile.phone),
			timezone: new FormControl(this.profile.timeZoneID, Validators.compose([Validators.required, Validators.minLength(2)])),
			language: new FormControl(this.profile.mobileAppLanguageID, Validators.compose([Validators.required, Validators.minLength(2)])),
		});
	}

	ngOnInit() {}

	onClose() {
		this.navCtrl.back();
	}

	async onSubmit() {
		this.isSubmitted = true;
		this.errorMsg = '';
		const { email, phone, timezone, language } = this.profileForm.controls;

		if (this.profileForm.valid) {
			const timezoneData = UtilService.findObj(this.sharedDataService.timeZoneList, 'timeZoneID', timezone.value);
			const languageData = UtilService.findObj(this.sharedDataService.companyLanguageList, 'code', language.value);
			this.utilService.presentLoadingWithOptions();

			this.accountService
				.updateProfile({
					userId: this.user?.userId,
					mobileAppLanguageID: language.value,
					languageName: languageData.languageName,
					timeZoneID: timezone.value,
					timeZoneName: timezoneData.timeZoneName,

					email: this.profile.email,
					userFullName: this.profile.userFullName,
					photo: this.profile.photo,
					qrCodeImage: this.profile.qrCodeImage,
					phoneCode: this.profile.phoneCode,
					phone: this.profile.phone,
				})
				.subscribe(
					(data: Response) => {
						// get updated userprofile detail
						this.accountService.getUserProfile(this.user?.userId).subscribe(
							async (profile) => {
								this.profile = profile;
								this.sharedDataService.getLangFileTranslation(() => {
									this.utilService.hideLoading();
									this.navCtrl.navigateRoot(['checkin-success'], {
										queryParams: {
											message: 'Profile Updated',
											nextPage: '/tabs/my-profile',
										},
									});
								});
							},
							(error) => {
								this.utilService.hideLoading();
							}
						);
					},
					(error) => {
						this.errorMsg = error.message;
						this.utilService.hideLoading();
					}
				);
		} else {
			this.translateService.get('COMMON.ERRORS.ALL_FIELDS_REQUIRED').subscribe((res) => {
				this.errorMsg = res;
			});
		}
	}
}
