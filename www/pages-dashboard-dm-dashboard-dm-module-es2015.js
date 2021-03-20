(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dm-dashboard-dm-module"],{

/***/ "FA1B":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard-dm/dashboard-dm.page.ts ***!
  \*********************************************************/
/*! exports provided: DashboardDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDmPage", function() { return DashboardDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard-dm.page.html */ "Lne+");
/* harmony import */ var _dashboard_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-dm.page.scss */ "Nv9F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");









let DashboardDmPage = class DashboardDmPage {
    constructor(navController, sharedDataService, apiService, accountService) {
        this.navController = navController;
        this.sharedDataService = sharedDataService;
        this.apiService = apiService;
        this.accountService = accountService;
        this.dedicatedModeDeviceDetailData = this.sharedDataService.dedicatedModeDeviceDetailData;
    }
    ngOnInit() {
        var _a;
        const companyFolderName = (_a = this.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyFolderName;
        // const companyFolderName = 'B01F4CF5-C26C-4C8F-BE94-A7C68FEDE752';
        this.apiService.getGlobalDirectories(companyFolderName).subscribe((response) => {
            if (response) {
                this.sharedDataService.globalDirectories = response;
                localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].LocalStorageKeys.GLOBAL_DIRECTORIES, JSON.stringify(response));
            }
        }, (error) => {
        });
        this.accountService.activateDevice().subscribe(() => {
        });
    }
    ionViewWillEnter() {
        this.accountService.checkForMobileLanguageId();
    }
    checkInOutClick() {
        this.navController.navigateForward('checkinout-option-dm');
    }
    documentsClick() {
        this.navController.navigateForward('documents-dm');
    }
    formsClick() {
        this.navController.navigateForward('forms-dm');
    }
    permitsClick() {
        this.navController.navigateForward('permits-dm');
    }
    evacuationClick() {
        this.navController.navigateForward('evacuation-dm');
    }
};
DashboardDmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }
];
DashboardDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-dm',
        template: _raw_loader_dashboard_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardDmPage);



/***/ }),

/***/ "Lne+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard-dm/dashboard-dm.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-dashboard-header-dm [title]=\"sharedDataService.getCurrentCheckedInEntityName()\"></app-dashboard-header-dm>\n</ion-header>\n\n<ion-content mode=\"md\" >\n    <div class=\"content\">\n       <div class=\"dashboard-btns-container\">\n           <app-dashboard-button\n                   img=\"./assets/icon/checkinout-active.png\"\n                   title=\"Check In/Out\"\n                   (click)=\"checkInOutClick()\"></app-dashboard-button>\n\n           <app-dashboard-button\n                   img=\"./assets/icon/document-active.png\"\n                   title=\"Documents\"\n                   (click)=\"documentsClick()\"></app-dashboard-button>\n\n           <app-dashboard-button\n                   img=\"./assets/icon/form-active.png\"\n                   title=\"Forms\"\n                   (click)=\"formsClick()\"></app-dashboard-button>\n\n           <app-dashboard-button\n                   img=\"./assets/icon/permit-active.png\"\n                   title=\"Permits\"\n                   (click)=\"permitsClick()\"></app-dashboard-button>\n\n           <app-dashboard-button\n                   img=\"./assets/icon/evacuation-active.png\"\n                   title=\"Evacuation\"\n                   (click)=\"evacuationClick()\"></app-dashboard-button>\n       </div>\n    </div>\n</ion-content>\n\n\n\n\n");

/***/ }),

/***/ "Nv9F":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard-dm/dashboard-dm.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F6F9FB;\n}\nion-content ::ng-deep app-dashboard-button {\n  margin: 6px;\n}\nion-content .content {\n  display: flex;\n  flex: 1;\n  min-height: 100%;\n  align-items: center;\n  justify-content: center;\n}\nion-content .content .dashboard-btns-container {\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC1kbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQU4iLCJmaWxlIjoiZGFzaGJvYXJkLWRtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gIDo6bmctZGVlcCBhcHAtZGFzaGJvYXJkLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA2cHg7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5kYXNoYm9hcmQtYnRucy1jb250YWluZXIge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "Zhrm":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard-dm/dashboard-dm.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDmPageModule", function() { return DashboardDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-dm-routing.module */ "mKPt");
/* harmony import */ var _dashboard_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-dm.page */ "FA1B");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let DashboardDmPageModule = class DashboardDmPageModule {
};
DashboardDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_dashboard_dm_page__WEBPACK_IMPORTED_MODULE_6__["DashboardDmPage"]]
    })
], DashboardDmPageModule);



/***/ }),

/***/ "mKPt":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboard-dm/dashboard-dm-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDmPageRoutingModule", function() { return DashboardDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-dm.page */ "FA1B");




const routes = [
    {
        path: '',
        component: _dashboard_dm_page__WEBPACK_IMPORTED_MODULE_3__["DashboardDmPage"]
    }
];
let DashboardDmPageRoutingModule = class DashboardDmPageRoutingModule {
};
DashboardDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardDmPageRoutingModule);



/***/ })

}]);