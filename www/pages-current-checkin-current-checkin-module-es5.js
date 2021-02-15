(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-current-checkin-current-checkin-module"], {
    /***/
    "+RB1":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/current-checkin/current-checkin.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function RB1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-list.activity-list ion-list-header {\n  padding: 20px;\n  align-items: center;\n  --border-color: #DCE7EF;\n  --border-width: 1px;\n  --border-style: solid;\n}\nion-content ion-list.activity-list ion-list-header ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n  color: #444444;\n  margin: 0;\n}\nion-content ion-list.activity-list ion-list-header .status-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-list.activity-list ion-list-header .status-badge span {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #171538;\n}\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  text-align: center;\n}\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge.rejected {\n  color: #E74731;\n}\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge.overdue {\n  color: #FFFFFF;\n}\nion-content ion-list.activity-list ion-item {\n  --border-color: #DCE7EF;\n  --border-width: 1px;\n  --border-style: solid;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\nion-content ion-list.activity-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #21092A;\n}\nion-content ion-list.activity-list ion-item ion-icon {\n  width: 22px;\n  height: 22px;\n}\nion-content ion-list.activity-list ion-item ion-img {\n  width: 22px;\n  height: 22px;\n}\n.loading-spinner {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1cnJlbnQtY2hlY2tpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFGTjtBQUlNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFGUjtBQUtNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhSO0FBS1E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSFY7QUFNUTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpWO0FBTVU7RUFDRSxjQUFBO0FBSlo7QUFPVTtFQUNFLGNBQUE7QUFMWjtBQVdJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVROO0FBV007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVFI7QUFZTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVlI7QUFhTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBWFI7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBZkYiLCJmaWxlIjoiY3VycmVudC1jaGVja2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3QuYWN0aXZpdHktbGlzdCB7XG5cbiAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtLWJvcmRlci1jb2xvcjogI0RDRTdFRjtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAuc3RhdHVzLWJhZGdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgJi5yZWplY3RlZCB7XG4gICAgICAgICAgICBjb2xvcjogI0U3NDczMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLm92ZXJkdWUge1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNEQ0U3RUY7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMjEwOTJBO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pbWcge1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "5IS0":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/current-checkin/current-checkin-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CurrentCheckinPageRoutingModule */

    /***/
    function IS0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentCheckinPageRoutingModule", function () {
        return CurrentCheckinPageRoutingModule;
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


      var _current_checkin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./current-checkin.page */
      "VKOg");

      var routes = [{
        path: '',
        component: _current_checkin_page__WEBPACK_IMPORTED_MODULE_3__["CurrentCheckinPage"]
      }, {
        path: 'checkin-workpermit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | checkin-workpermit-checkin-workpermit-module */
          "checkin-workpermit-checkin-workpermit-module").then(__webpack_require__.bind(null,
          /*! ../checkin-workpermit/checkin-workpermit.module */
          "wBB1")).then(function (m) {
            return m.CheckinWorkpermitPageModule;
          });
        }
      }];

      var CurrentCheckinPageRoutingModule = function CurrentCheckinPageRoutingModule() {
        _classCallCheck(this, CurrentCheckinPageRoutingModule);
      };

      CurrentCheckinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CurrentCheckinPageRoutingModule);
      /***/
    },

    /***/
    "F4dX":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/current-checkin/current-checkin.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CurrentCheckinPageModule */

    /***/
    function F4dX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentCheckinPageModule", function () {
        return CurrentCheckinPageModule;
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


      var _current_checkin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./current-checkin-routing.module */
      "5IS0");
      /* harmony import */


      var _current_checkin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./current-checkin.page */
      "VKOg");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var CurrentCheckinPageModule = function CurrentCheckinPageModule() {
        _classCallCheck(this, CurrentCheckinPageModule);
      };

      CurrentCheckinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _current_checkin_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrentCheckinPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_current_checkin_page__WEBPACK_IMPORTED_MODULE_6__["CurrentCheckinPage"]]
      })], CurrentCheckinPageModule);
      /***/
    },

    /***/
    "VKOg":
    /*!***************************************************************!*\
      !*** ./src/app/pages/current-checkin/current-checkin.page.ts ***!
      \***************************************************************/

    /*! exports provided: CurrentCheckinPage */

    /***/
    function VKOg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentCheckinPage", function () {
        return CurrentCheckinPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_current_checkin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./current-checkin.page.html */
      "mz3E");
      /* harmony import */


      var _current_checkin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./current-checkin.page.scss */
      "+RB1");
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

      var CurrentCheckinPage = /*#__PURE__*/function () {
        function CurrentCheckinPage(navCtrl, photoService, apiService, utilService, route, accountService, observablesService, sharedDataService, filehandlerService) {
          var _this = this;

          _classCallCheck(this, CurrentCheckinPage);

          var _a;

          this.navCtrl = navCtrl;
          this.photoService = photoService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.route = route;
          this.accountService = accountService;
          this.observablesService = observablesService;
          this.sharedDataService = sharedDataService;
          this.filehandlerService = filehandlerService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"];
          this.isRefreshing = false;
          this.isCheckedIn = false;
          this.isLoading = false;

          this.getPersonalModeData = function () {
            var showLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var responseRecievedCount, requestCount, checkAllRequestFinish;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (showLoading) {
                        this.utilService.presentLoadingWithOptions();
                      }

                      responseRecievedCount = 0;
                      requestCount = 3;

                      checkAllRequestFinish = function checkAllRequestFinish() {
                        responseRecievedCount++;

                        if (responseRecievedCount === requestCount) {
                          _this2.utilService.hideLoading();

                          _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].fireCallBack(callBack);
                        }
                      };

                      this.getPersonalModeAvailableWorkPermits(function () {
                        checkAllRequestFinish();
                      });
                      this.getPersonalModeAvailableDocuments(function () {
                        checkAllRequestFinish();
                      });
                      this.getPersonalModeAvailableForms(function () {
                        checkAllRequestFinish();
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };

          this.getPersonalModeAvailableForms = function () {
            var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var _b;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.apiService.getPersonalModeAvailableForms((_b = this.user) === null || _b === void 0 ? void 0 : _b.userId, this.user.companyID).subscribe(function (response) {
                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this3.availableForms = response.Result;
                        }

                        _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].fireCallBack(callBack);
                      }, function (error) {
                        _this3.availableForms = [];

                        _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].fireCallBack(callBack);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          };

          this.getPersonalModeAvailableDocuments = function () {
            var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var _c;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.apiService.getPersonalModeAvailableDocuments((_c = this.user) === null || _c === void 0 ? void 0 : _c.userId, this.user.companyID).subscribe(function (response) {
                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this4.availableDocuments = response.Result;
                        }

                        _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].fireCallBack(callBack);
                      }, function (error) {
                        _this4.availableDocuments = [];

                        _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].fireCallBack(callBack);
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          };

          this.getPersonalModeAvailableWorkPermits = function () {
            var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var _d;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.apiService.getPersonalModeAvailableWorkPermits((_d = this.user) === null || _d === void 0 ? void 0 : _d.userId, this.user.companyID).subscribe(function (response) {
                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this5.availableWorkPermits = response.Result;
                        }

                        _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].fireCallBack(callBack);
                      }, function (error) {
                        _this5.availableWorkPermits = [];

                        _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].fireCallBack(callBack);
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          };

          this.user = this.accountService.userValue;

          if (sharedDataService.checkedInPlaces && ((_a = sharedDataService.checkedInPlaces) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.isCheckedIn = true;
          }
        }

        _createClass(CurrentCheckinPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.getPersonalModeData();
            this.observablesService.getObservable(_services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ObserverKeys.CURRENT_CHECKED_IN_CHANGED).subscribe(function () {
              var _a, _b;

              _this6.isLoading = true;

              if (!_this6.sharedDataService.checkedInPlaces || ((_a = _this6.sharedDataService.checkedInPlaces) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                _this6.isCheckedIn = false;
              }

              if (_this6.sharedDataService.checkedInPlaces && ((_b = _this6.sharedDataService.checkedInPlaces) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                if (!_this6.sharedDataService.currentSelectedCheckinPlace) {
                  _this6.sharedDataService.currentSelectedCheckinPlace = _this6.sharedDataService.checkedInPlaces[0];
                }

                _this6.isCheckedIn = true;
              }

              _this6.getPersonalModeData(false, function () {
                _this6.isLoading = false;
              });
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this7 = this;

            this.isRefreshing = true;
            this.getPersonalModeData(false, function () {
              _this7.isRefreshing = false;
              event.target.complete();
            });
          }
        }, {
          key: "openForm",
          value: function openForm(form) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var place;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      place = this.sharedDataService.currentSelectedCheckinPlace;
                      this.apiService.getSignOffFormDetail((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, form === null || form === void 0 ? void 0 : form.formID, place === null || place === void 0 ? void 0 : place.locationID, place === null || place === void 0 ? void 0 : place.projectID, place === null || place === void 0 ? void 0 : place.inventoryItemID).subscribe(function (response) {
                        _this8.utilService.hideLoading();

                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this8.sharedDataService.viewFormFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_11__["EnumService"].ViewFormForType.CurrentCheckin;
                          _this8.sharedDataService.signOffFormDetail = response.Result;

                          _this8.navCtrl.navigateForward(['/form-cover']);
                        }
                      }, function (error) {
                        _this8.utilService.hideLoading();
                      });

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
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
        }, {
          key: "openWorkPermit",
          value: function openWorkPermit() {
            this.sharedDataService.availableWorkPermits = this.availableWorkPermits;
            this.navCtrl.navigateForward(['tabs/current-checkin/checkin-workpermit']);
          }
        }]);

        return CurrentCheckinPage;
      }();

      CurrentCheckinPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_12__["AccountService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_10__["ObservablesService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_13__["FilehandlerService"]
        }];
      };

      CurrentCheckinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-current-checkin',
        template: _raw_loader_current_checkin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_current_checkin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CurrentCheckinPage);
      /***/
    },

    /***/
    "mz3E":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/current-checkin/current-checkin.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mz3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-dashboard-header [showPlaceNavigationBtns]=\"true\" [isCurrentCheckin]=\"true\"\n                          [hideCheckinButton]=\"isCheckedIn\"></app-dashboard-header>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <app-custom-ion-refresh-loader [isRefreshing]=\"isRefreshing\"></app-custom-ion-refresh-loader>\n    </ion-refresher>\n\n    <div class=\"loading-spinner\" *ngIf=\"isLoading\">\n        <app-custom-ion-refresh-loader [isRefreshing]=\"isLoading\"></app-custom-ion-refresh-loader>\n    </div>\n\n    <ion-list\n            *ngIf=\"(availableWorkPermits&&availableWorkPermits?.length>0) || (availableDocuments&&availableDocuments?.length>0) || (availableForms&&availableForms?.length>0)\"\n            class=\"activity-list\" lines=\"full\">\n        <ion-list-header lines=\"full\">\n            <ion-label>Available Files</ion-label>\n        </ion-list-header>\n\n        <ion-item *ngIf=\"availableWorkPermits && availableWorkPermits?.length>0\" (click)=\"openWorkPermit()\">\n            <ion-icon slot=\"start\" [src]=\"UtilService.FileIcon('folder')\"></ion-icon>\n            <ion-label>Work Permit Forms</ion-label>\n        </ion-item>\n\n        <ng-container *ngIf=\"availableForms\">\n            <ion-item *ngFor=\"let item of availableForms\" (click)=\"openForm(item)\">\n                <ion-icon slot=\"start\" [src]=\"UtilService.FileIcon('form')\"></ion-icon>\n                <ion-label class=\"ion-text-wrap\">{{item.formTitle}}</ion-label>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"availableDocuments\">\n            <ion-item *ngFor=\"let item of availableDocuments\" (click)=\"openDocument(item)\">\n                <ion-img slot=\"start\" [src]=\"item.documentFileIconURL\"></ion-img>\n                <ion-label class=\"ion-text-wrap\">{{item.documentTitle}}</ion-label>\n            </ion-item>\n        </ng-container>\n    </ion-list>\n\n    <app-empty-message\n            *ngIf=\"isCheckedIn && ((availableForms?.length===0) && (availableDocuments?.length===0) && (availableWorkPermits?.length===0))\"\n            icon=\"./assets/icon/empty-files.svg\"\n            message=\"There are no files here.\"></app-empty-message>\n\n    <app-empty-message *ngIf=\"!isCheckedIn\" icon=\"./assets/icon/not-checkedin.svg\"\n                       message=\"You need to check in to an entity first if you want to see the files assigned in personal mode\"></app-empty-message>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-current-checkin-current-checkin-module-es5.js.map