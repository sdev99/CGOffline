(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-sync-dm-device-sync-dm-module"], {
    /***/
    "0W9G":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-sync-dm/device-sync-dm.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content>\n    <div class=\"content\">\n\n        <ng-container *ngIf=\"synchProgressState === 'pending'\">\n            <h1 class=\"text-1\">Device Data Synchronisation</h1>\n\n            <p class=\"text-2\">\n                Device needs to be synchronised with the main server periodically, in case it is being used offline.\n            </p>\n            <app-sync-warning-msg></app-sync-warning-msg>\n            <ion-button class=\"action-btn\" (click)=\"onSync()\">\n                Sync Now\n            </ion-button>\n        </ng-container>\n\n        <ng-container *ngIf=\"synchProgressState === 'processing'\">\n            <h1 class=\"text-1\">Device Data Synchronisation</h1>\n\n            <ion-label class=\"progress-title\">in Progress</ion-label>\n            <div class=\"progress-bar-view\">\n                <ion-progress-bar [value]=\"progress/100\"></ion-progress-bar>\n                <ion-note>{{progress}} %</ion-note>\n            </div>\n\n\n            <ion-chip class=\"alert-msg\">\n                <ion-icon src=\"./assets/icon/info.svg\"></ion-icon>\n                <ion-label>Please be patient. Synching might take time.</ion-label>\n            </ion-chip>\n        </ng-container>\n\n        <ng-container *ngIf=\"synchProgressState === 'completed'\">\n            <ion-icon class=\"success-icon\" src=\"./assets/icon/CheckSuccess.svg\"></ion-icon>\n\n            <ion-label class=\"success-title\">Sync Completed</ion-label>\n            <ion-label class=\"text-2\">The device is now ready to be used.</ion-label>\n            <ion-button class=\"action-btn\" (click)=\"onContinue()\">\n                Continue\n            </ion-button>\n        </ng-container>\n\n        <ng-container *ngIf=\"synchProgressState === 'networkerror'\">\n            <ion-icon class=\"error-icon\" src=\"./assets/icon/Warning.1.svg\"></ion-icon>\n\n            <ion-label class=\"error-title\">Connection Problem</ion-label>\n            <ion-label class=\"text-2\">\n                The was a problem connecting to the server. Please check your connection and try again.\n            </ion-label>\n            <ion-button class=\"action-btn\" (click)=\"onSync()\">\n                Try Again\n            </ion-button>\n        </ng-container>\n\n        <ng-container *ngIf=\"synchProgressState === 'failed'\">\n            <ion-icon class=\"error-icon\" src=\"./assets/icon/ErrorCheck.svg\"></ion-icon>\n\n            <ion-label class=\"error-title failed\">Synchronisation Error</ion-label>\n            <ion-label class=\"text-2\">\n                An unknown error has occured. You may try again or contact administrator for solution.\n            </ion-label>\n            <ion-button class=\"action-btn\" (click)=\"onClose()\">\n                Quit\n            </ion-button>\n        </ng-container>\n\n    </div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "1qR+":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/device-sync-dm/device-sync-dm-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DeviceSyncDmPageRoutingModule */

    /***/
    function qR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeviceSyncDmPageRoutingModule", function () {
        return DeviceSyncDmPageRoutingModule;
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


      var _device_sync_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./device-sync-dm.page */
      "MIrG");

      var routes = [{
        path: '',
        component: _device_sync_dm_page__WEBPACK_IMPORTED_MODULE_3__["DeviceSyncDmPage"]
      }];

      var DeviceSyncDmPageRoutingModule = function DeviceSyncDmPageRoutingModule() {
        _classCallCheck(this, DeviceSyncDmPageRoutingModule);
      };

      DeviceSyncDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeviceSyncDmPageRoutingModule);
      /***/
    },

    /***/
    "MIrG":
    /*!*************************************************************!*\
      !*** ./src/app/pages/device-sync-dm/device-sync-dm.page.ts ***!
      \*************************************************************/

    /*! exports provided: DeviceSyncDmPage */

    /***/
    function MIrG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeviceSyncDmPage", function () {
        return DeviceSyncDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_device_sync_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./device-sync-dm.page.html */
      "0W9G");
      /* harmony import */


      var _device_sync_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./device-sync-dm.page.scss */
      "t0pa");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");

      var DeviceSyncDmPage = /*#__PURE__*/function () {
        function DeviceSyncDmPage(navController, alertController, activatedRoute, utilService) {
          var _this = this;

          _classCallCheck(this, DeviceSyncDmPage);

          this.navController = navController;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.utilService = utilService;
          this.synchProgressState = 'pending'; // synchProgressState = 'processing';
          // synchProgressState = 'completed';

          this.progress = 0;
          this.activatedRoute.queryParams.subscribe(function (data) {
            if (data && data.startSync) {
              _this.onSync();
            }
          });
        }

        _createClass(DeviceSyncDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.synchProgressState === 'processing')) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 3;
                      return this.alertController.create({
                        header: 'Quit Synchronisation!',
                        message: 'You are about to quit the device sync. Once quitted the current sync will be cancelled and sync progress will be lost. Are you sure you want to exit?',
                        translucent: true,
                        keyboardClose: false,
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'danger',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this2.navController.back();
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      _context.next = 9;
                      break;

                    case 8:
                      this.navController.back();

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this3 = this;

            this.progress = 0;
            this.synchProgressState = 'processing';
            var interval = setInterval(function () {
              if (_this3.progress === 100) {
                clearInterval(interval);

                if (_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].randomBoolean()) {
                  _this3.synchProgressState = 'completed';
                  localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.SYNC_DATE_TIME, _this3.utilService.getCurrentDateTIme());
                } else {
                  if (_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].randomBoolean()) {
                    _this3.synchProgressState = 'failed';
                  } else {
                    _this3.synchProgressState = 'networkerror';
                  }
                }
              } else {
                _this3.progress = _this3.progress + 5;
              }
            }, 100);
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            this.navController.back();
          }
        }]);

        return DeviceSyncDmPage;
      }();

      DeviceSyncDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }];
      };

      DeviceSyncDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-device-sync-dm',
        template: _raw_loader_device_sync_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_device_sync_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeviceSyncDmPage);
      /***/
    },

    /***/
    "UH/1":
    /*!***************************************************************!*\
      !*** ./src/app/pages/device-sync-dm/device-sync-dm.module.ts ***!
      \***************************************************************/

    /*! exports provided: DeviceSyncDmPageModule */

    /***/
    function UH1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeviceSyncDmPageModule", function () {
        return DeviceSyncDmPageModule;
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


      var _device_sync_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./device-sync-dm-routing.module */
      "1qR+");
      /* harmony import */


      var _device_sync_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./device-sync-dm.page */
      "MIrG");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var DeviceSyncDmPageModule = function DeviceSyncDmPageModule() {
        _classCallCheck(this, DeviceSyncDmPageModule);
      };

      DeviceSyncDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_sync_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceSyncDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_device_sync_dm_page__WEBPACK_IMPORTED_MODULE_6__["DeviceSyncDmPage"]]
      })], DeviceSyncDmPageModule);
      /***/
    },

    /***/
    "t0pa":
    /*!***************************************************************!*\
      !*** ./src/app/pages/device-sync-dm/device-sync-dm.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function t0pa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ::ng-deep app-modal-header ion-toolbar {\n  --border-color: #ffffff;\n  --border-width: 0;\n  --background: #ffffff;\n}\n\nion-content .content {\n  display: flex;\n  min-height: 100%;\n  width: 40%;\n  min-width: 320px;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nion-content .content .text-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 31px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #171538;\n}\n\nion-content .content .text-2 {\n  margin: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  color: #171538;\n}\n\nion-content .content .action-btn {\n  width: calc(100% - 50px);\n  height: 50px;\n}\n\nion-content .content .progress-title {\n  margin-top: 30px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #4A90E2;\n}\n\nion-content .content .progress-bar-view {\n  width: 100%;\n  margin-top: 12px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content .content .progress-bar-view ion-progress-bar {\n  height: 10px;\n  border-radius: 5px;\n  flex: 1;\n}\n\nion-content .content .progress-bar-view ion-note {\n  margin: 0 12px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 140%;\n  color: #171538;\n}\n\nion-content .content .success-icon {\n  width: 35px;\n  height: 35px;\n}\n\nion-content .content .success-title {\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #19DC76;\n  text-align: center;\n}\n\nion-content .content .error-icon {\n  width: 35px;\n  height: 35px;\n}\n\nion-content .content .error-title {\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #836A27;\n}\n\nion-content .content .error-title.failed {\n  color: #E74731;\n}\n\nion-content .content .alert-msg {\n  --color: #171538;\n  margin-top: 40px;\n  --background: rgba(56, 128, 255, 0.2);\n  padding: 20px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldmljZS1zeW5jLWRtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUROOztBQU9FO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUpKOztBQU1JO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSk47O0FBT0k7RUFDRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTE47O0FBUUk7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUFOTjs7QUFTSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUE47O0FBVUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUk47O0FBVU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBUlI7O0FBV007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVRSOztBQWFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFYTjs7QUFjSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFaTjs7QUFlSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBYk47O0FBZ0JJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWROOztBQWdCTTtFQUNFLGNBQUE7QUFkUjs7QUFrQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQWhCTiIsImZpbGUiOiJkZXZpY2Utc3luYy1kbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgOjpuZy1kZWVwIGFwcC1tb2RhbC1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC50ZXh0LTEge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIC50ZXh0LTIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICM0QTkwRTI7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWJhci12aWV3IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1pY29uIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cblxuICAgIC5zdWNjZXNzLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgY29sb3I6ICMxOURDNzY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmVycm9yLWljb24ge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuXG4gICAgLmVycm9yLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICM4MzZBMjc7XG5cbiAgICAgICYuZmFpbGVkIHtcbiAgICAgICAgY29sb3I6ICNFNzQ3MzE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFsZXJ0LW1zZyB7XG4gICAgICAtLWNvbG9yOiAjMTcxNTM4O1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSg1NiwgMTI4LCAyNTUsIDAuMik7XG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-device-sync-dm-device-sync-dm-module-es5.js.map