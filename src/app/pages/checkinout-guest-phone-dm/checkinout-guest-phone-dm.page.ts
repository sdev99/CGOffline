import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { SharedDataService } from "../../services/shared-data.service";
import { Response } from "../../_models";
import { EnumService } from "../../services/enum.service";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OfflineManagerService } from "src/app/services/offline-manager.service";

@Component({
    selector: "app-checkinout-guest-phone-dm",
    templateUrl: "./checkinout-guest-phone-dm.page.html",
    styleUrls: ["./checkinout-guest-phone-dm.page.scss"],
})
export class CheckinoutGuestPhoneDmPage implements OnInit {
    errorMessage = "";
    formGroup: FormGroup;

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
        public utilService: UtilService,
        public offlineManagerService: OfflineManagerService
    ) {
        this.formGroup = new FormGroup({
            phoneNumber: new FormControl(
                "",
                Validators.compose([Validators.required])
            ),
        });
    }

    ngOnInit() {}

    onClose() {
        this.navController.navigateRoot("dashboard-dm", { replaceUrl: true });
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        this.errorMessage = "";
        if (this.formGroup.valid) {
            const phoneNumber = this.formGroup.controls.phoneNumber.value;
            if (this.sharedDataService.dedicatedModeDeviceDetailData) {
                this.utilService.presentLoadingWithOptions();

                if (this.sharedDataService.offlineMode) {
                    this.offlineManagerService
                        .getGuestUserDetailByPhone(phoneNumber)
                        .then((res) => {
                            this.utilService.hideLoading();

                            if (res) {
                                this.sharedDataService.dedicatedModeUserDetail =
                                    null;
                                this.sharedDataService.dedicatedModeGuestDetail =
                                    res;
                                this.navController.navigateForward(
                                    "checkinout-identityconfirm-dm",
                                    {
                                        queryParams: {
                                            authFor: "Check In/Out as Guest",
                                        },
                                    }
                                );
                            } else {
                                this.sharedDataService.dedicatedModeUserDetail =
                                    null;
                                this.sharedDataService.dedicatedModeGuestDetail =
                                    {
                                        guestPhone: phoneNumber.toString(),
                                    };
                                this.navController.navigateForward(
                                    "checkinout-guest-dm"
                                );
                            }
                        })
                        .catch((error) => {
                            this.errorMessage = error.message;
                            this.utilService.hideLoading();
                        });
                } else {
                    this.apiService
                        .getGuestUserDetailByPhone(phoneNumber)
                        .subscribe(
                            (res: Response) => {
                                this.utilService.hideLoading();
                                if (
                                    res.StatusCode ===
                                    EnumService.ApiResponseCode
                                        .RequestSuccessful
                                ) {
                                    if (res.Result?.guestPhone) {
                                        this.sharedDataService.dedicatedModeUserDetail =
                                            null;
                                        this.sharedDataService.dedicatedModeGuestDetail =
                                            res.Result;
                                        this.navController.navigateForward(
                                            "checkinout-identityconfirm-dm",
                                            {
                                                queryParams: {
                                                    authFor:
                                                        "Check In/Out as Guest",
                                                },
                                            }
                                        );
                                    } else {
                                        this.sharedDataService.dedicatedModeUserDetail =
                                            null;
                                        this.sharedDataService.dedicatedModeGuestDetail =
                                            {
                                                guestPhone: phoneNumber,
                                            };
                                        this.navController.navigateForward(
                                            "checkinout-guest-dm"
                                        );
                                    }
                                }
                            },
                            (error) => {
                                this.errorMessage = error.message;
                                this.utilService.hideLoading();
                            }
                        );
                }
            }
        }
    }
}
