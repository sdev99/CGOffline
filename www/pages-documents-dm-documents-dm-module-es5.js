(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-documents-dm-documents-dm-module"], {
    /***/
    "2z7J":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/documents-dm/documents-dm-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DocumentsDmPageRoutingModule */

    /***/
    function z7J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsDmPageRoutingModule", function () {
        return DocumentsDmPageRoutingModule;
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


      var _documents_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./documents-dm.page */
      "SRs/");

      var routes = [{
        path: '',
        component: _documents_dm_page__WEBPACK_IMPORTED_MODULE_3__["DocumentsDmPage"]
      }];

      var DocumentsDmPageRoutingModule = function DocumentsDmPageRoutingModule() {
        _classCallCheck(this, DocumentsDmPageRoutingModule);
      };

      DocumentsDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DocumentsDmPageRoutingModule);
      /***/
    },

    /***/
    "SRs/":
    /*!*********************************************************!*\
      !*** ./src/app/pages/documents-dm/documents-dm.page.ts ***!
      \*********************************************************/

    /*! exports provided: DocumentsDmPage */

    /***/
    function SRs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsDmPage", function () {
        return DocumentsDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_documents_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./documents-dm.page.html */
      "ca50");
      /* harmony import */


      var _documents_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./documents-dm.page.scss */
      "xidM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");

      var DocumentsDmPage = /*#__PURE__*/function () {
        function DocumentsDmPage(navController, filehandlerService, utilService, sharedDataService, apiService) {
          _classCallCheck(this, DocumentsDmPage);

          this.navController = navController;
          this.filehandlerService = filehandlerService;
          this.utilService = utilService;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"];
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"];
          this.listType = _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModeDocumentListType.Available;
          this.listTypes = Object.values(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModeDocumentListType);
          this.searchQuery = '';
        }

        _createClass(DocumentsDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.sharedDataService.dedicatedModeProcessType = _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModeProcessTypes.Document;
            this.getDedicatedModeAvailableDocuments();
            this.getDedicatedModeArchiveDocuments();
          }
        }, {
          key: "getDedicatedModeAvailableDocuments",
          value: function getDedicatedModeAvailableDocuments() {
            var _this = this;

            var _a;

            var companyID = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
            this.apiService.getDedicatedModeAvailableDocuments(companyID).subscribe(function (response) {
              if (response) {
                _this.availableDocuments = response.Result;
              }
            }, function (error) {});
          }
        }, {
          key: "getDedicatedModeArchiveDocuments",
          value: function getDedicatedModeArchiveDocuments() {
            var _this2 = this;

            var _a;

            var companyID = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
            this.apiService.getDedicatedModeArchiveDocuments(companyID).subscribe(function (response) {
              if (response) {
                _this2.archivedDocuments = response.Result;
              }
            }, function (error) {});
          }
        }, {
          key: "onSearch",
          value: function onSearch(search) {
            this.searchQuery = search;
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            this.listType = event;

            if (event === _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModeDocumentListType.Available) {
              this.getDedicatedModeAvailableDocuments();
            } else if (event === _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].DedicatedModeDocumentListType.Archive) {
              this.getDedicatedModeArchiveDocuments();
            }
          }
        }, {
          key: "searchbarShowHide",
          value: function searchbarShowHide(visible) {
            if (!visible) {
              this.searchQuery = '';
            }
          }
        }, {
          key: "openAvailableDocument",
          value: function openAvailableDocument(item) {
            if (item.documentFileName) {
              this.navController.navigateForward('/document-openchoice-dm', {
                queryParams: {
                  documentDetail: JSON.stringify(item)
                }
              });
            } else {
              this.utilService.showAlert('This device needs to be synced first in order to show the selected file. Please sync device and try again.', 'File Not Available Yet');
            }
          }
        }, {
          key: "openArchivedDocument",
          value: function openArchivedDocument(item) {
            var _a;

            if (item.documentFileName) {
              this.filehandlerService.openFile(((_a = this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.documentDirectory) + '' + item.documentFileName);
            } else {
              this.utilService.showAlert('This device needs to be synced first in order to show the selected file. Please sync device and try again.', 'File Not Available Yet');
            }
          }
        }]);

        return DocumentsDmPage;
      }();

      DocumentsDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_5__["FilehandlerService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }];
      };

      DocumentsDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-documents-dm',
        template: _raw_loader_documents_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_documents_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DocumentsDmPage);
      /***/
    },

    /***/
    "ca50":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents-dm/documents-dm.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ca50(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-dashboard-header-dm [title]=\"sharedDataService.getCurrentCheckedInEntityName()\"></app-dashboard-header-dm>\n    <app-topnavigations-btns-dm activeBtn=\"document\"></app-topnavigations-btns-dm>\n    <app-topnavigations-segments-dm [active]=\"listType\" [options]=\"listTypes\"\n                                    [search]=\"searchQuery\"\n                                    (searching)=\"onSearch($event)\"\n                                    (searchbarShowHide)=\"searchbarShowHide($event)\"\n                                    (changed)=\"segmentChanged($event)\"></app-topnavigations-segments-dm>\n</ion-header>\n\n<ion-content mode=\"md\">\n    <ion-list\n            *ngIf=\"(listType === EnumService.DedicatedModeDocumentListType.Available && availableDocuments?.length>0) || (listType === EnumService.DedicatedModeDocumentListType.Archive && archivedDocuments?.length>0); else noDocument\"\n            class=\"activity-list\"\n            lines=\"full\">\n\n        <ng-container *ngIf=\"listType === EnumService.DedicatedModeDocumentListType.Available\">\n            <app-archived-item\n                    *ngFor=\"let item of availableDocuments | listFilter:searchQuery:'documentTitle'; last as isLast\"\n                    (itemSelect)=\"openAvailableDocument(item)\"\n                    [icon]=\"item.documentFileIconURL\"\n                    [colFirst]=\"item.documentTitle\"\n                    colThird=\"Signed\"\n                    [colThirdHighlighted]=\"item.formattedCreatedDate\"\n            ></app-archived-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"listType === EnumService.DedicatedModeDocumentListType.Archive\">\n            <app-archived-item\n                    *ngFor=\"let item of archivedDocuments | listFilter:searchQuery:'documentTitle';\"\n                    (itemSelect)=\"openArchivedDocument(item)\"\n                    [icon]=\"item.documentFileIconURL\"\n                    [colFirst]=\"item.documentTitle\"\n                    colSecond=\"Signed by\"\n                    [colSecondHighlighted]=\"item.signedByName\"\n                    colThird=\"Signed\"\n                    [colThirdHighlighted]=\"item.formattedCreatedDate\"\n            ></app-archived-item>\n        </ng-container>\n\n    </ion-list>\n\n    <ng-template #noDocument>\n        <app-empty-message message=\"No documents available\"></app-empty-message>\n    </ng-template>\n\n    <ng-container\n            *ngIf=\"listType === EnumService.DedicatedModeDocumentListType.Available && availableDocuments?.length>0\">\n        <app-empty-message *ngIf=\"(availableDocuments | listFilter:searchQuery:'documentTitle').length == 0\"\n                           message=\"No Results Found\"></app-empty-message>\n    </ng-container>\n\n    <ng-container *ngIf=\"listType === EnumService.DedicatedModeDocumentListType.Archive && archivedDocuments?.length>0\">\n        <app-empty-message *ngIf=\"(archivedDocuments | listFilter:searchQuery:'documentTitle').length == 0\"\n                           message=\"No Results Found\"></app-empty-message>\n    </ng-container>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "p8aD":
    /*!***********************************************************!*\
      !*** ./src/app/pages/documents-dm/documents-dm.module.ts ***!
      \***********************************************************/

    /*! exports provided: DocumentsDmPageModule */

    /***/
    function p8aD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsDmPageModule", function () {
        return DocumentsDmPageModule;
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


      var _documents_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./documents-dm-routing.module */
      "2z7J");
      /* harmony import */


      var _documents_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./documents-dm.page */
      "SRs/");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

      var DocumentsDmPageModule = function DocumentsDmPageModule() {
        _classCallCheck(this, DocumentsDmPageModule);
      };

      DocumentsDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _documents_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_documents_dm_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsDmPage"]]
      })], DocumentsDmPageModule);
      /***/
    },

    /***/
    "xidM":
    /*!***********************************************************!*\
      !*** ./src/app/pages/documents-dm/documents-dm.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function xidM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudHMtZG0ucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-documents-dm-documents-dm-module-es5.js.map