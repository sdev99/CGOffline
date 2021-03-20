(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-account-setup-new-account-setup-module"],{

/***/ "kDoP":
/*!*********************************************************************!*\
  !*** ./src/app/pages/new-account-setup/new-account-setup.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewAccountSetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountSetupPageModule", function() { return NewAccountSetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_account_setup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-account-setup-routing.module */ "qNr4");
/* harmony import */ var _new_account_setup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-account-setup.page */ "riNC");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let NewAccountSetupPageModule = class NewAccountSetupPageModule {
};
NewAccountSetupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_account_setup_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewAccountSetupPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_new_account_setup_page__WEBPACK_IMPORTED_MODULE_6__["NewAccountSetupPage"]]
    })
], NewAccountSetupPageModule);



/***/ }),

/***/ "qNr4":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/new-account-setup/new-account-setup-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NewAccountSetupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountSetupPageRoutingModule", function() { return NewAccountSetupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_account_setup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-account-setup.page */ "riNC");




const routes = [
    {
        path: '',
        component: _new_account_setup_page__WEBPACK_IMPORTED_MODULE_3__["NewAccountSetupPage"]
    }
];
let NewAccountSetupPageRoutingModule = class NewAccountSetupPageRoutingModule {
};
NewAccountSetupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewAccountSetupPageRoutingModule);



/***/ }),

/***/ "riNC":
/*!*******************************************************************!*\
  !*** ./src/app/pages/new-account-setup/new-account-setup.page.ts ***!
  \*******************************************************************/
/*! exports provided: NewAccountSetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountSetupPage", function() { return NewAccountSetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_account_setup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-account-setup.page.html */ "xlI3");
/* harmony import */ var _new_account_setup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-account-setup.page.scss */ "sgAq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");










let NewAccountSetupPage = class NewAccountSetupPage {
    constructor(utilService, navCtrl, route, accountService, sharedDataService) {
        this.utilService = utilService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.accountService = accountService;
        this.sharedDataService = sharedDataService;
        this.errorMessage = "";
        this.isSubmitted = false;
        this.isConfirm = false;
        route.queryParams.subscribe((params) => {
            if (params) {
                if (params.userId) {
                    this.userId = params.userId;
                }
            }
        });
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])),
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilService.presentLoadingWithOptions();
            this.accountService.getUserProfile(this.userId).subscribe((userProfile) => {
                this.userProfile = userProfile;
                this.utilService.hideLoading();
            }, (error) => {
                this.utilService.hideLoading();
            });
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            this.errorMessage = "";
            if (this.myForm.valid) {
                const password = this.myForm.controls.password.value;
                const confirmPassword = this.myForm.controls.passwordConfirm.value;
                if (password === confirmPassword) {
                    this.utilService.presentLoadingWithOptions();
                    this.accountService
                        .newAccountSetup({
                        userId: this.userId,
                        password,
                        confirmPassword,
                    })
                        .subscribe((response) => {
                        this.sharedDataService.isLoginAfterAppOpen = true;
                        this.utilService.hideLoading();
                        this.navCtrl.navigateRoot("/tabs/dashboard", {
                            replaceUrl: true,
                        });
                    }, (error) => {
                        this.errorMessage = (error === null || error === void 0 ? void 0 : error.message) || error;
                        this.utilService.hideLoading();
                    });
                }
                else {
                    this.errorMessage =
                        "Passwords are not matching. Please check and correct.";
                }
            }
        });
    }
};
NewAccountSetupPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__["SharedDataService"] }
];
NewAccountSetupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-new-account-setup",
        template: _raw_loader_new_account_setup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_account_setup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewAccountSetupPage);



/***/ }),

/***/ "sgAq":
/*!*********************************************************************!*\
  !*** ./src/app/pages/new-account-setup/new-account-setup.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-app-primary);\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n}\nion-content .content {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-content .content .fill-vertical-space {\n  display: flex;\n  flex: 1;\n}\nion-content .content .input-form {\n  margin-top: 0;\n}\nion-content .content .page-title {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 29px;\n  color: #FFFFFF;\n}\nion-content .content .page-description {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #FFFFFF;\n  text-align: left;\n}\nion-content .content .app-warning-component {\n  margin-bottom: 20px;\n}\nion-content .content .agree-checkbox {\n  margin-top: 16px;\n  --padding-start: 0px;\n}\nion-content .content .agree-checkbox ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 18px;\n  color: #FFFFFF;\n  margin-bottom: 0 !important;\n}\nion-content .content .agree-checkbox ion-label a {\n  color: #ffffff;\n  font-size: 12px;\n  text-decoration: underline;\n}\nion-content .content .agree-checkbox ion-checkbox {\n  --size: 16px;\n  --background: #FFFFFF;\n  --background-checked: #2A6FDB;\n  --checkmark-color: #FFFFFF;\n  --border-color: #A1A8CA;\n  --border-radius: 2px;\n  --border-style: solid;\n  --border-width: 1px;\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25ldy1hY2NvdW50LXNldHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQUNOO0FBRUk7RUFDRSxhQUFBO0FBQU47QUFJSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGTjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKTjtBQVFJO0VBQ0UsbUJBQUE7QUFOTjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQVBOO0FBU007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFQUjtBQVNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQVBWO0FBV007RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVRSIiwiZmlsZSI6Im5ldy1hY2NvdW50LXNldHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLXByaW1hcnkpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDkuMDclO1xuICAtLXBhZGRpbmctZW5kOiA5LjA3JTtcblxuICAuY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuZmlsbC12ZXJ0aWNhbC1zcGFjZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuaW5wdXQtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIH1cblxuXG4gICAgLnBhZ2UtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuXG4gICAgLmFwcC13YXJuaW5nLWNvbXBvbmVudCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5hZ3JlZS1jaGVja2JveCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAgIC0tc2l6ZTogMTZweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzJBNkZEQjtcbiAgICAgICAgLS1jaGVja21hcmstY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjQTFBOENBO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "xlI3":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-account-setup/new-account-setup.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\">\n\n    <div class=\"content\">\n        <div class=\"fill-vertical-space\"></div>\n        <h2 class=\"page-title\">New Account Setup</h2>\n        <p class=\"page-description\" *ngIf=\"userProfile\">\n            Hello, {{userProfile.userFullName}}.\n            <br/>\n            You're one step away from using the platform.\n            <br/>\n            Please set up your password to start\n        </p>\n        <div class=\"fill-vertical-space\"></div>\n\n        <div class=\"input-form\">\n            <Form [formGroup]=\"myForm\">\n                <div class=\"app-warning-component\">\n                    <app-warning-component *ngIf=\"errorMessage && errorMessage.length>0\"\n                                           [message]=\"errorMessage\"></app-warning-component>\n                </div>\n\n\n                <ion-item class=\"password-item\">\n                    <ion-label position=\"stacked\">New Password</ion-label>\n                    <ion-input\n                            formControlName=\"password\"\n                            autocapitalize=\"off\"\n                            [ngClass]=\"{'error': (isSubmitted && !myForm.controls.password.valid)}\"\n                            placeholder=\"Enter new password\"\n                            type=\"password\"\n                    ></ion-input>\n                </ion-item>\n\n                <ion-item class=\"password-item\">\n                    <ion-label position=\"stacked\">Confirm New Password</ion-label>\n                    <ion-input\n                            formControlName=\"passwordConfirm\"\n                            autocapitalize=\"off\"\n                            [ngClass]=\"{'error': (isSubmitted && !myForm.controls.passwordConfirm.valid)}\"\n                            placeholder=\"Confirm new password\"\n                            type=\"password\"\n                    ></ion-input>\n                </ion-item>\n\n            </Form>\n\n            <ion-item tappable lines=\"none\" class=\"agree-checkbox\">\n                <ion-label class=\"ion-text-wrap\">\n                    I have read and agree with\n                    <a routerLink=\"/terms-conditions\">Terms & Conditions</a>\n                </ion-label>\n                <ion-checkbox mode=\"md\" slot=\"start\" [(ngModel)]=\"isConfirm\"></ion-checkbox>\n            </ion-item>\n\n        </div>\n\n        <ion-button [disabled]=\"!isConfirm\" expand=\"full\" class=\"signin-btn\" (click)=\"onSubmit()\">Sign In</ion-button>\n        <div class=\"fill-vertical-space\"></div>\n    </div>\n</ion-content>\n");

/***/ })

}]);