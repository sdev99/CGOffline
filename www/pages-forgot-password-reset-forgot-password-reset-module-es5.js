(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-reset-forgot-password-reset-module"], {
    /***/
    "4MtC":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password-reset/forgot-password-reset.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MtC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen=\"true\">\n    <h2 class=\"page-title\">Reset Password</h2>\n    <p class=\"page-description\">\n        Please set up new password for your account\n    </p>\n\n    <div class=\"input-form\">\n        <Form [formGroup]=\"myForm\">\n            <div class=\"app-warning-component\">\n                <app-warning-component *ngIf=\"errorMessage && errorMessage.length>0\"\n                                       [message]=\"errorMessage\"></app-warning-component>\n            </div>\n\n\n            <ion-item class=\"password-item\">\n                <ion-label position=\"stacked\">New Password</ion-label>\n                <ion-input\n                        formControlName=\"password\"\n                        autocapitalize=\"off\"\n                        [ngClass]=\"{'error': (isSubmitted && !myForm.controls.password.valid)}\"\n                        placeholder=\"Enter new password\"\n                        type=\"password\"\n                ></ion-input>\n            </ion-item>\n\n            <ion-item class=\"password-item\">\n                <ion-label position=\"stacked\">Confirm New Password</ion-label>\n                <ion-input\n                        formControlName=\"passwordConfirm\"\n                        autocapitalize=\"off\"\n                        [ngClass]=\"{'error': (isSubmitted && !myForm.controls.passwordConfirm.valid)}\"\n                        placeholder=\"Confirm new password\"\n                        type=\"password\"\n                ></ion-input>\n            </ion-item>\n\n        </Form>\n\n\n    </div>\n\n    <ion-button expand=\"full\" class=\"signin-btn\" (click)=\"onSubmit()\">Confirm my New password</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "D27t":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/forgot-password-reset/forgot-password-reset.page.ts ***!
      \***************************************************************************/

    /*! exports provided: ForgotPasswordResetPage */

    /***/
    function D27t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordResetPage", function () {
        return ForgotPasswordResetPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_reset_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password-reset.page.html */
      "4MtC");
      /* harmony import */


      var _forgot_password_reset_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password-reset.page.scss */
      "UU6E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ForgotPasswordResetPage = /*#__PURE__*/function () {
        function ForgotPasswordResetPage(utilService, navCtrl, route, accountService) {
          var _this = this;

          _classCallCheck(this, ForgotPasswordResetPage);

          this.utilService = utilService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.accountService = accountService;
          this.errorMessage = "";
          this.isSubmitted = false;
          route.queryParams.subscribe(function (params) {
            if (params) {
              if (params.code) {
                _this.resetCode = params.code;
              }
            }
          });
          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]))
          });
        }

        _createClass(ForgotPasswordResetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var password, confirmPassword;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isSubmitted = true;
                      this.errorMessage = "";

                      if (this.myForm.valid) {
                        password = this.myForm.controls.password.value;
                        confirmPassword = this.myForm.controls.passwordConfirm.value;

                        if (password === confirmPassword) {
                          this.utilService.presentLoadingWithOptions();
                          this.accountService.resetpassword({
                            password: password,
                            confirmPassword: confirmPassword,
                            shortCode: this.resetCode
                          }).subscribe(function (response) {
                            _this2.utilService.hideLoading();

                            _this2.navCtrl.navigateRoot("/login");
                          }, function (error) {
                            _this2.utilService.hideLoading();
                          });
                        } else {
                          this.errorMessage = "Passwords are not matching. Please check and correct.";
                        }
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ForgotPasswordResetPage;
      }();

      ForgotPasswordResetPage.ctorParameters = function () {
        return [{
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }];
      };

      ForgotPasswordResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-forgot-password-reset",
        template: _raw_loader_forgot_password_reset_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_reset_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotPasswordResetPage);
      /***/
    },

    /***/
    "UU6E":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/forgot-password-reset/forgot-password-reset.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function UU6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-app-primary);\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n}\nion-content .page-title {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  margin-top: 16vh;\n  font-size: 24px;\n  line-height: 29px;\n  color: #FFFFFF;\n}\nion-content .page-description {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #FFFFFF;\n  text-align: left;\n}\nion-content .app-warning-component {\n  margin-bottom: 20px;\n}\nion-content .agree-checkbox {\n  margin-top: 16px;\n  --padding-start: 0px;\n}\nion-content .agree-checkbox ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #FFFFFF;\n  margin-bottom: 0 !important;\n}\nion-content .agree-checkbox ion-label a {\n  color: #ffffff;\n  font-size: 14px;\n  text-decoration: underline;\n}\nion-content .agree-checkbox ion-checkbox {\n  --size: 16px;\n  --background: #FFFFFF;\n  --background-checked: #2A6FDB;\n  --checkmark-color: #FFFFFF;\n  --border-color: #A1A8CA;\n  --border-radius: 2px;\n  --border-style: solid;\n  --border-width: 1px;\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC1yZXNldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFJRTtFQUNFLG1CQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUtJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBSE47QUFLTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFIUjtBQU9JO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMTiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtcmVzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtcHJpbWFyeSk7XG4gIC0tcGFkZGluZy1zdGFydDogOS4wNyU7XG4gIC0tcGFkZGluZy1lbmQ6IDkuMDclO1xuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDE2dmg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbiAgLnBhZ2UtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuXG4gIC5hcHAtd2FybmluZy1jb21wb25lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuYWdyZWUtY2hlY2tib3gge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAtLXNpemU6IDE2cHg7XG4gICAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzJBNkZEQjtcbiAgICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNBMUE4Q0E7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgfVxuICB9XG5cbn1cblxuIl19 */";
      /***/
    },

    /***/
    "vG94":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/forgot-password-reset/forgot-password-reset-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ForgotPasswordResetPageRoutingModule */

    /***/
    function vG94(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordResetPageRoutingModule", function () {
        return ForgotPasswordResetPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _forgot_password_reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password-reset.page */
      "D27t");

      var routes = [{
        path: '',
        component: _forgot_password_reset_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordResetPage"]
      }];

      var ForgotPasswordResetPageRoutingModule = function ForgotPasswordResetPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordResetPageRoutingModule);
      };

      ForgotPasswordResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordResetPageRoutingModule);
      /***/
    },

    /***/
    "yo1j":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/forgot-password-reset/forgot-password-reset.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ForgotPasswordResetPageModule */

    /***/
    function yo1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordResetPageModule", function () {
        return ForgotPasswordResetPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _forgot_password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-reset-routing.module */
      "vG94");
      /* harmony import */


      var _forgot_password_reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password-reset.page */
      "D27t");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var ForgotPasswordResetPageModule = function ForgotPasswordResetPageModule() {
        _classCallCheck(this, ForgotPasswordResetPageModule);
      };

      ForgotPasswordResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordResetPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_forgot_password_reset_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordResetPage"]]
      })], ForgotPasswordResetPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-forgot-password-reset-forgot-password-reset-module-es5.js.map