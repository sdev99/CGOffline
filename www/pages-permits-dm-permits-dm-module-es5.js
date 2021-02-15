(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permits-dm-permits-dm-module"], {
    /***/
    "6jkC":
    /*!***************************************************************!*\
      !*** ./src/app/pages/permits-dm/permits-dm-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PermitsDmPageRoutingModule */

    /***/
    function jkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermitsDmPageRoutingModule", function () {
        return PermitsDmPageRoutingModule;
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


      var _permits_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permits-dm.page */
      "KKyS");

      var routes = [{
        path: '',
        component: _permits_dm_page__WEBPACK_IMPORTED_MODULE_3__["PermitsDmPage"]
      }];

      var PermitsDmPageRoutingModule = function PermitsDmPageRoutingModule() {
        _classCallCheck(this, PermitsDmPageRoutingModule);
      };

      PermitsDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PermitsDmPageRoutingModule);
      /***/
    },

    /***/
    "EODU":
    /*!*******************************************************!*\
      !*** ./src/app/pages/permits-dm/permits-dm.module.ts ***!
      \*******************************************************/

    /*! exports provided: PermitsDmPageModule */

    /***/
    function EODU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermitsDmPageModule", function () {
        return PermitsDmPageModule;
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


      var _permits_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./permits-dm-routing.module */
      "6jkC");
      /* harmony import */


      var _permits_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./permits-dm.page */
      "KKyS");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

      var PermitsDmPageModule = function PermitsDmPageModule() {
        _classCallCheck(this, PermitsDmPageModule);
      };

      PermitsDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _permits_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermitsDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_permits_dm_page__WEBPACK_IMPORTED_MODULE_6__["PermitsDmPage"]]
      })], PermitsDmPageModule);
      /***/
    },

    /***/
    "H7Tt":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permits-dm/permits-dm.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function H7Tt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-dashboard-header-dm [title]=\"sharedDataService.getCurrentCheckedInEntityName()\"></app-dashboard-header-dm>\n    <app-topnavigations-btns-dm activeBtn=\"permit\"></app-topnavigations-btns-dm>\n    <app-topnavigations-segments-dm [active]=\"listType\"\n                                    [options]=\"listTypes\"\n                                    [search]=\"searchQuery\"\n                                    (searching)=\"onSearch($event)\"\n                                    (searchbarShowHide)=\"searchbarShowHide($event)\"\n                                    (changed)=\"segmentChanged($event)\"></app-topnavigations-segments-dm>\n</ion-header>\n\n<ion-content>\n    <ion-list\n            *ngIf=\"(listType === EnumService.DedicatedModePermitListType.Live && liveWorkPermits?.length>0) || (listType === EnumService.DedicatedModePermitListType.Archive && archivedWorkPermits?.length>0); else noDocument\"\n            class=\"activity-list\"\n            lines=\"full\">\n\n        <ng-container *ngIf=\"listType === EnumService.DedicatedModePermitListType.Live\">\n            <app-archived-item\n                    *ngFor=\"let item of liveWorkPermits | listFilter:searchQuery:'formTitle'\"\n                    (itemSelect)=\"openLiveWorkPermit(item)\"\n                    [colFirst]=\"item.formTitle\"\n                    colSecond=\"issued\"\n                    [colSecondHighlighted]=\"item.formattedIssuedDate\"\n                    colThird=\"Valid for\"\n                    [colThirdHighlighted]=\"item.formattedExpiryDate\"\n            ></app-archived-item>\n        </ng-container>\n\n\n        <ng-container *ngIf=\"listType === EnumService.DedicatedModePermitListType.Archive\">\n            <app-archived-item\n                    *ngFor=\"let item of archivedWorkPermits | listFilter:searchQuery:'formTitle'\"\n                    (itemSelect)=\"openArchivedWorkPermit(item)\"\n                    [colFirst]=\"item.formTitle\"\n                    colSecond=\"issued\"\n                    [colSecondHighlighted]=\"item.formattedIssuedDate\"\n                    colThird=\"Valid for\"\n                    [colThirdHighlighted]=\"item.formattedExpiryDate\"\n            ></app-archived-item>\n        </ng-container>\n\n    </ion-list>\n\n    <ng-template #noDocument>\n        <app-empty-message message=\"No permits available\"></app-empty-message>\n    </ng-template>\n\n\n    <ng-container *ngIf=\"listType === EnumService.DedicatedModePermitListType.Live && liveWorkPermits?.length>0\">\n\n        <app-empty-message *ngIf=\"(liveWorkPermits | listFilter:searchQuery:'formTitle').length == 0\"\n                           message=\"No Results Found\"></app-empty-message>\n    </ng-container>\n\n    <ng-container *ngIf=\"listType === EnumService.DedicatedModePermitListType.Archive && archivedWorkPermits?.length>0\">\n        <app-empty-message *ngIf=\"(archivedWorkPermits | listFilter:searchQuery:'formTitle').length == 0\"\n                           message=\"No Results Found\"></app-empty-message>\n    </ng-container>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "KKyS":
    /*!*****************************************************!*\
      !*** ./src/app/pages/permits-dm/permits-dm.page.ts ***!
      \*****************************************************/

    /*! exports provided: PermitsDmPage */

    /***/
    function KKyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermitsDmPage", function () {
        return PermitsDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_permits_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./permits-dm.page.html */
      "H7Tt");
      /* harmony import */


      var _permits_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./permits-dm.page.scss */
      "y4GF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");

      var PermitsDmPage = /*#__PURE__*/function () {
        function PermitsDmPage(navController, filehandlerService, utilService, sharedDataService, apiService) {
          _classCallCheck(this, PermitsDmPage);

          this.navController = navController;
          this.filehandlerService = filehandlerService;
          this.utilService = utilService;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"];
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"];
          this.listType = _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModePermitListType.Live;
          this.listTypes = Object.values(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModePermitListType);
          this.searchQuery = '';
        }

        _createClass(PermitsDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.sharedDataService.dedicatedModeProcessType = _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModeProcessTypes.WorkPermit;
            this.getDedicatedModeLiveWorkPermits();
            this.getDedicatedModeArchiveWorkPermits();
          }
        }, {
          key: "getDedicatedModeLiveWorkPermits",
          value: function getDedicatedModeLiveWorkPermits() {
            var _this = this;

            var _a;

            var companyID = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
            this.apiService.getDedicatedModeLiveWorkPermits(companyID).subscribe(function (response) {
              if (response) {
                _this.liveWorkPermits = response.Result;
              }
            }, function (error) {});
          }
        }, {
          key: "getDedicatedModeArchiveWorkPermits",
          value: function getDedicatedModeArchiveWorkPermits() {
            var _this2 = this;

            var _a;

            var companyID = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
            this.apiService.getDedicatedModeArchiveWorkPermits(companyID).subscribe(function (response) {
              if (response) {
                _this2.archivedWorkPermits = response.Result;
              }
            }, function (error) {});
          }
        }, {
          key: "onSearch",
          value: function onSearch(search) {
            this.searchQuery = search;
          }
        }, {
          key: "searchbarShowHide",
          value: function searchbarShowHide(visible) {
            if (!visible) {
              this.searchQuery = '';
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            this.listType = event;

            if (event === _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModePermitListType.Live) {
              this.getDedicatedModeLiveWorkPermits();
            } else if (event === _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModePermitListType.Archive) {
              this.getDedicatedModeArchiveWorkPermits();
            }
          }
        }, {
          key: "openLiveWorkPermit",
          value: function openLiveWorkPermit(item) {}
        }, {
          key: "openArchivedWorkPermit",
          value: function openArchivedWorkPermit(item) {}
        }]);

        return PermitsDmPage;
      }();

      PermitsDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_4__["FilehandlerService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }];
      };

      PermitsDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-permits-dm',
        template: _raw_loader_permits_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_permits_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PermitsDmPage);
      /***/
    },

    /***/
    "y4GF":
    /*!*******************************************************!*\
      !*** ./src/app/pages/permits-dm/permits-dm.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function y4GF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXRzLWRtLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-permits-dm-permits-dm-module-es5.js.map