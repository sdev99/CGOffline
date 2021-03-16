(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-induction-rich-text-checkin-induction-rich-text-module"],{

/***/ "0SBH":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-rich-text/checkin-induction-rich-text.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CheckinInductionRichTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionRichTextPageModule", function() { return CheckinInductionRichTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkin_induction_rich_text_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-induction-rich-text-routing.module */ "KyAD");
/* harmony import */ var _checkin_induction_rich_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-induction-rich-text.page */ "RqeY");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CheckinInductionRichTextPageModule = class CheckinInductionRichTextPageModule {
};
CheckinInductionRichTextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkin_induction_rich_text_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinInductionRichTextPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_checkin_induction_rich_text_page__WEBPACK_IMPORTED_MODULE_6__["CheckinInductionRichTextPage"]]
    })
], CheckinInductionRichTextPageModule);



/***/ }),

/***/ "D9ID":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-rich-text/checkin-induction-rich-text.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n}\nion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content .content {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\nion-content .text-title-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 31px;\n  text-align: center;\n  color: #444444;\n}\nion-content .text-view {\n  margin: 5%;\n  height: auto;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4taW5kdWN0aW9uLXJpY2gtdGV4dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFHRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFISiIsImZpbGUiOiJjaGVja2luLWluZHVjdGlvbi1yaWNoLXRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG5cbiAgJi5kZWRpY2F0ZWQtbW9kZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRleHQtdGl0bGUtMSB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgfVxuXG4gIC50ZXh0LXZpZXcge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjMTcxNTM4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "KyAD":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-rich-text/checkin-induction-rich-text-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: CheckinInductionRichTextPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionRichTextPageRoutingModule", function() { return CheckinInductionRichTextPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkin_induction_rich_text_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-induction-rich-text.page */ "RqeY");




const routes = [
    {
        path: '',
        component: _checkin_induction_rich_text_page__WEBPACK_IMPORTED_MODULE_3__["CheckinInductionRichTextPage"]
    }
];
let CheckinInductionRichTextPageRoutingModule = class CheckinInductionRichTextPageRoutingModule {
};
CheckinInductionRichTextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinInductionRichTextPageRoutingModule);



/***/ }),

/***/ "RqeY":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-rich-text/checkin-induction-rich-text.page.ts ***!
  \***************************************************************************************/
/*! exports provided: CheckinInductionRichTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionRichTextPage", function() { return CheckinInductionRichTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkin_induction_rich_text_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkin-induction-rich-text.page.html */ "rQMF");
/* harmony import */ var _checkin_induction_rich_text_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin-induction-rich-text.page.scss */ "D9ID");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");










let CheckinInductionRichTextPage = class CheckinInductionRichTextPage {
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
CheckinInductionRichTextPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
CheckinInductionRichTextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-induction-rich-text',
        template: _raw_loader_checkin_induction_rich_text_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_induction_rich_text_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinInductionRichTextPage);



/***/ }),

/***/ "rQMF":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-induction-rich-text/checkin-induction-rich-text.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" [modalTitle]=\"'Induction'\"\n                      (closeModal)=\"onClose()\"></app-modal-header>\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Check In\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <div class=\"content-container\">\n        <app-back-continue-toolbar *ngIf=\"sharedDataService.dedicatedMode\" (back)=\"onBack()\"\n                                   (continue)=\"onContinue()\"></app-back-continue-toolbar>\n        <div class=\"content\">\n            <h6 class=\"text-title-1\" *ngIf=\"!sharedDataService.dedicatedMode\">\n                Rich Text\n            </h6>\n\n            <div class=\"text-view\" *ngIf=\"inductionItem\">\n                <div [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(inductionItem.contentDetails)\"></div>\n            </div>\n\n        </div>\n\n        <ion-footer mode=\"ios\" *ngIf=\"!sharedDataService.dedicatedMode\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Continue</ion-button>\n        </ion-footer>\n    </div>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=pages-checkin-induction-rich-text-checkin-induction-rich-text-module-es2015.js.map