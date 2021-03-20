(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkin-workpermit-checkin-workpermit-module"],{

/***/ "9bkz":
/*!*********************************************************************!*\
  !*** ./src/app/pages/checkin-workpermit/checkin-workpermit.page.ts ***!
  \*********************************************************************/
/*! exports provided: CheckinWorkpermitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinWorkpermitPage", function() { return CheckinWorkpermitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkin_workpermit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkin-workpermit.page.html */ "knEe");
/* harmony import */ var _checkin_workpermit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin-workpermit.page.scss */ "viGm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/account.service */ "flj8");










let CheckinWorkpermitPage = class CheckinWorkpermitPage {
    constructor(navController, sharedDataService, utilService, apiService, navCtrl, accountService) {
        this.navController = navController;
        this.sharedDataService = sharedDataService;
        this.utilService = utilService;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.accountService = accountService;
        this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"];
        this.isCheckedIn = false;
        if (!sharedDataService.dedicatedMode) {
            this.isCheckedIn = sharedDataService.checkedInPlaces ? sharedDataService.checkedInPlaces.length > 0 : false;
            this.user = this.accountService.userValue;
        }
        this.availableWorkPermits = sharedDataService.availableWorkPermits;
    }
    ngOnInit() {
    }
    fileIcon(type) {
        let iconName = '';
        switch (type) {
            case 'document':
                iconName = 'attachment1';
                break;
            case 'pdf':
                iconName = 'attachment2';
                break;
            case 'form':
                iconName = 'attachment3';
                break;
            case 'folder':
                iconName = 'attachment4';
                break;
            case 'image':
                iconName = 'attachment5';
                break;
            case 'video':
                iconName = 'attachment6';
                break;
            default:
                iconName = 'attachment1';
        }
        return './assets/icon/' + iconName + '.svg';
    }
    back() {
        this.navController.back();
    }
    onSelect(item) {
        if (this.sharedDataService.dedicatedMode) {
            this.sharedDataService.signOffFormDetail = item;
            this.sharedDataService.signOffFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].SignOffType.WORK_PERMIT_DM;
            this.navController.navigateForward('form-open-auth-dm');
        }
        else {
            this.navController.navigateForward('form-cover', {
                queryParams: item
            });
        }
    }
    openForm(form) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilService.presentLoadingWithOptions();
            if (this.sharedDataService.dedicatedMode) {
                const place = this.sharedDataService.currentSelectedCheckinPlace;
                this.apiService.getDedicatedModeSignOffFormDetail(form.formID).subscribe((response) => {
                    this.utilService.hideLoading();
                    if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                        this.sharedDataService.signOffFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].SignOffType.FORMS_DM;
                        this.sharedDataService.viewFormFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ViewFormForType.WorkPermitDM;
                        this.sharedDataService.signOffFormDetail = response.Result;
                        this.sharedDataService.dedicatedModeTempAuthFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].DedicatedModeTempAuthType.WorkPermit;
                        this.navController.navigateForward('/form-open-auth-dm');
                    }
                }, (error) => {
                    this.utilService.hideLoading();
                });
            }
            else {
                const place = this.sharedDataService.currentSelectedCheckinPlace;
                this.apiService.getSignOffFormDetail((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId, form.formID, place === null || place === void 0 ? void 0 : place.locationID, place === null || place === void 0 ? void 0 : place.projectID, place === null || place === void 0 ? void 0 : place.inventoryItemID).subscribe((response) => {
                    this.utilService.hideLoading();
                    if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                        this.sharedDataService.viewFormFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ViewFormForType.CurrentCheckinWorkPermit;
                        this.sharedDataService.signOffFormDetail = response.Result;
                        this.navCtrl.navigateForward(['/form-cover'], { replaceUrl: true });
                    }
                }, (error) => {
                    this.utilService.hideLoading();
                });
            }
        });
    }
};
CheckinWorkpermitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }
];
CheckinWorkpermitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-workpermit',
        template: _raw_loader_checkin_workpermit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_workpermit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinWorkpermitPage);



/***/ }),

/***/ "KPvE":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/checkin-workpermit/checkin-workpermit-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckinWorkpermitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinWorkpermitPageRoutingModule", function() { return CheckinWorkpermitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkin_workpermit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-workpermit.page */ "9bkz");




const routes = [
    {
        path: '',
        component: _checkin_workpermit_page__WEBPACK_IMPORTED_MODULE_3__["CheckinWorkpermitPage"]
    }
];
let CheckinWorkpermitPageRoutingModule = class CheckinWorkpermitPageRoutingModule {
};
CheckinWorkpermitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinWorkpermitPageRoutingModule);



/***/ }),

/***/ "knEe":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-workpermit/checkin-workpermit.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ng-container *ngIf=\"!sharedDataService.dedicatedMode\">\n        <app-dashboard-header [showPlaceNavigationBtns]=\"false\" [isCurrentCheckin]=\"true\"\n                              [hideCheckinButton]=\"isCheckedIn\"\n        ></app-dashboard-header>\n\n        <ion-toolbar style=\"padding-top: 0\">\n            <ion-back-button icon=\"./assets/icon/back.svg\" slot=\"start\" text=\"\" color=\"dark\"\n                             mode=\"md\"></ion-back-button>\n            <ion-title class=\"ion-text-left\">Work Permit Forms</ion-title>\n        </ion-toolbar>\n    </ng-container>\n\n    <ng-container *ngIf=\"sharedDataService.dedicatedMode\">\n        <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n                             modalSubTitle=\"Work Permit\"\n                             (closeModal)=\"back()\"></app-modal-header-dm>\n    </ng-container>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list *ngIf=\"availableWorkPermits && availableWorkPermits.length>0\" class=\"activity-list\" lines=\"full\">\n        <ion-item *ngFor=\"let item of availableWorkPermits\" (click)=\"openForm(item)\">\n            <ion-icon slot=\"start\" [src]=\"UtilService.FileIcon('form')\"></ion-icon>\n            <ion-label>{{item.formTitle}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ng-container *ngIf=\"!availableWorkPermits || availableWorkPermits?.length===0\">\n        <app-empty-message message=\"No permits available\"></app-empty-message>\n    </ng-container>\n\n</ion-content>\n");

/***/ }),

/***/ "viGm":
/*!***********************************************************************!*\
  !*** ./src/app/pages/checkin-workpermit/checkin-workpermit.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-title {\n  padding-left: 55px;\n}\n\nion-content ion-list.activity-list ion-list-header {\n  padding: 20px 10px;\n  align-items: center;\n  --border-color: #DCE7EF;\n  --border-width: 1px;\n  --border-style: solid;\n}\n\nion-content ion-list.activity-list ion-list-header ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n  color: #444444;\n  margin: 0;\n}\n\nion-content ion-list.activity-list ion-item {\n  --border-color: #DCE7EF;\n  --border-width: 1px;\n  --border-style: solid;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\nion-content ion-list.activity-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #21092A;\n}\n\nion-content ion-list.activity-list ion-item ion-icon {\n  width: 22px;\n  height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4td29ya3Blcm1pdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKOztBQU9JO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUpOOztBQU1NO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFKUjs7QUFRSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFOTjs7QUFRTTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFOUjs7QUFTTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUFIiLCJmaWxlIjoiY2hlY2tpbi13b3JrcGVybWl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBpb24tbGlzdC5hY3Rpdml0eS1saXN0IHtcblxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNEQ0U3RUY7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogI0RDRTdFRjtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMyMTA5MkE7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "wBB1":
/*!***********************************************************************!*\
  !*** ./src/app/pages/checkin-workpermit/checkin-workpermit.module.ts ***!
  \***********************************************************************/
/*! exports provided: CheckinWorkpermitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinWorkpermitPageModule", function() { return CheckinWorkpermitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkin_workpermit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-workpermit-routing.module */ "KPvE");
/* harmony import */ var _checkin_workpermit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-workpermit.page */ "9bkz");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CheckinWorkpermitPageModule = class CheckinWorkpermitPageModule {
};
CheckinWorkpermitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkin_workpermit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinWorkpermitPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_checkin_workpermit_page__WEBPACK_IMPORTED_MODULE_6__["CheckinWorkpermitPage"]]
    })
], CheckinWorkpermitPageModule);



/***/ })

}]);