(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-evacuation-dm-evacuation-dm-module"], {
    /***/
    "+2qO":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/evacuation-dm/evacuation-dm-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EvacuationDmPageRoutingModule */

    /***/
    function qO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvacuationDmPageRoutingModule", function () {
        return EvacuationDmPageRoutingModule;
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


      var _evacuation_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./evacuation-dm.page */
      "p8ek");

      var routes = [{
        path: '',
        component: _evacuation_dm_page__WEBPACK_IMPORTED_MODULE_3__["EvacuationDmPage"]
      }];

      var EvacuationDmPageRoutingModule = function EvacuationDmPageRoutingModule() {
        _classCallCheck(this, EvacuationDmPageRoutingModule);
      };

      EvacuationDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EvacuationDmPageRoutingModule);
      /***/
    },

    /***/
    "QS8w":
    /*!*************************************************************!*\
      !*** ./src/app/pages/evacuation-dm/evacuation-dm.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function QS8w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --overflow: hidden;\n}\nion-content ::ng-deep app-empty-message .content {\n  background: #F6F9FB;\n}\nion-content .content-view {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\nion-content .content-view .users-view {\n  display: flex;\n  flex-direction: column;\n}\nion-content .content-view .evacuated-view {\n  display: flex;\n  flex-direction: column;\n}\nion-content .content-view .list-container {\n  overflow-y: auto;\n  flex: 1;\n}\nion-content .content-view ion-searchbar {\n  --border-radius: 0;\n  --box-shadow: none;\n  border-bottom: 1px solid #DCE7EF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #A1A8CA;\n}\nion-content .content-view ion-toolbar ion-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n}\nion-content .content-view .users-view {\n  flex: 1;\n  z-index: 2;\n  box-shadow: 0px 4px 25px rgba(141, 150, 190, 0.2);\n}\nion-content .content-view .users-view ion-toolbar ion-title {\n  color: #FFFFFF;\n}\nion-content .content-view .users-view ion-toolbar.user-present {\n  --background: #F9461C;\n}\nion-content .content-view .users-view ion-toolbar.evacuated-completed {\n  --background: #19DC76;\n}\nion-content .content-view .evacuated-view {\n  flex: 1;\n  z-index: 1;\n}\nion-content .content-view .evacuated-view ion-toolbar {\n  --background: #CDE5FE;\n}\nion-content .content-view .evacuated-view ion-toolbar ion-title {\n  color: #171538;\n}\nion-content ion-list {\n  background: transparent;\n}\nion-content ion-list ion-item {\n  --padding-start: 32px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --border-color: #E8EAF2;\n}\nion-content ion-list ion-item img {\n  width: 40px;\n  height: 40px;\n}\nion-content ion-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #444444;\n}\nion-content ion-list ion-item .evacuate-btn {\n  width: 96px;\n  height: 32px;\n  --background: #E74731;\n  --border-radius: 4px;\n  --color: #ffffff;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V2YWN1YXRpb24tZG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUZKO0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSE47QUFNSTtFQUNFLGdCQUFBO0VBQ0EsT0FBQTtBQUpOO0FBT0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTE47QUFTTTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVBSO0FBV0k7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO0FBVE47QUFhUTtFQUNFLGNBQUE7QUFYVjtBQWNRO0VBQ0UscUJBQUE7QUFaVjtBQWVRO0VBQ0UscUJBQUE7QUFiVjtBQWtCSTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FBaEJOO0FBa0JNO0VBQ0UscUJBQUE7QUFoQlI7QUFrQlE7RUFDRSxjQUFBO0FBaEJWO0FBc0JFO0VBQ0UsdUJBQUE7QUFwQko7QUFzQkk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQXBCTjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBcEJSO0FBdUJNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXJCUjtBQXdCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF0QlIiLCJmaWxlIjoiZXZhY3VhdGlvbi1kbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcblxuICA6Om5nLWRlZXAgYXBwLWVtcHR5LW1lc3NhZ2Uge1xuICAgIC5jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6ICNGNkY5RkI7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtdmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC51c2Vycy12aWV3IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5ldmFjdWF0ZWQtdmlldyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAubGlzdC1jb250YWluZXIge1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRTdFRjtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgY29sb3I6ICNBMUE4Q0E7XG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlcnMtdmlldyB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCByZ2JhKDE0MSwgMTUwLCAxOTAsIDAuMik7XG5cbiAgICAgIGlvbi10b29sYmFyIHtcblxuICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgJi51c2VyLXByZXNlbnQge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogI0Y5NDYxQztcbiAgICAgICAgfVxuXG4gICAgICAgICYuZXZhY3VhdGVkLWNvbXBsZXRlZCB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMTlEQzc2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmV2YWN1YXRlZC12aWV3IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB6LWluZGV4OiAxO1xuXG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0NERTVGRTtcblxuICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzMnB4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNFOEVBRjI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgICAgfVxuXG4gICAgICAuZXZhY3VhdGUtYnRuIHtcbiAgICAgICAgd2lkdGg6IDk2cHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRTc0NzMxO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "aXpH":
    /*!*************************************************************!*\
      !*** ./src/app/pages/evacuation-dm/evacuation-dm.module.ts ***!
      \*************************************************************/

    /*! exports provided: EvacuationDmPageModule */

    /***/
    function aXpH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvacuationDmPageModule", function () {
        return EvacuationDmPageModule;
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


      var _evacuation_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./evacuation-dm-routing.module */
      "+2qO");
      /* harmony import */


      var _evacuation_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./evacuation-dm.page */
      "p8ek");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

      var EvacuationDmPageModule = function EvacuationDmPageModule() {
        _classCallCheck(this, EvacuationDmPageModule);
      };

      EvacuationDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _evacuation_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["EvacuationDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_evacuation_dm_page__WEBPACK_IMPORTED_MODULE_6__["EvacuationDmPage"]]
      })], EvacuationDmPageModule);
      /***/
    },

    /***/
    "p8ek":
    /*!***********************************************************!*\
      !*** ./src/app/pages/evacuation-dm/evacuation-dm.page.ts ***!
      \***********************************************************/

    /*! exports provided: EvacuationDmPage */

    /***/
    function p8ek(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvacuationDmPage", function () {
        return EvacuationDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_evacuation_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./evacuation-dm.page.html */
      "u5Im");
      /* harmony import */


      var _evacuation_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./evacuation-dm.page.scss */
      "QS8w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modals_home_exit_dm_home_exit_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modals/home-exit-dm/home-exit-dm.page */
      "OpiQ");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");

      var EvacuationDmPage = /*#__PURE__*/function () {
        function EvacuationDmPage(activatedRoute, navController, modalController, sharedDataService, apiService, utilService) {
          _classCallCheck(this, EvacuationDmPage);

          this.activatedRoute = activatedRoute;
          this.navController = navController;
          this.modalController = modalController;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"];
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"];
          this.evacuatedList = [];
          this.evacuationList = [];
        }

        _createClass(EvacuationDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEvacuationList();
          }
        }, {
          key: "getEvacuationList",
          value: function getEvacuationList() {
            var _this = this;

            this.utilService.presentLoadingWithOptions();
            this.apiService.getEvacuationList().subscribe(function (response) {
              _this.utilService.hideLoading();

              if (response) {
                _this.evacuationList = response.Result;
              }
            }, function (error) {
              _this.utilService.hideLoading();
            });
          }
        }, {
          key: "getUserPhoto",
          value: function getUserPhoto(evacuationUserDetail) {
            var _a, _b;

            if (evacuationUserDetail.userPhoto) {
              return ((_a = this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.userCheckInSignOffDirectory) + "" + evacuationUserDetail.userPhoto;
            } else if (evacuationUserDetail.userDetailPhoto) {
              return ((_b = this.sharedDataService.globalDirectories) === null || _b === void 0 ? void 0 : _b.userDirectory) + "" + evacuationUserDetail.userDetailPhoto;
            }

            return "./assets/images/ProfileNone.png";
          }
        }, {
          key: "onClose",
          value: function onClose() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.evacuatedList && this.evacuatedList.length > 0)) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 3;
                      return this.modalController.create({
                        component: _modals_home_exit_dm_home_exit_dm_page__WEBPACK_IMPORTED_MODULE_6__["HomeExitDmPage"],
                        cssClass: "home-exit-dm",
                        componentProps: {
                          title: "Exit Evacuation",
                          description: "Any data related to current evacuation will be lost.",
                          okBtnText: "Exit Evacuation",
                          cancelBtnText: "Cancel"
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      modal.onWillDismiss().then(function (_ref) {
                        var data = _ref.data;

                        if (data) {
                          _this2.navController.back();
                        }
                      });
                      _context.next = 10;
                      break;

                    case 9:
                      this.navController.back();

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "isEvacuatedCompleted",
          value: function isEvacuatedCompleted() {
            return (!this.evacuationList || this.evacuationList.length === 0) && this.evacuatedList && this.evacuatedList.length > 0;
          }
        }, {
          key: "evacuateUser",
          value: function evacuateUser(item, idx) {
            this.evacuationList.splice(idx, 1);
            this.evacuatedList.push(item);
          }
        }]);

        return EvacuationDmPage;
      }();

      EvacuationDmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }];
      };

      EvacuationDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-evacuation-dm",
        template: _raw_loader_evacuation_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_evacuation_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EvacuationDmPage);
      /***/
    },

    /***/
    "u5Im":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/evacuation-dm/evacuation-dm.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u5Im(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" showEvacuation=\"true\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n<ion-content mode=\"md\">\n    <div class=\"content-view\">\n        <div class=\"ion-no-padding ion-no-margin users-view\">\n            <ion-toolbar\n                    [ngClass]=\"{'evacuated-completed':isEvacuatedCompleted(),'user-present':!isEvacuatedCompleted()}\">\n                <ion-title *ngIf=\"evacuationList?.length>0; else noUsersPresentForHeader\">\n                    {{evacuationList?.length}} Users Present\n                </ion-title>\n                <ng-template #noUsersPresentForHeader>\n                    <ion-title *ngIf=\"isEvacuatedCompleted(); else noUsersPresent\">Evacuation Completed</ion-title>\n                    <ng-template #noUsersPresent>\n                        <ion-title>No users present.</ion-title>\n                    </ng-template>\n                </ng-template>\n\n            </ion-toolbar>\n\n            <ion-searchbar [(ngModel)]=\"searchUser\" searchIcon=\"./assets/icon/search.svg\"\n                           placeholder=\"Search any user by name\">\n            </ion-searchbar>\n\n            <div class=\"list-container\">\n                <ion-list lines=\"full\" *ngIf=\"evacuationList && evacuationList.length>0;else listEmpty\">\n                    <ion-item\n                            *ngFor=\"let item of evacuationList | listFilter:searchUser:'firstAndLastName';let idx=index\">\n                        <ion-avatar slot=\"start\">\n                            <img [src]=\"getUserPhoto(item)\">\n                        </ion-avatar>\n                        <ion-label>{{item.firstAndLastName}}</ion-label>\n                        <ion-button slot=\"end\" class=\"evacuate-btn\" (click)=\"evacuateUser(item,idx)\">Evacuate\n                        </ion-button>\n                    </ion-item>\n                </ion-list>\n\n                <ng-template #listEmpty>\n                    <app-empty-message *ngIf=\"evacuatedList && evacuatedList.length>0; else noUsersPresents\"\n                                       icon=\"./assets/icon/CheckSuccessOutline.svg\" message=\"All Users Evacuated\">\n                    </app-empty-message>\n\n\n                    <ng-template #noUsersPresents>\n                        <app-empty-message message=\"No users present.\"\n                                           icon=\"./assets/icon/NoEvecuated.svg\"></app-empty-message>\n                    </ng-template>\n\n                </ng-template>\n            </div>\n\n\n        </div>\n\n        <div class=\"ion-no-padding ion-no-margin evacuated-view\">\n            <ion-toolbar>\n                <ion-title>\n                    {{(evacuatedList && evacuatedList.length > 0) ? evacuatedList.length + ' Users Evacuated' : 'No Users Evacuated Yet'}}\n                </ion-title>\n            </ion-toolbar>\n\n            <ion-searchbar [(ngModel)]=\"searchEvacuatedUser\" searchIcon=\"./assets/icon/search.svg\"\n                           placeholder=\"Search any user by name\">\n            </ion-searchbar>\n\n            <div class=\"list-container\">\n                <ion-list lines=\"full\" *ngIf=\"evacuatedList && evacuatedList.length>0;else noUserEvacuated\">\n                    <ion-item *ngFor=\"let item of evacuatedList | listFilter:searchEvacuatedUser:'firstAndLastName'\">\n                        <ion-avatar slot=\"start\">\n                            <img [src]=\"getUserPhoto(item)\">\n                        </ion-avatar>\n                        <ion-label>{{item.firstAndLastName}}</ion-label>\n                    </ion-item>\n                </ion-list>\n\n                <ng-template #noUserEvacuated>\n                    <app-empty-message message=\"No users evacuated yet.\"\n                                       icon=\"./assets/icon/NoEvecuated.svg\"></app-empty-message>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-evacuation-dm-evacuation-dm-module-es5.js.map