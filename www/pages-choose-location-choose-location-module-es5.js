(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choose-location-choose-location-module"], {
    /***/
    "7V+x":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function VX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .content {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  flex: 1;\n  width: 45%;\n  margin: auto;\n}\nion-content .content h3 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 26px;\n  color: #171538;\n}\nion-content .content ion-item {\n  margin-top: 24px;\n  border: 1px solid #CACEE1;\n  border-radius: 4px;\n}\nion-content .content ion-item ion-radio {\n  margin-right: 0;\n  --border-radius: 16px;\n  width: 16px;\n  height: 16px;\n  --color: #CACEE1;\n  --color-checked: #2A6FDB;\n}\nion-content .content ion-item ion-label {\n  margin-left: 6px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content .content .action-btn {\n  margin: 0;\n  margin-top: 24px;\n}\nion-footer div.device-uid {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  /* Txt2 */\n  color: #777595;\n  padding: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nob29zZS1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQU47QUFHSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBR007RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFEUjtBQUlNO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRlI7QUFNSTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQUpOO0FBVUU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQSiIsImZpbGUiOiJjaG9vc2UtbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBoMyB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgLS1jb2xvcjogI0NBQ0VFMTtcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjMkE2RkRCO1xuICAgICAgfVxuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgZGl2LmRldmljZS11aWQge1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAvKiBUeHQyICovXG4gICAgY29sb3I6ICM3Nzc1OTU7XG4gICAgcGFkZGluZzogMzJweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "7ez8":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChooseLocationPageRoutingModule */

    /***/
    function ez8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLocationPageRoutingModule", function () {
        return ChooseLocationPageRoutingModule;
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


      var _choose_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choose-location.page */
      "QhvS");

      var routes = [{
        path: '',
        component: _choose_location_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLocationPage"]
      }];

      var ChooseLocationPageRoutingModule = function ChooseLocationPageRoutingModule() {
        _classCallCheck(this, ChooseLocationPageRoutingModule);
      };

      ChooseLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChooseLocationPageRoutingModule);
      /***/
    },

    /***/
    "96Yo":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-location/choose-location.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"md\">\n\t<div class=\"content-container\">\n\t\t<div class=\"content\">\n\t\t\t<h3>Please choose where you want to use this device</h3>\n\n\t\t\t<ion-radio-group *ngFor=\"let item of locations\" [(ngModel)]=\"selectedLocation\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-radio slot=\"start\" [value]=\"item\"></ion-radio>\n\t\t\t\t\t<ion-label>{{sharedDataService.getEntityName(item)}}</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-radio-group>\n\n\t\t\t<ion-button expand=\"full\" [disabled]=\"!selectedLocation\" class=\"action-btn\" (click)=\"onContinue()\">Continue </ion-button>\n\t\t</div>\n\n\t\t<ion-footer mode=\"ios\" class=\"ion-text-center\">\n\t\t\t<div class=\"device-uid\">\n\t\t\t\t<span *ngIf=\"sharedDataService.deviceUID && sharedDataService.deviceUID.length > 0\">DEVICE UID&nbsp;</span>\n\t\t\t\t<span class=\"selectable-text\">{{UtilService.modifyUDID(sharedDataService.deviceUID)}}</span>\n\t\t\t</div>\n\t\t</ion-footer>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "QhvS":
    /*!***************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location.page.ts ***!
      \***************************************************************/

    /*! exports provided: ChooseLocationPage */

    /***/
    function QhvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLocationPage", function () {
        return ChooseLocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_choose_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./choose-location.page.html */
      "96Yo");
      /* harmony import */


      var _choose_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./choose-location.page.scss */
      "7V+x");
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


      var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");

      var ChooseLocationPage = /*#__PURE__*/function () {
        function ChooseLocationPage(navCtrl, sharedDataService, accountService, apiService, utilService) {
          var _this = this;

          _classCallCheck(this, ChooseLocationPage);

          this.navCtrl = navCtrl;
          this.sharedDataService = sharedDataService;
          this.accountService = accountService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]; // getLocationItemList = () => {
          //     if (this.sharedDataService.dedicatedModeDeviceDetailData) {
          //         this.apiService.getLocationItemList(this.sharedDataService.dedicatedModeDeviceDetailData.companyID).subscribe((res) => {
          //             if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
          //                 this.locations = res.Result;
          //             }
          //         }, (error) => {
          //         });
          //     }
          // };

          this.getDeviceEntityDetails = function () {
            if (_this.sharedDataService.dedicatedModeDeviceDetailData) {
              _this.apiService.getDeviceEntityDetails(_this.sharedDataService.deviceUID).subscribe(function (res) {
                var _a, _b;

                if (res.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                  if (res.Result.deviceDetailData) {
                    _this.sharedDataService.dedicatedModeDeviceDetailData = res.Result.deviceDetailData;
                    _this.sharedDataService.dedicatedModeAssignedEntities = res.Result.deviceEntityData;
                    _this.locations = res.Result.deviceEntityData;
                    localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL, JSON.stringify((_a = res.Result) === null || _a === void 0 ? void 0 : _a.deviceDetailData));
                    localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES, JSON.stringify((_b = res.Result) === null || _b === void 0 ? void 0 : _b.deviceEntityData));
                  } else {
                    _this.sharedDataService.dedicatedModeDeviceDeleted();
                  }
                }
              }, function (error) {});
            }
          };

          this.locations = sharedDataService.dedicatedModeAssignedEntities;
        }

        _createClass(ChooseLocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getDeviceEntityDetails();
            this.accountService.activateDevice().subscribe(function () {});
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            this.sharedDataService.dedicatedModeLocationUse = this.selectedLocation;
            localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.DEDICATED_MODE_LOCATION_USE, JSON.stringify(this.selectedLocation));
            this.navCtrl.navigateForward(['/dashboard-dm']);
          }
        }]);

        return ChooseLocationPage;
      }();

      ChooseLocationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }];
      };

      ChooseLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-location',
        template: _raw_loader_choose_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChooseLocationPage);
      /***/
    },

    /***/
    "Y9YN":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChooseLocationPageModule */

    /***/
    function Y9YN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLocationPageModule", function () {
        return ChooseLocationPageModule;
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


      var _choose_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choose-location-routing.module */
      "7ez8");
      /* harmony import */


      var _choose_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./choose-location.page */
      "QhvS");

      var ChooseLocationPageModule = function ChooseLocationPageModule() {
        _classCallCheck(this, ChooseLocationPageModule);
      };

      ChooseLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseLocationPageRoutingModule"]],
        declarations: [_choose_location_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLocationPage"]]
      })], ChooseLocationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-choose-location-choose-location-module-es5.js.map