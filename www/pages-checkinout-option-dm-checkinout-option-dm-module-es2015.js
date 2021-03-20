(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-option-dm-checkinout-option-dm-module"],{

/***/ "IILd":
/*!*************************************************************************!*\
  !*** ./src/app/pages/checkinout-option-dm/checkinout-option-dm.page.ts ***!
  \*************************************************************************/
/*! exports provided: CheckinoutOptionDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutOptionDmPage", function() { return CheckinoutOptionDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkinout_option_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkinout-option-dm.page.html */ "jtAB");
/* harmony import */ var _checkinout_option_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkinout-option-dm.page.scss */ "uaZs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");








let CheckinoutOptionDmPage = class CheckinoutOptionDmPage {
    constructor(navController, sharedDataService, utilService) {
        this.navController = navController;
        this.sharedDataService = sharedDataService;
        this.utilService = utilService;
    }
    ngOnInit() {
        this.sharedDataService.dedicatedModeCapturedSelfieForCheckinProcess = null;
        this.sharedDataService.dedicatedModeProcessType =
            _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].DedicatedModeProcessTypes.CheckinOut;
    }
    onClose() {
        this.navController.back();
    }
    checkInOutName() {
        this.sharedDataService.checkinoutDmAs = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].CheckInType.MY_NAME;
        this.navController.navigateForward("checkinout-name-dm");
    }
    checkInOutQR() {
        if (this.sharedDataService.dedicatedModeLocationUse.checkInPersonalQR) {
            this.sharedDataService.checkinoutDmAs = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].CheckInType.QrCode;
            this.navController.navigateForward("dashboard-qrscan");
        }
        else {
            this.utilService.showAlert("You cannot check-in here with a personal QR code");
        }
    }
    checkInOutGuest() {
        this.sharedDataService.checkinoutDmAs = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].CheckInType.AS_GUEST;
        this.navController.navigateForward("checkinout-guest-phone-dm");
    }
};
CheckinoutOptionDmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }
];
CheckinoutOptionDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-checkinout-option-dm",
        template: _raw_loader_checkinout_option_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_option_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinoutOptionDmPage);



/***/ }),

/***/ "jtAB":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-option-dm/checkinout-option-dm.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Check In/Out\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n    <div class=\"content\">\n        <ion-row>\n            <ion-col class=\"title-1\">\n                How do you want to check in/out ?\n            </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-top: 40px\">\n            <ion-col *ngIf=\"sharedDataService.dedicatedModeLocationUse?.checkInPersonalQR\">\n                <app-dashboard-button\n                        icon=\"./assets/icon/qrscan-blue.svg\"\n                        title=\"with QR code\"\n                        (click)=\"checkInOutQR()\"></app-dashboard-button>\n            </ion-col>\n\n            <ion-col>\n                <app-dashboard-button\n                        icon=\"./assets/icon/user-name.svg\"\n                        title=\"with my Name\"\n                        (click)=\"checkInOutName()\"></app-dashboard-button>\n            </ion-col>\n\n            <ion-col>\n                <app-dashboard-button\n                        icon=\"./assets/icon/add-user.svg\"\n                        title=\"as a Guest\"\n                        (click)=\"checkInOutGuest()\"></app-dashboard-button>\n            </ion-col>\n\n\n        </ion-row>\n    </div>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "kUX4":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/checkinout-option-dm/checkinout-option-dm-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CheckinoutOptionDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutOptionDmPageRoutingModule", function() { return CheckinoutOptionDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkinout_option_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkinout-option-dm.page */ "IILd");




const routes = [
    {
        path: '',
        component: _checkinout_option_dm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutOptionDmPage"]
    }
];
let CheckinoutOptionDmPageRoutingModule = class CheckinoutOptionDmPageRoutingModule {
};
CheckinoutOptionDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinoutOptionDmPageRoutingModule);



/***/ }),

/***/ "uaZs":
/*!***************************************************************************!*\
  !*** ./src/app/pages/checkinout-option-dm/checkinout-option-dm.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F6F9FB;\n}\nion-content .content {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\nion-content .content ::ng-deep app-dashboard-button {\n  margin: 12px;\n}\nion-content .content .title-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 31px;\n  text-align: center;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtb3B0aW9uLWRtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQWVFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQWJKO0FBTkk7RUFDRSxZQUFBO0FBUU47QUFMSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU9OIiwiZmlsZSI6ImNoZWNraW5vdXQtb3B0aW9uLWRtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gIC5jb250ZW50IHtcbiAgICA6Om5nLWRlZXAgYXBwLWRhc2hib2FyZC1idXR0b24ge1xuICAgICAgbWFyZ2luOiAxMnB4O1xuICAgIH1cblxuICAgIC50aXRsZS0xIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "wRUa":
/*!***************************************************************************!*\
  !*** ./src/app/pages/checkinout-option-dm/checkinout-option-dm.module.ts ***!
  \***************************************************************************/
/*! exports provided: CheckinoutOptionDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutOptionDmPageModule", function() { return CheckinoutOptionDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkinout_option_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkinout-option-dm-routing.module */ "kUX4");
/* harmony import */ var _checkinout_option_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkinout-option-dm.page */ "IILd");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CheckinoutOptionDmPageModule = class CheckinoutOptionDmPageModule {
};
CheckinoutOptionDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkinout_option_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinoutOptionDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_checkinout_option_dm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutOptionDmPage"]]
    })
], CheckinoutOptionDmPageModule);



/***/ })

}]);