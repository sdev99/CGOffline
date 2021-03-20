(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-induction-image-file-checkin-induction-image-file-module"],{

/***/ "7bSF":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin-induction-image-file/checkin-induction-image-file.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" [modalTitle]=\"'Induction'\"\n                      (closeModal)=\"onClose()\"></app-modal-header>\n\n    <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                         [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" modalSubTitle=\"Check In\"\n                         (closeModal)=\"onClose()\"></app-modal-header-dm>\n</ion-header>\n\n<ion-content [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n    <div class=\"content-container\">\n        <app-back-continue-toolbar *ngIf=\"sharedDataService.dedicatedMode\" (back)=\"onBack()\"\n                                   (continue)=\"onContinue()\"></app-back-continue-toolbar>\n\n        <div class=\"content\">\n            <h6 class=\"text-title-1\" *ngIf=\"!sharedDataService.dedicatedMode\">\n                Image\n            </h6>\n\n            <div class=\"image-view\" *ngIf=\"inductionItem\">\n                <ion-img [src]=\"sharedDataService.globalDirectories.documentDirectory+inductionItem.documentFileName\"\n                         (click)=\"fullScreenImg()\">\n                </ion-img>\n                <ion-button color=\"medium\" fill=\"clear\" class=\"full-screen-btn\" (click)=\"fullScreenImg()\">\n                    <ion-icon slot=\"icon-only\" name=\"scan-circle-sharp\"></ion-icon>\n                </ion-button>\n            </div>\n        </div>\n\n        <ion-footer mode=\"ios\" *ngIf=\"!sharedDataService.dedicatedMode\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\">Continue</ion-button>\n        </ion-footer>\n    </div>\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "BDwB":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-image-file/checkin-induction-image-file.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n  --overflow: auto;\n}\nion-content .content-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-content .content-container .content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\nion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode .image-view {\n  flex: 1;\n  max-height: 500px;\n  min-height: 220px;\n}\nion-content.dedicated-mode .image-view ion-img {\n  height: 100%;\n}\nion-content.dedicated-mode .full-screen-btn {\n  font-size: 40px;\n}\nion-content .text-title-1 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 31px;\n  text-align: center;\n  color: #444444;\n}\nion-content .image-view {\n  width: 90%;\n  margin: 5%;\n  min-height: 200px;\n  height: auto;\n  background-color: #F8F9FB;\n  display: flex;\n}\nion-content .image-view ion-img {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .full-screen-btn {\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNraW4taW5kdWN0aW9uLWltYWdlLWZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ047QUFHRTtFQUNFLHFCQUFBO0FBREo7QUFHSTtFQUNFLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRE47QUFHTTtFQUNFLFlBQUE7QUFEUjtBQUtJO0VBQ0UsZUFBQTtBQUhOO0FBT0U7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMSjtBQVFFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFOSjtBQVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBTk47QUFVRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBUkoiLCJmaWxlIjoiY2hlY2tpbi1pbmR1Y3Rpb24taW1hZ2UtZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1vdmVyZmxvdzogYXV0bztcblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuY29udGVudCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG5cbiAgJi5kZWRpY2F0ZWQtbW9kZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gICAgLmltYWdlLXZpZXcge1xuICAgICAgZmxleDogMTtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgbWluLWhlaWdodDogMjIwcHg7XG5cbiAgICAgIGlvbi1pbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZ1bGwtc2NyZWVuLWJ0biB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRleHQtdGl0bGUtMSB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgfVxuXG4gIC5pbWFnZS12aWV3IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogNSU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkI7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGlvbi1pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgfVxuXG4gIC5mdWxsLXNjcmVlbi1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "URU1":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-image-file/checkin-induction-image-file.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: CheckinInductionImageFilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionImageFilePage", function() { return CheckinInductionImageFilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkin_induction_image_file_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkin-induction-image-file.page.html */ "7bSF");
/* harmony import */ var _checkin_induction_image_file_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin-induction-image-file.page.scss */ "BDwB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/filehandler.service */ "rz59");










let CheckinInductionImageFilePage = class CheckinInductionImageFilePage {
    constructor(navCtrl, route, sharedDataService, utilService, accountService, filehandlerService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.sharedDataService = sharedDataService;
        this.utilService = utilService;
        this.accountService = accountService;
        this.filehandlerService = filehandlerService;
        if (!sharedDataService.dedicatedMode) {
            this.user = accountService.userValue;
        }
        this.route.queryParams.subscribe((parameters) => {
            var _a, _b, _c;
            const inductionContentItemIndex = parameters.inductionContentItemIndex;
            if (((_b = (_a = this.sharedDataService.checkInDetail) === null || _a === void 0 ? void 0 : _a.checkInInductionItems) === null || _b === void 0 ? void 0 : _b.length) > inductionContentItemIndex) {
                this.inductionItem = (_c = this.sharedDataService.checkInDetail) === null || _c === void 0 ? void 0 : _c.checkInInductionItems[inductionContentItemIndex];
            }
        });
    }
    ngOnInit() {
    }
    onBack() {
        this.navCtrl.back();
    }
    onClose() {
        if (this.sharedDataService.dedicatedMode) {
            this.navCtrl.navigateRoot('dashboard-dm', { replaceUrl: true });
        }
        else {
            this.navCtrl.navigateBack('/checkinout-confirm', { replaceUrl: true });
        }
    }
    onContinue() {
        var _a;
        let userId;
        if (this.sharedDataService.dedicatedMode) {
            userId = this.sharedDataService.dedicatedModeUserDetail.userId;
        }
        else {
            userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId;
        }
        this.sharedDataService.inductionNavigationProcess(userId, this.sharedDataService.inductionContentItemIndex);
    }
    fullScreenImg() {
        const url = this.sharedDataService.globalDirectories.documentDirectory + '' + this.inductionItem.documentFileName;
        this.filehandlerService.openFile(url, true);
    }
};
CheckinInductionImageFilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_9__["FilehandlerService"] }
];
CheckinInductionImageFilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkin-induction-image-file',
        template: _raw_loader_checkin_induction_image_file_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkin_induction_image_file_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckinInductionImageFilePage);



/***/ }),

/***/ "mpyD":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-image-file/checkin-induction-image-file.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CheckinInductionImageFilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionImageFilePageModule", function() { return CheckinInductionImageFilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkin_induction_image_file_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-induction-image-file-routing.module */ "wlt8");
/* harmony import */ var _checkin_induction_image_file_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-induction-image-file.page */ "URU1");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");









let CheckinInductionImageFilePageModule = class CheckinInductionImageFilePageModule {
};
CheckinInductionImageFilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkin_induction_image_file_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinInductionImageFilePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_checkin_induction_image_file_page__WEBPACK_IMPORTED_MODULE_6__["CheckinInductionImageFilePage"]]
    })
], CheckinInductionImageFilePageModule);



/***/ }),

/***/ "wlt8":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/checkin-induction-image-file/checkin-induction-image-file-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CheckinInductionImageFilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinInductionImageFilePageRoutingModule", function() { return CheckinInductionImageFilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkin_induction_image_file_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-induction-image-file.page */ "URU1");




const routes = [
    {
        path: '',
        component: _checkin_induction_image_file_page__WEBPACK_IMPORTED_MODULE_3__["CheckinInductionImageFilePage"]
    }
];
let CheckinInductionImageFilePageRoutingModule = class CheckinInductionImageFilePageRoutingModule {
};
CheckinInductionImageFilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinInductionImageFilePageRoutingModule);



/***/ })

}]);