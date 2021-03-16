(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-profile-changepass-my-profile-changepass-module"], {
    /***/
    "2S6A":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/my-profile-changepass/my-profile-changepass.page.ts ***!
      \***************************************************************************/

    /*! exports provided: MyProfileChangepassPage */

    /***/
    function S6A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileChangepassPage", function () {
        return MyProfileChangepassPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_profile_changepass_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-profile-changepass.page.html */
      "sI9F");
      /* harmony import */


      var _my_profile_changepass_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-profile-changepass.page.scss */
      "zP+W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");

      var MyProfileChangepassPage = /*#__PURE__*/function () {
        function MyProfileChangepassPage(navCtrl, utilService, accountService) {
          _classCallCheck(this, MyProfileChangepassPage);

          this.navCtrl = navCtrl;
          this.utilService = utilService;
          this.accountService = accountService;
          this.errorMsg = "";
          this.isSubmitted = false;
          this.user = accountService.userValue;
          this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            confirmnewpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
          });
        }

        _createClass(MyProfileChangepassPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var oldpassword, password, passwordConfirm;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isSubmitted = true;
                      this.errorMsg = "";

                      if (this.profileForm.valid) {
                        oldpassword = this.profileForm.controls.oldpassword.value;
                        password = this.profileForm.controls.newpassword.value;
                        passwordConfirm = this.profileForm.controls.confirmnewpassword.value;
                        this.utilService.presentLoadingWithOptions();
                        this.accountService.changePassword({
                          userId: (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId,
                          firstName: this.user.firstName,
                          oldPassword: oldpassword,
                          newPassword: password,
                          confirmPassword: passwordConfirm
                        }).subscribe(function () {
                          _this.utilService.hideLoading();

                          if (password === passwordConfirm) {
                            _this.navCtrl.navigateRoot(["checkin-success"], {
                              queryParams: {
                                message: "New Password Set",
                                nextPage: "/tabs/my-profile"
                              }
                            });
                          } else {
                            _this.errorMsg = "New passwords are not matching. Please check and correct.";
                          }
                        }, function (error) {
                          _this.utilService.hideLoading();

                          _this.errorMsg = error.message;
                        });
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

        return MyProfileChangepassPage;
      }();

      MyProfileChangepassPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }];
      };

      MyProfileChangepassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-my-profile-changepass",
        template: _raw_loader_my_profile_changepass_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_profile_changepass_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyProfileChangepassPage);
      /***/
    },

    /***/
    "CIiZ":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/my-profile-changepass/my-profile-changepass-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: MyProfileChangepassPageRoutingModule */

    /***/
    function CIiZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileChangepassPageRoutingModule", function () {
        return MyProfileChangepassPageRoutingModule;
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


      var _my_profile_changepass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-profile-changepass.page */
      "2S6A");

      var routes = [{
        path: '',
        component: _my_profile_changepass_page__WEBPACK_IMPORTED_MODULE_3__["MyProfileChangepassPage"]
      }];

      var MyProfileChangepassPageRoutingModule = function MyProfileChangepassPageRoutingModule() {
        _classCallCheck(this, MyProfileChangepassPageRoutingModule);
      };

      MyProfileChangepassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyProfileChangepassPageRoutingModule);
      /***/
    },

    /***/
    "SHSn":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/my-profile-changepass/my-profile-changepass.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: MyProfileChangepassPageModule */

    /***/
    function SHSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileChangepassPageModule", function () {
        return MyProfileChangepassPageModule;
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


      var _my_profile_changepass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-profile-changepass-routing.module */
      "CIiZ");
      /* harmony import */


      var _my_profile_changepass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-profile-changepass.page */
      "2S6A");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var MyProfileChangepassPageModule = function MyProfileChangepassPageModule() {
        _classCallCheck(this, MyProfileChangepassPageModule);
      };

      MyProfileChangepassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_profile_changepass_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfileChangepassPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_my_profile_changepass_page__WEBPACK_IMPORTED_MODULE_6__["MyProfileChangepassPage"]]
      })], MyProfileChangepassPageModule);
      /***/
    },

    /***/
    "sI9F":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile-changepass/my-profile-changepass.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sI9F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header [modalTitle]=\"'Edit Profile'\" (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content mode=\"md\">\n    <app-warning-component *ngIf=\"errorMsg && errorMsg.length>0\"\n                           [message]=\"errorMsg\"></app-warning-component>\n\n    <Form [formGroup]=\"profileForm\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Old Password</ion-label>\n                <ion-input\n                        formControlName=\"oldpassword\"\n                        autocapitalize=\"off\"\n                        [ngClass]=\"{'error': (isSubmitted && !profileForm.controls.oldpassword.valid)}\"\n                        placeholder=\"Enter old password\"\n                        type=\"password\"\n                ></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">New Password</ion-label>\n                <ion-input\n                        formControlName=\"newpassword\"\n                        autocapitalize=\"off\"\n                        [ngClass]=\"{'error': (isSubmitted && !profileForm.controls.newpassword.valid)}\"\n                        placeholder=\"Enter new password\"\n                        type=\"password\"\n                ></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Confirm New Password</ion-label>\n                <ion-input\n                        formControlName=\"confirmnewpassword\"\n                        autocapitalize=\"off\"\n                        [ngClass]=\"{'error': (isSubmitted && !profileForm.controls.confirmnewpassword.valid)}\"\n                        placeholder=\"Confirm new password\"\n                        type=\"password\"\n                ></ion-input>\n            </ion-item>\n\n\n            <div class=\"update-btn\">\n                <ion-button expand=\"full\" fill=\"clear\" (click)=\"onSubmit()\">Change Password</ion-button>\n            </div>\n\n            <div class=\"cancel-btn\">\n                <ion-button expand=\"full\" fill=\"clear\" (click)=\"onClose()\">Cancel</ion-button>\n            </div>\n        </ion-list>\n    </Form>\n</ion-content>\n";
      /***/
    },

    /***/
    "zP+W":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/my-profile-changepass/my-profile-changepass.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function zPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-list {\n  padding: 12px;\n  margin-top: 16px;\n}\nion-content ion-list ion-item {\n  margin-top: 36px;\n}\nion-content ion-list ion-item:first-child {\n  margin-top: 0px;\n}\nion-content ion-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  color: #A1A8CA;\n}\nion-content ion-list ion-item ion-input {\n  min-height: 42px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin-top: 9px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\nion-content ion-list ion-item ion-select {\n  height: 42px;\n  --padding-start: 44px;\n  --padding-end: 8px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  margin-top: 9px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  background-image: url('arrow-down.svg');\n  background-position: 16px;\n  background-repeat: no-repeat;\n}\nion-content ion-list ion-item ion-select::part(icon) {\n  display: none !important;\n}\nion-content ion-list ion-item .error {\n  --background: #FFF6DE !important;\n  background-color: #FFF6DE !important;\n  border: 1px solid #E4D3A3 !important;\n  border-radius: 3px !important;\n}\nion-content ion-list .update-btn {\n  width: 100%;\n  padding: 0 16px;\n  margin-top: 60px;\n}\nion-content ion-list .update-btn ion-button {\n  height: 50px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  --color: #FFFFFF;\n  text-transform: none;\n  --background: #2A6FDB;\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n}\nion-content ion-list .cancel-btn {\n  width: 100%;\n  margin-top: 30px;\n}\nion-content ion-list .cancel-btn ion-button {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  text-transform: none;\n  --color: #2A6FDB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LXByb2ZpbGUtY2hhbmdlcGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBR007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFEUjtBQUlNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtNO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUhSO0FBS1E7RUFDRSx3QkFBQTtBQUhWO0FBT007RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUxSO0FBU0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUE47QUFTTTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBSO0FBV0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFUTjtBQVdNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVFIiLCJmaWxlIjoibXktcHJvZmlsZS1jaGFuZ2VwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjQTFBOENBO1xuICAgICAgfVxuXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgICAgICAtLWNvbG9yOiAjMTcxNTM4O1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMTcxNTM4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQUNFRTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuXG4gICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDQ0cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgLS1jb2xvcjogIzE3MTUzODtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzE3MTUzODtcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ljb24vYXJyb3ctZG93bi5zdmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgICY6OnBhcnQoaWNvbikge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZXJyb3Ige1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNGRkY2REUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjZERSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTREM0EzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC51cGRhdGUtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogNjBweDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMkE2RkRCO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYW5jZWwtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC0tY29sb3I6ICMyQTZGREI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-my-profile-changepass-my-profile-changepass-module-es5.js.map