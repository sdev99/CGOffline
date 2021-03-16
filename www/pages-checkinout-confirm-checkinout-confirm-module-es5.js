(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-confirm-checkinout-confirm-module"], {
    /***/
    "DI6I":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/checkinout-confirm/checkinout-confirm-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CheckoutConfirmPageRoutingModule */

    /***/
    function DI6I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutConfirmPageRoutingModule", function () {
        return CheckoutConfirmPageRoutingModule;
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


      var _checkinout_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkinout-confirm.page */
      "fGMj");

      var routes = [{
        path: '',
        component: _checkinout_confirm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutConfirmPage"]
      }];

      var CheckoutConfirmPageRoutingModule = function CheckoutConfirmPageRoutingModule() {
        _classCallCheck(this, CheckoutConfirmPageRoutingModule);
      };

      CheckoutConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutConfirmPageRoutingModule);
      /***/
    },

    /***/
    "X48F":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/checkinout-confirm/checkinout-confirm.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function X48F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n  text-align: center;\n}\nion-content .content ion-icon {\n  width: 100px;\n  height: 100px;\n}\nion-content .content .title-1 {\n  margin-top: 24px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-1 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  color: #2A6FDB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQU47QUFHSTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRE4iLCJmaWxlIjoiY2hlY2tpbm91dC1jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA5LjA3JTtcbiAgLS1wYWRkaW5nLWVuZDogOS4wNyU7XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAudGl0bGUtMSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgLnRleHQtMSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzJBNkZEQjtcbiAgICB9XG4gIH1cbn1cblxuIl19 */";
      /***/
    },

    /***/
    "XS7q":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-confirm/checkinout-confirm.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XS7q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-modal-header [modalTitle]=\"headerTitle\" (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n    <div class=\"content-container\">\n        <div class=\"content\">\n            <ion-icon src=\"./assets/icon/Checkout.svg\"></ion-icon>\n\n            <div class=\"title-1\">{{title}}</div>\n            <div class=\"text-1\">{{subtitle}}</div>\n        </div>\n\n        <ion-footer mode=\"ios\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">{{buttonTitle}}</ion-button>\n        </ion-footer>\n    </div>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "ekM1":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/checkinout-confirm/checkinout-confirm.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CheckoutConfirmPageModule */

    /***/
    function ekM1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutConfirmPageModule", function () {
        return CheckoutConfirmPageModule;
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


      var _checkinout_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkinout-confirm-routing.module */
      "DI6I");
      /* harmony import */


      var _checkinout_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkinout-confirm.page */
      "fGMj");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var CheckoutConfirmPageModule = function CheckoutConfirmPageModule() {
        _classCallCheck(this, CheckoutConfirmPageModule);
      };

      CheckoutConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkinout_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutConfirmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_checkinout_confirm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutConfirmPage"]]
      })], CheckoutConfirmPageModule);
      /***/
    },

    /***/
    "fGMj":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/checkinout-confirm/checkinout-confirm.page.ts ***!
      \*********************************************************************/

    /*! exports provided: CheckinoutConfirmPage */

    /***/
    function fGMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutConfirmPage", function () {
        return CheckinoutConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkinout_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkinout-confirm.page.html */
      "XS7q");
      /* harmony import */


      var _checkinout_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkinout-confirm.page.scss */
      "X48F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");

      var CheckinoutConfirmPage = /*#__PURE__*/function () {
        function CheckinoutConfirmPage(router, navCtrl, activatedRoute, apiService, sharedDataService, accountService, utilService, observablesService) {
          var _this = this;

          _classCallCheck(this, CheckinoutConfirmPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.activatedRoute = activatedRoute;
          this.apiService = apiService;
          this.sharedDataService = sharedDataService;
          this.accountService = accountService;
          this.utilService = utilService;
          this.observablesService = observablesService;
          this.title = '';
          this.subtitle = '';
          this.buttonTitle = '';
          this.headerTitle = '';
          this.locationCheckType = _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ConfirmForCheckType.CheckIn;
          this.user = this.accountService.userValue;
          this.activatedRoute.queryParams.subscribe(function (res) {
            if (res) {
              if (res.headerTitle) {
                _this.headerTitle = res.headerTitle;
              }

              if (res.title) {
                _this.title = res.title;
              }

              if (res.subtitle) {
                _this.subtitle = res.subtitle;
              }

              if (res.buttonTitle) {
                _this.buttonTitle = res.buttonTitle;
              }

              if (res.nextPageData) {
                _this.nextPageData = JSON.parse(res.nextPageData);
              }

              if (res.nextPagePath) {
                _this.nextPagePath = res.nextPagePath;
              }

              if (res.locationCheckType) {
                _this.locationCheckType = res.locationCheckType;
              }
            }
          });
        }

        _createClass(CheckinoutConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.locationCheckType === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ConfirmForCheckType.CheckIn) {
              this.checkinDetail = this.sharedDataService.checkInDetail;
              this.checkInForLocation = this.sharedDataService.checkInForLocation;
              this.sharedDataService.inductionContentItemIndex = 0;
            } else if (this.locationCheckType === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ConfirmForCheckType.CheckOut) {
              this.checkOutForCheckedInDetail = this.sharedDataService.checkOutForCheckedInDetail;
            }
          }
        }, {
          key: "onClose",
          value: function onClose() {
            if (this.locationCheckType === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ConfirmForCheckType.CheckIn) {
              if (this.sharedDataService.checkinLocationByOption === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].CheckInLocationByOptions.QrCode) {
                this.navCtrl.navigateBack('/tabs/dashboard', {
                  replaceUrl: true
                });
              } else {
                this.navCtrl.navigateBack('/tabs/dashboard/checkin-list', {
                  replaceUrl: true
                });
              }
            } else if (this.locationCheckType === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ConfirmForCheckType.CheckOut) {
              this.navCtrl.navigateBack('/tabs/dashboard');
            }
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            var _a, _b, _c, _d, _e;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.locationCheckType === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ConfirmForCheckType.CheckOut) {
                        this.utilService.presentLoadingWithOptions();
                        this.apiService.insertCheckOutDetails({
                          userCheckInDetailID: this.checkOutForCheckedInDetail.userCheckInDetailID,
                          userId: (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId,
                          checkOutLatitude: (_c = (_b = this.sharedDataService.myCurrentGeoLocation) === null || _b === void 0 ? void 0 : _b.coords) === null || _c === void 0 ? void 0 : _c.latitude,
                          checkOutLongitude: (_e = (_d = this.sharedDataService.myCurrentGeoLocation) === null || _d === void 0 ? void 0 : _d.coords) === null || _e === void 0 ? void 0 : _e.longitude
                        }).subscribe(function (response) {
                          _this2.utilService.hideLoading();

                          if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ApiResponseCode.RequestSuccessful) {
                            _this2.observablesService.publishSomeData(_services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ObserverKeys.NEW_CHECKED_IN, true);

                            _this2.navCtrl.navigateForward(['/checkin-success'], {
                              queryParams: {
                                message: 'You have now checked out',
                                nextPage: '/tabs/dashboard',
                                actionBtnTitle: 'Continue'
                              }
                            });
                          } else {
                            _this2.navCtrl.navigateForward(['/checkin-fail'], {
                              queryParams: {
                                title: 'You cannot check out',
                                errorMessage: response.Message,
                                nextPage: '/tabs/dashboard'
                              }
                            });
                          }
                        }, function (error) {
                          _this2.utilService.hideLoading();

                          _this2.navCtrl.navigateForward(['/checkin-fail'], {
                            queryParams: {
                              title: 'You cannot check out',
                              errorMessage: error.message || error,
                              nextPage: '/tabs/dashboard'
                            }
                          });
                        });
                      } else {
                        if (this.checkinDetail.checkInEntityDetail.processInduction && this.checkinDetail.checkInInductionItems && this.checkinDetail.checkInInductionItems.length > 0) {
                          this.navCtrl.navigateForward(['checkin-induction']);
                        } else if (this.checkinDetail.checkInEntityDetail.checkInPersonalPhoto) {
                          this.sharedDataService.signOffFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].SignOffType.INDUCTION;
                          this.navCtrl.navigateForward('/signoff-photo');
                        } else {
                          this.sharedDataService.submitInductionCheckInData(this.apiService);
                        }
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CheckinoutConfirmPage;
      }();

      CheckinoutConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_11__["ObservablesService"]
        }];
      };

      CheckinoutConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkinout-confirm',
        template: _raw_loader_checkinout_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinoutConfirmPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkinout-confirm-checkinout-confirm-module-es5.js.map