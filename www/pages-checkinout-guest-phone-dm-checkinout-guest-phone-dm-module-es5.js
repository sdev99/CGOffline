(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-guest-phone-dm-checkinout-guest-phone-dm-module"], {
    /***/
    "5chN":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-phone-dm/checkinout-guest-phone-dm.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: CheckinoutPhoneDmPageModule */

    /***/
    function chN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutPhoneDmPageModule", function () {
        return CheckinoutPhoneDmPageModule;
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


      var _checkinout_guest_phone_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkinout-guest-phone-dm-routing.module */
      "Nrta");
      /* harmony import */


      var _checkinout_guest_phone_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkinout-guest-phone-dm.page */
      "KWkA");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../directives/directives.module */
      "FUS3");

      var CheckinoutPhoneDmPageModule = function CheckinoutPhoneDmPageModule() {
        _classCallCheck(this, CheckinoutPhoneDmPageModule);
      };

      CheckinoutPhoneDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkinout_guest_phone_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinoutPhoneDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["DirectivesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_checkinout_guest_phone_dm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutGuestPhoneDmPage"]]
      })], CheckinoutPhoneDmPageModule);
      /***/
    },

    /***/
    "KWkA":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-phone-dm/checkinout-guest-phone-dm.page.ts ***!
      \***********************************************************************************/

    /*! exports provided: CheckinoutGuestPhoneDmPage */

    /***/
    function KWkA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutGuestPhoneDmPage", function () {
        return CheckinoutGuestPhoneDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkinout_guest_phone_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkinout-guest-phone-dm.page.html */
      "euPB");
      /* harmony import */


      var _checkinout_guest_phone_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkinout-guest-phone-dm.page.scss */
      "XZKu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CheckinoutGuestPhoneDmPage = /*#__PURE__*/function () {
        function CheckinoutGuestPhoneDmPage(navController, sharedDataService, apiService, utilService) {
          _classCallCheck(this, CheckinoutGuestPhoneDmPage);

          this.navController = navController;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.errorMessage = '';
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]))
          });
        }

        _createClass(CheckinoutGuestPhoneDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.navController.navigateRoot('dashboard-dm', {
              replaceUrl: true
            });
          }
        }, {
          key: "onBack",
          value: function onBack() {
            this.navController.back();
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            var _this = this;

            this.errorMessage = '';

            if (this.formGroup.valid) {
              var phoneNumber = this.formGroup.controls.phoneNumber.value;

              if (this.sharedDataService.dedicatedModeDeviceDetailData) {
                this.utilService.presentLoadingWithOptions();
                this.apiService.getGuestUserDetailByPhone(phoneNumber).subscribe(function (res) {
                  var _a;

                  _this.utilService.hideLoading();

                  if (res.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                    if ((_a = res.Result) === null || _a === void 0 ? void 0 : _a.guestPhone) {
                      _this.sharedDataService.dedicatedModeGuestDetail = res.Result;

                      _this.navController.navigateForward('checkinout-identityconfirm-dm', {
                        queryParams: {
                          authFor: 'Check In/Out as Guest'
                        }
                      });
                    } else {
                      _this.sharedDataService.dedicatedModeGuestDetail = {
                        guestPhone: phoneNumber
                      };

                      _this.navController.navigateForward('checkinout-guest-dm');
                    }
                  }
                }, function (error) {
                  _this.errorMessage = error.message;

                  _this.utilService.hideLoading();
                });
              }
            }
          }
        }]);

        return CheckinoutGuestPhoneDmPage;
      }();

      CheckinoutGuestPhoneDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }];
      };

      CheckinoutGuestPhoneDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkinout-guest-phone-dm',
        template: _raw_loader_checkinout_guest_phone_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_guest_phone_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinoutGuestPhoneDmPage);
      /***/
    },

    /***/
    "Nrta":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-phone-dm/checkinout-guest-phone-dm-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: CheckinoutPhoneDmPageRoutingModule */

    /***/
    function Nrta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutPhoneDmPageRoutingModule", function () {
        return CheckinoutPhoneDmPageRoutingModule;
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


      var _checkinout_guest_phone_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkinout-guest-phone-dm.page */
      "KWkA");

      var routes = [{
        path: '',
        component: _checkinout_guest_phone_dm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutGuestPhoneDmPage"]
      }];

      var CheckinoutPhoneDmPageRoutingModule = function CheckinoutPhoneDmPageRoutingModule() {
        _classCallCheck(this, CheckinoutPhoneDmPageRoutingModule);
      };

      CheckinoutPhoneDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinoutPhoneDmPageRoutingModule);
      /***/
    },

    /***/
    "XZKu":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-phone-dm/checkinout-guest-phone-dm.page.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function XZKu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F6F9FB;\n}\nion-content ion-item {\n  width: 300px;\n  margin: auto;\n}\nion-content ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n  text-align: center;\n}\nion-content ion-item ion-input {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  min-height: 50px;\n  margin-top: 10px;\n  --background: #fff;\n  border: 1px solid #DCE7EF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtZ3Vlc3QtcGhvbmUtZG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ047QUFFSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBTiIsImZpbGUiOiJjaGVja2lub3V0LWd1ZXN0LXBob25lLWRtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gIGlvbi1pdGVtIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0U3RUY7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "euPB":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-guest-phone-dm/checkinout-guest-phone-dm.page.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function euPB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n                         modalSubTitle=\"Check In/Out as Guest\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n    <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n</ion-header>\n\n<ion-content>\n    <app-back-continue-toolbar [disableRightBtn]=\"!formGroup.valid\" (back)=\"onBack()\"\n                               (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n    <Form [formGroup]=\"formGroup\">\n\n        <ion-item lines=\"none\">\n            <ion-label position=\"stacked\">Enter your phone number</ion-label>\n            <ion-input inputmode=\"numeric\" type=\"text\" appPhoneInput formControlName=\"phoneNumber\"></ion-input>\n        </ion-item>\n    </Form>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkinout-guest-phone-dm-checkinout-guest-phone-dm-module-es5.js.map