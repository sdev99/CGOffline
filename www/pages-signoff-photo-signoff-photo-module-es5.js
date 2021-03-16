(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signoff-photo-signoff-photo-module"], {
    /***/
    "1OtA":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signoff-photo/signoff-photo.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OtA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" (closeModal)=\"onClose()\"></app-modal-header>\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Sign-Off\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <div class=\"content-container\">\n        <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n\n        <div class=\"content\">\n            <div *ngIf=\"sharedDataService.dedicatedMode\" class=\"heading-1\">Sign-Off</div>\n\n            <ng-container *ngIf=\"capturedPhoto; else needPhtoView\">\n                <ion-img [src]=\"capturedPhoto.dataUrl\"></ion-img>\n                <ion-button fill=\"clear\" class=\"retake-btn\" (click)=\"takePhoto()\">Take a new photo?</ion-button>\n\n                <ion-button *ngIf=\"sharedDataService.dedicatedMode\" expand=\"full\" class=\"action-btn\"\n                            (click)=\"continue()\">\n                    Continue\n                </ion-button>\n            </ng-container>\n\n            <ng-template #needPhtoView>\n                <div class=\"title-1\">We need your photo</div>\n                <div class=\"text-1\">\n                    To finish the sign-off, you need to take a selfie of your self, using your device camera.\n                </div>\n                <ion-button *ngIf=\"!capturedPhoto && sharedDataService.dedicatedMode\" expand=\"full\" class=\"action-btn\"\n                            (click)=\"takePhoto()\">\n                    <ion-icon name=\"camera-outline\" slot=\"start\"></ion-icon>\n                    Take a Photo\n                </ion-button>\n            </ng-template>\n\n\n        </div>\n\n\n        <ion-footer mode=\"ios\" *ngIf=\"!sharedDataService.dedicatedMode\">\n            <ion-button *ngIf=\"!capturedPhoto\" expand=\"full\" class=\"action-btn\" (click)=\"takePhoto()\">\n                <ion-icon name=\"camera-outline\" slot=\"start\"></ion-icon>\n                Take a Photo\n            </ion-button>\n\n            <ion-button *ngIf=\"capturedPhoto\" expand=\"full\" class=\"action-btn\" (click)=\"continue()\">\n                Continue\n            </ion-button>\n        </ion-footer>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "4180":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/signoff-photo/signoff-photo-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SignoffPhotoPageRoutingModule */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignoffPhotoPageRoutingModule", function () {
        return SignoffPhotoPageRoutingModule;
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


      var _signoff_photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signoff-photo.page */
      "Mq9s");

      var routes = [{
        path: '',
        component: _signoff_photo_page__WEBPACK_IMPORTED_MODULE_3__["SignoffPhotoPage"]
      }];

      var SignoffPhotoPageRoutingModule = function SignoffPhotoPageRoutingModule() {
        _classCallCheck(this, SignoffPhotoPageRoutingModule);
      };

      SignoffPhotoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignoffPhotoPageRoutingModule);
      /***/
    },

    /***/
    "Mq9s":
    /*!***********************************************************!*\
      !*** ./src/app/pages/signoff-photo/signoff-photo.page.ts ***!
      \***********************************************************/

    /*! exports provided: SignoffPhotoPage */

    /***/
    function Mq9s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignoffPhotoPage", function () {
        return SignoffPhotoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signoff_photo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signoff-photo.page.html */
      "1OtA");
      /* harmony import */


      var _signoff_photo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signoff-photo.page.scss */
      "SwuL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");

      var SignoffPhotoPage = /*#__PURE__*/function () {
        function SignoffPhotoPage(navCtrl, photoService, apiService, utilService, route, observablesService, sharedDataService) {
          var _this = this;

          _classCallCheck(this, SignoffPhotoPage);

          this.navCtrl = navCtrl;
          this.photoService = photoService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.route = route;
          this.observablesService = observablesService;
          this.sharedDataService = sharedDataService;
          /**
           * Upload photo for  signoff
           */

          this.uploadInductionPhoto = function (file) {
            var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      this.apiService.inductionPhotoUpload(file, fileName).subscribe(function (res) {
                        _this2.utilService.hideLoading();

                        if (res.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"].fireCallBack(callBack, res.Result);
                        } else {
                          _this2.errorMessage = res.Message;
                        }
                      }, function (error) {
                        _this2.utilService.hideLoading();

                        _this2.errorMessage = error.message ? error.message : error;
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };

          this.processToNextScreen = function (photoName) {
            switch (_this.type) {
              case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.INDUCTION:
                _this.sharedDataService.checkInPostData.userSignaturePhoto = photoName;

                _this.sharedDataService.submitInductionCheckInData(_this.apiService);

                break;

              case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_ACTIVITY:
              case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORM_ACTIVITY:
              case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORM_CURRENT_CHECKIN:
              case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_CURRENT_CHECKIN:
              case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN:
                _this.sharedDataService.signOffDetailsPostData.userSignaturePhoto = photoName;

                _this.sharedDataService.submitPersonalModeSignoffData(_this.apiService);

                break;

              default:
            }
          };

          if (sharedDataService.signOffFor) {
            this.type = sharedDataService.signOffFor;
          }
        }

        _createClass(SignoffPhotoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _this3 = this;

            this.photoService.takePhotoFromCamera(function (photo) {
              _this3.capturedPhoto = photo;
            }, true, true);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.INDUCTION) {
              if (this.sharedDataService.dedicatedMode) {
                this.navCtrl.navigateBack('/dashboard-dm');
              } else {
                this.navCtrl.navigateBack('/checkinout-confirm');
              }
            } else {
              this.navCtrl.back();
            }
          }
        }, {
          key: "continue",
          value: function _continue() {
            var _this4 = this;

            var fileName = 'photo' + this.utilService.getCurrentTimeStamp() + '.jpeg';
            var mimeType = 'image/jpeg';
            this.utilService.dataUriToFile(this.capturedPhoto.dataUrl, fileName, mimeType).then(function (file) {
              _this4.uploadInductionPhoto(file, fileName, function (photoName) {
                _this4.processToNextScreen(photoName);
              });
            });
          }
        }]);

        return SignoffPhotoPage;
      }();

      SignoffPhotoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_6__["ObservablesService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__["SharedDataService"]
        }];
      };

      SignoffPhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signoff-photo',
        template: _raw_loader_signoff_photo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signoff_photo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignoffPhotoPage);
      /***/
    },

    /***/
    "SwuL":
    /*!*************************************************************!*\
      !*** ./src/app/pages/signoff-photo/signoff-photo.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function SwuL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ::ng-deep app-modal-header ion-toolbar {\n  --border-color: #F8F9FB;\n  --border-width: 0;\n  --background: #F8F9FB;\n}\n\nion-content {\n  --padding-start: 9.07%;\n  --padding-end: 9.07%;\n  --background: #F8F9FB;\n}\n\nion-content.dedicated-mode .content {\n  width: 50%;\n  margin: 0 auto;\n  justify-content: flex-start;\n}\n\nion-content.dedicated-mode .content .title-1 {\n  margin-top: 24px;\n}\n\nion-content.dedicated-mode .content ion-img {\n  margin-top: 30px;\n  margin-bottom: 10px;\n  flex: 1;\n  width: 250px;\n  height: 250px;\n}\n\nion-content.dedicated-mode .content .action-btn {\n  width: 198px;\n  height: 50px;\n  margin-top: 16px;\n}\n\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n  text-align: center;\n}\n\nion-content .content ion-img {\n  width: 220px;\n  height: 220px;\n  max-width: 220px;\n  max-height: 220px;\n  flex: 1;\n  -o-object-fit: contain;\n     object-fit: contain;\n  background-color: #D4E2F8;\n  margin-bottom: 20px;\n}\n\nion-content .content .heading-1 {\n  margin-top: 8%;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 26px;\n  color: #171538;\n}\n\nion-content .content .title-1 {\n  margin-top: 8%;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #171538;\n}\n\nion-content .content .text-1 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n\nion-content .content .retake-btn {\n  margin-bottom: 8px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  --color: #2A6FDB;\n}\n\nion-footer {\n  background-color: #F8F9FB;\n}\n\nion-footer .action-btn {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ25vZmYtcGhvdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBRE47O0FBTUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFNSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFKTjs7QUFNTTtFQUNFLGdCQUFBO0FBSlI7O0FBT007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTFI7O0FBUU07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTlI7O0FBV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBVE47O0FBWUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVZOOztBQWNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFaTjs7QUFlSTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWJOOztBQWdCSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWROOztBQW9CQTtFQUNFLHlCQUFBO0FBakJGOztBQW1CRTtFQUNFLG1CQUFBO0FBakJKIiwiZmlsZSI6InNpZ25vZmYtcGhvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIDo6bmctZGVlcCBhcHAtbW9kYWwtaGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogI0Y4RjlGQjtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjRjhGOUZCO1xuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOS4wNyU7XG4gIC0tcGFkZGluZy1lbmQ6IDkuMDclO1xuICAtLWJhY2tncm91bmQ6ICNGOEY5RkI7XG5cbiAgJi5kZWRpY2F0ZWQtbW9kZSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgICAudGl0bGUtMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pbWcge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpb24tYnRuIHtcbiAgICAgICAgd2lkdGg6IDE5OHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW9uLWltZyB7XG4gICAgICB3aWR0aDogMjIwcHg7XG4gICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDIyMHB4O1xuICAgICAgZmxleDogMTtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFMkY4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuaGVhZGluZy0xIHtcbiAgICAgIG1hcmdpbi10b3A6IDglO1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG5cbiAgICAudGl0bGUtMSB7XG4gICAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIC50ZXh0LTEge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgLnJldGFrZS1idG4ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAtLWNvbG9yOiAjMkE2RkRCO1xuICAgIH1cbiAgfVxuXG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZCO1xuXG4gIC5hY3Rpb24tYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "fz2Y":
    /*!*************************************************************!*\
      !*** ./src/app/pages/signoff-photo/signoff-photo.module.ts ***!
      \*************************************************************/

    /*! exports provided: SignoffPhotoPageModule */

    /***/
    function fz2Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignoffPhotoPageModule", function () {
        return SignoffPhotoPageModule;
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


      var _signoff_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signoff-photo-routing.module */
      "4180");
      /* harmony import */


      var _signoff_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signoff-photo.page */
      "Mq9s");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var SignoffPhotoPageModule = function SignoffPhotoPageModule() {
        _classCallCheck(this, SignoffPhotoPageModule);
      };

      SignoffPhotoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signoff_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignoffPhotoPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_signoff_photo_page__WEBPACK_IMPORTED_MODULE_6__["SignoffPhotoPage"]]
      })], SignoffPhotoPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-signoff-photo-signoff-photo-module-es5.js.map