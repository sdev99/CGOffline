(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-photoidentity-dm-checkinout-photoidentity-dm-module"], {
    /***/
    "B3u+":
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/checkinout-photoidentity-dm/checkinout-photoidentity-dm-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: CheckinoutPhotoidentityDmPageRoutingModule */

    /***/
    function B3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutPhotoidentityDmPageRoutingModule", function () {
        return CheckinoutPhotoidentityDmPageRoutingModule;
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


      var _checkinout_photoidentity_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkinout-photoidentity-dm.page */
      "IFy2");

      var routes = [{
        path: '',
        component: _checkinout_photoidentity_dm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutPhotoidentityDmPage"]
      }];

      var CheckinoutPhotoidentityDmPageRoutingModule = function CheckinoutPhotoidentityDmPageRoutingModule() {
        _classCallCheck(this, CheckinoutPhotoidentityDmPageRoutingModule);
      };

      CheckinoutPhotoidentityDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckinoutPhotoidentityDmPageRoutingModule);
      /***/
    },

    /***/
    "CNzM":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/checkinout-photoidentity-dm/checkinout-photoidentity-dm.page.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function CNzM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F6F9FB;\n  --overflow: auto;\n}\nion-content .content-container {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\nion-content .content .text-1 {\n  margin-top: -40px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-2 {\n  margin-top: 21px;\n  max-width: 406px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 140%;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .ion-img-view {\n  margin-top: 21px;\n  width: 220px !important;\n  height: 220px !important;\n}\nion-content .content .ion-img-view ion-img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .content .action-btn {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 200px;\n  height: 50px;\n}\nion-content.camera-view {\n  --background: transparent;\n}\nion-content.camera-view .content .text-1 {\n  color: #ffffff;\n}\nion-content.camera-view .content .text-2 {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtcGhvdG9pZGVudGl0eS1kbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRE47QUFJSTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUZOO0FBSU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFGUjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSk47QUFRRTtFQUNFLHlCQUFBO0FBTko7QUFTTTtFQUVFLGNBQUE7QUFSUjtBQVdNO0VBQ0UsY0FBQTtBQVRSIiwiZmlsZSI6ImNoZWNraW5vdXQtcGhvdG9pZGVudGl0eS1kbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y2RjlGQjtcbiAgLS1vdmVyZmxvdzogYXV0bztcblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDE7XG5cbiAgICAudGV4dC0xIHtcbiAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgLnRleHQtMiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgbWF4LXdpZHRoOiA0MDZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTQwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cblxuICAgIC5pb24taW1nLXZpZXcge1xuICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgIHdpZHRoOiAyMjBweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyMjBweCAhaW1wb3J0YW50O1xuXG4gICAgICBpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG5cbiAgJi5jYW1lcmEtdmlldyB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIC5jb250ZW50IHtcbiAgICAgIC50ZXh0LTEge1xuICAgICAgICAvL21hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuXG4gICAgICAudGV4dC0yIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "IFy2":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/checkinout-photoidentity-dm/checkinout-photoidentity-dm.page.ts ***!
      \***************************************************************************************/

    /*! exports provided: CheckinoutPhotoidentityDmPage */

    /***/
    function IFy2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutPhotoidentityDmPage", function () {
        return CheckinoutPhotoidentityDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkinout_photoidentity_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkinout-photoidentity-dm.page.html */
      "MfgW");
      /* harmony import */


      var _checkinout_photoidentity_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkinout-photoidentity-dm.page.scss */
      "CNzM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera-preview/ngx */
      "8Y4A");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
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


      var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");
      /* harmony import */


      var _services_static_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/static-data.service */
      "hYb0");

      var CheckinoutPhotoidentityDmPage = /*#__PURE__*/function () {
        function CheckinoutPhotoidentityDmPage(navController, cameraPreview, activatedRoute, sharedDataService, apiService, utilService, photoService) {
          var _this = this;

          _classCallCheck(this, CheckinoutPhotoidentityDmPage);

          this.navController = navController;
          this.cameraPreview = cameraPreview;
          this.activatedRoute = activatedRoute;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.photoService = photoService;
          this.authFor = 'Check In/Out by Name';
          this.viewLoaded = false;

          this.ionViewDidEnter = function () {
            setTimeout(function () {
              _this.viewLoaded = true;

              _this.startCamera();
            }, 100);
          };

          this.ionViewWillLeave = function () {
            _this.cameraPreview.stopCamera();
          };

          this.startCamera = function () {
            if (_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"].isLocalHost()) {
              _this.photoService.takePhotoFromCamera(function (photo) {
                _this.photoCaptured = photo.dataUrl;
              });
            } else {
              var element = _this.imagePreview.nativeElement;
              var header = _this.headerView.el;
              var content = _this.content.nativeElement;
              var width = element.offsetWidth;
              var height = element.offsetHeight;
              var left = element.offsetLeft;
              var top = header.offsetHeight + element.offsetTop;
              var disableExifHeaderStripping = localStorage.getItem(_services_static_data_service__WEBPACK_IMPORTED_MODULE_12__["StaticDataService"].disableExifHeaderStripping);
              var cameraPreviewOpts = {
                camera: 'front',
                width: width,
                height: height,
                x: left,
                y: top,
                // tapPhoto: true,
                // previewDrag: true,
                toBack: true,
                alpha: 1,
                disableExifHeaderStripping: disableExifHeaderStripping ? true : false
              };

              _this.cameraPreview.startCamera(cameraPreviewOpts).then(function (res) {
                console.log(res);
              }, function (err) {
                console.log(err);
              });
            }
          };
          /**
           * Upload photo for  signoff
           */


          this.uploadInductionPhoto = function (file) {
            var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            _this.utilService.presentLoadingWithOptions();

            _this.apiService.inductionPhotoUpload(file, fileName).subscribe(function (res) {
              _this.utilService.hideLoading();

              if (res.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"].fireCallBack(callBack, res.Result);
              } else {
                _this.errorMessage = res.Message;
              }
            }, function (error) {
              _this.utilService.hideLoading();

              _this.errorMessage = error.message ? error.message : error;
            });
          };

          this.checkInPhotoUpload = function (file) {
            var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      this.apiService.checkInPhotoUpload(file, fileName).subscribe(function (res) {
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
            if (_this.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Auth) {
              switch (_this.sharedDataService.dedicatedModeProcessType) {
                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.CheckinOut:
                  {
                    switch (_this.sharedDataService.checkinoutDmAs) {
                      case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInType.AS_GUEST:
                        _this.sharedDataService.dedicatedModeGuestDetail.guestPhoto = photoName;

                        _this.sharedDataService.getCheckinDetailsGuest(_this.apiService, true);

                        break;

                      case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInType.MY_NAME:
                        _this.sharedDataService.getCheckinDetailsForDedicatedMode(_this.sharedDataService.dedicatedModeUserDetail.userId, _this.apiService, photoName);

                        break;
                    }

                    break;
                  }

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.Document:
                  _this.sharedDataService.dedicatedModeDocumentSignOffProcess(photoName);

                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.Form:
                  _this.sharedDataService.dedicatedModeFormSignOffProcess(photoName);

                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.WorkPermit:
                  _this.sharedDataService.dedicatedModeWorkPermitSignOffProcess(photoName);

                  break;

                default:
              }
            } else if (_this.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.LocationPhoto) {
              switch (_this.sharedDataService.checkinoutDmAs) {
                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInType.AS_GUEST:
                  _this.sharedDataService.checkInPostData.guestPhoto = photoName;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInType.MY_NAME:
                  _this.sharedDataService.checkInPostData.userPhoto = photoName;
                  break;
              }

              _this.sharedDataService.processCheckinDetailsStepInduction(_this.apiService, _this.sharedDataService.checkinoutDmAs === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInType.AS_GUEST);
            } else if (_this.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Signoff) {
              switch (_this.sharedDataService.signOffFor) {
                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.INDUCTION:
                  _this.sharedDataService.checkInPostData.userSignaturePhoto = photoName;

                  _this.sharedDataService.processCheckinDetailsStepSubmit(_this.apiService, _this.sharedDataService.checkinoutDmAs === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInType.AS_GUEST);

                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_DM:
                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORMS_DM:
                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORK_PERMIT_DM:
                  _this.sharedDataService.signOffDetailsPostData.userSignaturePhoto = photoName;

                  _this.sharedDataService.submitPersonalModeSignoffData(_this.apiService);

                  break;

                default:
              }
            }
          };

          if (sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Auth || sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.LocationPhoto) {
            if (this.sharedDataService.checkinoutDmAs === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInType.AS_GUEST) {
              this.authFor = 'Check In/Out as Guest';
            } else {
              this.authFor = 'Check In/Out by Name';
            }
          } else if (sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Signoff) {
            this.authFor = 'Sign-Off';
          }
        }

        _createClass(CheckinoutPhotoidentityDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var element = this.imagePreview.nativeElement;
            element.style.width = element.offsetHeight + 'px';
          }
        }, {
          key: "onBack",
          value: function onBack() {
            this.navController.back();
          }
        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _this3 = this;

            if (this.photoCaptured) {
              this.photoCaptured = null;
              this.startCamera();
            } else {
              var pictureOpts = {
                quality: _services_static_data_service__WEBPACK_IMPORTED_MODULE_12__["StaticDataService"].photoQuality,
                width: _services_static_data_service__WEBPACK_IMPORTED_MODULE_12__["StaticDataService"].photoMaxHeight,
                height: _services_static_data_service__WEBPACK_IMPORTED_MODULE_12__["StaticDataService"].photoMaxHeight
              };
              this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
                _this3.photoCaptured = 'data:image/jpeg;base64,' + imageData;

                _this3.cameraPreview.stopCamera();
              }, function (err) {
                console.log(err);
                _this3.photoCaptured = './assets/images/ProfileNone.png';
              });
            }
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            var _this4 = this;

            var fileName = 'photo' + this.utilService.getCurrentTimeStamp() + '.jpeg';
            var mimeType = 'image/jpeg';
            this.utilService.dataUriToFile(this.photoCaptured, fileName, mimeType).then(function (file) {
              if ((_this4.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Auth || _this4.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.LocationPhoto) && _this4.sharedDataService.dedicatedModeProcessType === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.CheckinOut) {
                _this4.checkInPhotoUpload(file, fileName, function (photoName) {
                  _this4.sharedDataService.dedicatedModeCapturedSelfieForCheckinProcess = photoName;

                  _this4.processToNextScreen(photoName);
                });
              } else {
                _this4.uploadInductionPhoto(file, fileName, function (photoName) {
                  _this4.processToNextScreen(photoName);
                });
              }
            }); // if (this.nextPage) {
            //     this.navController.navigateForward(this.nextPage);
            // } else if (this.authFor === 'Authentication') {
            //     this.navController.navigateForward('/form-cover-dm');
            // } else {
            //     this.navController.navigateRoot('dashboard-dm');
            // }
          }
        }, {
          key: "onClose",
          value: function onClose() {
            if (this.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Auth || this.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.LocationPhoto) {
              this.navController.navigateRoot('dashboard-dm', {
                replaceUrl: true
              });
            } else if (this.sharedDataService.dedicatedModeCapturePhotoFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeCapturePhotoForType.Signoff) {
              if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.INDUCTION) {
                this.navController.navigateRoot('/dashboard-dm', {
                  replaceUrl: true
                });
              } else if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_DM) {
                this.navController.navigateRoot('/documents-dm', {
                  replaceUrl: true
                });
              } else if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORMS_DM) {
                this.navController.navigateRoot('/forms-dm', {
                  replaceUrl: true
                });
              } else if (this.sharedDataService.signOffFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.WORK_PERMIT_DM) {
                this.navController.navigateRoot('/permits-dm', {
                  replaceUrl: true
                });
              }
            }
          }
        }]);

        return CheckinoutPhotoidentityDmPage;
      }();

      CheckinoutPhotoidentityDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_5__["CameraPreview"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_11__["PhotoService"]
        }];
      };

      CheckinoutPhotoidentityDmPage.propDecorators = {
        imagePreview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['imagePreview', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }],
        headerView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['headerView']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      CheckinoutPhotoidentityDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkinout-photoidentity-dm',
        template: _raw_loader_checkinout_photoidentity_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_photoidentity_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckinoutPhotoidentityDmPage);
      /***/
    },

    /***/
    "MfgW":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-photoidentity-dm/checkinout-photoidentity-dm.page.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MfgW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header #headerView>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" [modalSubTitle]=\"authFor\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content [ngClass]=\"{'camera-view':(!photoCaptured && viewLoaded)}\">\n    <div class=\"content-container\">\n        <app-back-continue-toolbar (back)=\"onBack()\"\n                                   (continue)=\"onContinue()\"\n                                   [disableRightBtn]=\"!photoCaptured\"></app-back-continue-toolbar>\n\n        <div class=\"content\" #content>\n            <div class=\"text-1\">\n                Photo Identity\n            </div>\n            <div class=\"text-2\">\n                We need to take a photo of you.\n                <br/>\n                Please align your face in to the below area.\n            </div>\n            <div class=\"ion-img-view\" #imagePreview>\n                <ion-img *ngIf=\"photoCaptured\" [src]=\"photoCaptured\"></ion-img>\n            </div>\n\n            <ion-button class=\"action-btn\" (click)=\"takePhoto()\">\n                {{photoCaptured ? 'Take a New Photo' : 'Take the Photo'}}\n            </ion-button>\n        </div>\n    </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "ht/t":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/checkinout-photoidentity-dm/checkinout-photoidentity-dm.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CheckinoutPhotoidentityDmPageModule */

    /***/
    function htT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinoutPhotoidentityDmPageModule", function () {
        return CheckinoutPhotoidentityDmPageModule;
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


      var _checkinout_photoidentity_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkinout-photoidentity-dm-routing.module */
      "B3u+");
      /* harmony import */


      var _checkinout_photoidentity_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkinout-photoidentity-dm.page */
      "IFy2");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var CheckinoutPhotoidentityDmPageModule = function CheckinoutPhotoidentityDmPageModule() {
        _classCallCheck(this, CheckinoutPhotoidentityDmPageModule);
      };

      CheckinoutPhotoidentityDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkinout_photoidentity_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinoutPhotoidentityDmPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_checkinout_photoidentity_dm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutPhotoidentityDmPage"]]
      })], CheckinoutPhotoidentityDmPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkinout-photoidentity-dm-checkinout-photoidentity-dm-module-es5.js.map