(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-current-checkin-current-checkin-module~pages-folder-content-list-folder-content-list-module"], {
    /***/
    "9dFa":
    /*!***************************************************!*\
      !*** ./src/app/services/dynamic-route.service.ts ***!
      \***************************************************/

    /*! exports provided: DynamicRouteService */

    /***/
    function dFa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicRouteService", function () {
        return DynamicRouteService;
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


      var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../helpers/auth.guard */
      "C6wm");

      var DynamicRouteService = /*#__PURE__*/function () {
        function DynamicRouteService(router) {
          _classCallCheck(this, DynamicRouteService);

          this.router = router;
        }

        _createClass(DynamicRouteService, [{
          key: "addDynamicRoute",
          value: function addDynamicRoute(dynamicPath, component) {
            var canActivateAuth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var appRoutes = _toConsumableArray(this.router.config);

            var alreadyAdded = false;
            appRoutes.map(function (route) {
              if (route.path === dynamicPath) {
                alreadyAdded = true;
              }
            });
            var canActivate = [];

            if (canActivateAuth) {
              canActivate.push(_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]);
            }

            if (!alreadyAdded) {
              var route = {
                path: dynamicPath,
                component: component,
                canActivate: canActivate
              };
              appRoutes.push(route);
              this.router.resetConfig(appRoutes);
            }
          }
        }]);

        return DynamicRouteService;
      }();

      DynamicRouteService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      DynamicRouteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DynamicRouteService);
      /***/
    },

    /***/
    "DALk":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/folder-content-list/folder-content-list.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DALk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<app-dashboard-header [showPlaceNavigationBtns]=\"false\" [isCurrentCheckin]=\"true\" [hideCheckinButton]=\"isCheckedIn\"></app-dashboard-header>\n\n\t<ion-toolbar style=\"padding-top: 0\">\n\t\t<ion-back-button icon=\"./assets/icon/back.svg\" slot=\"start\" text=\"\" color=\"dark\" mode=\"md\"></ion-back-button>\n\t\t<ion-title class=\"ion-text-left\">{{pageTitle}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<app-custom-ion-refresh-loader [isRefreshing]=\"isRefreshing\"></app-custom-ion-refresh-loader>\n\t</ion-refresher>\n\n\t<div class=\"loading-spinner\" *ngIf=\"isLoading\">\n\t\t<app-custom-ion-refresh-loader [isRefreshing]=\"isLoading\"></app-custom-ion-refresh-loader>\n\t</div>\n\n\t<ion-list *ngIf=\" (availableDocuments&&availableDocuments?.length>0) || (availableForms&&availableForms?.length>0)\" class=\"activity-list\" lines=\"full\">\n\t\t<ion-list-header lines=\"full\">\n\t\t\t<ion-label>{{'PAGESPECIFIC_TEXT.CURRENT_CHECK_IN.AVAILABLE_FILES' | translate}}</ion-label>\n\t\t</ion-list-header>\n\n\t\t<!-- Show folder first -->\n\n\t\t<ng-container *ngIf=\"availableForms\">\n\t\t\t<ng-container *ngFor=\"let item of availableForms\">\n\t\t\t\t<ion-item *ngIf=\"item.formFolderID > 0\" (click)=\"openFormFolder(item)\">\n\t\t\t\t\t<ion-icon slot=\"start\" [src]=\"UtilService.FileIcon('folder')\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-wrap\">{{item.formTitle}}</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ng-container>\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"availableDocuments\">\n\t\t\t<ng-container *ngFor=\"let item of availableDocuments\">\n\t\t\t\t<ion-item *ngIf=\"item.folderID>0\" (click)=\"openDocumentFolder(item)\">\n\t\t\t\t\t<ion-icon slot=\"start\" [src]=\"UtilService.FileIcon('folder')\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-wrap\">{{item.documentTitle}}</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ng-container>\n\t\t</ng-container>\n\t\t<!--End  Show folder first -->\n\n\t\t<ng-container *ngIf=\"availableForms\">\n\t\t\t<ng-container *ngFor=\"let item of availableForms\">\n\t\t\t\t<ion-item *ngIf=\"item.formID>0\" (click)=\"openForm(item)\">\n\t\t\t\t\t<ion-icon slot=\"start\" [src]=\"UtilService.FileIcon('form')\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-wrap\">{{item.formTitle}}</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ng-container>\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"availableDocuments\">\n\t\t\t<ng-container *ngFor=\"let item of availableDocuments\">\n\t\t\t\t<ion-item *ngIf=\"item.documentID>0\" (click)=\"openDocument(item)\">\n\t\t\t\t\t<ion-img slot=\"start\" [src]=\"item.documentFileIconURL\"></ion-img>\n\t\t\t\t\t<ion-label class=\"ion-text-wrap\">{{item.documentTitle}}</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ng-container>\n\t\t</ng-container>\n\t</ion-list>\n\n\t<app-empty-message\n\t\t*ngIf=\"isCheckedIn && ((availableForms?.length===0) || (availableDocuments?.length===0))\"\n\t\ticon=\"./assets/icon/empty-files.svg\"\n\t\t[message]=\"'PAGESPECIFIC_TEXT.CURRENT_CHECK_IN.NO_FILES' | translate\"\n\t></app-empty-message>\n\n\t<app-empty-message *ngIf=\"!isCheckedIn\" icon=\"./assets/icon/not-checkedin.svg\" [message]=\"'PAGESPECIFIC_TEXT.CURRENT_CHECK_IN.YOU_NEED_TO_CHECKIN_FIRST_MESSAGE' | translate\"></app-empty-message>\n</ion-content>\n";
      /***/
    },

    /***/
    "bUwd":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/folder-content-list/folder-content-list.page.ts ***!
      \***********************************************************************/

    /*! exports provided: FolderContentListPage */

    /***/
    function bUwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FolderContentListPage", function () {
        return FolderContentListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_folder_content_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./folder-content-list.page.html */
      "DALk");
      /* harmony import */


      var _folder_content_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./folder-content-list.page.scss */
      "s6sP");
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


      var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
      /* harmony import */


      var src_app_services_dynamic_route_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/dynamic-route.service */
      "9dFa");

      var FolderContentListPage_1;

      var FolderContentListPage = FolderContentListPage_1 = /*#__PURE__*/function () {
        function FolderContentListPage(navCtrl, photoService, apiService, dynamicRouteService, utilService, accountService, observablesService, sharedDataService, filehandlerService, activatedRoute) {
          var _this = this;

          _classCallCheck(this, FolderContentListPage);

          var _a;

          this.navCtrl = navCtrl;
          this.photoService = photoService;
          this.apiService = apiService;
          this.dynamicRouteService = dynamicRouteService;
          this.utilService = utilService;
          this.accountService = accountService;
          this.observablesService = observablesService;
          this.sharedDataService = sharedDataService;
          this.filehandlerService = filehandlerService;
          this.activatedRoute = activatedRoute;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"];
          this.isRefreshing = false;
          this.isCheckedIn = false;
          this.isLoading = false;
          this.pageTitle = '';

          this.getPersonalModeData = function (callBack) {
            if (_this.itemType === 'form') {
              var formItem = _this.itemDetail;
              _this.pageTitle = formItem.formTitle;

              _this.getPersonalModeAvailableForms(formItem, callBack);
            } else if (_this.itemType === 'document') {
              var documentDetail = _this.itemDetail;
              _this.pageTitle = documentDetail.documentTitle;

              _this.getPersonalModeAvailableDocuments(documentDetail, callBack);
            } else {
              callBack && callBack();
            }
          };

          this.user = this.accountService.userValue;

          if (sharedDataService.checkedInPlaces && ((_a = sharedDataService.checkedInPlaces) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.isCheckedIn = true;
          }

          this.activatedRoute.queryParams.subscribe(function (res) {
            if (res) {
              if (res.itemDetail) {
                _this.itemDetail = JSON.parse(res.itemDetail);
              }

              if (res.itemType) {
                _this.itemType = res.itemType;
              }
            }
          });
        }

        _createClass(FolderContentListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.isLoading = true;
            this.getPersonalModeData(function () {
              _this2.isLoading = false;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this3 = this;

            this.isRefreshing = true;
            this.getPersonalModeData(function () {
              _this3.isRefreshing = false;
              event.target.complete();
            });
          }
        }, {
          key: "getPersonalModeAvailableForms",
          value: function getPersonalModeAvailableForms(formItem) {
            var _this4 = this;

            var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var _a;

            this.apiService.getPersonalModeAvailableForms((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, this.user.companyID, formItem.formFolderID).subscribe(function (response) {
              if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this4.availableForms = response.Result;
              }

              callBack && callBack();
            }, function (error) {
              _this4.availableForms = [];
              callBack && callBack();
            });
          }
        }, {
          key: "getPersonalModeAvailableDocuments",
          value: function getPersonalModeAvailableDocuments(documentDetail) {
            var _this5 = this;

            var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var _a;

            this.apiService.getPersonalModeAvailableDocuments((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, this.user.companyID, documentDetail.folderID).subscribe(function (response) {
              if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this5.availableDocuments = response.Result;
              }

              callBack && callBack();
            }, function (error) {
              _this5.availableDocuments = [];
              callBack && callBack();
            });
          }
        }, {
          key: "openFormFolder",
          value: function openFormFolder(item) {
            var newPath = 'tabs/current-checkin/folder-content-list/' + item.formFolderID;
            this.dynamicRouteService.addDynamicRoute(newPath, FolderContentListPage_1, true);
            this.navCtrl.navigateForward([newPath], {
              queryParams: {
                itemType: 'form',
                itemDetail: JSON.stringify(item)
              }
            });
          }
        }, {
          key: "openDocumentFolder",
          value: function openDocumentFolder(item) {
            var newPath = 'tabs/current-checkin/folder-content-list/' + item.folderID;
            this.dynamicRouteService.addDynamicRoute(newPath, FolderContentListPage_1, true);
            this.navCtrl.navigateForward([newPath], {
              queryParams: {
                itemType: 'document',
                itemDetail: JSON.stringify(item)
              }
            });
          }
        }, {
          key: "openForm",
          value: function openForm(form) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              var place;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      place = this.sharedDataService.currentSelectedCheckinPlace;
                      this.apiService.getSignOffFormDetail((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, form === null || form === void 0 ? void 0 : form.formID, place === null || place === void 0 ? void 0 : place.locationID, place === null || place === void 0 ? void 0 : place.projectID, place === null || place === void 0 ? void 0 : place.inventoryItemID).subscribe(function (response) {
                        _this6.utilService.hideLoading();

                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this6.sharedDataService.viewFormFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ViewFormForType.CurrentCheckin;
                          _this6.sharedDataService.signOffFormDetail = response.Result;

                          _this6.navCtrl.navigateForward(['/form-cover']);
                        }
                      }, function (error) {
                        _this6.utilService.hideLoading();
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openDocument",
          value: function openDocument(document) {
            this.navCtrl.navigateForward(['/document-openchoice'], {
              queryParams: {
                document: JSON.stringify(document)
              }
            });
          }
        }]);

        return FolderContentListPage;
      }();

      FolderContentListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: src_app_services_dynamic_route_service__WEBPACK_IMPORTED_MODULE_14__["DynamicRouteService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_12__["AccountService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_10__["ObservablesService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_13__["FilehandlerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }];
      };

      FolderContentListPage = FolderContentListPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-folder-content-list',
        template: _raw_loader_folder_content_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_folder_content_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FolderContentListPage);
      /***/
    },

    /***/
    "s6sP":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/folder-content-list/folder-content-list.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function s6sP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-title {\n  padding-left: 55px;\n}\n\nion-content ion-list.activity-list ion-list-header {\n  padding: 20px;\n  align-items: center;\n  --border-color: #dce7ef;\n  --border-width: 1px;\n  --border-style: solid;\n}\n\nion-content ion-list.activity-list ion-list-header ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n  color: #444444;\n  margin: 0;\n}\n\nion-content ion-list.activity-list ion-list-header .status-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content ion-list.activity-list ion-list-header .status-badge span {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #171538;\n}\n\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  text-align: center;\n}\n\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge.rejected {\n  color: #e74731;\n}\n\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge.overdue {\n  color: #ffffff;\n}\n\nion-content ion-list.activity-list ion-item {\n  --border-color: #dce7ef;\n  --border-width: 1px;\n  --border-style: solid;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\nion-content ion-list.activity-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #21092a;\n}\n\nion-content ion-list.activity-list ion-item ion-icon {\n  width: 22px;\n  height: 22px;\n}\n\nion-content ion-list.activity-list ion-item ion-img {\n  width: 22px;\n  height: 22px;\n}\n\n.loading-spinner {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvbGRlci1jb250ZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msa0JBQUE7QUFBRjs7QUFLRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZIOztBQUlHO0VBQ0MsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFGSjs7QUFLRztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFLSTtFQUNDLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFITDs7QUFNSTtFQUNDLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpMOztBQU1LO0VBQ0MsY0FBQTtBQUpOOztBQU9LO0VBQ0MsY0FBQTtBQUxOOztBQVdFO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVRIOztBQVdHO0VBQ0MsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVlHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFWSjs7QUFhRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FBWEo7O0FBaUJBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQWREIiwiZmlsZSI6ImZvbGRlci1jb250ZW50LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuXHRpb24tdGl0bGUge1xuXHRcdHBhZGRpbmctbGVmdDogNTVweDtcblx0fVxufVxuaW9uLWNvbnRlbnQge1xuXHRpb24tbGlzdC5hY3Rpdml0eS1saXN0IHtcblx0XHRpb24tbGlzdC1oZWFkZXIge1xuXHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHQtLWJvcmRlci1jb2xvcjogI2RjZTdlZjtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAxcHg7XG5cdFx0XHQtLWJvcmRlci1zdHlsZTogc29saWQ7XG5cblx0XHRcdGlvbi1sYWJlbCB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuXHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMXB4O1xuXHRcdFx0XHRjb2xvcjogIzQ0NDQ0NDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuc3RhdHVzLWJhZGdlIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMTcxNTM4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW9uLWJhZGdlIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogSUJNIFBsZXggU2Fucztcblx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRcdFx0Ji5yZWplY3RlZCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2U3NDczMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLm92ZXJkdWUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aW9uLWl0ZW0ge1xuXHRcdFx0LS1ib3JkZXItY29sb3I6ICNkY2U3ZWY7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMXB4O1xuXHRcdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdFx0LS1wYWRkaW5nLXRvcDogMTJweDtcblx0XHRcdC0tcGFkZGluZy1ib3R0b206IDEycHg7XG5cblx0XHRcdGlvbi1sYWJlbCB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuXHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdGNvbG9yOiAjMjEwOTJhO1xuXHRcdFx0fVxuXG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdHdpZHRoOiAyMnB4O1xuXHRcdFx0XHRoZWlnaHQ6IDIycHg7XG5cdFx0XHR9XG5cblx0XHRcdGlvbi1pbWcge1xuXHRcdFx0XHR3aWR0aDogMjJweDtcblx0XHRcdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-current-checkin-current-checkin-module~pages-folder-content-list-folder-content-list-module-es5.js.map