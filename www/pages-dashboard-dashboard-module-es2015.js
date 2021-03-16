(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "/2RN":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "ea/W");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "6ckw");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");









let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "6ckw":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "spzo");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "ws6Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_observables_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/observables.service */ "mxI+");











let DashboardPage = class DashboardPage {
    constructor(navCtrl, apiService, utilService, accountService, sharedDataService, observablesService) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.utilService = utilService;
        this.accountService = accountService;
        this.sharedDataService = sharedDataService;
        this.observablesService = observablesService;
        this.isRefreshing = false;
        this.getActivityList = (callBack = null) => {
            var _a;
            this.apiService.getActivityList((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe((response) => {
                if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                    const result = response.Result;
                    if (result) {
                        this.activityList = result.activityList;
                        this.activityOverviewData = result.activityOverviewData;
                        this.sharedDataService.activityList = result.activityList;
                        this.sharedDataService.activityOverviewData =
                            result.activityOverviewData;
                    }
                }
                _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"].fireCallBack(callBack);
            }, (error) => {
                this.activityList = null;
                this.activityOverviewData = null;
                this.sharedDataService.activityList = null;
                this.sharedDataService.activityOverviewData = null;
                _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"].fireCallBack(callBack);
            });
        };
        this.activityList = sharedDataService.activityList;
        this.activityOverviewData = sharedDataService.activityOverviewData;
        this.user = this.accountService.userValue;
        if (!this.activityList) {
            this.utilService.presentLoadingWithOptions();
        }
        this.getActivityList(() => {
            this.utilService.hideLoading();
        });
    }
    ngOnInit() {
        var _a;
        if (!this.sharedDataService.dedicatedMode) {
            this.apiService
                .getGlobalDirectories((_a = this.user) === null || _a === void 0 ? void 0 : _a.companyFolderName)
                .subscribe((response) => {
                if (response) {
                    this.sharedDataService.globalDirectories = response;
                    localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].LocalStorageKeys.GLOBAL_DIRECTORIES, JSON.stringify(response));
                }
            }, (error) => { });
            this.observablesService
                .getObservable(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ObserverKeys.ACTIVITY_COMPLETED)
                .subscribe(() => {
                this.getActivityList();
            });
        }
    }
    ionViewWillEnter() {
        console.log("Dashboard ionViewWillEnter");
        this.accountService.checkForMobileLanguageId();
    }
    testFormPreview() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilService.presentLoadingWithOptions();
            const formID = 383;
            const formVersionID = 588;
            this.apiService.getFormBuilderDetails(formID, formVersionID).subscribe((response) => {
                this.sharedDataService.formBuilderDetails = response.Result;
                this.navCtrl.navigateForward(["/form-custom"]);
                this.utilService.hideLoading();
            }, (error) => {
                this.utilService.hideLoading();
            });
        });
    }
    ngOnDestroy() {
        this.observablesService.removeObservable(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ObserverKeys.ACTIVITY_COMPLETED);
    }
    doRefresh(event) {
        this.isRefreshing = true;
        this.getActivityList(() => {
            this.isRefreshing = false;
            event.target.complete();
        });
    }
    openActivityDetail(activity) {
        this.sharedDataService.currentActivityOpen = activity;
        this.navCtrl.navigateForward(["/activity-detail"]);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"] },
    { type: _services_observables_service__WEBPACK_IMPORTED_MODULE_10__["ObservablesService"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "ea/W":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "6ckw");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"],
    },
    {
        path: 'checkin-list',
        loadChildren: () => __webpack_require__.e(/*! import() | checkin-list-checkin-list-module */ "checkin-list-checkin-list-module").then(__webpack_require__.bind(null, /*! ../checkin-list/checkin-list.module */ "YFeQ")).then(m => m.CheckinListPageModule)
    },
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "spzo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-dashboard-header></app-dashboard-header>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <app-custom-ion-refresh-loader [isRefreshing]=\"isRefreshing\"></app-custom-ion-refresh-loader>\n    </ion-refresher>\n\n    <ion-list *ngIf=\"activityList && activityList.length > 0; else emptyMessageComponent\" class=\"activity-list\"\n              lines=\"full\">\n\n        <ion-list-header lines=\"full\" *ngIf=\"activityOverviewData\">\n            <ion-label>Activity List</ion-label>\n            <div class=\"status-badge ion-margin-end\" *ngIf=\"activityOverviewData.rejectedCount>0\">\n                <span>{{activityOverviewData.rejectedCount}}</span>\n                <ion-badge  color=\"light\" class=\"rejected\">Rejected</ion-badge>\n            </div>\n            <div class=\"status-badge\" *ngIf=\"activityOverviewData.overDueCount>0\">\n                <span>{{activityOverviewData.overDueCount}}</span>\n                <ion-badge color=\"warning\" class=\"overdue\">Overdue</ion-badge>\n            </div>\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let activity of activityList\" (click)=\"openActivityDetail(activity)\">\n            <div class=\"alert-icon-container\">\n                <ion-icon *ngIf=\"activity.isHighPriority\" name=\"alert-circle\" color=\"danger\"></ion-icon>\n            </div>\n            <ion-label>\n                <h6>{{activity.activityTitle}}</h6>\n                <div class=\"detail\">\n                    <ion-badge *ngIf=\"activity.isOverDue\" color=\"warning\" class=\"overdue\">Overdue</ion-badge>\n                    <ng-container *ngIf=\"activity.isRejected\">\n                        <ion-icon slot=\"start\" src=\"./assets/icon/rejected.svg\"></ion-icon>\n                        <ion-badge color=\"light\" class=\"rejected\">Rejected</ion-badge>\n                    </ng-container>\n                    <span class=\"time\" *ngIf=\"activity.activityTime; else customTime\">{{activity.activityTime}}</span>\n                    <ng-template #customTime>\n                        <span class=\"time\" *ngIf=\"activity.activityDate === activity.todayDate\">Today</span>\n                        <span class=\"time\"\n                              *ngIf=\"activity.activityDate !== activity.todayDate\">{{activity.activityDate | timeAgo}}</span>\n                    </ng-template>\n                </div>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ng-template #emptyMessageComponent>\n        <app-empty-message message=\"You don't have any activities assigned.\"></app-empty-message>\n    </ng-template>\n\n</ion-content>\n");

/***/ }),

/***/ "ws6Y":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list.activity-list ion-list-header {\n  padding: 12px 20px;\n  align-items: center;\n  --border-color: #DCE7EF;\n  --border-width: 1px;\n  --border-style: solid;\n}\nion-content ion-list.activity-list ion-list-header ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n  color: #444444;\n  margin: 0;\n}\nion-content ion-list.activity-list ion-list-header .status-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-list.activity-list ion-list-header .status-badge span {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #171538;\n}\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  text-align: center;\n}\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge.rejected {\n  color: #E74731;\n}\nion-content ion-list.activity-list ion-list-header .status-badge ion-badge.overdue {\n  color: #FFFFFF;\n}\nion-content ion-list.activity-list ion-item {\n  --border-color: #DCE7EF;\n  --border-width: 1px;\n  --border-style: solid;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-content ion-list.activity-list ion-item .alert-icon-container {\n  width: 26px;\n  height: 26px;\n}\nion-content ion-list.activity-list ion-item .alert-icon-container ion-icon {\n  width: 16px;\n  height: 16px;\n}\nion-content ion-list.activity-list ion-item ion-label {\n  white-space: normal;\n}\nion-content ion-list.activity-list ion-item ion-label h6 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #2A6FDB;\n  white-space: normal;\n}\nion-content ion-list.activity-list ion-item ion-label .detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 4px;\n}\nion-content ion-list.activity-list ion-item ion-label .detail ion-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 3px;\n}\nion-content ion-list.activity-list ion-item ion-label .detail ion-badge {\n  margin: 4px 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  margin-right: 9px;\n}\nion-content ion-list.activity-list ion-item ion-label .detail ion-badge.overdue {\n  color: #FFFFFF;\n}\nion-content ion-list.activity-list ion-item ion-label .detail ion-badge.rejected {\n  color: #E74731;\n}\nion-content ion-list.activity-list ion-item ion-label .detail .time {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRk47QUFJTTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRlI7QUFLTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIUjtBQUtRO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhWO0FBTVE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFKVjtBQU1VO0VBQ0UsY0FBQTtBQUpaO0FBT1U7RUFDRSxjQUFBO0FBTFo7QUFXSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFUTjtBQVdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFUUjtBQVdRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFUVjtBQWFNO0VBQ0UsbUJBQUE7QUFYUjtBQWFRO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBWFY7QUFjUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVpWO0FBY1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWlo7QUFlVTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFiWjtBQWVZO0VBQ0UsY0FBQTtBQWJkO0FBZ0JZO0VBQ0UsY0FBQTtBQWRkO0FBa0JVO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWhCWiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tbGlzdC5hY3Rpdml0eS1saXN0IHtcblxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNEQ0U3RUY7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLnN0YXR1cy1iYWRnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICYucmVqZWN0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICNFNzQ3MzE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5vdmVyZHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRENFN0VGO1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDZweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcblxuICAgICAgLmFsZXJ0LWljb24tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgIGhlaWdodDogMjZweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cbiAgICAgICAgaDYge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzJBNkZEQjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xuXG4gICAgICAgICAgICAmLm92ZXJkdWUge1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5yZWplY3RlZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjRTc0NzMxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map