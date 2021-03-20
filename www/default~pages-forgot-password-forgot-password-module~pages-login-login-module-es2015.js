(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-forgot-password-forgot-password-module~pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-app-primary);\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n}\nion-content .content-vertically-arrange {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\nion-content .content-vertically-arrange .vertically-fill-space {\n  display: flex;\n  flex: 1;\n}\nion-content .page-title {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 29px;\n  color: #ffffff;\n}\nion-content .page-description {\n  margin-top: 16px;\n  width: 163px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #ffffff;\n}\nion-content .input-form {\n  margin-top: 10px;\n}\nion-content .bottom-view {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\nion-content .bottom-view .custom-language-dropdown {\n  height: 32px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 17px;\n  border-radius: 4px;\n  color: #ffffff;\n}\nion-content .bottom-view .custom-language-dropdown ion-icon {\n  font-size: 16px;\n  margin-right: 5px;\n}\nion-content .bottom-view ion-select {\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 17px;\n  border: 1px solid #fff;\n  padding: 6px 12px 6px 13px;\n  border-radius: 4px;\n  color: #ffffff;\n  flex-direction: row-reverse;\n}\nion-content .bottom-view ion-select::part(icon) {\n  margin-right: 12px;\n  opacity: 1;\n}\nion-content .bottom-view .device-uid {\n  margin-top: 20px;\n  margin-bottom: calc(env(safe-area-inset-bottom) + 17px);\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  color: #ffffff;\n  text-align: center;\n  opacity: 0.5;\n}\nion-content .app-warning-component {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVlFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVZGO0FBSEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUtKO0FBSEk7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQUtOO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU1JO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKTjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSlI7QUFRSTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFOTjtBQVFNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBTlI7QUFVSTtFQUNFLGdCQUFBO0VBQ0EsdURBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUk47QUFZRTtFQUNFLG1CQUFBO0FBVkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuY29udGVudC12ZXJ0aWNhbGx5LWFycmFuZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gICAgLnZlcnRpY2FsbHktZmlsbC1zcGFjZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cblxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtcHJpbWFyeSk7XG4gIC0tcGFkZGluZy1zdGFydDogOS4wNyU7XG4gIC0tcGFkZGluZy1lbmQ6IDkuMDclO1xuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYWdlLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHdpZHRoOiAxNjNweDtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuaW5wdXQtZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5ib3R0b20tdmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuY3VzdG9tLWxhbmd1YWdlLWRyb3Bkb3duIHtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFNGIFBybyBEaXNwbGF5O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgcGFkZGluZzogNnB4IDEycHggNnB4IDEzcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblxuICAgICAgJjo6cGFydChpY29uKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV2aWNlLXVpZCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAxN3B4KTtcbiAgICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gRGlzcGxheTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC5hcHAtd2FybmluZy1jb21wb25lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\">\n  <div class=\"content-vertically-arrange\">\n    <div class=\"vertically-fill-space\"></div>\n\n    <h2 class=\"page-title\">{{'LOGIN.SIGN_IN' | translate}}</h2>\n    <p class=\"page-description\">{{'LOGIN.PAGE_DESCRIPTION' | translate}}</p>\n\n    <form class=\"input-form\" [formGroup]=\"loginForm\">\n      <div class=\"app-warning-component\">\n        <app-warning-component\n          *ngIf=\"errorMessage && errorMessage.length>0\"\n          [message]=\"errorMessage\"\n        ></app-warning-component>\n      </div>\n\n      <ion-item class=\"email-item\">\n        <ion-label position=\"stacked\">{{'LOGIN.EMAIL' | translate}}</ion-label>\n        <ion-input\n          formControlName=\"email\"\n          autocapitalize=\"off\"\n          autocomplete=\"email\"\n          inputmode=\"email\"\n          [ngClass]=\"{'error': (isSubmitted && !loginForm.controls.email.valid)}\"\n          [placeholder]=\"'LOGIN.EMAIL_PLACEHOLDER' | translate\"\n          type=\"email\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item class=\"password-item\">\n        <ion-label position=\"stacked\"\n          >{{'LOGIN.PASSWORD' | translate}}</ion-label\n        >\n        <ion-input\n          formControlName=\"password\"\n          autocapitalize=\"off\"\n          [ngClass]=\"{'error': (isSubmitted && !loginForm.controls.password.valid)}\"\n          [placeholder]=\"'LOGIN.PASSWORD_PLACEHOLDER' | translate\"\n          type=\"password\"\n        ></ion-input>\n      </ion-item>\n    </form>\n\n    <ion-button expand=\"full\" class=\"signin-btn\" (click)=\"onSubmit()\"\n      >{{'LOGIN.SIGN_IN' | translate}}</ion-button\n    >\n    <ion-button\n      fill=\"clear\"\n      class=\"forgot-password-btn\"\n      routerLink=\"/forgot-password\"\n    >\n      {{'LOGIN.FORGOT_PASSWORD' | translate}}\n    </ion-button>\n\n    <div class=\"vertically-fill-space\"></div>\n\n    <div class=\"bottom-view\">\n      <!--            <ion-select class=\"login-language-dropdown\" placeholder=\"ENGLISH\" interface=\"action-sheet\"-->\n      <!--                        cancelText=\"cancel\"-->\n      <!--                        [(ngModel)]=\"selectedLanguage\">-->\n      <!--                <ion-select-option *ngFor=\"let item of languages\" [value]=\"item.code\">{{item.name}}</ion-select-option>-->\n      <!--            </ion-select>-->\n\n      <ion-button\n        fill=\"outline\"\n        color=\"light\"\n        size=\"small\"\n        class=\"custom-language-dropdown\"\n        (click)=\"openLanguages()\"\n      >\n        <ion-icon name=\"chevron-down-sharp\"></ion-icon>\n        {{selectedLanguage ? UtilService.findObj(languages, 'code',\n        selectedLanguage).name : 'ENGLISH'}}\n      </ion-button>\n\n      <ion-text class=\"device-uid\"\n        >DEVICE UID&nbsp;<span class=\"selectable-text\"\n          >{{UtilService.modifyUDID(sharedDataService.deviceUID)}}</span\n        ></ion-text\n      >\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_demo_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/demo-data.service */ "vH+u");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












let LoginPage = class LoginPage {
    constructor(utilService, navCtrl, actionSheetController, sharedDataService, accountService, translateService) {
        this.utilService = utilService;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.sharedDataService = sharedDataService;
        this.accountService = accountService;
        this.translateService = translateService;
        this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"];
        this.errorMessage = "";
        this.isSubmitted = false;
        this.languages = _services_demo_data_service__WEBPACK_IMPORTED_MODULE_7__["DemoDataService"].languages.clone();
        this.selectedLanguage = this.languages[0].code;
        this.selectedLanguage = localStorage.getItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.APP_LANGUAGE);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])),
        });
    }
    ngOnInit() {
        var _a;
        if (((_a = this.accountService.userValue) === null || _a === void 0 ? void 0 : _a.userId) &&
            !this.accountService.userValue.isMobileSessionExpiration) {
            this.navCtrl.navigateRoot("/tabs/dashboard", { replaceUrl: true });
        }
        if (_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].isLocalHost()) {
            // setTimeout(() => {
            //     this.navCtrl.navigateRoot('/new-account-setup', {replaceUrl: true});
            // }, 3000);
        }
    }
    openLanguages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const buttons = [];
            this.languages.map((item) => {
                buttons.push({
                    text: item.name,
                    handler: () => {
                        this.selectedLanguage = item.code;
                        localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.APP_LANGUAGE, this.selectedLanguage);
                        this.translateService.use(this.selectedLanguage);
                    },
                });
            });
            buttons.push({
                text: "Cancel",
                role: "cancel",
                handler: () => { },
            });
            const actionSheet = yield this.actionSheetController.create({
                cssClass: "my-custom-class",
                buttons,
            });
            yield actionSheet.present();
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            this.errorMessage = "";
            if (this.loginForm.valid) {
                const email = this.loginForm.controls.email.value;
                const password = this.loginForm.controls.password.value;
                this.utilService.presentLoadingWithOptions();
                this.accountService.login(email, password).subscribe((data) => {
                    this.utilService.hideLoading();
                    this.sharedDataService.isLoginAfterAppOpen = true;
                    this.navCtrl.navigateRoot("/tabs/dashboard");
                    if (localStorage.getItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.PUSH_PERMISSION_ALLOWED) === "true") {
                        this.sharedDataService.updatePushSettingOnServer(true);
                    }
                    else {
                        this.sharedDataService.updatePushSettingOnServer(false);
                    }
                }, ({ message }) => {
                    this.utilService.hideLoading();
                    this.errorMessage = message;
                });
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);