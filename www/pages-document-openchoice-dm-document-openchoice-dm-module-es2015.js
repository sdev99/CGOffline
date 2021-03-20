(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-document-openchoice-dm-document-openchoice-dm-module"],{

/***/ "ACsW":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/document-openchoice-dm/document-openchoice-dm-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DocumentOpenchoiceDmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentOpenchoiceDmPageRoutingModule", function() { return DocumentOpenchoiceDmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _document_openchoice_dm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document-openchoice-dm.page */ "gqa+");




const routes = [
    {
        path: '',
        component: _document_openchoice_dm_page__WEBPACK_IMPORTED_MODULE_3__["DocumentOpenchoiceDmPage"]
    }
];
let DocumentOpenchoiceDmPageRoutingModule = class DocumentOpenchoiceDmPageRoutingModule {
};
DocumentOpenchoiceDmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DocumentOpenchoiceDmPageRoutingModule);



/***/ }),

/***/ "CBx6":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/document-openchoice-dm/document-openchoice-dm.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F6F9FB;\n}\nion-content .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n}\nion-content .content .text-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 31px;\n  display: flex;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .text-2 {\n  margin-top: 24px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n  display: flex;\n  text-align: center;\n  color: #4A90E2;\n  max-width: 70%;\n}\nion-content .content .action-btn {\n  margin-top: 50px;\n  width: 207px;\n  height: 50px;\n  margin-bottom: 31px;\n}\nion-content .content .cancel-btn {\n  --background: #ffffff;\n  width: 207px;\n  height: 50px;\n  --border-width: 2px;\n  --border-color: #2A6FDB;\n  --border-radius: 3px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #2A6FDB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RvY3VtZW50LW9wZW5jaG9pY2UtZG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFOO0FBSUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQU1JO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFKTiIsImZpbGUiOiJkb2N1bWVudC1vcGVuY2hvaWNlLWRtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gICAgLnRleHQtMSB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG5cbiAgICAudGV4dC0yIHtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjNEE5MEUyO1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgfVxuXG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgd2lkdGg6IDIwN3B4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzFweDtcbiAgICB9XG5cblxuICAgIC5jYW5jZWwtYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIHdpZHRoOiAyMDdweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAtLWJvcmRlci1jb2xvcjogIzJBNkZEQjtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogIzJBNkZEQjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "M1pF":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/document-openchoice-dm/document-openchoice-dm.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"content\">\n        <div class=\"text-1\">What do you want to do this with this document?</div>\n        <div class=\"text-2\" *ngIf=\"documentDetail\">\n            {{documentDetail.documentTitle}}\n        </div>\n\n\n        <ion-button class=\"action-btn\" (click)=\"viewAndSignOff()\">\n            View and Sign-Off\n        </ion-button>\n\n        <ion-button class=\"cancel-btn\" fill=\"outline\" (click)=\"viewOnly()\">\n            View Only\n        </ion-button>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "gqa+":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/document-openchoice-dm/document-openchoice-dm.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DocumentOpenchoiceDmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentOpenchoiceDmPage", function() { return DocumentOpenchoiceDmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_document_openchoice_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./document-openchoice-dm.page.html */ "M1pF");
/* harmony import */ var _document_openchoice_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-openchoice-dm.page.scss */ "CBx6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/filehandler.service */ "rz59");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");











let DocumentOpenchoiceDmPage = class DocumentOpenchoiceDmPage {
    constructor(navController, activatedRoute, filehandlerService, utilService, apiService, sharedDataService) {
        this.navController = navController;
        this.activatedRoute = activatedRoute;
        this.filehandlerService = filehandlerService;
        this.utilService = utilService;
        this.apiService = apiService;
        this.sharedDataService = sharedDataService;
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res && res.documentDetail) {
                this.documentDetail = JSON.parse(res.documentDetail);
            }
        });
    }
    ngOnInit() {
    }
    onClose() {
        this.navController.back();
    }
    viewAndSignOff() {
        var _a, _b;
        this.filehandlerService.openFile(((_a = this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.documentDirectory) + '' + ((_b = this.documentDetail) === null || _b === void 0 ? void 0 : _b.documentFileName));
        this.getDocumentSignOffDetail();
    }
    viewOnly() {
        var _a, _b;
        this.filehandlerService.openFile(((_a = this.sharedDataService.globalDirectories) === null || _a === void 0 ? void 0 : _a.documentDirectory) + '' + ((_b = this.documentDetail) === null || _b === void 0 ? void 0 : _b.documentFileName));
    }
    getDocumentSignOffDetail() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilService.presentLoadingWithOptions();
            this.apiService.getActivitySignOffDocumentDetail((_a = this.documentDetail) === null || _a === void 0 ? void 0 : _a.documentID).subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g;
                this.utilService.hideLoading();
                if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].ApiResponseCode.RequestSuccessful) {
                    const signOffDocumentDetail = response.Result;
                    this.sharedDataService.signOffFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].SignOffType.DOCUMENT_DM;
                    this.sharedDataService.signOffDocumentDetail = signOffDocumentDetail;
                    this.sharedDataService.signOffDetailsPostData = {
                        documentID: (_a = this.documentDetail) === null || _a === void 0 ? void 0 : _a.documentID,
                        documentVersionID: (_b = this.documentDetail) === null || _b === void 0 ? void 0 : _b.documentVersionID,
                        formVersionID: 0,
                        latitude: (_c = this.sharedDataService.myCurrentGeoLocation) === null || _c === void 0 ? void 0 : _c.coords.latitude,
                        longitude: (_d = this.sharedDataService.myCurrentGeoLocation) === null || _d === void 0 ? void 0 : _d.coords.longitude,
                        locationID: (_e = this.sharedDataService.dedicatedModeLocationUse) === null || _e === void 0 ? void 0 : _e.locationID,
                        projectID: (_f = this.sharedDataService.dedicatedModeLocationUse) === null || _f === void 0 ? void 0 : _f.projectID,
                        inventoryItemID: (_g = this.sharedDataService.dedicatedModeLocationUse) === null || _g === void 0 ? void 0 : _g.inventoryItemID
                    };
                    this.sharedDataService.dedicatedModeTempAuthFor = _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].DedicatedModeTempAuthType.Document;
                    this.navController.navigateForward('/form-open-auth-dm');
                }
            }, (error) => {
                this.utilService.hideLoading();
            });
        });
    }
};
DocumentOpenchoiceDmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_8__["FilehandlerService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] }
];
DocumentOpenchoiceDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-document-openchoice-dm',
        template: _raw_loader_document_openchoice_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_document_openchoice_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DocumentOpenchoiceDmPage);



/***/ }),

/***/ "jkf7":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/document-openchoice-dm/document-openchoice-dm.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DocumentOpenchoiceDmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentOpenchoiceDmPageModule", function() { return DocumentOpenchoiceDmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _document_openchoice_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-openchoice-dm-routing.module */ "ACsW");
/* harmony import */ var _document_openchoice_dm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document-openchoice-dm.page */ "gqa+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let DocumentOpenchoiceDmPageModule = class DocumentOpenchoiceDmPageModule {
};
DocumentOpenchoiceDmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _document_openchoice_dm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentOpenchoiceDmPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_document_openchoice_dm_page__WEBPACK_IMPORTED_MODULE_6__["DocumentOpenchoiceDmPage"]]
    })
], DocumentOpenchoiceDmPageModule);



/***/ })

}]);