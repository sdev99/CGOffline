(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs #tabs (ionTabsDidChange)=\"tabsDidChange($event)\">\n\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button *ngFor=\"let item of tabItems;\" [tab]=\"item.tab\" (click)=\"handleTabClick( $event)\">\n            <ion-icon\n                    [src]=\"'./assets/icon/tabs/'+(selectedTab===item.tab?item.selectedIcon:item.icon)\"></ion-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let TabsPage = class TabsPage {
    constructor(router, ngZone) {
        this.router = router;
        this.ngZone = ngZone;
        this.tabItems = [
            {
                icon: 'home.svg',
                selectedIcon: 'home-selected.svg',
                tab: 'dashboard'
            },
            {
                icon: 'paper.svg',
                selectedIcon: 'paper-selected.svg',
                tab: 'current-checkin'
            },
            {
                icon: 'checklist.svg',
                selectedIcon: 'checklist-selected.svg',
                tab: 'my-profile'
            }
        ];
        this.selectedTab = this.tabItems[0].tab;
        this.handleTabClick = (event) => {
            const { tab } = event.composedPath().find((element) => element.tagName === 'ION-TAB-BUTTON');
            this.tabItems.map((item) => {
                if (item.tab === tab) {
                    this.router.navigate(['tabs/' + tab]);
                }
            });
        };
    }
    ngOnDestroy() {
    }
    tabsDidChange(event) {
        this.ngZone.run(() => {
            this.selectedTab = event.tab;
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['tabs',] }]
};
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  width: 22px;\n  height: 22px;\n}\n\nion-tab-button.tab-selected ion-icon {\n  fill: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFTSTtFQUNFLG9CQUFBO0FBTk4iLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG59XG5cblxuaW9uLXRhYi1idXR0b24ge1xuICBpb24taWNvbiB7XG5cbiAgfVxuXG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICBpb24taWNvbiB7XG4gICAgICBmaWxsOiByZWQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../pages/dashboard/dashboard.module */ "/2RN")).then(m => m.DashboardPageModule),
            },
            {
                path: 'current-checkin',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-current-checkin-current-checkin-module */ "pages-current-checkin-current-checkin-module").then(__webpack_require__.bind(null, /*! ../pages/current-checkin/current-checkin.module */ "F4dX")).then(m => m.CurrentCheckinPageModule)
            },
            {
                path: 'my-profile',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-my-profile-my-profile-module */ "pages-my-profile-my-profile-module").then(__webpack_require__.bind(null, /*! ../pages/my-profile/my-profile.module */ "jHYc")).then(m => m.MyProfilePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/my-profile/my-profile-documents',
                pathMatch: 'full'
            }
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);