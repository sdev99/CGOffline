(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-linksend-success-linksend-success-module"],{

/***/ "GV0p":
/*!*******************************************************************!*\
  !*** ./src/app/pages/linksend-success/linksend-success.module.ts ***!
  \*******************************************************************/
/*! exports provided: LinksendSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksendSuccessPageModule", function() { return LinksendSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _linksend_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linksend-success-routing.module */ "r+lq");
/* harmony import */ var _linksend_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./linksend-success.page */ "HbsV");







let LinksendSuccessPageModule = class LinksendSuccessPageModule {
};
LinksendSuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _linksend_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["LinksendSuccessPageRoutingModule"]
        ],
        declarations: [_linksend_success_page__WEBPACK_IMPORTED_MODULE_6__["LinksendSuccessPage"]]
    })
], LinksendSuccessPageModule);



/***/ }),

/***/ "HbsV":
/*!*****************************************************************!*\
  !*** ./src/app/pages/linksend-success/linksend-success.page.ts ***!
  \*****************************************************************/
/*! exports provided: LinksendSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksendSuccessPage", function() { return LinksendSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_linksend_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./linksend-success.page.html */ "PNRk");
/* harmony import */ var _linksend_success_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linksend-success.page.scss */ "bMJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let LinksendSuccessPage = class LinksendSuccessPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    onContinue() {
        this.navCtrl.navigateBack(['/login']);
    }
};
LinksendSuccessPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
LinksendSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-linksend-success',
        template: _raw_loader_linksend_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linksend_success_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LinksendSuccessPage);



/***/ }),

/***/ "PNRk":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/linksend-success/linksend-success.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\">\n    <div class=\"content-container\">\n        <div class=\"content\">\n            <ion-icon src=\"./assets/icon/Mail.svg\"></ion-icon>\n\n            <div class=\"title-1\">Link Sent</div>\n            <div class=\"text-1\">Please check your inbox. We have sent a password reset link to your registered email\n                address.\n            </div>\n        </div>\n\n        <ion-footer mode=\"ios\">\n            <div class=\"text-2 ion-text-center ion-padding\">Remembered your password?</div>\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Go to Sign in</ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "bMJF":
/*!*******************************************************************!*\
  !*** ./src/app/pages/linksend-success/linksend-success.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n  --background: var(--ion-color-app-primary);\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n  text-align: center;\n}\nion-content .content ion-icon {\n  width: 100px;\n  height: 100px;\n}\nion-content .content .title-1 {\n  margin-top: 48px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #FFFFFF;\n}\nion-content .content .text-1 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #FFFFFF;\n}\n.text-2 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #FFFFFF;\n}\nion-footer {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpbmtzZW5kLXN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFETjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSkY7QUFPQTtFQUNFLHdDQUFBO0FBSkYiLCJmaWxlIjoibGlua3NlbmQtc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOS4wNyU7XG4gIC0tcGFkZGluZy1lbmQ6IDkuMDclO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtcHJpbWFyeSk7XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAudGl0bGUtMSB7XG4gICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgfVxuXG4gICAgLnRleHQtMSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB9XG5cbiAgfVxufVxuXG4udGV4dC0yIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "r+lq":
/*!***************************************************************************!*\
  !*** ./src/app/pages/linksend-success/linksend-success-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: LinksendSuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksendSuccessPageRoutingModule", function() { return LinksendSuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _linksend_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linksend-success.page */ "HbsV");




const routes = [
    {
        path: '',
        component: _linksend_success_page__WEBPACK_IMPORTED_MODULE_3__["LinksendSuccessPage"]
    }
];
let LinksendSuccessPageRoutingModule = class LinksendSuccessPageRoutingModule {
};
LinksendSuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LinksendSuccessPageRoutingModule);



/***/ })

}]);