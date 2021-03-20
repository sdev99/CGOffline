(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-induction-va-checkin-induction-va-module"],{

/***/ "4/SQ":
/*!***************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-va/checkin-induction-va.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header.dedicated-mode ::ng-deep app-back-continue-toolbar ion-toolbar {\n  padding-top: 22px;\n  --background: #F6F9FB;\n}\n\nion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\n\nion-content.dedicated-mode .va-content {\n  width: 60%;\n  margin: auto;\n  overflow: auto;\n  font-size: 14px;\n  line-height: 20px;\n  padding-bottom: 150px;\n}\n\nion-content.dedicated-mode .action-btn-container {\n  width: 60%;\n  left: 20%;\n  bottom: 0;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\nion-content.dedicated-mode .action-btn-container .action-btn {\n  width: 200px;\n}\n\nion-content .va-content {\n  padding: 16px 24px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4taW5kdWN0aW9uLXZhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFGUjs7QUFTRTtFQUNFLHFCQUFBO0FBTko7O0FBUUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQU5OOztBQVNJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7QUFQTjs7QUFTTTtFQUNFLFlBQUE7QUFQUjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVZKIiwiZmlsZSI6ImNoZWNraW4taW5kdWN0aW9uLXZhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAmLmRlZGljYXRlZC1tb2RlIHtcbiAgICA6Om5nLWRlZXAgYXBwLWJhY2stY29udGludWUtdG9vbGJhciB7XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNGNkY5RkI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgJi5kZWRpY2F0ZWQtbW9kZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gICAgLnZhLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBsZWZ0OiAyMCU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudmEtY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgfVxuXG59XG5cbiJdfQ== */");

/***/ }),

/***/ "E7oE":
/*!*************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-va/checkin-induction-va.page.ts ***!
  \*************************************************************************/
/*! exports provided: CheckinInductionVaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionVaPage", function() { return CheckinInductionVaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkin_induction_va_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkin-induction-va.page.html */ "lKBU");
/* harmony import */ var _checkin_induction_va_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin-induction-va.page.scss */ "4/SQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");










let CheckinInductionVaPage = class CheckinInductionVaPage {
    constructor(navCtrl, route, sharedDataService, utilService, accountService, sanitizer) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.sharedDataService = sharedDataService;
        this.utilService = utilService;
        this.accountService = accountService;
        this.sanitizer = sanitizer;
        if (!sharedDataService.dedicatedMode) {
            this.user = accountService.userValue;
        }
        this.route.queryParams.subscribe((parameters) => {
            var _a, _b, _c;
            const inductionContentItemIndex = parameters.inductionContentItemIndex;
            if (((_b = (_a = this.sharedDataService.checkInDetail) === null || _a === void 0 ? void 0 : _a.checkInInductionItems) === null || _b === void 0 ? void 0 : _b.length) > inductionContentItemIndex) {
                this.inductionItem = (_c = this.sharedDataService.checkInDetail) === null || _c === void 0 ? void 0 : _c.checkInInductionItems[inductionContentItemIndex];
            }
        });
    }
    ngOnInit() {
    }
    onBack() {
        this.navCtrl.back();
    }
    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateRoot('dashboard-dm', { replaceUrl: true });
        }
        else {
            this.navCtrl.navigateBack('/checkinout-confirm', { replaceUrl: true });
        }
    }
    onContinue() {
        var _a;
        let userId;
        if (this.sharedDataService.dedicatedMode) {
            userId = this.sharedDataService.dedicatedModeUserDetail.userId;
        }
        else {
            userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId;
        }
        this.sharedDataService.inductionNavigationProcess(userId, this.sharedDataService.inductionContentItemIndex);
    }
};
CheckinInductionVaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
CheckinInductionVaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-induction-va',
        template: _raw_loader_checkin_induction_va_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_induction_va_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinInductionVaPage);



/***/ }),

/***/ "IqrJ":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-va/checkin-induction-va-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CheckinInductionVaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionVaPageRoutingModule", function() { return CheckinInductionVaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkin_induction_va_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-induction-va.page */ "E7oE");




const routes = [
    {
        path: '',
        component: _checkin_induction_va_page__WEBPACK_IMPORTED_MODULE_3__["CheckinInductionVaPage"]
    }
];
let CheckinInductionVaPageRoutingModule = class CheckinInductionVaPageRoutingModule {
};
CheckinInductionVaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinInductionVaPageRoutingModule);



/***/ }),

/***/ "lKBU":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-induction-va/checkin-induction-va.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" [modalTitle]=\"'Visitor Agreement'\"\n                      (closeModal)=\"onClose()\"></app-modal-header>\n\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Check In\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n\n    <app-back-continue-toolbar\n            *ngIf=\"sharedDataService.dedicatedMode\"\n            (back)=\"onBack()\"\n            title=\"Visitor Agreement\"\n            hideRightBtn=\"true\"\n            (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n</ion-header>\n\n<ion-content fullscreen [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <div class=\"content-container\">\n        <div *ngIf=\"inductionItem.contentDetails\" class=\"va-content\"\n             [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(inductionItem.contentDetails)\"></div>\n\n\n        <div class=\"action-btn-container\" *ngIf=\"sharedDataService.dedicatedMode\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">I Agree</ion-button>\n        </div>\n\n        <div class=\"fill-vertical-space\"></div>\n\n        <ion-footer mode=\"ios\" *ngIf=\"!sharedDataService.dedicatedMode\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Continue</ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n\n\n");

/***/ }),

/***/ "zBir":
/*!***************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-va/checkin-induction-va.module.ts ***!
  \***************************************************************************/
/*! exports provided: CheckinInductionVaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionVaPageModule", function() { return CheckinInductionVaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkin_induction_va_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-induction-va-routing.module */ "IqrJ");
/* harmony import */ var _checkin_induction_va_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-induction-va.page */ "E7oE");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CheckinInductionVaPageModule = class CheckinInductionVaPageModule {
};
CheckinInductionVaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkin_induction_va_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinInductionVaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_checkin_induction_va_page__WEBPACK_IMPORTED_MODULE_6__["CheckinInductionVaPage"]]
    })
], CheckinInductionVaPageModule);



/***/ })

}]);