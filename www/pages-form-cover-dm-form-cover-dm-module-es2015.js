(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-cover-dm-form-cover-dm-module"],{

/***/ "4Jg5":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-cover-dm/form-cover-dm.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n\n    <div class=\"top-content\">\n        <div class=\"text-1\">You are about to fill</div>\n        <div class=\"text-2\">{{signOffFormDetail?.formData?.formTitle}}</div>\n        <div class=\"text-3\">{{signOffFormDetail?.formData?.formType}}</div>\n\n        <div *ngIf=\"signOffFormDetail?.formData?.formattedDescription\" class=\"text-4\"\n             [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(signOffFormDetail?.formData?.formattedDescription)\"></div>\n    </div>\n\n\n    <div class=\"bottom-content\">\n        <ng-container *ngIf=\"signOffFormDetail?.formData?.formattedInstructions\">\n            <div class=\"text-5\">\n                INSTRUCTIONS\n            </div>\n\n            <div class=\"text-4\"\n                 [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(signOffFormDetail?.formData?.formattedInstructions)\"></div>\n        </ng-container>\n\n        <div *ngIf=\"signOffFormDetail && signOffFormDetail.formAttachments?.length>0\" class=\"ion-margin-top\">\n            <div class=\"text-5\">\n                ATTACHMENTS\n            </div>\n\n            <ion-item lines=\"none\" class=\"form-item\" (click)=\"openFile(attachmentItem)\"\n                      *ngFor=\"let attachmentItem of signOffFormDetail.formAttachments\">\n                <ion-img slot=\"start\" [src]=\"attachmentItem.documentFileIconURL\"></ion-img>\n                <ion-label>{{attachmentItem.documentFileName}}</ion-label>\n            </ion-item>\n        </div>\n\n        <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Launch the Form</ion-button>\n\n    </div>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "7w9b":
/*!*************************************************************!*\
  !*** ./src/app/pages/form-cover-dm/form-cover-dm.module.ts ***!
  \*************************************************************/
/*! exports provided: FormCoverDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCoverDmPageModule", function() { return FormCoverDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _form_cover_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-cover-dm-routing.module */ "NsVG");
/* harmony import */ var _form_cover_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-cover-dm.page */ "96is");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let FormCoverDmPageModule = class FormCoverDmPageModule {
};
FormCoverDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_cover_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormCoverDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_form_cover_dm_page__WEBPACK_IMPORTED_MODULE_6__["FormCoverDmPage"]]
    })
], FormCoverDmPageModule);



/***/ }),

/***/ "96is":
/*!***********************************************************!*\
  !*** ./src/app/pages/form-cover-dm/form-cover-dm.page.ts ***!
  \***********************************************************/
/*! exports provided: FormCoverDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCoverDmPage", function() { return FormCoverDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_cover_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-cover-dm.page.html */ "4Jg5");
/* harmony import */ var _form_cover_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-cover-dm.page.scss */ "OK4g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/filehandler.service */ "rz59");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");












let FormCoverDmPage = class FormCoverDmPage {
    constructor(navCtrl, route, filehandlerService, apiService, sharedDataService, utilService, sanitizer) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.filehandlerService = filehandlerService;
        this.apiService = apiService;
        this.sharedDataService = sharedDataService;
        this.utilService = utilService;
        this.sanitizer = sanitizer;
    }
    ionViewWillEnter() {
        if (this.sharedDataService.dedicatedModeProcessType === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.Form ||
            this.sharedDataService.dedicatedModeProcessType === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.WorkPermit ||
            this.sharedDataService.viewFormFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ViewFormForType.Induction) {
            this.signOffFormDetail = this.sharedDataService.signOffFormDetail;
        }
    }
    ngOnInit() {
    }
    openFile(attachmentItem) {
        var _a;
        this.filehandlerService.openFile(((_a = this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.documentDirectory) + '' + attachmentItem.documentFileName);
    }
    onClose() {
        this.navCtrl.navigateBack('/dashboard-dm');
    }
    getFormBuilderDetails(callBack) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formData = (_a = this.signOffFormDetail) === null || _a === void 0 ? void 0 : _a.formData;
            this.utilService.presentLoadingWithOptions();
            this.apiService.getFormBuilderDetails(formData === null || formData === void 0 ? void 0 : formData.formID, formData === null || formData === void 0 ? void 0 : formData.formVersionID).subscribe((response) => {
                this.utilService.hideLoading();
                callBack(response.Result);
            }, error => {
                this.utilService.showAlert(error.message || error);
                this.utilService.hideLoading();
            });
        });
    }
    onContinue() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.signOffFormDetail) {
                const formData = (_a = this.signOffFormDetail) === null || _a === void 0 ? void 0 : _a.formData;
                this.getFormBuilderDetails((formDetails) => {
                    this.sharedDataService.formBuilderDetails = formDetails;
                    switch (formData === null || formData === void 0 ? void 0 : formData.formType) {
                        case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].FormTypes.HAV:
                            this.navCtrl.navigateForward(['/form-hav']);
                            break;
                        case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].FormTypes.RISK_ASSESSMENT:
                            this.navCtrl.navigateForward(['/form-riskassessment']);
                            break;
                        case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].FormTypes.CUSTOM:
                            this.navCtrl.navigateForward(['/form-custom']);
                            break;
                        case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].FormTypes.ACCIDENT_REPORT:
                            this.navCtrl.navigateForward(['/form-accident-report']);
                            break;
                        case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].FormTypes.WORK_PERMIT:
                            this.navCtrl.navigateForward(['/form-workpermit']);
                            break;
                        default:
                    }
                });
            }
        });
    }
};
FormCoverDmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__["FilehandlerService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }
];
FormCoverDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-cover-dm',
        template: _raw_loader_form_cover_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_cover_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormCoverDmPage);



/***/ }),

/***/ "NsVG":
/*!*********************************************************************!*\
  !*** ./src/app/pages/form-cover-dm/form-cover-dm-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormCoverDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCoverDmPageRoutingModule", function() { return FormCoverDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_cover_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-cover-dm.page */ "96is");




const routes = [
    {
        path: '',
        component: _form_cover_dm_page__WEBPACK_IMPORTED_MODULE_3__["FormCoverDmPage"]
    }
];
let FormCoverDmPageRoutingModule = class FormCoverDmPageRoutingModule {
};
FormCoverDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormCoverDmPageRoutingModule);



/***/ }),

/***/ "OK4g":
/*!*************************************************************!*\
  !*** ./src/app/pages/form-cover-dm/form-cover-dm.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F6F9FB;\n}\nion-content .text-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 31px;\n  display: flex;\n  text-align: center;\n  color: #171538;\n}\nion-content .text-2 {\n  margin-top: 24px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n  display: flex;\n  text-align: center;\n  color: #4A90E2;\n}\nion-content .text-3 {\n  min-width: 320px;\n  width: 80%;\n  margin-top: 22px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 140%;\n  text-align: center;\n  color: #777;\n}\nion-content .text-4 {\n  min-width: 320px;\n  width: 80%;\n  margin-top: 20px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 140%;\n  text-align: center;\n  color: #171538;\n}\nion-content .text-5 {\n  min-width: 320px;\n  width: 80%;\n  margin-top: 16px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 140%;\n  text-align: center;\n  color: #AAAAAA;\n}\nion-content .top-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFFFFF;\n  padding: 32px;\n  width: 100%;\n}\nion-content .bottom-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F6F9FB;\n  padding: 16px;\n}\nion-content ion-item {\n  --padding-start: 0;\n}\nion-content ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  white-space: normal;\n}\nion-content ion-item.title-item {\n  --border-color: rgba(74, 144, 226, 0.2);\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\nion-content ion-item.title-item ion-label {\n  color: #171538;\n}\nion-content ion-item.title-item ion-label h6 {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #171538;\n  margin-top: 44px;\n}\nion-content ion-item.title-item ion-label p {\n  margin-top: 8px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #171538;\n}\nion-content ion-item.form-item {\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\nion-content ion-item.form-item ion-img {\n  width: 17.31px;\n  height: 20px;\n  margin-right: 12px;\n}\nion-content ion-item.form-item ion-label {\n  color: #4A90E2;\n}\nion-content .action-btn {\n  width: 207px;\n}\n.hr-line {\n  margin: 16px 0;\n  width: 100%;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0tY292ZXItZG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUVFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFMSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtBQVBKO0FBU0k7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFQTjtBQVVJO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBUk47QUFVTTtFQUNFLGNBQUE7QUFSUjtBQVVRO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0FBVFY7QUFZUTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVlY7QUFlSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWJSO0FBZ0JNO0VBQ0UsY0FBQTtBQWRSO0FBb0JFO0VBQ0UsWUFBQTtBQWxCSjtBQXVCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBcEJGIiwiZmlsZSI6ImZvcm0tY292ZXItZG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGNkY5RkI7XG5cblxuICAudGV4dC0xIHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMxNzE1Mzg7XG4gIH1cblxuICAudGV4dC0yIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNEE5MEUyO1xuICB9XG5cbiAgLnRleHQtMyB7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cblxuICAudGV4dC00IHtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgfVxuXG4gIC50ZXh0LTUge1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjQUFBQUFBO1xuICB9XG5cbiAgLnRvcC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYm90dG9tLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY5RkI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmLnRpdGxlLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmZvcm0taXRlbSB7XG4gICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcblxuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAxNy4zMXB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICM0QTkwRTI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAuYWN0aW9uLWJ0biB7XG4gICAgd2lkdGg6IDIwN3B4O1xuICB9XG5cbn1cblxuLmhyLWxpbmUge1xuICBtYXJnaW46IDE2cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-form-cover-dm-form-cover-dm-module-es2015.js.map