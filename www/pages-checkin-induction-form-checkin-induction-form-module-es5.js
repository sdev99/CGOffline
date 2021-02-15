(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-induction-form-checkin-induction-form-module"], {
    /***/
    "AYtS":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-form/checkin-induction-form.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: CheckinInductionFormPage */

    /***/
    function AYtS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinInductionFormPage", function () {
        return CheckinInductionFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkin_induction_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkin-induction-form.page.html */
      "k3uj");
      /* harmony import */


      var _checkin_induction_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkin-induction-form.page.scss */
      "O0TU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/demo-data.service */
      "vH+u");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");

      var CheckinInductionFormPage = /*#__PURE__*/function () {
        function CheckinInductionFormPage(navCtrl, route, sharedDataService, utilService, apiService, accountService) {
          var _this = this;

          _classCallCheck(this, CheckinInductionFormPage);

          this.navCtrl = navCtrl;
          this.route = route;
          this.sharedDataService = sharedDataService;
          this.utilService = utilService;
          this.apiService = apiService;
          this.accountService = accountService;
          this.list = _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__["DemoDataService"].inductionForm.clone().concat();
          this.errorMessage = '';
          this.isSubmitted = false;
          this.user = accountService.userValue;
          this.route.queryParams.subscribe(function (parameters) {
            var _a, _b, _c;

            var inductionContentItemIndex = parameters.inductionContentItemIndex;

            if (((_b = (_a = _this.sharedDataService.checkInDetail) === null || _a === void 0 ? void 0 : _a.checkInInductionItems) === null || _b === void 0 ? void 0 : _b.length) > inductionContentItemIndex) {
              _this.inductionItem = (_c = _this.sharedDataService.checkInDetail) === null || _c === void 0 ? void 0 : _c.checkInInductionItems[inductionContentItemIndex];
            }
          });
        }

        _createClass(CheckinInductionFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getFormDetails();
          }
        }, {
          key: "onBack",
          value: function onBack() {
            this.navCtrl.back();
          }
        }, {
          key: "getFormDetails",
          value: function getFormDetails() {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var entityIds;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      entityIds = this.utilService.getRelevantEntityId((_a = this.sharedDataService.checkInForLocation) === null || _a === void 0 ? void 0 : _a.locationID);
                      this.apiService.getSignOffFormDetail((_b = this.user) === null || _b === void 0 ? void 0 : _b.userId, this.inductionItem.formID, entityIds.LocationID, entityIds.ProjectID, entityIds.InventoryID).subscribe(function (response) {
                        _this2.utilService.hideLoading();
                      }, function (error) {
                        _this2.utilService.hideLoading();
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
          key: "onClose",
          value: function onClose() {
            if (this.sharedDataService.dedicatedMode) {
              this.navCtrl.navigateRoot('dashboard-dm', {
                replaceUrl: true
              });
            } else {
              this.navCtrl.navigateBack('/checkinout-confirm', {
                replaceUrl: true
              });
            }
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            var _this3 = this;

            var _a;

            this.isSubmitted = true;
            var isValid = true;
            var invalidCount = 0;
            this.list.map(function (item, key) {
              if (!_this3.isValid(key, item)) {
                isValid = false;
                invalidCount++;
              }
            });

            if (isValid) {
              var userId;

              if (this.sharedDataService.dedicatedMode) {
                userId = this.sharedDataService.dedicatedModeUserDetail.userId;
              } else {
                userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId;
              }

              this.sharedDataService.inductionNavigationProcess(userId, this.sharedDataService.inductionContentItemIndex);
            } else {
              this.errorMessage = invalidCount + ' required questions are not answered yet';
            }
          }
        }, {
          key: "previous",
          value: function previous() {}
        }, {
          key: "next",
          value: function next() {}
        }, {
          key: "isValid",
          value: function isValid(index, section) {
            var isValid = true;

            if (this.isSubmitted && section.required) {
              isValid = false;

              if (section.answer) {
                isValid = true;
              }
            }

            return isValid;
          }
        }]);

        return CheckinInductionFormPage;
      }();

      CheckinInductionFormPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"]
        }];
      };

      CheckinInductionFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-induction-form',
        template: _raw_loader_checkin_induction_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_induction_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinInductionFormPage);
      /***/
    },

    /***/
    "B806":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-form/checkin-induction-form.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CheckinInductionFormPageModule */

    /***/
    function B806(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinInductionFormPageModule", function () {
        return CheckinInductionFormPageModule;
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


      var _checkin_induction_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkin-induction-form-routing.module */
      "q4Md");
      /* harmony import */


      var _checkin_induction_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkin-induction-form.page */
      "AYtS");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var CheckinInductionFormPageModule = function CheckinInductionFormPageModule() {
        _classCallCheck(this, CheckinInductionFormPageModule);
      };

      CheckinInductionFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkin_induction_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinInductionFormPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_checkin_induction_form_page__WEBPACK_IMPORTED_MODULE_6__["CheckinInductionFormPage"]]
      })], CheckinInductionFormPageModule);
      /***/
    },

    /***/
    "O0TU":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-form/checkin-induction-form.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function O0TU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  min-height: 44px;\n  --background: #F8F9FB;\n  --border-color: rgba(74, 144, 226, 0.2);\n  --border-width: 0 0 1px;\n  --border-style: solid;\n  --padding-bottom: 0;\n  --padding-top: 0;\n}\nion-header ion-toolbar ion-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #181639;\n}\nion-header ion-toolbar ion-title.light {\n  color: #777595;\n}\nion-header ion-toolbar .arrow-button {\n  --color: #2A6FDB;\n  width: 58px;\n  height: 44px;\n}\nion-header ion-toolbar .arrow-button ion-icon {\n  width: 16px;\n  height: 16px;\n}\nion-header ion-toolbar .arrow-button.left {\n  border-right: 1px solid rgba(74, 144, 226, 0.2);\n}\nion-header ion-toolbar .arrow-button.right {\n  border-left: 1px solid rgba(74, 144, 226, 0.2);\n}\nion-header.dedicated-mode ::ng-deep app-back-continue-toolbar ion-toolbar {\n  padding-top: 22px;\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode ion-list {\n  width: 60%;\n  margin: auto;\n}\nion-content ion-list {\n  background-color: transparent;\n}\nion-content ion-list .list-item-container {\n  padding: 1px 0;\n}\nion-content ion-list ion-list-header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-top: 24px;\n  padding-left: 23px;\n  padding-right: 46px;\n  --border-width: 1px 0 0;\n  --border-style: solid;\n  --border-color: rgba(74, 144, 226, 0.2);\n}\nion-content ion-list ion-list-header h6 {\n  margin: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content ion-list ion-list-header p {\n  margin-top: 8px;\n  margin-bottom: 15px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  color: #171538;\n}\nion-content ion-list .hr-line {\n  margin: 0 23px 16px;\n  width: auto;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\nion-content ion-list ion-item {\n  --min-height: 18px;\n}\nion-content ion-list ion-item ion-radio {\n  --border-radius: 12px;\n  --color: #A1A8CA;\n  --color-checked: #A1A8CA;\n  --inner-border-radius: 11px;\n  margin-right: 13px;\n}\nion-content ion-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content ion-list ion-item:last-child {\n  margin-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4taW5kdWN0aW9uLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBRU07RUFDRSxjQUFBO0FBQVI7QUFJSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGUjtBQUtNO0VBQ0UsK0NBQUE7QUFIUjtBQU1NO0VBQ0UsOENBQUE7QUFKUjtBQVdNO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQVRSO0FBaUJFO0VBQ0UscUJBQUE7QUFkSjtBQWdCSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBZE47QUFtQkU7RUFDRSw2QkFBQTtBQWpCSjtBQW1CSTtFQUNFLGNBQUE7QUFqQk47QUFvQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtBQWxCTjtBQW9CTTtFQUNFLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbEJSO0FBcUJNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQW5CUjtBQXVCSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQXJCTjtBQXdCSTtFQUNFLGtCQUFBO0FBdEJOO0FBd0JNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQXRCUjtBQXlCTTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF2QlI7QUEwQk07RUFDRSxtQkFBQTtBQXhCUiIsImZpbGUiOiJjaGVja2luLWluZHVjdGlvbi1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgbWluLWhlaWdodDogNDRweDtcbiAgICAtLWJhY2tncm91bmQ6ICNGOEY5RkI7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogIzE4MTYzOTtcblxuICAgICAgJi5saWdodCB7XG4gICAgICAgIGNvbG9yOiAjNzc3NTk1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hcnJvdy1idXR0b24ge1xuICAgICAgLS1jb2xvcjogIzJBNkZEQjtcbiAgICAgIHdpZHRoOiA1OHB4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgICYubGVmdCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgICAgfVxuXG4gICAgICAmLnJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmRlZGljYXRlZC1tb2RlIHtcbiAgICA6Om5nLWRlZXAgYXBwLWJhY2stY29udGludWUtdG9vbGJhciB7XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNGNkY5RkI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcblxuICAmLmRlZGljYXRlZC1tb2RlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNkY5RkI7XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuXG5cbiAgaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgLmxpc3QtaXRlbS1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMXB4IDA7XG4gICAgfVxuXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjNweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQ2cHg7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4IDAgMDtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcblxuICAgICAgaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaHItbGluZSB7XG4gICAgICBtYXJnaW46IDAgMjNweCAxNnB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tbWluLWhlaWdodDogMThweDtcblxuICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAtLWNvbG9yOiAjQTFBOENBO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNBMUE4Q0E7XG4gICAgICAgIC0taW5uZXItYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgfVxuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "k3uj":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-induction-form/checkin-induction-form.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k3uj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <ng-container *ngIf=\"!sharedDataService.dedicatedMode\">\n        <app-modal-header [modalTitle]=\"'Induction'\" (closeModal)=\"onClose()\"></app-modal-header>\n\n        <app-next-prev-toolbar totalCount=\"42\" currentCount=\"4\" (previous)=\"previous()\"\n                               (next)=\"next()\"></app-next-prev-toolbar>\n    </ng-container>\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Check In\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n\n    <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n\n\n    <app-back-continue-toolbar title=\"Form Name\" *ngIf=\"sharedDataService.dedicatedMode\" (back)=\"onBack()\"\n                               (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n</ion-header>\n\n<ion-content [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n\n    <div class=\"content-container\">\n        <ion-list lines=\"none\" mode=\"ios\">\n            <div class=\"list-item-container\" *ngFor=\"let section of list;let idx=index\"\n                 [ngClass]=\"{error:!isValid(idx, section)}\">\n                <ion-radio-group [(ngModel)]=\"section.answer\">\n                    <ion-list-header lines=\"full\">\n                        <h6>\n                            <ion-note color=\"danger\" *ngIf=\"section.required\">*</ion-note>\n                            {{(idx + 1) + '. ' + section.question}}\n                        </h6>\n                        <p *ngIf=\"section.note\">Note: {{section.note}}</p>\n                    </ion-list-header>\n                    <div class=\"hr-line\"></div>\n                    <ion-item *ngFor=\"let item of section.options\">\n                        <ion-label>{{item.title}}</ion-label>\n                        <ion-radio mode=\"md\" slot=\"start\" [value]=\"item.value\"></ion-radio>\n                    </ion-item>\n                </ion-radio-group>\n            </div>\n        </ion-list>\n\n        <div class=\"fill-vertical-space\"></div>\n\n        <ion-footer mode=\"ios\" *ngIf=\"!sharedDataService.dedicatedMode\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Sign-Off</ion-button>\n        </ion-footer>\n    </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "q4Md":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/checkin-induction-form/checkin-induction-form-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: CheckinInductionFormPageRoutingModule */

    /***/
    function q4Md(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinInductionFormPageRoutingModule", function () {
        return CheckinInductionFormPageRoutingModule;
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


      var _checkin_induction_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkin-induction-form.page */
      "AYtS");

      var routes = [{
        path: '',
        component: _checkin_induction_form_page__WEBPACK_IMPORTED_MODULE_3__["CheckinInductionFormPage"]
      }];

      var CheckinInductionFormPageRoutingModule = function CheckinInductionFormPageRoutingModule() {
        _classCallCheck(this, CheckinInductionFormPageRoutingModule);
      };

      CheckinInductionFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinInductionFormPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkin-induction-form-checkin-induction-form-module-es5.js.map