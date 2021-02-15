(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-induction-video-file-checkin-induction-video-file-module"], {
    /***/
    "8hi/":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-video-file/checkin-induction-video-file.page.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function hi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #fff;\n  --overflow: auto;\n}\nion-content .content-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-content .content-container .content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\nion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode .video-view {\n  min-height: 200px;\n}\nion-content .text-title-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 31px;\n  text-align: center;\n  color: #444444;\n}\nion-content .video-view {\n  width: 90%;\n  margin: 5%;\n  min-height: 100px;\n  height: auto;\n  background-color: #F8F9FB;\n}\nion-content .video-view video {\n  min-width: 100%;\n  width: 100%;\n  height: 100%;\n}\nion-content .video-view iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4taW5kdWN0aW9uLXZpZGVvLWZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ047QUFHRTtFQUNFLHFCQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0FBRE47QUFLRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBSko7QUFNSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxOIiwiZmlsZSI6ImNoZWNraW4taW5kdWN0aW9uLXZpZGVvLWZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tb3ZlcmZsb3c6IGF1dG87XG5cbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gICYuZGVkaWNhdGVkLW1vZGUge1xuICAgIC0tYmFja2dyb3VuZDogI0Y2RjlGQjtcblxuICAgIC52aWRlby12aWV3IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LXRpdGxlLTEge1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gIH1cblxuICAudmlkZW8tdmlldyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDUlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZCO1xuXG4gICAgdmlkZW8ge1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgaWZyYW1lIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "Dfu1":
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-video-file/checkin-induction-video-file-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: CheckinInductionVideoFilePageRoutingModule */

    /***/
    function Dfu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinInductionVideoFilePageRoutingModule", function () {
        return CheckinInductionVideoFilePageRoutingModule;
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


      var _checkin_induction_video_file_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkin-induction-video-file.page */
      "b3hT");

      var routes = [{
        path: '',
        component: _checkin_induction_video_file_page__WEBPACK_IMPORTED_MODULE_3__["CheckinInductionVideoFilePage"]
      }];

      var CheckinInductionVideoFilePageRoutingModule = function CheckinInductionVideoFilePageRoutingModule() {
        _classCallCheck(this, CheckinInductionVideoFilePageRoutingModule);
      };

      CheckinInductionVideoFilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinInductionVideoFilePageRoutingModule);
      /***/
    },

    /***/
    "PDnb":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-video-file/checkin-induction-video-file.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CheckinInductionVideoFilePageModule */

    /***/
    function PDnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinInductionVideoFilePageModule", function () {
        return CheckinInductionVideoFilePageModule;
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


      var _checkin_induction_video_file_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkin-induction-video-file-routing.module */
      "Dfu1");
      /* harmony import */


      var _checkin_induction_video_file_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkin-induction-video-file.page */
      "b3hT");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

      var CheckinInductionVideoFilePageModule = function CheckinInductionVideoFilePageModule() {
        _classCallCheck(this, CheckinInductionVideoFilePageModule);
      };

      CheckinInductionVideoFilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkin_induction_video_file_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinInductionVideoFilePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_checkin_induction_video_file_page__WEBPACK_IMPORTED_MODULE_6__["CheckinInductionVideoFilePage"]]
      })], CheckinInductionVideoFilePageModule);
      /***/
    },

    /***/
    "b3hT":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-video-file/checkin-induction-video-file.page.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CheckinInductionVideoFilePage */

    /***/
    function b3hT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinInductionVideoFilePage", function () {
        return CheckinInductionVideoFilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkin_induction_video_file_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkin-induction-video-file.page.html */
      "giNJ");
      /* harmony import */


      var _checkin_induction_video_file_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkin-induction-video-file.page.scss */
      "8hi/");
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


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_static_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/static-data.service */
      "hYb0");

      var CheckinInductionVideoFilePage = /*#__PURE__*/function () {
        function CheckinInductionVideoFilePage(navCtrl, route, sharedDataService, utilService, accountService) {
          var _this = this;

          _classCallCheck(this, CheckinInductionVideoFilePage);

          this.navCtrl = navCtrl;
          this.route = route;
          this.sharedDataService = sharedDataService;
          this.utilService = utilService;
          this.accountService = accountService;
          this.StaticDataService = _services_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"];

          if (!sharedDataService.dedicatedMode) {
            this.user = accountService.userValue;
          }

          this.route.queryParams.subscribe(function (parameters) {
            var _a, _b, _c;

            var inductionContentItemIndex = parameters.inductionContentItemIndex;

            if (((_b = (_a = _this.sharedDataService.checkInDetail) === null || _a === void 0 ? void 0 : _a.checkInInductionItems) === null || _b === void 0 ? void 0 : _b.length) > inductionContentItemIndex) {
              _this.inductionItem = (_c = _this.sharedDataService.checkInDetail) === null || _c === void 0 ? void 0 : _c.checkInInductionItems[inductionContentItemIndex];
            }
          });
        }

        _createClass(CheckinInductionVideoFilePage, [{
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.stopVideoPlay();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onBack",
          value: function onBack() {
            this.navCtrl.back();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            if (this.sharedDataService.dedicatedMode) {
              this.navCtrl.navigateRoot('dashboard-dm', {
                replaceUrl: true
              });
            } else {
              this.navCtrl.navigateBack('/checkinout-confirm', {
                replaceUrl: true
              });
            }
          }
        }, {
          key: "stopVideoPlay",
          value: function stopVideoPlay() {
            var iframes = document.getElementsByTagName('iframe');

            if (iframes != null) {
              // tslint:disable-next-line:prefer-for-of
              for (var i = 0; i < iframes.length; i++) {
                iframes[i].src = iframes[i].src; // causes a reload so it stops playing, music, video, etc.

                iframes[i].contentWindow.postMessage(JSON.stringify({
                  event: 'command',
                  func: 'stopVideo'
                }), '*');
              }
            }
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            var _a;

            this.stopVideoPlay();
            var userId;

            if (this.sharedDataService.dedicatedMode) {
              userId = this.sharedDataService.dedicatedModeUserDetail.userId;
            } else {
              userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId;
            }

            this.sharedDataService.inductionNavigationProcess(userId, this.sharedDataService.inductionContentItemIndex);
          }
        }]);

        return CheckinInductionVideoFilePage;
      }();

      CheckinInductionVideoFilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }];
      };

      CheckinInductionVideoFilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-induction-video-file',
        template: _raw_loader_checkin_induction_video_file_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_induction_video_file_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinInductionVideoFilePage);
      /***/
    },

    /***/
    "giNJ":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-induction-video-file/checkin-induction-video-file.page.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function giNJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" [modalTitle]=\"'Induction'\"\n                      (closeModal)=\"onClose()\"></app-modal-header>\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Check In\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <div class=\"content-container\">\n\n        <app-back-continue-toolbar *ngIf=\"sharedDataService.dedicatedMode\" (back)=\"onBack()\"\n                                   (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n        <div class=\"content\">\n\n            <h6 class=\"text-title-1\" *ngIf=\"!sharedDataService.dedicatedMode\">\n                Video\n            </h6>\n\n            <div class=\"video-view\" *ngIf=\"inductionItem\">\n                <video controls=\"controls\" preload=\"metadata\"\n                       webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\n                    <source [src]=\"sharedDataService.globalDirectories.documentDirectory+inductionItem.documentFileName | safeurl\"\n                            [type]=\"StaticDataService.fileMimeTypes[inductionItem.documentFileName.split('.')?.pop()?.toLowerCase()]\"/>\n                </video>\n            </div>\n        </div>\n\n        <ion-footer  mode=\"ios\" *ngIf=\"!sharedDataService.dedicatedMode\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Continue</ion-button>\n        </ion-footer>\n    </div>\n\n\n</ion-content>\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkin-induction-video-file-checkin-induction-video-file-module-es5.js.map