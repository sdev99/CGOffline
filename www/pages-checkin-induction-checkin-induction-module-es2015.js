(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-induction-checkin-induction-module"],{

/***/ "5B2E":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-induction/checkin-induction.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" [modalTitle]=\"'Induction'\"\n                      (closeModal)=\"onClose()\"></app-modal-header>\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.dedicatedModeLocationUse.locationName\"\n                         modalSubTitle=\"Check In/Out\" (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <div class=\"content-container\">\n        <div class=\"content\">\n            <div *ngIf=\"sharedDataService.dedicatedMode\" class=\"page-title\">Induction</div>\n\n            <div class=\"ion-text-center ion-padding\" *ngIf=\"checkinDetail\"\n                 [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(checkinDetail?.checkInInduction?.introduction)\"></div>\n\n            <ion-button *ngIf=\"sharedDataService.dedicatedMode\" expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">\n                Continue\n            </ion-button>\n\n        </div>\n\n        <ion-footer mode=\"ios\" *ngIf=\"!sharedDataService.dedicatedMode\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Continue</ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n\n");

/***/ }),

/***/ "A4fA":
/*!*********************************************************************!*\
  !*** ./src/app/pages/checkin-induction/checkin-induction.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n  --overflow: auto;\n}\nion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode .action-btn {\n  width: 207px;\n}\nion-content .content {\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1;\n  overflow-y: auto;\n}\nion-content .content .page-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 31px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #171538;\n  margin-bottom: 27px;\n}\nion-content .content .text-title-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-1 {\n  width: 63.3%;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 28px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-2 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 28px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-3 {\n  margin-top: 32px;\n  width: 68%;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 28px;\n  text-align: center;\n  color: #171538;\n}\nion-footer {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4taW5kdWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UscUJBQUE7QUFISjtBQUtJO0VBQ0UsWUFBQTtBQUhOO0FBT0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUxOO0FBUUk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOTjtBQVNJO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVBOO0FBVUk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFSTjtBQVdJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVE47QUFjQTtFQUNFLHlCQUFBO0FBWEYiLCJmaWxlIjoiY2hlY2tpbi1pbmR1Y3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG5cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tb3ZlcmZsb3c6IGF1dG87XG5cbiAgJi5kZWRpY2F0ZWQtbW9kZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgd2lkdGg6IDIwN3B4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICAgIH1cblxuICAgIC50ZXh0LXRpdGxlLTEge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgLnRleHQtMSB7XG4gICAgICB3aWR0aDogNjMuMyU7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIC50ZXh0LTIge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG5cbiAgICAudGV4dC0zIHtcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICB3aWR0aDogNjglO1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "Qqzc":
/*!*******************************************************************!*\
  !*** ./src/app/pages/checkin-induction/checkin-induction.page.ts ***!
  \*******************************************************************/
/*! exports provided: CheckinInductionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionPage", function() { return CheckinInductionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkin_induction_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkin-induction.page.html */ "5B2E");
/* harmony import */ var _checkin_induction_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin-induction.page.scss */ "A4fA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/demo-data.service */ "vH+u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");











let CheckinInductionPage = class CheckinInductionPage {
    constructor(navCtrl, route, sharedDataService, utilService, accountService, sanitizer) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.sharedDataService = sharedDataService;
        this.utilService = utilService;
        this.accountService = accountService;
        this.sanitizer = sanitizer;
        this.inductionFiles = _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__["DemoDataService"].inductionFiles.clone();
        if (!this.sharedDataService.dedicatedMode) {
            this.user = accountService.userValue;
            this.checkInForLocation = this.sharedDataService.checkInForLocation;
        }
        this.checkinDetail = this.sharedDataService.checkInDetail;
    }
    ngOnInit() {
    }
    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateBack('/dashboard-dm');
        }
        else {
            this.navCtrl.navigateBack('/checkinout-confirm');
        }
    }
    onContinue() {
        var _a;
        if (this.checkinDetail) {
            let userId;
            if (this.sharedDataService.dedicatedMode) {
                userId = this.sharedDataService.dedicatedModeUserDetail.userId;
            }
            else {
                userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId;
            }
            this.sharedDataService.inductionNavigationProcess(userId, -1);
        }
    }
};
CheckinInductionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
];
CheckinInductionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-induction',
        template: _raw_loader_checkin_induction_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_induction_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinInductionPage);



/***/ }),

/***/ "VZQO":
/*!*********************************************************************!*\
  !*** ./src/app/pages/checkin-induction/checkin-induction.module.ts ***!
  \*********************************************************************/
/*! exports provided: CheckinInductionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionPageModule", function() { return CheckinInductionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkin_induction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-induction-routing.module */ "tver");
/* harmony import */ var _checkin_induction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-induction.page */ "Qqzc");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CheckinInductionPageModule = class CheckinInductionPageModule {
};
CheckinInductionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkin_induction_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinInductionPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_checkin_induction_page__WEBPACK_IMPORTED_MODULE_6__["CheckinInductionPage"]]
    })
], CheckinInductionPageModule);



/***/ }),

/***/ "tver":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/checkin-induction/checkin-induction-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckinInductionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionPageRoutingModule", function() { return CheckinInductionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkin_induction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-induction.page */ "Qqzc");




const routes = [
    {
        path: '',
        component: _checkin_induction_page__WEBPACK_IMPORTED_MODULE_3__["CheckinInductionPage"]
    }
];
let CheckinInductionPageRoutingModule = class CheckinInductionPageRoutingModule {
};
CheckinInductionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinInductionPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-checkin-induction-checkin-induction-module-es2015.js.map