(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-identityconfirm-dm-checkinout-identityconfirm-dm-module"], {
    /***/
    "54sU":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/checkinout-identityconfirm-dm/checkinout-identityconfirm-dm.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: CheckinoutIdentityconfirmDmPageModule */

    /***/
    function sU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutIdentityconfirmDmPageModule", function () {
        return CheckinoutIdentityconfirmDmPageModule;
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


      var _checkinout_identityconfirm_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkinout-identityconfirm-dm-routing.module */
      "Gexa");
      /* harmony import */


      var _checkinout_identityconfirm_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkinout-identityconfirm-dm.page */
      "jEF0");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var CheckinoutIdentityconfirmDmPageModule = function CheckinoutIdentityconfirmDmPageModule() {
        _classCallCheck(this, CheckinoutIdentityconfirmDmPageModule);
      };

      CheckinoutIdentityconfirmDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkinout_identityconfirm_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinoutIdentityconfirmDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_checkinout_identityconfirm_dm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutIdentityconfirmDmPage"]]
      })], CheckinoutIdentityconfirmDmPageModule);
      /***/
    },

    /***/
    "CQ5G":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/checkinout-identityconfirm-dm/checkinout-identityconfirm-dm.page.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CQ5G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F6F9FB;\n  --overflow: auto;\n}\nion-content .content-container {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  --background: transparent;\n  flex: 1;\n}\nion-content .content .text-1 {\n  margin-top: -40px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-2 {\n  margin-top: 21px;\n  max-width: 406px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 140%;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .ion-img-view {\n  margin-top: 21px;\n  width: 220px;\n  height: 220px;\n}\nion-content .content .ion-img-view ion-img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .content .action-btn {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 200px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtaWRlbnRpdHljb25maXJtLWRtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLE9BQUE7QUFBSjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUROO0FBSUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUZSO0FBT0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMTiIsImZpbGUiOiJjaGVja2lub3V0LWlkZW50aXR5Y29uZmlybS1kbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y2RjlGQjtcbiAgLS1vdmVyZmxvdzogYXV0bztcblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZmxleDogMTtcblxuICAgIC50ZXh0LTEge1xuICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG5cbiAgICAudGV4dC0yIHtcbiAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICBtYXgtd2lkdGg6IDQwNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgLmlvbi1pbWctdmlldyB7XG4gICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgaGVpZ2h0OiAyMjBweDtcblxuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Gexa":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/checkinout-identityconfirm-dm/checkinout-identityconfirm-dm-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: CheckinoutIdentityconfirmDmPageRoutingModule */

    /***/
    function Gexa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutIdentityconfirmDmPageRoutingModule", function () {
        return CheckinoutIdentityconfirmDmPageRoutingModule;
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


      var _checkinout_identityconfirm_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkinout-identityconfirm-dm.page */
      "jEF0");

      var routes = [{
        path: '',
        component: _checkinout_identityconfirm_dm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutIdentityconfirmDmPage"]
      }];

      var CheckinoutIdentityconfirmDmPageRoutingModule = function CheckinoutIdentityconfirmDmPageRoutingModule() {
        _classCallCheck(this, CheckinoutIdentityconfirmDmPageRoutingModule);
      };

      CheckinoutIdentityconfirmDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinoutIdentityconfirmDmPageRoutingModule);
      /***/
    },

    /***/
    "jEF0":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/checkinout-identityconfirm-dm/checkinout-identityconfirm-dm.page.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CheckinoutIdentityconfirmDmPage */

    /***/
    function jEF0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutIdentityconfirmDmPage", function () {
        return CheckinoutIdentityconfirmDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkinout_identityconfirm_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkinout-identityconfirm-dm.page.html */
      "wP/S");
      /* harmony import */


      var _checkinout_identityconfirm_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkinout-identityconfirm-dm.page.scss */
      "CQ5G");
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


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");

      var CheckinoutIdentityconfirmDmPage = /*#__PURE__*/function () {
        function CheckinoutIdentityconfirmDmPage(navController, activatedRoute, sharedDataService, apiService, utilService) {
          var _this = this;

          _classCallCheck(this, CheckinoutIdentityconfirmDmPage);

          this.navController = navController;
          this.activatedRoute = activatedRoute;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.photoCaptured = './assets/images/ProfileNone.png';
          this.pageTitle = '';

          this.setGuestProfileData = function (pageTitle) {
            var _a;

            _this.pageTitle = pageTitle;
            var dedicatedModeGuestDetail = _this.sharedDataService.dedicatedModeGuestDetail;
            _this.userName = _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"].getFullName(dedicatedModeGuestDetail === null || dedicatedModeGuestDetail === void 0 ? void 0 : dedicatedModeGuestDetail.guestFirsName, dedicatedModeGuestDetail === null || dedicatedModeGuestDetail === void 0 ? void 0 : dedicatedModeGuestDetail.guestMiddleName, dedicatedModeGuestDetail === null || dedicatedModeGuestDetail === void 0 ? void 0 : dedicatedModeGuestDetail.guestLastName);

            if (dedicatedModeGuestDetail === null || dedicatedModeGuestDetail === void 0 ? void 0 : dedicatedModeGuestDetail.guestPhoto) {
              _this.photoCaptured = ((_a = _this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.userCheckInSignOffDirectory) + '' + dedicatedModeGuestDetail.guestPhoto;
            }
          };

          this.setUserProfileData = function (pageTitle) {
            var _a, _b;

            _this.pageTitle = pageTitle;
            var userDetail = _this.sharedDataService.dedicatedModeUserDetail;
            _this.userName = _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"].getFullName(userDetail === null || userDetail === void 0 ? void 0 : userDetail.firstName, userDetail === null || userDetail === void 0 ? void 0 : userDetail.middleName, userDetail === null || userDetail === void 0 ? void 0 : userDetail.lastName);

            if (userDetail === null || userDetail === void 0 ? void 0 : userDetail.userPhoto) {
              _this.photoCaptured = ((_a = _this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.userCheckInSignOffDirectory) + '' + userDetail.userPhoto;
            } else if (userDetail === null || userDetail === void 0 ? void 0 : userDetail.photo) {
              _this.photoCaptured = ((_b = _this.sharedDataService.globalDirectories) === null || _b === void 0 ? void 0 : _b.userDirectory) + '' + userDetail.photo;
            }
          };

          switch (sharedDataService.dedicatedModeProcessType) {
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.CheckinOut:
              {
                switch (this.sharedDataService.checkinoutDmAs) {
                  case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].CheckInType.AS_GUEST:
                    this.setGuestProfileData('Check In/Out as Guest');
                    break;

                  case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].CheckInType.MY_NAME:
                    this.setUserProfileData('Check In/Out by Name');
                    break;
                }

                break;
              }

            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.Document:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.Form:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.WorkPermit:
              this.setUserProfileData('Authentication');
              break;

            default:
          }
        }

        _createClass(CheckinoutIdentityconfirmDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var element = this.imagePreview.nativeElement;
            element.style.width = element.offsetHeight + 'px';
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
          key: "onContinue",
          value: function onContinue() {
            switch (this.sharedDataService.dedicatedModeProcessType) {
              case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.CheckinOut:
                {
                  switch (this.sharedDataService.checkinoutDmAs) {
                    case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].CheckInType.AS_GUEST:
                      this.sharedDataService.getCheckinDetailsGuest(this.apiService, true);
                      break;

                    case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].CheckInType.MY_NAME:
                      this.sharedDataService.getCheckinDetailsForDedicatedMode(this.sharedDataService.dedicatedModeUserDetail.userId, this.apiService);
                      break;
                  }

                  break;
                }

              case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.Document:
                this.sharedDataService.dedicatedModeDocumentSignOffProcess();
                break;

              case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.Form:
                this.sharedDataService.dedicatedModeFormSignOffProcess();
                break;

              case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.WorkPermit:
                this.sharedDataService.dedicatedModeWorkPermitSignOffProcess();
                break;

              default:
            }
          }
        }, {
          key: "thisIsNotMe",
          value: function thisIsNotMe() {
            this.sharedDataService.dedicatedModeCapturePhotoFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeCapturePhotoForType.Auth;
            this.navController.navigateForward('/checkinout-photoidentity-dm');
          }
        }]);

        return CheckinoutIdentityconfirmDmPage;
      }();

      CheckinoutIdentityconfirmDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }];
      };

      CheckinoutIdentityconfirmDmPage.propDecorators = {
        imagePreview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['imagePreview', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      CheckinoutIdentityconfirmDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkinout-identityconfirm-dm',
        template: _raw_loader_checkinout_identityconfirm_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_identityconfirm_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinoutIdentityconfirmDmPage);
      /***/
    },

    /***/
    "wP/S":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-identityconfirm-dm/checkinout-identityconfirm-dm.page.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.dedicatedModeLocationUse.locationName\" [modalSubTitle]=\"pageTitle\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"content-container\">\n\n        <app-back-continue-toolbar *ngIf=\"photoCaptured\" (back)=\"onBack()\"\n                                   (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n        <div class=\"content\">\n            <div class=\"text-1\">\n                Please confirm your identity\n            </div>\n            <div class=\"text-2\">\n                {{userName}}\n            </div>\n            <div class=\"ion-img-view\" #imagePreview>\n                <ion-img *ngIf=\"photoCaptured\" [src]=\"photoCaptured\"></ion-img>\n            </div>\n\n            <ion-button class=\"action-btn\" (click)=\"thisIsNotMe()\">\n                This is Not Me\n            </ion-button>\n        </div>\n    </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkinout-identityconfirm-dm-checkinout-identityconfirm-dm-module-es5.js.map