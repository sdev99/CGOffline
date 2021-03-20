(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-details-my-profile-details-module"],{

/***/ "9bqk":
/*!***********************************************************************!*\
  !*** ./src/app/pages/my-profile-details/my-profile-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: MyProfileDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileDetailsPageModule", function() { return MyProfileDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_profile_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-profile-details-routing.module */ "dghS");
/* harmony import */ var _my_profile_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile-details.page */ "MqV+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









let MyProfileDetailsPageModule = class MyProfileDetailsPageModule {
};
MyProfileDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_profile_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfileDetailsPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_my_profile_details_page__WEBPACK_IMPORTED_MODULE_6__["MyProfileDetailsPage"]]
    })
], MyProfileDetailsPageModule);



/***/ }),

/***/ "MqV+":
/*!*********************************************************************!*\
  !*** ./src/app/pages/my-profile-details/my-profile-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: MyProfileDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileDetailsPage", function() { return MyProfileDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_profile_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-profile-details.page.html */ "sx5J");
/* harmony import */ var _my_profile_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile-details.page.scss */ "R+Bz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "flj8");









let MyProfileDetailsPage = class MyProfileDetailsPage {
    constructor(navCtrl, sharedDataService, accountService, utilService) {
        this.navCtrl = navCtrl;
        this.sharedDataService = sharedDataService;
        this.accountService = accountService;
        this.utilService = utilService;
        this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"];
        this.user = accountService.userValue;
        this.profile = sharedDataService.userProfile;
        if (this.profile) {
            this.offsetData = _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].findObj(sharedDataService.timeZoneList, 'timeZoneID', this.profile.timeZoneID);
            this.languageData = _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].findObj(sharedDataService.companyLanguageList, 'code', this.profile.mobileAppLanguageID);
        }
    }
    ngOnInit() {
        var _a;
        this.accountService.getUserProfile((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe((profile) => {
            this.profile = profile;
        }, error => {
        });
    }
    onClose() {
        this.navCtrl.back();
    }
    logout() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilService.presentLoadingWithOptions();
            this.accountService.logout((_a = this.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe(() => {
                Object.keys(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys).map((LocalStorageKey) => {
                    if (LocalStorageKey !== _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.GLOBAL_DIRECTORIES &&
                        LocalStorageKey !== _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.API_ACCESS_KEY &&
                        LocalStorageKey !== _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.API_TOKEN) {
                        localStorage.removeItem(LocalStorageKey);
                    }
                });
                this.sharedDataService.resetAllSharedVariable();
                this.utilService.hideLoading();
            }, error => {
                this.utilService.hideLoading();
            });
        });
    }
};
MyProfileDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
MyProfileDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-profile-details',
        template: _raw_loader_my_profile_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_profile_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyProfileDetailsPage);



/***/ }),

/***/ "R+Bz":
/*!***********************************************************************!*\
  !*** ./src/app/pages/my-profile-details/my-profile-details.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  display: flex;\n  flex-direction: column;\n}\nion-content .hr-line-full {\n  height: 1px;\n  margin: 5px 16px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\nion-content .fill-vertical-space {\n  display: flex;\n  flex: 1;\n}\nion-content .user-name {\n  margin-top: 12px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #444444;\n}\nion-content .user-name ion-button {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2A6FDB;\n}\nion-content .user-name ion-button ion-icon {\n  width: 16px;\n  height: 16px;\n}\nion-content .profile-value p {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  color: #A1A8CA;\n  margin-bottom: 5px;\n}\nion-content .profile-value h3 {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content .change-password-btn {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2A6FDB;\n}\nion-content .change-password-btn ion-icon {\n  width: 16px;\n  height: 16px;\n}\nion-content .logout-btn {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #A1A8CA;\n}\nion-content .logout-btn ion-icon {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LXByb2ZpbGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREo7QUFHSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFETjtBQUdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFEUjtBQU9JO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVFJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5OO0FBV0U7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVEo7QUFXSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVE47QUFhRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYSjtBQWFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFYTiIsImZpbGUiOiJteS1wcm9maWxlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC5oci1saW5lLWZ1bGwge1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogNXB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gIH1cblxuICAuZmlsbC12ZXJ0aWNhbC1zcGFjZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLnVzZXItbmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgY29sb3I6ICMyQTZGREI7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvZmlsZS12YWx1ZSB7XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogI0ExQThDQTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIH1cbiAgfVxuXG5cbiAgLmNoYW5nZS1wYXNzd29yZC1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzJBNkZEQjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5sb2dvdXQtYnRuIHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICNBMUE4Q0E7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "dghS":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/my-profile-details/my-profile-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MyProfileDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileDetailsPageRoutingModule", function() { return MyProfileDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_profile_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile-details.page */ "MqV+");




const routes = [
    {
        path: '',
        component: _my_profile_details_page__WEBPACK_IMPORTED_MODULE_3__["MyProfileDetailsPage"]
    }
];
let MyProfileDetailsPageRoutingModule = class MyProfileDetailsPageRoutingModule {
};
MyProfileDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfileDetailsPageRoutingModule);



/***/ }),

/***/ "sx5J":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile-details/my-profile-details.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n    <app-modal-header [modalTitle]=\"'PROFILE.MY_PROFILE' | translate\" (closeModal)=\"onClose()\"></app-modal-header>\n</ion-header>\n\n<ion-content mode=\"ios\">\n    <ion-list lines=\"none\" *ngIf=\"profile\">\n        <ion-item class=\"user-name\">\n            <ion-label>\n                {{profile.userFullName}}\n            </ion-label>\n            <ion-button slot=\"end\" fill=\"clear\" routerLink=\"/my-profile-edit\">\n                <ion-icon slot=\"start\" src=\"./assets/icon/pencil.svg\"></ion-icon>\n                Edit\n            </ion-button>\n        </ion-item>\n\n        <ng-container *ngIf=\"user\">\n            <ion-item class=\"profile-value\">\n                <ion-label>\n                    <p>EMAIL</p>\n                    <h3>{{profile.email}}</h3>\n                </ion-label>\n            </ion-item>\n\n            <ion-item class=\"profile-value\">\n                <ion-label>\n                    <p>PHONE</p>\n                    <h3>{{profile.phone}}</h3>\n                </ion-label>\n            </ion-item>\n\n            <div class=\"hr-line-full\"></div>\n\n            <ion-item class=\"profile-value\">\n                <ion-label>\n                    <p>TIMEZONE</p>\n                    <h3>{{offsetData?.timeZoneName}}</h3>\n                </ion-label>\n            </ion-item>\n\n            <ion-item class=\"profile-value\">\n                <ion-label>\n                    <p>MOBILE APP LANGUAGE</p>\n                    <h3>{{languageData?.languageName}}</h3>\n                </ion-label>\n            </ion-item>\n\n            <div class=\"hr-line-full\"></div>\n        </ng-container>\n\n        <ion-item class=\"profile-value\">\n            <ion-label>\n                <p>DEVICE UID</p>\n                <h3 class=\"selectable-text\">{{UtilService.modifyUDID(sharedDataService.deviceUID)}}</h3>\n            </ion-label>\n        </ion-item>\n\n        <ion-button fill=\"clear\" class=\"change-password-btn\" routerLink=\"/my-profile-changepass\">\n            <ion-icon src=\"./assets/icon/lock.svg\"></ion-icon>\n            Change Password\n        </ion-button>\n    </ion-list>\n\n    <div class=\"fill-vertical-space\"></div>\n\n    <div class=\"ion-text-center\">\n        <ion-button fill=\"clear\" class=\"logout-btn\" (click)=\"logout()\">\n            <ion-icon src=\"./assets/icon/logout.svg\"></ion-icon>\n            Log Out\n        </ion-button>\n    </div>\n</ion-content>\n\n\n");

/***/ })

}]);