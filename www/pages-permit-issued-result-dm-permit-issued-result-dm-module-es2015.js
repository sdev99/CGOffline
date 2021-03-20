(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permit-issued-result-dm-permit-issued-result-dm-module"],{

/***/ "MOaE":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/permit-issued-result-dm/permit-issued-result-dm-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PermitIssuedResultDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermitIssuedResultDmPageRoutingModule", function() { return PermitIssuedResultDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _permit_issued_result_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permit-issued-result-dm.page */ "mmtL");




const routes = [
    {
        path: '',
        component: _permit_issued_result_dm_page__WEBPACK_IMPORTED_MODULE_3__["PermitIssuedResultDmPage"]
    }
];
let PermitIssuedResultDmPageRoutingModule = class PermitIssuedResultDmPageRoutingModule {
};
PermitIssuedResultDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PermitIssuedResultDmPageRoutingModule);



/***/ }),

/***/ "QmNT":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/permit-issued-result-dm/permit-issued-result-dm.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PermitIssuedResultDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermitIssuedResultDmPageModule", function() { return PermitIssuedResultDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _permit_issued_result_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permit-issued-result-dm-routing.module */ "MOaE");
/* harmony import */ var _permit_issued_result_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permit-issued-result-dm.page */ "mmtL");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let PermitIssuedResultDmPageModule = class PermitIssuedResultDmPageModule {
};
PermitIssuedResultDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _permit_issued_result_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermitIssuedResultDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_permit_issued_result_dm_page__WEBPACK_IMPORTED_MODULE_6__["PermitIssuedResultDmPage"]]
    })
], PermitIssuedResultDmPageModule);



/***/ }),

/***/ "Tn2V":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/permit-issued-result-dm/permit-issued-result-dm.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F6F9FB;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n  width: 100%;\n  text-align: center;\n}\nion-content .content ion-icon {\n  width: 100px;\n  height: 100px;\n}\nion-content .content .text-1 {\n  margin-top: 12px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 26px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-2 {\n  margin-top: 6px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #19DC76;\n}\nion-content .content .text-2.failed {\n  color: #E74731;\n}\nion-content .content .text-3 {\n  margin-top: 24px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .action-btn {\n  margin-top: 30px;\n  width: 224px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Blcm1pdC1pc3N1ZWQtcmVzdWx0LWRtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNOO0FBRUk7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRE47QUFHTTtFQUNFLGNBQUE7QUFEUjtBQUtJO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSk4iLCJmaWxlIjoicGVybWl0LWlzc3VlZC1yZXN1bHQtZG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGNkY5RkI7XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAudGV4dC0xIHtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgLnRleHQtMiB7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMTlEQzc2O1xuXG4gICAgICAmLmZhaWxlZCB7XG4gICAgICAgIGNvbG9yOiAjRTc0NzMxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0LTMge1xuICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHdpZHRoOiAyMjRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "mmtL":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/permit-issued-result-dm/permit-issued-result-dm.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PermitIssuedResultDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermitIssuedResultDmPage", function() { return PermitIssuedResultDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_permit_issued_result_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permit-issued-result-dm.page.html */ "pp43");
/* harmony import */ var _permit_issued_result_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permit-issued-result-dm.page.scss */ "Tn2V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");







let PermitIssuedResultDmPage = class PermitIssuedResultDmPage {
    constructor(activatedRoute, navController, sharedDataService) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.sharedDataService = sharedDataService;
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.permitResult) {
                    this.permitResult = res.permitResult;
                }
            }
        });
    }
    ngOnInit() {
    }
    onClose() {
        this.navController.navigateRoot('dashboard-dm', { replaceUrl: true });
    }
    onContinue() {
        this.navController.navigateRoot('dashboard-dm', { replaceUrl: true });
    }
    onBack() {
        this.navController.back();
    }
};
PermitIssuedResultDmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] }
];
PermitIssuedResultDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-permit-issued-result-dm',
        template: _raw_loader_permit_issued_result_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_permit_issued_result_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PermitIssuedResultDmPage);



/***/ }),

/***/ "pp43":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permit-issued-result-dm/permit-issued-result-dm.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Work Permit\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n    <div class=\"content\">\n        <ng-container *ngIf=\"permitResult === 'success';else notSuccess\">\n            <ion-icon src=\"./assets/icon/CheckSuccess.svg\"></ion-icon>\n            <div class=\"text-1\">Passed</div>\n            <div class=\"text-2\">Permit Issued</div>\n            <div class=\"text-3\">Your work permit is active until 24 Mar 2020 - 12:00.</div>\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Continue</ion-button>\n        </ng-container>\n\n        <ng-template #notSuccess>\n            <ion-icon src=\"./assets/icon/ErrorCheck.svg\"></ion-icon>\n            <div class=\"text-1\">Not Passed</div>\n            <div class=\"text-2 failed\">No Permit</div>\n            <div class=\"text-3\">You were found not eligible for a work permit.</div>\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Exit</ion-button>\n        </ng-template>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);