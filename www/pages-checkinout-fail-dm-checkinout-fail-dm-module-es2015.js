(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-fail-dm-checkinout-fail-dm-module"],{

/***/ "BMVa":
/*!***********************************************************************!*\
  !*** ./src/app/pages/checkinout-fail-dm/checkinout-fail-dm.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n  --background: #F8F9FB;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n  width: 100%;\n  text-align: center;\n}\nion-content .content ion-icon {\n  width: 100px;\n  height: 100px;\n}\nion-content .content .title-1 {\n  margin-top: 48px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #171538;\n}\nion-content .content .text-1 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #E74731;\n}\nion-content .content .text-2 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #171538;\n  width: 70%;\n}\nion-content .content .action-btn {\n  margin-top: 32px;\n  width: 191px;\n}\nion-content ion-footer {\n  background-color: #F8F9FB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtZmFpbC1kbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFITjtBQU9FO0VBQ0UseUJBQUE7QUFMSiIsImZpbGUiOiJjaGVja2lub3V0LWZhaWwtZG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDkuMDclO1xuICAtLXBhZGRpbmctZW5kOiA5LjA3JTtcbiAgLS1iYWNrZ3JvdW5kOiAjRjhGOUZCO1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlLTEge1xuICAgICAgbWFyZ2luLXRvcDogNDhweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIC50ZXh0LTEge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICNFNzQ3MzE7XG4gICAgfVxuXG4gICAgLnRleHQtMiB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgIHdpZHRoOiAxOTFweFxuICAgIH1cbiAgfVxuXG4gIGlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkI7XG4gIH1cbn1cblxuIl19 */");

/***/ }),

/***/ "Q69R":
/*!*********************************************************************!*\
  !*** ./src/app/pages/checkinout-fail-dm/checkinout-fail-dm.page.ts ***!
  \*********************************************************************/
/*! exports provided: CheckinoutFailDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutFailDmPage", function() { return CheckinoutFailDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkinout_fail_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkinout-fail-dm.page.html */ "mx9n");
/* harmony import */ var _checkinout_fail_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkinout-fail-dm.page.scss */ "BMVa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");







let CheckinoutFailDmPage = class CheckinoutFailDmPage {
    constructor(sharedDataService, navCtrl, activatedRoute) {
        this.sharedDataService = sharedDataService;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.pageTitle = '';
        this.title = '';
        this.errorTitle = '';
        this.errorMessage = '';
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.pageTitle) {
                    this.pageTitle = res.pageTitle;
                }
                if (res.title) {
                    this.title = res.title;
                }
                if (res.errorTitle) {
                    this.errorTitle = res.errorTitle;
                }
                if (res.errorMessage) {
                    this.errorMessage = res.errorMessage;
                }
            }
        });
    }
    ngOnInit() {
    }
    onClose() {
        this.navCtrl.back();
    }
    onContinue() {
        this.navCtrl.navigateRoot(['/dashboard-dm']);
    }
};
CheckinoutFailDmPage.ctorParameters = () => [
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
CheckinoutFailDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkinout-fail-dm',
        template: _raw_loader_checkinout_fail_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_fail_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinoutFailDmPage);



/***/ }),

/***/ "mx9n":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-fail-dm/checkinout-fail-dm.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" [modalSubTitle]=\"pageTitle\"\n                     (closeModal)=\"onClose()\"></app-modal-header-dm>\n\n<ion-content fullscreen=\"true\">\n    <div class=\"content\">\n        <ion-icon src=\"./assets/icon/ErrorCheck.svg\"></ion-icon>\n\n        <div class=\"text-1\">{{title}}</div>\n        <div class=\"title-1\">{{errorTitle}}</div>\n        <div class=\"text-2\">{{errorMessage}}</div>\n        <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Exit</ion-button>\n\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "qv4L":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/checkinout-fail-dm/checkinout-fail-dm-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckinoutFailDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutFailDmPageRoutingModule", function() { return CheckinoutFailDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkinout_fail_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkinout-fail-dm.page */ "Q69R");




const routes = [
    {
        path: '',
        component: _checkinout_fail_dm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutFailDmPage"]
    }
];
let CheckinoutFailDmPageRoutingModule = class CheckinoutFailDmPageRoutingModule {
};
CheckinoutFailDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinoutFailDmPageRoutingModule);



/***/ }),

/***/ "yYLy":
/*!***********************************************************************!*\
  !*** ./src/app/pages/checkinout-fail-dm/checkinout-fail-dm.module.ts ***!
  \***********************************************************************/
/*! exports provided: CheckinoutFailDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutFailDmPageModule", function() { return CheckinoutFailDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkinout_fail_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkinout-fail-dm-routing.module */ "qv4L");
/* harmony import */ var _checkinout_fail_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkinout-fail-dm.page */ "Q69R");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CheckinoutFailDmPageModule = class CheckinoutFailDmPageModule {
};
CheckinoutFailDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkinout_fail_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinoutFailDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_checkinout_fail_dm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutFailDmPage"]]
    })
], CheckinoutFailDmPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-checkinout-fail-dm-checkinout-fail-dm-module-es2015.js.map