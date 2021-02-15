(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permits-generate-dm-permits-generate-dm-module"], {
    /***/
    "XJKB":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permits-generate-dm/permits-generate-dm.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XJKB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-portrait-orientation *ngIf=\"isShowOritationPortrait;else formView\"\n                          (close)=\"isShowOritationPortrait=false\"></app-portrait-orientation>\n\n<ng-template #formView>\n    <ion-header>\n        <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Work Permit\"\n                             (closeModal)=\"onClose()\"></app-modal-header-dm>\n        <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n\n        <app-back-continue-toolbar title=\"Hot Works Permit Questionnaire\" (back)=\"onBack()\"\n                                   (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n    </ion-header>\n\n    <ion-content mode=\"md\">\n\n\n        <ion-list lines=\"none\">\n            <ion-card *ngFor=\"let item of list\" [ngClass]=\"{'error':(submitted&&!isValid(item))}\">\n\n                <ion-card-title class=\"ion-padding-horizontal ion-padding-top\">\n                    <ion-text *ngIf=\"item.required\">*\n                    </ion-text>\n                    {{item.title}}\n                </ion-card-title>\n\n                <ion-card-content>\n                    <ion-radio-group [(ngModel)]=\"item.answer\">\n                        <ion-item>\n                            <ion-radio slot=\"start\" value=\"yes\"></ion-radio>\n                            <ion-label>Yes</ion-label>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-radio slot=\"start\" value=\"no\"></ion-radio>\n                            <ion-label>No</ion-label>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-radio slot=\"start\" value=\"na\"></ion-radio>\n                            <ion-label>N/A</ion-label>\n                        </ion-item>\n                    </ion-radio-group>\n                </ion-card-content>\n\n            </ion-card>\n\n\n        </ion-list>\n\n    </ion-content>\n</ng-template>\n";
      /***/
    },

    /***/
    "bO1M":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/permits-generate-dm/permits-generate-dm-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: PermitsGenerateDmPageRoutingModule */

    /***/
    function bO1M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermitsGenerateDmPageRoutingModule", function () {
        return PermitsGenerateDmPageRoutingModule;
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


      var _permits_generate_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permits-generate-dm.page */
      "vMat");

      var routes = [{
        path: '',
        component: _permits_generate_dm_page__WEBPACK_IMPORTED_MODULE_3__["PermitsGenerateDmPage"]
      }];

      var PermitsGenerateDmPageRoutingModule = function PermitsGenerateDmPageRoutingModule() {
        _classCallCheck(this, PermitsGenerateDmPageRoutingModule);
      };

      PermitsGenerateDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PermitsGenerateDmPageRoutingModule);
      /***/
    },

    /***/
    "ceS4":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/permits-generate-dm/permits-generate-dm.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function ceS4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ::ng-deep app-back-continue-toolbar ion-toolbar {\n  padding-top: 16px;\n  --background: #F6F9FB;\n}\nion-header ::ng-deep app-back-continue-toolbar ion-toolbar ion-title {\n  padding: 0 14px;\n  position: relative;\n  font-size: 22px;\n}\nion-content {\n  --background: #F6F9FB;\n}\nion-content ion-list {\n  background: transparent;\n  width: 50%;\n  margin: auto;\n  min-width: 320px;\n}\nion-content ion-list ion-card {\n  margin-bottom: 16px;\n}\nion-content ion-list ion-card ion-card-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n}\nion-content ion-list ion-card ion-card-title ion-text {\n  color: #D0021B;\n  vertical-align: middle;\n}\nion-content ion-list ion-card ion-radio-group ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #171538;\n}\nion-content ion-list ion-radio {\n  --border-color: #4A90E2;\n  --border-color-checked: #4A90E2;\n  --color: #4A90E2;\n}\nion-content .text-bottom-msg {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #171538;\n  padding: 0 32px;\n  background-color: #ffffff;\n}\nion-content .text-bottom-msg .action-btn {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Blcm1pdHMtZ2VuZXJhdGUtZG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUROO0FBR007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRFI7QUFPQTtFQUNFLHFCQUFBO0FBSkY7QUFNRTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUpKO0FBTUk7RUFDRSxtQkFBQTtBQUpOO0FBTU07RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU1RO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FBSlY7QUFTUTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFQVjtBQVlJO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBVk47QUFjRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVpKO0FBa0JJO0VBQ0UsWUFBQTtBQWhCTiIsImZpbGUiOiJwZXJtaXRzLWdlbmVyYXRlLWRtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICA6Om5nLWRlZXAgYXBwLWJhY2stY29udGludWUtdG9vbGJhciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAtLWJhY2tncm91bmQ6ICNGNkY5RkI7XG5cbiAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gIGlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogI0QwMDIxQjtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1yYWRpby1ncm91cCB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXJhZGlvIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNEE5MEUyO1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzRBOTBFMjtcbiAgICAgIC0tY29sb3I6ICM0QTkwRTI7XG4gICAgfVxuICB9XG5cbiAgLnRleHQtYm90dG9tLW1zZyB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgICBwYWRkaW5nOiAwIDMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAvL21heC13aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnRuIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "sgAd":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/permits-generate-dm/permits-generate-dm.module.ts ***!
      \*************************************************************************/

    /*! exports provided: PermitsGenerateDmPageModule */

    /***/
    function sgAd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermitsGenerateDmPageModule", function () {
        return PermitsGenerateDmPageModule;
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


      var _permits_generate_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./permits-generate-dm-routing.module */
      "bO1M");
      /* harmony import */


      var _permits_generate_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./permits-generate-dm.page */
      "vMat");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var PermitsGenerateDmPageModule = function PermitsGenerateDmPageModule() {
        _classCallCheck(this, PermitsGenerateDmPageModule);
      };

      PermitsGenerateDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _permits_generate_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermitsGenerateDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_permits_generate_dm_page__WEBPACK_IMPORTED_MODULE_6__["PermitsGenerateDmPage"]]
      })], PermitsGenerateDmPageModule);
      /***/
    },

    /***/
    "vMat":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/permits-generate-dm/permits-generate-dm.page.ts ***!
      \***********************************************************************/

    /*! exports provided: PermitsGenerateDmPage */

    /***/
    function vMat(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermitsGenerateDmPage", function () {
        return PermitsGenerateDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_permits_generate_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./permits-generate-dm.page.html */
      "XJKB");
      /* harmony import */


      var _permits_generate_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./permits-generate-dm.page.scss */
      "ceS4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");

      var PermitsGenerateDmPage = /*#__PURE__*/function () {
        function PermitsGenerateDmPage(navController, sharedDataService, screenOrientation, ngZone) {
          var _this = this;

          _classCallCheck(this, PermitsGenerateDmPage);

          this.navController = navController;
          this.sharedDataService = sharedDataService;
          this.screenOrientation = screenOrientation;
          this.ngZone = ngZone;
          this.list = [];
          this.errorMessage = '';
          this.submitted = false;
          this.isShowOritationPortrait = false;

          this.handleOrientation = function () {
            if (_this.sharedDataService.dedicatedMode) {
              if (_this.screenOrientation.type.includes('landscape')) {
                _this.screenOrientation.unlock();

                _this.isShowOritationPortrait = true;
              }

              _this.screenOrientationSubscribe = _this.screenOrientation.onChange().subscribe(function () {
                _this.ngZone.run(function () {
                  if (_this.screenOrientation.type.includes('portrait')) {
                    _this.isShowOritationPortrait = false;
                  }

                  if (_this.screenOrientation.type.includes('landscape')) {
                    _this.isShowOritationPortrait = true;
                  }
                });
              });
            }
          };
        }

        _createClass(PermitsGenerateDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.handleOrientation();
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            if (this.sharedDataService.dedicatedMode) {
              if (!_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].isLocalHost()) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                this.screenOrientationSubscribe.unsubscribe();
              }
            }
          }
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
          key: "isValid",
          value: function isValid(item) {
            if (item.required && !item.answer) {
              return false;
            }

            return true;
          }
        }, {
          key: "invalidCount",
          value: function invalidCount() {
            var invalidCount = 0;
            this.list.map(function (item) {
              if (item.required && !item.answer) {
                invalidCount++;
              }
            });
            return invalidCount;
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            this.errorMessage = '';
            this.submitted = true;

            if (!this.invalidCount()) {
              this.navController.navigateForward('signoff-digitalink', {
                queryParams: {
                  permitResult: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].randomBoolean() ? 'success' : 'failed'
                }
              });
            } else {
              this.errorMessage = 'You have ' + this.invalidCount() + ' unanswered questions. Please review and answer them.';
            }
          }
        }]);

        return PermitsGenerateDmPage;
      }();

      PermitsGenerateDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      PermitsGenerateDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-permits-generate-dm',
        template: _raw_loader_permits_generate_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_permits_generate_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PermitsGenerateDmPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-permits-generate-dm-permits-generate-dm-module-es5.js.map