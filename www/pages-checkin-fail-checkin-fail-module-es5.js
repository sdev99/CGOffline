(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-fail-checkin-fail-module"], {
    /***/
    "lMTh":
    /*!***********************************************************!*\
      !*** ./src/app/pages/checkin-fail/checkin-fail.module.ts ***!
      \***********************************************************/

    /*! exports provided: CheckinFailPageModule */

    /***/
    function lMTh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinFailPageModule", function () {
        return CheckinFailPageModule;
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


      var _checkin_fail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkin-fail-routing.module */
      "pPKf");
      /* harmony import */


      var _checkin_fail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkin-fail.page */
      "tVIU");

      var CheckinFailPageModule = function CheckinFailPageModule() {
        _classCallCheck(this, CheckinFailPageModule);
      };

      CheckinFailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkin_fail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinFailPageRoutingModule"]],
        declarations: [_checkin_fail_page__WEBPACK_IMPORTED_MODULE_6__["CheckinFailPage"]]
      })], CheckinFailPageModule);
      /***/
    },

    /***/
    "pPKf":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/checkin-fail/checkin-fail-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CheckinFailPageRoutingModule */

    /***/
    function pPKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinFailPageRoutingModule", function () {
        return CheckinFailPageRoutingModule;
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


      var _checkin_fail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkin-fail.page */
      "tVIU");

      var routes = [{
        path: '',
        component: _checkin_fail_page__WEBPACK_IMPORTED_MODULE_3__["CheckinFailPage"]
      }];

      var CheckinFailPageRoutingModule = function CheckinFailPageRoutingModule() {
        _classCallCheck(this, CheckinFailPageRoutingModule);
      };

      CheckinFailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinFailPageRoutingModule);
      /***/
    },

    /***/
    "tVIU":
    /*!*********************************************************!*\
      !*** ./src/app/pages/checkin-fail/checkin-fail.page.ts ***!
      \*********************************************************/

    /*! exports provided: CheckinFailPage */

    /***/
    function tVIU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinFailPage", function () {
        return CheckinFailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkin_fail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkin-fail.page.html */
      "un+g");
      /* harmony import */


      var _checkin_fail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkin-fail.page.scss */
      "wNKz");
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

      var CheckinFailPage = /*#__PURE__*/function () {
        function CheckinFailPage(navCtrl, activatedRoute) {
          var _this = this;

          _classCallCheck(this, CheckinFailPage);

          this.navCtrl = navCtrl;
          this.activatedRoute = activatedRoute;
          this.title = '';
          this.errorTitle = '';
          this.errorMessage = '';
          this.nextPage = '/tabs/dashboard';
          this.activatedRoute.queryParams.subscribe(function (res) {
            if (res) {
              if (res.title) {
                _this.title = res.title;
              }

              if (res.errorTitle) {
                _this.errorTitle = res.errorTitle;
              }

              if (res.errorMessage) {
                _this.errorMessage = res.errorMessage;
              }

              if (res.nextPage) {
                _this.nextPage = res.nextPage;
              }
            }
          });
        }

        _createClass(CheckinFailPage, [{
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
            this.navCtrl.navigateBack([this.nextPage], {
              replaceUrl: true
            });
          }
        }]);

        return CheckinFailPage;
      }();

      CheckinFailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      CheckinFailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-fail',
        template: _raw_loader_checkin_fail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_fail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinFailPage);
      /***/
    },

    /***/
    "un+g":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-fail/checkin-fail.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function unG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen=\"true\">\n    <div class=\"content-container\">\n        <div class=\"content\">\n            <ion-icon src=\"./assets/icon/ErrorCheck.svg\"></ion-icon>\n\n            <div class=\"title-1\" *ngIf=\"title\">{{title}}</div>\n            <div class=\"text-1\" *ngIf=\"errorTitle\">{{errorTitle}}</div>\n            <div class=\"text-2\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        </div>\n\n        <ion-footer mode=\"ios\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Back to Dashboard</ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "wNKz":
    /*!***********************************************************!*\
      !*** ./src/app/pages/checkin-fail/checkin-fail.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function wNKz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n  --background: #F8F9FB;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n  text-align: center;\n}\nion-content .content ion-icon {\n  width: 100px;\n  height: 100px;\n}\nion-content .content .title-1 {\n  margin-top: 48px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #171538;\n}\nion-content .content .text-1 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #E74731;\n}\nion-content .content .text-2 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-footer {\n  background-color: #F8F9FB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4tZmFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDTjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQU47QUFHSTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUROO0FBSUk7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGTjtBQVFBO0VBQ0UseUJBQUE7QUFMRiIsImZpbGUiOiJjaGVja2luLWZhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDkuMDclO1xuICAtLXBhZGRpbmctZW5kOiA5LjA3JTtcbiAgLS1iYWNrZ3JvdW5kOiAjRjhGOUZCO1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlLTEge1xuICAgICAgbWFyZ2luLXRvcDogNDhweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIC50ZXh0LTEge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICNFNzQ3MzE7XG4gICAgfVxuXG4gICAgLnRleHQtMiB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG4gIH1cbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGQjtcbn1cblxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkin-fail-checkin-fail-module-es5.js.map