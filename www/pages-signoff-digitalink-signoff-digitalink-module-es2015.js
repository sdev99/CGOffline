(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signoff-digitalink-signoff-digitalink-module"],{

/***/ "B0i5":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/signoff-digitalink/signoff-digitalink-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SignoffDigitalinkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoffDigitalinkPageRoutingModule", function() { return SignoffDigitalinkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signoff_digitalink_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signoff-digitalink.page */ "U50C");




const routes = [
    {
        path: '',
        component: _signoff_digitalink_page__WEBPACK_IMPORTED_MODULE_3__["SignoffDigitalinkPage"]
    }
];
let SignoffDigitalinkPageRoutingModule = class SignoffDigitalinkPageRoutingModule {
};
SignoffDigitalinkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignoffDigitalinkPageRoutingModule);



/***/ }),

/***/ "Dm7m":
/*!***********************************************************************!*\
  !*** ./src/app/pages/signoff-digitalink/signoff-digitalink.module.ts ***!
  \***********************************************************************/
/*! exports provided: SignoffDigitalinkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoffDigitalinkPageModule", function() { return SignoffDigitalinkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signoff_digitalink_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signoff-digitalink-routing.module */ "B0i5");
/* harmony import */ var _signoff_digitalink_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signoff-digitalink.page */ "U50C");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let SignoffDigitalinkPageModule = class SignoffDigitalinkPageModule {
};
SignoffDigitalinkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signoff_digitalink_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignoffDigitalinkPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_signoff_digitalink_page__WEBPACK_IMPORTED_MODULE_6__["SignoffDigitalinkPage"]]
    })
], SignoffDigitalinkPageModule);



/***/ }),

/***/ "U50C":
/*!*********************************************************************!*\
  !*** ./src/app/pages/signoff-digitalink/signoff-digitalink.page.ts ***!
  \*********************************************************************/
/*! exports provided: SignoffDigitalinkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoffDigitalinkPage", function() { return SignoffDigitalinkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signoff_digitalink_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signoff-digitalink.page.html */ "hbDU");
/* harmony import */ var _signoff_digitalink_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signoff-digitalink.page.scss */ "gLum");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fabric */ "epSk");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_observables_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/observables.service */ "mxI+");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");














let SignoffDigitalinkPage = class SignoffDigitalinkPage {
    constructor(navCtrl, utilService, route, observablesService, sharedDataService, apiService, routerOutlet, accountService, screenOrientation, ngZone) {
        this.navCtrl = navCtrl;
        this.utilService = utilService;
        this.route = route;
        this.observablesService = observablesService;
        this.sharedDataService = sharedDataService;
        this.apiService = apiService;
        this.routerOutlet = routerOutlet;
        this.accountService = accountService;
        this.screenOrientation = screenOrientation;
        this.ngZone = ngZone;
        this.isConfirm = false;
        this.pageTitle = 'Sign-Off';
        this.title = 'You are signing-off';
        this.subTitle = 'Digital Ink Signature';
        this.aggrementTitle = 'I herby confirm that I\'ve read and understood everything I viewed.';
        this.showDigitalInk = false;
        this.ionViewDidEnter = () => {
            this.routerOutlet.swipeGesture = false;
        };
        this.ionViewWillLeave = () => {
            this.routerOutlet.swipeGesture = true;
        };
        this.handleOrientation = () => {
            if (this.sharedDataService.dedicatedMode) {
                this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
                    this.ngZone.run(() => {
                        if (this.screenOrientation.type.includes('portrait')) {
                        }
                        if (this.screenOrientation.type.includes('landscape')) {
                        }
                        if (this.showDigitalInk) {
                            // this.initialiseDrawing();
                        }
                    });
                });
            }
        };
        this.isDigitalSignEmpty = () => {
            if (this.canvasRef) {
                return this.canvasRef.isEmpty();
            }
            return true;
        };
        this.user = this.accountService.userValue;
        if (sharedDataService.signOffFor) {
            this.type = sharedDataService.signOffFor;
        }
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.type) {
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.INDUCTION:
                this.aggrementTitle = 'I confirm that I\'ve read the induction.';
                this.subTitle = 'Induction';
                if (this.sharedDataService.checkInDetail && this.sharedDataService.checkInDetail.checkInInduction.isSignatureSignOff) {
                    this.showDigitalInk = true;
                    this.initialiseDrawing();
                }
                break;
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_ACTIVITY:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_CURRENT_CHECKIN:
                this.aggrementTitle = 'I confirm that I\'ve read the above document.';
                if (this.sharedDataService.signOffDocumentDetail) {
                    this.subTitle = (_a = this.sharedDataService.signOffDocumentDetail) === null || _a === void 0 ? void 0 : _a.documentTitle;
                    if (this.sharedDataService.signOffDocumentDetail && ((_b = this.sharedDataService.signOffDocumentDetail) === null || _b === void 0 ? void 0 : _b.isSignatureSignOff)) {
                        this.showDigitalInk = true;
                        this.initialiseDrawing();
                    }
                }
                break;
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORM_ACTIVITY:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORM_CURRENT_CHECKIN:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN:
                this.aggrementTitle = 'I confirm that I\'ve filled the above form.';
                if (this.sharedDataService.signOffFormDetail) {
                    this.subTitle = this.sharedDataService.signOffFormDetail.formData.formTitle;
                    if (this.sharedDataService.signOffFormDetail && this.sharedDataService.signOffFormDetail.formData.isSignatureSignOff) {
                        this.showDigitalInk = true;
                        this.initialiseDrawing();
                    }
                }
                break;
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_DM:
                this.aggrementTitle = 'I herby confirm that I\'ve read and understood everything I viewed.';
                if (this.sharedDataService.signOffDocumentDetail) {
                    if (this.sharedDataService.signOffDocumentDetail && ((_c = this.sharedDataService.signOffDocumentDetail) === null || _c === void 0 ? void 0 : _c.isSignatureSignOff)) {
                        this.showDigitalInk = true;
                        this.initialiseDrawing();
                    }
                }
                this.pageTitle = 'Sign-Off';
                this.title = 'Sign-Off';
                this.subTitle = '';
                break;
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORMS_DM:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORK_PERMIT_DM:
                this.aggrementTitle = 'I herby confirm that I\'ve read and understood everything I viewed.';
                if (this.sharedDataService.signOffFormDetail) {
                    this.subTitle = (_e = (_d = this.sharedDataService.signOffFormDetail) === null || _d === void 0 ? void 0 : _d.formData) === null || _e === void 0 ? void 0 : _e.formTitle;
                    if (this.sharedDataService.signOffFormDetail && ((_g = (_f = this.sharedDataService.signOffFormDetail) === null || _f === void 0 ? void 0 : _f.formData) === null || _g === void 0 ? void 0 : _g.isSignatureSignOff)) {
                        this.showDigitalInk = true;
                        this.initialiseDrawing();
                    }
                }
                this.pageTitle = 'Sign-Off';
                this.title = 'Sign-Off';
                this.subTitle = '';
                break;
            default:
                if ((_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"].isLocalHost())) {
                    this.pageTitle = 'Sign-Off';
                    this.title = 'Sign-Off';
                    this.aggrementTitle = 'I herby confirm that I\'ve read and understood everything I viewed.';
                    this.showDigitalInk = true;
                    this.initialiseDrawing();
                }
        }
    }
    initialiseDrawing() {
        setTimeout(() => {
            if (!this.canvasRef) {
                const canvasRef = new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Canvas('digital-signature');
                this.canvasRef = canvasRef;
            }
            else {
                const canvasRef = this.canvasRef;
                debugger;
            }
            if (this.sharedDataService.dedicatedMode || this.sharedDataService.isTablet) {
                const ele = document.getElementById('digital-signature');
                this.canvasRef.setDimensions({
                    width: (window.innerHeight * 50 / 100),
                    height: (window.innerHeight * 25 / 100)
                });
            }
            else {
                this.canvasRef.setDimensions({ width: window.innerWidth - 46, height: (window.innerHeight * 28 / 100) });
            }
            this.canvasRef.on('selection:created', () => {
            });
            this.canvasRef.on('selection:cleared', () => {
            });
            this.canvasRef.freeDrawingBrush.color = '#171538';
            this.canvasRef.freeDrawingBrush.width = 4;
            this.canvasRef.isDrawingMode = true;
        }, 200);
    }
    ionViewWillEnter() {
        this.handleOrientation();
    }
    ionViewDidLeave() {
        if (this.sharedDataService.dedicatedMode) {
            if (!_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"].isLocalHost()) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                this.screenOrientationSubscribe.unsubscribe();
            }
        }
    }
    onClose() {
        if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_DM) {
            this.navCtrl.navigateBack('/documents-dm');
        }
        else if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORMS_DM) {
            this.navCtrl.navigateBack('/forms-dm');
        }
        else if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORK_PERMIT_DM) {
            this.navCtrl.navigateBack('/permits-dm');
        }
        else if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.INDUCTION) {
            if (this.sharedDataService.dedicatedMode) {
                this.navCtrl.navigateBack('/dashboard-dm');
            }
            else {
                this.navCtrl.navigateBack('/checkinout-confirm');
            }
        }
        else {
            this.navCtrl.back();
        }
    }
    onContinue() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.errorMessage = '';
            if (this.isConfirm) {
                let downlaodImg;
                if (this.showDigitalInk) {
                    this.canvasRef.discardActiveObject();
                    downlaodImg = this.canvasRef.toDataURL('jpeg');
                    const fileName = 'signature' + this.utilService.getCurrentTimeStamp() + '.jpeg';
                    const mimeType = 'image/jpeg';
                    this.utilService.presentLoadingWithOptions();
                    this.utilService.dataUriToFile(downlaodImg, fileName, mimeType).then((file) => {
                        this.apiService.inductionSignatureUpload(file, fileName).subscribe((res) => {
                            this.utilService.hideLoading();
                            if (res.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                                this.nextStep(res.Result);
                            }
                            else {
                                this.errorMessage = res.Message;
                            }
                        }, (error) => {
                            this.utilService.hideLoading();
                            this.errorMessage = error.message ? error.message : error;
                        });
                    }, error => {
                        this.utilService.hideLoading();
                    });
                }
                else {
                    this.nextStep();
                }
            }
        });
    }
    nextStep(signatureFileName = '') {
        var _a, _b, _c, _d, _e;
        switch (this.type) {
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.INDUCTION:
                if (this.showDigitalInk && signatureFileName) {
                    this.sharedDataService.checkInPostData.digitalInkSignature = signatureFileName;
                }
                if (this.sharedDataService.checkInDetail && ((_b = (_a = this.sharedDataService.checkInDetail) === null || _a === void 0 ? void 0 : _a.checkInInduction) === null || _b === void 0 ? void 0 : _b.isPhotoSignOff)) {
                    if (this.sharedDataService.dedicatedMode) {
                        this.sharedDataService.dedicatedModeCapturePhotoFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Signoff;
                        this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
                    }
                    else {
                        this.navCtrl.navigateForward(['/signoff-photo']);
                    }
                }
                else {
                    if (this.sharedDataService.checkInPostData.guestPhone) {
                        this.sharedDataService.submitInductionCheckInDataGuest(this.apiService);
                    }
                    else {
                        this.sharedDataService.submitInductionCheckInData(this.apiService);
                    }
                }
                break;
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_DM:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_ACTIVITY:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_CURRENT_CHECKIN:
                if (this.showDigitalInk && signatureFileName) {
                    this.sharedDataService.signOffDetailsPostData.digitalInkSignature = signatureFileName;
                }
                if (this.sharedDataService.signOffDocumentDetail && ((_c = this.sharedDataService.signOffDocumentDetail) === null || _c === void 0 ? void 0 : _c.isPhotoSignOff)) {
                    if (this.sharedDataService.dedicatedMode) {
                        this.sharedDataService.dedicatedModeCapturePhotoFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Signoff;
                        this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
                    }
                    else {
                        this.navCtrl.navigateForward(['/signoff-photo']);
                    }
                }
                else {
                    this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
                }
                break;
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORM_ACTIVITY:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORMS_DM:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORK_PERMIT_DM:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORM_CURRENT_CHECKIN:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN:
                if (this.showDigitalInk && signatureFileName) {
                    this.sharedDataService.signOffDetailsPostData.digitalInkSignature = signatureFileName;
                }
                if (this.sharedDataService.signOffFormDetail && ((_e = (_d = this.sharedDataService.signOffFormDetail) === null || _d === void 0 ? void 0 : _d.formData) === null || _e === void 0 ? void 0 : _e.isPhotoSignOff)) {
                    if (this.sharedDataService.dedicatedMode) {
                        this.sharedDataService.dedicatedModeCapturePhotoFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Signoff;
                        this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
                    }
                    else {
                        this.navCtrl.navigateForward(['/signoff-photo']);
                    }
                }
                else {
                    this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
                }
                break;
            default:
            // if (this.sharedDataService.dedicatedMode) {
            //     if (UtilService.randomBoolean()) {
            //         this.navCtrl.navigateForward(['/checkinout-success-dm'], {
            //             queryParams: {
            //                 message: 'You have now checked-in',
            //                 nextPage: 'dashboard-dm'
            //             }
            //         });
            //     } else {
            //         this.navCtrl.navigateForward(['/checkinout-fail-dm'], {
            //             queryParams: {
            //                 failTitle: 'No Qualification',
            //                 failSubTitle: 'Check in Not Allowed',
            //                 failMessage: 'This check-in requires to have certain \n' +
            //                     'qualifications which you do not have.',
            //                 nextPage: 'dashboard-dm'
            //             }
            //         });
            //     }
            // }
        }
    }
};
SignoffDigitalinkPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_observables_service__WEBPACK_IMPORTED_MODULE_7__["ObservablesService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__["SharedDataService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_12__["AccountService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__["ScreenOrientation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
SignoffDigitalinkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signoff-digitalink',
        template: _raw_loader_signoff_digitalink_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signoff_digitalink_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignoffDigitalinkPage);



/***/ }),

/***/ "gLum":
/*!***********************************************************************!*\
  !*** ./src/app/pages/signoff-digitalink/signoff-digitalink.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ::ng-deep app-modal-header ion-toolbar {\n  --border-color: #F8F9FB;\n  --border-width: 0;\n  --background: #F8F9FB;\n}\n\nion-content {\n  --background: #F8F9FB;\n  --padding-start: 23px;\n  --padding-end: 23px;\n}\n\nion-content .content {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\nion-content .hr-line {\n  margin-top: 12px;\n  width: auto;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\n\nion-content .title-1 {\n  margin-bottom: 0;\n  margin-top: 20px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 31px;\n  text-align: center;\n  color: #444444;\n}\n\nion-content .title-2 {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #171538;\n  margin-top: 25px;\n}\n\nion-content .text-1 {\n  margin-top: 9px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n\nion-content .text-2 {\n  margin-top: 18px;\n  min-height: 18px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #4A90E2;\n}\n\nion-content .agree-checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px 0;\n  flex-direction: row;\n}\n\nion-content .agree-checkbox ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n\nion-content .agree-checkbox ion-checkbox {\n  min-width: 16px;\n  --size: 16px;\n  --background: #FFFFFF;\n  --background-checked: #2A6FDB;\n  --checkmark-color: #FFFFFF;\n  --border-color: #A1A8CA;\n  --border-radius: 2px;\n  --border-style: solid;\n  --border-width: 1px;\n  margin-right: 13px;\n}\n\nion-content ion-item {\n  --background: transparent;\n}\n\nion-content .canvas-container-d-s {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content .canvas-container-d-s .digital-signature {\n  width: 100%;\n  height: 188px;\n  background: #E8EAF2;\n  border: 1px solid #CACEE1;\n  border-radius: 4px;\n}\n\nion-footer {\n  background-color: #F8F9FB;\n}\n\n@media only screen and (min-width: 600px) {\n  .content {\n    margin: auto;\n    text-align: center;\n  }\n  .content .canvas-container-d-s {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .content .canvas-container-d-s .digital-signature {\n    height: 30vh;\n  }\n  .content .agree-checkbox {\n    justify-content: center;\n  }\n  .content .action-btn {\n    width: 240px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ25vZmYtZGlnaXRhbGluay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFETjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQUtFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQUhKOztBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBUko7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWEo7O0FBY0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBWko7O0FBZUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWJKOztBQWVJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWJOOztBQWdCSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWROOztBQWtCRTtFQUNFLHlCQUFBO0FBaEJKOztBQW1CRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFqQko7O0FBbUJJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFqQk47O0FBdUJBO0VBQ0UseUJBQUE7QUFwQkY7O0FBdUJBO0VBQ0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUFwQkY7RUFzQkU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQXBCSjtFQXNCSTtJQUNFLFlBQUE7RUFwQk47RUF3QkU7SUFDRSx1QkFBQTtFQXRCSjtFQXlCRTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBdkJKO0FBQ0YiLCJmaWxlIjoic2lnbm9mZi1kaWdpdGFsaW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICA6Om5nLWRlZXAgYXBwLW1vZGFsLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNGOEY5RkI7XG4gICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgIC0tYmFja2dyb3VuZDogI0Y4RjlGQjtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGOEY5RkI7XG4gIC0tcGFkZGluZy1zdGFydDogMjNweDtcbiAgLS1wYWRkaW5nLWVuZDogMjNweDtcblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmLmRlZGljYXRlZC1tb2RlIHtcblxuICB9XG5cbiAgLmhyLWxpbmUge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gIH1cblxuICAudGl0bGUtMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gIH1cblxuICAudGl0bGUtMiB7XG4gICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICB9XG5cbiAgLnRleHQtMSB7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgfVxuXG4gIC50ZXh0LTIge1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgbWluLWhlaWdodDogMThweDtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNEE5MEUyO1xuICB9XG5cbiAgLmFncmVlLWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICAtLXNpemU6IDE2cHg7XG4gICAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzJBNkZEQjtcbiAgICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNBMUE4Q0E7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuY2FudmFzLWNvbnRhaW5lci1kLXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmRpZ2l0YWwtc2lnbmF0dXJlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxODhweDtcbiAgICAgIGJhY2tncm91bmQ6ICNFOEVBRjI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuXG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZCO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmNhbnZhcy1jb250YWluZXItZC1zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5kaWdpdGFsLXNpZ25hdHVyZSB7XG4gICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWdyZWUtY2hlY2tib3gge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "hbDU":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signoff-digitalink/signoff-digitalink.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n    <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" [modalTitle]=\"pageTitle\"\n                      (closeModal)=\"onClose()\"></app-modal-header>\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n                         [modalSubTitle]=\"pageTitle\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <div class=\"content-container\">\n\n        <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n\n        <div class=\"content\">\n            <div class=\"title-1\">{{title}}</div>\n\n            <div class=\"ion-text-center text-2\" *ngIf=\"subTitle\">\n                {{subTitle}}\n            </div>\n\n            <div class=\"agree-checkbox\">\n                <ion-checkbox mode=\"md\" [(ngModel)]=\"isConfirm\"></ion-checkbox>\n                <ion-label (click)=\"isConfirm=!isConfirm\">{{aggrementTitle}}</ion-label>\n            </div>\n\n            <ng-container *ngIf=\"showDigitalInk\">\n\n                <div class=\"hr-line\" *ngIf=\"!sharedDataService.isTablet\"></div>\n\n                <div class=\"title-2\">Digital Ink Signature</div>\n\n                <div class=\"text-1\">Use a stylus or finger to draw your signature</div>\n\n                <div class=\"canvas-container-d-s\" id=\"canvas-container\">\n                    <canvas id=\"digital-signature\" class=\"digital-signature\"></canvas>\n                </div>\n\n            </ng-container>\n\n            <ion-button *ngIf=\"sharedDataService.isTablet\" expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\"\n                        [disabled]=\"(!showDigitalInk && !isConfirm) || (showDigitalInk &&  (!isConfirm || isDigitalSignEmpty()))\">\n                Continue\n            </ion-button>\n        </div>\n\n        <ion-footer mode=\"ios\" *ngIf=\"!sharedDataService.isTablet\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\"\n                        [disabled]=\"(!showDigitalInk && !isConfirm) || (showDigitalInk &&  (!isConfirm || isDigitalSignEmpty()))\">\n                Continue\n            </ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-signoff-digitalink-signoff-digitalink-module-es2015.js.map