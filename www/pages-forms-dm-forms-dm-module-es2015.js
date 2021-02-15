(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forms-dm-forms-dm-module"],{

/***/ "0ZBc":
/*!***********************************************************!*\
  !*** ./src/app/pages/forms-dm/forms-dm-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FormsDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsDmPageRoutingModule", function() { return FormsDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forms_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms-dm.page */ "tPbM");




const routes = [
    {
        path: '',
        component: _forms_dm_page__WEBPACK_IMPORTED_MODULE_3__["FormsDmPage"]
    }
];
let FormsDmPageRoutingModule = class FormsDmPageRoutingModule {
};
FormsDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormsDmPageRoutingModule);



/***/ }),

/***/ "8g+m":
/*!***************************************************!*\
  !*** ./src/app/pages/forms-dm/forms-dm.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jtcy1kbS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "eGHF":
/*!***************************************************!*\
  !*** ./src/app/pages/forms-dm/forms-dm.module.ts ***!
  \***************************************************/
/*! exports provided: FormsDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsDmPageModule", function() { return FormsDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forms_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-dm-routing.module */ "0ZBc");
/* harmony import */ var _forms_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms-dm.page */ "tPbM");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");









let FormsDmPageModule = class FormsDmPageModule {
};
FormsDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forms_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_forms_dm_page__WEBPACK_IMPORTED_MODULE_6__["FormsDmPage"]]
    })
], FormsDmPageModule);



/***/ }),

/***/ "tPbM":
/*!*************************************************!*\
  !*** ./src/app/pages/forms-dm/forms-dm.page.ts ***!
  \*************************************************/
/*! exports provided: FormsDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsDmPage", function() { return FormsDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forms_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forms-dm.page.html */ "xzRs");
/* harmony import */ var _forms_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms-dm.page.scss */ "8g+m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/filehandler.service */ "rz59");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");










let FormsDmPage = class FormsDmPage {
    constructor(navController, filehandlerService, utilService, sharedDataService, apiService) {
        this.navController = navController;
        this.filehandlerService = filehandlerService;
        this.utilService = utilService;
        this.sharedDataService = sharedDataService;
        this.apiService = apiService;
        this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"];
        this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"];
        this.listType = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeFormListType.Available;
        this.listTypes = Object.values(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeFormListType);
        this.searchQuery = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.sharedDataService.dedicatedModeProcessType = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeProcessTypes.Form;
        this.getDedicatedModeAvailableForms();
        this.getDedicatedModeArchiveForms();
    }
    getDedicatedModeAvailableForms() {
        var _a;
        const companyID = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
        this.apiService.getDedicatedModeAvailableForms(companyID).subscribe((response) => {
            if (response) {
                this.availableForms = response.Result;
            }
        }, (error) => {
        });
    }
    getDedicatedModeArchiveForms() {
        var _a;
        const companyID = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
        this.apiService.getDedicatedModeArchiveForms(companyID).subscribe((response) => {
            if (response) {
                this.archivedForms = response.Result;
            }
        }, (error) => {
        });
    }
    onSearch(search) {
        this.searchQuery = search;
    }
    searchbarShowHide(visible) {
        if (!visible) {
            this.searchQuery = '';
        }
    }
    segmentChanged(event) {
        this.listType = event;
        if (event === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeFormListType.Available) {
            this.getDedicatedModeAvailableForms();
        }
        else if (event === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeFormListType.Archive) {
            this.getDedicatedModeArchiveForms();
        }
    }
    openForm(item) {
        this.utilService.presentLoadingWithOptions();
        this.apiService.getDedicatedModeSignOffFormDetail(item.formID).subscribe((response) => {
            this.utilService.hideLoading();
            if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                this.sharedDataService.signOffFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].SignOffType.FORMS_DM;
                this.sharedDataService.viewFormFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ViewFormForType.FormDM;
                this.sharedDataService.signOffFormDetail = response.Result;
                this.sharedDataService.dedicatedModeTempAuthFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].DedicatedModeTempAuthType.Form;
                this.navController.navigateForward('/form-open-auth-dm');
            }
        }, error => {
            this.utilService.hideLoading();
        });
    }
    openArchivedForm(item) {
        var _a;
        if (item.documentFileName) {
            this.filehandlerService.openFile(((_a = this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.documentDirectory) + '' + item.documentFileName);
        }
        else {
            this.utilService.showAlert('This device needs to be synced first in order to show the selected file. Please sync device and try again.', 'File Not Available Yet');
        }
    }
};
FormsDmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_4__["FilehandlerService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] }
];
FormsDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forms-dm',
        template: _raw_loader_forms_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forms_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormsDmPage);



/***/ }),

/***/ "xzRs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms-dm/forms-dm.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-dashboard-header-dm [title]=\"sharedDataService.getCurrentCheckedInEntityName()\"></app-dashboard-header-dm>\n    <app-topnavigations-btns-dm activeBtn=\"form\"></app-topnavigations-btns-dm>\n    <app-topnavigations-segments-dm [active]=\"listType\"\n                                    [options]=\"listTypes\"\n                                    [search]=\"searchQuery\"\n                                    (searching)=\"onSearch($event)\"\n                                    (searchbarShowHide)=\"searchbarShowHide($event)\"\n                                    (changed)=\"segmentChanged($event)\"></app-topnavigations-segments-dm>\n</ion-header>\n\n<ion-content>\n    <ion-list\n            *ngIf=\"(listType === EnumService.DedicatedModeFormListType.Available && availableForms?.length>0) || (listType === EnumService.DedicatedModeFormListType.Archive && archivedForms?.length>0); else noDocument\"\n            class=\"activity-list\"\n            lines=\"full\">\n\n\n        <ng-container *ngIf=\"listType === EnumService.DedicatedModeFormListType.Available\">\n            <app-archived-item\n                    *ngFor=\"let item of availableForms | listFilter:searchQuery:'formTitle';\"\n                    [icon]=\"item.documentFileIconURL\"\n                    (itemSelect)=\"openForm(item)\"\n                    [colFirst]=\"item.formTitle\"\n            ></app-archived-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"listType === EnumService.DedicatedModeFormListType.Archive\">\n            <app-archived-item\n                    *ngFor=\"let item of archivedForms | listFilter:searchQuery:'documentTitle';\"\n                    (itemSelect)=\"openArchivedForm(item)\"\n                    [icon]=\"item.documentFileIconURL\"\n                    [colFirst]=\"item.documentTitle\"\n                    colSecond=\"Signed by\"\n                    [colSecondHighlighted]=\"item.signedByName\"\n                    colThird=\"Signed\"\n                    [colThirdHighlighted]=\"item.formattedCreatedDate\"\n            ></app-archived-item>\n        </ng-container>\n    </ion-list>\n\n    <ng-template #noDocument>\n        <app-empty-message message=\"No forms available\"></app-empty-message>\n    </ng-template>\n\n\n    <ng-container *ngIf=\"listType === EnumService.DedicatedModeFormListType.Available && availableForms?.length>0\">\n\n        <app-empty-message *ngIf=\"(availableForms | listFilter:searchQuery:'formTitle').length == 0\"\n                           message=\"No Results Found\"></app-empty-message>\n    </ng-container>\n\n    <ng-container *ngIf=\"listType === EnumService.DedicatedModeFormListType.Archive && archivedForms?.length>0\">\n        <app-empty-message *ngIf=\"(archivedForms | listFilter:searchQuery:'documentTitle').length == 0\"\n                           message=\"No Results Found\"></app-empty-message>\n    </ng-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-forms-dm-forms-dm-module-es2015.js.map