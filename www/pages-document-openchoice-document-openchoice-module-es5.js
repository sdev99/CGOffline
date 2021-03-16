(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-document-openchoice-document-openchoice-module"], {
    /***/
    "8CTc":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/document-openchoice/document-openchoice-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: DocumentOpenchoicePageRoutingModule */

    /***/
    function CTc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentOpenchoicePageRoutingModule", function () {
        return DocumentOpenchoicePageRoutingModule;
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


      var _document_openchoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./document-openchoice.page */
      "Jz4K");

      var routes = [{
        path: '',
        component: _document_openchoice_page__WEBPACK_IMPORTED_MODULE_3__["DocumentOpenchoicePage"]
      }];

      var DocumentOpenchoicePageRoutingModule = function DocumentOpenchoicePageRoutingModule() {
        _classCallCheck(this, DocumentOpenchoicePageRoutingModule);
      };

      DocumentOpenchoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DocumentOpenchoicePageRoutingModule);
      /***/
    },

    /***/
    "Jz4K":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/document-openchoice/document-openchoice.page.ts ***!
      \***********************************************************************/

    /*! exports provided: DocumentOpenchoicePage */

    /***/
    function Jz4K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentOpenchoicePage", function () {
        return DocumentOpenchoicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_document_openchoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./document-openchoice.page.html */
      "N0Ma");
      /* harmony import */


      var _document_openchoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./document-openchoice.page.scss */
      "a7aU");
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


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");

      var DocumentOpenchoicePage = /*#__PURE__*/function () {
        function DocumentOpenchoicePage(navController, activatedRoute, filehandlerService, sharedDataService, apiService, accountService) {
          var _this = this;

          _classCallCheck(this, DocumentOpenchoicePage);

          this.navController = navController;
          this.activatedRoute = activatedRoute;
          this.filehandlerService = filehandlerService;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.accountService = accountService;
          this.user = this.accountService.userValue;
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.document) {
              _this.document = JSON.parse(params.document);
            }
          });
        }

        _createClass(DocumentOpenchoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.navController.back();
          }
        }, {
          key: "viewAndSignOff",
          value: function viewAndSignOff() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;

            this.sharedDataService.signOffFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_CURRENT_CHECKIN;
            this.sharedDataService.signOffDocumentDetail = this.document;
            this.sharedDataService.signOffDetailsPostData = {
              userId: (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId,
              documentVersionID: this.document.documentVersionID,
              formVersionID: 0,
              latitude: (_c = (_b = this.sharedDataService.myCurrentGeoLocation) === null || _b === void 0 ? void 0 : _b.coords) === null || _c === void 0 ? void 0 : _c.latitude,
              longitude: (_e = (_d = this.sharedDataService.myCurrentGeoLocation) === null || _d === void 0 ? void 0 : _d.coords) === null || _e === void 0 ? void 0 : _e.longitude,
              locationID: (_f = this.sharedDataService.currentSelectedCheckinPlace) === null || _f === void 0 ? void 0 : _f.locationID,
              projectID: (_g = this.sharedDataService.currentSelectedCheckinPlace) === null || _g === void 0 ? void 0 : _g.projectID,
              inventoryItemID: (_h = this.sharedDataService.currentSelectedCheckinPlace) === null || _h === void 0 ? void 0 : _h.inventoryItemID,
              userCheckInDetailID: (_j = this.sharedDataService.currentSelectedCheckinPlace) === null || _j === void 0 ? void 0 : _j.userCheckInDetailID
            };

            if (this.document.isSignatureSignOff || this.document.isDigitalSignOff) {
              this.navController.navigateForward('/signoff-digitalink');
            } else if (this.document.isPhotoSignOff) {
              if (this.sharedDataService.dedicatedMode) {
                this.sharedDataService.dedicatedModeCapturePhotoFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Signoff;
                this.navController.navigateForward(['/checkinout-photoidentity-dm']);
              } else {
                this.navController.navigateForward(['/signoff-photo']);
              }
            } else {
              this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
            }

            this.openDocument();
          }
        }, {
          key: "viewOnly",
          value: function viewOnly() {
            this.openDocument();
          }
        }, {
          key: "openDocument",
          value: function openDocument() {
            if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && this.document && this.document.documentFileName) {
              this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + this.document.documentFileName);
            }
          }
        }]);

        return DocumentOpenchoicePage;
      }();

      DocumentOpenchoicePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__["FilehandlerService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"]
        }];
      };

      DocumentOpenchoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-document-openchoice',
        template: _raw_loader_document_openchoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_document_openchoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DocumentOpenchoicePage);
      /***/
    },

    /***/
    "N0Ma":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/document-openchoice/document-openchoice.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N0Ma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-modal-header [modalTitle]=\"sharedDataService.currentSelectedCheckinPlace?.entityName\" (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"content\">\n        <div class=\"text-1\">What do you want to do this with this document?</div>\n        <div class=\"text-2\" *ngIf=\"document\">\n            {{document?.documentTitle}}\n        </div>\n\n\n        <ion-button class=\"action-btn\" (click)=\"viewAndSignOff()\">\n            View and Sign-Off\n        </ion-button>\n\n        <ion-button class=\"cancel-btn\" fill=\"outline\" (click)=\"viewOnly()\">\n            View Only\n        </ion-button>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "Wo75":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/document-openchoice/document-openchoice.module.ts ***!
      \*************************************************************************/

    /*! exports provided: DocumentOpenchoicePageModule */

    /***/
    function Wo75(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentOpenchoicePageModule", function () {
        return DocumentOpenchoicePageModule;
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


      var _document_openchoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./document-openchoice-routing.module */
      "8CTc");
      /* harmony import */


      var _document_openchoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./document-openchoice.page */
      "Jz4K");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var DocumentOpenchoicePageModule = function DocumentOpenchoicePageModule() {
        _classCallCheck(this, DocumentOpenchoicePageModule);
      };

      DocumentOpenchoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _document_openchoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentOpenchoicePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_document_openchoice_page__WEBPACK_IMPORTED_MODULE_6__["DocumentOpenchoicePage"]]
      })], DocumentOpenchoicePageModule);
      /***/
    },

    /***/
    "a7aU":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/document-openchoice/document-openchoice.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function a7aU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  padding: 0 32px;\n}\nion-content .content .text-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 31px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #444444;\n}\nion-content .content .text-2 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #4A90E2;\n}\nion-content .content .action-btn {\n  margin-top: 50px;\n  width: 207px;\n  height: 44px;\n  margin-bottom: 31px;\n}\nion-content .content .cancel-btn {\n  --background: #ffffff;\n  width: 207px;\n  height: 44px;\n  --border-width: 2px;\n  --border-color: #2A6FDB;\n  --border-radius: 3px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #2A6FDB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RvY3VtZW50LW9wZW5jaG9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRk47QUFLSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSE4iLCJmaWxlIjoiZG9jdW1lbnQtb3BlbmNob2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMzJweDtcblxuICAgIC50ZXh0LTEge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgIH1cblxuICAgIC50ZXh0LTIge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzRBOTBFMjtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgd2lkdGg6IDIwN3B4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzFweDtcbiAgICB9XG5cbiAgICAuY2FuY2VsLWJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICB3aWR0aDogMjA3cHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgICAgLS1ib3JkZXItY29sb3I6ICMyQTZGREI7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgY29sb3I6ICMyQTZGREI7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-document-openchoice-document-openchoice-module-es5.js.map