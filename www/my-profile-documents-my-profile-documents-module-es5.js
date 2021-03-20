(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-documents-my-profile-documents-module"], {
    /***/
    "1zJA":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/my-profile-documents/my-profile-documents.module.ts ***!
      \***************************************************************************/

    /*! exports provided: MyProfileDocumentsPageModule */

    /***/
    function zJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileDocumentsPageModule", function () {
        return MyProfileDocumentsPageModule;
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


      var _my_profile_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-profile-documents-routing.module */
      "Pb+W");
      /* harmony import */


      var _my_profile_documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-profile-documents.page */
      "vYVg");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var MyProfileDocumentsPageModule = function MyProfileDocumentsPageModule() {
        _classCallCheck(this, MyProfileDocumentsPageModule);
      };

      MyProfileDocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_profile_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfileDocumentsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_my_profile_documents_page__WEBPACK_IMPORTED_MODULE_6__["MyProfileDocumentsPage"]]
      })], MyProfileDocumentsPageModule);
      /***/
    },

    /***/
    "Pb+W":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/my-profile-documents/my-profile-documents-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: MyProfileDocumentsPageRoutingModule */

    /***/
    function PbW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileDocumentsPageRoutingModule", function () {
        return MyProfileDocumentsPageRoutingModule;
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


      var _my_profile_documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-profile-documents.page */
      "vYVg");

      var routes = [{
        path: '',
        component: _my_profile_documents_page__WEBPACK_IMPORTED_MODULE_3__["MyProfileDocumentsPage"]
      }];

      var MyProfileDocumentsPageRoutingModule = function MyProfileDocumentsPageRoutingModule() {
        _classCallCheck(this, MyProfileDocumentsPageRoutingModule);
      };

      MyProfileDocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyProfileDocumentsPageRoutingModule);
      /***/
    },

    /***/
    "r/ge":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile-documents/my-profile-documents.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rGe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header [modalTitle]=\"'My Signed Documents'\" (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <app-custom-ion-refresh-loader [isRefreshing]=\"isRefreshing\"></app-custom-ion-refresh-loader>\n    </ion-refresher>\n\n    <ng-container *ngIf=\"list && list.length>0; else emptyMessage\">\n        <ion-list lines=\"none\">\n            <ion-item mode=\"md\" lines=\"full\" *ngFor=\"let item of list\" (click)=\"openFile(item)\">\n                <ion-icon slot=\"start\" src=\"./assets/icon/attachment2.svg\"></ion-icon>\n                <ion-label class=\"ion-text-wrap\">\n                    <h4>{{item.documentTitle}}</h4>\n                    <!--                <p>Expires on {{item.timeDifference | date:'dd MMM yyyy HH:mm'}}</p>-->\n                    <p>{{item.formattedCreatedDate}}</p>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n        <!--        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">-->\n        <!--            <ion-infinite-scroll-content [loadingSpinner]=\"null\">-->\n        <!--                <div class=\"ion-infinite-custom-loader\" *ngIf=\"isLoadingMoreData\">-->\n        <!--                    <ion-icon src=\"./assets/icon/Loader.svg\"></ion-icon>-->\n        <!--                </div>-->\n        <!--            </ion-infinite-scroll-content>-->\n        <!--        </ion-infinite-scroll>-->\n    </ng-container>\n\n    <ng-template #emptyMessage>\n        <app-empty-message message=\"There are no signed-off files.\"></app-empty-message>\n    </ng-template>\n</ion-content>\n";
      /***/
    },

    /***/
    "uUYN":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/my-profile-documents/my-profile-documents.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function uUYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-list ion-item {\n  --border-color: #DCE7EF;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\nion-content ion-list ion-item h4 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #21092A;\n}\nion-content ion-list ion-item p {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #777595;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LXByb2ZpbGUtZG9jdW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUROO0FBR007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRFI7QUFJTTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGUiIsImZpbGUiOiJteS1wcm9maWxlLWRvY3VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogI0RDRTdFRjtcbiAgICAgIC0tcGFkZGluZy10b3A6IDhweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcblxuICAgICAgaDQge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogIzIxMDkyQTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjNzc3NTk1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "vYVg":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/my-profile-documents/my-profile-documents.page.ts ***!
      \*************************************************************************/

    /*! exports provided: MyProfileDocumentsPage */

    /***/
    function vYVg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileDocumentsPage", function () {
        return MyProfileDocumentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_profile_documents_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-profile-documents.page.html */
      "r/ge");
      /* harmony import */


      var _my_profile_documents_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-profile-documents.page.scss */
      "uUYN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");

      var MyProfileDocumentsPage = /*#__PURE__*/function () {
        function MyProfileDocumentsPage(navCtrl, filehandlerService, apiService, accountService, sharedDataService, utilService) {
          var _this = this;

          _classCallCheck(this, MyProfileDocumentsPage);

          this.navCtrl = navCtrl;
          this.filehandlerService = filehandlerService;
          this.apiService = apiService;
          this.accountService = accountService;
          this.sharedDataService = sharedDataService;
          this.utilService = utilService;
          this.list = [];
          this.isLoadingMoreData = false;
          this.isRefreshing = false;

          this.getMySignedDocuments = function (callBack) {
            var resetList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var _a;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.apiService.getMySignedDocuments((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe(function (response) {
                        var isMoreData = false;

                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          if (resetList) {
                            _this2.list = response.Result;
                          } else {
                            _this2.list = response.Result; // this.list = this.list.concat(response.Result);
                          }

                          isMoreData = true;
                        }

                        _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].fireCallBack(callBack, isMoreData);
                      }, function (error) {
                        _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].fireCallBack(callBack, false);
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };

          this.user = this.accountService.userValue;
        }

        _createClass(MyProfileDocumentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      this.getMySignedDocuments(function () {
                        _this3.utilService.hideLoading();
                      }, true);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this4 = this;

            this.isRefreshing = true;
            this.getMySignedDocuments(function () {
              _this4.isRefreshing = false;
              event.target.complete();
            }, true);
          }
        }, {
          key: "loadMoreData",
          value: function loadMoreData(event) {
            var _this5 = this;

            this.isLoadingMoreData = true;
            this.getMySignedDocuments(function (isMoreData) {
              event.target.complete();
              _this5.isLoadingMoreData = false;

              if (!isMoreData) {// event.target.disabled = true;
              }
            });
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
        }, {
          key: "openFile",
          value: function openFile(attachment) {
            if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && attachment && attachment.documentFileName) {
              this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + attachment.documentFileName);
            }
          }
        }]);

        return MyProfileDocumentsPage;
      }();

      MyProfileDocumentsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_5__["FilehandlerService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__["SharedDataService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }];
      };

      MyProfileDocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-profile-documents',
        template: _raw_loader_my_profile_documents_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_profile_documents_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyProfileDocumentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-profile-documents-my-profile-documents-module-es5.js.map