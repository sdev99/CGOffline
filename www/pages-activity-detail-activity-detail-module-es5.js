(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-detail-activity-detail-module"], {
    /***/
    "07G3":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/activity-detail/activity-detail-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ActivityDetailPageRoutingModule */

    /***/
    function G3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityDetailPageRoutingModule", function () {
        return ActivityDetailPageRoutingModule;
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


      var _activity_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activity-detail.page */
      "T60b");

      var routes = [{
        path: '',
        component: _activity_detail_page__WEBPACK_IMPORTED_MODULE_3__["ActivityDetailPage"]
      }];

      var ActivityDetailPageRoutingModule = function ActivityDetailPageRoutingModule() {
        _classCallCheck(this, ActivityDetailPageRoutingModule);
      };

      ActivityDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivityDetailPageRoutingModule);
      /***/
    },

    /***/
    "7iFX":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/activity-detail/activity-detail.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ActivityDetailPageModule */

    /***/
    function iFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityDetailPageModule", function () {
        return ActivityDetailPageModule;
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


      var _activity_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./activity-detail-routing.module */
      "07G3");
      /* harmony import */


      var _activity_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./activity-detail.page */
      "T60b");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

      var ActivityDetailPageModule = function ActivityDetailPageModule() {
        _classCallCheck(this, ActivityDetailPageModule);
      };

      ActivityDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _activity_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_activity_detail_page__WEBPACK_IMPORTED_MODULE_6__["ActivityDetailPage"]]
      })], ActivityDetailPageModule);
      /***/
    },

    /***/
    "KGIq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-detail/activity-detail.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KGIq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n    <app-modal-header [modalTitle]=\"'Activity'\" (closeModal)=\"onClose()\"></app-modal-header>\n\n    <ion-item lines=\"none\" *ngIf=\"activityListItem && activityListItem.activityTitle\">\n        <ion-label>\n            <h6>{{activityListItem.activityTitle}}</h6>\n            <div class=\"detail\">\n                <ion-badge *ngIf=\"activityListItem.isOverDue\" color=\"warning\" class=\"overdue\">Overdue</ion-badge>\n                <ng-container *ngIf=\"activityListItem.isRejected\">\n                    <!--                    <ion-icon slot=\"start\" src=\"./assets/icon/rejected.svg\"></ion-icon>-->\n                    <ion-badge color=\"light\" class=\"rejected\">Rejected</ion-badge>\n                </ng-container>\n                <span class=\"time\"\n                      *ngIf=\"activityListItem.activityTime; else customTime\">{{activityListItem.activityTime}}</span>\n                <ng-template #customTime>\n                    <span class=\"time\" *ngIf=\"activityListItem.activityDate === activityListItem.todayDate\">Today</span>\n                    <span class=\"time\"\n                          *ngIf=\"activityListItem.activityDate !== activityListItem.todayDate\">{{activityListItem.activityDate | timeAgo}}</span>\n                </ng-template>\n            </div>\n\n\n            <div class=\"rejected-view\" *ngIf=\"activityListItem?.isRejected\">\n                <div class=\"detail\">\n                    <ion-icon slot=\"start\" src=\"./assets/icon/rejected.svg\"></ion-icon>\n                    <ion-label class=\"rejected\">Signature Rejected</ion-label>\n                </div>\n\n                <p class=\"time\"\n                   *ngIf=\"activityListItem?.rejectedBy;\">\n                    by\n                    {{activityListItem?.rejectedBy}}\n                    on\n                    <ng-container *ngIf=\"activityListItem?.formattedApprovedRejectedDate; else approvedRejectedDate\">\n                        {{activityListItem?.formattedApprovedRejectedDate}}\n                    </ng-container>\n                    <ng-template #approvedRejectedDate>\n                        {{activityListItem?.approvedRejectedDate | date:'dd MMM yyyy HH:mm'}}\n                    </ng-template>\n                </p>\n\n                <div class=\"reject-reason\" *ngIf=\"activityListItem?.rejectedReason\">\n                    <h3>Rejection Reason</h3>\n                    <p>{{activityListItem?.rejectedReason}}</p>\n                </div>\n            </div>\n\n        </ion-label>\n    </ion-item>\n\n\n    <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n</ion-header>\n<ion-content class=\"ion-padding-horizontal\" fullscreen=\"true\">\n    <div class=\"content-container\">\n\n        <ion-item lines=\"full\" class=\"title-item\"\n                  *ngIf=\"activityListItem && (activityListItem.formattedDescription || activityListItem.formattedExplanation)\">\n            <ion-label class=\"ion-text-wrap\">\n                <p *ngIf=\"activityListItem.formattedDescription\"\n                   [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(activityListItem.formattedDescription)\"></p>\n\n                <ng-container *ngIf=\"activityListItem.formattedExplanation\">\n                    <h6>Explanation</h6>\n                    <p [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(activityListItem.formattedExplanation)\"></p>\n                </ng-container>\n            </ion-label>\n        </ion-item>\n\n        <div class=\"ion-margin-top\" *ngIf=\"activityAttachments\">\n            <ion-item lines=\"none\" class=\"form-item\" (click)=\"openFile(attachment)\"\n                      *ngFor=\"let attachment of activityAttachments\">\n                <ion-img slot=\"start\" [src]=\"attachment.documentFileIconURL\"></ion-img>\n                <ion-label>\n                    {{attachment.documentFileName}}\n                </ion-label>\n            </ion-item>\n        </div>\n\n        <div class=\"fill-vertical-space\"></div>\n\n        <ion-footer mode=\"ios\" *ngIf=\"activityListItem\">\n            <ion-button expand=\"full\"\n                        *ngIf=\"activityListItem.activityType === EnumService.ActivityType.FORM_SIGNOFF_ACTIVITY\"\n                        class=\"action-btn\" (click)=\"openForm()\">Open\n            </ion-button>\n            <ion-button expand=\"full\"\n                        *ngIf=\"activityListItem.activityType === EnumService.ActivityType.DOCUMENT_SIGNOFF_ACTIVITY\"\n                        class=\"action-btn\" (click)=\"openDocument()\">\n                {{documentViewed ? 'Sign-Off' : 'Open'}}\n            </ion-button>\n            <ion-button expand=\"full\" *ngIf=\"activityListItem.activityType === EnumService.ActivityType.CUSTOM_ACTIVITY\"\n                        class=\"action-btn\" (click)=\"markAsCompleted()\">Mark as Completed\n            </ion-button>\n        </ion-footer>\n    </div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "T60b":
    /*!***************************************************************!*\
      !*** ./src/app/pages/activity-detail/activity-detail.page.ts ***!
      \***************************************************************/

    /*! exports provided: ActivityDetailPage */

    /***/
    function T60b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityDetailPage", function () {
        return ActivityDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_activity_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./activity-detail.page.html */
      "KGIq");
      /* harmony import */


      var _activity_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity-detail.page.scss */
      "f56K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
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


      var _services_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ActivityDetailPage = /*#__PURE__*/function () {
        function ActivityDetailPage(navCtrl, route, ngZone, sharedDataService, filehandlerService, apiService, utilService, alertController, accountService, observablesService, sanitizer) {
          var _this = this;

          _classCallCheck(this, ActivityDetailPage);

          this.navCtrl = navCtrl;
          this.route = route;
          this.ngZone = ngZone;
          this.sharedDataService = sharedDataService;
          this.filehandlerService = filehandlerService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.alertController = alertController;
          this.accountService = accountService;
          this.observablesService = observablesService;
          this.sanitizer = sanitizer;
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"];
          this.documentViewed = false;
          /**
           * Get activity detail
           * @param callBack it is fire when api request finished with/without error
           */

          this.getActivityDetail = function () {
            var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var finished = function finished() {
              if (callBack) {
                callBack();
              }
            };

            if (_this.activityListItem) {
              _this.apiService.getActivityDetail(_this.activityListItem.activityIndividualID).subscribe(function (response) {
                if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                  var result = response.Result;

                  if (result) {
                    _this.ngZone.run(function () {
                      _this.activityListItem = result.activityData;
                      _this.activityAttachments = result.activityAttachments;
                    });
                  }
                }

                finished();
              }, function (error) {
                finished();
              });
            }
          };

          this.user = this.accountService.userValue;
          this.activityListItem = this.sharedDataService.currentActivityOpen;
          this.utilService.presentLoadingWithOptions();
          this.getActivityDetail(function () {
            _this.utilService.hideLoading();
          });
        }

        _createClass(ActivityDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
          /**
           * Back to the previous screen when close button click
           */

        }, {
          key: "onClose",
          value: function onClose() {
            this.navCtrl.back();
          }
          /**
           * Open attachement
           * @param attachment AttachmentItem
           */

        }, {
          key: "openFile",
          value: function openFile(attachment) {
            // this.apiService.downloadDocument(attachment.documentFileName, this.user.companyFolderName).subscribe((response) => {
            //
            // }, (error) => {
            //
            // });
            if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && attachment && attachment.documentFileName) {
              this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + attachment.documentFileName);
            }
          }
          /**
           * Open form for Form type activity
           */

        }, {
          key: "openForm",
          value: function openForm() {
            var _a, _b, _c;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.activityListItem) {
                        this.utilService.presentLoadingWithOptions();
                        this.apiService.getActivitySignOffFormDetail((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, (_b = this.activityListItem) === null || _b === void 0 ? void 0 : _b.formID, (_c = this.activityListItem) === null || _c === void 0 ? void 0 : _c.activityIndividualID).subscribe(function (response) {
                          _this2.utilService.hideLoading();

                          if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                            _this2.sharedDataService.viewFormFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ViewFormForType.Activity;
                            _this2.sharedDataService.signOffFormDetail = response.Result;

                            _this2.navCtrl.navigateForward(['/form-cover']);
                          }
                        }, function (error) {
                          _this2.utilService.hideLoading();
                        });
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * Open document for Document type activity
           */

        }, {
          key: "openDocument",
          value: function openDocument() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.activityListItem) {
                        this.utilService.presentLoadingWithOptions();
                        this.apiService.getActivitySignOffDocumentDetail((_a = this.activityListItem) === null || _a === void 0 ? void 0 : _a.documentID).subscribe(function (response) {
                          var _a, _b, _c, _d, _e, _f, _g, _h, _j;

                          _this3.utilService.hideLoading();

                          if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                            var signOffDocumentDetail = response.Result;
                            _this3.sharedDataService.signOffFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.DOCUMENT_ACTIVITY;
                            _this3.sharedDataService.signOffDocumentDetail = signOffDocumentDetail;

                            if (_this3.documentViewed) {
                              _this3.sharedDataService.signOffDetailsPostData = {
                                userId: (_a = _this3.user) === null || _a === void 0 ? void 0 : _a.userId,
                                documentID: (_b = _this3.activityListItem) === null || _b === void 0 ? void 0 : _b.documentID,
                                activityIndividualID: (_c = _this3.activityListItem) === null || _c === void 0 ? void 0 : _c.activityIndividualID,
                                documentVersionID: signOffDocumentDetail === null || signOffDocumentDetail === void 0 ? void 0 : signOffDocumentDetail.documentVersionID,
                                formVersionID: 0,
                                latitude: (_d = _this3.sharedDataService.myCurrentGeoLocation) === null || _d === void 0 ? void 0 : _d.coords.latitude,
                                longitude: (_e = _this3.sharedDataService.myCurrentGeoLocation) === null || _e === void 0 ? void 0 : _e.coords.longitude,
                                locationID: (_f = _this3.sharedDataService.currentSelectedCheckinPlace) === null || _f === void 0 ? void 0 : _f.locationID,
                                projectID: (_g = _this3.sharedDataService.currentSelectedCheckinPlace) === null || _g === void 0 ? void 0 : _g.projectID,
                                userCheckInDetailID: (_h = _this3.sharedDataService.currentSelectedCheckinPlace) === null || _h === void 0 ? void 0 : _h.userCheckInDetailID,
                                inventoryItemID: (_j = _this3.sharedDataService.currentSelectedCheckinPlace) === null || _j === void 0 ? void 0 : _j.inventoryItemID
                              };

                              if (signOffDocumentDetail.isDigitalSignOff) {
                                _this3.navCtrl.navigateForward(['/signoff-digitalink']);
                              } else if (signOffDocumentDetail.isPhotoSignOff) {
                                _this3.navCtrl.navigateForward(['/signoff-photo']);
                              } else {
                                _this3.sharedDataService.submitPersonalModeSignoffData(_this3.apiService);
                              }
                            } else {
                              var fileUri = _this3.sharedDataService.globalDirectories.documentDirectory + '' + signOffDocumentDetail.documentFileName;

                              _this3.filehandlerService.openFile(fileUri).then(function () {
                                _this3.documentViewed = true;
                              });
                            }
                          }
                        }, function (error) {
                          _this3.utilService.hideLoading();
                        });
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * For custom activity only, Confirm before call api
           */

        }, {
          key: "markAsCompleted",
          value: function markAsCompleted() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm Completion',
                        message: 'You are about to mark this activity as completed. Please confirm.',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            _this4.completeCustomActivity();
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * For custom activity only
           */

        }, {
          key: "completeCustomActivity",
          value: function completeCustomActivity() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.activityListItem && this.activityListItem.activityIndividualID) {
                        this.utilService.presentLoadingWithOptions();
                        this.apiService.activityCompleted((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, this.activityListItem.activityIndividualID).subscribe(function () {
                          _this5.utilService.hideLoading();

                          _this5.navCtrl.back();

                          _this5.observablesService.publishSomeData(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ObserverKeys.ACTIVITY_COMPLETED, true);
                        }, function (error) {
                          _this5.errorMessage = error.message || error;

                          _this5.utilService.hideLoading();
                        });
                      }

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return ActivityDetailPage;
      }();

      ActivityDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__["FilehandlerService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_12__["ObservablesService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]
        }];
      };

      ActivityDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activity-detail',
        template: _raw_loader_activity_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_activity_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ActivityDetailPage);
      /***/
    },

    /***/
    "f56K":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/activity-detail/activity-detail.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function f56K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ::ng-deep app-modal-header ion-toolbar {\n  --border-color: #F8F9FB;\n}\nion-header ion-item {\n  --border-color: #DCE7EF;\n  --border-width: 0 0 1px 0;\n  --border-style: solid;\n  --padding-bottom: 12px;\n  --background: #F8F9FB;\n}\nion-header ion-item ion-label {\n  margin: 0;\n  white-space: normal;\n}\nion-header ion-item ion-label h6 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #2A6FDB;\n}\nion-header ion-item ion-label .detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 4px;\n}\nion-header ion-item ion-label .detail ion-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 3px;\n}\nion-header ion-item ion-label .detail ion-badge {\n  margin: 4px 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  margin-right: 9px;\n}\nion-header ion-item ion-label .detail ion-badge.overdue {\n  color: #FFFFFF;\n}\nion-header ion-item ion-label .detail ion-badge.rejected {\n  color: #E74731;\n}\nion-header ion-item ion-label .detail .time {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  color: #171538;\n}\nion-header .rejected-view {\n  padding: 8px 0;\n}\nion-header .rejected-view .detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 8px 0;\n}\nion-header .rejected-view .detail ion-icon {\n  width: 22px;\n  height: 22px;\n  margin-right: 3px;\n}\nion-header .rejected-view .detail .rejected {\n  padding-left: 8px;\n  font-weight: normal;\n  color: #555;\n  font-size: 16px;\n}\nion-header .rejected-view .time {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 13px;\n  font-size: 12px;\n  color: #555555;\n  white-space: normal;\n}\nion-header .rejected-view .reject-reason {\n  margin-top: 18px;\n}\nion-header .rejected-view .reject-reason h3 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n}\nion-header .rejected-view .reject-reason p {\n  margin-top: 4px;\n  font-style: italic;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #A1A8CA;\n}\nion-content ion-item {\n  --padding-start: 0;\n}\nion-content ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  white-space: normal;\n}\nion-content ion-item.title-item {\n  --border-color: rgba(74, 144, 226, 0.2);\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\nion-content ion-item.title-item ion-label {\n  color: #171538;\n}\nion-content ion-item.title-item ion-label h6 {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #171538;\n  margin-top: 44px;\n}\nion-content ion-item.title-item ion-label p {\n  margin-top: 8px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #171538;\n}\nion-content ion-item.form-item {\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\nion-content ion-item.form-item ion-img {\n  width: 17.31px;\n  height: 20px;\n  margin-right: 12px;\n}\nion-content ion-item.form-item ion-label {\n  color: #4A90E2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjdGl2aXR5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSx1QkFBQTtBQUROO0FBS0U7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSEo7QUFLSTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQUhOO0FBS007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSFI7QUFNTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpSO0FBTVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSlY7QUFPUTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFMVjtBQU9VO0VBQ0UsY0FBQTtBQUxaO0FBUVU7RUFDRSxjQUFBO0FBTlo7QUFVUTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFSVjtBQWNFO0VBQ0UsY0FBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFaTjtBQWNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVpSO0FBZU07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFiUjtBQWtCSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQW1CSTtFQUNFLGdCQUFBO0FBakJOO0FBbUJNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWpCUjtBQW9CTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWxCUjtBQTBCRTtFQUNFLGtCQUFBO0FBdkJKO0FBeUJJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBdkJOO0FBMEJJO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBeEJOO0FBMEJNO0VBQ0UsY0FBQTtBQXhCUjtBQTBCUTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtBQXpCVjtBQTRCUTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBMUJWO0FBK0JJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQTdCTjtBQStCTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE3QlI7QUFnQ007RUFDRSxjQUFBO0FBOUJSIiwiZmlsZSI6ImFjdGl2aXR5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgOjpuZy1kZWVwIGFwcC1tb2RhbC1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRjhGOUZCO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogI0RDRTdFRjtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIC0tYmFja2dyb3VuZDogI0Y4RjlGQjtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuXG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMkE2RkRCO1xuICAgICAgfVxuXG4gICAgICAuZGV0YWlsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xuXG4gICAgICAgICAgJi5vdmVyZHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucmVqZWN0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICNFNzQ3MzE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWplY3RlZC12aWV3IHtcbiAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgIC5kZXRhaWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luOiA4cHggMDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgIH1cblxuICAgICAgLnJlamVjdGVkIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnRpbWUge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzU1NTU1NTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxuXG4gICAgLnJlamVjdC1yZWFzb24ge1xuICAgICAgbWFyZ2luLXRvcDogMThweDtcblxuICAgICAgaDMge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNBMUE4Q0E7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxuXG4gICAgJi50aXRsZS1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcblxuICAgICAgICBoNiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICBjb2xvcjogIzE3MTUzODtcblxuICAgICAgICAgIG1hcmdpbi10b3A6IDQ0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5mb3JtLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1pbWcge1xuICAgICAgICB3aWR0aDogMTcuMzFweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjNEE5MEUyO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-activity-detail-activity-detail-module-es5.js.map