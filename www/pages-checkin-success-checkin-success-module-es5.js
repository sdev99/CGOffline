(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-success-checkin-success-module"], {
    /***/
    "ChZ0":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/checkin-success/checkin-success.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CheckinSuccessPageModule */

    /***/
    function ChZ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinSuccessPageModule", function () {
        return CheckinSuccessPageModule;
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


      var _checkin_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkin-success-routing.module */
      "cUA4");
      /* harmony import */


      var _checkin_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkin-success.page */
      "EZCs");

      var CheckinSuccessPageModule = function CheckinSuccessPageModule() {
        _classCallCheck(this, CheckinSuccessPageModule);
      };

      CheckinSuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkin_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinSuccessPageRoutingModule"]],
        declarations: [_checkin_success_page__WEBPACK_IMPORTED_MODULE_6__["CheckinSuccessPage"]]
      })], CheckinSuccessPageModule);
      /***/
    },

    /***/
    "EZCs":
    /*!***************************************************************!*\
      !*** ./src/app/pages/checkin-success/checkin-success.page.ts ***!
      \***************************************************************/

    /*! exports provided: CheckinSuccessPage */

    /***/
    function EZCs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinSuccessPage", function () {
        return CheckinSuccessPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkin_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkin-success.page.html */
      "Y3Wh");
      /* harmony import */


      var _checkin_success_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkin-success.page.scss */
      "pakU");
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

      var CheckinSuccessPage = /*#__PURE__*/function () {
        function CheckinSuccessPage(navCtrl, activatedRoute) {
          var _this = this;

          _classCallCheck(this, CheckinSuccessPage);

          this.navCtrl = navCtrl;
          this.activatedRoute = activatedRoute;
          this.message = 'You have now checked-in';
          this.nextPage = '/tabs/dashboard';
          this.actionBtnTitle = 'Continue';
          this.title = '';
          this.description = '';
          this.activatedRoute.queryParams.subscribe(function (res) {
            if (res) {
              if (res.message) {
                _this.message = res.message;
              }

              if (res.actionBtnTitle) {
                _this.actionBtnTitle = res.actionBtnTitle;
              }

              if (res.title) {
                _this.title = res.title;
              }

              if (res.description) {
                _this.description = res.description;
              }

              if (res.nextPage) {
                _this.nextPage = res.nextPage;
              }
            }
          });
        }

        _createClass(CheckinSuccessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            this.navCtrl.navigateBack([this.nextPage]);
          }
        }]);

        return CheckinSuccessPage;
      }();

      CheckinSuccessPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      CheckinSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-success',
        template: _raw_loader_checkin_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_success_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinSuccessPage);
      /***/
    },

    /***/
    "Y3Wh":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-success/checkin-success.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y3Wh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen=\"true\">\n    <div class=\"content-container\">\n        <div class=\"content\">\n            <ion-icon src=\"./assets/icon/CheckSuccess.svg\"></ion-icon>\n\n            <div class=\"title\" *ngIf=\"title\">{{title}}</div>\n            <div class=\"title-1\">{{message}}</div>\n            <div class=\"text-2\" *ngIf=\"description\">{{description}}</div>\n        </div>\n\n        <ion-footer mode=\"ios\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">{{actionBtnTitle}}</ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n\n\n\n";
      /***/
    },

    /***/
    "cUA4":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/checkin-success/checkin-success-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CheckinSuccessPageRoutingModule */

    /***/
    function cUA4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinSuccessPageRoutingModule", function () {
        return CheckinSuccessPageRoutingModule;
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


      var _checkin_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkin-success.page */
      "EZCs");

      var routes = [{
        path: '',
        component: _checkin_success_page__WEBPACK_IMPORTED_MODULE_3__["CheckinSuccessPage"]
      }];

      var CheckinSuccessPageRoutingModule = function CheckinSuccessPageRoutingModule() {
        _classCallCheck(this, CheckinSuccessPageRoutingModule);
      };

      CheckinSuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinSuccessPageRoutingModule);
      /***/
    },

    /***/
    "pakU":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/checkin-success/checkin-success.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function pakU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n  --background: #F8F9FB;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n  text-align: center;\n}\nion-content .content ion-icon {\n  width: 100px;\n  height: 100px;\n}\nion-content .content .title {\n  margin-top: 48px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #171538;\n}\nion-content .content .title-1 {\n  margin-top: 24px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #19DC76;\n}\nion-content .content .text-2 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-footer {\n  background-color: #F8F9FB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4tc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDTjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQU47QUFHSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUROO0FBSUk7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGTjtBQVFBO0VBQ0UseUJBQUE7QUFMRiIsImZpbGUiOiJjaGVja2luLXN1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDkuMDclO1xuICAtLXBhZGRpbmctZW5kOiA5LjA3JTtcbiAgLS1iYWNrZ3JvdW5kOiAjRjhGOUZCO1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OjE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogNDhweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIC50aXRsZS0xIHtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBjb2xvcjogIzE5REM3NjtcbiAgICB9XG5cbiAgICAudGV4dC0yIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cbiAgfVxuXG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZCO1xufVxuXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkin-success-checkin-success-module-es5.js.map