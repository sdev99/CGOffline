(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-qrscan-dashboard-qrscan-module"], {
    /***/
    "/7Zg":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/dashboard-qrscan/dashboard-qrscan.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Zg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  min-height: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n  --border-width: 0;\n  --border-color: transparent;\n  --background: transparent;\n}\nion-toolbar ion-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\nion-toolbar .close-icon {\n  width: 24px;\n  height: 24px;\n  color: #ffffff;\n}\nion-content {\n  --background: rgba(0, 0, 0, 1) !important;\n}\nion-content.transparent {\n  --background: rgba(0, 0, 0, 0.5) !important;\n}\nion-content .title-text {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #FFFFFF;\n  z-index: 9999999;\n  width: 100%;\n  position: absolute;\n  top: 22%;\n}\nion-content .content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n  min-width: 100vw;\n  min-height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .content .qr-scan-area {\n  width: 239px;\n  height: 243px;\n  background: rgba(74, 144, 226, 0.1);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC1xcnNjYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUo7QUFJQTtFQUNFLHlDQUFBO0FBREY7QUFHRTtFQUNFLDJDQUFBO0FBREo7QUFJRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBSEo7QUFLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQUhOIiwiZmlsZSI6ImRhc2hib2FyZC1xcnNjYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5cbiAgLmNsb3NlLWljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKSAhaW1wb3J0YW50O1xuXG4gICYudHJhbnNwYXJlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGl0bGUtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICAucXItc2Nhbi1hcmVhIHtcbiAgICAgIHdpZHRoOiAyMzlweDtcbiAgICAgIGhlaWdodDogMjQzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gIH1cblxufVxuIl19 */";
      /***/
    },

    /***/
    "Ogxv":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/dashboard-qrscan/dashboard-qrscan.page.ts ***!
      \*****************************************************************/

    /*! exports provided: DashboardQrscanPage */

    /***/
    function Ogxv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardQrscanPage", function () {
        return DashboardQrscanPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_qrscan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-qrscan.page.html */
      "sBWr");
      /* harmony import */


      var _dashboard_qrscan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-qrscan.page.scss */
      "/7Zg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_static_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/static-data.service */
      "hYb0");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Permissions = _capacitor_core__WEBP.Permissions;

      var DashboardQrscanPage = /*#__PURE__*/function () {
        function DashboardQrscanPage(navCtrl, qrScanner, accountService, apiService, utilService, sharedDataService, actionSheetController, activatedRoute) {
          var _this = this;

          _classCallCheck(this, DashboardQrscanPage);

          this.navCtrl = navCtrl;
          this.qrScanner = qrScanner;
          this.accountService = accountService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.sharedDataService = sharedDataService;
          this.actionSheetController = actionSheetController;
          this.activatedRoute = activatedRoute;
          this.isTablet = false;
          this.authFor = "Check In/Out via QR";
          this.isLoaded = false;

          this.stopScanning = function () {
            if (_this.scanSub) {
              _this.scanSub.unsubscribe(); // stop scanning

            }

            _this.qrScanner.hide(); // hide camera preview


            _this.qrScanner.destroy();
          };

          this.requestCameraPermission = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var cameraPermission;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Permissions.query({
                        name: _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["PermissionType"].Camera
                      });

                    case 2:
                      cameraPermission = _context.sent;

                      if (!(cameraPermission.state !== "granted" && Camera && Camera.requestPermissions)) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 6;
                      return Camera.requestPermissions;

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                      return _context.abrupt("return", true);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          };

          this.scan = function () {
            // await this.requestCameraPermission();
            // Optionally request the permission early
            _this.qrScanner.prepare().then(function (status) {
              if (status.authorized) {
                // camera permission was granted
                // start scanning
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                  console.log("Scanned something", text);

                  if (text) {
                    _this.checkQrCode(text);
                  }
                });

                _this.qrScanner.show();
              } else if (status.denied) {
                _this.utilService.showAlert("Camera permission was permanently denied.", "Permission denied!"); // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there

              } else {
                _this.utilService.showAlert("Camera permission was denied.", "Permission denied!", function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var status1;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return this.requestCameraPermission();

                          case 2:
                            status1 = _context2.sent;

                            if (status1) {
                              this.scan();
                            }

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }); // permission was denied, but not permanently. You can ask for permission again at a later time.

              }
            })["catch"](function (e) {
              return console.log("Error is", e);
            });
          };

          this.checkQrCode = function (qrCode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.stopScanning();
                      this.utilService.presentLoadingWithOptions();

                      if (this.sharedDataService.dedicatedMode) {
                        this.apiService.getUserByQRCode(qrCode).subscribe(function (response) {
                          _this2.utilService.hideLoading();

                          if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                            var userDetail = response.Result;

                            if ((userDetail === null || userDetail === void 0 ? void 0 : userDetail.userId) && (userDetail === null || userDetail === void 0 ? void 0 : userDetail.userId) !== _services_static_data_service__WEBPACK_IMPORTED_MODULE_13__["StaticDataService"].userDefaultGuid) {
                              _this2.openNextScreen(userDetail);
                            } else {
                              _this2.utilService.showAlert("This user is not valid for any operation.", "", function () {
                                _this2.scan();
                              });
                            }
                          }
                        }, function (error) {
                          _this2.utilService.hideLoading();

                          _this2.utilService.showAlert(error.message || error, "Not found!", function () {
                            _this2.scan();
                          });
                        });
                      } else {
                        this.apiService.getEntityByQRCode(qrCode).subscribe(function (response) {
                          _this2.utilService.hideLoading();

                          if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                            var locationItem = response.Result;

                            if (locationItem && locationItem.locationID && locationItem.locationName) {
                              _this2.openNextScreen(locationItem);
                            } else {
                              _this2.utilService.showAlert("This QR code is not valid for any records.", "", function () {
                                _this2.scan();
                              });
                            }
                          }
                        }, function (error) {
                          _this2.utilService.hideLoading();

                          _this2.utilService.showAlert(error.message || error, "Not found!", function () {
                            _this2.scan();
                          });
                        });
                      }

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          };

          this.openNextScreen = function (detail) {
            var _a;

            if (_this.sharedDataService.dedicatedMode) {
              _this.sharedDataService.dedicatedModeUserDetail = detail;

              switch (_this.sharedDataService.dedicatedModeProcessType) {
                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.CheckinOut:
                  _this.sharedDataService.getCheckinDetailsForDedicatedMode(_this.sharedDataService.dedicatedModeUserDetail.userId, _this.apiService, null, function (_ref) {
                    var ischeckInPersonalQRNotAllowed = _ref.ischeckInPersonalQRNotAllowed;

                    if (ischeckInPersonalQRNotAllowed) {
                      _this.utilService.showAlert("You cannot check-in here with a personal QR code", "", function () {
                        _this.scan();
                      });
                    }
                  });

                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.Document:
                  _this.sharedDataService.dedicatedModeDocumentSignOffProcess();

                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.Form:
                  _this.sharedDataService.dedicatedModeFormSignOffProcess();

                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.WorkPermit:
                  _this.sharedDataService.dedicatedModeWorkPermitSignOffProcess();

                  break;

                default:
              }
            } else {
              var locationItem = detail;

              var getEntityIds = _this.utilService.getRelevantEntityId(locationItem.locationID); // if user scan form or document qr code


              if (getEntityIds.FormID > 0 || getEntityIds.DocumentID > 0) {
                // if checked in to location already
                if (_this.sharedDataService.checkedInPlaces && _this.sharedDataService.checkedInPlaces.length > 0) {
                  _this.showCheckedInLocations(getEntityIds);
                } else {
                  _this.utilService.showAlert("For accessing this item, you need to check-in first.", "", function () {
                    _this.scan();
                  });
                }
              } else {
                _this.sharedDataService.checkInForLocation = detail;
                _this.sharedDataService.checkinLocationByOption = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CheckInLocationByOptions.QrCode;

                _this.sharedDataService.getCheckinDetails((_a = _this.user) === null || _a === void 0 ? void 0 : _a.userId, _this.apiService);
              }
            }
          };

          this.user = this.accountService.userValue;
          this.isTablet = sharedDataService.isTablet;
          this.activatedRoute.queryParams.subscribe(function (res) {
            if (res) {
              if (res.authFor) {
                _this.authFor = res.authFor;
              }
            }
          });
        }

        _createClass(DashboardQrscanPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            var QrCodeTestingInLocalHostFor = "";

            if (QrCodeTestingInLocalHostFor && _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"].isLocalHost()) {
              setTimeout(function () {
                switch (QrCodeTestingInLocalHostFor) {
                  case "document":
                    _this3.checkQrCode("0f75e6e3-8215-4186-92bf-ca0971b337b7");

                    break;

                  case "form":
                    _this3.checkQrCode("e37f99b2-cda6-4b19-b3e6-ba37a41ffd60");

                    break;

                  case "form2":
                    _this3.checkQrCode("6dadd75e-cb62-484d-a9be-deaab282761d");

                    break;

                  case "form_othercompany":
                    _this3.checkQrCode("87b71cae-476a-4c08-9c63-f24ef7970f89\n");

                    break;

                  case "location":
                    _this3.checkQrCode("e165d1a3-a0a9-4b95-a543-8049b440c56d");

                    break;

                  case "location2":
                    _this3.checkQrCode("78312786-35ab-4c9e-969e-6f7673ed7a5e");

                    break;

                  case "location3":
                    _this3.checkQrCode("3d663253-09ab-4299-a891-74fb1961d78c");

                    break;

                  case "user":
                    _this3.checkQrCode("1b5ee704-21f6-4e91-9544-0f2a6abd7aed");

                    break;
                }
              }, 1000);
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            console.log("ionViewWillLeave");
            this.stopScanning();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this4 = this;

            console.log("ionViewDidEnter");
            setTimeout(function () {
              _this4.isLoaded = true;

              _this4.scan();
            }, 100);
          }
        }, {
          key: "showCheckedInLocations",
          value: function showCheckedInLocations(getEntityIds) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var checkedInPlaces, buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      checkedInPlaces = this.sharedDataService.checkedInPlaces;
                      buttons = [];
                      checkedInPlaces.map(function (item) {
                        buttons.push({
                          text: item.entityName,
                          handler: function handler() {
                            _this5.sharedDataService.currentSelectedCheckinPlace = item;

                            if (getEntityIds.FormID > 0) {
                              _this5.openForm(getEntityIds.FormID);
                            } else if (getEntityIds.DocumentID > 0) {
                              _this5.openDocument(getEntityIds.DocumentID);
                            }
                          }
                        });
                      });
                      buttons.push({
                        text: "Cancel",
                        role: "cancel",
                        handler: function handler() {
                          _this5.scan();
                        }
                      });
                      _context4.next = 6;
                      return this.actionSheetController.create({
                        header: "Choose Place",
                        cssClass: "my-custom-class",
                        buttons: buttons
                      });

                    case 6:
                      actionSheet = _context4.sent;
                      _context4.next = 9;
                      return actionSheet.present();

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
        }, {
          key: "openDocument",
          value: function openDocument(documentID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      this.apiService.getActivitySignOffDocumentDetail(documentID).subscribe(function (response) {
                        _this6.utilService.hideLoading();

                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          var signOffDocumentDetail = response.Result;

                          _this6.navCtrl.navigateForward(["/document-openchoice"], {
                            queryParams: {
                              document: JSON.stringify(signOffDocumentDetail)
                            }
                          });
                        }
                      }, function (error) {
                        _this6.utilService.showAlert(error.message || error, "Not found!", function () {
                          _this6.scan();
                        });

                        _this6.utilService.hideLoading();
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openForm",
          value: function openForm(formID) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this7 = this;

              var place;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      place = this.sharedDataService.currentSelectedCheckinPlace;
                      this.apiService.getSignOffFormDetail((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, formID, place === null || place === void 0 ? void 0 : place.locationID, place === null || place === void 0 ? void 0 : place.projectID, place === null || place === void 0 ? void 0 : place.inventoryItemID).subscribe(function (response) {
                        _this7.utilService.hideLoading();

                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this7.sharedDataService.viewFormFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ViewFormForType.CurrentCheckin;
                          _this7.sharedDataService.signOffFormDetail = response.Result;

                          _this7.navCtrl.navigateForward(["/form-cover"]);
                        }
                      }, function (error) {
                        _this7.utilService.showAlert(error.message || error, "Not found!", function () {
                          _this7.scan();
                        });

                        _this7.utilService.hideLoading();
                      });

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return DashboardQrscanPage;
      }();

      DashboardQrscanPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["QRScanner"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_12__["AccountService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      DashboardQrscanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard-qrscan",
        template: _raw_loader_dashboard_qrscan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_qrscan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardQrscanPage);
      /***/
    },

    /***/
    "UeEr":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/dashboard-qrscan/dashboard-qrscan-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: DashboardQrscanPageRoutingModule */

    /***/
    function UeEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardQrscanPageRoutingModule", function () {
        return DashboardQrscanPageRoutingModule;
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


      var _dashboard_qrscan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-qrscan.page */
      "Ogxv");

      var routes = [{
        path: '',
        component: _dashboard_qrscan_page__WEBPACK_IMPORTED_MODULE_3__["DashboardQrscanPage"]
      }];

      var DashboardQrscanPageRoutingModule = function DashboardQrscanPageRoutingModule() {
        _classCallCheck(this, DashboardQrscanPageRoutingModule);
      };

      DashboardQrscanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardQrscanPageRoutingModule);
      /***/
    },

    /***/
    "sBWr":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard-qrscan/dashboard-qrscan.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sBWr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n                         *ngIf=\"sharedDataService.dedicatedMode; else personalMode\"\n                         [modalSubTitle]=\"authFor\" (closeModal)=\"onClose()\"></app-modal-header-dm>\n\n    <ng-template #personalMode>\n        <ion-toolbar mode=\"ios\">\n            <ion-title size=\"large\">QR Scan</ion-title>\n            <ion-buttons slot=\"end\">\n                <ion-button size=\"small\" fill=\"clear\" (click)=\"onClose()\">\n                    <ion-icon class=\"close-icon\" slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ng-template>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-justify-content-center ion-align-items-center\" [ngClass]=\"{'transparent':isLoaded}\">\n    <ng-container *ngIf=\"isLoaded\">\n        <img *ngIf=\"!isTablet\" src=\"./assets/images/qr-bg.png\" class=\"content\"/>\n        <img *ngIf=\"isTablet\" src=\"./assets/images/qrscan-bg-tablet.svg\" class=\"content\"/>\n\n        <div class=\"title-text\">\n            {{sharedDataService.dedicatedMode ? 'Please show your QR code to the camera' : 'Scan QR Code'}}\n        </div>\n    </ng-container>\n</ion-content>\n";
      /***/
    },

    /***/
    "vFn1":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/dashboard-qrscan/dashboard-qrscan.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DashboardQrscanPageModule */

    /***/
    function vFn1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardQrscanPageModule", function () {
        return DashboardQrscanPageModule;
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


      var _dashboard_qrscan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-qrscan-routing.module */
      "UeEr");
      /* harmony import */


      var _dashboard_qrscan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard-qrscan.page */
      "Ogxv");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var DashboardQrscanPageModule = function DashboardQrscanPageModule() {
        _classCallCheck(this, DashboardQrscanPageModule);
      };

      DashboardQrscanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_qrscan_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardQrscanPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_dashboard_qrscan_page__WEBPACK_IMPORTED_MODULE_6__["DashboardQrscanPage"]]
      })], DashboardQrscanPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dashboard-qrscan-dashboard-qrscan-module-es5.js.map