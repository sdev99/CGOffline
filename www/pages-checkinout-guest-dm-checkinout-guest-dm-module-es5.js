(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-guest-dm-checkinout-guest-dm-module"], {
    /***/
    "Dyus":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-dm/checkinout-guest-dm.page.ts ***!
      \***********************************************************************/

    /*! exports provided: CheckinoutGuestDmPage */

    /***/
    function Dyus(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutGuestDmPage", function () {
        return CheckinoutGuestDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkinout_guest_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkinout-guest-dm.page.html */
      "Ur0G");
      /* harmony import */


      var _checkinout_guest_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkinout-guest-dm.page.scss */
      "Q5GF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");

      var CheckinoutGuestDmPage = /*#__PURE__*/function () {
        function CheckinoutGuestDmPage(navController, sharedDataService, apiService, utilService) {
          _classCallCheck(this, CheckinoutGuestDmPage);

          this.navController = navController;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.isSubmitted = false;
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            mname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]))
          });
        }

        _createClass(CheckinoutGuestDmPage, [{
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
            this.isSubmitted = true;

            if (this.formGroup.valid) {
              if (this.sharedDataService.dedicatedModeGuestDetail) {
                this.sharedDataService.dedicatedModeGuestDetail.guestFirsName = this.formGroup.controls.fname.value;
                this.sharedDataService.dedicatedModeGuestDetail.guestMiddleName = this.formGroup.controls.mname.value;
                this.sharedDataService.dedicatedModeGuestDetail.guestLastName = this.formGroup.controls.lname.value;
                this.sharedDataService.getCheckinDetailsGuest(this.apiService);
              }
            }
          }
        }]);

        return CheckinoutGuestDmPage;
      }();

      CheckinoutGuestDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }];
      };

      CheckinoutGuestDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkinout-guest-dm',
        template: _raw_loader_checkinout_guest_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_guest_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinoutGuestDmPage);
      /***/
    },

    /***/
    "Ku4i":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-dm/checkinout-guest-dm.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CheckinoutGuestDmPageModule */

    /***/
    function Ku4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutGuestDmPageModule", function () {
        return CheckinoutGuestDmPageModule;
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


      var _checkinout_guest_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkinout-guest-dm-routing.module */
      "Zo7X");
      /* harmony import */


      var _checkinout_guest_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkinout-guest-dm.page */
      "Dyus");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var CheckinoutGuestDmPageModule = function CheckinoutGuestDmPageModule() {
        _classCallCheck(this, CheckinoutGuestDmPageModule);
      };

      CheckinoutGuestDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkinout_guest_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinoutGuestDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_checkinout_guest_dm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutGuestDmPage"]]
      })], CheckinoutGuestDmPageModule);
      /***/
    },

    /***/
    "Q5GF":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-dm/checkinout-guest-dm.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Q5GF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F6F9FB;\n}\nion-content Form {\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\nion-content Form ion-item {\n  width: 260px;\n}\nion-content Form ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content Form ion-item ion-input {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  min-height: 50px;\n  margin-top: 10px;\n  --background: #fff;\n  border: 1px solid #DCE7EF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtZ3Vlc3QtZG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUNNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBRU07RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQVIiLCJmaWxlIjoiY2hlY2tpbm91dC1ndWVzdC1kbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y2RjlGQjtcblxuICBGb3JtIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cblxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0U3RUY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0= */";
      /***/
    },

    /***/
    "Ur0G":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-guest-dm/checkinout-guest-dm.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ur0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Check In/Out as Guest\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content>\n\n    <app-back-continue-toolbar [disableRightBtn]=\"!formGroup.valid\" (back)=\"onBack()\"\n                               (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n    <Form [formGroup]=\"formGroup\" >\n\n        <ion-item lines=\"none\">\n            <ion-label position=\"stacked\">First Name</ion-label>\n            <ion-input formControlName=\"fname\"></ion-input>\n        </ion-item>\n\n\n        <ion-item lines=\"none\">\n            <ion-label position=\"stacked\">Middle Name</ion-label>\n            <ion-input formControlName=\"mname\"></ion-input>\n        </ion-item>\n\n\n        <ion-item lines=\"none\">\n            <ion-label position=\"stacked\">Last Name</ion-label>\n            <ion-input formControlName=\"lname\"></ion-input>\n        </ion-item>\n\n    </Form>\n</ion-content>\n";
      /***/
    },

    /***/
    "Zo7X":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/checkinout-guest-dm/checkinout-guest-dm-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: CheckinoutGuestDmPageRoutingModule */

    /***/
    function Zo7X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutGuestDmPageRoutingModule", function () {
        return CheckinoutGuestDmPageRoutingModule;
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


      var _checkinout_guest_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkinout-guest-dm.page */
      "Dyus");

      var routes = [{
        path: '',
        component: _checkinout_guest_dm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutGuestDmPage"]
      }];

      var CheckinoutGuestDmPageRoutingModule = function CheckinoutGuestDmPageRoutingModule() {
        _classCallCheck(this, CheckinoutGuestDmPageRoutingModule);
      };

      CheckinoutGuestDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinoutGuestDmPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkinout-guest-dm-checkinout-guest-dm-module-es5.js.map