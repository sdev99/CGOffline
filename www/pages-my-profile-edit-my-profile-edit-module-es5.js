(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-profile-edit-my-profile-edit-module"], {
    /***/
    "GhR7":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/my-profile-edit/my-profile-edit.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function GhR7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-list {\n  padding: 12px;\n  margin-top: 12px;\n}\nion-content ion-list ion-item {\n  margin-top: 16px;\n}\nion-content ion-list ion-item:first-child {\n  margin-top: 0px;\n}\nion-content ion-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  color: #A1A8CA;\n}\nion-content ion-list ion-item ion-input {\n  min-height: 42px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin-top: 9px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\nion-content ion-list ion-item ion-select {\n  height: 42px;\n  --padding-start: 44px;\n  --padding-end: 8px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  margin-top: 9px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  background-image: url('arrow-down.svg');\n  background-position: 16px;\n  background-repeat: no-repeat;\n}\nion-content ion-list ion-item ion-select::part(icon) {\n  display: none !important;\n}\nion-content ion-list ion-item .error {\n  --background: #FFF6DE !important;\n  background-color: #FFF6DE !important;\n  border: 1px solid #E4D3A3 !important;\n  border-radius: 3px !important;\n}\nion-content ion-list .update-btn {\n  width: 100%;\n  padding: 0 16px;\n  margin-top: 30px;\n}\nion-content ion-list .update-btn ion-button {\n  height: 50px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  --color: #FFFFFF;\n  text-transform: none;\n  --background: #2A6FDB;\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n}\nion-content ion-list .cancel-btn {\n  width: 100%;\n  margin-top: 20px;\n}\nion-content ion-list .cancel-btn ion-button {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  text-transform: none;\n  --color: #2A6FDB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LXByb2ZpbGUtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBR007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFEUjtBQUlNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtNO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUhSO0FBS1E7RUFDRSx3QkFBQTtBQUhWO0FBT007RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUxSO0FBU0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUE47QUFTTTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBSO0FBV0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFUTjtBQVdNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVFIiLCJmaWxlIjoibXktcHJvZmlsZS1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjQTFBOENBO1xuICAgICAgfVxuXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgICAgICAtLWNvbG9yOiAjMTcxNTM4O1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMTcxNTM4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQUNFRTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuXG4gICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDQ0cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgLS1jb2xvcjogIzE3MTUzODtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzE3MTUzODtcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ljb24vYXJyb3ctZG93bi5zdmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgICY6OnBhcnQoaWNvbikge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZXJyb3Ige1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNGRkY2REUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjZERSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTREM0EzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC51cGRhdGUtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMkE2RkRCO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYW5jZWwtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC0tY29sb3I6ICMyQTZGREI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "KvTR":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/my-profile-edit/my-profile-edit.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MyProfileEditPageModule */

    /***/
    function KvTR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileEditPageModule", function () {
        return MyProfileEditPageModule;
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


      var _my_profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-profile-edit-routing.module */
      "X+C5");
      /* harmony import */


      var _my_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-profile-edit.page */
      "jhSu");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var MyProfileEditPageModule = function MyProfileEditPageModule() {
        _classCallCheck(this, MyProfileEditPageModule);
      };

      MyProfileEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfileEditPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_my_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["MyProfileEditPage"]]
      })], MyProfileEditPageModule);
      /***/
    },

    /***/
    "X+C5":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/my-profile-edit/my-profile-edit-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MyProfileEditPageRoutingModule */

    /***/
    function XC5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileEditPageRoutingModule", function () {
        return MyProfileEditPageRoutingModule;
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


      var _my_profile_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-profile-edit.page */
      "jhSu");

      var routes = [{
        path: '',
        component: _my_profile_edit_page__WEBPACK_IMPORTED_MODULE_3__["MyProfileEditPage"]
      }];

      var MyProfileEditPageRoutingModule = function MyProfileEditPageRoutingModule() {
        _classCallCheck(this, MyProfileEditPageRoutingModule);
      };

      MyProfileEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyProfileEditPageRoutingModule);
      /***/
    },

    /***/
    "jhSu":
    /*!***************************************************************!*\
      !*** ./src/app/pages/my-profile-edit/my-profile-edit.page.ts ***!
      \***************************************************************/

    /*! exports provided: MyProfileEditPage */

    /***/
    function jhSu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileEditPage", function () {
        return MyProfileEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-profile-edit.page.html */
      "zRRQ");
      /* harmony import */


      var _my_profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-profile-edit.page.scss */
      "GhR7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");

      var MyProfileEditPage = /*#__PURE__*/function () {
        function MyProfileEditPage(navCtrl, accountService, sharedDataService, utilService) {
          _classCallCheck(this, MyProfileEditPage);

          this.navCtrl = navCtrl;
          this.accountService = accountService;
          this.sharedDataService = sharedDataService;
          this.utilService = utilService;
          this.errorMsg = "";
          this.isSubmitted = false;
          this.timeZones = [];
          this.languages = [];
          this.user = accountService.userValue;
          this.profile = sharedDataService.userProfile;
          this.timeZones = sharedDataService.timeZoneList.clone();
          this.languages = sharedDataService.companyLanguageList.clone();
          this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.email),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.phone),
            timezone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.timeZoneID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)])),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.mobileAppLanguageID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]))
          });
        }

        _createClass(MyProfileEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var _this$profileForm$con, email, phone, timezone, language, timezoneData, languageData;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isSubmitted = true;
                      this.errorMsg = "";
                      _this$profileForm$con = this.profileForm.controls, email = _this$profileForm$con.email, phone = _this$profileForm$con.phone, timezone = _this$profileForm$con.timezone, language = _this$profileForm$con.language;

                      if (this.profileForm.valid) {
                        timezoneData = _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].findObj(this.sharedDataService.timeZoneList, "timeZoneID", timezone.value);
                        languageData = _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].findObj(this.sharedDataService.companyLanguageList, "code", language.value);
                        this.utilService.presentLoadingWithOptions();
                        this.accountService.updateProfile({
                          userId: (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId,
                          mobileAppLanguageID: language.value,
                          languageName: languageData.languageName,
                          timeZoneID: timezone.value,
                          timeZoneName: timezoneData.timeZoneName,
                          email: this.profile.email,
                          userFullName: this.profile.userFullName,
                          photo: this.profile.photo,
                          qrCodeImage: this.profile.qrCodeImage,
                          phoneCode: this.profile.phoneCode,
                          phone: this.profile.phone
                        }).subscribe(function (data) {
                          var _a; // get updated userprofile detail


                          _this.accountService.getUserProfile((_a = _this.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe(function (profile) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      this.utilService.hideLoading();
                                      this.profile = profile;
                                      this.navCtrl.navigateRoot(["checkin-success"], {
                                        queryParams: {
                                          message: "Profile Updated",
                                          nextPage: "/tabs/my-profile"
                                        }
                                      });

                                    case 3:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, this);
                            }));
                          }, function (error) {
                            _this.utilService.hideLoading();
                          });
                        }, function (error) {
                          _this.errorMsg = error.message;

                          _this.utilService.hideLoading();
                        });
                      } else {
                        this.errorMsg = "All fields are required to be filled in.";
                      }

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return MyProfileEditPage;
      }();

      MyProfileEditPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      MyProfileEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-my-profile-edit",
        template: _raw_loader_my_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyProfileEditPage);
      /***/
    },

    /***/
    "zRRQ":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile-edit/my-profile-edit.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRRQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header [modalTitle]=\"'Edit Profile'\" (closeModal)=\"onClose()\"></app-modal-header>\n\n    <app-warning-component *ngIf=\"errorMsg && errorMsg.length>0\"\n                           [message]=\"errorMsg\"></app-warning-component>\n</ion-header>\n\n<ion-content mode=\"md\">\n\n    <Form [formGroup]=\"profileForm\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">EMAIL</ion-label>\n                <ion-input\n                        disabled\n                        [ngClass]=\"{'error':(isSubmitted && !profileForm.controls.email.valid)}\"\n                        formControlName=\"email\"\n                        autocomplete=\"email\"\n                        inputmode=\"email\"\n                        type=\"email\"\n                ></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">PHONE</ion-label>\n                <ion-input\n                        disabled\n                        [ngClass]=\"{'error':(isSubmitted && !profileForm.controls.phone.valid)}\"\n                        formControlName=\"phone\"\n                        autocomplete=\"tel\"\n                        inputmode=\"tel\"\n                        tel=\"tel\"\n                ></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">TIMEZONE</ion-label>\n                <ion-select\n                        [ngClass]=\"{'error':(isSubmitted && !profileForm.controls.timezone.valid)}\"\n                        formControlName=\"timezone\"\n                >\n                    <ion-select-option *ngFor=\"let item of timeZones\"\n                                       [value]=\"item.timeZoneID\">{{item.timeZoneName}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">MOBILE APP LANGUAGE</ion-label>\n                <ion-select\n                        [ngClass]=\"{'error':(isSubmitted && !profileForm.controls.language.valid)}\"\n                        formControlName=\"language\"\n                >\n                    <ion-select-option *ngFor=\"let item of languages\"\n                                       [value]=\"item.companyLanguageID\">{{item.languageName}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <div class=\"update-btn\">\n                <ion-button expand=\"full\" fill=\"clear\" (click)=\"onSubmit()\">Update</ion-button>\n            </div>\n\n            <div class=\"cancel-btn\">\n                <ion-button expand=\"full\" fill=\"clear\" (click)=\"onClose()\">Cancel</ion-button>\n            </div>\n        </ion-list>\n    </Form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-my-profile-edit-my-profile-edit-module-es5.js.map