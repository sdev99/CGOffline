(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkin-list-checkin-list-module"], {
    /***/
    "LpIa":
    /*!***********************************************************!*\
      !*** ./src/app/pages/checkin-list/checkin-list.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function LpIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background-color: #ffffff !important;\n}\nion-header ::ng-deep app-modal-header ion-toolbar {\n  --border-color: #FFFFFF;\n  --border-width: 0;\n  --background: #FFFFFF;\n}\nion-header ion-searchbar {\n  margin: 0 16px;\n  margin-top: 20px;\n  --icon-color: #A1A8CA;\n  --placeholder-color: #A1A8CA;\n  --color: #A1A8CA;\n  --box-shadow: none;\n  border: 1px solid #CACEE1;\n  padding: 0;\n  width: auto;\n  border-radius: 3px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #A1A8CA;\n}\nion-content ion-list {\n  margin-top: 16px;\n}\nion-content ion-list ion-item {\n  --border-color: #E8EAF2;\n  --border-width: 1px;\n}\nion-content ion-list ion-item ion-label {\n  padding: 16px 22px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGO0FBRUk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBTjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7QUFRRTtFQUNFLGdCQUFBO0FBTEo7QUFPSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTFIiLCJmaWxlIjoiY2hlY2tpbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG5cbiAgOjpuZy1kZWVwIGFwcC1tb2RhbC1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAtLWljb24tY29sb3I6ICNBMUE4Q0E7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0ExQThDQTtcbiAgICAtLWNvbG9yOiAjQTFBOENBO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogI0ExQThDQTtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG5cbiAgaW9uLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogI0U4RUFGMjtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "MD0m":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/checkin-list/checkin-list-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CheckinListPageRoutingModule */

    /***/
    function MD0m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinListPageRoutingModule", function () {
        return CheckinListPageRoutingModule;
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


      var _checkin_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkin-list.page */
      "u0F2");

      var routes = [{
        path: '',
        component: _checkin_list_page__WEBPACK_IMPORTED_MODULE_3__["CheckinListPage"]
      }];

      var CheckinListPageRoutingModule = function CheckinListPageRoutingModule() {
        _classCallCheck(this, CheckinListPageRoutingModule);
      };

      CheckinListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinListPageRoutingModule);
      /***/
    },

    /***/
    "YFeQ":
    /*!***********************************************************!*\
      !*** ./src/app/pages/checkin-list/checkin-list.module.ts ***!
      \***********************************************************/

    /*! exports provided: CheckinListPageModule */

    /***/
    function YFeQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinListPageModule", function () {
        return CheckinListPageModule;
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


      var _checkin_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkin-list-routing.module */
      "MD0m");
      /* harmony import */


      var _checkin_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkin-list.page */
      "u0F2");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var CheckinListPageModule = function CheckinListPageModule() {
        _classCallCheck(this, CheckinListPageModule);
      };

      CheckinListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkin_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinListPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]],
        declarations: [_checkin_list_page__WEBPACK_IMPORTED_MODULE_6__["CheckinListPage"]]
      })], CheckinListPageModule);
      /***/
    },

    /***/
    "n3Di":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-list/checkin-list.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function n3Di(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\t<ion-header mode=\"ios\">\n\t\t<app-modal-header [modalTitle]=\"'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.CHECK_IN' | translate\" (closeModal)=\"onClose()\"></app-modal-header>\n\n\t\t<ion-searchbar (click)=\"presentModal()\" [placeholder]=\"'PAGESPECIFIC_TEXT.CHECK_IN_AND_OUT.SEARCH_ENTITIES' | translate\" mode=\"md\" class=\"search-field\"></ion-searchbar>\n\t</ion-header>\n\n\t<ion-list inset=\"false\" lines=\"none\">\n\t\t<ion-item *ngFor=\"let location of locations\" (click)=\"openLocation(location)\">\n\t\t\t<ion-label>{{location.locationName}}</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "u0F2":
    /*!*********************************************************!*\
      !*** ./src/app/pages/checkin-list/checkin-list.page.ts ***!
      \*********************************************************/

    /*! exports provided: CheckinListPage */

    /***/
    function u0F2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinListPage", function () {
        return CheckinListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkin_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkin-list.page.html */
      "n3Di");
      /* harmony import */


      var _checkin_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkin-list.page.scss */
      "LpIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modals_search_location_search_location_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../modals/search-location/search-location.page */
      "NXy/");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CheckinListPage = /*#__PURE__*/function () {
        function CheckinListPage(navCtrl, modalController, apiService, utilService, router, accountService, sharedDataService) {
          var _this = this;

          _classCallCheck(this, CheckinListPage);

          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.apiService = apiService;
          this.utilService = utilService;
          this.router = router;
          this.accountService = accountService;
          this.sharedDataService = sharedDataService;
          this.locations = [];

          this.getLocationItemList = function () {
            _this.apiService.getLocationItemList(_this.user.companyID).subscribe(function (res) {
              if (res.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this.filterLocationList(res.Result);
              }
            }, function (error) {});
          };

          this.filterLocationList = function (list) {
            if (list) {
              var locations = [];
              list.map(function (item) {
                var found = false;

                var entityIds = _this.utilService.getRelevantEntityId(item.locationID);

                _this.sharedDataService.checkedInPlaces.map(function (checkedInDetailItem) {
                  if (entityIds.LocationID > 0 && entityIds.LocationID === checkedInDetailItem.locationID || entityIds.ProjectID > 0 && entityIds.ProjectID === checkedInDetailItem.projectID || entityIds.InventoryID > 0 && entityIds.InventoryID === checkedInDetailItem.inventoryItemID) {
                    found = true;
                    return;
                  }
                });

                if (!found) {
                  locations.push(item);
                }
              });
              _this.locations = locations;
            }
          };

          this.user = this.accountService.userValue;
          this.filterLocationList(sharedDataService.locationItemList);
        }

        _createClass(CheckinListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLocationItemList();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.navigateBack(['/tabs/dashboard'], {
              replaceUrl: true
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modals_search_location_search_location_page__WEBPACK_IMPORTED_MODULE_5__["SearchLocationPage"],
                        cssClass: 'search-location',
                        swipeToClose: true,
                        showBackdrop: true,
                        backdropDismiss: true,
                        animated: false,
                        componentProps: {
                          list: this.locations
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      modal.onWillDismiss().then(function (_ref) {
                        var data = _ref.data;

                        if (data) {
                          _this2.openLocation(data);
                        }
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openLocation",
          value: function openLocation(location) {
            var _a;

            this.sharedDataService.checkinLocationByOption = _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].CheckInLocationByOptions.List;
            this.sharedDataService.checkInForLocation = location;
            this.sharedDataService.getCheckinDetails((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, this.apiService);
          }
        }]);

        return CheckinListPage;
      }();

      CheckinListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"]
        }];
      };

      CheckinListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-list',
        template: _raw_loader_checkin_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=checkin-list-checkin-list-module-es5.js.map