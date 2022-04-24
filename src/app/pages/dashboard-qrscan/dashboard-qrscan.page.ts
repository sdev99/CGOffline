import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActionSheetController, NavController, Platform } from "@ionic/angular";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../../services/shared-data.service";
import { EnumService } from "../../services/enum.service";
import { ApiService } from "../../services/api.service";
import { UtilService } from "../../services/util.service";
import { Response, User } from "../../_models";
import { PermissionType, Plugins } from "@capacitor/core";
import { LocationItem } from "../../_models/locationItem";
import { AccountService } from "../../services/account.service";
import { UserDetail } from "../../_models/userDetail";
import { CheckedInDetailItem } from "../../_models/checkedInDetailItem";
import { SignOffFormDetail } from "../../_models/signOffFormDetail";
import { DocumentDetail } from "../../_models/documentDetail";
import { StaticDataService } from "../../services/static-data.service";
import { TranslateService } from "@ngx-translate/core";
import { ObservablesService } from "src/app/services/observables.service";
import { EntityItem } from "src/app/_models/entityItem";
import { OfflineManagerService } from "src/app/services/offline-manager.service";
import { DeviceUserDetail } from "src/app/_models/offline/DeviceUserDetail";
import jsQR from "jsqr";

const { Camera, Permissions } = Plugins;

@Component({
    selector: "app-dashboard-qrscan",
    templateUrl: "./dashboard-qrscan.page.html",
    styleUrls: ["./dashboard-qrscan.page.scss"],
})
export class DashboardQrscanPage implements OnInit {
    // For PWA app QR Scanning
    @ViewChild("video") video: ElementRef;
    @ViewChild("canvas") canvas: ElementRef;
    canvasElement: any;
    videoElement: any;
    canvasContext: any;
    scanActive = true;
    videoStream: any = null;

    isWebApp = UtilService.isWebApp();
    //

    user: User;
    scanSub;
    isTablet = false;
    authFor;
    isLoaded = false;
    fromFormPage = false;
    isOnlyInventryItemHasHav = false;
    fromFormCallbackKey = "";
    fromFormAllowedQrCodeTypes = [];

    constructor(
        public navCtrl: NavController,
        private qrScanner: QRScanner,
        private platform: Platform,
        public accountService: AccountService,
        public apiService: ApiService,
        public utilService: UtilService,
        public sharedDataService: SharedDataService,
        public actionSheetController: ActionSheetController,
        public activatedRoute: ActivatedRoute,
        public translateService: TranslateService,
        public observablesService: ObservablesService,
        public offlineManagerService: OfflineManagerService
    ) {
        this.user = this.accountService.userValue;
        this.isTablet = sharedDataService.isTablet;

        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.authFor) {
                    this.authFor = res.authFor;
                }
                if (res.fromFormPage) {
                    this.fromFormPage = res.fromFormPage;
                }
                if (res.fromFormAllowedQrCodeTypes) {
                    this.fromFormAllowedQrCodeTypes =
                        res.fromFormAllowedQrCodeTypes;
                }
                if (res.fromFormCallbackKey) {
                    this.fromFormCallbackKey = res.fromFormCallbackKey;
                }
                if (res.isOnlyInventryItemHasHav) {
                    this.isOnlyInventryItemHasHav =
                        res.isOnlyInventryItemHasHav;
                }
            }
        });
    }

    ionViewWillEnter() {}

    ngOnInit() {}

    ionViewWillLeave() {
        this.stopScanning();
    }

    ionViewDidEnter() {
        if (this.isWebApp) {
            this.canvasElement = this.canvas.nativeElement;
            this.canvasContext = this.canvasElement.getContext("2d");
            this.videoElement = this.video.nativeElement;
        }

        setTimeout(() => {
            this.isLoaded = true;
            this.scan();
        }, 100);
    }

    stopScanning = () => {
        if (this.isWebApp) {
            this.scanActive = false;
            try {
                this.videoStream.getTracks().forEach(function (track) {
                    if (track.readyState == "live") {
                        track.stop();
                    }
                });
            } catch (error) {}
            this.videoStream = null;
        } else {
            if (this.scanSub) {
                this.scanSub.unsubscribe(); // stop scanning
            }
            this.qrScanner.hide(); // hide camera preview
            this.qrScanner.destroy();
        }
    };

    requestCameraPermission = async () => {
        const cameraPermission = await Permissions.query({
            name: PermissionType.Camera,
        });

        if (
            cameraPermission.state !== "granted" &&
            Camera &&
            Camera.requestPermissions
        ) {
            return await Camera.requestPermissions;
        }
        return true;
    };

    scanQrForWeb = async () => {
        if (
            this.videoElement.readyState ===
                this.videoElement.HAVE_ENOUGH_DATA &&
            this.scanActive
        ) {
            this.canvasElement.height = this.videoElement.videoHeight;
            this.canvasElement.width = this.videoElement.videoWidth;

            this.canvasContext.drawImage(
                this.videoElement,
                0,
                0,
                this.canvasElement.width,
                this.canvasElement.height
            );
            const imageData = this.canvasContext.getImageData(
                0,
                0,
                this.canvasElement.width,
                this.canvasElement.height
            );
            const code = jsQR(
                imageData.data,
                imageData.width,
                imageData.height,
                {
                    inversionAttempts: "dontInvert",
                }
            );

            if (code) {
                const text = code.data;
                console.log("Scanned something", text);
                if (text) {
                    this.checkQrCode(text);
                }
            } else {
                if (this.scanActive) {
                    requestAnimationFrame(this.scanQrForWeb.bind(this));
                }
            }
        } else {
            requestAnimationFrame(this.scanQrForWeb.bind(this));
        }
    };

    scan = async () => {
        // await this.requestCameraPermission();

        // Optionally request the permission early

        if (this.isWebApp) {
            this.scanActive = true;

            const startScan = async () => {
                // Not working on iOS standalone mode!
                if (!this.videoStream) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: "environment",
                            width: window.innerWidth,
                            height: window.innerHeight,
                        },
                    });
                    this.videoStream = stream;
                    this.videoElement.srcObject = stream;
                    // Required for Safari
                    this.videoElement.setAttribute("playsinline", true);

                    this.videoElement.play();
                    requestAnimationFrame(this.scanQrForWeb.bind(this));
                }
            };

            startScan();

            this.scanQrForWeb();
        } else {
            this.qrScanner
                .prepare()
                .then((status: QRScannerStatus) => {
                    if (status.authorized) {
                        if (this.platform.is("android")) {
                            this.qrScanner.hide();
                            setTimeout(() => {
                                this.qrScanner.hide();
                            }, 1000);
                        }
                        // camera permission was granted
                        // start scanning
                        this.scanSub = this.qrScanner
                            .scan()
                            .subscribe((text: string) => {
                                console.log("Scanned something", text);
                                if (text) {
                                    this.checkQrCode(text);
                                }
                            });
                        this.qrScanner.show();
                    } else if (status.denied) {
                        this.translateService
                            .get([
                                "SHARED_TEXT.ERRORS.CAMERA_PERMISSION_PERMANENTLY_DENIED",
                                "SHARED_TEXT.ERRORS.PERMISSION_DENIED",
                            ])
                            .subscribe((res) => {
                                this.utilService.showAlert(
                                    res[
                                        "SHARED_TEXT.ERRORS.CAMERA_PERMISSION_PERMANENTLY_DENIED"
                                    ],
                                    res["SHARED_TEXT.ERRORS.PERMISSION_DENIED"]
                                );
                            });
                        // camera permission was permanently denied
                        // you must use QRScanner.openSettings() method to guide the user to the settings page
                        // then they can grant the permission from there
                    } else {
                        this.translateService
                            .get([
                                "SHARED_TEXT.ERRORS.CAMERA_PERMISSION_DENIED",
                                "SHARED_TEXT.ERRORS.PERMISSION_DENIED",
                            ])
                            .subscribe((res) => {
                                this.utilService.showAlert(
                                    res[
                                        "SHARED_TEXT.ERRORS.CAMERA_PERMISSION_DENIED"
                                    ],
                                    res["SHARED_TEXT.ERRORS.PERMISSION_DENIED"],
                                    async () => {
                                        const status1 =
                                            await this.requestCameraPermission();
                                        if (status1) {
                                            this.scan();
                                        }
                                    }
                                );
                            });

                        // permission was denied, but not permanently. You can ask for permission again at a later time.
                    }
                })
                .catch((e: any) => console.log("Error is", e));
        }
    };

    checkQrCode = async (qrCode) => {
        this.stopScanning();

        if (this.fromFormPage) {
            this.getAnswerChoiceEntityByQRCode(qrCode);
        } else if (this.sharedDataService.dedicatedMode) {
            this.getQrDetailForDedicatedMode(qrCode);
        } else {
            this.getQrDetailForPersonalMode(qrCode);
        }
    };

    getAnswerChoiceEntityByQRCode = (qrCode) => {
        const onSuccess = (res) => {
            const result: EntityItem = res as EntityItem;
            if (
                result &&
                result.entityID &&
                this.fromFormAllowedQrCodeTypes.indexOf(result.entityType) !==
                    -1 &&
                (!this.isOnlyInventryItemHasHav ||
                    (result.entityType ===
                        EnumService.SelectedQRCodeType.InventoryItem &&
                        result.isHAVSData))
            ) {
                this.observablesService.publishSomeData(
                    this.fromFormCallbackKey,
                    result
                );
                this.onClose();
            } else {
                this.translateService
                    .get("SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID")
                    .subscribe((res) => {
                        this.utilService.showAlert(res, "", () => {
                            this.scan();
                        });
                    });
            }
        };

        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getAnswerChoiceEntityByQRCode(qrCode)
                .then((res) => {
                    if (res) {
                        onSuccess(res);
                    } else {
                        this.translateService
                            .get([
                                "SHARED_TEXT.ERRORS.NOT_FOUND",
                                "SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID",
                            ])
                            .subscribe((transRes) => {
                                this.utilService.showAlert(
                                    transRes[
                                        "SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID"
                                    ],
                                    transRes["SHARED_TEXT.ERRORS.NOT_FOUND"],
                                    () => {
                                        this.scan();
                                    }
                                );
                            });
                    }
                });
        } else {
            this.utilService.presentLoadingWithOptions();

            this.apiService.getAnswerChoiceEntityByQRCode(qrCode).subscribe(
                (response: Response) => {
                    this.utilService.hideLoading();
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        onSuccess(response.Result);
                    }
                },
                (error) => {
                    this.utilService.hideLoading();

                    this.translateService
                        .get("SHARED_TEXT.ERRORS.NOT_FOUND")
                        .subscribe((res) => {
                            this.utilService.showAlert(
                                error.message || error,
                                res,
                                () => {
                                    this.scan();
                                }
                            );
                        });
                }
            );
        }
    };

    getQrDetailForDedicatedMode = (qrCode) => {
        if (this.sharedDataService.offlineMode) {
            this.offlineManagerService
                .getUserDetailByQRCode(qrCode)
                .then((res) => {
                    const userDetail = res as DeviceUserDetail;
                    console.log("USER DETAIL", userDetail);
                    if (
                        userDetail?.userId &&
                        userDetail?.userId !== StaticDataService.userDefaultGuid
                    ) {
                        this.openNextScreenForDedicatedMode(userDetail);
                    } else {
                        this.translateService
                            .get(
                                "SHARED_TEXT.ERRORS.USER_NOT_VALID_FOR_ANY_OPERATION"
                            )
                            .subscribe((res) => {
                                this.utilService.showAlert(res, "", () => {
                                    this.scan();
                                });
                            });
                    }
                });
        } else {
            this.utilService.presentLoadingWithOptions();

            this.apiService.getUserByQRCode(qrCode).subscribe(
                (response: Response) => {
                    this.utilService.hideLoading();
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        const userDetail: UserDetail =
                            response.Result as UserDetail;
                        if (
                            userDetail?.userId &&
                            userDetail?.userId !==
                                StaticDataService.userDefaultGuid
                        ) {
                            this.openNextScreenForDedicatedMode(userDetail);
                        } else {
                            this.translateService
                                .get(
                                    "SHARED_TEXT.ERRORS.USER_NOT_VALID_FOR_ANY_OPERATION"
                                )
                                .subscribe((res) => {
                                    this.utilService.showAlert(res, "", () => {
                                        this.scan();
                                    });
                                });
                        }
                    }
                },
                (error) => {
                    this.utilService.hideLoading();

                    this.translateService
                        .get("SHARED_TEXT.ERRORS.NOT_FOUND")
                        .subscribe((res) => {
                            this.utilService.showAlert(
                                error.message || error,
                                res,
                                () => {
                                    this.scan();
                                }
                            );
                        });
                }
            );
        }
    };

    getQrDetailForPersonalMode = (qrCode) => {
        this.utilService.presentLoadingWithOptions();

        this.apiService.getEntityByQRCode(qrCode).subscribe(
            (response: Response) => {
                this.utilService.hideLoading();
                if (
                    response.StatusCode ===
                    EnumService.ApiResponseCode.RequestSuccessful
                ) {
                    const locationItem: LocationItem =
                        response.Result as LocationItem;
                    if (
                        locationItem &&
                        locationItem.locationID &&
                        locationItem.locationName
                    ) {
                        this.openNextScreenForPersonalMode(locationItem);
                    } else {
                        this.translateService
                            .get("SHARED_TEXT.ERRORS.QR_CODE_NOT_VALID")
                            .subscribe((res) => {
                                this.utilService.showAlert(res, "", () => {
                                    this.scan();
                                });
                            });
                    }
                }
            },
            (error) => {
                this.utilService.hideLoading();

                this.translateService
                    .get("SHARED_TEXT.ERRORS.NOT_FOUND")
                    .subscribe((res) => {
                        this.utilService.showAlert(
                            error.message || error,
                            res,
                            () => {
                                this.scan();
                            }
                        );
                    });
            }
        );
    };

    openNextScreenForDedicatedMode = (detail) => {
        this.sharedDataService.dedicatedModeGuestDetail = null;
        this.sharedDataService.dedicatedModeUserDetail = detail;
        switch (this.sharedDataService.dedicatedModeProcessType) {
            case EnumService.DedicatedModeProcessTypes.CheckinOut:
                this.sharedDataService.getCheckinDetailsForDedicatedMode(
                    this.sharedDataService.dedicatedModeUserDetail?.userId,
                    this.apiService,
                    null,
                    ({ ischeckInPersonalQRNotAllowed }) => {
                        if (ischeckInPersonalQRNotAllowed) {
                            this.translateService
                                .get(
                                    "SHARED_TEXT.ERRORS.CANNOT_CHECKIN_WITH_PERSONAL_QR_CODE"
                                )
                                .subscribe((res) => {
                                    this.utilService.showAlert(res, "", () => {
                                        this.scan();
                                    });
                                });
                        }
                    }
                );
                break;
            case EnumService.DedicatedModeProcessTypes.Document:
                this.sharedDataService.dedicatedModeDocumentSignOffProcess();
                break;
            case EnumService.DedicatedModeProcessTypes.Form:
                this.sharedDataService.dedicatedModeFormSignOffProcess();
                break;
            case EnumService.DedicatedModeProcessTypes.WorkPermit:
                this.sharedDataService.dedicatedModeWorkPermitSignOffProcess();
                break;
            default:
        }
    };

    openNextScreenForPersonalMode = (detail) => {
        const locationItem = detail as LocationItem;
        const getEntityIds = this.utilService.getRelevantEntityId(
            locationItem.locationID
        );
        // if user scan form or document qr code
        if (getEntityIds.FormID > 0 || getEntityIds.DocumentID > 0) {
            // if checked in to location already
            if (
                this.sharedDataService.checkedInPlaces &&
                this.sharedDataService.checkedInPlaces.length > 0
            ) {
                this.showCheckedInLocations(getEntityIds);
            } else {
                this.translateService
                    .get(
                        "SHARED_TEXT.ERRORS.FOR_ACCESS_THIS_ITEM_YOU_NEED_TO_CHECKIN_FIRST"
                    )
                    .subscribe((res) => {
                        this.utilService.showAlert(res, "", () => {
                            this.scan();
                        });
                    });
            }
        } else {
            this.sharedDataService.checkInForLocation = detail;
            this.sharedDataService.checkinLocationByOption =
                EnumService.CheckInLocationByOptions.QrCode;
            this.sharedDataService.getCheckinDetails(
                this.user?.userId,
                this.apiService
            );
        }
    };

    async showCheckedInLocations(getEntityIds) {
        this.translateService
            .get([
                "SHARED_TEXT.CANCEL",
                "PAGESPECIFIC_TEXT.QR_SCANER.CHOOSE_PLACE",
            ])
            .subscribe(async (res) => {
                const checkedInPlaces = this.sharedDataService.checkedInPlaces;
                const buttons = [];
                checkedInPlaces.map((item) => {
                    buttons.push({
                        text: item.entityName,
                        handler: () => {
                            this.sharedDataService.currentSelectedCheckinPlace =
                                item;
                            if (getEntityIds.FormID > 0) {
                                this.openForm(getEntityIds.FormID);
                            } else if (getEntityIds.DocumentID > 0) {
                                this.openDocument(getEntityIds.DocumentID);
                            }
                        },
                    });
                });

                buttons.push({
                    text: res["SHARED_TEXT.CANCEL"],
                    role: "cancel",
                    handler: () => {
                        this.scan();
                    },
                });

                const actionSheet = await this.actionSheetController.create({
                    header: res["PAGESPECIFIC_TEXT.QR_SCANER.CHOOSE_PLACE"],
                    cssClass: "my-custom-class",
                    buttons,
                });
                await actionSheet.present();
            });
    }

    onClose() {
        this.navCtrl.back();
    }

    async openDocument(documentID) {
        this.utilService.presentLoadingWithOptions();

        this.apiService.getActivitySignOffDocumentDetail(documentID).subscribe(
            (response: Response) => {
                this.utilService.hideLoading();
                if (
                    response.StatusCode ===
                    EnumService.ApiResponseCode.RequestSuccessful
                ) {
                    this.stopScanning();
                    const signOffDocumentDetail =
                        response.Result as DocumentDetail;
                    this.navCtrl.navigateForward(["/document-openchoice"], {
                        queryParams: {
                            document: JSON.stringify(signOffDocumentDetail),
                        },
                        replaceUrl: true,
                    });
                }
            },
            (error) => {
                this.translateService
                    .get("SHARED_TEXT.ERRORS.NOT_FOUND")
                    .subscribe((res) => {
                        this.utilService.showAlert(
                            error.message || error,
                            res,
                            () => {
                                this.scan();
                            }
                        );
                    });
                this.utilService.hideLoading();
            }
        );
    }

    async openForm(formID) {
        this.utilService.presentLoadingWithOptions();

        const place: CheckedInDetailItem =
            this.sharedDataService.currentSelectedCheckinPlace;
        this.apiService
            .getSignOffFormDetail(
                this.user?.userId,
                formID,
                place?.locationID,
                place?.projectID,
                place?.inventoryItemID
            )
            .subscribe(
                (response: Response) => {
                    this.utilService.hideLoading();
                    if (
                        response.StatusCode ===
                        EnumService.ApiResponseCode.RequestSuccessful
                    ) {
                        this.stopScanning();

                        this.sharedDataService.viewFormFor =
                            EnumService.ViewFormForType.CurrentCheckin;
                        this.sharedDataService.signOffFormDetail =
                            response.Result as SignOffFormDetail;
                        this.navCtrl.navigateForward(["/form-cover"], {
                            replaceUrl: true,
                        });
                    }
                },
                (error) => {
                    this.translateService
                        .get("SHARED_TEXT.ERRORS.NOT_FOUND")
                        .subscribe((res) => {
                            this.utilService.showAlert(
                                error.message || error,
                                res,
                                () => {
                                    this.scan();
                                }
                            );
                        });
                    this.utilService.hideLoading();
                }
            );
    }
}
