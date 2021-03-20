(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-profile-my-profile-module"],{

/***/ "WGF/":
/*!***************************************************************!*\
  !*** ./src/app/pages/my-profile/my-profile-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MyProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function() { return MyProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile.page */ "bZC8");




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    },
    {
        path: 'my-profile-documents',
        loadChildren: () => __webpack_require__.e(/*! import() | my-profile-documents-my-profile-documents-module */ "my-profile-documents-my-profile-documents-module").then(__webpack_require__.bind(null, /*! ../my-profile-documents/my-profile-documents.module */ "1zJA")).then(m => m.MyProfileDocumentsPageModule)
    },
    {
        path: 'my-profile-details',
        loadChildren: () => __webpack_require__.e(/*! import() | my-profile-details-my-profile-details-module */ "my-profile-details-my-profile-details-module").then(__webpack_require__.bind(null, /*! ../my-profile-details/my-profile-details.module */ "9bqk")).then(m => m.MyProfileDetailsPageModule)
    },
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ "bZC8":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-profile/my-profile.page.ts ***!
  \*****************************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-profile.page.html */ "upvM");
/* harmony import */ var _my_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile.page.scss */ "kbZG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/photo.service */ "6/gD");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");









let MyProfilePage = class MyProfilePage {
    constructor(navCtrl, photoService, apiService, accountService, sharedDataService) {
        this.navCtrl = navCtrl;
        this.photoService = photoService;
        this.apiService = apiService;
        this.accountService = accountService;
        this.sharedDataService = sharedDataService;
        this.elementType = 'url';
        this.user = accountService.userValue;
        this.profile = sharedDataService.userProfile;
        accountService.user.subscribe((user) => {
            this.user = user;
        });
    }
    ngOnInit() {
        var _a;
        this.accountService.getUserProfile((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe((profile) => {
            this.profile = profile;
        }, error => {
        });
        this.apiService.getCompanyLanguageList(this.user.companyID).subscribe((user) => {
        }, error => {
        });
    }
    ionViewDidEnter() {
        this.user = this.accountService.userValue;
        this.profile = this.sharedDataService.userProfile;
    }
    scanQrCode() {
        this.navCtrl.navigateForward('/dashboard-qrscan');
    }
    onClose() {
        this.navCtrl.back();
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"] }
];
MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-profile',
        template: _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyProfilePage);



/***/ }),

/***/ "jHYc":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-profile/my-profile.module.ts ***!
  \*******************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-profile-routing.module */ "WGF/");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile.page */ "bZC8");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfilePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
    })
], MyProfilePageModule);



/***/ }),

/***/ "kbZG":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-profile/my-profile.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar.part-1 {\n  min-height: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n  --border-width: 0;\n  --border-color: transparent;\n}\nion-toolbar.part-1 ion-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 26px;\n  color: #171538;\n  padding: 0 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-toolbar.part-1 .scan-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 16px;\n}\nion-content {\n  text-align: center;\n}\nion-content .content {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\nion-content .content .fill-vertical-space {\n  display: flex;\n  flex: 1;\n}\nion-content .content .profile-img {\n  width: 128px;\n  height: 128px;\n  border-radius: 64px;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .content h3 {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 26px;\n  text-align: center;\n  color: #171538;\n}\nion-content .content .qr-code {\n  width: 170px;\n  height: 170px;\n}\nion-content .content .qr-code img {\n  width: 100%;\n  height: 100%;\n}\nion-content .content ion-button {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #2A6FDB;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFFSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBT0E7RUFDRSxrQkFBQTtBQUpGO0FBTUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU1JO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUFKTjtBQU9JO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUxOO0FBUUk7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU5OO0FBU0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVBOO0FBU007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVBSO0FBV0k7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFUTiIsImZpbGUiOiJteS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgJi5wYXJ0LTEge1xuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2Nhbi1pY29uIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5maWxsLXZlcnRpY2FsLXNwYWNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5wcm9maWxlLWltZyB7XG4gICAgICB3aWR0aDogMTI4cHg7XG4gICAgICBoZWlnaHQ6IDEyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNjRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG5cbiAgICAucXItY29kZSB7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgICBoZWlnaHQ6IDE3MHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogIzJBNkZEQjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gIH1cblxufVxuIl19 */");

/***/ }),

/***/ "upvM":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile/my-profile.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n    <ion-toolbar mode=\"ios\" class=\"part-1\">\n\n        <ion-title size=\"large\">{{'PROFILE.MY_PROFILE' | translate}}</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"small\" fill=\"clear\" (click)=\"scanQrCode()\">\n                <ion-icon class=\"scan-icon\" slot=\"icon-only\" src=\"./assets/icon/qrscan-dark.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"content\">\n\n        <div class=\"fill-vertical-space\"></div>\n\n        <ion-img\n                [src]=\"(profile&&profile.photo&&sharedDataService.globalDirectories)?(sharedDataService.globalDirectories.userDirectory+''+profile.photo):'./assets/images/ProfileNone.png'\"\n                class=\"profile-img\"></ion-img>\n        <h3 *ngIf=\"profile\">{{profile.userFullName}}</h3>\n\n        <ion-img *ngIf=\"profile&&profile.qrCodeImage;\"\n                 [src]=\"'data:image/jpeg;base64,'+ profile.qrCodeImage\"\n                 class=\"qr-code\"></ion-img>\n\n        <ion-button fill=\"clear\" routerLink=\"/tabs/my-profile/my-profile-details\">View / Update Settings</ion-button>\n        <ion-button fill=\"clear\" routerLink=\"/tabs/my-profile/my-profile-documents\">View My Signed Documents\n        </ion-button>\n\n        <div class=\"fill-vertical-space\"></div>\n\n    </div>\n\n</ion-content>\n");

/***/ })

}]);