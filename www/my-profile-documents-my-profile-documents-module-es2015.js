(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-documents-my-profile-documents-module"],{

/***/ "1zJA":
/*!***************************************************************************!*\
  !*** ./src/app/pages/my-profile-documents/my-profile-documents.module.ts ***!
  \***************************************************************************/
/*! exports provided: MyProfileDocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileDocumentsPageModule", function() { return MyProfileDocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_profile_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-profile-documents-routing.module */ "Pb+W");
/* harmony import */ var _my_profile_documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile-documents.page */ "vYVg");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let MyProfileDocumentsPageModule = class MyProfileDocumentsPageModule {
};
MyProfileDocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_profile_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfileDocumentsPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_my_profile_documents_page__WEBPACK_IMPORTED_MODULE_6__["MyProfileDocumentsPage"]]
    })
], MyProfileDocumentsPageModule);



/***/ }),

/***/ "Pb+W":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/my-profile-documents/my-profile-documents-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MyProfileDocumentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileDocumentsPageRoutingModule", function() { return MyProfileDocumentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_profile_documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile-documents.page */ "vYVg");




const routes = [
    {
        path: '',
        component: _my_profile_documents_page__WEBPACK_IMPORTED_MODULE_3__["MyProfileDocumentsPage"]
    }
];
let MyProfileDocumentsPageRoutingModule = class MyProfileDocumentsPageRoutingModule {
};
MyProfileDocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfileDocumentsPageRoutingModule);



/***/ }),

/***/ "r/ge":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile-documents/my-profile-documents.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n    <app-modal-header [modalTitle]=\"'My Signed Documents'\" (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <app-custom-ion-refresh-loader [isRefreshing]=\"isRefreshing\"></app-custom-ion-refresh-loader>\n    </ion-refresher>\n\n    <ng-container *ngIf=\"list && list.length>0; else emptyMessage\">\n        <ion-list lines=\"none\">\n            <ion-item mode=\"md\" lines=\"full\" *ngFor=\"let item of list\" (click)=\"openFile(item)\">\n                <ion-icon slot=\"start\" src=\"./assets/icon/attachment2.svg\"></ion-icon>\n                <ion-label class=\"ion-text-wrap\">\n                    <h4>{{item.documentTitle}}</h4>\n                    <!--                <p>Expires on {{item.timeDifference | date:'dd MMM yyyy HH:mm'}}</p>-->\n                    <p>{{item.formattedCreatedDate}}</p>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n        <!--        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">-->\n        <!--            <ion-infinite-scroll-content [loadingSpinner]=\"null\">-->\n        <!--                <div class=\"ion-infinite-custom-loader\" *ngIf=\"isLoadingMoreData\">-->\n        <!--                    <ion-icon src=\"./assets/icon/Loader.svg\"></ion-icon>-->\n        <!--                </div>-->\n        <!--            </ion-infinite-scroll-content>-->\n        <!--        </ion-infinite-scroll>-->\n    </ng-container>\n\n    <ng-template #emptyMessage>\n        <app-empty-message message=\"There are no signed-off files.\"></app-empty-message>\n    </ng-template>\n</ion-content>\n");

/***/ }),

/***/ "uUYN":
/*!***************************************************************************!*\
  !*** ./src/app/pages/my-profile-documents/my-profile-documents.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list ion-item {\n  --border-color: #DCE7EF;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\nion-content ion-list ion-item h4 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #21092A;\n}\nion-content ion-list ion-item p {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #777595;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LXByb2ZpbGUtZG9jdW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUROO0FBR007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRFI7QUFJTTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGUiIsImZpbGUiOiJteS1wcm9maWxlLWRvY3VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogI0RDRTdFRjtcbiAgICAgIC0tcGFkZGluZy10b3A6IDhweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcblxuICAgICAgaDQge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogIzIxMDkyQTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjNzc3NTk1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "vYVg":
/*!*************************************************************************!*\
  !*** ./src/app/pages/my-profile-documents/my-profile-documents.page.ts ***!
  \*************************************************************************/
/*! exports provided: MyProfileDocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileDocumentsPage", function() { return MyProfileDocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_profile_documents_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-profile-documents.page.html */ "r/ge");
/* harmony import */ var _my_profile_documents_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile-documents.page.scss */ "uUYN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/filehandler.service */ "rz59");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");











let MyProfileDocumentsPage = class MyProfileDocumentsPage {
    constructor(navCtrl, filehandlerService, apiService, accountService, sharedDataService, utilService) {
        this.navCtrl = navCtrl;
        this.filehandlerService = filehandlerService;
        this.apiService = apiService;
        this.accountService = accountService;
        this.sharedDataService = sharedDataService;
        this.utilService = utilService;
        this.list = [];
        this.isLoadingMoreData = false;
        this.isRefreshing = false;
        this.getMySignedDocuments = (callBack, resetList = false) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a;
            this.apiService.getMySignedDocuments((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe((response) => {
                let isMoreData = false;
                if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ApiResponseCode.RequestSuccessful) {
                    if (resetList) {
                        this.list = response.Result;
                    }
                    else {
                        this.list = response.Result;
                        // this.list = this.list.concat(response.Result);
                    }
                    isMoreData = true;
                }
                _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].fireCallBack(callBack, isMoreData);
            }, (error) => {
                _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].fireCallBack(callBack, false);
            });
        });
        this.user = this.accountService.userValue;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilService.presentLoadingWithOptions();
            this.getMySignedDocuments(() => {
                this.utilService.hideLoading();
            }, true);
        });
    }
    doRefresh(event) {
        this.isRefreshing = true;
        this.getMySignedDocuments(() => {
            this.isRefreshing = false;
            event.target.complete();
        }, true);
    }
    loadMoreData(event) {
        this.isLoadingMoreData = true;
        this.getMySignedDocuments((isMoreData) => {
            event.target.complete();
            this.isLoadingMoreData = false;
            if (!isMoreData) {
                // event.target.disabled = true;
            }
        });
    }
    onClose() {
        this.navCtrl.back();
    }
    openFile(attachment) {
        if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && attachment && attachment.documentFileName) {
            this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + '' + attachment.documentFileName);
        }
    }
};
MyProfileDocumentsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_5__["FilehandlerService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_9__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }
];
MyProfileDocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-profile-documents',
        template: _raw_loader_my_profile_documents_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_profile_documents_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyProfileDocumentsPage);



/***/ })

}]);
//# sourceMappingURL=my-profile-documents-my-profile-documents-module-es2015.js.map