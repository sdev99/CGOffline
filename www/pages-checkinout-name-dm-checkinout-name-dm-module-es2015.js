(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinout-name-dm-checkinout-name-dm-module"],{

/***/ "6F53":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/checkinout-name-dm/checkinout-name-dm-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckinoutNameDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutNameDmPageRoutingModule", function() { return CheckinoutNameDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkinout_name_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkinout-name-dm.page */ "R8BD");




const routes = [
    {
        path: '',
        component: _checkinout_name_dm_page__WEBPACK_IMPORTED_MODULE_3__["CheckinoutNameDmPage"]
    }
];
let CheckinoutNameDmPageRoutingModule = class CheckinoutNameDmPageRoutingModule {
};
CheckinoutNameDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinoutNameDmPageRoutingModule);



/***/ }),

/***/ "DyH2":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinout-name-dm/checkinout-name-dm.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" [modalSubTitle]=\"pageTitle\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content>\n    <app-back-continue-toolbar [disableRightBtn]=\"!selectedUser\" (back)=\"onBack()\"\n                               (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n    <ion-item lines=\"none\" class=\"search-item\">\n        <ion-label position=\"stacked\">Enter your name</ion-label>\n        <ion-searchbar #itemRef [(ngModel)]=\"name\" (ionFocus)=\"searchBarFocus()\"\n                       (ionChange)=\"searchBarChange()\"></ion-searchbar>\n        <ion-list *ngIf=\"showList && items?.length>0\" lines=\"none\">\n            <ion-item *ngFor=\"let item of items\"\n                      (click)=\"onSelect($event, item)\">{{getFullName(item)}}</ion-item>\n        </ion-list>\n    </ion-item>\n\n\n</ion-content>\n");

/***/ }),

/***/ "R8BD":
/*!*********************************************************************!*\
  !*** ./src/app/pages/checkinout-name-dm/checkinout-name-dm.page.ts ***!
  \*********************************************************************/
/*! exports provided: CheckinoutNameDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutNameDmPage", function() { return CheckinoutNameDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkinout_name_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkinout-name-dm.page.html */ "DyH2");
/* harmony import */ var _checkinout_name_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkinout-name-dm.page.scss */ "ceh2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");











let CheckinoutNameDmPage = class CheckinoutNameDmPage {
    constructor(activatedRoute, navController, sharedDataService, accountService, apiService, ngZone) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.sharedDataService = sharedDataService;
        this.accountService = accountService;
        this.apiService = apiService;
        this.ngZone = ngZone;
        this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"];
        this.showList = false;
        this.andClickEvent = (event) => {
            const item = this.itemRef.nativeElement || this.itemRef.el;
            if (!item.contains(event.target)) {
                this.showHideList(false);
            }
        };
        this.showHideList = (showList) => {
            this.ngZone.run(() => {
                this.showList = showList;
            });
        };
        this.getFullName = (user) => {
            return _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"].getFullName(user.firstName, user.middleName, user.lastName);
        };
        this.getUserAutoSuggest = () => {
            if (this.sharedDataService.dedicatedModeDeviceDetailData && this.name) {
                this.apiService.getUserAutoSuggest(this.sharedDataService.dedicatedModeDeviceDetailData.companyID, this.name).subscribe((res) => {
                    if (res.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].ApiResponseCode.RequestSuccessful) {
                        this.items = res.Result;
                    }
                }, (error) => {
                });
            }
        };
        switch (sharedDataService.dedicatedModeProcessType) {
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.CheckinOut:
                this.pageTitle = 'Check In/Out by Name';
                break;
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.Document:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.Form:
            case _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeProcessTypes.WorkPermit:
                this.pageTitle = 'Authentication';
                break;
            default:
        }
    }
    ngOnInit() {
    }
    onClose() {
        this.navController.navigateRoot('dashboard-dm', { replaceUrl: true });
    }
    onBack() {
        this.navController.back();
    }
    onContinue() {
        this.sharedDataService.dedicatedModeUserDetail = this.selectedUser;
        this.navController.navigateForward('checkinout-identityconfirm-dm');
    }
    searchBarFocus() {
        console.log('searchBarFocus');
        this.showHideList(true);
    }
    searchBarChange() {
        console.log('searchBarChange');
        if (!this.selectedUser || this.getFullName(this.selectedUser) !== this.name) {
            this.showHideList(true);
            this.selectedUser = null;
            this.getUserAutoSuggest();
        }
    }
    onSelect(event, item) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.name = this.getFullName(item);
        this.selectedUser = item;
        this.showHideList(false);
    }
};
CheckinoutNameDmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
CheckinoutNameDmPage.propDecorators = {
    itemRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['itemRef',] }],
    andClickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:click', ['$event'],] }]
};
CheckinoutNameDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkinout-name-dm',
        template: _raw_loader_checkinout_name_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkinout_name_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinoutNameDmPage);



/***/ }),

/***/ "cZuc":
/*!***********************************************************************!*\
  !*** ./src/app/pages/checkinout-name-dm/checkinout-name-dm.module.ts ***!
  \***********************************************************************/
/*! exports provided: CheckinoutNameDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinoutNameDmPageModule", function() { return CheckinoutNameDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkinout_name_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkinout-name-dm-routing.module */ "6F53");
/* harmony import */ var _checkinout_name_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkinout-name-dm.page */ "R8BD");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");









let CheckinoutNameDmPageModule = class CheckinoutNameDmPageModule {
};
CheckinoutNameDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkinout_name_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinoutNameDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_checkinout_name_dm_page__WEBPACK_IMPORTED_MODULE_6__["CheckinoutNameDmPage"]]
    })
], CheckinoutNameDmPageModule);



/***/ }),

/***/ "ceh2":
/*!***********************************************************************!*\
  !*** ./src/app/pages/checkinout-name-dm/checkinout-name-dm.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F6F9FB;\n}\nion-content .search-item {\n  align-items: center;\n}\nion-content .search-item ::ng-deep ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  color: #171538;\n}\nion-content .search-item ::ng-deep ion-searchbar {\n  margin-top: 8px;\n  padding: 0;\n  width: 375px;\n  max-width: 95%;\n  --background: #fff;\n  --border-radius: 3px;\n  --icon-color: #A1A8CA;\n  --clear-button-color: A1A8CA;\n  --placeholder-color: #171538;\n  --placeholder-font-style: normal;\n  --placeholder-opacity: 0.8;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #171538;\n}\nion-content .search-item ::ng-deep ion-searchbar .searchbar-input-container {\n  height: 50px !important;\n  border: 1px solid #DCE7EF;\n  border-radius: 3px;\n}\nion-content .search-item ::ng-deep ion-searchbar ion-icon {\n  left: 16px !important;\n}\nion-content .search-item ::ng-deep ion-searchbar input {\n  padding-left: 50px !important;\n}\nion-content .search-item ::ng-deep ion-list {\n  width: 375px;\n  box-shadow: 0px 4px 25px rgba(141, 150, 190, 0.2);\n  border-radius: 2px 2px 4px 4px;\n  max-height: 300px;\n  overflow-y: auto;\n  padding: 16px;\n}\nion-content .search-item ::ng-deep ion-list ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-start: 16px;\n  --inner-padding-end: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW5vdXQtbmFtZS1kbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBRU07RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURSO0FBR1E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFEVjtBQUlRO0VBQ0UscUJBQUE7QUFGVjtBQUtRO0VBQ0UsNkJBQUE7QUFIVjtBQU9NO0VBQ0UsWUFBQTtFQUNBLGlEQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUxSO0FBT1E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxWIiwiZmlsZSI6ImNoZWNraW5vdXQtbmFtZS1kbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y2RjlGQjtcblxuICAuc2VhcmNoLWl0ZW0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cblxuICAgICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDM3NXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1pY29uLWNvbG9yOiAjQTFBOENBO1xuICAgICAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogQTFBOENBO1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMTcxNTM4O1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuXG4gICAgICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRENFN0VGO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBsZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLWxpc3Qge1xuICAgICAgICB3aWR0aDogMzc1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCByZ2JhKDE0MSwgMTUwLCAxOTAsIDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggNHB4IDRweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ })

}]);