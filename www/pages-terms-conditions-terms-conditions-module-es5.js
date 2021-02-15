(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terms-conditions-terms-conditions-module"], {
    /***/
    "43w0":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: TermsConditionsPageRoutingModule */

    /***/
    function w0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsPageRoutingModule", function () {
        return TermsConditionsPageRoutingModule;
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


      var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./terms-conditions.page */
      "hQDP");

      var routes = [{
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__["TermsConditionsPage"]
      }];

      var TermsConditionsPageRoutingModule = function TermsConditionsPageRoutingModule() {
        _classCallCheck(this, TermsConditionsPageRoutingModule);
      };

      TermsConditionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermsConditionsPageRoutingModule);
      /***/
    },

    /***/
    "OcQV":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OcQV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header [modalTitle]=\"'Terms & Conditions'\" (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content [scrollY]=\"!loading\">\n    <div class=\"content-container\">\n        <app-screen-inner-loading *ngIf=\"loading\"></app-screen-inner-loading>\n        <div class=\"aggrement-content\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(termsConditionsText)\"></div>\n\n        <div class=\"fill-vertical-space\"></div>\n        <ion-footer mode=\"ios\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onClose()\">Continue</ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "gbAl":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions.module.ts ***!
      \*******************************************************************/

    /*! exports provided: TermsConditionsPageModule */

    /***/
    function gbAl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function () {
        return TermsConditionsPageModule;
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


      var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./terms-conditions-routing.module */
      "43w0");
      /* harmony import */


      var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./terms-conditions.page */
      "hQDP");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var TermsConditionsPageModule = function TermsConditionsPageModule() {
        _classCallCheck(this, TermsConditionsPageModule);
      };

      TermsConditionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsConditionsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]]
      })], TermsConditionsPageModule);
      /***/
    },

    /***/
    "hQDP":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions.page.ts ***!
      \*****************************************************************/

    /*! exports provided: TermsConditionsPage */

    /***/
    function hQDP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function () {
        return TermsConditionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./terms-conditions.page.html */
      "OcQV");
      /* harmony import */


      var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./terms-conditions.page.scss */
      "w9MO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var TermsConditionsPage = /*#__PURE__*/function () {
        function TermsConditionsPage(navCtrl, apiService, utilService, sanitizer) {
          var _this = this;

          _classCallCheck(this, TermsConditionsPage);

          this.navCtrl = navCtrl;
          this.apiService = apiService;
          this.utilService = utilService;
          this.sanitizer = sanitizer;
          this.loading = false;

          this.getTermsAndConditions = function () {
            _this.loading = true;

            _this.apiService.getTermsOfServices().subscribe(function (data) {
              _this.loading = false;

              if (data.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this.termsConditionsText = data.Result;
              }
            }, function (error) {
              _this.loading = false;
            });
          };

          this.getTermsAndConditions();
        }

        _createClass(TermsConditionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
        }]);

        return TermsConditionsPage;
      }();

      TermsConditionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
        }];
      };

      TermsConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TermsConditionsPage);
      /***/
    },

    /***/
    "w9MO":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function w9MO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .aggrement-content {\n  padding: 16px 24px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoidGVybXMtY29uZGl0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5hZ2dyZW1lbnQtY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgfVxufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-terms-conditions-terms-conditions-module-es5.js.map