(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Zs+":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdown-field/dropdown-field.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item drop-down-item\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <ion-select [placeholder]=\"placeholder\" [formControlName]=\"inputName\"\n                [ngClass]=\"{'error': isError}\"\n                (ionChange)=\"valueChange.emit($event)\">\n        <ion-select-option *ngFor=\"let item of list\"\n                           [value]=\"listValueKey?item[listValueKey]:item\">{{listLabelKey ? item[listLabelKey] : item}}</ion-select-option>\n    </ion-select>\n</ion-item>\n";
      /***/
    },

    /***/
    "+z8m":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/screen-inner-loading/screen-inner-loading.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function z8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-container {\n  width: 100vw;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  flex: 1;\n  z-index: 999;\n  background-color: #FFFFFF;\n}\n.loader-container ion-icon {\n  width: 32px;\n  height: 32px;\n  -webkit-animation-name: rotate;\n  -webkit-animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NjcmVlbi1pbm5lci1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0FBQUoiLCJmaWxlIjoic2NyZWVuLWlubmVyLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4OiAxO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cbiAgaW9uLWljb24ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "/whK":
    /*!***************************************************************************!*\
      !*** ./src/app/components/add-choose-photo/add-choose-photo.component.ts ***!
      \***************************************************************************/

    /*! exports provided: AddChoosePhotoComponent */

    /***/
    function whK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddChoosePhotoComponent", function () {
        return AddChoosePhotoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_choose_photo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-choose-photo.component.html */
      "zc+a");
      /* harmony import */


      var _add_choose_photo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-choose-photo.component.scss */
      "1Y2S");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");

      var AddChoosePhotoComponent = /*#__PURE__*/function () {
        function AddChoosePhotoComponent(photoService) {
          _classCallCheck(this, AddChoosePhotoComponent);

          this.photoService = photoService;
          this.photoAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.photoRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.editPhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(AddChoosePhotoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addPhotoFromCamera",
          value: function addPhotoFromCamera() {
            var _this = this;

            this.photoService.takePhotoFromCamera(function (photo) {
              _this.photoAdded.emit(photo);
            });
          }
        }, {
          key: "addPhotoFromLibrary",
          value: function addPhotoFromLibrary() {
            var _this2 = this;

            this.photoService.takePhotoFromGallery(function (photo) {
              _this2.photoAdded.emit(photo);
            });
          }
        }]);

        return AddChoosePhotoComponent;
      }();

      AddChoosePhotoComponent.ctorParameters = function () {
        return [{
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"]
        }];
      };

      AddChoosePhotoComponent.propDecorators = {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        photoAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        photoRemoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        editPhoto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      AddChoosePhotoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-choose-photo',
        template: _raw_loader_add_choose_photo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_choose_photo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddChoosePhotoComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Volumes/Transcend/Projects/ArvinBiricik-Upwork/ComplianceGenie/ComplianceGenie/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0AsP":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section-title/section-title.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AsP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"section-item\">\n  <ion-label class=\"ion-text-wrap\">{{title}}</ion-label>\n</ion-item>\n";
      /***/
    },

    /***/
    "0C2h":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portrait-orientation/portrait-orientation.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-modal-header-dm (closeModal)=\"onClose()\"\n                       [modalTitle]=\"sharedDataService.dedicatedModeLocationUse?.locationName\"></app-modal-header-dm>\n</ion-header>\n\n<div class=\"content\">\n  <ion-img src=\"./assets/icon/portrait-mode.png\"></ion-img>\n  <ion-label>Please rotate the device to \"Portrait mode\"</ion-label>\n</div>\n";
      /***/
    },

    /***/
    "0bbC":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/portrait-orientation/portrait-orientation.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function bbC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: #F6F9FB;\n}\n.content ion-img {\n  width: 120px;\n  height: 120px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.content ion-label {\n  margin-top: 30px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 140%;\n  text-align: center;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRyYWl0LW9yaWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJwb3J0cmFpdC1vcmllbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGOUZCO1xuXG4gIGlvbi1pbWcge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "13gT":
    /*!***************************************!*\
      !*** ./src/app/pipes/safeurl.pipe.ts ***!
      \***************************************/

    /*! exports provided: SafeurlPipe */

    /***/
    function gT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeurlPipe", function () {
        return SafeurlPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SafeurlPipe = /*#__PURE__*/function () {
        function SafeurlPipe(sanitizer) {
          _classCallCheck(this, SafeurlPipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafeurlPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
          }
        }]);

        return SafeurlPipe;
      }();

      SafeurlPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafeurlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeurl'
      })], SafeurlPipe);
      /***/
    },

    /***/
    "1AA/":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/custom-ion-refresh-loader/custom-ion-refresh-loader.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20taW9uLXJlZnJlc2gtbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "1Y2S":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/add-choose-photo/add-choose-photo.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function Y2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".photo-buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 12px 0;\n}\n.photo-buttons ion-button {\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n  --color: #fff;\n  flex: 1;\n  height: 40px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 15px;\n  color: #FFFFFF;\n}\n.photo-buttons ion-button ion-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 12px;\n}\n.photo-buttons ion-button.left {\n  --background: #2A6FDB;\n}\n.photo-buttons ion-button.right {\n  --background: #575568;\n}\n.photo-buttons span {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n  margin: 0 10px;\n}\n.image-view {\n  width: 100%;\n  margin: 12px 0;\n  border-radius: 4px;\n  overflow: hidden;\n  min-height: 300px;\n}\n.image-view ion-img {\n  width: 100%;\n  height: calc(100% - 40px);\n  min-height: 260px;\n  background-color: #E6EFFB;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.image-view .close-btn {\n  width: 100%;\n  background-color: #D6E5F9;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.image-view .close-btn ion-button {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: #777595;\n}\n.image-view .close-btn ion-button.edit-btn {\n  height: 27px;\n  width: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1jaG9vc2UtcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBQUo7QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0UscUJBQUE7QUFGTjtBQUtJO0VBQ0UscUJBQUE7QUFITjtBQU9FO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFMSjtBQVNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFORjtBQVFFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFOSjtBQVNFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBUEo7QUFTSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUE47QUFTTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBUFIiLCJmaWxlIjoiYWRkLWNob29zZS1waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG90by1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTJweCAwO1xuXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcblxuICAgIGNvbG9yOiAjRkZGRkZGO1xuXG5cbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAmLmxlZnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMkE2RkRCO1xuICAgIH1cblxuICAgICYucmlnaHQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNTc1NTY4O1xuICAgIH1cbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxufVxuXG4uaW1hZ2UtdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEycHggMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcblxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVGRkI7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZFNUY5O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgICBjb2xvcjogIzc3NzU5NTtcblxuICAgICAgJi5lZGl0LWJ0biB7XG4gICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgd2lkdGg6IDI3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "1dRF":
    /*!************************************************************!*\
      !*** ./src/app/modals/home-exit-dm/home-exit-dm.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function dRF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  min-height: 70px;\n}\nion-header ion-toolbar {\n  height: 100%;\n  display: flex;\n}\nion-header ion-toolbar ion-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 23px;\n  color: #171538;\n}\nion-content {\n  padding-bottom: 32px;\n}\nion-content .description {\n  margin: 0;\n  padding: 38px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  color: #171538;\n}\nion-content ion-button {\n  display: block;\n  margin: auto;\n  width: 193px;\n  height: 42px;\n}\nion-content .cancel-btn {\n  margin: 12px auto;\n  --border-color: #2A6FDB;\n  --border-width: 2px;\n  --border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtZXhpdC1kbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ047QUFLQTtFQUNFLG9CQUFBO0FBRkY7QUFJRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFKSiIsImZpbGUiOiJob21lLWV4aXQtZG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuICB9XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAzOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMxNzE1Mzg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDE5M3B4O1xuICAgIGhlaWdodDogNDJweDtcbiAgfVxuXG4gIC5jYW5jZWwtYnRuIHtcbiAgICBtYXJnaW46IDEycHggYXV0bztcbiAgICAtLWJvcmRlci1jb2xvcjogIzJBNkZEQjtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "2Rin":
    /*!******************************************!*\
      !*** ./src/app/services/util.service.ts ***!
      \******************************************/

    /*! exports provided: UtilService */

    /***/
    function Rin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _enum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./enum.service */
      "AIDl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _validator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./validator.service */
      "Npox");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _static_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./static-data.service */
      "hYb0");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var UtilService_1;

      Array.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
      };

      var UtilService = UtilService_1 = /*#__PURE__*/function () {
        function UtilService(loadingController, file, alertController, validatorService, navCtrl) {
          var _this3 = this;

          _classCallCheck(this, UtilService);

          this.loadingController = loadingController;
          this.file = file;
          this.alertController = alertController;
          this.validatorService = validatorService;
          this.navCtrl = navCtrl;
          this.loading = null;
          this.loadingStarting = false;
          this.loadingStopping = false;
          this.isLoadingRequestedInitiated = false;

          this.addFormControlsForVisibleFields = function (sections, formGroup) {
            var questionElementIds = [];

            if (sections) {
              sections.map(function (section, sectionIndex) {
                // No need to add form control for Risk Assessment section because we are not using form controls, we using ngModel
                if (section.isRiskAssessmentSection) {
                  var tasks = section.tasks;
                  tasks.map(function (task, questionIndex) {
                    var elementId = UtilService_1.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, task.taskId);

                    if (_this3.shouldShowSection(section) && _this3.shouldShowQuestion(task)) {
                      if (questionElementIds.indexOf(elementId) !== -1) {
                        questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
                      }

                      questionElementIds.push(elementId);
                    } else {
                      var indexOfElement = questionElementIds.indexOf(elementId);

                      if (indexOfElement !== -1) {
                        questionElementIds.splice(indexOfElement, 1);
                      }
                    }
                  });
                } else {
                  var questions = section.questions;
                  questions.map(function (question, questionIndex) {
                    var elementId = UtilService_1.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, question.questionId);

                    if (section.isAccidentReportSection && question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.LocationSelection) {
                      var controlName = UtilService_1.FCUniqueName(section, question);

                      if (_this3.shouldShowSection(section) && _this3.shouldShowQuestion(question)) {
                        formGroup.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
                        formGroup.addControl(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].AccidentCustomLocationControlsName.PlaceNotintheList, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false));
                        formGroup.addControl(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].AccidentCustomLocationControlsName.LocationName, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));

                        if (questionElementIds.indexOf(elementId) !== -1) {
                          questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
                        }

                        questionElementIds.push(elementId);
                      } else {
                        _this3.removeFieldIfAdded(formGroup, controlName);

                        _this3.removeFieldIfAdded(formGroup, _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].AccidentCustomLocationControlsName.PlaceNotintheList);

                        _this3.removeFieldIfAdded(formGroup, _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].AccidentCustomLocationControlsName.LocationName);

                        var indexOfElement = questionElementIds.indexOf(elementId);

                        if (indexOfElement !== -1) {
                          questionElementIds.splice(indexOfElement, 1);
                        }
                      }
                    } else {
                      if (_this3.shouldShowSection(section) && _this3.shouldShowQuestion(question)) {
                        _this3.addDynamicFormControlsIfNotExist(section, sectionIndex, questionIndex, question, formGroup, function (value) {
                          _this3.checkAndApplyLogic(question, value, formGroup, sections, sectionIndex);
                        });

                        if (questionElementIds.indexOf(elementId) !== -1) {
                          questionElementIds.splice(questionElementIds.indexOf(elementId), 1);
                        }

                        questionElementIds.push(elementId);
                      } else {
                        var _controlName = UtilService_1.FCUniqueName(section, question);

                        _this3.removeFieldIfAdded(formGroup, _controlName);

                        var _indexOfElement = questionElementIds.indexOf(elementId);

                        if (_indexOfElement !== -1) {
                          questionElementIds.splice(_indexOfElement, 1);
                        }
                      }
                    }
                  });
                }
              });
            }

            UtilService_1.fireCallBack(_this3.questionElementIdsUpdate, questionElementIds);
          };
          /**
           * Reset all applied logics for passed question
           * @param question
           * @param sections
           */


          this.resetAppliedLogicByQuestion = function (question, sections, currentSectionIndex, formGroup) {
            var questionLogics = question.questionLogics; // Reset applied logic from this question

            questionLogics.some(function (logic) {
              var _a;

              if (_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.LogicApplicableForQuestionTypes.indexOf(question.selectedAnswerTypeId) !== -1) {
                if (logic.questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.MarkAsFailed) {
                  delete question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed];
                } else if (logic.questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Notify) {
                  delete question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Notify];
                } else {
                  var questionActionOnID = logic.questionActionOnID;
                  var sectionAndQuestionNo = questionActionOnID.split('-');
                  var sectionIndex = sectionAndQuestionNo[0] - 1;
                  var questionIndex = sectionAndQuestionNo[1] - 1;
                  var sectionObject;
                  var questionObject; // For find current index to insert new duplicate item

                  var currentIndexOfSection = 0;
                  var currentIndexOfQuestion = 0;

                  if (sectionIndex >= 0) {
                    // Find Section/Question Index that was changed by current logic
                    for (var sectionKey = 0; sectionKey < sections.length; sectionKey++) {
                      var sectionItem = sections[sectionKey];
                      var isQuestionChanged = sectionIndex >= 0 && questionIndex >= 0;
                      var isSectionChanged = sectionIndex >= 0 && questionIndex < 0;

                      if (isQuestionChanged) {
                        for (var questionKey = 0; questionKey < sectionItem.questions.length; questionKey++) {
                          var questionItem = sectionItem.questions[questionKey];

                          if (questionItem['applied_relation_ids'] && logic['applied_relation_id'] && questionItem['applied_relation_ids'].indexOf(logic['applied_relation_id']) != -1) {
                            questionObject = questionItem;
                            currentIndexOfSection = sectionKey;
                            currentIndexOfQuestion = questionKey;
                            break;
                          }
                        }
                      } else if (isSectionChanged) {
                        if (sectionItem['applied_relation_ids'] && logic['applied_relation_id'] && sectionItem['applied_relation_ids'].indexOf(logic['applied_relation_id']) != -1) {
                          sectionObject = sectionItem;
                          currentIndexOfSection = sectionKey;
                          break;
                        }
                      }
                    } // let duplicateSectionCount = 0;
                    // for (let sectionKey = 0; sectionKey < sections.length; sectionKey++) {
                    // 	const sectionItem = sections[sectionKey];
                    // 	if (sectionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                    // 		duplicateSectionCount++;
                    // 	}
                    // 	if (sectionKey === sectionIndex + duplicateSectionCount) {
                    // 		if (sectionIndex >= 0 && questionIndex >= 0) {
                    // 			let duplicateQuestionCount = 0;
                    // 			for (let questionKey = 0; questionKey < sectionItem.questions.length; questionKey++) {
                    // 				const questionItem = sectionItem.questions[questionKey];
                    // 				if (questionItem[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]) {
                    // 					duplicateQuestionCount++;
                    // 				}
                    // 				if (questionKey === questionIndex + duplicateQuestionCount) {
                    // 					questionObject = questionItem;
                    // 					currentIndexOfSection = sectionIndex + duplicateSectionCount;
                    // 					currentIndexOfQuestion = questionIndex + duplicateQuestionCount;
                    // 					break;
                    // 				}
                    // 			}
                    // 		} else if (sectionIndex >= 0 && questionIndex < 0) {
                    // 			sectionObject = sectionItem;
                    // 			currentIndexOfSection = sectionIndex + duplicateSectionCount;
                    // 		}
                    // 		break;
                    // 	}
                    // }

                  }

                  if (logic.questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Show) {
                    if (sectionObject) {
                      delete sectionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.ShowForLogic];
                    } else if (questionObject) {
                      delete questionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.ShowForLogic]; //Reset for sublogic applied

                      var controlName = UtilService_1.FCUniqueName(sections[currentSectionIndex], questionObject);
                      (_a = formGroup.controls[controlName]) === null || _a === void 0 ? void 0 : _a.reset();

                      _this3.resetAppliedLogicByQuestion(questionObject, sections, currentSectionIndex, formGroup);
                    }
                  } else if (logic.questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Hide) {
                    if (sectionObject) {
                      delete sectionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.HideForLogic];
                    } else if (questionObject) {
                      delete questionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.HideForLogic];
                    }
                  } else if (logic.questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Duplicate) {
                    if (sectionObject) {
                      sections.some(function (section, key) {
                        var uniquePreString = question.questionId + '' + logic.questionLogicId;

                        if (section[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate] && section[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName] === uniquePreString) {
                          sections.splice(key, 1);
                        }
                      });
                    } else if (questionObject) {
                      sections[currentIndexOfSection].questions.some(function (questionInner, key) {
                        var uniquePreString = question.questionId + '' + logic.questionLogicId;

                        if (questionInner[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate] && questionInner[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName] === uniquePreString) {
                          sections[currentIndexOfSection].questions.splice(key, 1);
                        }
                      });
                    }
                  }
                }
              }
            }); // -- End
          }; // Extract id from string (eg. L|10)


          this.getRelevantEntityId = function (entityId) {
            var response = {
              InventoryID: null,
              ProjectID: null,
              LocationID: null,
              DocumentID: null,
              FormID: null
            };
            var entityIdSplits = entityId.split('|');

            if (entityIdSplits && entityIdSplits.length >= 2) {
              if (entityIdSplits[0] === 'I') {
                response.InventoryID = parseInt(entityIdSplits[1], 0);
              } else if (entityIdSplits[0] === 'P') {
                response.ProjectID = parseInt(entityIdSplits[1], 0);
              } else if (entityIdSplits[0] === 'L') {
                response.LocationID = parseInt(entityIdSplits[1], 0);
              } else if (entityIdSplits[0] === 'F') {
                response.FormID = parseInt(entityIdSplits[1], 0);
              } else if (entityIdSplits[0] === 'D') {
                response.DocumentID = parseInt(entityIdSplits[1], 0);
              } else {
                response.LocationID = parseInt(entityIdSplits[1], 0);
              }
            }

            return response;
          };
        }

        _createClass(UtilService, [{
          key: "dataUriToFile",
          value: function dataUriToFile(url, filename, mimeType) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var dirpath, dirUrl, retrievedFile, byteString, arrayBuffer, int8Array, i, imageBlob;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(_static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].videoFormats.indexOf(url.split('.').pop().toLowerCase()) !== -1)) {
                          _context.next = 18;
                          break;
                        }

                        dirpath = url.substr(0, url.lastIndexOf('/') + 1);
                        dirpath = dirpath.includes('file://') ? dirpath : 'file://' + dirpath;
                        _context.prev = 3;
                        _context.next = 6;
                        return this.file.resolveDirectoryUrl(dirpath);

                      case 6:
                        dirUrl = _context.sent;
                        _context.next = 9;
                        return this.file.getFile(dirUrl, filename, {});

                      case 9:
                        retrievedFile = _context.sent;
                        retrievedFile.file(function (data) {
                          // if (data.size > MAX_FILE_SIZE) return this.presentAlert("Error", "You cannot upload more than 5mb.");
                          // if (data.type !== ALLOWED_MIME_TYPE) return this.presentAlert("Error", "Incorrect file type.");
                          var selectedVideo = retrievedFile.nativeURL;
                          resolve(selectedVideo);
                        });
                        _context.next = 16;
                        break;

                      case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](3);
                        reject();

                      case 16:
                        _context.next = 24;
                        break;

                      case 18:
                        byteString = window.atob(url.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
                        arrayBuffer = new ArrayBuffer(byteString.length);
                        int8Array = new Uint8Array(arrayBuffer);

                        for (i = 0; i < byteString.length; i++) {
                          int8Array[i] = byteString.charCodeAt(i);
                        }

                        imageBlob = new Blob([int8Array], {
                          type: mimeType
                        });
                        resolve(imageBlob);

                      case 24:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[3, 13]]);
              }));
            });
          }
        }, {
          key: "Uniqueid",
          value: function Uniqueid() {
            // always start with a letter (for DOM friendlyness)
            var idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65));

            do {
              // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
              var ascicode = Math.floor(Math.random() * 42 + 48);

              if (ascicode < 58 || ascicode > 64) {
                // exclude all chars between : (58) and @ (64)
                idstr += String.fromCharCode(ascicode);
              }
            } while (idstr.length < 32);

            return idstr;
          }
        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoadingRequestedInitiated = true;

                      if (!(!this.loading && !this.loadingStarting)) {
                        _context2.next = 11;
                        break;
                      }

                      this.loadingStopping = false;
                      this.loadingStarting = true;
                      _context2.next = 6;
                      return this.loadingController.create({
                        cssClass: 'my-loading-class',
                        spinner: null,
                        message: '<ion-icon src="./assets/icon/Loader.svg"/>',
                        translucent: false,
                        backdropDismiss: false,
                        mode: 'md'
                      });

                    case 6:
                      this.loading = _context2.sent;
                      this.loadingStarting = false;
                      _context2.next = 10;
                      return this.loading.present();

                    case 10:
                      if (this.loadingStopping) {
                        this.hideLoading();
                      }

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            var _this5 = this;

            this.isLoadingRequestedInitiated = false;
            setTimeout(function () {
              if (!_this5.isLoadingRequestedInitiated) {
                _this5.loadingStopping = true;

                if (_this5.loading) {
                  _this5.loading.dismiss();

                  _this5.loading = null;
                }
              }
            }, 500);
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: title,
                        message: message,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: callBack
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getCurrentTimeStamp",
          value: function getCurrentTimeStamp() {
            return Math.floor(Date.now());
          }
        }, {
          key: "getCurrentDateTIme",
          value: function getCurrentDateTIme() {
            return new Date().toISOString().slice(0, 19).replace('T', ' ');
          }
        }, {
          key: "shouldShowSection",
          value: function shouldShowSection(section) {
            return section[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.ShowForLogic] ? true : section[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.HideForLogic] ? false : !section.sectionIsHidden;
          }
        }, {
          key: "shouldShowQuestion",
          value: function shouldShowQuestion(question) {
            return question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.ShowForLogic] ? true : question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.HideForLogic] ? false : !question.questionIsHidden;
          }
        }, {
          key: "addDynamicFormControlsIfNotExist",
          value: function addDynamicFormControlsIfNotExist(section, sectionIndex, questionIndex, question, formGroup) {
            var onValueChange = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

            var _a;

            var validators = [];

            if (question.questionIsRequired) {
              validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            }

            if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.NumberFieldDecimal) {
              validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('\\d+([.]\\d+)?'));
            }

            if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.NumberFieldInteger) {
              validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*'));
            }

            var formControlName = UtilService_1.FCUniqueName(section, question);

            if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.MultipleChoiceSet) {
              var checkboxFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({}, {
                validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null
              });

              if (question.answerChoiceAttributes) {
                question.answerChoiceAttributes.map(function (choice) {
                  checkboxFormGroup.addControl(UtilService_1.SubFCName(formControlName, choice.answerChoiceAttributeId), new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false));
                });
              }

              checkboxFormGroup.valueChanges.subscribe(onValueChange);

              if (!formGroup.controls[formControlName]) {
                formGroup.addControl(formControlName, checkboxFormGroup);
              }
            } else if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.BodyPartControl) {
              var _checkboxFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({}, {
                validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null
              });

              (_a = question.bodyParts) === null || _a === void 0 ? void 0 : _a.map(function (bodyPartGroup) {
                bodyPartGroup.parts.map(function (part) {
                  _checkboxFormGroup.addControl(UtilService_1.SubFCName(formControlName, part.id), new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false));
                });
              });
              formGroup.addControl(formControlName, _checkboxFormGroup);
            } else if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.ConfirmationBox) {
              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose(validators));
              control.valueChanges.subscribe(onValueChange);

              if (!formGroup.controls[formControlName]) {
                formGroup.addControl(formControlName, control);
              }
            } else {
              var _control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose(validators));

              _control.valueChanges.subscribe(onValueChange);

              if (!formGroup.controls[formControlName]) {
                formGroup.addControl(formControlName, _control);
              }
            }

            if (question.shouldShowOptionalComment) {
              var formControlAdditionalNote = UtilService_1.FCNameAdditioanlNoteUq(formControlName);

              if (!formGroup.controls[formControlAdditionalNote]) {
                formGroup.addControl(formControlAdditionalNote, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
              }
            }
          }
          /**
           * Check logic for question and apply it to relevent section/question
           * @param question
           * @param value
           * @param formGroup
           * @param sections
           */

        }, {
          key: "checkAndApplyLogic",
          value: function checkAndApplyLogic(question, value, formGroup, sections, sectionIndex) {
            var _this6 = this;

            if (question.allowQuestionLogic) {
              var questionLogics = question.questionLogics;
              this.resetAppliedLogicByQuestion(question, sections, sectionIndex, formGroup); // check which logic applicable

              questionLogics.some(function (logic) {
                if (_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.LogicApplicableForQuestionTypes.indexOf(question.selectedAnswerTypeId) !== -1) {
                  var isActionMeet = false;

                  if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.SingleChoiceSet) {
                    var questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;
                    var questionChoiceSetTypeID = logic.questionChoiceSetTypeID;
                    var valueToBeCompare = question.answerChoiceAttributes[questionChoiceSetSequence]; // Check if condition meet

                    var isSelectedAndMeet = questionChoiceSetTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.SingleMultipleChoiceOperationType.Selected && value === valueToBeCompare.answerChoiceAttributeId;
                    var isNotSelectedAndMeet = questionChoiceSetTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && value !== valueToBeCompare.answerChoiceAttributeId;
                    isActionMeet = isSelectedAndMeet || isNotSelectedAndMeet;
                  } else if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.MultipleChoiceSet) {
                    var _questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;

                    var _questionChoiceSetTypeID = logic.questionChoiceSetTypeID;

                    var checkBoxValueSelected = value[Object.keys(value)[_questionChoiceSetSequence]]; // Check if condition meet


                    var _isSelectedAndMeet = _questionChoiceSetTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.SingleMultipleChoiceOperationType.Selected && checkBoxValueSelected;

                    var _isNotSelectedAndMeet = _questionChoiceSetTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && !checkBoxValueSelected;

                    isActionMeet = _isSelectedAndMeet || _isNotSelectedAndMeet;
                  } else if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.ConfirmationBox) {
                    var _questionChoiceSetSequence2 = logic.questionChoiceSetSequence - 1;

                    var _questionChoiceSetTypeID2 = logic.questionChoiceSetTypeID;
                    var _valueToBeCompare = question.answerChoiceAttributes[_questionChoiceSetSequence2]; // Check if condition meet

                    var _isSelectedAndMeet2 = _questionChoiceSetTypeID2 === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.SingleMultipleChoiceOperationType.Selected && (value || value === 'true');

                    var _isNotSelectedAndMeet2 = _questionChoiceSetTypeID2 === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && !value;

                    isActionMeet = _isSelectedAndMeet2 || _isNotSelectedAndMeet2;
                  } else {
                    var questionOperatorTypeID = logic.questionOperatorTypeID;
                    var valueToBeCompared;
                    var selectedValue;
                    var dateObjToBeCompared;
                    var selectedDateObj;
                    var isDateTimeObject = false;

                    switch (question.selectedAnswerTypeId) {
                      case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.NumberFieldInteger:
                        valueToBeCompared = parseInt(logic.integerValue, 0);
                        selectedValue = parseInt(value, 0);
                        break;

                      case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.NumberFieldDecimal:
                        valueToBeCompared = parseFloat(logic.decimalValue);
                        selectedValue = parseFloat(value);
                        break;

                      case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.DateTimeField:
                        var dtDateValue = logic.dateValue;
                        var dtTimeValue = logic.timeValue;
                        var dtHourFormatID = logic.hourFormatID;
                        var dtDateSplit = dtDateValue.split('/');
                        var dtTimeValueSplit = dtTimeValue.split(' ');
                        valueToBeCompared = dtDateSplit[2] + '-' + dtDateSplit[1] + '-' + dtDateSplit[0] + ' ' + dtTimeValueSplit[0] + ' ' + (dtHourFormatID === 1 ? 'AM' : 'PM');
                        selectedValue = moment__WEBPACK_IMPORTED_MODULE_6__(value).utc().format(_static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].dateTimeFormatAMPM);
                        dateObjToBeCompared = moment__WEBPACK_IMPORTED_MODULE_6__(valueToBeCompared, _static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].dateTimeFormatAMPM);
                        selectedDateObj = moment__WEBPACK_IMPORTED_MODULE_6__(selectedValue, _static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].dateTimeFormatAMPM);
                        isDateTimeObject = true;
                        break;

                      case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.DateField:
                        var dateValue = logic.dateValue;
                        var dateSplit = dateValue.split('/');
                        valueToBeCompared = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0];
                        selectedValue = moment__WEBPACK_IMPORTED_MODULE_6__(value).utc().format(_static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].dateFormat);
                        dateObjToBeCompared = moment__WEBPACK_IMPORTED_MODULE_6__(valueToBeCompared, _static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].dateFormat);
                        selectedDateObj = moment__WEBPACK_IMPORTED_MODULE_6__(selectedValue, _static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].dateFormat);
                        isDateTimeObject = true;
                        break;

                      case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].CustomAnswerType.TimeField:
                        var timeValue = logic.timeValue;
                        var hourFormatID = logic.hourFormatID;
                        var timeValueSplit = timeValue.split(' ');
                        valueToBeCompared = timeValueSplit[0] + '' + (hourFormatID === 1 ? 'AM' : 'PM');
                        selectedValue = moment__WEBPACK_IMPORTED_MODULE_6__(value).utc().format(_static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].timeFormat);
                        dateObjToBeCompared = moment__WEBPACK_IMPORTED_MODULE_6__(valueToBeCompared, _static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].timeFormat);
                        selectedDateObj = moment__WEBPACK_IMPORTED_MODULE_6__(selectedValue, _static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].timeFormat);
                        isDateTimeObject = true;
                        break;
                    }

                    if (isDateTimeObject && (questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.EqualTo && selectedDateObj.isSame(dateObjToBeCompared) || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.LessThen && selectedDateObj.isBefore(dateObjToBeCompared) || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.GreaterThen && selectedDateObj.isAfter(dateObjToBeCompared) || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.LessThenEqualTo && selectedDateObj.isSameOrBefore(dateObjToBeCompared) || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.GreaterThenEqualTo && selectedDateObj.isSameOrAfter(dateObjToBeCompared) || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.NotEqualTo && !selectedDateObj.isSame(dateObjToBeCompared))) {
                      isActionMeet = true;
                    } else if (questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.EqualTo && selectedValue === valueToBeCompared || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.LessThen && selectedValue < valueToBeCompared || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.GreaterThen && selectedValue > valueToBeCompared || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.LessThenEqualTo && selectedValue <= valueToBeCompared || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.GreaterThenEqualTo && selectedValue >= valueToBeCompared || questionOperatorTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.OtherValueOperationType.NotEqualTo && selectedValue !== valueToBeCompared) {
                      isActionMeet = true;
                    }
                  }

                  if (isActionMeet) {
                    _this6.applyLogicOn(question, logic, sections, sectionIndex);
                  }
                }
              });
              this.addFormControlsForVisibleFields(sections, formGroup);
            }
          }
        }, {
          key: "applyLogicOn",
          value: function applyLogicOn(question, logic, sections, currentSectionIndex) {
            if (logic.questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.MarkAsFailed) {
              question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
            } else if (logic.questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Notify) {
              question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Notify] = true;
            } else {
              var questionActionTypeID = logic.questionActionTypeID;
              var questionActionOnID = logic.questionActionOnID;
              var sectionAndQuestionNo = questionActionOnID.split('-');
              var sectionIndex = sectionAndQuestionNo[0] - 1;
              var questionIndex = sectionAndQuestionNo[1] - 1;
              var sectionObject;
              var questionObject; // For find current index to insert new duplicate item

              var currentIndexOfSection = 0;
              var currentIndexOfQuestion = 0; // TO find original question/section index except duplicate question/section index

              if (sectionIndex >= 0) {
                var duplicateSectionCount = 0;
                var currentSection = sections[currentSectionIndex];
                var isValueFound = false;

                for (var sectionKey = 0; sectionKey < sections.length; sectionKey++) {
                  var sectionItem = sections[sectionKey];

                  if (sectionItem[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate]) {
                    duplicateSectionCount++;
                  }

                  if (sectionKey === sectionIndex + duplicateSectionCount) {
                    if (sectionIndex >= 0 && questionIndex >= 0) {
                      var duplicateQuestionCount = 0;
                      var questions = void 0;

                      if (sectionItem.sectionId === currentSection.sectionId) {
                        questions = currentSection.questions;
                      } else {
                        questions = sectionItem.questions;
                      }

                      for (var questionKey = 0; questionKey < questions.length; questionKey++) {
                        var questionItem = questions[questionKey];

                        if (questionItem[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate]) {
                          duplicateQuestionCount++;
                        }

                        if (questionKey === questionIndex + duplicateQuestionCount) {
                          questionObject = questionItem;
                          currentIndexOfSection = sectionKey;
                          currentIndexOfQuestion = questionKey;
                          isValueFound = true;
                          break;
                        }
                      }
                    } else if (sectionIndex >= 0 && questionIndex < 0) {
                      sectionObject = sectionItem;
                      currentIndexOfSection = sectionKey;
                      isValueFound = true;
                      break;
                    }
                  }

                  if (isValueFound) {
                    break;
                  }
                }
              }

              if (questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Show) {
                if (sectionObject) {
                  sectionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.ShowForLogic] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
                } else if (questionObject) {
                  questionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.ShowForLogic] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
                }
              } else if (questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Hide) {
                if (sectionObject) {
                  sectionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.HideForLogic] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
                } else if (questionObject) {
                  questionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.HideForLogic] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
                }
              } else if (questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Duplicate) {
                if (sectionObject) {
                  var duplicateSection = JSON.parse(JSON.stringify(sectionObject));
                  duplicateSection[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate] = true;
                  duplicateSection[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName] = question.questionId + '' + logic.questionLogicId;
                  sections.splice(currentIndexOfSection + 1, 0, duplicateSection);
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(duplicateSection, logic);
                } else if (questionObject) {
                  var duplicateQuestion = JSON.parse(JSON.stringify(questionObject));
                  duplicateQuestion[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate] = true;
                  duplicateQuestion[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName] = question.questionId + '' + logic.questionLogicId;
                  sections[currentIndexOfSection].questions.splice(currentIndexOfQuestion + 1, 0, duplicateQuestion);
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(duplicateQuestion, logic);
                }
              } else if (questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.MarkAsFailed) {
                if (sectionObject) {
                  sectionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
                } else if (questionObject) {
                  questionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
                }
              } else if (questionActionTypeID === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionType.Notify) {
                if (sectionObject) {
                  sectionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Notify] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(sectionObject, logic);
                } else if (questionObject) {
                  questionObject[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Notify] = true;
                  this.setUniqueRelationIdOnLogicAndQuestionOrSection(questionObject, logic);
                }
              }
            }
          }
        }, {
          key: "setUniqueRelationIdOnLogicAndQuestionOrSection",
          value: function setUniqueRelationIdOnLogicAndQuestionOrSection(question, logic) {
            var uniqueId = this.Uniqueid();
            logic['applied_relation_id'] = uniqueId;
            var relationIds = question['applied_relation_ids'];

            if (!relationIds) {
              relationIds = [];
            }

            relationIds.push(uniqueId);
            question['applied_relation_ids'] = relationIds;
          }
        }, {
          key: "removeFieldIfAdded",
          value: function removeFieldIfAdded(formGroup, formControlName) {
            if (formGroup.controls[formControlName]) {
              formGroup.removeControl(formControlName);
            }
          }
        }, {
          key: "getEntityIdFromId",
          value: function getEntityIdFromId(locationDetails) {
            var entityId = '';

            if (locationDetails.locationID > 0) {
              entityId = 'L|' + locationDetails.locationID;
            } else if (locationDetails.projectID > 0) {
              entityId = 'P|' + locationDetails.projectID;
            } else if (locationDetails.inventoryItemID > 0) {
              entityId = 'I|' + locationDetails.inventoryItemID;
            }

            return entityId;
          }
        }], [{
          key: "modifyUDID",
          value: function modifyUDID(udid) {
            if (!udid || udid.length === 0) {
              return 'This device cannot be used in Dedicated Mode';
            }

            return udid;
          }
        }, {
          key: "isLocalHost",
          value: function isLocalHost() {
            return !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production && !_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].isNative;
          }
        }, {
          key: "getColorForAnswerChoice",
          value: function getColorForAnswerChoice(color) {
            switch (color) {
              case 'black':
                return '#000000';

              case 'green':
                return '#7ED321';

              case 'gold':
                return '#df951b';

              case 'yellow':
                return '#d1c20b';

              case 'red':
                return '#D0021B';

              case 'blue':
                return '#4A90E2';

              case 'grey':
                return '#9f9898';

              case 'turquoise':
                return '#50E3C2';

              case 'purple':
                return '#9150E3';
            }

            return color;
          }
        }, {
          key: "InductionContentTypeScreenIdentify",
          value: function InductionContentTypeScreenIdentify(contentType) {
            var isDedicatedMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var routeName = '';

            switch (contentType) {
              case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].InductionContentTypes.VIDEO_FILE:
                routeName = 'checkin-induction-video-file';
                break;

              case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].InductionContentTypes.IMAGE_FILE:
                routeName = 'checkin-induction-image-file';
                break;

              case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].InductionContentTypes.RICH_TEXT:
                routeName = 'checkin-induction-rich-text';
                break;

              case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].InductionContentTypes.FORM:
                // routeName = 'checkin-induction-form';
                routeName = isDedicatedMode ? 'form-cover-dm' : 'form-cover';
                break;

              case _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].InductionContentTypes.VISITOR_AGREEMENT:
                routeName = 'checkin-induction-va';
                break;
            }

            return routeName;
          }
        }, {
          key: "IsFileImageType",
          value: function IsFileImageType() {
            var fileNameOrExtension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var _a;

            var type = (_a = fileNameOrExtension === null || fileNameOrExtension === void 0 ? void 0 : fileNameOrExtension.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            var isImage = false;

            switch (type) {
              case 'png':
              case 'jpeg':
              case 'jpg':
              case 'gif':
              case 'image':
                isImage = true;
                break;

              default:
            }

            return isImage;
          }
        }, {
          key: "FileIcon",
          value: function FileIcon() {
            var fileNameOrExtension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var _a;

            var iconName = '';
            var type = (_a = fileNameOrExtension === null || fileNameOrExtension === void 0 ? void 0 : fileNameOrExtension.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();

            switch (type) {
              case 'xlsx':
              case 'document':
                iconName = 'attachment1';
                break;

              case 'pdf':
                iconName = 'attachment2';
                break;

              case 'form':
                iconName = 'attachment3';
                break;

              case 'docx':
              case 'folder':
                iconName = 'attachment4';
                break;

              case 'png':
              case 'jpeg':
              case 'jpg':
              case 'gif':
              case 'image':
                iconName = 'attachment5';
                break;

              case 'video':
                iconName = 'attachment6';
                break;

              default:
                iconName = 'attachment2';
            }

            return './assets/icon/' + iconName + '.svg';
          }
        }, {
          key: "findObj",
          value: function findObj(list, key, value) {
            var defaultIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            if (list && list.length > 0) {
              var resultData = list[defaultIndex];
              list.some(function (data) {
                if (data[key] === value) {
                  resultData = data;
                  return true;
                }
              });
              return resultData;
            }

            return null;
          }
        }, {
          key: "randomBoolean",
          value: function randomBoolean() {
            return Math.round(Math.random());
          }
        }, {
          key: "formattedNumberToNumber",
          value: function formattedNumberToNumber(formattedNumber) {
            return Number(formattedNumber.replace(/[^0-9.-]+/g, ''));
          }
        }, {
          key: "FCUniqueName",
          value: function FCUniqueName(section, question) {
            var preString = '';
            var isSectionDuplicate = section[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate];
            var isQuestionDuplicate = question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate];

            if (section[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName]) {
              preString = preString + '' + section[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName];
            }

            if (question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName]) {
              preString = preString + '' + question[_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].QuestionLogic.FormControlNamePreStringForUniqueName];
            }

            return preString + 'FormControl_' + (isSectionDuplicate ? 'Duplicate_' : '') + section.sectionId + '_' + (isQuestionDuplicate ? 'Duplicate_' : '') + question.questionId;
          }
          /**
           *  Dynamic FormControlName for multiple checkbox
           */

        }, {
          key: "SubFCName",
          value: function SubFCName(fcName, optionId) {
            return fcName + '_SubFormControl_' + optionId;
          }
        }, {
          key: "FCNameAdditioanlNoteUq",
          value: function FCNameAdditioanlNoteUq(formControlName) {
            return 'FormControlAdditionalNote_' + formControlName;
          }
          /**
           *  Dynamic Html Element id
           */

        }, {
          key: "HtmlElementIdUq",
          value: function HtmlElementIdUq(sectionIndex, questionIndex, sectionId, questionId) {
            return 'Question_' + sectionIndex + '_' + questionIndex + '_' + sectionId + '_' + questionId;
          }
        }, {
          key: "fixTimeString",
          value: function fixTimeString(value) {
            return value.replace('T', ' ');
          }
        }, {
          key: "fireCallBack",
          value: function fireCallBack() {
            var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (callBack) {
              callBack(data);
            }
          }
        }]);

        return UtilService;
      }();

      UtilService.getFullName = function (firstName, middleName, lastName) {
        var names = [];

        if (firstName) {
          names.push(firstName);
        }

        if (middleName) {
          names.push(middleName);
        }

        if (lastName) {
          names.push(lastName);
        }

        return names.join(' ');
      };

      UtilService.getQueryStringValue = function (url, key) {
        return decodeURIComponent(url.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
      };

      UtilService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _validator_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      UtilService = UtilService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UtilService);
      /***/
    },

    /***/
    "37uJ":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-input/auth-input.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item>\n    <ion-label position=\"stacked\">{{label}}</ion-label>\n    <ion-input [formControlName]=\"controlName\"\n               [ngClass]=\"{'error':isError}\"\n               [placeholder]=\"placeholder\"\n               [type]=\"type\"></ion-input>\n</ion-item>\n";
      /***/
    },

    /***/
    "3Wyk":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/question-list-header/question-list-header.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** App Primary Color**/\n  --ion-color-app-primary: #8A25B1;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n}\n.content-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.content-container .fill-vertical-space {\n  flex: 1;\n}\nion-footer {\n  background-color: #FFFFFF;\n}\nion-label {\n  white-space: normal !important;\n}\n.text-tiny {\n  font-size: 0.7em;\n}\n.text-small {\n  font-size: 0.85em;\n}\n.text-big {\n  font-size: 1.4em;\n}\n.text-huge {\n  font-size: 1.8em;\n}\nion-list-header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-top: 24px;\n  padding-left: 23px;\n  padding-right: 23px;\n  --border-width: 1px 0 0;\n  --border-style: solid;\n  --border-color: rgba(74, 144, 226, 0.2);\n}\nion-list-header h6 {\n  margin: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-list-header .note-item {\n  margin: 0;\n}\nion-list-header .note-item ion-label {\n  margin-top: 16px;\n  margin-bottom: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  color: #171538;\n}\nion-list-header .form-item {\n  margin: 0;\n}\nion-list-header ion-item {\n  --min-height: 18px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  margin: 0 23px;\n}\nion-list-header ion-item.form-item ion-icon,\nion-list-header ion-item.form-item ion-img {\n  width: 17.31px;\n  height: 20px;\n  margin-right: 12px;\n}\nion-list-header ion-item.form-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  color: #2a6fdb;\n}\nion-list-header .question-content-img {\n  width: 100%;\n  height: auto;\n  background-color: #000;\n  margin: 12px 0;\n}\nion-list-header ion-item:last-child {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vcXVlc3Rpb24tbGlzdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSx1QkFBQTtFQUNBLGdDQUFBO0FDWkY7QURnQkE7RUFDRTs7O0lBQUE7RUFzRUE7OztJQUFBO0VBd0NBOzs7SUFBQTtBQ2hIRjtBRDRKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDMUpGO0FENEpFO0VBQ0UsT0FBQTtBQzFKSjtBRCtKQTtFQUNFLHlCQUFBO0FDNUpGO0FEK0pBO0VBQ0UsOEJBQUE7QUM1SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBRGdLQTtFQUNFLGlCQUFBO0FDN0pGO0FEZ0tBO0VBQ0UsZ0JBQUE7QUM3SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBQWhIQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkRMbUI7RUNNbkIsbUJETm1CO0VDT25CLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtBQW1IRDtBQWpIQztFQUNDLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbUhGO0FBaEhDO0VBQ0MsU0FBQTtBQWtIRjtBQWhIRTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBa0hIO0FBOUdDO0VBQ0MsU0FBQTtBQWdIRjtBQTdHQztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBK0dGO0FBNUdHOztFQUVDLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE4R0o7QUEzR0c7RUFDQywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBNkdKO0FBeEdDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUEwR0Y7QUF2R0M7RUFDQyxtQkFBQTtBQXlHRiIsImZpbGUiOiJxdWVzdGlvbi1saXN0LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuJHBhZGRpbmdIb3Jpem9udGFsOiAyM3B4O1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAvKiogQXBwIFByaW1hcnkgQ29sb3IqKi9cbiAgLS1pb24tY29sb3ItYXBwLXByaW1hcnk6ICM4QTI1QjE7XG5cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAgIC8vXG4gICAgLy8tLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAvL1xuICAgIC8vLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAvL1xuICAgIC8vLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC8vXG4gICAgLy8tLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gIC5maWxsLXZlcnRpY2FsLXNwYWNlIHtcbiAgICBmbGV4OiAxXG4gIH1cbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4vL0NsYXNzZXNzIGZvciBpbmR1Y3Rpb24gcmljaCB0ZXh0IGFuZCBhZ3JlZW1lbnQgdGV4dCAsIGNsYXNzZXNzIGFyZSBkeW5hbWljIGZyb20gYXBpXG4udGV4dC10aW55IHtcbiAgZm9udC1zaXplOiAuN2VtO1xufVxuXG4udGV4dC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG59XG5cbi50ZXh0LWJpZyB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi50ZXh0LWh1Z2Uge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuIiwiQGltcG9ydCAnLi9zcmMvdGhlbWUvdmFyaWFibGVzJztcblxuaW9uLWxpc3QtaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdHBhZGRpbmctdG9wOiAyNHB4O1xuXHRwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nSG9yaXpvbnRhbDtcblx0cGFkZGluZy1yaWdodDogJHBhZGRpbmdIb3Jpem9udGFsO1xuXHQtLWJvcmRlci13aWR0aDogMXB4IDAgMDtcblx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXHQtLWJvcmRlci1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG5cblx0aDYge1xuXHRcdG1hcmdpbjogMDtcblx0XHRmb250LWZhbWlseTogSUJNIFBsZXggU2Fucztcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0Y29sb3I6ICMxNzE1Mzg7XG5cdH1cblxuXHQubm90ZS1pdGVtIHtcblx0XHRtYXJnaW46IDA7XG5cblx0XHRpb24tbGFiZWwge1xuXHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRmb250LWZhbWlseTogSUJNIFBsZXggU2Fucztcblx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMTNweDtcblx0XHRcdGNvbG9yOiAjMTcxNTM4O1xuXHRcdH1cblx0fVxuXG5cdC5mb3JtLWl0ZW0ge1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXG5cdGlvbi1pdGVtIHtcblx0XHQtLW1pbi1oZWlnaHQ6IDE4cHg7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0tcGFkZGluZy10b3A6IDA7XG5cdFx0LS1wYWRkaW5nLWJvdHRvbTogMDtcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXHRcdG1hcmdpbjogMCAkcGFkZGluZ0hvcml6b250YWw7XG5cblx0XHQmLmZvcm0taXRlbSB7XG5cdFx0XHRpb24taWNvbixcblx0XHRcdGlvbi1pbWcge1xuXHRcdFx0XHR3aWR0aDogMTcuMzFweDtcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEycHg7XG5cdFx0XHR9XG5cblx0XHRcdGlvbi1sYWJlbCB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuXHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEzcHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGNvbG9yOiAjMmE2ZmRiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5xdWVzdGlvbi1jb250ZW50LWltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdFx0bWFyZ2luOiAxMnB4IDA7XG5cdH1cblxuXHRpb24taXRlbTpsYXN0LWNoaWxkIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHR9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "3cNW":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/warning-component/warning-component.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: WarningComponentComponent */

    /***/
    function cNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarningComponentComponent", function () {
        return WarningComponentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_warning_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./warning-component.component.html */
      "B5e/");
      /* harmony import */


      var _warning_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./warning-component.component.scss */
      "pEYU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WarningComponentComponent = /*#__PURE__*/function () {
        function WarningComponentComponent() {
          _classCallCheck(this, WarningComponentComponent);
        }

        _createClass(WarningComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WarningComponentComponent;
      }();

      WarningComponentComponent.ctorParameters = function () {
        return [];
      };

      WarningComponentComponent.propDecorators = {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      WarningComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-warning-component',
        template: _raw_loader_warning_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_warning_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WarningComponentComponent);
      /***/
    },

    /***/
    "4aYp":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-header-dm/modal-header-dm.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aYp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar mode=\"ios\" class=\"toolbar-1\">\n\n    <ion-title size=\"large\">\n        {{modalTitle}}\n\n        <span *ngIf=\"showEvacuation\" fill=\"clear\" class=\"evacuation\">\n            <ion-icon slot=\"start\" src=\"./assets/icon/evacuation.svg\"></ion-icon>\n            Evacuation Mode\n        </span>\n    </ion-title>\n\n\n\n    <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"onClose()\">\n            <ion-icon class=\"close-icon\" slot=\"icon-only\" src=\"./assets/icon/ic_cancel.svg\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n\n</ion-toolbar>\n\n\n<ion-toolbar mode=\"ios\" *ngIf=\"modalSubTitle\" class=\"toolbar-2\">\n    <ion-title size=\"large\">{{modalSubTitle}}</ion-title>\n</ion-toolbar>\n\n\n";
      /***/
    },

    /***/
    "5IUd":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/custom-questions-container/custom-questions-container.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: CustomQuestionsContainerComponent */

    /***/
    function IUd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomQuestionsContainerComponent", function () {
        return CustomQuestionsContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_custom_questions_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./custom-questions-container.component.html */
      "VZ79");
      /* harmony import */


      var _custom_questions_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./custom-questions-container.component.scss */
      "jgN4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");

      var CustomQuestionsContainerComponent = /*#__PURE__*/function () {
        function CustomQuestionsContainerComponent(sharedDataService, utilService) {
          _classCallCheck(this, CustomQuestionsContainerComponent);

          this.sharedDataService = sharedDataService;
          this.utilService = utilService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"];
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"];
        }

        _createClass(CustomQuestionsContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "shouldShowError",
          value: function shouldShowError(question) {
            if (question.selectedAnswerTypeId === _services_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"].CustomAnswerType.SingleChoiceSet || question.selectedAnswerTypeId === _services_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"].CustomAnswerType.MultipleChoiceSet || question.selectedAnswerTypeId === _services_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"].CustomAnswerType.ConfirmationBox) {
              return true;
            }

            return true; // return false;
          }
        }, {
          key: "isError",
          value: function isError(question, questionIndex) {
            var controlName = _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].FCUniqueName(this.section, question);

            return this.isSubmitted && !this.formGroup.controls[controlName].valid;
          }
        }]);

        return CustomQuestionsContainerComponent;
      }();

      CustomQuestionsContainerComponent.ctorParameters = function () {
        return [{
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }];
      };

      CustomQuestionsContainerComponent.propDecorators = {
        sectionIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sectionId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        formGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        questions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        questionElementIds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isSubmitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        section: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CustomQuestionsContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-custom-questions-container',
        template: _raw_loader_custom_questions_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_custom_questions_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CustomQuestionsContainerComponent);
      /***/
    },

    /***/
    "5Mel":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/number-decimal-field/number-decimal-field.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: NumberDecimalFieldComponent */

    /***/
    function Mel(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberDecimalFieldComponent", function () {
        return NumberDecimalFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_number_decimal_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./number-decimal-field.component.html */
      "ORk7");
      /* harmony import */


      var _number_decimal_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./number-decimal-field.component.scss */
      "I3zz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NumberDecimalFieldComponent = /*#__PURE__*/function () {
        function NumberDecimalFieldComponent() {
          _classCallCheck(this, NumberDecimalFieldComponent);
        }

        _createClass(NumberDecimalFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NumberDecimalFieldComponent;
      }();

      NumberDecimalFieldComponent.ctorParameters = function () {
        return [];
      };

      NumberDecimalFieldComponent.propDecorators = {
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      NumberDecimalFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-number-decimal-field',
        template: _raw_loader_number_decimal_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_number_decimal_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NumberDecimalFieldComponent);
      /***/
    },

    /***/
    "5Ud+":
    /*!***************************************************************************!*\
      !*** ./src/app/components/sync-warning-msg/sync-warning-msg.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SyncWarningMsgComponent */

    /***/
    function Ud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SyncWarningMsgComponent", function () {
        return SyncWarningMsgComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sync_warning_msg_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sync-warning-msg.component.html */
      "IA+m");
      /* harmony import */


      var _sync_warning_msg_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sync-warning-msg.component.scss */
      "QXXz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SyncWarningMsgComponent = /*#__PURE__*/function () {
        function SyncWarningMsgComponent() {
          _classCallCheck(this, SyncWarningMsgComponent);
        }

        _createClass(SyncWarningMsgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SyncWarningMsgComponent;
      }();

      SyncWarningMsgComponent.ctorParameters = function () {
        return [];
      };

      SyncWarningMsgComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sync-warning-msg',
        template: _raw_loader_sync_warning_msg_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sync_warning_msg_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SyncWarningMsgComponent);
      /***/
    },

    /***/
    "6/gD":
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /*! exports provided: PhotoService */

    /***/
    function gD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _observables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./observables.service */
      "mxI+");
      /* harmony import */


      var _enum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./enum.service */
      "AIDl");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./util.service */
      "2Rin");
      /* harmony import */


      var _static_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./static-data.service */
      "hYb0");

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(platform, actionSheetController, observablesService, camera) {
          _classCallCheck(this, PhotoService);

          this.platform = platform;
          this.actionSheetController = actionSheetController;
          this.observablesService = observablesService;
          this.camera = camera;
        }

        _createClass(PhotoService, [{
          key: "choosePhotoOption",
          value: function choosePhotoOption(callBack) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheetController.create({
                        header: 'Take photo from',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Camera',
                          icon: 'camera-outline',
                          handler: function handler() {
                            _this7.takePhotoFromCamera(callBack);
                          }
                        }, {
                          text: 'Gallery',
                          icon: 'images-outline',
                          handler: function handler() {
                            _this7.takePhotoFromGallery(callBack);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "takePhotoFromCamera",
          value: function takePhotoFromCamera(callBack) {
            var isFrontCamera = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isSquarePhoto = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var subscribe, allowEditing, capturedPhoto;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      subscribe = this.observablesService.getObservable(_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"].ObserverKeys.APP_RESTORED_RESULT).subscribe(function (data) {
                        callBack(data.data);
                        subscribe.unsubscribe();
                      });
                      allowEditing = false;

                      if (this.platform.is('ios') && isSquarePhoto) {
                        allowEditing = true;
                      }

                      _context5.next = 5;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Camera.getPhoto({
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].DataUrl,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Camera,
                        quality: _static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"].photoQuality,
                        allowEditing: allowEditing,
                        height: _static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"].photoMaxHeight,
                        correctOrientation: true,
                        preserveAspectRatio: true,
                        direction: isFrontCamera ? _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraDirection"].Front : _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraDirection"].Rear
                      });

                    case 5:
                      capturedPhoto = _context5.sent;

                      try {
                        callBack(capturedPhoto);
                      } catch (e) {}

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "takePhotoFromGallery",
          value: function takePhotoFromGallery(callBack) {
            var isAllMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var capturedPhoto, options;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].isLocalHost()) {
                        _context6.next = 7;
                        break;
                      }

                      _context6.next = 3;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Camera.getPhoto({
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].DataUrl,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Photos,
                        quality: _static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"].photoQuality,
                        height: _static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"].photoMaxHeight,
                        preserveAspectRatio: true,
                        correctOrientation: true
                      });

                    case 3:
                      capturedPhoto = _context6.sent;

                      try {
                        callBack(capturedPhoto);
                      } catch (e) {}

                      _context6.next = 9;
                      break;

                    case 7:
                      options = {
                        quality: _static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"].photoQuality,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: isAllMedia ? this.camera.MediaType.ALLMEDIA : this.camera.MediaType.PICTURE,
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                        correctOrientation: true,
                        targetHeight: _static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"].photoMaxHeight
                      };
                      this.camera.getPicture(options).then(function (imageData) {
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64 (DATA_URL):
                        if (_static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"].videoFormats.indexOf(imageData.split('.').pop().toLowerCase()) !== -1) {
                          callBack({
                            dataUrl: imageData,
                            isVideo: true
                          });
                        } else {
                          var base64Image = 'data:image/jpeg;base64,' + imageData;
                          callBack({
                            dataUrl: base64Image
                          });
                        }
                      }, function (err) {// Handle error
                      });

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _observables_service__WEBPACK_IMPORTED_MODULE_4__["ObservablesService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PhotoService);
      /***/
    },

    /***/
    "6INa":
    /*!*****************************************************************!*\
      !*** ./src/app/components/time-field/time-field.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function INa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".time-item .time-field {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.time-item ion-datetime {\n  width: 120px;\n  border: 1px solid #E8EAF2;\n  border-radius: 3px;\n  padding: 2px 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  height: 40px;\n  color: #777595;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.time-item .am-pm-btns {\n  border: 1px solid #E8EAF2;\n  border-radius: 5px;\n  height: 40px;\n  margin-left: 16px;\n}\n.time-item .am-pm-btns ion-button {\n  margin: 0;\n  height: 100%;\n  padding: 0 8px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  color: #777595;\n  text-align: center;\n  background-color: #F7FAFE;\n}\n.time-item .am-pm-btns ion-button.active {\n  border: 1px solid rgba(74, 144, 226, 0.5);\n  border-radius: 5px;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RpbWUtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRko7QUFJSTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZOO0FBSU07RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFGUiIsImZpbGUiOiJ0aW1lLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWUtaXRlbSB7XG4gIC50aW1lLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi1kYXRldGltZSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEVBRjI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM3Nzc1OTU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hbS1wbS1idG5zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFQUYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM3Nzc1OTU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGQUZFO1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "8I7f":
    /*!***************************************************************************!*\
      !*** ./src/app/components/dashboard-button/dashboard-button.component.ts ***!
      \***************************************************************************/

    /*! exports provided: DashboardButtonComponent */

    /***/
    function I7f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardButtonComponent", function () {
        return DashboardButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-button.component.html */
      "tqIm");
      /* harmony import */


      var _dashboard_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-button.component.scss */
      "iNoF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardButtonComponent = /*#__PURE__*/function () {
        function DashboardButtonComponent() {
          _classCallCheck(this, DashboardButtonComponent);

          this.title = '';
          this.icon = '';
          this.img = '';
          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(DashboardButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardButtonComponent;
      }();

      DashboardButtonComponent.ctorParameters = function () {
        return [];
      };

      DashboardButtonComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        img: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      DashboardButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-button',
        template: _raw_loader_dashboard_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardButtonComponent);
      /***/
    },

    /***/
    "8ev5":
    /*!***************************************************!*\
      !*** ./src/app/helpers/httpConfig.interceptor.ts ***!
      \***************************************************/

    /*! exports provided: HttpConfigInterceptor */

    /***/
    function ev5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function () {
        return HttpConfigInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/account.service */
      "flj8"); // WDEyREJVTTFqaEljUlc2U05HMlF1WWxNc3dXS2pVa3RKQ0F5c2drWnpSRU9GZWplTU02UHlKcU92a1FqRFF3dVBiNDhYUEFjdVoxT2grUmVRSjE5dkdzR1ZYWkFHWFdmNHU5T1pzbnk3ald0ckVuTkw1OHFvbEsrMXFvMURCb3E=


      var HttpConfigInterceptor = /*#__PURE__*/function () {
        function HttpConfigInterceptor(sharedDataService, accountService) {
          _classCallCheck(this, HttpConfigInterceptor);

          this.sharedDataService = sharedDataService;
          this.accountService = accountService;
        }

        _createClass(HttpConfigInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this8 = this;

            var accessID = this.sharedDataService.deviceUID;
            var token = localStorage.getItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"].LocalStorageKeys.API_TOKEN); // Authentication by setting header with token value

            if (accessID && token && !request.headers.has('accessID') && !request.headers.has('token')) {
              request = request.clone({
                setHeaders: {
                  accessID: accessID,
                  token: token
                }
              });
            } // if (!request.headers.has('Content-Type')) {
            //     request = request.clone({
            //         setHeaders: {
            //             'content-type': 'application/json'
            //         }
            //     });
            // }


            request = request.clone({
              headers: request.headers.set('Accept', 'application/json')
            });
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log('event--->>>', event);
              }

              return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              var _a; // if token expired then get new token and resend request again


              var error = err.error;

              if (error) {
                if (error.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"].ApiResponseCode.InvalidToken) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_this8.accountService.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (res) {
                    request = request.clone({
                      setHeaders: {
                        accessID: accessID,
                        token: res.token
                      }
                    });
                    return _this8.intercept(request, next);
                  }));
                } else if (error.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"].ApiResponseCode.InvalidData) {
                  var errorMessage = '';
                  error.ResponseException.ValidationErrors.map(function (data) {
                    errorMessage = errorMessage + data.Field + ' : ' + data.Message + '\n';
                  });
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                    error: error,
                    message: errorMessage
                  });
                }

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                  error: error,
                  message: (_a = error === null || error === void 0 ? void 0 : error.ResponseException) === null || _a === void 0 ? void 0 : _a.ExceptionMessage
                });
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                error: err,
                message: err.message
              });
            }));
          }
        }]);

        return HttpConfigInterceptor;
      }();

      HttpConfigInterceptor.ctorParameters = function () {
        return [{
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }];
      };

      HttpConfigInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], HttpConfigInterceptor);
      /***/
    },

    /***/
    "9kOk":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/screen-inner-loading/screen-inner-loading.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ScreenInnerLoadingComponent */

    /***/
    function kOk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenInnerLoadingComponent", function () {
        return ScreenInnerLoadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_screen_inner_loading_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./screen-inner-loading.component.html */
      "tOsz");
      /* harmony import */


      var _screen_inner_loading_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./screen-inner-loading.component.scss */
      "+z8m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ScreenInnerLoadingComponent = /*#__PURE__*/function () {
        function ScreenInnerLoadingComponent() {
          _classCallCheck(this, ScreenInnerLoadingComponent);
        }

        _createClass(ScreenInnerLoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ScreenInnerLoadingComponent;
      }();

      ScreenInnerLoadingComponent.ctorParameters = function () {
        return [];
      };

      ScreenInnerLoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-screen-inner-loading',
        template: _raw_loader_screen_inner_loading_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_screen_inner_loading_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ScreenInnerLoadingComponent);
      /***/
    },

    /***/
    "AIDl":
    /*!******************************************!*\
      !*** ./src/app/services/enum.service.ts ***!
      \******************************************/

    /*! exports provided: EnumService */

    /***/
    function AIDl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnumService", function () {
        return EnumService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EnumService_1;

      var EnumService = EnumService_1 = function EnumService() {
        _classCallCheck(this, EnumService);
      };

      EnumService.ActivityType = {
        CUSTOM_ACTIVITY: 'Custom Activity',
        DOCUMENT_SIGNOFF_ACTIVITY: 'Document Sign-Off',
        FORM_SIGNOFF_ACTIVITY: 'Form Sign-Off'
      };
      EnumService.FormTypes = {
        CUSTOM: 'Custom',
        RISK_ASSESSMENT: 'Risk Assessment',
        WORK_PERMIT: 'Work Permits',
        HAV: 'HAV Exposure Calculator',
        ACCIDENT_REPORT: 'Accident Report'
      };
      EnumService.SignOffType = {
        INDUCTION: 'induction',
        DOCUMENT_ACTIVITY: 'document_activity',
        FORM_ACTIVITY: 'form_activity',
        FORM_CURRENT_CHECKIN: 'form_current_checkin',
        WORKPERMIT_FORM_CURRENT_CHECKIN: 'workpermit_form_current_checkin',
        DOCUMENT_CURRENT_CHECKIN: 'document_current_checkin',
        WORK_PERMIT_DM: 'work_permit_dedicated_mode',
        DOCUMENT_DM: 'document_dedicated_mode',
        FORMS_DM: 'forms_dedicated_mode'
      };
      EnumService.CheckInLocationByOptions = {
        QrCode: 'qr_code',
        List: 'list'
      };
      EnumService.CheckInType = {
        QrCode: 'qr_code',
        MY_NAME: 'my_name',
        AS_GUEST: 'as_guest'
      };
      EnumService.ViewFormForType = {
        Induction: 'induction',
        Activity: 'activity',
        CurrentCheckin: 'currentCheckin',
        CurrentCheckinWorkPermit: 'currentCheckinWorkPermit',
        FormDM: 'dedicated_mode_form',
        WorkPermitDM: 'dedicated_mode_work_permit_form'
      };
      EnumService.ConfirmForCheckType = {
        CheckIn: 'checkin',
        CheckOut: 'checkout'
      };
      EnumService.InductionContentTypes = {
        IMAGE_FILE: 'ImageFile',
        RICH_TEXT: 'RichText',
        VIDEO_FILE: 'VideoFile',
        FORM: 'Form',
        VISITOR_AGREEMENT: 'VisitorAgreement'
      };
      EnumService.ObserverKeys = {
        BACK_BUTTON_PRESSED: 'BACK_BUTTON_PRESSED',
        NEW_CHECKED_IN: 'NEW_CHECKED_IN',
        CURRENT_CHECKED_IN_CHANGED: 'CURRENT_CHECKED_IN_CHANGED',
        APP_RESTORED_RESULT: 'APP_RESTORED_RESULT',
        ACTIVITY_COMPLETED: 'ACTIVITY_COMPLETED'
      };
      EnumService.LocalStorageKeys = {
        USER_DATA: 'user_data',
        USER_PROFILE: 'user_profile',
        API_ACCESS_KEY: 'api_access_key',
        API_TOKEN: 'api_token',
        PUSH_TOKEN: 'push_token',
        PUSH_PERMISSION_ALLOWED: 'push_permission_allowed',
        IS_DEDICATED_MODE: 'dedicated_mode',
        DEDICATED_MODE_DEVICE_DETAIL: 'dedicated_mode_device_detail',
        DEDICATED_MODE_ASSIGNED_ENTITIES: 'dedicated_mode_assigned_entities',
        DEDICATED_MODE_LOCATION_USE: 'dedicated_mode_location_use',
        SYNC_DATE_TIME: 'sync_date_time',
        CHECKED_IN_PLACES: 'checked_in_places',
        CURRENT_SELECTED_CHECKIN_PLACE: 'current_selected_checkin_place',
        GLOBAL_DIRECTORIES: 'global_directories',
        APP_LANGUAGE: 'app_language'
      };
      EnumService.ApiMethods = {
        GetAccessKey: 'GetAccessKey',
        GetToken: 'GetToken',
        GetTermsOfServices: 'GetTermsOfServices',
        GetGlobalDirectories: 'GetGlobalDirectories',
        GetTimeZoneList: 'GetTimeZoneList',
        GetCompanyLanguageList: 'GetCompanyLanguageList',
        UpdatePushNotification: 'UpdatePushNotification',
        UserSignIn: 'UserSignIn',
        GetCompanyMobileSessionDetails: 'GetCompanyMobileSessionDetails',
        ForgotPassword: 'ForgotPassword',
        ResetPassword: 'ResetPassword',
        AccountSetup: 'AccountSetup',
        GetUserProfileById: 'GetUserProfileById',
        UpdateUserProfile: 'UpdateUserProfile',
        ChangePassword: 'ChangePassword',
        UserDeviceDelete: 'UserDeviceDelete',
        GetLocationItemList: 'GetLocationItemList',
        GetDeviceDetails: 'GetDeviceDetails',
        GetUserCurrentCheckInDetails: 'GetUserCurrentCheckInDetails',
        GetEntityByQRCode: 'GetEntityByQRCode',
        GetCheckInDetails: 'GetCheckInDetails',
        InsertCheckInDetails: 'InsertCheckInDetails',
        GetCheckInDetails_Guest: 'GetCheckInDetails_Guest',
        InsertCheckInDetails_Guest: 'InsertCheckInDetails_Guest',
        InsertCheckOutDetails: 'InsertCheckOutDetails',
        InsertCheckOutDetails_Guest: 'InsertCheckOutDetails_Guest',
        CheckInPhotoUpload: 'CheckInPhotoUpload',
        InductionPhotoUpload: 'InductionPhotoUpload',
        InductionSignatureUpload: 'InductionSignatureUpload',
        GetUserActivityList: 'GetUserActivityList',
        GetUserActivityDetail: 'GetUserActivityDetail',
        ActivityCompleted: 'ActivityCompleted',
        GetActivitySignOffFormDetail: 'GetActivitySignOffFormDetail',
        GetSignOffFormDetail: 'GetSignOffFormDetail',
        GetDedicatedModeSignOffFormDetail: 'GetDedicatedModeSignOffFormDetail',
        GetActivitySignOffDocumentDetail: 'GetActivitySignOffDocumentDetail',
        GetPersonalModeAvailableDocuments: 'GetPersonalModeAvailableDocuments',
        GetPersonalModeAvailableWorkPermits: 'GetPersonalModeAvailableWorkPermits',
        GetPersonalModeAvailableForms: 'GetPersonalModeAvailableForms',
        InsertPersonalModeSignOffDetails: 'InsertPersonalModeSignOffDetails',
        MySignedDocuments: 'MySignedDocuments',
        DownloadDocument: 'DownloadDocument',
        GetDeviceEntityDetails: 'GetDeviceEntityDetails',
        ActivateDevice: 'ActivateDevice',
        SynchDevice: 'SynchDevice',
        GetDedicatedModeAssignedItemDetail: 'GetDedicatedModeAssignedItemDetail',
        GetUserByQRCode: 'GetUserByQRCode',
        GetUserAutoSuggest: 'GetUserAutoSuggest',
        GetGuestUserDetailByPhone: 'GetGuestUserDetailByPhone',
        ChangeAllQRCode: 'ChangeAllQRCode',
        GetFormBuilderDetails: 'GetFormBuilderDetails',
        GetCompanyUserList: 'GetCompanyUserList',
        GetCompanyUserGroupList: 'GetCompanyUserGroupList',
        GetManufacturerList: 'GetManufacturerList',
        GetTypeList: 'GetTypeList',
        GetModelList: 'GetModelList',
        FormPhotoOrVideoUpload: 'FormPhotoOrVideoUpload',
        SaveFormAnswers: 'SaveFormAnswers',
        GetAccidentBodyPartList: 'GetAccidentBodyPartList',
        GetAccidentClassificationList: 'GetAccidentClassificationList',
        GetAccidentTypeList: 'GetAccidentTypeList',
        GetUserTotalHAVExposureForToday: 'GetUserTotalHAVExposureForToday',
        GetRiskRatingOptionList: 'GetRiskRatingOptionList',
        GetDedicatedModeAvailableDocuments: 'GetDedicatedModeAvailableDocuments',
        GetDedicatedModeArchiveDocuments: 'GetDedicatedModeArchiveDocuments',
        GetDedicatedModeAvailableForms: 'GetDedicatedModeAvailableForms',
        GetDedicatedModeArchiveForms: 'GetDedicatedModeArchiveForms',
        GetEvacuationList: 'GetEvacuationList',
        GetDedicatedModeLiveWorkPermits: 'GetDedicatedModeLiveWorkPermits',
        GetDedicatedModeArchiveWorkPermits: 'GetDedicatedModeArchiveWorkPermits',
        GetDedicatedModeAvailableWorkPermits: 'GetDedicatedModeAvailableWorkPermits'
      };
      EnumService.ApiResponseCode = {
        RequestSuccessful: 200,
        RequestDenied: 401,
        InvalidData: 412,
        UnalbeToProcess: 400,
        NoDataFound: 204,
        UrlNotFound: 501,
        InvalidToken: 419,
        GeneralError: 500
      };
      EnumService.CustomAnswerType = {
        SingleChoiceSet: 1,
        MultipleChoiceSet: 2,
        SingleLineText: 3,
        MultiLineText: 4,
        NumberFieldInteger: 5,
        NumberFieldDecimal: 6,
        DateField: 7,
        TimeField: 8,
        DateTimeField: 9,
        PhotoVideoUpload: 10,
        ClassicDropdown: 11,
        LocationSelection: 12,
        BodyPartControl: 13,
        ConfirmationBox: 14
      };
      EnumService.HavFormFieldOrder = {
        DateOfUsage: 1,
        Manufacturer: 2,
        Type: 3,
        Model: 4,
        PlannedTimeOfUsage: 5
      };
      EnumService.AccidentFormFieldOrder = {
        AccidentDateTime: 1,
        AccidentLocation: 2,
        ReddorReport: 3,
        About: 4,
        Type: 5,
        Classification: 6,
        BodyPartEffected: 7,
        Description: 8,
        Attachment: 9
      };
      EnumService.AccidentCustomLocationControlsName = {
        PlaceNotintheList: 'placeNotintheList',
        LocationName: 'locationName'
      };
      EnumService.AccidentBodyPartsIds = {
        FullBody: 0,
        HeadSoftTissue: 1,
        HeadFace: 2,
        TorsoAbdomen: 3,
        TorsoChest: 4,
        TorsoNeck: 5,
        TorsoRibs: 6,
        BackUpperBack: 7,
        BackLowerBack: 8,
        BackButtocks: 9,
        ArmsShoulderRight: 10,
        ArmsShoulderLeft: 11,
        ArmsElbowRight: 12,
        ArmsElbowLeft: 13,
        ArmsLowerRight: 14,
        ArmsLowerLeft: 15,
        ArmsWristRight: 16,
        ArmsWristLeft: 17,
        ArmsHandRight: 18,
        ArmsHandLeft: 19,
        ArmsFingerRight: 20,
        ArmsFingerLeft: 21,
        LegsAnkleRight: 22,
        LegsAnkleLeft: 23,
        LegsFootRight: 24,
        LegsFootLeft: 25,
        LegsKneeRight: 26,
        LegsKneeLeft: 27,
        LegsUpperRight: 28,
        LegsUpperLeft: 29,
        LegsToeRight: 30,
        LegsToeLeft: 31
      };
      EnumService.QuestionLogic = {
        FormControlNamePreStringForUniqueName: 'FormControlNamePreStringForUniqueName',
        LogicApplicableForQuestionTypes: [EnumService_1.CustomAnswerType.SingleChoiceSet, EnumService_1.CustomAnswerType.MultipleChoiceSet, EnumService_1.CustomAnswerType.NumberFieldInteger, EnumService_1.CustomAnswerType.NumberFieldDecimal, EnumService_1.CustomAnswerType.DateTimeField, EnumService_1.CustomAnswerType.DateField, EnumService_1.CustomAnswerType.TimeField, EnumService_1.CustomAnswerType.ConfirmationBox],
        ActionType: {
          Show: 1,
          Hide: 2,
          Duplicate: 3,
          MarkAsFailed: 4,
          Notify: 5
        },
        ActionTypeForForm: {
          ShowForLogic: 'showForLogic',
          HideForLogic: 'hideForLogic',
          MarkAsFailed: 'isMarkedAsFailed',
          Duplicate: 'duplicate',
          Notify: 'isNotify'
        },
        SingleMultipleChoiceOperationType: {
          Selected: 1,
          NotSelected: 2
        },
        OtherValueOperationType: {
          GreaterThen: 1,
          GreaterThenEqualTo: 2,
          LessThen: 3,
          LessThenEqualTo: 4,
          EqualTo: 5,
          NotEqualTo: 6
        }
      };
      EnumService.NotificationActionType = {
        NewActivityAssigned: 'New Activity Assigned',
        SignOffRejected: 'Sign-Off Rejected',
        ActivityOverdue: 'Activity Overdue',
        UserQualificationExpired: 'User Qualification Expired',
        UserQualificationIsDueToExpireSoon: 'User Qualification is Due to Expire Soon'
      };
      EnumService.DedicatedModeDocumentListType = {
        Available: 'Document List',
        Archive: 'Document Archive'
      };
      EnumService.DedicatedModeFormListType = {
        Available: 'Form List',
        Archive: 'Form Archive'
      };
      EnumService.DedicatedModePermitListType = {
        Live: 'Live Permits',
        Archive: 'Permit Archive'
      };
      EnumService.DedicatedModeProcessTypes = {
        CheckinOut: 'CheckinOut',
        Form: 'Form',
        Document: 'Document',
        WorkPermit: 'WorkPermit'
      };
      EnumService.DedicatedModeTempAuthType = {
        Document: 'Document',
        Form: 'Form',
        WorkPermit: 'WorkPermit'
      };
      EnumService.DedicatedModeTempAuthBy = {
        QRCode: 'QRCode',
        Name: 'Name'
      };
      EnumService.DedicatedModeCapturePhotoForType = {
        Auth: 'Auth',
        LocationPhoto: 'LocationPhoto',
        Signoff: 'SignOff'
      };

      EnumService.ctorParameters = function () {
        return [];
      };

      EnumService = EnumService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EnumService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        isWebApp: false,
        // apiUrl: 'https://login.be-safetech.com/x4wnyp56gow2ffl/api'
        apiUrl: "https://cg.utopia-test.com/x4wnyp56gow2ffl/api"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B5e/":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/warning-component/warning-component.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function B5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <ion-icon src=\"./assets/icon/Warning.1.svg\"></ion-icon>\n    <ion-label>{{message}}</ion-label>\n</div>\n";
      /***/
    },

    /***/
    "BCO8":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-box-field/confirm-box-field.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BCO8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container [formGroup]=\"form\">\n\t<ion-item>\n\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t{{ UtilService.findObj(list, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTextLabel }}\n\t\t</ion-label>\n\n\t\t<ion-checkbox mode=\"md\" slot=\"start\" [formControlName]=\"inputName\" [value]=\"true\"></ion-checkbox>\n\t</ion-item>\n</ng-container>\n";
      /***/
    },

    /***/
    "BHjt":
    /*!******************************************************************!*\
      !*** ./src/app/modals/search-location/search-location.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function BHjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  --background: #DBE8F9;\n  --box-shadow: none;\n  padding: 0;\n}\n\nion-content ion-list ion-item ion-label {\n  margin: 0;\n  padding: 5px 10px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQU1NO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhSIiwiZmlsZSI6InNlYXJjaC1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjREJFOEY5O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICBpb24tbGlzdCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "BdWc":
    /*!*****************************************************************!*\
      !*** ./src/app/components/device-info/device-info.component.ts ***!
      \*****************************************************************/

    /*! exports provided: DeviceInfoComponent */

    /***/
    function BdWc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeviceInfoComponent", function () {
        return DeviceInfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_device_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./device-info.component.html */
      "x1iz");
      /* harmony import */


      var _device_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./device-info.component.scss */
      "ItfH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");

      var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Network;

      var DeviceInfoComponent = /*#__PURE__*/function () {
        function DeviceInfoComponent(menu, navController, sharedDataService) {
          var _this9 = this;

          _classCallCheck(this, DeviceInfoComponent);

          this.menu = menu;
          this.navController = navController;
          this.sharedDataService = sharedDataService;
          this.isOnline = true;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"];

          this.checkForNetwork = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var ntstatus;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return Network.getStatus();

                    case 2:
                      ntstatus = _context7.sent;
                      this.isOnline = ntstatus.connected;

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          };

          this.checkForNetwork();
        }

        _createClass(DeviceInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            Network.addListener('networkStatusChange', function (status) {
              console.log('Network status changed', status);

              _this10.checkForNetwork();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            Network.removeAllListeners();
          }
        }, {
          key: "lastSyncTime",
          value: function lastSyncTime() {
            var dateTime = localStorage.getItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].LocalStorageKeys.SYNC_DATE_TIME);

            if (dateTime) {
              return dateTime;
            }

            return null;
          }
        }, {
          key: "menuWillOpen",
          value: function menuWillOpen() {
            this.checkForNetwork();
          }
        }, {
          key: "closeInfoMenu",
          value: function closeInfoMenu() {
            this.menu.close('infoMenu');
          }
        }, {
          key: "syncClick",
          value: function syncClick() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.closeInfoMenu();
                      this.navController.navigateForward('device-sync-dm', {
                        queryParams: {
                          startSync: true
                        }
                      });

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return DeviceInfoComponent;
      }();

      DeviceInfoComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }];
      };

      DeviceInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-device-info',
        template: _raw_loader_device_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_device_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeviceInfoComponent);
      /***/
    },

    /***/
    "C6wm":
    /*!***************************************!*\
      !*** ./src/app/helpers/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function C6wm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/account.service */
      "flj8");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, navController, accountService, sharedDataService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.navController = navController;
          this.accountService = accountService;
          this.sharedDataService = sharedDataService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var user = this.accountService.userValue;

            if (this.sharedDataService.dedicatedMode) {
              if (this.sharedDataService.dedicatedModeLocationUse) {
                return true;
              } else {
                this.navController.navigateRoot(['/choose-location'], {
                  replaceUrl: true
                });
                return false;
              }
            } else if (user) {
              // authorised so return true
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "CUwC":
    /*!*******************************************************************!*\
      !*** ./src/app/components/color-picker/color-picker.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ColorPickerComponent */

    /***/
    function CUwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function () {
        return ColorPickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_color_picker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./color-picker.component.html */
      "ZwzQ");
      /* harmony import */


      var _color_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./color-picker.component.scss */
      "MXFd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var POUCH = [{
        START: 'mousedown',
        MOVE: 'mousemove',
        STOP: 'mouseup'
      }, {
        START: 'touchstart',
        MOVE: 'touchmove',
        STOP: 'touchend'
      }];

      var ColorPickerComponent = /*#__PURE__*/function () {
        function ColorPickerComponent() {
          var _this11 = this;

          _classCallCheck(this, ColorPickerComponent);

          this.colorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.colorTouchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.colorTouchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.chooserHeight = 16;

          this.init = function () {
            // Set default position of color chooser
            // const canvasChooser = this.chooser.nativeElement;
            // const context = canvasChooser.getContext('2d');
            // const bounding = canvasChooser.getBoundingClientRect();
            // const currentWidth = window.innerWidth;
            // const width = currentWidth * 90 / 100;
            //
            // const touchX = width / 2;
            _this11.chooserX = _this11.chooserHeight;
            _this11.colorFromChooser = '#000000';

            _this11.colorChanged.emit(_this11.colorFromChooser); //


            _this11.initChooser();

            _this11.initPalette();
          };

          this.drawSelector = function (ctx, x, y) {
            _this11.drawPalette(_this11.colorFromChooser);

            ctx.beginPath();
            ctx.arc(x, y, 10 * _this11.getPixelRatio(ctx), 0, 2 * Math.PI, false);
            ctx.fillStyle = _this11.color;
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#FFFFFF';
            ctx.stroke();
          };

          this.drawChooserSelector = function (ctx, x) {
            _this11.drawPalette(_this11.colorFromChooser);

            ctx.beginPath();
            ctx.arc(x, ctx.canvas.height / 2, ctx.canvas.height / 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = _this11.colorFromChooser;
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#FFFFFF';
            ctx.stroke();
          };

          this.initPalette = function () {
            var canvasPalette = _this11.palette.nativeElement;
            _this11.ctxPalette = canvasPalette.getContext('2d');
            var currentWidth = window.innerWidth;

            var pixelRatio = _this11.getPixelRatio(_this11.ctxPalette);

            var width = currentWidth * 90 / 100;
            var height = width * 0.5;
            _this11.ctxPalette.canvas.width = width * pixelRatio;
            _this11.ctxPalette.canvas.height = height * pixelRatio;
            _this11.ctxPalette.canvas.style.width = width + 'px';
            _this11.ctxPalette.canvas.style.height = height + 'px';

            _this11.drawPalette(_this11.colorFromChooser);

            var eventChangeColor = function eventChangeColor(event) {
              _this11.updateColor(event, canvasPalette, _this11.ctxPalette);
            };

            POUCH.forEach(function (pouch) {
              canvasPalette.addEventListener(pouch.START, function (event) {
                _this11.colorTouchStart.emit();

                _this11.drawPalette(_this11.colorFromChooser);

                canvasPalette.addEventListener(pouch.MOVE, eventChangeColor);

                _this11.updateColor(event, canvasPalette, _this11.ctxPalette);
              });
              canvasPalette.addEventListener(pouch.STOP, function (event) {
                _this11.colorTouchEnd.emit();

                canvasPalette.removeEventListener(pouch.MOVE, eventChangeColor);

                _this11.updateColor(event, canvasPalette, _this11.ctxPalette);

                _this11.drawSelector(_this11.ctxPalette, _this11.paletteX, _this11.paletteY);
              });
            });
          };

          this.drawPalette = function (endColor) {
            _this11.ctxPalette.clearRect(0, 0, _this11.ctxPalette.canvas.width, _this11.ctxPalette.canvas.height);

            var gradient = _this11.ctxPalette.createLinearGradient(0, 0, _this11.ctxPalette.canvas.width, 0); // Create color gradient


            gradient.addColorStop(0, '#FFFFFF');
            gradient.addColorStop(1, endColor); // Apply gradient to canvas

            _this11.ctxPalette.fillStyle = gradient;

            _this11.ctxPalette.fillRect(0, 0, _this11.ctxPalette.canvas.width, _this11.ctxPalette.canvas.height); // Create semi transparent gradient (white -> trans. -> black)


            gradient = _this11.ctxPalette.createLinearGradient(0, 0, 0, _this11.ctxPalette.canvas.height);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
            gradient.addColorStop(1, 'rgba(0,     0,   0, 1)'); // Apply gradient to canvas

            _this11.ctxPalette.fillStyle = gradient;

            _this11.ctxPalette.fillRect(0, 0, _this11.ctxPalette.canvas.width, _this11.ctxPalette.canvas.height);
          };

          this.initChooser = function () {
            var canvasChooser = _this11.chooser.nativeElement;
            var ctx = canvasChooser.getContext('2d');
            var currentWidth = window.innerWidth;

            var pixelRatio = _this11.getPixelRatio(ctx);

            var width = currentWidth * 90 / 100;
            var height = _this11.chooserHeight;
            ctx.canvas.width = width * pixelRatio;
            ctx.canvas.height = height * pixelRatio;
            ctx.canvas.style.width = width + 'px';
            ctx.canvas.style.height = height + 'px';

            _this11.drawChooser(ctx);

            setTimeout(function () {
              _this11.drawChooserSelector(ctx, _this11.chooserX);
            }, 100);

            var eventChangeColorChooser = function eventChangeColorChooser(event) {
              _this11.updateColorChooser(event, canvasChooser, ctx);

              _this11.drawSelector(_this11.ctxPalette, _this11.ctxPalette.canvas.width, _this11.ctxPalette.canvas.height / 2);
            };

            POUCH.forEach(function (pouch) {
              canvasChooser.addEventListener(pouch.START, function (event) {
                _this11.drawChooser(ctx);

                canvasChooser.addEventListener(pouch.MOVE, eventChangeColorChooser);

                _this11.updateColorChooser(event, canvasChooser, ctx);

                _this11.drawSelector(_this11.ctxPalette, _this11.ctxPalette.canvas.width, _this11.ctxPalette.canvas.height / 2);
              });
              canvasChooser.addEventListener(pouch.STOP, function (event) {
                canvasChooser.removeEventListener(pouch.MOVE, eventChangeColorChooser);

                _this11.updateColorChooser(event, canvasChooser, ctx);

                _this11.drawChooser(ctx);

                _this11.drawChooserSelector(ctx, _this11.chooserX);

                _this11.drawSelector(_this11.ctxPalette, _this11.ctxPalette.canvas.width, _this11.ctxPalette.canvas.height / 2);
              });
            });
          };

          this.drawChooser = function (ctx) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            var gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
            var colors = ['#000000', '#FFFFFF', '#FF0000', '#FDD220', '#8ABF77', '#78F6DA', '#413BFB', '#FF00EC', '#FF0000'];
            var interval = 1 / (colors.length - 1);
            colors.map(function (color, key) {
              gradient.addColorStop(key * interval, color);
            }); // Apply gradient to canvas

            ctx.fillStyle = gradient;
            var x = 0;
            var y = ctx.canvas.height / 4;
            var w = ctx.canvas.width;
            var h = ctx.canvas.height / 2;
            var r = ctx.canvas.height / 4;
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
            ctx.fill();
          };

          this.getPixelRatio = function (ctx) {
            var dpr = window.devicePixelRatio || 1;
            var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
            return dpr / bsr;
          };

          this.updateColorChooser = function (event, canvas, context) {
            _this11.color = _this11.colorFromChooser = _this11.getColor(event, canvas, context, true);

            _this11.colorChanged.emit(_this11.color);

            _this11.drawPalette(_this11.color);
          };

          this.updateColor = function (event, canvas, context) {
            _this11.color = _this11.getColor(event, canvas, context, false);

            _this11.colorChanged.emit(_this11.color);
          };

          this.getColor = function (event, canvas, context, fromChooser) {
            console.log('Color_Event ' + JSON.stringify(event));
            var bounding = canvas.getBoundingClientRect();
            var touchX = event.pageX || event.changedTouches[0].pageX || event.changedTouches[0].screenX;
            var touchY = event.pageY || event.changedTouches[0].pageY || event.changedTouches[0].screenY; // stop selector x position from out of bounding

            var movingX = touchX - bounding.left;

            if (movingX < _this11.chooserHeight) {
              movingX = _this11.chooserHeight / 2;
            } else if (movingX > bounding.width - _this11.chooserHeight) {
              movingX = bounding.width - _this11.chooserHeight / 2;
            } // --end


            var x = movingX * _this11.getPixelRatio(context); // const x = (touchX - bounding.left) * this.getPixelRatio(context);


            var y = (touchY - bounding.top) * _this11.getPixelRatio(context);

            if (fromChooser) {
              _this11.chooserX = x;
            } else {
              _this11.paletteX = x;
              _this11.paletteY = y;
            } // const imageData = context.getImageData(x, y, 1, 1);


            var imageData = context.getImageData(x, _this11.chooserHeight, 1, 1);
            var red = imageData.data[0];
            var green = imageData.data[1];
            var blue = imageData.data[2];

            var color = '#' + _this11.toHex(red) + _this11.toHex(green) + _this11.toHex(blue);

            console.log('x ' + x);
            console.log('y ' + y);
            console.log('touchX ' + touchX);
            console.log('touchY ' + touchY);
            console.log('Color  ' + color); // console.log('bounding.top ' + bounding.top);

            return color;
          };

          this.toHex = function (n) {
            n = parseInt(n, 10);

            if (isNaN(n)) {
              return '00';
            }

            n = Math.max(0, Math.min(n, 255));
            return '0123456789ABCDEF'.charAt((n - n % 16) / 16) + '0123456789ABCDEF'.charAt(n % 16);
          };
        }

        _createClass(ColorPickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            if (this.hexColor) {
              this.colorFromChooser = this.hexColor;
            } else {
              this.colorFromChooser = '#0000FF';
            }

            setTimeout(function () {
              _this12.init();
            }, 200);
          }
        }]);

        return ColorPickerComponent;
      }();

      ColorPickerComponent.propDecorators = {
        hexColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colorChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        colorTouchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        colorTouchEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        palette: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['palette']
        }],
        chooser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['chooser']
        }]
      };
      ColorPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-color-picker',
        template: _raw_loader_color_picker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_color_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ColorPickerComponent);
      /***/
    },

    /***/
    "D6p4":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/next-prev-toolbar/next-prev-toolbar.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: NextPrevToolbarComponent */

    /***/
    function D6p4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NextPrevToolbarComponent", function () {
        return NextPrevToolbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_next_prev_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./next-prev-toolbar.component.html */
      "GzKz");
      /* harmony import */


      var _next_prev_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./next-prev-toolbar.component.scss */
      "yGae");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NextPrevToolbarComponent = /*#__PURE__*/function () {
        function NextPrevToolbarComponent() {
          _classCallCheck(this, NextPrevToolbarComponent);

          this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(NextPrevToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NextPrevToolbarComponent;
      }();

      NextPrevToolbarComponent.ctorParameters = function () {
        return [];
      };

      NextPrevToolbarComponent.propDecorators = {
        totalCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        currentCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      NextPrevToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-next-prev-toolbar',
        template: _raw_loader_next_prev_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_next_prev_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NextPrevToolbarComponent);
      /***/
    },

    /***/
    "DYwS":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question-list-header/question-list-header.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DYwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list-header lines=\"full\">\n\t<h6>\n\t\t<ion-note color=\"danger\" *ngIf=\"required\">*</ion-note>\n\t\t<ion-text style=\"white-space: pre-wrap\">{{ qNo + '. ' + questionTitle }}</ion-text>\n\t</h6>\n\n\t<ion-item *ngIf=\"note\" lines=\"none\" class=\"ion-no-margin ion-no-padding note-item\">\n\t\t<ion-label><span style=\"font-weight: 600\">Note: </span><span [innerText]=\"note\"></span></ion-label>\n\t</ion-item>\n\n\t<ng-container *ngIf=\"attachments\">\n\t\t<ng-container *ngFor=\"let attachment of attachments\">\n\t\t\t<ion-img\n\t\t\t\tclass=\"question-content-img\"\n\t\t\t\t*ngIf=\"UtilService.IsFileImageType(attachment.fileExtension)\"\n\t\t\t\t[src]=\"sharedDataService.globalDirectories.documentDirectory + '' + attachment.fileName\"\n\t\t\t></ion-img>\n\t\t</ng-container>\n\n\t\t<ng-container *ngFor=\"let attachment of attachments\">\n\t\t\t<ion-item *ngIf=\"!UtilService.IsFileImageType(attachment.fileExtension)\" lines=\"none\" class=\"form-item\" (click)=\"openFile(attachment)\">\n\t\t\t\t<ion-img *ngIf=\"attachmentIcon\" [src]=\"attachmentIcon\"></ion-img>\n\t\t\t\t<ion-icon slot=\"start\" *ngIf=\"!attachmentIcon\" [src]=\"UtilService.FileIcon(attachment.fileExtension)\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t{{ attachment.documentTitle }}\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ng-container>\n\t</ng-container>\n</ion-list-header>\n";
      /***/
    },

    /***/
    "DbGL":
    /*!*****************************************************************!*\
      !*** ./src/app/components/auth-input/auth-input.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function DbGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-item ion-label {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  color: #FFFFFF !important;\n  margin-bottom: 8px !important;\n  margin-top: 0px !important;\n}\nion-item ion-input {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  min-height: 48px;\n  border: 1px solid #F7F8F9;\n  box-sizing: border-box;\n  border-radius: 3px;\n  --placeholder-font-style: normal;\n  --placeholder-font-weight: normal;\n  --background: #ffffff;\n  --color: #171538;\n  --placeholder-color: #171538;\n  --padding-start: 16px !important;\n  --padding-end: 16px !important;\n}\nion-item ion-input.error {\n  --background: #FFF6DE;\n  border: 1px solid #E4D3A3;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F1dGgtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUVFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQ0FBQTtFQUNBLGlDQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBRUEsZ0NBQUE7RUFDQSw4QkFBQTtBQUpKO0FBTUk7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFKTiIsImZpbGUiOiJhdXRoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWlucHV0IHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbWluLWhlaWdodDogNDhweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y4Rjk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzE3MTUzODtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMTcxNTM4O1xuXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweCAhaW1wb3J0YW50O1xuXG4gICAgJi5lcnJvciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNGRkY2REU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTREM0EzO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "Dcd8":
    /*!*******************************************************************!*\
      !*** ./src/app/components/photo-field/photo-field.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Dcd8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** App Primary Color**/\n  --ion-color-app-primary: #8A25B1;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n}\n.content-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.content-container .fill-vertical-space {\n  flex: 1;\n}\nion-footer {\n  background-color: #FFFFFF;\n}\nion-label {\n  white-space: normal !important;\n}\n.text-tiny {\n  font-size: 0.7em;\n}\n.text-small {\n  font-size: 0.85em;\n}\n.text-big {\n  font-size: 1.4em;\n}\n.text-huge {\n  font-size: 1.8em;\n}\n.photo-view-container {\n  margin: 0 23px;\n}\n.photo-view-container .photo-buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 12px 0;\n}\n.photo-view-container .photo-buttons ion-button {\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n  --color: #fff;\n  flex: 1;\n  height: 40px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 9px;\n  line-height: 15px;\n  color: #FFFFFF;\n}\n.photo-view-container .photo-buttons ion-button ion-icon {\n  width: 12px;\n  height: 12px;\n  margin-right: 2px;\n}\n.photo-view-container .photo-buttons ion-button.left {\n  --background: #2A6FDB;\n}\n.photo-view-container .photo-buttons ion-button.right {\n  --background: #575568;\n}\n.photo-view-container .photo-buttons span {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n  margin: 0 3px;\n}\n.photo-view-container .image-view {\n  width: 100%;\n  margin: 12px 0;\n  border-radius: 4px;\n  overflow: hidden;\n  min-height: 100px;\n}\n.photo-view-container .image-view ion-img {\n  width: 100%;\n  height: calc(100% - 40px);\n  background-color: #E6EFFB;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.photo-view-container .image-view .videoPlayer {\n  width: 100%;\n  height: calc(100% - 40px);\n  background-color: #E6EFFB;\n}\n.photo-view-container .image-view .close-btn {\n  width: 100%;\n  background-color: #D6E5F9;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.photo-view-container .image-view .close-btn ion-button {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: #777595;\n}\n.photo-view-container .image-view .close-btn ion-button.edit-btn {\n  height: 27px;\n  width: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vcGhvdG8tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSx1QkFBQTtFQUNBLGdDQUFBO0FDWkY7QURnQkE7RUFDRTs7O0lBQUE7RUFzRUE7OztJQUFBO0VBd0NBOzs7SUFBQTtBQ2hIRjtBRDRKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDMUpGO0FENEpFO0VBQ0UsT0FBQTtBQzFKSjtBRCtKQTtFQUNFLHlCQUFBO0FDNUpGO0FEK0pBO0VBQ0UsOEJBQUE7QUM1SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBRGdLQTtFQUNFLGlCQUFBO0FDN0pGO0FEZ0tBO0VBQ0UsZ0JBQUE7QUM3SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBQWhIQTtFQUNFLGNBQUE7QUFtSEY7QUFqSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQW1ISjtBQWpISTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFrSE47QUFoSE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBa0hSO0FBL0dNO0VBQ0UscUJBQUE7QUFpSFI7QUE5R007RUFDRSxxQkFBQTtBQWdIUjtBQTVHSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBOEdOO0FBMUdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE0R0o7QUExR0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUE0R047QUF6R0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQTJHTjtBQXhHSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTBHTjtBQXhHTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBMEdSO0FBeEdRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUEwR1YiLCJmaWxlIjoicGhvdG8tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cbiRwYWRkaW5nSG9yaXpvbnRhbDogMjNweDtcblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLyoqIEFwcCBQcmltYXJ5IENvbG9yKiovXG4gIC0taW9uLWNvbG9yLWFwcC1wcmltYXJ5OiAjOEEyNUIxO1xuXG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLypcbiAgICogRGFyayBDb2xvcnNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBib2R5IHtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG4gIH1cblxuICAvKlxuICAgKiBpT1MgRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5pb3MgYm9keSB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gICAgLy9cbiAgICAvLy0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgICAvL1xuICAgIC8vLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMGQwZDBkO1xuICAgIC8vXG4gICAgLy8tLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLy9cbiAgICAvLy0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuXG5cbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAubWQgYm9keSB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG4gICAgLy9cbiAgICAvLy0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvL1xuICAgIC8vLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuICAgIC8vXG4gICAgLy8tLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gICAgLy9cbiAgICAvLy0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAvL1xuICAgIC8vLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcblxuICAuZmlsbC12ZXJ0aWNhbC1zcGFjZSB7XG4gICAgZmxleDogMVxuICB9XG59XG5cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLy9DbGFzc2VzcyBmb3IgaW5kdWN0aW9uIHJpY2ggdGV4dCBhbmQgYWdyZWVtZW50IHRleHQgLCBjbGFzc2VzcyBhcmUgZHluYW1pYyBmcm9tIGFwaVxuLnRleHQtdGlueSB7XG4gIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLnRleHQtc21hbGwge1xuICBmb250LXNpemU6IC44NWVtO1xufVxuXG4udGV4dC1iaWcge1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4udGV4dC1odWdlIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cbiIsIkBpbXBvcnQgXCIuL3NyYy90aGVtZS92YXJpYWJsZXNcIjtcblxuLnBob3RvLXZpZXctY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwICRwYWRkaW5nSG9yaXpvbnRhbDtcblxuICAucGhvdG8tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICBmbGV4OiAxO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG5cbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgfVxuXG4gICAgICAmLmxlZnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMyQTZGREI7XG4gICAgICB9XG5cbiAgICAgICYucmlnaHQge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM1NzU1Njg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICB9XG4gIH1cblxuICAuaW1hZ2UtdmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG5cbiAgICBpb24taW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVGRkI7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICAudmlkZW9QbGF5ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RUZGQjtcbiAgICB9XG5cbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RTVGOTtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgICAgIGNvbG9yOiAjNzc3NTk1O1xuXG4gICAgICAgICYuZWRpdC1idG4ge1xuICAgICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgICB3aWR0aDogMjdweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "EbIq":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/back-continue-toolbar/back-continue-toolbar.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EbIq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n        <ion-button class=\"arrow-button left\" fill=\"outline\" (click)=\"back.emit()\">\n            <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n            Back\n        </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-wrap\">{{title}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n        <ion-button *ngIf=\"!hideRightBtn\" [disabled]=\"disableRightBtn\" class=\"arrow-button right\"\n                    (click)=\"continue.emit()\">\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n            Continue\n        </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "EsuB":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empty-message/empty-message.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EsuB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"content\">\n    <ion-icon [src]=\"icon\"></ion-icon>\n    <ion-label>{{message}}</ion-label>\n</div>\n";
      /***/
    },

    /***/
    "EyFw":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/confirm-box-field/confirm-box-field.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function EyFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** App Primary Color**/\n  --ion-color-app-primary: #8A25B1;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n}\n.content-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.content-container .fill-vertical-space {\n  flex: 1;\n}\nion-footer {\n  background-color: #FFFFFF;\n}\nion-label {\n  white-space: normal !important;\n}\n.text-tiny {\n  font-size: 0.7em;\n}\n.text-small {\n  font-size: 0.85em;\n}\n.text-big {\n  font-size: 1.4em;\n}\n.text-huge {\n  font-size: 1.8em;\n}\nion-item {\n  --min-height: 18px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  margin: 0 23px;\n}\nion-item ion-checkbox {\n  --border-color: #a1a8ca;\n  --border-color-checked: #a1a8ca;\n  --checkmark-color: #a1a8ca;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius: 2px;\n  --background-checked: transparent;\n  --background: transparent;\n}\nion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vY29uZmlybS1ib3gtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSx1QkFBQTtFQUNBLGdDQUFBO0FDWkY7QURnQkE7RUFDRTs7O0lBQUE7RUFzRUE7OztJQUFBO0VBd0NBOzs7SUFBQTtBQ2hIRjtBRDRKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDMUpGO0FENEpFO0VBQ0UsT0FBQTtBQzFKSjtBRCtKQTtFQUNFLHlCQUFBO0FDNUpGO0FEK0pBO0VBQ0UsOEJBQUE7QUM1SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBRGdLQTtFQUNFLGlCQUFBO0FDN0pGO0FEZ0tBO0VBQ0UsZ0JBQUE7QUM3SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBQWhIQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBbUhEO0FBakhDO0VBQ0MsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQW1IRjtBQWhIQztFQUNDLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFrSEYiLCJmaWxlIjoiY29uZmlybS1ib3gtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cbiRwYWRkaW5nSG9yaXpvbnRhbDogMjNweDtcblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLyoqIEFwcCBQcmltYXJ5IENvbG9yKiovXG4gIC0taW9uLWNvbG9yLWFwcC1wcmltYXJ5OiAjOEEyNUIxO1xuXG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLypcbiAgICogRGFyayBDb2xvcnNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBib2R5IHtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG4gIH1cblxuICAvKlxuICAgKiBpT1MgRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5pb3MgYm9keSB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gICAgLy9cbiAgICAvLy0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgICAvL1xuICAgIC8vLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMGQwZDBkO1xuICAgIC8vXG4gICAgLy8tLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLy9cbiAgICAvLy0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuXG5cbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAubWQgYm9keSB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG4gICAgLy9cbiAgICAvLy0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvL1xuICAgIC8vLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuICAgIC8vXG4gICAgLy8tLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gICAgLy9cbiAgICAvLy0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAvL1xuICAgIC8vLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcblxuICAuZmlsbC12ZXJ0aWNhbC1zcGFjZSB7XG4gICAgZmxleDogMVxuICB9XG59XG5cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLy9DbGFzc2VzcyBmb3IgaW5kdWN0aW9uIHJpY2ggdGV4dCBhbmQgYWdyZWVtZW50IHRleHQgLCBjbGFzc2VzcyBhcmUgZHluYW1pYyBmcm9tIGFwaVxuLnRleHQtdGlueSB7XG4gIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLnRleHQtc21hbGwge1xuICBmb250LXNpemU6IC44NWVtO1xufVxuXG4udGV4dC1iaWcge1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4udGV4dC1odWdlIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cbiIsIkBpbXBvcnQgJy4vc3JjL3RoZW1lL3ZhcmlhYmxlcyc7XG5cbmlvbi1pdGVtIHtcblx0LS1taW4taGVpZ2h0OiAxOHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdC0tcGFkZGluZy10b3A6IDA7XG5cdC0tcGFkZGluZy1ib3R0b206IDA7XG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cdG1hcmdpbjogMCAkcGFkZGluZ0hvcml6b250YWw7XG5cblx0aW9uLWNoZWNrYm94IHtcblx0XHQtLWJvcmRlci1jb2xvcjogI2ExYThjYTtcblx0XHQtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjYTFhOGNhO1xuXHRcdC0tY2hlY2ttYXJrLWNvbG9yOiAjYTFhOGNhO1xuXHRcdC0tYm9yZGVyLXdpZHRoOiAxcHg7XG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdC0tYm9yZGVyLXJhZGl1czogMnB4O1xuXHRcdC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0aW9uLWxhYmVsIHtcblx0XHRmb250LWZhbWlseTogSUJNIFBsZXggU2Fucztcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0Y29sb3I6ICMxNzE1Mzg7XG5cdH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "FUS3":
    /*!*************************************************!*\
      !*** ./src/app/directives/directives.module.ts ***!
      \*************************************************/

    /*! exports provided: DirectivesModule */

    /***/
    function FUS3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirectivesModule", function () {
        return DirectivesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _phone_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./phone-input.directive */
      "qWu6");

      var DirectivesModule = function DirectivesModule() {
        _classCallCheck(this, DirectivesModule);
      };

      DirectivesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_phone_input_directive__WEBPACK_IMPORTED_MODULE_4__["PhoneInputDirective"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_phone_input_directive__WEBPACK_IMPORTED_MODULE_4__["PhoneInputDirective"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], DirectivesModule);
      /***/
    },

    /***/
    "GzKz":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/next-prev-toolbar/next-prev-toolbar.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GzKz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar mode=\"ios\" [ngClass]=\"{error:isError}\">\n    <ion-buttons slot=\"start\">\n        <ion-button class=\"arrow-button left\" size=\"small\" fill=\"clear\" (click)=\"previous.emit()\">\n            <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title>\n        Item {{currentCount + 1}} <span class=\"light\">of {{totalCount}}</span>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button class=\"arrow-button right\" size=\"small\" fill=\"clear\" (click)=\"next.emit()\">\n            <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "H+bZ":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function HBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _enum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./enum.service */
      "AIDl");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared-data.service */
      "msgi");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, sharedDataService) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.sharedDataService = sharedDataService;
        }

        _createClass(ApiService, [{
          key: "getTermsOfServices",
          value: function getTermsOfServices() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetTermsOfServices));
          }
        }, {
          key: "getTimeZoneList",
          value: function getTimeZoneList() {
            var _this13 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetTimeZoneList)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var list = data.Result;
                _this13.sharedDataService.timeZoneList = list;
                return list;
              }

              return null;
            }));
          }
        }, {
          key: "getCompanyLanguageList",
          value: function getCompanyLanguageList(companyId) {
            var _this14 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetCompanyLanguageList, "/").concat(companyId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var list = data.Result;
                _this14.sharedDataService.companyLanguageList = list;
                return list;
              }

              return null;
            }));
          }
        }, {
          key: "getEntityByQRCode",
          value: function getEntityByQRCode(qrCode) {
            var companyID;

            if (this.sharedDataService.dedicatedMode) {
              companyID = this.sharedDataService.dedicatedModeDeviceDetailData.companyID;
            } else {
              companyID = this.sharedDataService.getLoggedInUser().companyID;
            }

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetEntityByQRCode, "?code=").concat(qrCode, "&companyID=").concat(companyID));
          }
        }, {
          key: "getLocationItemList",
          value: function getLocationItemList(companyId) {
            var _this15 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetLocationItemList, "/").concat(companyId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var list = data.Result;
                _this15.sharedDataService.locationItemList = list;
              }

              return data;
            }));
          }
        }, {
          key: "getGlobalDirectories",
          value: function getGlobalDirectories(companyFolderName) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetGlobalDirectories, "?companyFolderName=").concat(companyFolderName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiResponseCode.RequestSuccessful) {
                return data.Result;
              }

              return null;
            }));
          }
        }, {
          key: "updatePushNotification",
          value: function updatePushNotification(body, userId) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.UpdatePushNotification, "/").concat(userId), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiResponseCode.RequestSuccessful) {
                return true;
              }

              return false;
            }));
          }
          /**
           * This API will use for uploading a user photo at the time of check in
           * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "UserPhoto"
           * @param file image to be upload
           * Note: Please crop image before uploading as per design
           */

        }, {
          key: "checkInPhotoUpload",
          value: function checkInPhotoUpload(file) {
            var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var formData = new FormData();
            formData.append("file", file, fileName);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.CheckInPhotoUpload), formData);
          }
          /**
           * This API will use for uploading a user photo at the time of Induction signoff.
           * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "UserSignaturePhoto"
           * @param file image to be upload
           * Note: Please crop image before uploading as per design
           */

        }, {
          key: "inductionPhotoUpload",
          value: function inductionPhotoUpload(file) {
            var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var formData = new FormData();
            formData.append("file", file, fileName);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.InductionPhotoUpload), formData);
          }
          /**
           * This API will use for uploading a attachment at the time of Form submit.
           * This Api will return uploaded file name which will be used in savAnswer API’s "
           * @param file image to be upload
           * Note: Please crop image before uploading as per design
           */

        }, {
          key: "formPhotoOrVideoUpload",
          value: function formPhotoOrVideoUpload(file) {
            var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var formData = new FormData();
            formData.append("file", file, fileName);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.FormPhotoOrVideoUpload), formData);
          }
          /**
           * This API will use for uploading a user signature at the time of Induction signoff.
           * This Api will return uploaded file name which will be used in InsertCheckInDetails API’s parameter "DigitalInkSignature"
           * @param file image to be upload
           * Note: Please crop image before uploading as per design
           */

        }, {
          key: "inductionSignatureUpload",
          value: function inductionSignatureUpload(file) {
            var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var formData = new FormData();
            formData.append("file", file, fileName);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.InductionSignatureUpload), formData);
          }
          /**
           * This API will return the activity list by current logged in user.
           * @param userId Request Parameter {id} : just pass current logged in user id.
           * Note: FormattedDescription & FormattedInstructions fields contains the line break character "<br/>". Please replace it with line break character which is used in mobile app.
           */

        }, {
          key: "getActivityList",
          value: function getActivityList(userId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetUserActivityList, "/").concat(userId));
          }
          /**
           *  This API will return activity details by using activityIndividualID.
           * @param activityId We will get activityIndividualID from GetUserActivityList API.
           */

        }, {
          key: "getActivityDetail",
          value: function getActivityDetail(activityId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetUserActivityDetail, "/").concat(activityId));
          }
          /**
           * This API will update the activity status to complete. This API will use for Custom activity only
           * @param userId current logged in user
           * @param activityId we will get this from GetUserActivityList API
           */

        }, {
          key: "activityCompleted",
          value: function activityCompleted(userId, activityId) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.ActivityCompleted, "?id=").concat(userId, "&activityIndividualID=").concat(activityId), {});
          }
          /**
           * This API will return activity sign off form details
           * @param userId current logged in user
           * @param formId : formID, we will get this from GetUserActivityList API
           * @param activityIndividualID : activityIndividualID, we will get this from GetUserActivityList API.
           * Note: If activity type is form sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for form signoff.
           */

        }, {
          key: "getActivitySignOffFormDetail",
          value: function getActivitySignOffFormDetail(userId, formId, activityIndividualID) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetActivitySignOffFormDetail, "?id=").concat(userId, "&formId=").concat(formId, "&activityIndividualID=").concat(activityIndividualID));
          }
          /**
           * This API will return sign off form details
           * @param userId current logged in user
           * @param formId : formID, we will get this from GetUserActivityList API
           * @param locationID : locationID, we will get this from Entity detail
           * @param projectID : projectID, we will get this from Entity detail
           * @param inventoryItemID : inventoryItemID, we will get this from Entity detail
           * Note: If activity type is form sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for form signoff.
           */

        }, {
          key: "getSignOffFormDetail",
          value: function getSignOffFormDetail(userId, formId) {
            var locationID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var projectID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var inventoryItemID = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetSignOffFormDetail, "?id=").concat(userId, "&formId=").concat(formId, "&LocationID=").concat(locationID, "&ProjectID=").concat(projectID, "&InventoryItemID=").concat(inventoryItemID));
          }
          /**
           * This API will return activity sign off document details
           * @param documentId documentID, we will get this from GetUserActivityList API
           * Note: If activity type is document sign off and IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed activity signoff steps for document signoff.
           */

        }, {
          key: "getActivitySignOffDocumentDetail",
          value: function getActivitySignOffDocumentDetail(documentId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetActivitySignOffDocumentDetail, "/").concat(documentId));
          }
          /**
           * This API will return activity sign off document details for dedicated mode
           * @param formId formId, we will get this from induction item
           * Note: If IsSignatureSignOff/IsPhotoSignOff(returned from this api) is true then we need to proceed signoff steps for form signoff.
           */

        }, {
          key: "getDedicatedModeSignOffFormDetail",
          value: function getDedicatedModeSignOffFormDetail(formId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeSignOffFormDetail, "?formID=").concat(formId));
          }
          /**
           * This API will use for downloading a document
           * @param filename we will get filename from related APIs
           * @param companyFolderName we will get company folder name at the time of login
           */

        }, {
          key: "downloadDocument",
          value: function downloadDocument(filename, companyFolderName) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.DownloadDocument, "?fileName=").concat(filename, "&companyFolderName=").concat(companyFolderName));
          }
          /**
           * This API will return all available form for current checked in locations
           * @param userId current logged in user id
           * @param companyID we will get company id at the time of login
           */

        }, {
          key: "getPersonalModeAvailableForms",
          value: function getPersonalModeAvailableForms(userId, companyID) {
            var place = this.sharedDataService.currentSelectedCheckinPlace;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetPersonalModeAvailableForms, "/").concat(userId, "?CompanyID=").concat(companyID, "&LocationID=").concat(place === null || place === void 0 ? void 0 : place.locationID, "&ProjectID=").concat(place === null || place === void 0 ? void 0 : place.projectID, "&InventoryItemID=").concat(place === null || place === void 0 ? void 0 : place.inventoryItemID));
          }
          /**
           * This API will return all available documents for current checked in locations
           * @param userId current logged in user id
           * @param companyID we will get company id at the time of login
           */

        }, {
          key: "getPersonalModeAvailableDocuments",
          value: function getPersonalModeAvailableDocuments(userId, companyID) {
            var place = this.sharedDataService.currentSelectedCheckinPlace;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetPersonalModeAvailableDocuments, "/").concat(userId, "?CompanyID=").concat(companyID, "&LocationID=").concat(place === null || place === void 0 ? void 0 : place.locationID, "&ProjectID=").concat(place === null || place === void 0 ? void 0 : place.projectID, "&InventoryItemID=").concat(place === null || place === void 0 ? void 0 : place.inventoryItemID));
          }
          /**
           * This API will return all available work permits for current checked in locations
           * @param userId current logged in user id
           * @param companyID we will get company id at the time of login
           */

        }, {
          key: "getPersonalModeAvailableWorkPermits",
          value: function getPersonalModeAvailableWorkPermits(userId, companyID) {
            var place = this.sharedDataService.currentSelectedCheckinPlace;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetPersonalModeAvailableWorkPermits, "/").concat(userId, "?CompanyID=").concat(companyID, "&LocationID=").concat(place === null || place === void 0 ? void 0 : place.locationID, "&ProjectID=").concat(place === null || place === void 0 ? void 0 : place.projectID, "&InventoryItemID=").concat(place === null || place === void 0 ? void 0 : place.inventoryItemID));
          }
          /**
           * This API will return form details
           * @param formId we will get this from GetPersonalModeAvailableForms api
           * @param formVersionId we will get this from GetPersonalModeAvailableForms api
           */

        }, {
          key: "getFormBuilderDetails",
          value: function getFormBuilderDetails(formId, formVersionId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetFormBuilderDetails, "/").concat(formId, "?formVersionId=").concat(formVersionId));
          }
          /**
           * This API will return you the list of current locations which was checked in by current logged in user.
           * @param userId current logged in user id
           */

        }, {
          key: "getUserCurrentCheckingDetails",
          value: function getUserCurrentCheckingDetails(userId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetUserCurrentCheckInDetails, "/").concat(userId));
          }
          /**
           * This API will return all the details that will required for check in settings and induction steps.
           * @param userId current logged in user id
           * @param entityId You will get this ID from GetLocationItemList API
           */

        }, {
          key: "getCheckInDetails",
          value: function getCheckInDetails(userId, entityId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetCheckInDetails, "/").concat(userId, "?EntityID=").concat(entityId));
          }
          /**
           *  This API will return all the details that will required for check in settings and induction steps .
           * @param userId current logged in user id
           * @param entityId You will get this ID from GetLocationItemList API
           */

        }, {
          key: "getCheckInDetails_Guest",
          value: function getCheckInDetails_Guest(phone, firstName, middleName, lastName, entityId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetCheckInDetails_Guest, "?phone=").concat(phone, "&firstName=").concat(firstName, "&middleName=").concat(middleName, "&lastName=").concat(lastName, "&entityId=").concat(entityId));
          }
          /**
           * This API will return signed documents of current logged in user.
           * @param userId for current logged in user.
           */

        }, {
          key: "getMySignedDocuments",
          value: function getMySignedDocuments(userId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.MySignedDocuments, "/").concat(userId));
          }
          /**
           *  This API will use for Activity & Document/Form sign off
           * @param postBody SignOffDetailsPostData
           */

        }, {
          key: "insertPersonalModeSignOffDetails",
          value: function insertPersonalModeSignOffDetails(postBody) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.InsertPersonalModeSignOffDetails), postBody);
          }
          /**
           *  This API will use for inserting the user's check in details
           * @param postBody SignOffDetailsPostData
           */

        }, {
          key: "insertCheckInDetails",
          value: function insertCheckInDetails(postBody) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.InsertCheckInDetails), postBody);
          }
          /**
           *  This API will use for inserting the user's check in details
           * @param postBody SignOffDetailsPostData
           */

        }, {
          key: "insertCheckInDetailsGuest",
          value: function insertCheckInDetailsGuest(postBody) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.InsertCheckInDetails_Guest), postBody);
          }
          /**
           *  This API will use at the time of user check out from the location
           * @param postBody user checkout details
           */

        }, {
          key: "insertCheckOutDetails",
          value: function insertCheckOutDetails(postBody) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.InsertCheckOutDetails), postBody);
          }
          /**
           *  This API will use at the time of user check out from the location
           * @param postBody guest checkout details
           */

        }, {
          key: "insertCheckOutDetails_Guest",
          value: function insertCheckOutDetails_Guest(postBody) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.InsertCheckOutDetails_Guest), postBody);
          }
          /**
           *  This API we  call when we want company User list
           * @param companyId we will get companyID when user logged into the system
           */

        }, {
          key: "getCompanyUserList",
          value: function getCompanyUserList(companyId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetCompanyUserList, "/").concat(companyId));
          }
          /**
           *  This API we  call when we want company Group list
           * @param companyId we will get companyID when user logged into the system
           */

        }, {
          key: "getCompanyUserGroupList",
          value: function getCompanyUserGroupList(companyId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetCompanyUserGroupList, "/").concat(companyId));
          }
          /**
           *  We will call this API when we want company Manufacturer list.
           * @param companyId we will get companyID when user logged into the system
           */

        }, {
          key: "getManufacturerList",
          value: function getManufacturerList(companyId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetManufacturerList, "/").concat(companyId));
          }
          /**
           *  We will call this API when we want company Type list by Manufacturer.
           * @param companyId we will get companyID when user logged into the system
           * @param manufacturerID we will manufacturerID from API GetManufacturerList
           */

        }, {
          key: "getTypeList",
          value: function getTypeList(companyId, manufacturerId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetTypeList, "?companyID=").concat(companyId, "&manufacturerID=").concat(manufacturerId));
          }
          /**
           *  We will call this API when we want company Model list by Type.
           * @param companyId we will get companyID when user logged into the system
           * @param typeId we will get typeID from API GetTypeList
           */

        }, {
          key: "getModelList",
          value: function getModelList(companyId, typeId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetModelList, "?companyID=").concat(companyId, "&typeID=").concat(typeId));
          }
          /**
           *  We will call this API when we want User TotalHAVExposure For Today on Hav form.
           * @param userId current logged in user id
           */

        }, {
          key: "getUserTotalHAVExposureForToday",
          value: function getUserTotalHAVExposureForToday(userId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetUserTotalHAVExposureForToday, "/").concat(userId));
          }
          /**
           *  This API will use for Save Form Answers
           * @param postBody answers JSON object
           */

        }, {
          key: "saveFormAnswers",
          value: function saveFormAnswers(postBody) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.SaveFormAnswers), postBody);
          }
          /**
           *  We will call this API when we want Accident Body Part List.
           */

        }, {
          key: "getAccidentBodyPartList",
          value: function getAccidentBodyPartList() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetAccidentBodyPartList));
          }
          /**
           *  We will call this API when we want Accident Classification List.
           */

        }, {
          key: "getAccidentClassificationList",
          value: function getAccidentClassificationList() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetAccidentClassificationList));
          }
          /**
           *  We will call this API when we want Accident Type List.
           */

        }, {
          key: "getAccidentTypeList",
          value: function getAccidentTypeList() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetAccidentTypeList));
          }
          /**
           *  We will call this API when we want GetRiskRatingOptionList.
           */

        }, {
          key: "getRiskRatingOptionList",
          value: function getRiskRatingOptionList() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetRiskRatingOptionList));
          } // Dedicated mode api

          /**
           *  This API will return User details by QR Code.
           *  @param deviceId unique device id
           */

        }, {
          key: "getDeviceEntityDetails",
          value: function getDeviceEntityDetails(deviceId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDeviceEntityDetails, "/").concat(deviceId));
          }
          /**
           *  This API will return User details by QR Code.
           *  @param qrCode qrCode of the user
           */

        }, {
          key: "getUserByQRCode",
          value: function getUserByQRCode(qrCode) {
            var companyID;

            if (this.sharedDataService.dedicatedMode) {
              companyID = this.sharedDataService.dedicatedModeDeviceDetailData.companyID;
            } else {
              companyID = this.sharedDataService.getLoggedInUser().companyID;
            }

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetUserByQRCode, "?code=").concat(qrCode, "&companyID=").concat(companyID));
          }
          /**
           *  This API will return User details by name.
           *  @param prefix Auto suggest prefix (more than 1 character required)
           *  @param companyId: we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getUserAutoSuggest",
          value: function getUserAutoSuggest(companyId, prefix) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetUserAutoSuggest, "?companyID=").concat(companyId, "&prefix=").concat(prefix));
          }
          /**
           *  This API will return the value of guest user by phone. If we will get value from this API result then we will pass “isGuestReturning” parameter value of API InsertCheckInDetails to true otherwise false.
           *  @param phone phonenumber
           */

        }, {
          key: "getGuestUserDetailByPhone",
          value: function getGuestUserDetailByPhone(phone) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetGuestUserDetailByPhone, "?phone=").concat(phone));
          }
          /**
           * This API will return all archived documents for dedicated mode
           * @param companyID we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getDedicatedModeAvailableDocuments",
          value: function getDedicatedModeAvailableDocuments(companyID) {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeAvailableDocuments, "?CompanyID=").concat(companyID, "&LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
          /**
           * This API will return all archived documents for dedicated mode
           * @param companyID we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getDedicatedModeArchiveDocuments",
          value: function getDedicatedModeArchiveDocuments(companyID) {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeArchiveDocuments, "?CompanyID=").concat(companyID, "&LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
          /**
           *  This API will return all available forms for dedicated mode
           * @param companyID we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getDedicatedModeAvailableForms",
          value: function getDedicatedModeAvailableForms(companyID) {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeAvailableForms, "?CompanyID=").concat(companyID, "&LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
          /**
           * This API will return all archived forms for dedicated mode
           * @param companyID we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getDedicatedModeArchiveForms",
          value: function getDedicatedModeArchiveForms(companyID) {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeArchiveForms, "?CompanyID=").concat(companyID, "&LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
          /**
           *   This API will return Evacuation user list for current checked in location
           */

        }, {
          key: "getEvacuationList",
          value: function getEvacuationList() {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetEvacuationList, "?LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
          /**
           *  This API will return all live work permits for dedicated mode
           * @param companyID we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getDedicatedModeLiveWorkPermits",
          value: function getDedicatedModeLiveWorkPermits(companyID) {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeLiveWorkPermits, "?CompanyID=").concat(companyID, "&LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
          /**
           *  This API will return all archived work permits for dedicated mode
           * @param companyID we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getDedicatedModeArchiveWorkPermits",
          value: function getDedicatedModeArchiveWorkPermits(companyID) {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeArchiveWorkPermits, "?CompanyID=").concat(companyID, "&LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
          /**
           *  This API will return all available work permits for dedicated mode
           * @param companyID we will get this from GetDeviceEntityDetails API.
           */

        }, {
          key: "getDedicatedModeAvailableWorkPermits",
          value: function getDedicatedModeAvailableWorkPermits(companyID) {
            var dedicatedModeLocationUse = this.sharedDataService.dedicatedModeLocationUse;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"].ApiMethods.GetDedicatedModeAvailableWorkPermits, "?CompanyID=").concat(companyID, "&LocationID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.locationID, "&ProjectID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.projectID, "&InventoryItemID=").concat(dedicatedModeLocationUse === null || dedicatedModeLocationUse === void 0 ? void 0 : dedicatedModeLocationUse.inventoryItemID));
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], ApiService);
      /***/
    },

    /***/
    "I+HG":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dashboard-header-dm/dashboard-header-dm.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: DashboardHeaderDmComponent */

    /***/
    function IHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardHeaderDmComponent", function () {
        return DashboardHeaderDmComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_header_dm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-header-dm.component.html */
      "I5d7");
      /* harmony import */


      var _dashboard_header_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-header-dm.component.scss */
      "QZp1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _modals_home_exit_dm_home_exit_dm_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../modals/home-exit-dm/home-exit-dm.page */
      "OpiQ");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");

      var DashboardHeaderDmComponent = /*#__PURE__*/function () {
        function DashboardHeaderDmComponent(navController, modalController, menu, sharedDataService, accountService, observablesService) {
          _classCallCheck(this, DashboardHeaderDmComponent);

          this.navController = navController;
          this.modalController = modalController;
          this.menu = menu;
          this.sharedDataService = sharedDataService;
          this.accountService = accountService;
          this.observablesService = observablesService;
          this.title = '';
        }

        _createClass(DashboardHeaderDmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "syncClick",
          value: function syncClick() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.navController.navigateForward('device-sync-dm');

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "infoClick",
          value: function infoClick() {
            this.menu.open('infoMenu');
          }
        }, {
          key: "logoutClick",
          value: function logoutClick() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this16 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.modalController.create({
                        component: _modals_home_exit_dm_home_exit_dm_page__WEBPACK_IMPORTED_MODULE_8__["HomeExitDmPage"],
                        cssClass: 'home-exit-dm',
                        componentProps: {
                          title: 'Exit',
                          description: 'You are about to exit this location that this device is dedicated for at the moment.\n' + 'Are you sure you want to exit?',
                          okBtnText: 'Yes',
                          cancelBtnText: 'Cancel'
                        }
                      });

                    case 2:
                      modal = _context10.sent;
                      _context10.next = 5;
                      return modal.present();

                    case 5:
                      modal.onWillDismiss().then(function (_ref) {
                        var data = _ref.data;

                        if (data) {
                          _this16.sharedDataService.resetAllSharedVariable();

                          localStorage.removeItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.DEDICATED_MODE_LOCATION_USE);

                          _this16.navController.navigateRoot('choose-location');
                        }
                      });

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return DashboardHeaderDmComponent;
      }();

      DashboardHeaderDmComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_6__["ObservablesService"]
        }];
      };

      DashboardHeaderDmComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DashboardHeaderDmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-header-dm',
        template: _raw_loader_dashboard_header_dm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_header_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardHeaderDmComponent);
      /***/
    },

    /***/
    "I3zz":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/number-decimal-field/number-decimal-field.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function I3zz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input-item ion-input {\n  min-height: 42px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251bWJlci1kZWNpbWFsLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6Im51bWJlci1kZWNpbWFsLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWl0ZW0ge1xuICBpb24taW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgLS1jb2xvcjogIzE3MTUzODtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMTcxNTM4O1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "I5d7":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard-header-dm/dashboard-header-dm.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I5d7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar mode=\"ios\">\n\n    <ion-title size=\"large\">{{title}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"syncClick()\">\n            <ion-icon class=\"scan-icon\" slot=\"icon-only\" src=\"./assets/icon/sync.svg\"></ion-icon>\n            <div class=\"badge\"></div>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"infoClick()\">\n            <ion-icon class=\"scan-icon\" slot=\"icon-only\" src=\"./assets/icon/info.svg\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"logoutClick()\">\n            <ion-icon class=\"scan-icon\" slot=\"icon-only\" src=\"./assets/icon/logout-dm.svg\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n\n</ion-toolbar>\n\n";
      /***/
    },

    /***/
    "I9+N":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/topnavigations-segments-dm/topnavigations-segments-dm.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I9N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar mode=\"md\">\n\n    <ion-buttons slot=\"start\" *ngIf=\"!searchBarShow; else searchBarView\">\n        <ion-segment mode=\"md\" (ionChange)=\"onChanged($event)\" [value]=\"active\">\n            <ion-segment-button *ngFor=\"let item of options\" [value]=\"item\">\n                <ion-label>{{item}}</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-buttons>\n    <ng-template #searchBarView>\n        <ion-searchbar placeholder=\"Search by name\" mode=\"md\" [(ngModel)]=\"search\"\n                       (ionChange)=\"searching.emit(search)\"></ion-searchbar>\n    </ng-template>\n\n\n    <ion-buttons slot=\"end\">\n        <ion-button size=\"large\" class=\"search-btn\" (click)=\"showSearchBar()\">\n            <ion-icon *ngIf=\"!searchBarShow\" name=\"search-outline\" slot=\"icon-only\"></ion-icon>\n            <ion-icon *ngIf=\"searchBarShow\" name=\"close\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "IA+m":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sync-warning-msg/sync-warning-msg.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IAM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"warning-view\">\n    <ion-chip color=\"clear\">\n        <ion-icon src=\"./assets/icon/warning-alert.svg\"></ion-icon>\n        <ion-label color=\"warning\">Synchronisation Needed</ion-label>\n    </ion-chip>\n    <p>\n        Device has been used while offline and has data which needs to be synched with the main server.\n    </p>\n</div>\n";
      /***/
    },

    /***/
    "ISAx":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/question-list-header/question-list-header.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: QuestionListHeaderComponent */

    /***/
    function ISAx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionListHeaderComponent", function () {
        return QuestionListHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_question_list_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./question-list-header.component.html */
      "DYwS");
      /* harmony import */


      var _question_list_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./question-list-header.component.scss */
      "3Wyk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");

      var QuestionListHeaderComponent = /*#__PURE__*/function () {
        function QuestionListHeaderComponent(sharedDataService, filehandlerService) {
          _classCallCheck(this, QuestionListHeaderComponent);

          this.sharedDataService = sharedDataService;
          this.filehandlerService = filehandlerService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"];
        }

        _createClass(QuestionListHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openFile",
          value: function openFile(attachment) {
            if (this.sharedDataService.globalDirectories && this.sharedDataService.globalDirectories.documentDirectory && attachment && attachment.fileName) {
              this.filehandlerService.openFile(this.sharedDataService.globalDirectories.documentDirectory + "" + attachment.fileName);
            }
          }
        }]);

        return QuestionListHeaderComponent;
      }();

      QuestionListHeaderComponent.ctorParameters = function () {
        return [{
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_6__["FilehandlerService"]
        }];
      };

      QuestionListHeaderComponent.propDecorators = {
        qNo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        attachments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        questionTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        note: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        attachmentIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      QuestionListHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-question-list-header",
        template: _raw_loader_question_list_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_question_list_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QuestionListHeaderComponent);
      /***/
    },

    /***/
    "ItfH":
    /*!*******************************************************************!*\
      !*** ./src/app/components/device-info/device-info.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function ItfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu {\n  --width: 400px;\n}\nion-menu ::ng-deep app-modal-header ion-toolbar {\n  padding-left: 12px;\n  --border-color: #FFFFFF;\n  --border-width: 0;\n  --background: #FFFFFF;\n}\nion-menu .content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-menu .content ion-item {\n  --border-color: #E8EAF2;\n  --inner-padding-start: 12px;\n  --inner-padding-end: 12px;\n  --inner-padding-top: 16px;\n  --inner-padding-bottom: 16px;\n}\nion-menu .content .action-btn {\n  width: 152px;\n  margin: 50px auto;\n  height: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldmljZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBRUk7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUFOO0FBSUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRko7QUFJSTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhOIiwiZmlsZSI6ImRldmljZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUge1xuICAtLXdpZHRoOiA0MDBweDtcblxuICA6Om5nLWRlZXAgYXBwLW1vZGFsLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNGRkZGRkY7XG4gICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNFOEVBRjI7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgd2lkdGg6IDE1MnB4O1xuICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "J543":
    /*!***************************************************************************!*\
      !*** ./src/app/components/dashboard-header/dashboard-header.component.ts ***!
      \***************************************************************************/

    /*! exports provided: DashboardHeaderComponent */

    /***/
    function J543(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function () {
        return DashboardHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-header.component.html */
      "kv2K");
      /* harmony import */


      var _dashboard_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-header.component.scss */
      "UZc2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DashboardHeaderComponent = /*#__PURE__*/function () {
        function DashboardHeaderComponent(router, navCtrl, sharedDataService, observablesService, accountService, apiService) {
          var _this17 = this;

          _classCallCheck(this, DashboardHeaderComponent);

          this.router = router;
          this.navCtrl = navCtrl;
          this.sharedDataService = sharedDataService;
          this.observablesService = observablesService;
          this.accountService = accountService;
          this.apiService = apiService;
          this.showPlaceNavigationBtns = false;
          this.isCurrentCheckin = false;
          this.hideCheckinButton = false;
          this.scanQrCode = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.checkedPlaces = [];
          this.checkedIn = false;
          this.showCheckedInPlacesList = false;
          this.currentCheckinPlaceIndex = 0;

          this.getUserCurrentCheckinDetails = function () {
            var _a;

            _this17.apiService.getUserCurrentCheckingDetails((_a = _this17.user) === null || _a === void 0 ? void 0 : _a.userId).subscribe(function (response) {
              if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var checkedInPlaces = response.Result;
                _this17.sharedDataService.checkedInPlaces = checkedInPlaces;
                _this17.checkedPlaces = checkedInPlaces;
                localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.CHECKED_IN_PLACES, JSON.stringify(checkedInPlaces)); // Check if selected checkedInPlaces is currently checked or not
                // if not then select first place from list

                if (checkedInPlaces && checkedInPlaces.length > 0) {
                  if (_this17.selectedPlace) {
                    var found = false;
                    checkedInPlaces.map(function (item) {
                      if (_this17.selectedPlace.userCheckInDetailID === item.userCheckInDetailID) {
                        found = true;
                        return;
                      }
                    });

                    if (!found) {
                      var place = checkedInPlaces && checkedInPlaces.length > 0 ? checkedInPlaces[0] : null;

                      _this17.placedChange(place);
                    }
                  } else {
                    var _place = _this17.checkedPlaces[0];

                    _this17.placedChange(_place);
                  }

                  _this17.checkedIn = true;
                } else {
                  _this17.checkedIn = false;

                  _this17.placedChange(null);
                }
              }
            });
          };

          this.user = this.accountService.userValue;
          this.checkedPlaces = sharedDataService.checkedInPlaces;
          this.checkedPlaces.map(function (place, key) {
            if (place.userCheckInDetailID === sharedDataService.currentSelectedCheckinPlace.userCheckInDetailID) {
              _this17.currentCheckinPlaceIndex = key;
            }
          });

          if (this.checkedPlaces && this.checkedPlaces.length > 0) {
            this.checkedIn = true;
          }

          if (this.checkedIn && this.checkedPlaces) {
            if (!sharedDataService.currentSelectedCheckinPlace) {
              var place = this.checkedPlaces[0];
              this.placedChange(place);
            } else {
              this.selectedPlace = sharedDataService.currentSelectedCheckinPlace;
            }
          }
        }

        _createClass(DashboardHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.getUserCurrentCheckinDetails();
            this.observablesService.getObservable(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].ObserverKeys.NEW_CHECKED_IN).subscribe(function (data) {
              if (data) {
                _this18.getUserCurrentCheckinDetails();
              }
            });
            this.observablesService.getObservable(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].ObserverKeys.CURRENT_CHECKED_IN_CHANGED).subscribe(function (data) {
              _this18.selectedPlace = _this18.sharedDataService.currentSelectedCheckinPlace;
            });
          }
        }, {
          key: "showCheckedInPlace",
          value: function showCheckedInPlace() {
            if (!this.isCurrentCheckin) {
              if (this.checkedIn && this.checkedPlaces.length > 1) {
                this.showCheckedInPlacesList = !this.showCheckedInPlacesList;
              } else if (this.checkedIn && this.checkedPlaces && this.checkedPlaces.length === 1) {
                this.placeChoose(this.checkedPlaces[0]);
              }
            }
          }
        }, {
          key: "placeChoose",
          value: function placeChoose(place) {
            this.placedChange(place);
            this.navCtrl.navigateRoot('/tabs/current-checkin');
          }
        }, {
          key: "placedChange",
          value: function placedChange(place) {
            this.selectedPlace = place;
            this.sharedDataService.currentSelectedCheckinPlace = place;
            this.showCheckedInPlacesList = false;

            if (place) {
              localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE, JSON.stringify(place));
            } else {
              localStorage.removeItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE);
            }

            this.observablesService.publishSomeData(_services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].ObserverKeys.CURRENT_CHECKED_IN_CHANGED);
          }
        }, {
          key: "checkoutPlace",
          value: function checkoutPlace(place, event) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            this.showCheckedInPlacesList = false;
            this.sharedDataService.checkOutForCheckedInDetail = place;
            this.navCtrl.navigateForward(['/checkinout-confirm'], {
              queryParams: {
                headerTitle: 'Check Out',
                title: 'You are checking out',
                subtitle: place.entityName,
                buttonTitle: 'Check Out Now',
                locationCheckType: _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"].ConfirmForCheckType.CheckOut
              }
            });
          }
        }, {
          key: "checkByQrCode",
          value: function checkByQrCode() {
            this.navCtrl.navigateForward('/dashboard-qrscan');
            this.scanQrCode.emit();
          }
        }, {
          key: "checkInByList",
          value: function checkInByList() {
            this.navCtrl.navigateForward('/tabs/dashboard/checkin-list');
          }
        }, {
          key: "shouldShowNavigationPlaceBtns",
          value: function shouldShowNavigationPlaceBtns() {
            var btnType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var shouldShowBtn = true;

            if (btnType && btnType === 1 && this.currentCheckinPlaceIndex === 0) {
              shouldShowBtn = false;
            }

            if (btnType && btnType === 2 && this.currentCheckinPlaceIndex === this.checkedPlaces.length - 1) {
              shouldShowBtn = false;
            }

            return shouldShowBtn && this.showPlaceNavigationBtns && this.checkedPlaces && this.checkedPlaces.length > 1;
          }
        }, {
          key: "previousPlace",
          value: function previousPlace() {
            if (this.currentCheckinPlaceIndex > 0) {
              this.currentCheckinPlaceIndex--;
              this.placedChange(this.checkedPlaces[this.currentCheckinPlaceIndex]);
            }
          }
        }, {
          key: "nextPlace",
          value: function nextPlace() {
            if (this.currentCheckinPlaceIndex < this.checkedPlaces.length - 1) {
              this.currentCheckinPlaceIndex++;
              this.placedChange(this.checkedPlaces[this.currentCheckinPlaceIndex]);
            }
          }
        }]);

        return DashboardHeaderComponent;
      }();

      DashboardHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_6__["ObservablesService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }];
      };

      DashboardHeaderComponent.propDecorators = {
        showPlaceNavigationBtns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isCurrentCheckin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideCheckinButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        scanQrCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      DashboardHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-header',
        template: _raw_loader_dashboard_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardHeaderComponent);
      /***/
    },

    /***/
    "J9Sb":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/multiple-choice-field/multiple-choice-field.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MultipleChoiceFieldComponent */

    /***/
    function J9Sb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultipleChoiceFieldComponent", function () {
        return MultipleChoiceFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_multiple_choice_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./multiple-choice-field.component.html */
      "s/8A");
      /* harmony import */


      var _multiple_choice_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./multiple-choice-field.component.scss */
      "Rnu6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");

      var MultipleChoiceFieldComponent = /*#__PURE__*/function () {
        function MultipleChoiceFieldComponent(sharedDataService) {
          _classCallCheck(this, MultipleChoiceFieldComponent);

          this.sharedDataService = sharedDataService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"];
        }

        _createClass(MultipleChoiceFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MultipleChoiceFieldComponent;
      }();

      MultipleChoiceFieldComponent.ctorParameters = function () {
        return [{
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }];
      };

      MultipleChoiceFieldComponent.propDecorators = {
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MultipleChoiceFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-multiple-choice-field',
        template: _raw_loader_multiple_choice_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_multiple_choice_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MultipleChoiceFieldComponent);
      /***/
    },

    /***/
    "JHVC":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/multiline-text-field/multiline-text-field.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function JHVC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-textarea {\n  padding: 0 10px !important;\n  margin: 0;\n  --border-radius: 3px;\n  --placeholder-color: #A1A8CA;\n  --color: #171538;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E8EAF2;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  width: 100%;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211bHRpbGluZS10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoibXVsdGlsaW5lLXRleHQtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0ExQThDQTtcbiAgLS1jb2xvcjogIzE3MTUzODtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U4RUFGMjtcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "Jz6E":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/portrait-orientation/portrait-orientation.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: PortraitOrientationComponent */

    /***/
    function Jz6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortraitOrientationComponent", function () {
        return PortraitOrientationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_portrait_orientation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./portrait-orientation.component.html */
      "0C2h");
      /* harmony import */


      var _portrait_orientation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./portrait-orientation.component.scss */
      "0bbC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");

      var PortraitOrientationComponent = /*#__PURE__*/function () {
        function PortraitOrientationComponent(sharedDataService, navController, screenOrientation) {
          _classCallCheck(this, PortraitOrientationComponent);

          this.sharedDataService = sharedDataService;
          this.navController = navController;
          this.screenOrientation = screenOrientation;
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(PortraitOrientationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            if (this.screenOrientation.type.includes('portrait')) {
              this.close.emit();
            } else {
              this.navController.back();
            }
          }
        }]);

        return PortraitOrientationComponent;
      }();

      PortraitOrientationComponent.ctorParameters = function () {
        return [{
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"]
        }];
      };

      PortraitOrientationComponent.propDecorators = {
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PortraitOrientationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-portrait-orientation',
        template: _raw_loader_portrait_orientation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_portrait_orientation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PortraitOrientationComponent);
      /***/
    },

    /***/
    "K0lI":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-header/modal-header.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K0lI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar mode=\"ios\">\n  <ion-title size=\"large\">{{ modalTitle }}</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button\n      *ngIf=\"showCloseButton\"\n      size=\"small\"\n      fill=\"clear\"\n      (click)=\"closeModal.emit()\"\n    >\n      <ion-icon\n        class=\"close-icon\"\n        slot=\"icon-only\"\n        src=\"./assets/icon/ic_close.svg\"\n      ></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "KF9x":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/multiline-text-field/multiline-text-field.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: MultilineTextFieldComponent */

    /***/
    function KF9x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultilineTextFieldComponent", function () {
        return MultilineTextFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_multiline_text_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./multiline-text-field.component.html */
      "dBkz");
      /* harmony import */


      var _multiline_text_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./multiline-text-field.component.scss */
      "JHVC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MultilineTextFieldComponent = /*#__PURE__*/function () {
        function MultilineTextFieldComponent() {
          _classCallCheck(this, MultilineTextFieldComponent);
        }

        _createClass(MultilineTextFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MultilineTextFieldComponent;
      }();

      MultilineTextFieldComponent.ctorParameters = function () {
        return [];
      };

      MultilineTextFieldComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MultilineTextFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-multiline-text-field',
        template: _raw_loader_multiline_text_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_multiline_text_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MultilineTextFieldComponent);
      /***/
    },

    /***/
    "KOdU":
    /*!***********************************************************************!*\
      !*** ./src/app/components/section-title/section-title.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function KOdU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** App Primary Color**/\n  --ion-color-app-primary: #8A25B1;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n}\n.content-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.content-container .fill-vertical-space {\n  flex: 1;\n}\nion-footer {\n  background-color: #FFFFFF;\n}\nion-label {\n  white-space: normal !important;\n}\n.text-tiny {\n  font-size: 0.7em;\n}\n.text-small {\n  font-size: 0.85em;\n}\n.text-big {\n  font-size: 1.4em;\n}\n.text-huge {\n  font-size: 1.8em;\n}\nion-item {\n  border-top: 1px solid #e8eaf2 !important;\n  border-bottom: 1px solid #e8eaf2 !important;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  padding: 10px 23px;\n}\nion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #171538;\n  white-space: pre-wrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2VjdGlvbi10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNaRjtBRGdCQTtFQUNFOzs7SUFBQTtFQXNFQTs7O0lBQUE7RUF3Q0E7OztJQUFBO0FDaEhGO0FENEpBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUMxSkY7QUQ0SkU7RUFDRSxPQUFBO0FDMUpKO0FEK0pBO0VBQ0UseUJBQUE7QUM1SkY7QUQrSkE7RUFDRSw4QkFBQTtBQzVKRjtBRGdLQTtFQUNFLGdCQUFBO0FDN0pGO0FEZ0tBO0VBQ0UsaUJBQUE7QUM3SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBRGdLQTtFQUNFLGdCQUFBO0FDN0pGO0FBaEhBO0VBQ0Msd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFtSEQ7QUFqSEM7RUFDQywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFtSEYiLCJmaWxlIjoic2VjdGlvbi10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuJHBhZGRpbmdIb3Jpem9udGFsOiAyM3B4O1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAvKiogQXBwIFByaW1hcnkgQ29sb3IqKi9cbiAgLS1pb24tY29sb3ItYXBwLXByaW1hcnk6ICM4QTI1QjE7XG5cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAgIC8vXG4gICAgLy8tLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAvL1xuICAgIC8vLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAvL1xuICAgIC8vLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC8vXG4gICAgLy8tLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gIC5maWxsLXZlcnRpY2FsLXNwYWNlIHtcbiAgICBmbGV4OiAxXG4gIH1cbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4vL0NsYXNzZXNzIGZvciBpbmR1Y3Rpb24gcmljaCB0ZXh0IGFuZCBhZ3JlZW1lbnQgdGV4dCAsIGNsYXNzZXNzIGFyZSBkeW5hbWljIGZyb20gYXBpXG4udGV4dC10aW55IHtcbiAgZm9udC1zaXplOiAuN2VtO1xufVxuXG4udGV4dC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG59XG5cbi50ZXh0LWJpZyB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi50ZXh0LWh1Z2Uge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuIiwiQGltcG9ydCAnLi9zcmMvdGhlbWUvdmFyaWFibGVzJztcblxuaW9uLWl0ZW0ge1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZWFmMiAhaW1wb3J0YW50O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFmMiAhaW1wb3J0YW50O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdC0tcGFkZGluZy10b3A6IDA7XG5cdC0tcGFkZGluZy1ib3R0b206IDA7XG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cdHBhZGRpbmc6IDEwcHggJHBhZGRpbmdIb3Jpem9udGFsO1xuXG5cdGlvbi1sYWJlbCB7XG5cdFx0Zm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG5cdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdGNvbG9yOiAjMTcxNTM4O1xuXHRcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xuXHR9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "KwcL":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function KwcL(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["jDxf", 43],
        "./pwa-camera-modal-instance.entry.js": ["37vE", 44],
        "./pwa-camera-modal.entry.js": ["cJxf", 45],
        "./pwa-camera.entry.js": ["eGHz", 46],
        "./pwa-toast.entry.js": ["fHjd", 47]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "KwcL";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "MXFd":
    /*!*********************************************************************!*\
      !*** ./src/app/components/color-picker/color-picker.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function MXFd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "N8yO":
    /*!***************************************************************************!*\
      !*** ./src/app/components/modal-header-dm/modal-header-dm.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function N8yO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  min-height: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n  --border-width: 0;\n  --border-color: transparent;\n}\nion-toolbar ion-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\nion-toolbar.toolbar-1 {\n  --background: #8A25B1;\n}\nion-toolbar.toolbar-1 ion-title {\n  font-weight: bold;\n  color: #FFFFFF;\n}\nion-toolbar.toolbar-1 .evacuation {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #F9461C;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 16px;\n}\nion-toolbar.toolbar-2 {\n  min-height: 50px;\n}\nion-toolbar.toolbar-2 ion-title {\n  font-weight: normal;\n  color: #171538;\n}\nion-toolbar .close-icon {\n  width: 22px;\n  height: 22px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGFsLWhlYWRlci1kbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUNGO0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFBTjtBQUdJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRE47QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFJSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUZOO0FBTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkoiLCJmaWxlIjoibW9kYWwtaGVhZGVyLWRtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5cbiAgJi50b29sYmFyLTEge1xuICAgIC0tYmFja2dyb3VuZDogIzhBMjVCMTtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIH1cblxuICAgIC5ldmFjdWF0aW9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgY29sb3I6ICNGOTQ2MUM7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gICYudG9vbGJhci0yIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuICB9XG5cbiAgLmNsb3NlLWljb24ge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "NXy/":
    /*!****************************************************************!*\
      !*** ./src/app/modals/search-location/search-location.page.ts ***!
      \****************************************************************/

    /*! exports provided: SearchLocationPage */

    /***/
    function NXy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchLocationPage", function () {
        return SearchLocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-location.page.html */
      "R9Wf");
      /* harmony import */


      var _search_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-location.page.scss */
      "BHjt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SearchLocationPage = /*#__PURE__*/function () {
        function SearchLocationPage(modalController) {
          var _this19 = this;

          _classCallCheck(this, SearchLocationPage);

          this.modalController = modalController;
          this.searchText = '';

          this.onDismiss = function (item) {
            _this19.modalController.dismiss(item);
          };
        }

        _createClass(SearchLocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            setTimeout(function () {
              if (_this20.searchBar) {
                if (_this20.searchBar.setFocus) {
                  _this20.searchBar.setFocus();
                } else {
                  _this20.searchBar.nativeElement.setFocus();
                }
              }
            }, 1000);
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {}
        }]);

        return SearchLocationPage;
      }();

      SearchLocationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      SearchLocationPage.propDecorators = {
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        searchBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['searchBar']
        }]
      };
      SearchLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-location',
        template: _raw_loader_search_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchLocationPage);
      /***/
    },

    /***/
    "Npox":
    /*!***********************************************!*\
      !*** ./src/app/services/validator.service.ts ***!
      \***********************************************/

    /*! exports provided: ValidatorService */

    /***/
    function Npox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidatorService", function () {
        return ValidatorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ValidatorService = /*#__PURE__*/function () {
        function ValidatorService() {
          _classCallCheck(this, ValidatorService);
        }

        _createClass(ValidatorService, [{
          key: "validateCheckboxes",
          value: function validateCheckboxes(boxes) {
            var valid = false;
            var k; // tslint:disable-next-line:forin

            for (k in boxes.value) {
              var val = boxes.value[k];

              if (val) {
                valid = true;
                break;
              }
            }

            if (valid) {
              return null;
            }

            return {
              checkboxRequired: true
            };
          }
        }]);

        return ValidatorService;
      }();

      ValidatorService.ctorParameters = function () {
        return [];
      };

      ValidatorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ValidatorService);
      /***/
    },

    /***/
    "O6nd":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-field/date-field.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O6nd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item date-item\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <div class=\"date-field\" [ngClass]=\"{'error': isError}\">\n        <ion-icon slot=\"start\" src=\"./assets/icon/calendar.svg\"></ion-icon>\n        <ion-datetime [placeholder]=\"placeholder\"\n                      display-timezone=\"utc\"\n                      max=\"2050\"\n                      [formControlName]=\"inputName\"></ion-datetime>\n    </div>\n</ion-item>\n";
      /***/
    },

    /***/
    "ORk7":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/number-decimal-field/number-decimal-field.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ORk7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item input-item planned-time\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <ion-input\n            [placeholder]=\"placeholder\"\n            inputmode=\"decimal\"\n            [formControlName]=\"inputName\"\n            [ngClass]=\"{'error': isError}\"></ion-input>\n</ion-item>\n";
      /***/
    },

    /***/
    "OlKZ":
    /*!***********************************************************!*\
      !*** ./src/app/components/exposure/exposure.component.ts ***!
      \***********************************************************/

    /*! exports provided: ExposureComponent */

    /***/
    function OlKZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExposureComponent", function () {
        return ExposureComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_exposure_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./exposure.component.html */
      "v4LO");
      /* harmony import */


      var _exposure_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./exposure.component.scss */
      "rjB9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExposureComponent = /*#__PURE__*/function () {
        function ExposureComponent() {
          _classCallCheck(this, ExposureComponent);
        }

        _createClass(ExposureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getPointColor",
          value: function getPointColor() {
            var points = parseInt(this.points, 0);

            if (points >= 0 && points <= 63) {
              // Below Action
              return '#19DC76';
            } else if (points >= 64 && points <= 99) {
              // Likely Below Action
              return '#91E7BA';
            } else if (points >= 100 && points <= 250) {
              // Above Action
              return '#FFF500';
            } else if (points >= 251 && points <= 399) {
              // Likely Above Limit
              return '#FFBA00';
            } else if (points >= 400) {
              // Above Limit
              return '#E74731';
            }

            return '#19DC76';
          }
        }]);

        return ExposureComponent;
      }();

      ExposureComponent.ctorParameters = function () {
        return [];
      };

      ExposureComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        points: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        containerClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ExposureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-exposure',
        template: _raw_loader_exposure_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exposure_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExposureComponent);
      /***/
    },

    /***/
    "OnT3":
    /*!*************************************************************************!*\
      !*** ./src/app/components/date-time-field/date-time-field.component.ts ***!
      \*************************************************************************/

    /*! exports provided: DateTimeFieldComponent */

    /***/
    function OnT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimeFieldComponent", function () {
        return DateTimeFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_date_time_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./date-time-field.component.html */
      "vZrh");
      /* harmony import */


      var _date_time_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-time-field.component.scss */
      "xeWq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateTimeFieldComponent = /*#__PURE__*/function () {
        function DateTimeFieldComponent() {
          _classCallCheck(this, DateTimeFieldComponent);
        }

        _createClass(DateTimeFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DateTimeFieldComponent;
      }();

      DateTimeFieldComponent.ctorParameters = function () {
        return [];
      };

      DateTimeFieldComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DateTimeFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-date-time-field',
        template: _raw_loader_date_time_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_date_time_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DateTimeFieldComponent);
      /***/
    },

    /***/
    "OpiQ":
    /*!**********************************************************!*\
      !*** ./src/app/modals/home-exit-dm/home-exit-dm.page.ts ***!
      \**********************************************************/

    /*! exports provided: HomeExitDmPage */

    /***/
    function OpiQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeExitDmPage", function () {
        return HomeExitDmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_exit_dm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home-exit-dm.page.html */
      "oSVs");
      /* harmony import */


      var _home_exit_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-exit-dm.page.scss */
      "1dRF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HomeExitDmPage = /*#__PURE__*/function () {
        function HomeExitDmPage(modalController) {
          var _this21 = this;

          _classCallCheck(this, HomeExitDmPage);

          this.modalController = modalController;

          this.onDismiss = function (status) {
            _this21.modalController.dismiss(status);
          };
        }

        _createClass(HomeExitDmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeExitDmPage;
      }();

      HomeExitDmPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      HomeExitDmPage.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        okBtnText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cancelBtnText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      HomeExitDmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-exit-dm',
        template: _raw_loader_home_exit_dm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_exit_dm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeExitDmPage);
      /***/
    },

    /***/
    "OziU":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/topnavigations-btns-dm/topnavigations-btns-dm.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TopnavigationsBtnsDmComponent */

    /***/
    function OziU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopnavigationsBtnsDmComponent", function () {
        return TopnavigationsBtnsDmComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_topnavigations_btns_dm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./topnavigations-btns-dm.component.html */
      "w7Qz");
      /* harmony import */


      var _topnavigations_btns_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./topnavigations-btns-dm.component.scss */
      "smf7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");

      var TopnavigationsBtnsDmComponent = /*#__PURE__*/function () {
        function TopnavigationsBtnsDmComponent(navController, apiService, sharedDataService, utilService) {
          _classCallCheck(this, TopnavigationsBtnsDmComponent);

          this.navController = navController;
          this.apiService = apiService;
          this.sharedDataService = sharedDataService;
          this.utilService = utilService;
        }

        _createClass(TopnavigationsBtnsDmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkInOutClick",
          value: function checkInOutClick() {
            this.navController.navigateForward('checkinout-option-dm');
          }
        }, {
          key: "documentsClick",
          value: function documentsClick() {
            this.navController.navigateRoot('documents-dm');
          }
        }, {
          key: "formsClick",
          value: function formsClick() {
            this.navController.navigateRoot('forms-dm');
          }
        }, {
          key: "permitsClick",
          value: function permitsClick() {
            this.navController.navigateRoot('permits-dm');
          }
        }, {
          key: "evacuationClick",
          value: function evacuationClick() {
            this.navController.navigateForward('evacuation-dm');
          }
        }, {
          key: "generatePermitClick",
          value: function generatePermitClick() {
            var _this22 = this;

            var _a;

            this.utilService.presentLoadingWithOptions();
            var companyID = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
            this.apiService.getDedicatedModeAvailableWorkPermits(companyID).subscribe(function (response) {
              _this22.utilService.hideLoading();

              if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this22.sharedDataService.availableWorkPermits = response.Result;

                _this22.navController.navigateForward('checkin-workpermit');
              }
            }, function (error) {
              _this22.utilService.hideLoading();
            });
          }
        }]);

        return TopnavigationsBtnsDmComponent;
      }();

      TopnavigationsBtnsDmComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      TopnavigationsBtnsDmComponent.propDecorators = {
        activeBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TopnavigationsBtnsDmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-topnavigations-btns-dm',
        template: _raw_loader_topnavigations_btns_dm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_topnavigations_btns_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TopnavigationsBtnsDmComponent);
      /***/
    },

    /***/
    "QXXz":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/sync-warning-msg/sync-warning-msg.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function QXXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".warning-view {\n  background: #FFEDBD;\n  padding: 12px 20px;\n  margin: 41px 25px 25px;\n}\n.warning-view ion-chip {\n  padding: 0;\n  margin: 0;\n}\n.warning-view ion-chip ion-icon {\n  margin-left: 0;\n  width: 16px;\n  height: 16px;\n}\n.warning-view ion-chip ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  color: #836A27;\n}\n.warning-view p {\n  margin-top: 8px;\n  margin-bottom: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #836A27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N5bmMtd2FybmluZy1tc2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQU47QUFHSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFETjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUpKIiwiZmlsZSI6InN5bmMtd2FybmluZy1tc2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZy12aWV3IHtcbiAgYmFja2dyb3VuZDogI0ZGRURCRDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDQxcHggMjVweCAyNXB4O1xuXG5cbiAgaW9uLWNoaXAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogIzgzNkEyNztcbiAgICB9XG4gIH1cblxuXG4gIHAge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzgzNkEyNztcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "QZp1":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/dashboard-header-dm/dashboard-header-dm.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function QZp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  min-height: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n  --background: #8A25B1;\n}\nion-toolbar ion-title {\n  text-align: left;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 17px;\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\nion-toolbar ion-buttons ion-button {\n  margin-right: 32px;\n}\nion-toolbar ion-buttons ion-button ion-icon {\n  width: 20px;\n  height: 20px;\n  color: white;\n}\nion-toolbar ion-buttons ion-button .badge {\n  position: absolute;\n  top: 0;\n  right: -0.2rem;\n  opacity: 0.9;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #FFBA00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC1oZWFkZXItZG0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQU47QUFHSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRE4iLCJmaWxlIjoiZGFzaGJvYXJkLWhlYWRlci1kbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgbWluLWhlaWdodDogNjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjOEEyNUIxO1xuXG4gIGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cblxuICBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cblxuICAgIC5iYWRnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogLTAuMnJlbTtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJBMDA7XG4gICAgfVxuICB9XG5cbn1cblxuXG4iXX0= */";
      /***/
    },

    /***/
    "Qkoa":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/number-integer-field/number-integer-field.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qkoa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item input-item planned-time\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <ion-input\n            [placeholder]=\"placeholder\"\n            inputmode=\"numeric\"\n            [formControlName]=\"inputName\"\n            [ngClass]=\"{'error': isError}\"></ion-input>\n</ion-item>\n";
      /***/
    },

    /***/
    "Qxq/":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/topnavigations-segments-dm/topnavigations-segments-dm.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qxq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #E8EAF2;\n  --border-color: transparent;\n  --border-width: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-right: 0;\n  padding-top: 0 !important;\n}\nion-toolbar ion-buttons {\n  margin: 0;\n}\nion-toolbar ion-searchbar {\n  margin-top: 8px;\n  padding: 0;\n  width: 100%;\n  --background: transparent;\n  --border-radius: 0;\n  --box-shadow: none;\n  --icon-color: #A1A8CA;\n  --placeholder-color: #171538;\n  --placeholder-font-style: normal;\n  --placeholder-opacity: 0.8;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #171538;\n}\nion-toolbar ion-searchbar .searchbar-input-container {\n  height: 50px !important;\n  width: 100%;\n}\nion-toolbar ion-searchbar ion-icon {\n  left: 40px !important;\n}\nion-toolbar ion-searchbar input {\n  padding-left: 75px !important;\n}\nion-toolbar ion-segment ion-segment-button {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  line-height: 22px;\n  display: flex;\n  align-items: center;\n  --color-checked: #2A6FDB;\n  --color: #777595;\n  text-transform: none;\n}\nion-toolbar .search-btn {\n  --background: #A1A8CA;\n  --border-radius: 0;\n  height: 56px;\n  width: 56px;\n  --color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvcG5hdmlnYXRpb25zLXNlZ21lbnRzLWRtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtBQUNKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBRk47QUFLSTtFQUNFLHFCQUFBO0FBSE47QUFNSTtFQUNFLDZCQUFBO0FBSk47QUFTSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVBOO0FBV0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBVEoiLCJmaWxlIjoidG9wbmF2aWdhdGlvbnMtc2VnbWVudHMtZG0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0U4RUFGMjtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWljb24tY29sb3I6ICNBMUE4Q0E7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzE3MTUzODtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuODtcbiAgICAvLy0tY2xlYXItYnV0dG9uLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzE3MTUzODtcblxuICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgbGVmdDogNDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogNzVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogIzJBNkZEQjtcbiAgICAgIC0tY29sb3I6ICM3Nzc1OTU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQTFBOENBO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "R4nH":
    /*!****************************************!*\
      !*** ./src/app/pipes/time-ago.pipe.ts ***!
      \****************************************/

    /*! exports provided: TimeAgoPipe */

    /***/
    function R4nH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function () {
        return TimeAgoPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TimeAgoPipe = /*#__PURE__*/function () {
        function TimeAgoPipe() {
          _classCallCheck(this, TimeAgoPipe);
        }

        _createClass(TimeAgoPipe, [{
          key: "transform",
          value: function transform(d) {
            var currentDate = new Date(new Date().toUTCString());
            var date = new Date(d + 'Z');
            var year = currentDate.getFullYear() - date.getFullYear();
            var month = currentDate.getMonth() - date.getMonth();
            var day = currentDate.getDate() - date.getDate();
            var hour = currentDate.getHours() - date.getHours();
            var minute = currentDate.getMinutes() - date.getMinutes();
            var second = currentDate.getSeconds() - date.getSeconds();
            var createdSecond = year * 31556926 + month * 2629746 + day * 86400 + hour * 3600 + minute * 60 + second;

            if (createdSecond >= 31556926) {
              var yearAgo = Math.floor(createdSecond / 31556926);
              return yearAgo > 1 ? yearAgo + ' years ago' : yearAgo + ' year ago';
            } else if (createdSecond >= 2629746) {
              var monthAgo = Math.floor(createdSecond / 2629746);
              return monthAgo > 1 ? monthAgo + ' months ago' : monthAgo + ' month ago';
            } else if (createdSecond >= 86400) {
              var dayAgo = Math.floor(createdSecond / 86400);
              return dayAgo > 1 ? dayAgo + ' days ago' : dayAgo + ' day ago';
            } else if (createdSecond >= 3600) {
              var hourAgo = Math.floor(createdSecond / 3600);
              return hourAgo > 1 ? hourAgo + ' hours ago' : hourAgo + ' hour ago';
            } else if (createdSecond >= 60) {
              var minuteAgo = Math.floor(createdSecond / 60);
              return minuteAgo > 1 ? minuteAgo + ' minutes ago' : minuteAgo + ' minute ago';
            } else if (createdSecond < 60) {
              return createdSecond > 1 ? createdSecond + ' seconds ago' : createdSecond + ' second ago';
            } else if (createdSecond < 0) {
              return '0 second ago';
            }
          }
        }]);

        return TimeAgoPipe;
      }();

      TimeAgoPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'timeAgo'
      })], TimeAgoPipe);
      /***/
    },

    /***/
    "R9Wf":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/search-location/search-location.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R9Wf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-searchbar #searchBar autofocus placeholder=\"Search entities\" mode=\"md\" [(ngModel)]=\"searchText\"></ion-searchbar>\n<ion-content>\n    <ion-list inset=\"false\" lines=\"none\">\n        <ion-item *ngFor=\"let item of list | listFilter:searchText:'locationName'\" (click)=\"onDismiss(item)\">\n            <ion-label>{{item.locationName}}</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Rnu6":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/multiple-choice-field/multiple-choice-field.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rnu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** App Primary Color**/\n  --ion-color-app-primary: #8A25B1;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n}\n.content-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.content-container .fill-vertical-space {\n  flex: 1;\n}\nion-footer {\n  background-color: #FFFFFF;\n}\nion-label {\n  white-space: normal !important;\n}\n.text-tiny {\n  font-size: 0.7em;\n}\n.text-small {\n  font-size: 0.85em;\n}\n.text-big {\n  font-size: 1.4em;\n}\n.text-huge {\n  font-size: 1.8em;\n}\nion-item {\n  --min-height: 18px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  margin: 0 23px;\n}\nion-item ion-checkbox {\n  --border-color: #A1A8CA;\n  --border-color-checked: #A1A8CA;\n  --checkmark-color: #A1A8CA;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius: 2px;\n  --background-checked: transparent;\n  --background: transparent;\n}\nion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbXVsdGlwbGUtY2hvaWNlLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEsdUJBQUE7RUFDQSxnQ0FBQTtBQ1pGO0FEZ0JBO0VBQ0U7OztJQUFBO0VBc0VBOzs7SUFBQTtFQXdDQTs7O0lBQUE7QUNoSEY7QUQ0SkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQzFKRjtBRDRKRTtFQUNFLE9BQUE7QUMxSko7QUQrSkE7RUFDRSx5QkFBQTtBQzVKRjtBRCtKQTtFQUNFLDhCQUFBO0FDNUpGO0FEZ0tBO0VBQ0UsZ0JBQUE7QUM3SkY7QURnS0E7RUFDRSxpQkFBQTtBQzdKRjtBRGdLQTtFQUNFLGdCQUFBO0FDN0pGO0FEZ0tBO0VBQ0UsZ0JBQUE7QUM3SkY7QUFoSEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQW1IRjtBQWpIRTtFQUNFLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFtSEo7QUFoSEU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBa0hKIiwiZmlsZSI6Im11bHRpcGxlLWNob2ljZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuJHBhZGRpbmdIb3Jpem9udGFsOiAyM3B4O1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAvKiogQXBwIFByaW1hcnkgQ29sb3IqKi9cbiAgLS1pb24tY29sb3ItYXBwLXByaW1hcnk6ICM4QTI1QjE7XG5cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAgIC8vXG4gICAgLy8tLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAvL1xuICAgIC8vLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAvL1xuICAgIC8vLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC8vXG4gICAgLy8tLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gIC5maWxsLXZlcnRpY2FsLXNwYWNlIHtcbiAgICBmbGV4OiAxXG4gIH1cbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4vL0NsYXNzZXNzIGZvciBpbmR1Y3Rpb24gcmljaCB0ZXh0IGFuZCBhZ3JlZW1lbnQgdGV4dCAsIGNsYXNzZXNzIGFyZSBkeW5hbWljIGZyb20gYXBpXG4udGV4dC10aW55IHtcbiAgZm9udC1zaXplOiAuN2VtO1xufVxuXG4udGV4dC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG59XG5cbi50ZXh0LWJpZyB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi50ZXh0LWh1Z2Uge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuIiwiQGltcG9ydCBcIi4vc3JjL3RoZW1lL3ZhcmlhYmxlc1wiO1xuXG5pb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBtYXJnaW46IDAgJHBhZGRpbmdIb3Jpem9udGFsO1xuXG4gIGlvbi1jaGVja2JveCB7XG4gICAgLS1ib3JkZXItY29sb3I6ICNBMUE4Q0E7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0ExQThDQTtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogI0ExQThDQTtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjMTcxNTM4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "SKwB":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/archived-item/archived-item.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SKwB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item tappable (click)=\"itemSelect.emit()\">\n    <!--                    <ion-icon slot=\"start\" [src]=\"UtilService.FileIcon(item.documentFileName)\"></ion-icon>-->\n\n    <div class=\"col-one\">\n        <ion-img *ngIf=\"icon\" slot=\"start\" [src]=\"icon\"></ion-img>\n        <ion-text *ngIf=\"colFirst\" class=\"text-style-1\">{{colFirst}}</ion-text>\n    </div>\n\n    <ion-text *ngIf=\"colSecondHighlighted\" class=\"col-two text-style-2\">\n        <span class=\"label-for-highlight-text\">{{colSecond}}</span>\n        <span class=\"highlight\">{{colSecondHighlighted}}</span>\n    </ion-text>\n\n\n    <ion-text *ngIf=\"colThirdHighlighted\" class=\"col-three text-style-2\">\n        <span class=\"label-for-highlight-text\">{{colThird}}</span>\n        <span class=\"highlight\">{{colThirdHighlighted}}</span>\n    </ion-text>\n\n</ion-item>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: HttpLoaderFactory, AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/unique-device-id/ngx */
      "/+Rg");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/observables.service */
      "mxI+");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/account.service */
      "flj8");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/badge/ngx */
      "2yhU");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"],
          Geolocation = _capacitor_core__WEBP.Geolocation,
          Permissions = _capacitor_core__WEBP.Permissions,
          App = _capacitor_core__WEBP.App,
          SplashScreen = _capacitor_core__WEBP.SplashScreen;

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, ngZone, statusBar, uniqueDeviceID, sharedDataService, utilService, observablesService, navController, screenOrientation, accountService, apiService, router, badge, translateService) {
          var _this23 = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.ngZone = ngZone;
          this.statusBar = statusBar;
          this.uniqueDeviceID = uniqueDeviceID;
          this.sharedDataService = sharedDataService;
          this.utilService = utilService;
          this.observablesService = observablesService;
          this.navController = navController;
          this.screenOrientation = screenOrientation;
          this.accountService = accountService;
          this.apiService = apiService;
          this.router = router;
          this.badge = badge;
          this.translateService = translateService;

          this.appSettingLoaded = function (isDeviceAssignedForDedicatedMode) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            _this23.ngZone.run(function () {
              var _a;

              _this23.utilService.hideLoading();

              if (isDeviceAssignedForDedicatedMode) {
                // If already personal mode user logged in then logout it
                if (!_this23.sharedDataService.dedicatedMode && _this23.accountService.userValue && ((_a = _this23.accountService.userValue) === null || _a === void 0 ? void 0 : _a.userId)) {
                  _this23.accountService.logout(_this23.accountService.userValue.userId, false);
                }

                _this23.configureAppForDedicatedMode(data);
              } else {
                // If already dedicated mode then clear dedicated mode data
                if (_this23.sharedDataService.dedicatedMode) {
                  _this23.sharedDataService.dedicatedModeDeviceDeleted();
                }

                _this23.configureAppForPersonalMode();
              }
            });
          };

          this.getDeviceUniqueId = function (callBack) {
            _this23.uniqueDeviceID.get().then(function (uuid) {
              console.log('Device UUID ', uuid);

              if (uuid && uuid.length > 0) {
                _this23.sharedDataService.deviceUID = uuid;
              } else {
                _this23.sharedDataService.deviceUID = '';
              }

              _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);
            })["catch"](function (error) {
              console.log(error);
              _this23.sharedDataService.deviceUID = '';

              if (_services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].isLocalHost()) {
                _this23.sharedDataService.deviceUID = '67DA70A1-FD31-4B48-81F6-74E9EB356632';
              }

              console.log('Device UID ', _this23.sharedDataService.deviceUID);

              _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);
            });
          };

          this.setupDeepLink = function () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].isWebApp) {
              // reset password url https://cg.utopia-test.com/Login/ResetPassword?code=TTQ4LOM8
              // setup new account https://cg.utopia-test.com/Login/AccountSetup/545a1db3-f91c-48eb-be17-b9e4dd346322
              //
              // reset password url https://login.be-safetech.com/Login/ResetPassword?code=TTQ4LOM8
              // setup new account https://login.be-safetech.com/Login/AccountSetup/545a1db3-f91c-48eb-be17-b9e4dd346322
              App.addListener('appUrlOpen', function (data) {
                _this23.ngZone.run(function () {
                  // Example url: https://beerswift.app/tabs/tab2
                  // slug = /tabs/tab2
                  var url = data.url;

                  if (url.indexOf('ResetPassword') !== -1) {
                    _this23.sharedDataService.isNavigationTypeDeepLink = true;

                    var code = _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].getQueryStringValue(url, 'code');

                    _this23.router.navigate(['forgot-password-reset'], {
                      queryParams: {
                        code: code
                      }
                    });
                  } else if (url.indexOf('AccountSetup') !== -1) {
                    _this23.sharedDataService.isNavigationTypeDeepLink = true;
                    var userId = url.split('/').pop();

                    _this23.router.navigate(['new-account-setup'], {
                      queryParams: {
                        userId: userId
                      }
                    });
                  }
                });
              });
            }
          };

          this.checkForAccessKey = function (callBack) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this24 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!localStorage.getItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.API_ACCESS_KEY)) {
                        this.accountService.getAccessKey().subscribe(function (data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                              while (1) {
                                switch (_context11.prev = _context11.next) {
                                  case 0:
                                    _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);

                                  case 1:
                                  case "end":
                                    return _context11.stop();
                                }
                              }
                            }, _callee11);
                          }));
                        }, function (error) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                            return regeneratorRuntime.wrap(function _callee12$(_context12) {
                              while (1) {
                                switch (_context12.prev = _context12.next) {
                                  case 0:
                                    _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);

                                  case 1:
                                  case "end":
                                    return _context12.stop();
                                }
                              }
                            }, _callee12);
                          }));
                        });
                      } else {
                        _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);
                      }

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          };

          this.checkForToken = function (callBack) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this25 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!localStorage.getItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.API_TOKEN)) {
                        this.accountService.getToken().subscribe(function (token) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                              while (1) {
                                switch (_context14.prev = _context14.next) {
                                  case 0:
                                    _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);

                                  case 1:
                                  case "end":
                                    return _context14.stop();
                                }
                              }
                            }, _callee14);
                          }));
                        }, function (error) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                            return regeneratorRuntime.wrap(function _callee15$(_context15) {
                              while (1) {
                                switch (_context15.prev = _context15.next) {
                                  case 0:
                                    _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);

                                  case 1:
                                  case "end":
                                    return _context15.stop();
                                }
                              }
                            }, _callee15);
                          }));
                        });
                      } else {
                        _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack);
                      }

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          };

          this.checkDeviceForDeticatedMode = function (callBack) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this26 = this;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      this.apiService.getDeviceEntityDetails(this.sharedDataService.deviceUID).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                          var _a, _b, _c;

                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                            while (1) {
                              switch (_context17.prev = _context17.next) {
                                case 0:
                                  if (data.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].ApiResponseCode.RequestSuccessful && data.Result && ((_a = data.Result) === null || _a === void 0 ? void 0 : _a.deviceDetailData) && ((_c = (_b = data.Result) === null || _b === void 0 ? void 0 : _b.deviceDetailData) === null || _c === void 0 ? void 0 : _c.companyID)) {
                                    _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack, {
                                      isDeviceAssigned: true,
                                      data: data
                                    });
                                  } else {
                                    _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack, {
                                      isDeviceAssigned: false
                                    });
                                  }

                                case 1:
                                case "end":
                                  return _context17.stop();
                              }
                            }
                          }, _callee17);
                        }));
                      }, function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) {
                              switch (_context18.prev = _context18.next) {
                                case 0:
                                  _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].fireCallBack(callBack, {
                                    isDeviceAssigned: this.sharedDataService.dedicatedMode
                                  });

                                case 1:
                                case "end":
                                  return _context18.stop();
                              }
                            }
                          }, _callee18, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          };

          this.configureAppForDedicatedMode = function () {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this27 = this;

              var _d, _e, _f, _g;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.IS_DEDICATED_MODE, 'true');
                      this.sharedDataService.dedicatedMode = true;

                      if (data) {
                        localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL, JSON.stringify((_d = data.Result) === null || _d === void 0 ? void 0 : _d.deviceDetailData));
                        localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES, JSON.stringify((_e = data.Result) === null || _e === void 0 ? void 0 : _e.deviceEntityData));
                        this.sharedDataService.dedicatedModeDeviceDetailData = (_f = data.Result) === null || _f === void 0 ? void 0 : _f.deviceDetailData;
                        this.sharedDataService.dedicatedModeAssignedEntities = (_g = data.Result) === null || _g === void 0 ? void 0 : _g.deviceEntityData;

                        if (this.sharedDataService.dedicatedModeAssignedEntities && this.sharedDataService.dedicatedModeAssignedEntities.length === 1) {
                          this.sharedDataService.dedicatedModeLocationUse = this.sharedDataService.dedicatedModeAssignedEntities[0];
                          localStorage.setItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.DEDICATED_MODE_LOCATION_USE, JSON.stringify(this.sharedDataService.dedicatedModeAssignedEntities[0]));
                        }
                      }

                      try {
                        if (!_services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].isLocalHost()) {
                          if (this.platform.is('ios')) {
                            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY);
                          } else {
                            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                          }
                        }
                      } catch (e) {}

                      if (!this.sharedDataService.isNavigationTypeDeepLink) {
                        if (this.sharedDataService.dedicatedModeLocationUse) {
                          this.navController.navigateRoot('dashboard-dm', {
                            replaceUrl: true
                          });
                        } else {
                          this.navController.navigateRoot('choose-location');
                        }
                      }

                      setTimeout(function () {
                        _this27.configureForLocation();
                      }, 1000);
                      this.sharedDataService.updatePushSettingOnServer(false);

                    case 7:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          };

          this.configureAppForPersonalMode = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this28 = this;

              var user;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      try {
                        if (!_services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"].isLocalHost()) {
                          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                        }
                      } catch (e) {}

                      if (!this.sharedDataService.isNavigationTypeDeepLink) {
                        user = this.accountService.userValue;

                        if ((user === null || user === void 0 ? void 0 : user.userId) && !user.isMobileSessionExpiration) {
                          this.navController.navigateRoot('/tabs/dashboard', {
                            replaceUrl: true
                          });

                          if (!this.sharedDataService.isLoginAfterAppOpen && (user === null || user === void 0 ? void 0 : user.companyID)) {
                            this.accountService.checkMobileSessionExpirationSetting(user === null || user === void 0 ? void 0 : user.companyID).subscribe(function (response) {
                              var _a;

                              if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].ApiResponseCode.RequestSuccessful) {
                                if ((_a = response.Result) === null || _a === void 0 ? void 0 : _a.isMobileSessionExpiration) {
                                  _this28.navController.navigateRoot('/login', {
                                    replaceUrl: true
                                  });
                                }
                              }
                            });
                          }
                        } else {
                          this.navController.navigateRoot('/login');
                        }
                      }

                      localStorage.removeItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.IS_DEDICATED_MODE);
                      setTimeout(function () {
                        _this28.sharedDataService.configureForPushNotification();

                        _this28.configureForLocation();
                      }, 1000);

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          };

          this.configureForLocation = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this29 = this;

              var locationPermission;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.prev = 0;
                      _context22.next = 3;
                      return Permissions.query({
                        name: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["PermissionType"].Geolocation
                      });

                    case 3:
                      locationPermission = _context22.sent;

                      if (!(locationPermission.state !== 'granted' && Geolocation && Geolocation.requestPermissions)) {
                        _context22.next = 7;
                        break;
                      }

                      _context22.next = 7;
                      return Geolocation.requestPermissions();

                    case 7:
                      Geolocation.getCurrentPosition().then(function (response) {
                        if (response) {
                          _this29.sharedDataService.myCurrentGeoLocation = response;
                          console.log('Current Location CP', response);
                        }
                      })["catch"](function (error) {
                        console.log('GetCurrentPosition Error ', error);
                      });
                      _context22.next = 12;
                      break;

                    case 10:
                      _context22.prev = 10;
                      _context22.t0 = _context22["catch"](0);

                    case 12:
                      try {
                        Geolocation.watchPosition({}, function (response) {
                          if (response) {
                            _this29.sharedDataService.myCurrentGeoLocation = response;
                            console.log('Current Location WP', response);
                          }
                        });
                      } catch (e) {
                        console.log('WatchPosition Error ', e);
                      }

                    case 13:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, null, [[0, 10]]);
            }));
          };

          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this30 = this;

            this.platform.ready().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                var _this31 = this;

                var appLang;
                return regeneratorRuntime.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        this.statusBar.styleDefault();
                        this.sharedDataService.apiServiceRerence = this.apiService;
                        appLang = localStorage.getItem(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].LocalStorageKeys.APP_LANGUAGE);

                        if (appLang) {
                          this.translateService.use(appLang);
                        }

                        _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].App.addListener('appRestoredResult', function (data) {
                          _this31.observablesService.publishSomeData(_services_enum_service__WEBPACK_IMPORTED_MODULE_9__["EnumService"].ObserverKeys.APP_RESTORED_RESULT, data.data);
                        });

                        _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].App.addListener('backButton', function (data) {});

                        this.setupDeepLink();
                        this.loadAppSettings();
                        setTimeout(function () {
                          _this31.ngZone.run(function () {
                            SplashScreen.hide();

                            _this31.badge.clear();
                          });
                        }, 1500);

                      case 9:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23, this);
              }));
            });
          }
        }, {
          key: "loadAppSettings",
          value: function loadAppSettings() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this32 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      this.getDeviceUniqueId(function () {
                        _this32.checkForAccessKey(function () {
                          _this32.checkForToken(function () {
                            _this32.apiService.getTimeZoneList().subscribe(function () {}); // Test demo - should be remove after development complete
                            // For test dedicated mode in mobile
                            // if (this.sharedDataService.deviceUID === '67DA70A1-FD31-4B48-81F6-74E9EB356632' ||
                            //     this.sharedDataService.deviceUID === 'd99fe84c-5538-25ce-8637-870495265348') {
                            //     this.sharedDataService.isTablet = true;
                            //     setTimeout(() => {
                            //         this.navController.navigateForward('checkinout-photoidentity-dm');
                            //     }, 7000);
                            // }
                            //   if (
                            //     localStorage.getItem(StaticDataService.anyScreenTestLocalStoragekey)
                            //   ) {
                            //     // this.sharedDataService.isTablet = true;
                            //     setTimeout(() => {
                            //       this.navController.navigateForward(
                            //         localStorage.getItem(
                            //           StaticDataService.anyScreenTestLocalStoragekey
                            //         )
                            //       );
                            //     }, 7000);
                            //   }
                            //   if (localStorage.getItem(StaticDataService.isDeviceTestTablet)) {
                            //     this.sharedDataService.isTablet = true;
                            //   }
                            // end


                            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].isWebApp) {
                              if (_this32.sharedDataService.isTablet) {
                                _this32.checkDeviceForDeticatedMode(function (_ref2) {
                                  var isDeviceAssigned = _ref2.isDeviceAssigned,
                                      data = _ref2.data;

                                  _this32.appSettingLoaded(isDeviceAssigned, data);
                                });
                              } else {
                                _this32.appSettingLoaded(false);
                              }
                            } else {
                              _this32.utilService.hideLoading();
                            }
                          });
                        });
                      });

                    case 2:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__["UniqueDeviceID"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_10__["SharedDataService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_8__["ObservablesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]
        }, {
          type: _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_16__["Badge"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TKCx":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/back-continue-toolbar/back-continue-toolbar.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: BackContinueToolbarComponent */

    /***/
    function TKCx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackContinueToolbarComponent", function () {
        return BackContinueToolbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_back_continue_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./back-continue-toolbar.component.html */
      "EbIq");
      /* harmony import */


      var _back_continue_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./back-continue-toolbar.component.scss */
      "puuh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BackContinueToolbarComponent = /*#__PURE__*/function () {
        function BackContinueToolbarComponent() {
          _classCallCheck(this, BackContinueToolbarComponent);

          this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this["continue"] = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(BackContinueToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BackContinueToolbarComponent;
      }();

      BackContinueToolbarComponent.ctorParameters = function () {
        return [];
      };

      BackContinueToolbarComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableRightBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideRightBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        back: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        "continue": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      BackContinueToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-back-continue-toolbar',
        template: _raw_loader_back_continue_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_back_continue_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BackContinueToolbarComponent);
      /***/
    },

    /***/
    "UZc2":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/dashboard-header/dashboard-header.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function UZc2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar.part-1 {\n  min-height: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n  --background: #8A25B1;\n}\nion-toolbar.part-1 ion-title {\n  text-align: left;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\nion-toolbar.part-1 .scan-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 16px;\n}\nion-item.checked-in-status-view {\n  --min-height: 39px;\n  --background: #AA39D6;\n}\nion-item.checked-in-status-view.remove-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-item.checked-in-status-view .status-circle {\n  width: 10px;\n  height: 10px;\n  background: #E8EAF2;\n  border-radius: 8px;\n  margin-right: 9px;\n}\nion-item.checked-in-status-view .status-circle.checked-in {\n  background: #19DC76;\n}\nion-item.checked-in-status-view ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  color: #FFFFFF;\n}\nion-item.checked-in-status-view .checkin-view-btn {\n  margin-right: 0;\n  padding: 8px;\n  height: auto;\n}\nion-item.checked-in-status-view .checkin-view-btn ion-icon {\n  width: 22px;\n  height: 22px;\n  color: #ffffff;\n}\nion-item.checked-in-status-view .arrow-button {\n  --color: #FFFFFF;\n  width: 58px;\n  height: 44px;\n  margin: 0;\n}\nion-item.checked-in-status-view .arrow-button ion-icon {\n  width: 16px;\n  height: 16px;\n}\n.checkin-btns {\n  height: 37px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background: #8A25B1;\n  border-top: 0.5px solid #E8EAF2;\n}\n.checkin-btns ion-button {\n  margin: 0;\n  height: 100%;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  --color: #FFFFFF;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.checkin-btns ion-button.left {\n  border-right: 0.5px solid #E8EAF2;\n}\n.check-in-places-list-container {\n  z-index: 10;\n  width: 100%;\n}\n.check-in-places-list-container .list-container {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.35);\n  height: 100vh;\n  width: 100%;\n  overflow-y: auto;\n  padding-bottom: 200px;\n}\n.check-in-places-list-container .check-in-places-list ion-item {\n  --padding-start: 20px;\n}\n.check-in-places-list-container .check-in-places-list ion-item.selected {\n  --background: #F6F8FA;\n}\n.check-in-places-list-container .check-in-places-list ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n.check-in-places-list-container .check-in-places-list .checkin-view-btn {\n  margin-right: 0;\n  padding: 8px;\n  height: auto;\n}\n.check-in-places-list-container .check-in-places-list .checkin-view-btn ion-icon {\n  width: 22px;\n  height: 22px;\n  color: #575568;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBTUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBSEY7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSko7QUFNSTtFQUNFLG1CQUFBO0FBSk47QUFRRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTko7QUFTRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFQTjtBQVlFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFWSjtBQVlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFWTjtBQWVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBWkY7QUFjRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWko7QUFjSTtFQUNFLGlDQUFBO0FBWk47QUFpQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWRGO0FBZ0JFO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQWRKO0FBa0JJO0VBQ0UscUJBQUE7QUFoQk47QUFrQk07RUFDRSxxQkFBQTtBQWhCUjtBQW9CSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFsQk47QUFxQkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFuQk47QUFxQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFuQlIiLCJmaWxlIjoiZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgJi5wYXJ0LTEge1xuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tYmFja2dyb3VuZDogIzhBMjVCMTtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB9XG5cbiAgICAuc2Nhbi1pY29uIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24taXRlbS5jaGVja2VkLWluLXN0YXR1cy12aWV3IHtcbiAgLS1taW4taGVpZ2h0OiAzOXB4O1xuICAtLWJhY2tncm91bmQ6ICNBQTM5RDY7XG5cbiAgJi5yZW1vdmUtcGFkZGluZyB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIH1cblxuICAuc3RhdHVzLWNpcmNsZSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNFOEVBRjI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOXB4O1xuXG4gICAgJi5jaGVja2VkLWluIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxOURDNzY7XG4gICAgfVxuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cblxuICAuY2hlY2tpbi12aWV3LWJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxuXG5cbiAgLmFycm93LWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogNThweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbi5jaGVja2luLWJ0bnMge1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjOEEyNUIxO1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjRThFQUYyOztcblxuICBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAtLWNvbG9yOiAjRkZGRkZGO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJi5sZWZ0IHtcbiAgICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgI0U4RUFGMjtcbiAgICB9XG4gIH1cbn1cblxuLmNoZWNrLWluLXBsYWNlcy1saXN0LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTAwJTtcblxuICAubGlzdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIH1cblxuICAuY2hlY2staW4tcGxhY2VzLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcblxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0Y2RjhGQTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG5cbiAgICAuY2hlY2tpbi12aWV3LWJ0biB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgY29sb3I6ICM1NzU1Njg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "VPcq":
    /*!***********************************************************************!*\
      !*** ./src/app/components/dropdown-field/dropdown-field.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DropdownFieldComponent */

    /***/
    function VPcq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownFieldComponent", function () {
        return DropdownFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dropdown_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dropdown-field.component.html */
      "+Zs+");
      /* harmony import */


      var _dropdown_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dropdown-field.component.scss */
      "ZHml");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DropdownFieldComponent = /*#__PURE__*/function () {
        function DropdownFieldComponent() {
          _classCallCheck(this, DropdownFieldComponent);

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(DropdownFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DropdownFieldComponent;
      }();

      DropdownFieldComponent.ctorParameters = function () {
        return [];
      };

      DropdownFieldComponent.propDecorators = {
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listLabelKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listValueKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      DropdownFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dropdown-field',
        template: _raw_loader_dropdown_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dropdown_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DropdownFieldComponent);
      /***/
    },

    /***/
    "VZ79":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-questions-container/custom-questions-container.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VZ79(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngFor=\"let question of questions; let questionIndex = index\">\n\t<ng-container *ngIf=\"utilService.shouldShowQuestion(question)\">\n\t\t<div\n\t\t\tclass=\"list-item-container\"\n\t\t\t[formGroup]=\"formGroup\"\n\t\t\t[id]=\"UtilService.HtmlElementIdUq(sectionIndex, questionIndex, sectionId, question.questionId)\"\n\t\t\t[ngClass]=\"{\n\t\t\t\terror: shouldShowError(question) && isError(question, questionIndex)\n\t\t\t}\"\n\t\t>\n\t\t\t<app-question-list-header\n\t\t\t\t[questionTitle]=\"UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTitle\"\n\t\t\t\t[note]=\"\n\t\t\t\t\tquestion.allowInstructionOrNote\n\t\t\t\t\t\t? UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationInstructionOrNote\n\t\t\t\t\t\t: ''\n\t\t\t\t\"\n\t\t\t\t[required]=\"question.questionIsRequired\"\n\t\t\t\t[attachments]=\"question.questionAttachments\"\n\t\t\t\t[attachmentIcon]=\"question.questionAttachmentIconPath\"\n\t\t\t\t[qNo]=\"(questionElementIds ? questionElementIds.indexOf(UtilService.HtmlElementIdUq(sectionIndex, questionIndex, sectionId, question.questionId)) : questionIndex) + 1\"\n\t\t\t></app-question-list-header>\n\n\t\t\t<div class=\"hr-line\"></div>\n\n\t\t\t<app-single-choice-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleChoiceSet\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[list]=\"question.answerChoiceAttributes\"\n\t\t\t></app-single-choice-field>\n\n\t\t\t<app-multiple-choice-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[list]=\"question.answerChoiceAttributes\"\n\t\t\t></app-multiple-choice-field>\n\n\t\t\t<app-confirm-box-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.ConfirmationBox\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[list]=\"question.questionTranslations\"\n\t\t\t></app-confirm-box-field>\n\n\t\t\t<app-singleline-text-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleLineText\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[isError]=\"isError(question, questionIndex)\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t></app-singleline-text-field>\n\n\t\t\t<app-multiline-text-field\n\t\t\t\t[isError]=\"isError(question, questionIndex)\"\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultiLineText\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t></app-multiline-text-field>\n\n\t\t\t<app-number-integer-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.NumberFieldInteger\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[isError]=\"isError(question, questionIndex)\"\n\t\t\t\t[label]=\"\n\t\t\t\t\tquestion.allowTextLabel\n\t\t\t\t\t\t? UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTextLabel\n\t\t\t\t\t\t: ''\n\t\t\t\t\"\n\t\t\t></app-number-integer-field>\n\n\t\t\t<app-number-decimal-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.NumberFieldDecimal\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[isError]=\"isError(question, questionIndex)\"\n\t\t\t\t[label]=\"\n\t\t\t\t\tquestion.allowTextLabel\n\t\t\t\t\t\t? UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTextLabel\n\t\t\t\t\t\t: ''\n\t\t\t\t\"\n\t\t\t></app-number-decimal-field>\n\n\t\t\t<app-date-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.DateField\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[isError]=\"isError(question, questionIndex)\"\n\t\t\t\tplaceholder=\"Choose\"\n\t\t\t\t[label]=\"\n\t\t\t\t\tquestion.allowTextLabel\n\t\t\t\t\t\t? UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTextLabel\n\t\t\t\t\t\t: ''\n\t\t\t\t\"\n\t\t\t></app-date-field>\n\n\t\t\t<app-time-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.TimeField\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[isError]=\"isError(question, questionIndex)\"\n\t\t\t\t[label]=\"\n\t\t\t\t\tquestion.allowTextLabel\n\t\t\t\t\t\t? UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTextLabel\n\t\t\t\t\t\t: ''\n\t\t\t\t\"\n\t\t\t></app-time-field>\n\n\t\t\t<app-date-time-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.DateTimeField\"\n\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t[inputName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[isError]=\"isError(question, questionIndex)\"\n\t\t\t\tplaceholder=\"Choose\"\n\t\t\t\t[label]=\"\n\t\t\t\t\tquestion.allowTextLabel\n\t\t\t\t\t\t? UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTextLabel\n\t\t\t\t\t\t: ''\n\t\t\t\t\"\n\t\t\t></app-date-time-field>\n\n\t\t\t<app-photo-field\n\t\t\t\t*ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.PhotoVideoUpload\"\n\t\t\t\t[formControlName]=\"UtilService.FCUniqueName(section, question)\"\n\t\t\t\t[label]=\"\n\t\t\t\t\tquestion.allowTextLabel\n\t\t\t\t\t\t? UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTextLabel\n\t\t\t\t\t\t: ''\n\t\t\t\t\"\n\t\t\t></app-photo-field>\n\n\t\t\t<ng-container *ngIf=\"question.shouldShowOptionalComment\">\n\t\t\t\t<div class=\"hr-line\"></div>\n\t\t\t\t<app-multiline-text-field\n\t\t\t\t\tlabel=\"Additional Comment\"\n\t\t\t\t\t[form]=\"formGroup\"\n\t\t\t\t\t[inputName]=\"UtilService.FCNameAdditioanlNoteUq(UtilService.FCUniqueName(section, question))\"\n\t\t\t\t></app-multiline-text-field>\n\t\t\t</ng-container>\n\t\t</div>\n\t</ng-container>\n</ng-container>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app id=\"infomenuContent\">\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n<app-device-info></app-device-info>\n";
      /***/
    },

    /***/
    "W02B":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-field/photo-field.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W02B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"photo-view-container\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n\n    <div class=\"photo-buttons\" *ngIf=\"!image; else addPhotoTemplate;\">\n        <ion-button fill=\"clear\" class=\"left\" (click)=\"choosePhotoVideoOption()\">\n            <ion-icon slot=\"start\" src=\"./assets/icon/image.svg\"></ion-icon>\n            Take a Photo/Video\n        </ion-button>\n\n        <span>Or</span>\n\n        <ion-button fill=\"clear\" class=\"right\" (click)=\"addPhotoFromLibrary()\">\n            <ion-icon slot=\"start\" src=\"./assets/icon/folder.svg\"></ion-icon>\n            Choose Photo/Video\n        </ion-button>\n    </div>\n\n    <ng-template #addPhotoTemplate>\n        <div class=\"image-view\">\n            <div class=\"close-btn\">\n                <ion-button *ngIf=\"!isVideo\" class=\"edit-btn\" fill=\"clear\"\n                            (click)=\"editPhoto()\">\n                    <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\" (click)=\"photoRemoved()\">\n                    <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </div>\n\n            <ng-container *ngIf=\"isVideo\">\n                <video controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\n                    <source [src]=\"sanitize(videoUrl)\" [type]=\"StaticDataService.fileMimeTypes[image.split('.')?.pop()?.toLowerCase()]\" />\n                </video>\n            </ng-container>\n            <ng-container *ngIf=\"!isVideo\">\n                <ion-img *ngIf=\"image\" [src]=\"image\"></ion-img>\n            </ng-container>\n        </div>\n    </ng-template>\n</div>\n";
      /***/
    },

    /***/
    "WxP2":
    /*!*******************************************************************!*\
      !*** ./src/app/components/modal-header/modal-header.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ModalHeaderComponent */

    /***/
    function WxP2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalHeaderComponent", function () {
        return ModalHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-header.component.html */
      "K0lI");
      /* harmony import */


      var _modal_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-header.component.scss */
      "eaag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ModalHeaderComponent = /*#__PURE__*/function () {
        function ModalHeaderComponent() {
          _classCallCheck(this, ModalHeaderComponent);

          this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.showCloseButton = true;

          if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isWebApp) {
            this.showCloseButton = false;
          }
        }

        _createClass(ModalHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModalHeaderComponent;
      }();

      ModalHeaderComponent.ctorParameters = function () {
        return [];
      };

      ModalHeaderComponent.propDecorators = {
        modalTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closeModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ModalHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-header",
        template: _raw_loader_modal_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalHeaderComponent);
      /***/
    },

    /***/
    "XGPL":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/confirm-box-field/confirm-box-field.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ConfirmBoxFieldComponent */

    /***/
    function XGPL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmBoxFieldComponent", function () {
        return ConfirmBoxFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_box_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm-box-field.component.html */
      "BCO8");
      /* harmony import */


      var _confirm_box_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-box-field.component.scss */
      "EyFw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");

      var ConfirmBoxFieldComponent = /*#__PURE__*/function () {
        function ConfirmBoxFieldComponent(sharedDataService) {
          _classCallCheck(this, ConfirmBoxFieldComponent);

          this.sharedDataService = sharedDataService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"];
        }

        _createClass(ConfirmBoxFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfirmBoxFieldComponent;
      }();

      ConfirmBoxFieldComponent.ctorParameters = function () {
        return [{
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }];
      };

      ConfirmBoxFieldComponent.propDecorators = {
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ConfirmBoxFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-box-field',
        template: _raw_loader_confirm_box_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_box_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConfirmBoxFieldComponent);
      /***/
    },

    /***/
    "Xr5S":
    /*!*********************************************************************!*\
      !*** ./src/app/components/empty-message/empty-message.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EmptyMessageComponent */

    /***/
    function Xr5S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyMessageComponent", function () {
        return EmptyMessageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_empty_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./empty-message.component.html */
      "EsuB");
      /* harmony import */


      var _empty_message_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./empty-message.component.scss */
      "oy0+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EmptyMessageComponent = /*#__PURE__*/function () {
        function EmptyMessageComponent() {
          _classCallCheck(this, EmptyMessageComponent);

          this.icon = './assets/icon/empty-files.svg';
        }

        _createClass(EmptyMessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmptyMessageComponent;
      }();

      EmptyMessageComponent.ctorParameters = function () {
        return [];
      };

      EmptyMessageComponent.propDecorators = {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EmptyMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-empty-message',
        template: _raw_loader_empty_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empty_message_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmptyMessageComponent);
      /***/
    },

    /***/
    "YMDt":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/single-choice-field/single-choice-field.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SingleChoiceFieldComponent */

    /***/
    function YMDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleChoiceFieldComponent", function () {
        return SingleChoiceFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_single_choice_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./single-choice-field.component.html */
      "jRuQ");
      /* harmony import */


      var _single_choice_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./single-choice-field.component.scss */
      "tLjQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");

      var SingleChoiceFieldComponent = /*#__PURE__*/function () {
        function SingleChoiceFieldComponent(sharedDataService) {
          _classCallCheck(this, SingleChoiceFieldComponent);

          this.sharedDataService = sharedDataService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"];
        }

        _createClass(SingleChoiceFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRadioSelect",
          value: function onRadioSelect(item) {
            var _this33 = this;

            var value = this.form.controls[this.inputName].value;

            if (value === item.answerChoiceAttributeId) {
              setTimeout(function () {
                _this33.form.controls[_this33.inputName].reset('');
              }, 100);
            }
          }
        }]);

        return SingleChoiceFieldComponent;
      }();

      SingleChoiceFieldComponent.ctorParameters = function () {
        return [{
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
        }];
      };

      SingleChoiceFieldComponent.propDecorators = {
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SingleChoiceFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-choice-field',
        template: _raw_loader_single_choice_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_choice_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SingleChoiceFieldComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
      /* harmony import */


      var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/badge/ngx */
      "2yhU");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/unique-device-id/ngx */
      "/+Rg");
      /* harmony import */


      var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/camera-preview/ngx */
      "8Y4A");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./directives/directives.module */
      "FUS3");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helpers_httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./helpers/httpConfig.interceptor */
      "8ev5");
      /* harmony import */


      var _modals_search_location_search_location_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./modals/search-location/search-location.page */
      "NXy/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "/sJY");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _modals_search_location_search_location_page__WEBPACK_IMPORTED_MODULE_23__["SearchLocationPage"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          hardwareBackButton: false,
          mode: 'ios'
        }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"].forRoot({
          defaultLanguage: 'en',
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"],
            useFactory: _app_component__WEBPACK_IMPORTED_MODULE_7__["HttpLoaderFactory"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
          }
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_19__["DirectivesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].production
        })],
        providers: [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["QRScanner"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__["FileTransfer"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_15__["UniqueDeviceID"], _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_16__["CameraPreview"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_25__["Camera"], _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_10__["Badge"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_26__["MediaCapture"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_18__["ScreenOrientation"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_20__["HTTP"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
          useClass: _helpers_httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_22__["HttpConfigInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZHml":
    /*!*************************************************************************!*\
      !*** ./src/app/components/dropdown-field/dropdown-field.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function ZHml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".drop-down-item {\n  margin-top: 8px;\n}\n.drop-down-item ion-select {\n  height: 42px;\n  --padding-start: 44px;\n  --padding-end: 8px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  background-image: url('arrow-down.svg');\n  background-position: 16px;\n  background-repeat: no-repeat;\n}\n.drop-down-item ion-select::part(icon) {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Ryb3Bkb3duLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjtBQUNJO0VBQ0Usd0JBQUE7QUFDTiIsImZpbGUiOiJkcm9wZG93bi1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLWRvd24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDhweDtcblxuICBpb24tc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0NHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAtLWNvbG9yOiAjMTcxNTM4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMxNzE1Mzg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NBQ0VFMTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9hcnJvdy1kb3duLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTZweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgJjo6cGFydChpY29uKSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "ZwzQ":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-picker/color-picker.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZwzQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<canvas #palette style=\"background:white;display: none\" class='center'></canvas>\n<canvas #chooser class='center'></canvas>\n";
      /***/
    },

    /***/
    "at/3":
    /*!***************************************************************!*\
      !*** ./src/app/components/time-field/time-field.component.ts ***!
      \***************************************************************/

    /*! exports provided: TimeFieldComponent */

    /***/
    function at3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFieldComponent", function () {
        return TimeFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_time_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./time-field.component.html */
      "nt42");
      /* harmony import */


      var _time_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time-field.component.scss */
      "6INa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);

      var TimeFieldComponent = /*#__PURE__*/function () {
        function TimeFieldComponent() {
          _classCallCheck(this, TimeFieldComponent);
        }

        _createClass(TimeFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "timePeriodChange",
          value: function timePeriodChange(period) {
            var control = this.form.controls[this.inputName];
            var dateTime = moment_moment__WEBPACK_IMPORTED_MODULE_4__(control.value);
            var currentPeriod = dateTime.format('a');
            console.log(currentPeriod);

            if (period.toLowerCase() !== currentPeriod.toLowerCase()) {
              if (period.toLowerCase() === 'am') {
                dateTime.subtract(12, 'hours');
              } else if (period.toLowerCase() === 'pm') {
                dateTime.add(12, 'hours');
              }
            }

            control.setValue(dateTime.toISOString());
            this.timePeriod = period;
          }
        }]);

        return TimeFieldComponent;
      }();

      TimeFieldComponent.ctorParameters = function () {
        return [];
      };

      TimeFieldComponent.propDecorators = {
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TimeFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-time-field',
        template: _raw_loader_time_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_time_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TimeFieldComponent);
      /***/
    },

    /***/
    "axZT":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/singleline-text-field/singleline-text-field.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SinglelineTextFieldComponent */

    /***/
    function axZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinglelineTextFieldComponent", function () {
        return SinglelineTextFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_singleline_text_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./singleline-text-field.component.html */
      "vM/W");
      /* harmony import */


      var _singleline_text_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./singleline-text-field.component.scss */
      "obcd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SinglelineTextFieldComponent = /*#__PURE__*/function () {
        function SinglelineTextFieldComponent() {
          _classCallCheck(this, SinglelineTextFieldComponent);
        }

        _createClass(SinglelineTextFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SinglelineTextFieldComponent;
      }();

      SinglelineTextFieldComponent.ctorParameters = function () {
        return [];
      };

      SinglelineTextFieldComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SinglelineTextFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-singleline-text-field',
        template: _raw_loader_singleline_text_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_singleline_text_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SinglelineTextFieldComponent);
      /***/
    },

    /***/
    "c09M":
    /*!*********************************************************************!*\
      !*** ./src/app/components/section-title/section-title.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SectionTitleComponent */

    /***/
    function c09M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SectionTitleComponent", function () {
        return SectionTitleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_section_title_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./section-title.component.html */
      "0AsP");
      /* harmony import */


      var _section_title_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./section-title.component.scss */
      "KOdU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SectionTitleComponent = /*#__PURE__*/function () {
        function SectionTitleComponent() {
          _classCallCheck(this, SectionTitleComponent);
        }

        _createClass(SectionTitleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SectionTitleComponent;
      }();

      SectionTitleComponent.ctorParameters = function () {
        return [];
      };

      SectionTitleComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SectionTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-section-title',
        template: _raw_loader_section_title_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_section_title_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SectionTitleComponent);
      /***/
    },

    /***/
    "dBkz":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multiline-text-field/multiline-text-field.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dBkz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <ion-textarea\n            autoGrow=\"true\"\n            [formControlName]=\"inputName\"\n            [ngClass]=\"{'error': isError}\"\n            cols=\"3\">\n    </ion-textarea>\n</ion-item>\n";
      /***/
    },

    /***/
    "eaag":
    /*!*********************************************************************!*\
      !*** ./src/app/components/modal-header/modal-header.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function eaag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  min-height: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n  --background: #F8F9FB;\n  --border-color: rgba(74, 144, 226, 0.2);\n  --border-width: 1px;\n  --border-style: solid;\n}\nion-toolbar ion-title {\n  text-align: left;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  color: #171538;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\nion-toolbar .close-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGFsLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoibW9kYWwtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJhY2tncm91bmQ6ICNGOEY5RkI7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gIGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuXG4gIC5jbG9zZS1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "flj8":
    /*!*********************************************!*\
      !*** ./src/app/services/account.service.ts ***!
      \*********************************************/

    /*! exports provided: AccountService */

    /***/
    function flj8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _enum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./enum.service */
      "AIDl");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      Array.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
      };

      var AccountService = /*#__PURE__*/function () {
        function AccountService(router, sharedDataService, http, navController, platform) {
          _classCallCheck(this, AccountService);

          this.router = router;
          this.sharedDataService = sharedDataService;
          this.http = http;
          this.navController = navController;
          this.platform = platform;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.USER_DATA)));
          this.user = this.userSubject.asObservable();
          this.checkForMobileLanguageId();
        }

        _createClass(AccountService, [{
          key: "checkForMobileLanguageId",
          value: function checkForMobileLanguageId() {
            var _a, _b, _c, _d, _e;

            if (!this.sharedDataService.dedicatedMode) {
              if ((_a = this.userSubject.value) === null || _a === void 0 ? void 0 : _a.mobileAppLanguageID) {
                this.sharedDataService.currentLanguageId = (_b = this.userSubject.value) === null || _b === void 0 ? void 0 : _b.mobileAppLanguageID;
              } else if (this.sharedDataService.userProfile && ((_c = this.sharedDataService.userProfile) === null || _c === void 0 ? void 0 : _c.mobileAppLanguageID)) {
                this.sharedDataService.currentLanguageId = (_d = this.sharedDataService.userProfile) === null || _d === void 0 ? void 0 : _d.mobileAppLanguageID;
              } else {
                this.getUserProfile((_e = this.userSubject.value) === null || _e === void 0 ? void 0 : _e.userId);
              }
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this34 = this;

            var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var rememberMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.UserSignIn), {
              email: email,
              password: password,
              rememberMe: rememberMe,
              deviceID: this.sharedDataService.pushToken,
              platformName: this.platform.is('ios') ? 'IOS' : 'Android'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              var _a;

              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var userInfo = data.Result;
                localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.USER_DATA, JSON.stringify(userInfo));

                _this34.userSubject.next(userInfo);

                if (userInfo.mobileAppLanguageID) {
                  _this34.sharedDataService.currentLanguageId = userInfo.mobileAppLanguageID;
                }

                return data;
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new Error((_a = data === null || data === void 0 ? void 0 : data.ResponseException) === null || _a === void 0 ? void 0 : _a.ExceptionMessage));
            }));
          }
        }, {
          key: "checkMobileSessionExpirationSetting",
          value: function checkMobileSessionExpirationSetting(companyID) {
            var _this35 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.GetCompanyMobileSessionDetails, "/").concat(companyID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              var _a, _b;

              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                if ((_a = data.Result) === null || _a === void 0 ? void 0 : _a.isMobileSessionExpiration) {
                  var user = _this35.userValue;
                  user.isMobileSessionExpiration = true;
                  localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.USER_DATA, JSON.stringify(user));

                  _this35.userSubject.next(user);
                }

                return data;
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new Error((_b = data === null || data === void 0 ? void 0 : data.ResponseException) === null || _b === void 0 ? void 0 : _b.ExceptionMessage));
            }));
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile(userId) {
            var _this36 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.GetUserProfileById, "/").concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var userProfile = data.Result;
                localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.USER_PROFILE, JSON.stringify(userProfile));
                _this36.sharedDataService.userProfile = userProfile;
                _this36.sharedDataService.currentLanguageId = userProfile === null || userProfile === void 0 ? void 0 : userProfile.mobileAppLanguageID;
                return userProfile;
              }

              return null;
            }));
          }
        }, {
          key: "getDeviceDetails",
          value: function getDeviceDetails(deviceUID) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.GetDeviceDetails, "/").concat(deviceUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "activateDevice",
          value: function activateDevice() {
            var deviceDetailId = this.sharedDataService.dedicatedModeDeviceDetailData.deviceID;
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.ActivateDevice, "?id=").concat(deviceDetailId), {});
          }
        }, {
          key: "getAccessKey",
          value: function getAccessKey() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.GetAccessKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var accessKey = data.Result;
                localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.API_ACCESS_KEY, accessKey);
                return {
                  accessKey: accessKey
                };
              }

              return {
                accessKey: null
              };
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.GetToken), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                accessID: this.sharedDataService.deviceUID,
                accessKey: localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.API_ACCESS_KEY)
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var token = data.Result;
                localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.API_TOKEN, token);
                return {
                  token: token
                };
              }

              return {
                token: null
              };
            }));
          }
        }, {
          key: "newAccountSetup",
          value: function newAccountSetup(body) {
            var _this37 = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.AccountSetup), Object.assign({
              deviceID: this.sharedDataService.pushToken,
              platformName: this.platform.is('ios') ? 'IOS' : 'Android'
            }, body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              var _a;

              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var userInfo = data.Result;
                localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.USER_DATA, JSON.stringify(userInfo));

                _this37.userSubject.next(userInfo);

                return data;
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new Error((_a = data === null || data === void 0 ? void 0 : data.ResponseException) === null || _a === void 0 ? void 0 : _a.ExceptionMessage));
            }));
          }
        }, {
          key: "forgotpassword",
          value: function forgotpassword(email) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.ForgotPassword), {
              email: email
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var message = data.Message;
                return message;
              }

              return null;
            }));
          }
        }, {
          key: "resetpassword",
          value: function resetpassword(body) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.ResetPassword), Object.assign({
              deviceID: this.sharedDataService.pushToken,
              platformName: this.platform.is('ios') ? 'IOS' : 'Android'
            }, body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var message = data.Message;
                return message;
              }

              return null;
            }));
          }
        }, {
          key: "changePassword",
          value: function changePassword(body) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.ChangePassword), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                var message = data.Message;
                return message;
              }

              return data.Message;
            }));
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(body) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.UpdateUserProfile), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "logout",
          value: function logout(userId) {
            var _this38 = this;

            var navigateToLogin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var option = {
              body: {
                deviceID: this.sharedDataService.deviceUID
              }
            };
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/").concat(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiMethods.UserDeviceDelete, "/").concat(userId), option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              if (data.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].ApiResponseCode.RequestSuccessful) {
                // remove user from local storage and set current user to null
                localStorage.removeItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.USER_DATA);
                localStorage.removeItem(_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"].LocalStorageKeys.USER_PROFILE);

                _this38.userSubject.next(null);

                if (navigateToLogin) {
                  _this38.navController.navigateBack(['login'], {
                    replaceUrl: true
                  });

                  window.location.reload();
                }
              }

              return data;
            }));
          }
        }, {
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
        }]);

        return AccountService;
      }();

      AccountService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }];
      };

      AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AccountService);
      /***/
    },

    /***/
    "hYb0":
    /*!*************************************************!*\
      !*** ./src/app/services/static-data.service.ts ***!
      \*************************************************/

    /*! exports provided: StaticDataService */

    /***/
    function hYb0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticDataService", function () {
        return StaticDataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _enum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enum.service */
      "AIDl");

      var StaticDataService = function StaticDataService() {
        _classCallCheck(this, StaticDataService);
      };

      StaticDataService.dateTimeFormat = 'YYYY-MM-DD HH:mm:00.000';
      StaticDataService.dateTimeFormatAMPM = 'YYYY-MM-DD hh:mm A';
      StaticDataService.dateFormat = 'YYYY-MM-DD';
      StaticDataService.timeFormat = 'hh:mmA';
      StaticDataService.photoQuality = 85;
      StaticDataService.photoMaxHeight = 2500;
      StaticDataService.userDefaultGuid = '00000000-0000-0000-0000-000000000000'; // Test demo - should be remove after development complete

      StaticDataService.anyScreenTestLocalStoragekey = 'screen_to_test';
      StaticDataService.isDeviceTestTablet = 'is_device_test_tablet';
      StaticDataService.disableExifHeaderStripping = 'disableExifHeaderStripping'; // end

      StaticDataService.bodyParts = [{
        type: 'Head',
        parts: [{
          name: 'Head Soft Tissue',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.HeadSoftTissue,
          path: {
            fill: '#A1A8CA',
            stroke: '#CACEE1'
          }
        }, {
          name: 'Face',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.HeadFace,
          path: {
            fill: '#A1A8CA',
            stroke: '#CACEE1'
          }
        }]
      }, {
        type: 'Torso',
        parts: [{
          name: 'Abdomen',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.TorsoAbdomen,
          path: {
            fill: '#A1A8CA'
          }
        }, {
          name: 'Chest',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.TorsoChest,
          path: {
            fill: '#A0A8C9',
            stroke: '#CACEE1'
          }
        }, {
          name: 'Neck',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.TorsoNeck,
          path: {
            fill: '#A1A8CA',
            stroke: '#CACEE1'
          }
        }, {
          name: 'Ribs',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.TorsoRibs,
          path: {
            fill: '#B6BEDF',
            stroke: '#CACEE1'
          }
        }]
      }, {
        type: 'Back',
        parts: [{
          name: 'Upper Back',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.BackUpperBack,
          path: {
            fill: '#8B93B8'
          }
        }, {
          name: 'Lower Back',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.BackLowerBack,
          path: {
            fill: '#8B93B8'
          }
        }, {
          name: 'Buttocks',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.BackButtocks,
          path: {
            fill: '#8B93B8'
          }
        }]
      }, {
        type: 'Arms',
        parts: [{
          name: 'Shoulder - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsShoulderRight,
          path: {
            fill: '#A1A8CA',
            stroke: '#CACEE1'
          }
        }, {
          name: 'Shoulder - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsShoulderLeft,
          path: {
            fill: '#A1A8CA',
            stroke: '#CACEE1'
          }
        }, {
          name: 'Elbow - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsElbowRight,
          path: {
            fill: '#A1A8CA',
            stroke: '#CACEE1',
            strokeWidth: 2.44942
          }
        }, {
          name: 'Elbow - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsElbowLeft,
          path: {
            fill: '#A1A8CA',
            stroke: '#CACEE1',
            strokeWidth: 2.44942
          }
        }, {
          name: 'Lower Arm - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsLowerRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Lower Arm - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsLowerLeft,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Wrist - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsWristRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Wrist - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsWristLeft,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Hand - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsHandRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Hand - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsHandLeft,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Finger - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsFingerRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Finger - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.ArmsFingerLeft,
          path: {
            fill: '#A0A8C9'
          }
        }]
      }, {
        type: 'Legs',
        parts: [{
          name: 'Ankle - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsAnkleRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Ankle - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsAnkleLeft,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Foot - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsFootRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Foot - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsFootLeft,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Knee - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsKneeRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Knee - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsKneeLeft,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Upper Leg - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsUpperRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Upper Leg - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsUpperLeft,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Toe - Right',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsToeRight,
          path: {
            fill: '#A0A8C9'
          }
        }, {
          name: 'Toe - Left',
          id: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentBodyPartsIds.LegsToeLeft,
          path: {
            fill: '#A0A8C9'
          }
        }]
      }];
      StaticDataService.videoFormats = ['avi', 'flv', 'mov', 'mpeg', 'mpg', 'mp2', 'mp4', 'qt', 'vob', 'wmv', 'avchd', 'mkv', 'webm'];
      StaticDataService.fileMimeTypes = {
        '3dmf': 'x-world/x-3dmf',
        '3dm': 'x-world/x-3dmf',
        avi: 'video/x-msvideo',
        ai: 'application/postscript',
        bin: 'application/octet-stream',
        bmp: 'image/bmp',
        cab: 'application/x-shockwave-flash',
        c: 'text/plain',
        'c++': 'text/plain',
        "class": 'application/java',
        css: 'text/css',
        csv: 'text/comma-separated-values',
        cdr: 'application/cdr',
        doc: 'application/msword',
        dot: 'application/msword',
        docx: 'application/msword',
        dwg: 'application/acad',
        eps: 'application/postscript',
        exe: 'application/octet-stream',
        gif: 'image/gif',
        gz: 'application/gzip',
        gtar: 'application/x-gtar',
        flv: 'video/x-flv',
        fh4: 'image/x-freehand',
        fh5: 'image/x-freehand',
        fhc: 'image/x-freehand',
        help: 'application/x-helpfile',
        hlp: 'application/x-helpfile',
        html: 'text/html',
        htm: 'text/html',
        ico: 'image/x-icon',
        imap: 'application/x-httpd-imap',
        inf: 'application/inf',
        jpe: 'image/jpeg',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        js: 'application/x-javascript',
        java: 'text/x-java-source',
        latex: 'application/x-latex',
        log: 'text/plain',
        m3u: 'audio/x-mpequrl',
        midi: 'audio/midi',
        mid: 'audio/midi',
        mov: 'video/quicktime',
        mp3: 'audio/mpeg',
        mpeg: 'video/mpeg',
        mpg: 'video/mpeg',
        mp2: 'video/mpeg',
        mp4: 'video/mp4',
        ogg: 'application/ogg',
        phtml: 'application/x-httpd-php',
        php: 'application/x-httpd-php',
        pdf: 'application/pdf',
        pgp: 'application/pgp',
        png: 'image/png',
        pps: 'application/mspowerpoint',
        ppt: 'application/mspowerpoint',
        ppz: 'application/mspowerpoint',
        pot: 'application/mspowerpoint',
        ps: 'application/postscript',
        qt: 'video/quicktime',
        qd3d: 'x-world/x-3dmf',
        qd3: 'x-world/x-3dmf',
        qxd: 'application/x-quark-express',
        rar: 'application/x-rar-compressed',
        ra: 'audio/x-realaudio',
        ram: 'audio/x-pn-realaudio',
        rm: 'audio/x-pn-realaudio',
        rtf: 'text/rtf',
        spr: 'application/x-sprite',
        sprite: 'application/x-sprite',
        stream: 'audio/x-qt-stream',
        swf: 'application/x-shockwave-flash',
        svg: 'text/xml-svg',
        sgml: 'text/x-sgml',
        sgm: 'text/x-sgml',
        tar: 'application/x-tar',
        tiff: 'image/tiff',
        tif: 'image/tiff',
        tgz: 'application/x-compressed',
        tex: 'application/x-tex',
        txt: 'text/plain',
        vob: 'video/x-mpg',
        wav: 'audio/x-wav',
        wrl: 'x-world/x-vrml',
        xla: 'application/msexcel',
        xlsx: 'application/msexcel',
        xls: 'application/vnd.ms-excel',
        xlc: 'application/vnd.ms-excel',
        xml: 'text/xml',
        zip: 'application/zip'
      };
      StaticDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StaticDataService);
      /***/
    },

    /***/
    "hbR+":
    /*!*****************************************************************!*\
      !*** ./src/app/components/date-field/date-field.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function hbR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".date-item .date-field {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid #E8EAF2;\n  border-radius: 3px;\n  padding: 2px 16px;\n  width: 100%;\n}\n.date-item ion-datetime {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #777595;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGUtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKIiwiZmlsZSI6ImRhdGUtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZS1pdGVtIHtcbiAgLmRhdGUtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEVBRjI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW9uLWRhdGV0aW1lIHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM3Nzc1OTU7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "iNoF":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/dashboard-button/dashboard-button.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function iNoF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  height: auto;\n  margin: 0;\n  --background: #ffffff;\n  --border-radius: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\nion-button .inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 174px;\n  width: 174px;\n}\nion-button .inner ion-icon, ion-button .inner ion-img {\n  width: 55px;\n  height: 55px;\n  color: #2A6FDB;\n}\nion-button .inner ion-label {\n  margin-top: 24px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  line-height: 22px;\n  text-align: center;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQU4iLCJmaWxlIjoiZGFzaGJvYXJkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcblxuICAuaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTc0cHg7XG4gICAgd2lkdGg6IDE3NHB4O1xuXG4gICAgaW9uLWljb24sIGlvbi1pbWcge1xuICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBjb2xvcjogIzJBNkZEQjtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _safeurl_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./safeurl.pipe */
      "13gT");
      /* harmony import */


      var _list_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-filter.pipe */
      "kwUO");
      /* harmony import */


      var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./time-ago.pipe */
      "R4nH");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_safeurl_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeurlPipe"], _list_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["ListFilterPipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeAgoPipe"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_safeurl_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeurlPipe"], _list_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["ListFilterPipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeAgoPipe"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PipesModule);
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _warning_component_warning_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./warning-component/warning-component.component */
      "3cNW");
      /* harmony import */


      var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./color-picker/color-picker.component */
      "CUwC");
      /* harmony import */


      var _auth_input_auth_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-input/auth-input.component */
      "ofQr");
      /* harmony import */


      var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard-header/dashboard-header.component */
      "J543");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _add_choose_photo_add_choose_photo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./add-choose-photo/add-choose-photo.component */
      "/whK");
      /* harmony import */


      var _empty_message_empty_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./empty-message/empty-message.component */
      "Xr5S");
      /* harmony import */


      var _next_prev_toolbar_next_prev_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./next-prev-toolbar/next-prev-toolbar.component */
      "D6p4");
      /* harmony import */


      var _dashboard_header_dm_dashboard_header_dm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dashboard-header-dm/dashboard-header-dm.component */
      "I+HG");
      /* harmony import */


      var _dashboard_button_dashboard_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboard-button/dashboard-button.component */
      "8I7f");
      /* harmony import */


      var _device_info_device_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./device-info/device-info.component */
      "BdWc");
      /* harmony import */


      var _modal_header_dm_modal_header_dm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modal-header-dm/modal-header-dm.component */
      "qy5q");
      /* harmony import */


      var _back_continue_toolbar_back_continue_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./back-continue-toolbar/back-continue-toolbar.component */
      "TKCx");
      /* harmony import */


      var _topnavigations_btns_dm_topnavigations_btns_dm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./topnavigations-btns-dm/topnavigations-btns-dm.component */
      "OziU");
      /* harmony import */


      var _topnavigations_segments_dm_topnavigations_segments_dm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./topnavigations-segments-dm/topnavigations-segments-dm.component */
      "mBlR");
      /* harmony import */


      var _sync_warning_msg_sync_warning_msg_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./sync-warning-msg/sync-warning-msg.component */
      "5Ud+");
      /* harmony import */


      var _portrait_orientation_portrait_orientation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./portrait-orientation/portrait-orientation.component */
      "Jz6E");
      /* harmony import */


      var _screen_inner_loading_screen_inner_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./screen-inner-loading/screen-inner-loading.component */
      "9kOk");
      /* harmony import */


      var _single_choice_field_single_choice_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./single-choice-field/single-choice-field.component */
      "YMDt");
      /* harmony import */


      var _multiple_choice_field_multiple_choice_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./multiple-choice-field/multiple-choice-field.component */
      "J9Sb");
      /* harmony import */


      var _singleline_text_field_singleline_text_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./singleline-text-field/singleline-text-field.component */
      "axZT");
      /* harmony import */


      var _multiline_text_field_multiline_text_field_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./multiline-text-field/multiline-text-field.component */
      "KF9x");
      /* harmony import */


      var _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./date-field/date-field.component */
      "vpkv");
      /* harmony import */


      var _date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./date-time-field/date-time-field.component */
      "OnT3");
      /* harmony import */


      var _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./time-field/time-field.component */
      "at/3");
      /* harmony import */


      var _number_integer_field_number_integer_field_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./number-integer-field/number-integer-field.component */
      "qje7");
      /* harmony import */


      var _number_decimal_field_number_decimal_field_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./number-decimal-field/number-decimal-field.component */
      "5Mel");
      /* harmony import */


      var _dropdown_field_dropdown_field_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./dropdown-field/dropdown-field.component */
      "VPcq");
      /* harmony import */


      var _exposure_exposure_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./exposure/exposure.component */
      "OlKZ");
      /* harmony import */


      var _question_list_header_question_list_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./question-list-header/question-list-header.component */
      "ISAx");
      /* harmony import */


      var _custom_questions_container_custom_questions_container_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./custom-questions-container/custom-questions-container.component */
      "5IUd");
      /* harmony import */


      var _photo_field_photo_field_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./photo-field/photo-field.component */
      "lBXW");
      /* harmony import */


      var _section_title_section_title_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./section-title/section-title.component */
      "c09M");
      /* harmony import */


      var _archived_item_archived_item_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./archived-item/archived-item.component */
      "kDGi");
      /* harmony import */


      var _custom_ion_refresh_loader_custom_ion_refresh_loader_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./custom-ion-refresh-loader/custom-ion-refresh-loader.component */
      "vHKI");
      /* harmony import */


      var _modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./modal-header/modal-header.component */
      "WxP2");
      /* harmony import */


      var _confirm_box_field_confirm_box_field_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./confirm-box-field/confirm-box-field.component */
      "XGPL");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_warning_component_warning_component_component__WEBPACK_IMPORTED_MODULE_3__["WarningComponentComponent"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"], _auth_input_auth_input_component__WEBPACK_IMPORTED_MODULE_5__["AuthInputComponent"], _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__["DashboardHeaderComponent"], _add_choose_photo_add_choose_photo_component__WEBPACK_IMPORTED_MODULE_9__["AddChoosePhotoComponent"], _empty_message_empty_message_component__WEBPACK_IMPORTED_MODULE_10__["EmptyMessageComponent"], _next_prev_toolbar_next_prev_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["NextPrevToolbarComponent"], _dashboard_header_dm_dashboard_header_dm_component__WEBPACK_IMPORTED_MODULE_12__["DashboardHeaderDmComponent"], _dashboard_button_dashboard_button_component__WEBPACK_IMPORTED_MODULE_13__["DashboardButtonComponent"], _device_info_device_info_component__WEBPACK_IMPORTED_MODULE_14__["DeviceInfoComponent"], _modal_header_dm_modal_header_dm_component__WEBPACK_IMPORTED_MODULE_15__["ModalHeaderDmComponent"], _modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_39__["ModalHeaderComponent"], _back_continue_toolbar_back_continue_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["BackContinueToolbarComponent"], _topnavigations_btns_dm_topnavigations_btns_dm_component__WEBPACK_IMPORTED_MODULE_17__["TopnavigationsBtnsDmComponent"], _topnavigations_segments_dm_topnavigations_segments_dm_component__WEBPACK_IMPORTED_MODULE_18__["TopnavigationsSegmentsDmComponent"], _sync_warning_msg_sync_warning_msg_component__WEBPACK_IMPORTED_MODULE_19__["SyncWarningMsgComponent"], _portrait_orientation_portrait_orientation_component__WEBPACK_IMPORTED_MODULE_20__["PortraitOrientationComponent"], _screen_inner_loading_screen_inner_loading_component__WEBPACK_IMPORTED_MODULE_21__["ScreenInnerLoadingComponent"], _single_choice_field_single_choice_field_component__WEBPACK_IMPORTED_MODULE_22__["SingleChoiceFieldComponent"], _multiple_choice_field_multiple_choice_field_component__WEBPACK_IMPORTED_MODULE_23__["MultipleChoiceFieldComponent"], _confirm_box_field_confirm_box_field_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmBoxFieldComponent"], _singleline_text_field_singleline_text_field_component__WEBPACK_IMPORTED_MODULE_24__["SinglelineTextFieldComponent"], _multiline_text_field_multiline_text_field_component__WEBPACK_IMPORTED_MODULE_25__["MultilineTextFieldComponent"], _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_26__["DateFieldComponent"], _date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_27__["DateTimeFieldComponent"], _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_28__["TimeFieldComponent"], _number_integer_field_number_integer_field_component__WEBPACK_IMPORTED_MODULE_29__["NumberIntegerFieldComponent"], _number_decimal_field_number_decimal_field_component__WEBPACK_IMPORTED_MODULE_30__["NumberDecimalFieldComponent"], _dropdown_field_dropdown_field_component__WEBPACK_IMPORTED_MODULE_31__["DropdownFieldComponent"], _exposure_exposure_component__WEBPACK_IMPORTED_MODULE_32__["ExposureComponent"], _question_list_header_question_list_header_component__WEBPACK_IMPORTED_MODULE_33__["QuestionListHeaderComponent"], _custom_questions_container_custom_questions_container_component__WEBPACK_IMPORTED_MODULE_34__["CustomQuestionsContainerComponent"], _photo_field_photo_field_component__WEBPACK_IMPORTED_MODULE_35__["PhotoFieldComponent"], _section_title_section_title_component__WEBPACK_IMPORTED_MODULE_36__["SectionTitleComponent"], _archived_item_archived_item_component__WEBPACK_IMPORTED_MODULE_37__["ArchivedItemComponent"], _custom_ion_refresh_loader_custom_ion_refresh_loader_component__WEBPACK_IMPORTED_MODULE_38__["CustomIonRefreshLoaderComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
        exports: [_warning_component_warning_component_component__WEBPACK_IMPORTED_MODULE_3__["WarningComponentComponent"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"], _auth_input_auth_input_component__WEBPACK_IMPORTED_MODULE_5__["AuthInputComponent"], _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__["DashboardHeaderComponent"], _add_choose_photo_add_choose_photo_component__WEBPACK_IMPORTED_MODULE_9__["AddChoosePhotoComponent"], _empty_message_empty_message_component__WEBPACK_IMPORTED_MODULE_10__["EmptyMessageComponent"], _next_prev_toolbar_next_prev_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["NextPrevToolbarComponent"], _dashboard_header_dm_dashboard_header_dm_component__WEBPACK_IMPORTED_MODULE_12__["DashboardHeaderDmComponent"], _dashboard_button_dashboard_button_component__WEBPACK_IMPORTED_MODULE_13__["DashboardButtonComponent"], _device_info_device_info_component__WEBPACK_IMPORTED_MODULE_14__["DeviceInfoComponent"], _modal_header_dm_modal_header_dm_component__WEBPACK_IMPORTED_MODULE_15__["ModalHeaderDmComponent"], _modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_39__["ModalHeaderComponent"], _back_continue_toolbar_back_continue_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["BackContinueToolbarComponent"], _topnavigations_btns_dm_topnavigations_btns_dm_component__WEBPACK_IMPORTED_MODULE_17__["TopnavigationsBtnsDmComponent"], _topnavigations_segments_dm_topnavigations_segments_dm_component__WEBPACK_IMPORTED_MODULE_18__["TopnavigationsSegmentsDmComponent"], _sync_warning_msg_sync_warning_msg_component__WEBPACK_IMPORTED_MODULE_19__["SyncWarningMsgComponent"], _portrait_orientation_portrait_orientation_component__WEBPACK_IMPORTED_MODULE_20__["PortraitOrientationComponent"], _screen_inner_loading_screen_inner_loading_component__WEBPACK_IMPORTED_MODULE_21__["ScreenInnerLoadingComponent"], _single_choice_field_single_choice_field_component__WEBPACK_IMPORTED_MODULE_22__["SingleChoiceFieldComponent"], _multiple_choice_field_multiple_choice_field_component__WEBPACK_IMPORTED_MODULE_23__["MultipleChoiceFieldComponent"], _confirm_box_field_confirm_box_field_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmBoxFieldComponent"], _singleline_text_field_singleline_text_field_component__WEBPACK_IMPORTED_MODULE_24__["SinglelineTextFieldComponent"], _multiline_text_field_multiline_text_field_component__WEBPACK_IMPORTED_MODULE_25__["MultilineTextFieldComponent"], _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_26__["DateFieldComponent"], _date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_27__["DateTimeFieldComponent"], _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_28__["TimeFieldComponent"], _number_integer_field_number_integer_field_component__WEBPACK_IMPORTED_MODULE_29__["NumberIntegerFieldComponent"], _number_decimal_field_number_decimal_field_component__WEBPACK_IMPORTED_MODULE_30__["NumberDecimalFieldComponent"], _dropdown_field_dropdown_field_component__WEBPACK_IMPORTED_MODULE_31__["DropdownFieldComponent"], _exposure_exposure_component__WEBPACK_IMPORTED_MODULE_32__["ExposureComponent"], _question_list_header_question_list_header_component__WEBPACK_IMPORTED_MODULE_33__["QuestionListHeaderComponent"], _custom_questions_container_custom_questions_container_component__WEBPACK_IMPORTED_MODULE_34__["CustomQuestionsContainerComponent"], _photo_field_photo_field_component__WEBPACK_IMPORTED_MODULE_35__["PhotoFieldComponent"], _section_title_section_title_component__WEBPACK_IMPORTED_MODULE_36__["SectionTitleComponent"], _archived_item_archived_item_component__WEBPACK_IMPORTED_MODULE_37__["ArchivedItemComponent"], _custom_ion_refresh_loader_custom_ion_refresh_loader_component__WEBPACK_IMPORTED_MODULE_38__["CustomIonRefreshLoaderComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "jRuQ":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/single-choice-field/single-choice-field.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jRuQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container [formGroup]=\"form\">\n\t<ion-radio-group [formControlName]=\"inputName\">\n\t\t<ion-item *ngFor=\"let item of list\" class=\"question-item\">\n\t\t\t<ion-label class=\"ion-text-wrap\" [ngStyle]=\"{ color: UtilService.getColorForAnswerChoice(item.answerChoiceAttributeColor) }\">\n\t\t\t\t{{ UtilService.findObj(item.answerChoiceAttributeHeaders, 'answerChoiceAttributeHeaderLanguageId', sharedDataService.getLanguageIdForForm()).answerChoiceAttributeHeaderTitle }}\n\t\t\t</ion-label>\n\t\t\t<ion-radio mode=\"md\" slot=\"start\" (click)=\"onRadioSelect(item)\" [value]=\"item.answerChoiceAttributeId\"></ion-radio>\n\t\t</ion-item>\n\t</ion-radio-group>\n</ng-container>\n";
      /***/
    },

    /***/
    "jgN4":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/custom-questions-container/custom-questions-container.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jgN4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tcXVlc3Rpb25zLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "kDGi":
    /*!*********************************************************************!*\
      !*** ./src/app/components/archived-item/archived-item.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ArchivedItemComponent */

    /***/
    function kDGi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArchivedItemComponent", function () {
        return ArchivedItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_archived_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./archived-item.component.html */
      "SKwB");
      /* harmony import */


      var _archived_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./archived-item.component.scss */
      "yWS4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ArchivedItemComponent = /*#__PURE__*/function () {
        function ArchivedItemComponent() {
          _classCallCheck(this, ArchivedItemComponent);

          this.itemSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(ArchivedItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ArchivedItemComponent;
      }();

      ArchivedItemComponent.ctorParameters = function () {
        return [];
      };

      ArchivedItemComponent.propDecorators = {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colSecond: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colSecondHighlighted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colThird: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colThirdHighlighted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        itemSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ArchivedItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-archived-item',
        template: _raw_loader_archived_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_archived_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ArchivedItemComponent);
      /***/
    },

    /***/
    "kEVF":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/number-integer-field/number-integer-field.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function kEVF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input-item ion-input {\n  min-height: 42px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251bWJlci1pbnRlZ2VyLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6Im51bWJlci1pbnRlZ2VyLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWl0ZW0ge1xuICBpb24taW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgLS1jb2xvcjogIzE3MTUzODtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMTcxNTM4O1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "kLFY":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-ion-refresh-loader/custom-ion-refresh-loader.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kLFY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-refresher-content [refreshingSpinner]=\"null\">\n  <div class=\"ion-infinite-custom-loader\" *ngIf=\"isRefreshing\">\n    <ion-icon src=\"./assets/icon/Loader.svg\"></ion-icon>\n  </div>\n</ion-refresher-content>\n";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kv2K":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard-header/dashboard-header.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kv2K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar mode=\"ios\" class=\"part-1\">\n\n    <ion-title size=\"large\">\n        {{isCurrentCheckin ? 'Current Check-In' : 'Dashboard'}}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"checkByQrCode()\">\n            <ion-icon class=\"scan-icon\" slot=\"icon-only\" src=\"./assets/icon/qrscan.svg\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n\n</ion-toolbar>\n\n<ion-item class=\"checked-in-status-view\" [ngClass]=\"{'remove-padding':shouldShowNavigationPlaceBtns()}\" lines=\"none\"\n          (click)=\"showCheckedInPlace()\">\n\n    <ion-button *ngIf=\"shouldShowNavigationPlaceBtns()\" slot=\"start\"\n                class=\"arrow-button left\" size=\"small\" fill=\"clear\"\n                (click)=\"previousPlace()\">\n        <ion-icon *ngIf=\"shouldShowNavigationPlaceBtns(1)\" slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n\n\n    <div slot=\"start\" class=\"status-circle\" [ngClass]=\"{'checked-in':checkedIn}\"></div>\n\n    <ion-label>\n        <ng-container *ngIf=\"checkedIn;else notCheckedIn\">\n            Checked-in:\n            <ng-container *ngIf=\"!isCurrentCheckin\">\n                &nbsp; {{checkedPlaces.length == 1 ? checkedPlaces[0].entityName : 'to ' + checkedPlaces.length + ' places'}}\n            </ng-container>\n\n            <ng-container *ngIf=\"isCurrentCheckin\">\n                &nbsp; {{sharedDataService.currentSelectedCheckinPlace?.entityName}}\n            </ng-container>\n        </ng-container>\n        <ng-template #notCheckedIn>You aren’t checked in</ng-template>\n    </ion-label>\n\n    <ng-container *ngIf=\"checkedIn && checkedPlaces.length===1\">\n        <ion-button slot=\"end\" size=\"small\" fill=\"clear\" class=\"checkin-view-btn\"\n                    (click)=\"checkoutPlace(checkedPlaces[0], $event)\">\n            <ion-icon slot=\"icon-only\" src=\"./assets/icon/checkout-light.svg\"></ion-icon>\n        </ion-button>\n    </ng-container>\n\n    <ion-button *ngIf=\"shouldShowNavigationPlaceBtns()\" slot=\"end\"\n                class=\"arrow-button right\" size=\"small\" fill=\"clear\"\n                (click)=\"nextPlace()\">\n        <ion-icon *ngIf=\"shouldShowNavigationPlaceBtns(2)\" slot=\"icon-only\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n</ion-item>\n\n<div class=\"check-in-places-list-container\" *ngIf=\"showCheckedInPlacesList\" (click)=\"showCheckedInPlacesList=false\">\n   <div class=\"list-container\">\n       <ion-list class=\"check-in-places-list\" lines=\"none\"\n                 (click)=\"$event.stopImmediatePropagation();$event.stopPropagation()\">\n           <ion-item *ngFor=\"let place of checkedPlaces\"\n                     [ngClass]=\"{'selected':(selectedPlace&&selectedPlace.userCheckInDetailID === place.userCheckInDetailID)}\"\n                     (click)=\"placeChoose(place)\">\n               <ion-label>{{place.entityName}}</ion-label>\n               <ion-button slot=\"end\" size=\"small\" fill=\"clear\" class=\"checkin-view-btn\"\n                           (click)=\"checkoutPlace(place, $event)\">\n                   <ion-icon slot=\"icon-only\" src=\"./assets/icon/checkout-dark.svg\"></ion-icon>\n               </ion-button>\n           </ion-item>\n       </ion-list>\n   </div>\n</div>\n\n\n<div class=\"checkin-btns\" *ngIf=\"!hideCheckinButton\">\n    <ion-button class=\"left\" size=\"small\" fill=\"clear\" (click)=\"checkByQrCode()\">\n        Check In by QR Code\n    </ion-button>\n\n    <ion-button class=\"right\" size=\"small\" fill=\"clear\" (click)=\"checkInByList()\">\n        Check In by List\n    </ion-button>\n</div>\n";
      /***/
    },

    /***/
    "kwUO":
    /*!*******************************************!*\
      !*** ./src/app/pipes/list-filter.pipe.ts ***!
      \*******************************************/

    /*! exports provided: ListFilterPipe */

    /***/
    function kwUO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function () {
        return ListFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ListFilterPipe = /*#__PURE__*/function () {
        function ListFilterPipe() {
          _classCallCheck(this, ListFilterPipe);
        }

        _createClass(ListFilterPipe, [{
          key: "transform",
          value: function transform(names, terms) {
            var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!names) {
              return [];
            }

            if (!terms) {
              return names;
            }

            terms = terms.toLowerCase();
            return names.filter(function (it) {
              return (key ? it[key] : it).toLowerCase().includes(terms);
            });
          }
        }]);

        return ListFilterPipe;
      }();

      ListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'listFilter'
      })], ListFilterPipe);
      /***/
    },

    /***/
    "lBXW":
    /*!*****************************************************************!*\
      !*** ./src/app/components/photo-field/photo-field.component.ts ***!
      \*****************************************************************/

    /*! exports provided: PhotoFieldComponent */

    /***/
    function lBXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoFieldComponent", function () {
        return PhotoFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_photo_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./photo-field.component.html */
      "W02B");
      /* harmony import */


      var _photo_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./photo-field.component.scss */
      "Dcd8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_static_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/static-data.service */
      "hYb0");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "/sJY");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var PhotoFieldComponent_1;

      var PhotoFieldComponent = PhotoFieldComponent_1 = /*#__PURE__*/function () {
        function PhotoFieldComponent(photoService, sanitizer, mediaCapture, navCtrl, sharedDataService, actionSheetController) {
          var _this39 = this;

          _classCallCheck(this, PhotoFieldComponent);

          this.photoService = photoService;
          this.sanitizer = sanitizer;
          this.mediaCapture = mediaCapture;
          this.navCtrl = navCtrl;
          this.sharedDataService = sharedDataService;
          this.actionSheetController = actionSheetController;
          this.StaticDataService = _services_static_data_service__WEBPACK_IMPORTED_MODULE_8__["StaticDataService"];
          this.disabled = false;
          this.isVideo = false;

          this.onChange = function (image) {};

          this.onTouch = function () {};

          this.openImageAnnotation = function (photo) {
            _this39.sharedDataService.isOpenImageAnnotation = true;

            _this39.sharedDataService.setAnnotationImage(photo);

            _this39.sharedDataService.onAnnotationImageDone = function (image) {
              _this39.photoAdded(image);
            };

            _this39.navCtrl.navigateForward(['/image-annotation']);
          };
        }

        _createClass(PhotoFieldComponent, [{
          key: "editPhoto",
          value: function editPhoto() {
            this.openImageAnnotation(this.image);
          }
        }, {
          key: "photoRemoved",
          value: function photoRemoved() {
            this.photoAdded(null);
          }
        }, {
          key: "photoAdded",
          value: function photoAdded(photo) {
            this.writeValue(photo);
            this.onTouch();
          }
        }, {
          key: "addPhotoFromCamera",
          value: function addPhotoFromCamera() {
            var _this40 = this;

            this.photoService.takePhotoFromCamera(function (photo) {
              _this40.isVideo = false;

              _this40.openImageAnnotation(photo);
            });
          }
        }, {
          key: "addVideoFromCamera",
          value: function addVideoFromCamera() {
            var _this41 = this;

            var options = {
              limit: 1,
              duration: 3600
            };
            this.mediaCapture.captureVideo(options).then(function (data) {
              _this41.isVideo = true;
              var capturedFile = data[0];
              var videoUrl = capturedFile.fullPath;
              _this41.videoUrl = _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["Capacitor"].convertFileSrc(videoUrl);

              _this41.photoAdded(videoUrl);
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "choosePhotoVideoOption",
          value: function choosePhotoVideoOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this42 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.actionSheetController.create({
                        header: 'Choose option',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Photo',
                          icon: 'camera-outline',
                          handler: function handler() {
                            _this42.addPhotoFromCamera();
                          }
                        }, {
                          text: 'Video',
                          icon: 'videocam-outline',
                          handler: function handler() {
                            _this42.addVideoFromCamera();
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      actionSheet = _context25.sent;
                      _context25.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "addPhotoFromLibrary",
          value: function addPhotoFromLibrary() {
            var _this43 = this;

            this.photoService.takePhotoFromGallery(function (photo) {
              if (photo.isVideo) {
                _this43.isVideo = true;
                var videoUrl = photo.dataUrl;
                _this43.videoUrl = _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["Capacitor"].convertFileSrc(videoUrl);

                _this43.photoAdded(videoUrl);
              } else {
                _this43.isVideo = false;

                _this43.openImageAnnotation(photo);
              }
            }, true);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
        }, {
          key: "writeValue",
          value: function writeValue(obj) {
            this.onChange(obj);
            this.image = obj;
          }
        }, {
          key: "sanitize",
          value: function sanitize(url) {
            return this.sanitizer.bypassSecurityTrustUrl(url);
          } // Allow the Angular form control to disable this input

        }, {
          key: "setDisabledState",
          value: function setDisabledState(disabled) {
            this.disabled = disabled;
          }
        }]);

        return PhotoFieldComponent;
      }();

      PhotoFieldComponent.ctorParameters = function () {
        return [{
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__["MediaCapture"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }];
      };

      PhotoFieldComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PhotoFieldComponent = PhotoFieldComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-photo-field',
        template: _raw_loader_photo_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
          useExisting: PhotoFieldComponent_1,
          multi: true
        }],
        styles: [_photo_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PhotoFieldComponent);
      /***/
    },

    /***/
    "mBlR":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/topnavigations-segments-dm/topnavigations-segments-dm.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: TopnavigationsSegmentsDmComponent */

    /***/
    function mBlR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopnavigationsSegmentsDmComponent", function () {
        return TopnavigationsSegmentsDmComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_topnavigations_segments_dm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./topnavigations-segments-dm.component.html */
      "I9+N");
      /* harmony import */


      var _topnavigations_segments_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./topnavigations-segments-dm.component.scss */
      "Qxq/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TopnavigationsSegmentsDmComponent = /*#__PURE__*/function () {
        function TopnavigationsSegmentsDmComponent(ngZone) {
          _classCallCheck(this, TopnavigationsSegmentsDmComponent);

          this.ngZone = ngZone;
          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.searching = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.searchbarShowHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.searchBarShow = false;
        }

        _createClass(TopnavigationsSegmentsDmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onChanged",
          value: function onChanged(event) {
            console.log('event.detail.value' + event.detail.value);
            this.changed.emit(event.detail.value);
          }
        }, {
          key: "showSearchBar",
          value: function showSearchBar() {
            var _this44 = this;

            this.ngZone.run(function () {
              _this44.searchBarShow = !_this44.searchBarShow;

              _this44.searchbarShowHide.emit(_this44.searchBarShow);
            });
          }
        }]);

        return TopnavigationsSegmentsDmComponent;
      }();

      TopnavigationsSegmentsDmComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      TopnavigationsSegmentsDmComponent.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        searching: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        searchbarShowHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      TopnavigationsSegmentsDmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-topnavigations-segments-dm',
        template: _raw_loader_topnavigations_segments_dm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_topnavigations_segments_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TopnavigationsSegmentsDmComponent);
      /***/
    },

    /***/
    "msgi":
    /*!*************************************************!*\
      !*** ./src/app/services/shared-data.service.ts ***!
      \*************************************************/

    /*! exports provided: SharedDataService */

    /***/
    function msgi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedDataService", function () {
        return SharedDataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _enum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enum.service */
      "AIDl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./util.service */
      "2Rin");
      /* harmony import */


      var _observables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./observables.service */
      "mxI+");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _static_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./static-data.service */
      "hYb0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"],
          PushNotifications = _capacitor_core__WEBP2.PushNotifications,
          Permissions = _capacitor_core__WEBP2.Permissions;

      var SharedDataService = /*#__PURE__*/function () {
        function SharedDataService(router, platform, file, fileTransfer, navCtrl, observablesService, utilService, screenOrientation) {
          var _this45 = this;

          _classCallCheck(this, SharedDataService);

          this.router = router;
          this.platform = platform;
          this.file = file;
          this.fileTransfer = fileTransfer;
          this.navCtrl = navCtrl;
          this.observablesService = observablesService;
          this.utilService = utilService;
          this.screenOrientation = screenOrientation;
          this.isNavigationTypeDeepLink = false;
          this.isLoginAfterAppOpen = false;
          this.annotationColor = '#98C16B';
          this.deviceUID = ''; // For simulator ipad
          // deviceUID = '33F3FF08-8A4E-4E24-84DC-D8AF80B8EAC1';
          // deviceUID = "33F3FF08-8A4E-4E24-14DC-D8AF80B8EAC1"; // For test dedicated mode
          // deviceUID = "33F3FF08-8A4E-4E24-14DC-D8AF80B8EAC12222"; // For test dedicated mode assign one location
          // deviceUID = 'f5aa72ed-21ca-4b12-8485-a24447cb420d'; // Arvin ipad device id
          // deviceUID = "f44ab87b-a2d6-8df0-8637-870495265348"; // SdevAndroid
          // deviceUID = "67DA70A1-FD31-4B48-81F6-74E9EB356632"; // SdevIphone
          // deviceUID = '0d98044b-6541-c58e-6353-935090075482'; // Rosana Tablet5.1

          this.pushToken = '000';
          this.isTablet = false;
          this.dedicatedMode = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.IS_DEDICATED_MODE) === 'true'; // Data from Api

          this.checkedInPlaces = []; // For dedicated mode

          this.dedicatedModeProcessType = ''; // EnumService.DedicatedModeProcessTypes

          this.checkinoutDmAs = ''; // EnumService.CheckInType

          this.signOffFor = ''; // EnumService.SignOffType

          this.dedicatedModeTempAuthFor = ''; // EnumService.DedicatedModeTempAuthType

          this.dedicatedModeTempAuthBy = ''; // EnumService.DedicatedModeTempAuthBy

          this.dedicatedModeCapturePhotoFor = ''; // EnumService.DedicatedModeCapturePhotoForType

          this.inductionContentItemIndex = 0;
          this.isOpenImageAnnotation = false; //

          this.currentLanguageId = 0;

          this.configureForPushNotification = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this45, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var _this46 = this;

              var notificationPermission;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].isNative) {
                        _context26.next = 19;
                        break;
                      }

                      _context26.prev = 1;
                      _context26.next = 4;
                      return Permissions.query({
                        name: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["PermissionType"].Notifications
                      });

                    case 4:
                      notificationPermission = _context26.sent;

                      if (!(notificationPermission.state !== 'granted')) {
                        _context26.next = 10;
                        break;
                      }

                      _context26.next = 8;
                      return PushNotifications.requestPermission().then(function (result) {
                        if (result.granted) {
                          localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.PUSH_PERMISSION_ALLOWED, 'true'); // Register with Apple / Google to receive push via APNS/FCM

                          _this46.registerForPushNotification();
                        } else {
                          localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.PUSH_PERMISSION_ALLOWED, 'false');

                          _this46.updatePushSettingOnServer(false);
                        }
                      });

                    case 8:
                      _context26.next = 12;
                      break;

                    case 10:
                      localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.PUSH_PERMISSION_ALLOWED, 'true');
                      this.registerForPushNotification();

                    case 12:
                      // On success, we should be able to receive notifications
                      PushNotifications.addListener('registration', function (token) {
                        localStorage.setItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.PUSH_TOKEN, token.value);
                        _this46.pushToken = token.value;
                        console.log('Push registration success, token: ' + token.value);
                      }); // Show us the notification payload if the app is open on our device

                      PushNotifications.addListener('pushNotificationReceived', function (notification) {
                        console.log('Push received: ' + JSON.stringify(notification));
                      }); // Method called when tapping on a notification

                      PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
                        if (notification.actionId === 'tap') {
                          var notificationData = notification.notification.data;

                          switch (notificationData.action) {
                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].NotificationActionType.NewActivityAssigned:
                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].NotificationActionType.SignOffRejected:
                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].NotificationActionType.ActivityOverdue:
                              if (!_this46.dedicatedMode && _this46.getLoggedInUser() && _this46.getLoggedInUser().userId) {
                                setTimeout(function () {
                                  var contentlink = notificationData.contentlink;
                                  var activityId = contentlink.split('_').pop();
                                  var activityList = _this46.activityList;
                                  var currentActivityOpen;

                                  if (activityList) {
                                    activityList.map(function (item) {
                                      if (item.activityIndividualID === activityId) {
                                        currentActivityOpen = item;
                                        return;
                                      }
                                    });
                                  }

                                  if (!currentActivityOpen) {
                                    currentActivityOpen = {
                                      activityIndividualID: activityId
                                    };
                                  }

                                  _this46.currentActivityOpen = currentActivityOpen;
                                  console.log('Push currentActivityOpen', currentActivityOpen);

                                  _this46.navCtrl.navigateForward(['/activity-detail']);
                                }, 100);
                              }

                              break;
                          }
                        } // {"actionId":"tap","notification":{"body":"You have a new Activity Assigned","badge":1,"id":"A50F97EA-2426-4407-B9B6-80E576527CD1","subtitle":"","data":{"google.c.a.e":"1","contentlink":"https://cg.utopia-test.com/Activity/ActivityDetail/0_1339","action":"New Activity Assigned","aps":{"alert":{"title":"ComplianceGenie","body":"You have a new Activity Assigned"},"sound":"default","category":"FCM_PLUGIN_ACTIVITY"},"content":"You have a new Activity Assigned","gcm.message_id":"1610621468120206","google.c.sender.id":"1005975349422"},"title":"ComplianceGenie"}}


                        console.log('Push action performed: ' + JSON.stringify(notification));
                      });
                      _context26.next = 19;
                      break;

                    case 17:
                      _context26.prev = 17;
                      _context26.t0 = _context26["catch"](1);

                    case 19:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this, [[1, 17]]);
            }));
          };

          this.registerForPushNotification = function () {
            PushNotifications.register();

            _this45.updatePushSettingOnServer(true);
          };

          this.updatePushSettingOnServer = function (isEnable) {
            var _a, _b;

            if (_this45.dedicatedMode) {
              _this45.apiServiceRerence.updatePushNotification({
                isPushNotification: isEnable
              }, _this45.deviceUID).subscribe(function () {});
            } else {
              if ((_a = _this45.getLoggedInUser()) === null || _a === void 0 ? void 0 : _a.userId) {
                _this45.apiServiceRerence.updatePushNotification({
                  isPushNotification: isEnable
                }, (_b = _this45.getLoggedInUser()) === null || _b === void 0 ? void 0 : _b.userId).subscribe(function () {});
              }
            }
          };
          /**
           * For dedicated mode
           */


          this.getCurrentCheckedInEntityName = function () {
            return _this45.getEntityName(_this45.dedicatedModeLocationUse);
          };
          /**
           * For dedicated mode
           */


          this.getEntityName = function (deviceEntityDetail) {
            if ((deviceEntityDetail === null || deviceEntityDetail === void 0 ? void 0 : deviceEntityDetail.locationID) > 0) {
              return deviceEntityDetail === null || deviceEntityDetail === void 0 ? void 0 : deviceEntityDetail.locationName;
            } else if ((deviceEntityDetail === null || deviceEntityDetail === void 0 ? void 0 : deviceEntityDetail.projectID) > 0) {
              return deviceEntityDetail === null || deviceEntityDetail === void 0 ? void 0 : deviceEntityDetail.projectName;
            } else if ((deviceEntityDetail === null || deviceEntityDetail === void 0 ? void 0 : deviceEntityDetail.inventoryItemID) > 0) {
              return deviceEntityDetail === null || deviceEntityDetail === void 0 ? void 0 : deviceEntityDetail.itemName;
            }

            return '';
          };

          this.getCheckinDetails = function (userId, apiService) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this45, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var _this47 = this;

              var ifAlreadyCheckedinPlace;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      if (userId && this.checkInForLocation) {
                        if (this.checkedInPlaces) {
                          this.checkedInPlaces.map(function (place) {
                            var entityIds = _this47.utilService.getRelevantEntityId(_this47.checkInForLocation.locationID);

                            if (entityIds.InventoryID > 0 && entityIds.InventoryID === place.inventoryItemID || entityIds.ProjectID > 0 && entityIds.ProjectID === place.projectID || entityIds.LocationID > 0 && entityIds.LocationID === place.locationID) {
                              ifAlreadyCheckedinPlace = place;
                              return;
                            }
                          });
                        }

                        if (ifAlreadyCheckedinPlace) {
                          this.checkOutForCheckedInDetail = ifAlreadyCheckedinPlace;
                          this.navCtrl.navigateForward(['/checkinout-confirm'], {
                            queryParams: {
                              headerTitle: 'Check Out',
                              title: 'You are checking out',
                              subtitle: ifAlreadyCheckedinPlace.entityName,
                              buttonTitle: 'Check Out Now',
                              locationCheckType: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ConfirmForCheckType.CheckOut
                            },
                            replaceUrl: true
                          });
                        } else {
                          this.utilService.presentLoadingWithOptions();
                          apiService.getCheckInDetails(userId, this.checkInForLocation.locationID).subscribe(function (response) {
                            var _a, _b;

                            _this47.utilService.hideLoading();

                            if (response.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                              _this47.checkInDetail = response.Result;
                              _this47.checkInPostData = {
                                userId: userId,
                                checkInLatitude: (_a = _this47.myCurrentGeoLocation) === null || _a === void 0 ? void 0 : _a.coords.latitude,
                                checkInLongitude: (_b = _this47.myCurrentGeoLocation) === null || _b === void 0 ? void 0 : _b.coords.longitude,
                                isGuestReturning: false,
                                projectID: _this47.checkInDetail.checkInEntityDetail.projectID,
                                inventoryItemID: _this47.checkInDetail.checkInEntityDetail.inventoryItemID,
                                locationID: _this47.checkInDetail.checkInEntityDetail.locationID
                              };

                              _this47.navCtrl.navigateForward(['/checkinout-confirm'], {
                                queryParams: {
                                  headerTitle: 'Check In',
                                  title: 'You are checking in',
                                  subtitle: _this47.checkInForLocation.locationName,
                                  buttonTitle: 'Check In Now',
                                  nextPageData: JSON.stringify({
                                    locationDetail: JSON.stringify(_this47.checkInForLocation)
                                  }),
                                  nextPagePath: '/checkin-induction',
                                  locationCheckType: _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ConfirmForCheckType.CheckIn
                                },
                                replaceUrl: true
                              });
                            }
                          }, function (error) {
                            var _a, _b;

                            var errorField = (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.ResponseException) === null || _b === void 0 ? void 0 : _b.ValidationErrors[0].Field;

                            _this47.utilService.hideLoading();

                            if (errorField.indexOf('SimultaneousCheckIn') !== -1) {
                              _this47.navCtrl.navigateForward(['/checkin-fail'], {
                                queryParams: {
                                  title: 'You cannot check-in',
                                  errorTitle: 'Simultanious Check-In Not Allowed.',
                                  errorMessage: 'You are already checked-in to another place.',
                                  nextPage: '/tabs/dashboard'
                                },
                                replaceUrl: true
                              });
                            } else {
                              _this47.navCtrl.navigateForward(['/checkin-fail'], {
                                queryParams: {
                                  title: 'You cannot check-in',
                                  errorTitle: 'No Qualification',
                                  errorMessage: 'You do not have the required qualifications.',
                                  nextPage: '/tabs/dashboard'
                                },
                                replaceUrl: true
                              });
                            }
                          });
                        }
                      }

                    case 1:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          };
          /**
           * Get Checkin Details for Dedicated mode
           * @param userId temp auth user id
           * @param apiService ApiService class refrence
           * @param userPhoto userPhoto if captured and uploaded to CheckInPhotoUpload api
           * @param callBack call back to the block where it is called
           */


          this.getCheckinDetailsForDedicatedMode = function (userId, apiService) {
            var userPhoto = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var callBack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this45, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this48 = this;

              var entityId;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      if (userId && this.dedicatedModeLocationUse) {
                        entityId = this.utilService.getEntityIdFromId(this.dedicatedModeLocationUse);
                        this.utilService.presentLoadingWithOptions();
                        apiService.getCheckInDetails(userId, entityId).subscribe(function (response) {
                          var _a, _b;

                          _this48.utilService.hideLoading();

                          if (response.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                            var canUserCheckinToLocation = true;

                            if (_this48.dedicatedModeProcessType === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeProcessTypes.CheckinOut && _this48.checkinoutDmAs === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CheckInType.QrCode) {
                              var checkinDetail = response.Result;

                              if (!checkinDetail.checkInEntityDetail.checkInPersonalQR) {
                                canUserCheckinToLocation = false;

                                _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].fireCallBack(callBack, {
                                  ischeckInPersonalQRNotAllowed: true
                                });
                              }
                            }

                            if (canUserCheckinToLocation) {
                              _this48.checkInDetail = response.Result;
                              _this48.checkInPostData = {
                                userId: userId,
                                userPhoto: userPhoto,
                                checkInLatitude: (_a = _this48.myCurrentGeoLocation) === null || _a === void 0 ? void 0 : _a.coords.latitude,
                                checkInLongitude: (_b = _this48.myCurrentGeoLocation) === null || _b === void 0 ? void 0 : _b.coords.longitude,
                                isGuestReturning: false,
                                projectID: _this48.dedicatedModeLocationUse.projectID,
                                inventoryItemID: _this48.dedicatedModeLocationUse.inventoryItemID,
                                locationID: _this48.dedicatedModeLocationUse.locationID
                              };

                              _this48.processCheckinDetailsStepInitial(apiService, false);
                            }
                          }
                        }, function (error) {
                          _this48.utilService.hideLoading();

                          _this48.processCheckInError(error, '/dashboard-dm');
                        });
                      }

                    case 1:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          };

          this.getCheckinDetailsGuest = function (apiService) {
            var isGuestReturning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var entityId = _this45.utilService.getEntityIdFromId(_this45.dedicatedModeLocationUse);

            var nextScreen = _this45.dedicatedMode ? '/dashboard-dm' : '/tabs/dashboard';
            var dedicatedModeDeviceDetailData = _this45.dedicatedModeDeviceDetailData;
            var dedicatedModeGuestDetail = _this45.dedicatedModeGuestDetail;
            var dedicatedModeLocationUse = _this45.dedicatedModeLocationUse;

            _this45.utilService.presentLoadingWithOptions();

            apiService.getCheckInDetails_Guest(dedicatedModeGuestDetail.guestPhone || '', dedicatedModeGuestDetail.guestFirsName || '', dedicatedModeGuestDetail.guestMiddleName || '', dedicatedModeGuestDetail.guestLastName || '', entityId).subscribe(function (res) {
              var _a, _b;

              _this45.utilService.hideLoading();

              if (res.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this45.checkInDetail = res.Result;
                _this45.checkInPostData = {
                  checkInLatitude: (_a = _this45.myCurrentGeoLocation) === null || _a === void 0 ? void 0 : _a.coords.latitude,
                  checkInLongitude: (_b = _this45.myCurrentGeoLocation) === null || _b === void 0 ? void 0 : _b.coords.longitude,
                  isGuestReturning: isGuestReturning,
                  projectID: dedicatedModeLocationUse.projectID,
                  inventoryItemID: dedicatedModeLocationUse.inventoryItemID,
                  locationID: dedicatedModeLocationUse.locationID,
                  guestPhone: dedicatedModeGuestDetail.guestPhone,
                  guestFirsName: dedicatedModeGuestDetail.guestFirsName,
                  guestMiddleName: dedicatedModeGuestDetail.guestMiddleName,
                  guestLastName: dedicatedModeGuestDetail.guestLastName,
                  guestPhoto: dedicatedModeGuestDetail.guestPhoto,
                  companyID: dedicatedModeDeviceDetailData.companyID
                };

                _this45.processCheckinDetailsStepInitial(apiService, true);
              }
            }, function (error) {
              _this45.utilService.hideLoading();

              _this45.processCheckInError(error, nextScreen);
            });
          };

          this.submitFormAnswers = function (apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack) {
            var havExposure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var workPermitAnswer = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
            var attachemtUploaded = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
            var sections = formBuilderDetail.sections;
            var workPermitDetails = formBuilderDetail.workPermitDetails;
            var accidentReport = formBuilderDetail.accidentReport;
            var formVersionId = formBuilderDetail.formVersionId;
            var questionAnswers = [];
            var havQuestionAnswers = [];
            var accidentReportQuestionAnswers = [];
            var riskAssessmentAnswers = [];

            var selectedLanguageID = _this45.getLanguageIdForForm();

            var formattedSections = [];
            var userId = _this45.dedicatedMode ? _this45.dedicatedModeUserDetail.userId : personalModeLoggedUser.userId;
            var companyId = _this45.dedicatedMode ? _this45.dedicatedModeDeviceDetailData.companyID : personalModeLoggedUser.companyID;
            sections.map(function (section, sectionIndex) {
              if (_this45.utilService.shouldShowSection(section)) {
                var formattedAnswers = [];
                var sectionFormattedObject = JSON.parse(JSON.stringify(section));

                if (section.isRiskAssessmentSection) {
                  var tasks = section.tasks;
                  tasks.map(function (task) {
                    if (_this45.utilService.shouldShowQuestion(task)) {
                      var answerFormattedObject = JSON.parse(JSON.stringify(task));
                      var hazardsAnswers = [];
                      var hazards = task.hazards;
                      hazards.map(function (hazard) {
                        var _answerObject;

                        var hazardFormattedObject = JSON.parse(JSON.stringify(hazard));
                        var answerObject = (_answerObject = {
                          riskAQuestionAnswerId: 0,
                          hazardID: hazard.hazardId,
                          formVersionID: formVersionId,
                          riskRatingID: hazard.riskRating || 0,
                          residualRiskRatingID: hazard.residualRiskRating || 0,
                          isMembersOfTheWorkForce: hazard.memberOfTheWorkForce,
                          isMembersOfThePublic: hazard.memberOfThePublic
                        }, _defineProperty(_answerObject, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed, task[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed]), _defineProperty(_answerObject, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify, task[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify]), _answerObject);
                        var controlMeasures = hazard.controlMeasures;
                        var controlMeasureIDs = [];

                        if (controlMeasures) {
                          controlMeasures.map(function (controlMeasure) {
                            if (controlMeasure.isSelected) {
                              controlMeasureIDs.push(controlMeasure.controlMeasureId);
                            }
                          });
                        }

                        if (controlMeasureIDs.length > 0) {
                          answerObject.controlMeasureIDs = controlMeasureIDs.join(',');
                        }

                        if (hazard.memberOfTheWorkForce) {
                          answerObject.userIDs = Object.keys(hazard.addedUsers).join(',');
                          answerObject.userGroupIDs = Object.keys(hazard.addedGroups).join(',');
                        }

                        if (hazard.memberOfThePublic) {
                          answerObject.membersOfThePublicDescription = hazard.memberOfThePublicDescription;
                        }

                        riskAssessmentAnswers.push(answerObject);
                        hazardFormattedObject.answerData = answerObject;
                        hazardsAnswers.push(hazardFormattedObject);
                      });
                      answerFormattedObject.answerData = hazardsAnswers;
                      formattedAnswers.push(answerFormattedObject);
                    }
                  });
                  sectionFormattedObject.taskAnswerData = formattedAnswers;
                } else {
                  var questions = section.questions;
                  questions.map(function (question, questionIndex) {
                    if (_this45.utilService.shouldShowQuestion(question)) {
                      var answerFormattedObject = JSON.parse(JSON.stringify(question));

                      var controlName = _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].FCUniqueName(section, question);

                      var control = formGroup.controls[controlName];
                      var isValueFilled = false;

                      if (control) {
                        var questionLabel = _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].findObj(question.questionTranslations, 'questionTranslationLanguageId', selectedLanguageID).questionTranslationTitle;

                        if (section.isHAVSection) {
                          var _answerObject2;

                          var answerObject = (_answerObject2 = {
                            hAVQuestionAnswerId: 0,
                            questionID: question.questionId,
                            questionTitle: questionLabel,
                            formVersionID: formVersionId,
                            answerTypeID: question.selectedAnswerTypeId,
                            hAVSequence: question.questionDisplayOrder
                          }, _defineProperty(_answerObject2, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed, question[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed]), _defineProperty(_answerObject2, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify, question[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify]), _answerObject2);

                          switch (question.questionDisplayOrder) {
                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].HavFormFieldOrder.DateOfUsage:
                              if (control.value) {
                                answerObject.dateOfUsage = moment_moment__WEBPACK_IMPORTED_MODULE_8__(control.value).format(_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].dateTimeFormat);
                                isValueFilled = true;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].HavFormFieldOrder.Manufacturer:
                              if (control.value) {
                                answerObject.hAVManufacturerID = control.value;
                                isValueFilled = true;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].HavFormFieldOrder.Type:
                              if (control.value) {
                                answerObject.hAVTypeID = control.value;
                                isValueFilled = true;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].HavFormFieldOrder.Model:
                              if (control.value) {
                                answerObject.hAVModelID = control.value;
                                isValueFilled = true;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].HavFormFieldOrder.PlannedTimeOfUsage:
                              if (control.value) {
                                isValueFilled = true;
                                answerObject.plannedTimeOfUse = Number(control.value);
                              }

                              break;
                          }

                          if (isValueFilled) {
                            havQuestionAnswers.push(answerObject);
                            answerFormattedObject.havAnswerData = answerObject;
                          }
                        } else if (section.isAccidentReportSection) {
                          var _answerObject4;

                          var _answerObject3 = (_answerObject4 = {
                            accidentReportQuestionAnswerId: 0,
                            questionID: question.questionId,
                            questionTitle: questionLabel,
                            formVersionID: formVersionId,
                            answerTypeID: question.selectedAnswerTypeId,
                            accidentAnswerSequence: question.questionDisplayOrder
                          }, _defineProperty(_answerObject4, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed, question[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed]), _defineProperty(_answerObject4, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify, question[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify]), _answerObject4);

                          switch (question.questionDisplayOrder) {
                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.AccidentDateTime:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject3.accidentDateTime = moment_moment__WEBPACK_IMPORTED_MODULE_8__(control.value).format(_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].dateTimeFormat);
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.AccidentLocation:
                              var placeNotintheList = formGroup.controls.placeNotintheList;
                              var locationName = formGroup.controls.locationName;

                              if (placeNotintheList.value) {
                                isValueFilled = true;
                                _answerObject3.accidentLocationName = locationName.value;
                              } else if (control.value) {
                                isValueFilled = true;

                                var entityIds = _this45.utilService.getRelevantEntityId(control.value);

                                _answerObject3.accidentInventoryID = entityIds.InventoryID;
                                _answerObject3.accidentProjectID = entityIds.ProjectID;
                                _answerObject3.accidentLocationID = entityIds.LocationID;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.ReddorReport:
                              var answerChoiceAttributes = question.answerChoiceAttributes;
                              answerChoiceAttributes.map(function (choice) {
                                var _a;

                                if (choice.answerChoiceAttributeId === control.value) {
                                  var choiceTitle = (_a = _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].findObj(choice.answerChoiceAttributeHeaders, 'answerChoiceAttributeHeaderLanguageId', selectedLanguageID)) === null || _a === void 0 ? void 0 : _a.answerChoiceAttributeHeaderTitle;
                                  isValueFilled = true;
                                  _answerObject3.accidentIsRIDDORReportNeeded = choiceTitle === 'Yes' ? true : false;
                                  return;
                                }
                              });
                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.About:
                              var formGroups = control.value;
                              var multipleChoiceValueIDs = [];
                              question.answerChoiceAttributes.map(function (choice) {
                                var choiceControl = formGroups[_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].SubFCName(controlName, choice.answerChoiceAttributeId)];

                                if (choiceControl) {
                                  multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
                                }
                              });

                              if (multipleChoiceValueIDs.length > 0) {
                                isValueFilled = true;
                                _answerObject3.accidentAboutIDs = multipleChoiceValueIDs.join(',');
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.Type:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject3.accidentTypeID = control.value;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.Classification:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject3.accidentClassificationID = control.value;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.BodyPartEffected:
                              var bodyPartFormGroups = control.value;
                              var bodyPartsIDs = [];

                              _static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].bodyParts.map(function (partGroup) {
                                partGroup.parts.map(function (part) {
                                  var choiceControl = bodyPartFormGroups[_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].SubFCName(controlName, part.id)];

                                  if (choiceControl) {
                                    bodyPartsIDs.push(part.id);
                                  }
                                });
                              });

                              if (bodyPartsIDs.length > 0) {
                                isValueFilled = true;
                                _answerObject3.accidentBodyPartIDs = bodyPartsIDs.join(',');
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.Description:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject3.accidentDescription = control.value;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].AccidentFormFieldOrder.Attachment:
                              if (attachemtUploaded[question.questionId]) {
                                isValueFilled = true;
                                _answerObject3.accidentAttachmentFileName = attachemtUploaded[question.questionId];
                              }

                              break;
                          }

                          if (isValueFilled) {
                            accidentReportQuestionAnswers.push(_answerObject3);
                            answerFormattedObject.arAnswerData = _answerObject3;
                          }
                        } else {
                          var _answerObject6;

                          var _answerObject5 = (_answerObject6 = {
                            questionAnswerId: 0,
                            questionID: question.questionId,
                            questionTitle: questionLabel,
                            formVersionID: formVersionId,
                            answerTypeID: question.selectedAnswerTypeId,
                            multipleChoiceAnswers: []
                          }, _defineProperty(_answerObject6, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed, question[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.MarkAsFailed]), _defineProperty(_answerObject6, _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify, question[_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].QuestionLogic.ActionTypeForForm.Notify]), _answerObject6);

                          switch (question.selectedAnswerTypeId) {
                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.ClassicDropdown:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.singleChoiceValueID = control.value[question.listValueKey];
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.SingleLineText:
                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.MultiLineText:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.textValue = control.value;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.SingleChoiceSet:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.singleChoiceValueID = control.value;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.MultipleChoiceSet:
                              var _formGroups = control.value;
                              var _multipleChoiceValueIDs = [];
                              question.answerChoiceAttributes.map(function (choice) {
                                var choiceControl = _formGroups[_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].SubFCName(controlName, choice.answerChoiceAttributeId)];

                                if (choiceControl) {
                                  _multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
                                }
                              });

                              if (_multipleChoiceValueIDs.length > 0) {
                                isValueFilled = true;
                                _answerObject5.multipleChoiceValueIDs = _multipleChoiceValueIDs.join(',');
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.ConfirmationBox:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.isConfirmBoxChecked = true;
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.NumberFieldInteger:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.integerValue = Number(control.value);
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.NumberFieldDecimal:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.decimalValue = Number(control.value);
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.DateField:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.dateValue = moment_moment__WEBPACK_IMPORTED_MODULE_8__(control.value).format(_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].dateFormat);
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.TimeField:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.timeValue = moment_moment__WEBPACK_IMPORTED_MODULE_8__(control.value).format(_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].timeFormat);
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.DateTimeField:
                              if (control.value) {
                                isValueFilled = true;
                                _answerObject5.dateTimeValue = moment_moment__WEBPACK_IMPORTED_MODULE_8__(control.value).format(_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].dateTimeFormat);
                              }

                              break;

                            case _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.PhotoVideoUpload:
                              if (attachemtUploaded[question.questionId]) {
                                isValueFilled = true;
                                _answerObject5.imageVideoFileName = attachemtUploaded[question.questionId];
                              }

                              break;
                          } // if additional comment


                          if (question.shouldShowOptionalComment) {
                            var additionalControl = formGroup.controls[_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].FCNameAdditioanlNoteUq(controlName)];

                            if (additionalControl.value) {
                              _answerObject5.questionComment = additionalControl.value;
                            }
                          }

                          if (isValueFilled) {
                            questionAnswers.push(_answerObject5);
                            answerFormattedObject.answerData = _answerObject5;
                          }
                        }
                      }

                      if (isValueFilled) {
                        formattedAnswers.push(answerFormattedObject);
                      }
                    }
                  });
                  sectionFormattedObject.answerData = formattedAnswers;
                }

                if (sectionFormattedObject.answerData && sectionFormattedObject.answerData.length > 0 || sectionFormattedObject.taskAnswerData && sectionFormattedObject.taskAnswerData.length > 0) {
                  formattedSections.push(sectionFormattedObject);
                }
              }
            });
            var submitAnswersObject = {
              formId: formBuilderDetail.formId,
              formVersionId: formVersionId,
              selectedLanguageID: selectedLanguageID,
              formTypeId: formBuilderDetail.formTypeID,
              userId: userId,
              companyId: companyId,
              questionAnswers: questionAnswers,
              hAVQuestionAnswers: havQuestionAnswers,
              accidentReportQuestionAnswers: accidentReportQuestionAnswers,
              riskAssessmentAnswers: riskAssessmentAnswers,
              hAVExposure: havExposure,
              workPermitAnswer: workPermitAnswer,
              formattedSections: formattedSections,
              workPermitDetails: workPermitDetails,
              accidentReport: accidentReport
            };

            if (_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].isLocalHost()) {
              console.log('Submit Answers', JSON.stringify(submitAnswersObject));
              return;
            }

            _this45.utilService.presentLoadingWithOptions();

            apiService.saveFormAnswers(submitAnswersObject).subscribe(function (response) {
              _this45.utilService.hideLoading();

              if (_this45.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.Activity || _this45.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.CurrentCheckin || _this45.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.CurrentCheckinWorkPermit || _this45.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.FormDM || _this45.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.WorkPermitDM) {
                _this45.workPermitAnswer = workPermitAnswer;

                _this45.startFormSignOffProcess(userId, apiService, response.Result);
              } else if (_this45.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.Induction) {
                if (_this45.checkInPostData) {
                  _this45.checkInPostData.inductionFormContent = response.Result.formAnswerHtmlString;
                  _this45.checkInPostData.answerNotificationList = response.Result.answerNotificationList;
                }

                _this45.inductionNavigationProcess(userId, _this45.inductionContentItemIndex);
              }

              callBack(true, response.Result);
            }, function (error) {
              callBack(false, error.message);

              _this45.utilService.hideLoading();
            });
          };

          this.isTablet = platform.is('tablet');
          this.dedicatedMode = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.IS_DEDICATED_MODE) === 'true';
          var dedicatedModeLocationUse = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.DEDICATED_MODE_LOCATION_USE);

          if (dedicatedModeLocationUse) {
            this.dedicatedModeLocationUse = JSON.parse(dedicatedModeLocationUse);
          }

          var dedicatedModeDeviceDetail = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL);

          if (dedicatedModeDeviceDetail) {
            this.dedicatedModeDeviceDetailData = JSON.parse(dedicatedModeDeviceDetail);
          }

          var dedicatedModeAssignedEntities = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES);

          if (dedicatedModeAssignedEntities) {
            this.dedicatedModeAssignedEntities = JSON.parse(dedicatedModeAssignedEntities);
          }

          var userProfile = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.USER_PROFILE);

          if (userProfile) {
            this.userProfile = JSON.parse(userProfile);
          }

          var checkedInPlaces = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.CHECKED_IN_PLACES);

          if (checkedInPlaces) {
            this.checkedInPlaces = JSON.parse(checkedInPlaces);
          }

          var pushToken = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.PUSH_TOKEN);

          if (pushToken) {
            this.pushToken = pushToken;
          }

          var selectedCheckedInPlace = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.CURRENT_SELECTED_CHECKIN_PLACE);

          if (selectedCheckedInPlace) {
            this.currentSelectedCheckinPlace = JSON.parse(selectedCheckedInPlace);
          }

          var globalDirectories = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.GLOBAL_DIRECTORIES);

          if (globalDirectories) {
            this.globalDirectories = JSON.parse(globalDirectories);
          }
        }

        _createClass(SharedDataService, [{
          key: "setAnnotationImage",
          value: function setAnnotationImage(image) {
            this.annotationImage = image;
          }
        }, {
          key: "getAnnotationImage",
          value: function getAnnotationImage() {
            return this.annotationImage;
          }
        }, {
          key: "dedicatedModeDeviceDeleted",
          value: function dedicatedModeDeviceDeleted() {
            this.dedicatedModeDeviceDetailData = null;
            this.dedicatedModeAssignedEntities = null;
            this.dedicatedMode = false;
            localStorage.removeItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.IS_DEDICATED_MODE);
            localStorage.removeItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.DEDICATED_MODE_DEVICE_DETAIL);
            localStorage.removeItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES);
            this.navCtrl.navigateRoot('/login', {
              replaceUrl: true
            });

            if (!_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].isLocalHost()) {
              this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }

            this.configureForPushNotification();
          }
        }, {
          key: "resetAllSharedVariable",
          value: function resetAllSharedVariable() {
            this.checkedInPlaces = [];
            this.currentSelectedCheckinPlace = null;
            this.userProfile = null;
            this.timeZoneList = null;
            this.companyLanguageList = null;
            this.globalDirectories = null;
            this.locationItemList = null;
            this.checkInDetail = null;
            this.currentActivityOpen = null;
            this.signOffFormDetail = null;
            this.signOffDocumentDetail = null;
            this.dedicatedModeLocationUse = null;
            this.dedicatedModeCapturedSelfieForCheckinProcess = null;
            this.checkinoutDmAs = '';
            this.signOffFor = '';
            this.viewFormFor = null;
            this.inductionContentItemIndex = 0;
            this.checkInForLocation = null;
            this.checkOutForCheckedInDetail = null;
            this.checkInPostData = null;
            this.signOffDetailsPostData = null;
            this.formBuilderDetails = null;
            this.availableWorkPermits = null;
            this.isOpenImageAnnotation = false;
            this.workPermitAnswer = null;
          }
        }, {
          key: "getLoggedInUser",
          value: function getLoggedInUser() {
            var user = JSON.parse(localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.USER_DATA));
            return user;
          }
        }, {
          key: "getLanguageIdForForm",
          value: function getLanguageIdForForm() {
            var _a;

            if (!this.dedicatedMode && this.currentLanguageId) {
              return this.currentLanguageId;
            } else {
              return (_a = this.formBuilderDetails) === null || _a === void 0 ? void 0 : _a.defaultLanguageId;
            }
          }
          /**
           * Process checking for Dedicated mode
           * @param apiService ApiService Refrence
           * @param isGuest is CHeckin Type Guest User
           */

        }, {
          key: "processCheckinDetailsStepInitial",
          value: function processCheckinDetailsStepInitial(apiService, isGuest) {
            var _a, _b, _c, _d;

            if (this.checkinoutDmAs === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CheckInType.AS_GUEST && ((_b = (_a = this.checkInDetail) === null || _a === void 0 ? void 0 : _a.checkInEntityDetail) === null || _b === void 0 ? void 0 : _b.checkInGuestPhoto) || this.checkinoutDmAs === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CheckInType.MY_NAME && ((_d = (_c = this.checkInDetail) === null || _c === void 0 ? void 0 : _c.checkInEntityDetail) === null || _d === void 0 ? void 0 : _d.checkInPersonalPhoto)) {
              if (this.dedicatedModeCapturedSelfieForCheckinProcess) {
                if (this.checkinoutDmAs === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CheckInType.AS_GUEST) {
                  this.checkInPostData.guestPhoto = this.dedicatedModeCapturedSelfieForCheckinProcess;
                } else if (this.checkinoutDmAs === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CheckInType.MY_NAME) {
                  this.checkInPostData.userPhoto = this.dedicatedModeCapturedSelfieForCheckinProcess;
                }

                this.processCheckinDetailsStepInduction(apiService, isGuest);
              } else {
                this.dedicatedModeCapturePhotoFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeCapturePhotoForType.LocationPhoto;
                this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
              }
            } else {
              this.processCheckinDetailsStepInduction(apiService, isGuest);
            }
          }
        }, {
          key: "processCheckinDetailsStepInduction",
          value: function processCheckinDetailsStepInduction(apiService, isGuest) {
            var _a, _b, _c, _d;

            if (((_b = (_a = this.checkInDetail) === null || _a === void 0 ? void 0 : _a.checkInEntityDetail) === null || _b === void 0 ? void 0 : _b.processInduction) && ((_d = (_c = this.checkInDetail) === null || _c === void 0 ? void 0 : _c.checkInInductionItems) === null || _d === void 0 ? void 0 : _d.length) > 0) {
              this.navCtrl.navigateForward(['checkin-induction']);
            } else {
              this.processCheckinDetailsStepSubmit(apiService, isGuest);
            }
          }
        }, {
          key: "processCheckinDetailsStepSubmit",
          value: function processCheckinDetailsStepSubmit(apiService, isGuest) {
            if (isGuest) {
              this.submitInductionCheckInDataGuest(apiService);
            } else {
              this.submitInductionCheckInData(apiService);
            }
          }
        }, {
          key: "uploadVideo",
          value: function uploadVideo(selectedVideo, mimeType, callBack, progress) {
            var accessID = this.deviceUID;
            var token = localStorage.getItem(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].LocalStorageKeys.API_TOKEN);
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/' + _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiMethods.FormPhotoOrVideoUpload;
            var filename = selectedVideo.substr(selectedVideo.lastIndexOf('/') + 1);
            var options = {
              fileName: filename,
              fileKey: 'file',
              mimeType: mimeType,
              headers: {
                accessID: accessID,
                token: token
              }
            };
            this.videoFileUpload = this.fileTransfer.create();
            this.videoFileUpload.upload(selectedVideo, url, options).then(function (data) {
              _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].fireCallBack(progress, 0);

              return JSON.parse(data.response);
            }).then(function (data) {
              _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].fireCallBack(progress, 100);

              _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].fireCallBack(callBack, {
                status: true,
                result: data
              });
            })["catch"](function (err) {
              _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].fireCallBack(progress, 0);

              _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].fireCallBack(callBack, {
                status: false,
                result: err
              });
            });
            this.videoFileUpload.onProgress(function (data) {
              var uploadPercent = Math.round(data.loaded / data.total * 100);

              _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].fireCallBack(progress, uploadPercent);
            });
          }
        }, {
          key: "saveFormAnswers",
          value: function saveFormAnswers(apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack) {
            var havExposure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var workPermitAnswer = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var _this49 = this;

              var sections, requiredFieldsCount, requiredFieldsValidCount, filledFieldsCount, filledFieldsValidCount, attachmentCount, attachmentUploadedCount, attachemtUploaded, loading, errorMessage, _errorMessage, missingFieldCount, _errorMessage2, _errorMessage3;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].isWebApp) {
                        sections = formBuilderDetail.sections;
                        requiredFieldsCount = 0;
                        requiredFieldsValidCount = 0;
                        filledFieldsCount = 0;
                        filledFieldsValidCount = 0;

                        if (sections) {
                          sections.map(function (section, sectionIndex) {
                            if (_this49.utilService.shouldShowSection(section)) {
                              if (section.isRiskAssessmentSection) {
                                var tasks = section.tasks;
                                tasks.map(function (task) {
                                  if (task.isRequired) {
                                    requiredFieldsCount++;
                                    var hazards = task.hazards;
                                    var isValid = true;
                                    hazards.map(function (hazard) {
                                      if (!hazard.riskRating || !hazard.residualRiskRating) {
                                        isValid = false;
                                      }

                                      if (hazard.memberOfTheWorkForce) {
                                        if (Object.keys(hazard.addedUsers).length === 0 && Object.keys(hazard.addedGroups).length === 0) {
                                          isValid = false;
                                        }
                                      }

                                      if (hazard.memberOfThePublic) {
                                        if (!hazard.memberOfThePublicDescription) {
                                          isValid = false;
                                        }
                                      }
                                    });

                                    if (isValid) {
                                      requiredFieldsValidCount++;
                                    }
                                  }
                                });
                              } else {
                                var questions = section.questions;
                                questions.map(function (question, questionIndex) {
                                  if (_this49.utilService.shouldShowQuestion(question)) {
                                    var controlName = _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].FCUniqueName(section, question);

                                    var control = formGroup.controls[controlName];

                                    if (question.questionIsRequired) {
                                      requiredFieldsCount++;
                                    }

                                    if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.MultipleChoiceSet) {
                                      var formGroups = control.value;
                                      var multipleChoiceValueIDs = [];
                                      question.answerChoiceAttributes.map(function (choice) {
                                        var choiceControl = formGroups[_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].SubFCName(controlName, choice.answerChoiceAttributeId)];

                                        if (choiceControl) {
                                          multipleChoiceValueIDs.push(choice.answerChoiceAttributeId);
                                        }
                                      });

                                      if (multipleChoiceValueIDs.length > 0) {
                                        filledFieldsValidCount++;
                                        filledFieldsValidCount++;

                                        if (question.questionIsRequired) {
                                          requiredFieldsValidCount++;
                                        }
                                      }
                                    } else {
                                      if (control.value) {
                                        filledFieldsCount++;

                                        if (control.valid) {
                                          filledFieldsValidCount++;

                                          if (question.questionIsRequired) {
                                            requiredFieldsValidCount++;
                                          }
                                        }
                                      }
                                    }
                                  }
                                });
                              }
                            }
                          });
                        }

                        if (formGroup.valid && requiredFieldsCount === requiredFieldsValidCount && filledFieldsCount > 0) {
                          attachmentCount = 0;
                          attachmentUploadedCount = 0;
                          attachemtUploaded = {};
                          sections.map(function (section, sectionIndex) {
                            if (_this49.utilService.shouldShowSection(section)) {
                              var questions = section.questions;
                              questions.map(function (question, questionIndex) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this49, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                                  var _this50 = this;

                                  var controlName, control, fileName, mimeType, isVideo;
                                  return regeneratorRuntime.wrap(function _callee30$(_context30) {
                                    while (1) {
                                      switch (_context30.prev = _context30.next) {
                                        case 0:
                                          if (this.utilService.shouldShowQuestion(question)) {
                                            controlName = _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].FCUniqueName(section, question);
                                            control = formGroup.controls[controlName];

                                            if (question.selectedAnswerTypeId === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CustomAnswerType.PhotoVideoUpload) {
                                              if (control && control.value) {
                                                attachmentCount++;
                                                fileName = 'photo' + this.utilService.getCurrentTimeStamp() + '.jpeg';
                                                mimeType = 'image/jpeg';
                                                isVideo = false;

                                                if (_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].videoFormats.indexOf(control.value.split('.').pop().toLowerCase()) !== -1) {
                                                  isVideo = true;
                                                  fileName = control.value.substr(control.value.lastIndexOf('/') + 1);
                                                  mimeType = _static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].fileMimeTypes[control.value.split('.').pop().toLowerCase()];
                                                }

                                                this.utilService.dataUriToFile(control.value, fileName, mimeType).then(function (file) {
                                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this50, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                                                    var _this51 = this;

                                                    return regeneratorRuntime.wrap(function _callee29$(_context29) {
                                                      while (1) {
                                                        switch (_context29.prev = _context29.next) {
                                                          case 0:
                                                            if (!loading) {
                                                              this.utilService.presentLoadingWithOptions();
                                                              loading = true;
                                                            }

                                                            if (isVideo) {
                                                              this.uploadVideo(file, mimeType, function (response) {
                                                                console.log('Uploaded ' + ' ' + fileName + '' + response);

                                                                if (response.status) {
                                                                  attachemtUploaded[question.questionId] = response.result.Result;
                                                                }

                                                                attachmentUploadedCount++;

                                                                if (attachmentCount === attachmentUploadedCount) {
                                                                  loading = false;

                                                                  _this51.utilService.hideLoading();

                                                                  _this51.submitFormAnswers(apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack, havExposure, workPermitAnswer, attachemtUploaded);
                                                                }
                                                              }, function (progress) {
                                                                console.log('Progress ' + ' ' + fileName + '' + progress);
                                                              });
                                                            } else {
                                                              apiService.formPhotoOrVideoUpload(file, fileName).subscribe(function (response) {
                                                                attachemtUploaded[question.questionId] = response.Result;
                                                                attachmentUploadedCount++;

                                                                if (attachmentCount === attachmentUploadedCount) {
                                                                  loading = false;

                                                                  _this51.utilService.hideLoading();

                                                                  _this51.submitFormAnswers(apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack, havExposure, workPermitAnswer, attachemtUploaded);
                                                                }
                                                              }, function (error) {
                                                                attachmentUploadedCount++;

                                                                if (attachmentCount === attachmentUploadedCount) {
                                                                  loading = false;

                                                                  _this51.utilService.hideLoading();

                                                                  _this51.submitFormAnswers(apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack, havExposure, workPermitAnswer, attachemtUploaded);
                                                                }
                                                              });
                                                            }

                                                          case 2:
                                                          case "end":
                                                            return _context29.stop();
                                                        }
                                                      }
                                                    }, _callee29, this);
                                                  }));
                                                })["catch"](function () {
                                                  attachmentUploadedCount++;

                                                  if (attachmentCount === attachmentUploadedCount) {
                                                    loading = false;

                                                    _this50.utilService.hideLoading();

                                                    _this50.submitFormAnswers(apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack, havExposure, workPermitAnswer, attachemtUploaded);
                                                  }
                                                });
                                              }
                                            }
                                          }

                                        case 1:
                                        case "end":
                                          return _context30.stop();
                                      }
                                    }
                                  }, _callee30, this);
                                }));
                              });
                            }
                          });

                          if (attachmentCount === 0) {
                            this.submitFormAnswers(apiService, formGroup, formBuilderDetail, personalModeLoggedUser, callBack, havExposure, workPermitAnswer);
                          }
                        } else if (requiredFieldsCount === 0 && filledFieldsCount === 0) {
                          errorMessage = 'At least one answer to be filled in.';
                          callBack(false, errorMessage);
                        } else if (requiredFieldsValidCount === 0) {
                          _errorMessage = 'All fields are required to be filled in.';
                          callBack(false, _errorMessage);
                        } else {
                          missingFieldCount = requiredFieldsCount - requiredFieldsValidCount;

                          if (missingFieldCount === 0 && filledFieldsCount !== filledFieldsValidCount) {
                            _errorMessage2 = 'Incorrect data found, please check your answers.';
                            callBack(false, _errorMessage2);
                          } else {
                            _errorMessage3 = missingFieldCount + ' required fields are needed to be filled in.';
                            callBack(false, _errorMessage3);
                          }
                        }
                      }

                    case 1:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "startFormSignOffProcess",
          value: function startFormSignOffProcess(userId, apiService, saveAnswerResult) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

            var signOffFormDetail = this.signOffFormDetail;

            if (this.dedicatedMode) {
              this.signOffDetailsPostData = {
                userId: userId,
                formVersionID: (_a = signOffFormDetail === null || signOffFormDetail === void 0 ? void 0 : signOffFormDetail.formData) === null || _a === void 0 ? void 0 : _a.formVersionID,
                latitude: (_c = (_b = this.myCurrentGeoLocation) === null || _b === void 0 ? void 0 : _b.coords) === null || _c === void 0 ? void 0 : _c.latitude,
                longitude: (_e = (_d = this.myCurrentGeoLocation) === null || _d === void 0 ? void 0 : _d.coords) === null || _e === void 0 ? void 0 : _e.longitude,
                locationID: (_f = this.dedicatedModeLocationUse) === null || _f === void 0 ? void 0 : _f.locationID,
                projectID: (_g = this.dedicatedModeLocationUse) === null || _g === void 0 ? void 0 : _g.projectID,
                inventoryItemID: (_h = this.dedicatedModeLocationUse) === null || _h === void 0 ? void 0 : _h.inventoryItemID,
                formContent: saveAnswerResult.formAnswerHtmlString,
                answerNotificationList: saveAnswerResult.answerNotificationList
              };
            } else {
              this.signOffDetailsPostData = {
                userId: userId,
                formVersionID: (_j = signOffFormDetail === null || signOffFormDetail === void 0 ? void 0 : signOffFormDetail.formData) === null || _j === void 0 ? void 0 : _j.formVersionID,
                latitude: (_l = (_k = this.myCurrentGeoLocation) === null || _k === void 0 ? void 0 : _k.coords) === null || _l === void 0 ? void 0 : _l.latitude,
                longitude: (_o = (_m = this.myCurrentGeoLocation) === null || _m === void 0 ? void 0 : _m.coords) === null || _o === void 0 ? void 0 : _o.longitude,
                locationID: (_p = this.currentSelectedCheckinPlace) === null || _p === void 0 ? void 0 : _p.locationID,
                projectID: (_q = this.currentSelectedCheckinPlace) === null || _q === void 0 ? void 0 : _q.projectID,
                inventoryItemID: (_r = this.currentSelectedCheckinPlace) === null || _r === void 0 ? void 0 : _r.inventoryItemID,
                userCheckInDetailID: (_s = this.currentSelectedCheckinPlace) === null || _s === void 0 ? void 0 : _s.userCheckInDetailID,
                formContent: saveAnswerResult.formAnswerHtmlString,
                answerNotificationList: saveAnswerResult.answerNotificationList
              };
            }

            if (this.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.Activity) {
              this.signOffDetailsPostData.activityIndividualID = (_t = this.currentActivityOpen) === null || _t === void 0 ? void 0 : _t.activityIndividualID;

              if (!this.currentSelectedCheckinPlace && signOffFormDetail.entityList.length > 0) {
                var locationItem = signOffFormDetail.entityList[0];
                var entityIds = this.utilService.getRelevantEntityId(locationItem.locationID);
                this.signOffDetailsPostData.locationID = entityIds.LocationID;
                this.signOffDetailsPostData.projectID = entityIds.ProjectID;
                this.signOffDetailsPostData.inventoryItemID = entityIds.InventoryID;
              }

              this.signOffFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.FORM_ACTIVITY;
            } else if (this.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.CurrentCheckin) {
              this.signOffFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.FORM_CURRENT_CHECKIN;
            } else if (this.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.CurrentCheckinWorkPermit) {
              this.signOffFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN;
            } else if (this.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.FormDM) {
              this.signOffFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.FORMS_DM;
            } else if (this.viewFormFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.WorkPermitDM) {
              this.signOffFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.WORK_PERMIT_DM;
            }

            if (signOffFormDetail.formData.isDigitalSignOff || signOffFormDetail.formData.isSignatureSignOff) {
              this.navCtrl.navigateForward(['/signoff-digitalink']);
            } else if (signOffFormDetail.formData.isPhotoSignOff) {
              if (this.dedicatedMode) {
                this.dedicatedModeCapturePhotoFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeCapturePhotoForType.Signoff;
                this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
              } else {
                this.navCtrl.navigateForward(['/signoff-photo']);
              }
            } else {
              this.submitPersonalModeSignoffData(apiService);
            }
          }
        }, {
          key: "submitInductionCheckInData",
          value: function submitInductionCheckInData(apiService) {
            var _this52 = this;

            this.utilService.presentLoadingWithOptions();
            var nextScreen = this.dedicatedMode ? '/dashboard-dm' : '/tabs/dashboard';
            apiService.insertCheckInDetails(this.checkInPostData).subscribe(function (response) {
              _this52.utilService.hideLoading();

              if (response.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this52.observablesService.publishSomeData(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ObserverKeys.NEW_CHECKED_IN, response.Result);

                var suucessScreen = _this52.dedicatedMode ? '/checkinout-success-dm' : '/checkin-success';

                _this52.navCtrl.navigateForward([suucessScreen], {
                  queryParams: {
                    message: 'You have now checked-in',
                    nextPage: nextScreen,
                    actionBtnTitle: 'Continue'
                  },
                  replaceUrl: true
                });
              }
            }, function (error) {
              _this52.utilService.hideLoading();

              _this52.processCheckInError(error, nextScreen);
            });
          }
        }, {
          key: "submitInductionCheckInDataGuest",
          value: function submitInductionCheckInDataGuest(apiService) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var _this53 = this;

              var nextScreen;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      nextScreen = this.dedicatedMode ? '/dashboard-dm' : '/tabs/dashboard';
                      apiService.insertCheckInDetailsGuest(this.checkInPostData).subscribe(function (response) {
                        _this53.utilService.hideLoading();

                        if (response.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this53.navCtrl.navigateForward(['/checkinout-success-dm'], {
                            queryParams: {
                              message: 'You have now checked-in',
                              nextPage: nextScreen,
                              actionBtnTitle: 'Continue'
                            },
                            replaceUrl: true
                          });
                        }
                      }, function (error) {
                        _this53.utilService.hideLoading();

                        _this53.processCheckInError(error, nextScreen);
                      });

                    case 3:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "processCheckInError",
          value: function processCheckInError(error, nextScreen) {
            var _a, _b;

            var exception = error.error;
            var failScreen = this.dedicatedMode ? '/checkinout-fail-dm' : '/checkin-fail';

            if (((_b = (_a = exception === null || exception === void 0 ? void 0 : exception.ResponseException) === null || _a === void 0 ? void 0 : _a.ValidationErrors) === null || _b === void 0 ? void 0 : _b.length) > 0) {
              var fieldsInfo = exception.ResponseException.ValidationErrors[0].Field.split('#');
              var fieldName = fieldsInfo[0];
              var message = exception.ResponseException.ValidationErrors[0].Message;

              if (fieldName === 'SimultaneousCheckIn') {
                var locationName = message.match(/\'(.*)\'/).pop();
                this.navCtrl.navigateForward(['/checkinout-alreadycheckin-dm'], {
                  queryParams: {
                    locationName: locationName,
                    locationId: fieldsInfo[1]
                  },
                  replaceUrl: true
                });
              } else if (fieldName === 'Location' && fieldsInfo.length > 1) {
                var _locationName = this.getCurrentCheckedInEntityName();

                this.navCtrl.navigateForward(['/checkinout-alreadycheckin-dm'], {
                  queryParams: {
                    isAlreadyCheckedInSameLocation: 1,
                    locationName: _locationName,
                    locationId: fieldsInfo[1]
                  },
                  replaceUrl: true
                });
              } else if (fieldName === 'Qualification') {
                this.navCtrl.navigateForward([failScreen], {
                  queryParams: {
                    title: 'You cannot check-in',
                    errorTitle: 'NOT QUALIFIED',
                    errorMessage: 'You do not have the required qualifications.',
                    nextPage: nextScreen
                  },
                  replaceUrl: true
                });
              } else {
                this.navCtrl.navigateForward([failScreen], {
                  queryParams: {
                    title: 'You cannot check-in',
                    errorTitle: fieldName,
                    errorMessage: message,
                    nextPage: nextScreen
                  },
                  replaceUrl: true
                });
              }
            } else {
              this.navCtrl.navigateForward([failScreen], {
                queryParams: {
                  title: 'You cannot check-in',
                  errorTitle: 'NOT QUALIFIED',
                  errorMessage: 'You do not have the required qualifications.',
                  nextPage: nextScreen
                },
                replaceUrl: true
              });
            }
          }
          /**
           * This function is use for submit personal mode sign off data
           */

        }, {
          key: "submitPersonalModeSignoffData",
          value: function submitPersonalModeSignoffData(apiService) {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this54 = this;

              var checkInSuccessPage, checkInFailPage, nextPage, isWorkPermitCurrentCheckin, isworkPermitActivity;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      checkInSuccessPage = this.dedicatedMode ? '/checkinout-success-dm' : '/checkin-success';
                      checkInFailPage = this.dedicatedMode ? '/checkinout-fail-dm' : '/checkin-fail';
                      nextPage = this.dedicatedMode ? 'dashboard-dm' : '/tabs/dashboard';
                      isWorkPermitCurrentCheckin = this.signOffFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN || this.signOffFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.WORK_PERMIT_DM;
                      isworkPermitActivity = this.signOffFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.FORM_ACTIVITY && ((_b = (_a = this.signOffFormDetail) === null || _a === void 0 ? void 0 : _a.formData) === null || _b === void 0 ? void 0 : _b.formType) === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].FormTypes.WORK_PERMIT;

                      if (!this.dedicatedMode) {
                        _context33.next = 18;
                        break;
                      }

                      _context33.t0 = this.dedicatedModeProcessType;
                      _context33.next = _context33.t0 === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeProcessTypes.Document ? 10 : _context33.t0 === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeProcessTypes.Form ? 12 : _context33.t0 === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeProcessTypes.WorkPermit ? 14 : 16;
                      break;

                    case 10:
                      nextPage = 'documents-dm';
                      return _context33.abrupt("break", 16);

                    case 12:
                      nextPage = 'forms-dm';
                      return _context33.abrupt("break", 16);

                    case 14:
                      nextPage = 'permits-dm';
                      return _context33.abrupt("break", 16);

                    case 16:
                      _context33.next = 19;
                      break;

                    case 18:
                      if (isWorkPermitCurrentCheckin) {
                        nextPage = '/tabs/current-checkin/checkin-workpermit';
                      } else if (isworkPermitActivity) {
                        nextPage = '/tabs/dashboard';
                      }

                    case 19:
                      apiService.insertPersonalModeSignOffDetails(this.signOffDetailsPostData).subscribe(function (response) {
                        _this54.utilService.hideLoading();

                        if (response.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          if (_this54.signOffFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.FORM_ACTIVITY || _this54.signOffFor === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.DOCUMENT_ACTIVITY) {
                            _this54.observablesService.publishSomeData(_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ObserverKeys.ACTIVITY_COMPLETED, true);
                          } // show work permit issue success/fail for work permit type form filled from current checkin or activity list


                          if (isWorkPermitCurrentCheckin || isworkPermitActivity) {
                            if (_this54.workPermitAnswer.scoreAchieved >= _this54.workPermitAnswer.totalScore) {
                              _this54.navCtrl.navigateForward([checkInSuccessPage], {
                                queryParams: {
                                  title: 'Passed',
                                  message: 'PERMIT ISSUED',
                                  description: 'Your work permit is active',
                                  nextPage: nextPage,
                                  pageTitle: 'Work Permit'
                                },
                                replaceUrl: true
                              });
                            } else {
                              _this54.navCtrl.navigateForward([checkInFailPage], {
                                queryParams: {
                                  title: 'Not Passed',
                                  errorTitle: 'NO PERMIT',
                                  errorMessage: 'You were found not eligible for a work permit.',
                                  nextPage: nextPage,
                                  pageTitle: 'Work Permit'
                                },
                                replaceUrl: true
                              });
                            }
                          } else {
                            _this54.navCtrl.navigateForward([checkInSuccessPage], {
                              queryParams: {
                                message: 'You Signed-Off Successfully',
                                nextPage: nextPage,
                                pageTitle: 'Sign-Off'
                              }
                            });
                          }
                        } else {
                          if (isWorkPermitCurrentCheckin || isworkPermitActivity) {
                            _this54.navCtrl.navigateForward([checkInFailPage], {
                              queryParams: {
                                title: 'Not Passed',
                                errorTitle: 'NOT PERMIT',
                                errorMessage: 'You were found not eligible for a work permit.',
                                nextPage: nextPage,
                                pageTitle: 'Work Permit'
                              },
                              replaceUrl: true
                            });
                          } else {
                            _this54.navCtrl.navigateForward([checkInFailPage], {
                              queryParams: {
                                title: 'You cannot Sign-Off',
                                errorTitle: 'NOT QUALIFIED',
                                errorMessage: response.Message,
                                nextPage: nextPage,
                                pageTitle: 'Sign-Off'
                              },
                              replaceUrl: true
                            });
                          }
                        }
                      }, function (error) {
                        _this54.utilService.hideLoading();

                        _this54.navCtrl.navigateForward([checkInFailPage], {
                          queryParams: {
                            title: 'You cannot Sign-Off',
                            errorTitle: 'NOT QUALIFIED',
                            errorMessage: error.message || error,
                            nextPage: nextPage,
                            pageTitle: 'Sign-Off'
                          },
                          replaceUrl: true
                        });
                      });

                    case 20:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
          /**
           * Navigate to the induction item type screen
           * @param userId for personal mode, it will get on the time of login
           * @param inductionContentItemIndex index of induction item
           */

        }, {
          key: "inductionNavigationProcess",
          value: function inductionNavigationProcess() {
            var _this55 = this;

            var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var inductionContentItemIndex = arguments.length > 1 ? arguments[1] : undefined;

            var _a;

            if (this.checkInDetail) {
              var inductionItems = this.checkInDetail.checkInInductionItems;

              if (inductionItems && inductionContentItemIndex < inductionItems.length - 1) {
                var inductionContentItem = inductionItems[inductionContentItemIndex + 1];

                if (inductionContentItem.contentType === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].InductionContentTypes.FORM) {
                  if (this.dedicatedMode) {
                    this.utilService.presentLoadingWithOptions();
                    this.apiServiceRerence.getDedicatedModeSignOffFormDetail(inductionContentItem.formID).subscribe(function (response) {
                      _this55.utilService.hideLoading();

                      if (response.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                        _this55.viewFormFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.Induction;
                        _this55.signOffFormDetail = response.Result;
                        _this55.inductionContentItemIndex = inductionContentItemIndex + 1;

                        _this55.navCtrl.navigateForward(_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].InductionContentTypeScreenIdentify(inductionContentItem.contentType, _this55.dedicatedMode), {
                          queryParams: {
                            inductionContentItemIndex: _this55.inductionContentItemIndex
                          },
                          replaceUrl: true
                        });
                      }
                    }, function (error) {
                      _this55.utilService.hideLoading();
                    });
                  } else {
                    var entityIds = this.utilService.getRelevantEntityId((_a = this.checkInForLocation) === null || _a === void 0 ? void 0 : _a.locationID);
                    var LocationID = entityIds.LocationID;
                    var ProjectID = entityIds.ProjectID;
                    var InventoryID = entityIds.InventoryID;
                    this.utilService.presentLoadingWithOptions();
                    this.apiServiceRerence.getSignOffFormDetail(userId, inductionContentItem.formID, LocationID, ProjectID, InventoryID).subscribe(function (response) {
                      _this55.utilService.hideLoading();

                      if (response.StatusCode === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ApiResponseCode.RequestSuccessful) {
                        _this55.viewFormFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].ViewFormForType.Induction;
                        _this55.signOffFormDetail = response.Result;
                        _this55.inductionContentItemIndex = inductionContentItemIndex + 1;

                        _this55.navCtrl.navigateForward(_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].InductionContentTypeScreenIdentify(inductionContentItem.contentType, _this55.dedicatedMode), {
                          queryParams: {
                            inductionContentItemIndex: _this55.inductionContentItemIndex
                          },
                          replaceUrl: true
                        });
                      }
                    }, function (error) {
                      _this55.utilService.hideLoading();
                    });
                  }
                } else {
                  this.inductionContentItemIndex = inductionContentItemIndex + 1;
                  this.navCtrl.navigateForward(_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].InductionContentTypeScreenIdentify(inductionContentItem.contentType, this.dedicatedMode), {
                    queryParams: {
                      inductionContentItemIndex: this.inductionContentItemIndex
                    },
                    replaceUrl: true
                  });
                }
              } else if (this.checkInDetail.checkInInduction.isDigitalSignOff || this.checkInDetail.checkInInduction.isSignatureSignOff) {
                this.signOffFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.INDUCTION;
                this.navCtrl.navigateForward(['/signoff-digitalink']);
              } else if (this.checkInDetail.checkInInduction.isPhotoSignOff) {
                this.signOffFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].SignOffType.INDUCTION;

                if (this.dedicatedMode) {
                  if (this.dedicatedModeCapturedSelfieForCheckinProcess) {
                    this.checkInPostData.userSignaturePhoto = this.dedicatedModeCapturedSelfieForCheckinProcess;

                    if (this.checkinoutDmAs === _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].CheckInType.AS_GUEST) {
                      this.submitInductionCheckInDataGuest(this.apiServiceRerence);
                    } else {
                      this.submitInductionCheckInData(this.apiServiceRerence);
                    }
                  } else {
                    this.dedicatedModeCapturePhotoFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeCapturePhotoForType.Signoff;
                    this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
                  }
                } else {
                  this.navCtrl.navigateForward(['/signoff-photo']);
                }
              } else {
                this.submitInductionCheckInData(this.apiServiceRerence);
              }
            }
          }
        }, {
          key: "dedicatedModeDocumentSignOffProcess",
          value: function dedicatedModeDocumentSignOffProcess() {
            var photoName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _a;

            this.signOffDetailsPostData.userId = (_a = this.dedicatedModeUserDetail) === null || _a === void 0 ? void 0 : _a.userId;

            if (this.signOffDocumentDetail.isDigitalSignOff || this.signOffDocumentDetail.isSignatureSignOff) {
              this.navCtrl.navigateForward(['/signoff-digitalink']);
            } else if (this.signOffDocumentDetail.isPhotoSignOff) {
              this.dedicatedModeCapturePhotoFor = _enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"].DedicatedModeCapturePhotoForType.Signoff;
              this.navCtrl.navigateForward(['/checkinout-photoidentity-dm']);
            } else {
              this.submitPersonalModeSignoffData(this.apiServiceRerence);
            }
          }
        }, {
          key: "dedicatedModeFormSignOffProcess",
          value: function dedicatedModeFormSignOffProcess() {
            var photoName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.navCtrl.navigateForward(['/form-cover-dm']);
          }
        }, {
          key: "dedicatedModeWorkPermitSignOffProcess",
          value: function dedicatedModeWorkPermitSignOffProcess() {
            var photoName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.navCtrl.navigateForward(['/form-cover-dm']);
          }
        }]);

        return SharedDataService;
      }();

      SharedDataService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _observables_service__WEBPACK_IMPORTED_MODULE_6__["ObservablesService"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]
        }];
      };

      SharedDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SharedDataService);
      /***/
    },

    /***/
    "mxI+":
    /*!*************************************************!*\
      !*** ./src/app/services/observables.service.ts ***!
      \*************************************************/

    /*! exports provided: ObservablesService */

    /***/
    function mxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObservablesService", function () {
        return ObservablesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ObservablesService = /*#__PURE__*/function () {
        function ObservablesService() {
          _classCallCheck(this, ObservablesService);

          this.mySubjects = {};
        }

        _createClass(ObservablesService, [{
          key: "intialiseFirstTime",
          value: function intialiseFirstTime(key) {
            if (!this.mySubjects[key]) {
              this.mySubjects[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            }

            return this.mySubjects[key];
          }
        }, {
          key: "publishSomeData",
          value: function publishSomeData(key) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.intialiseFirstTime(key).next(data);
          }
        }, {
          key: "getObservable",
          value: function getObservable(key) {
            return this.intialiseFirstTime(key);
          }
        }, {
          key: "removeObservable",
          value: function removeObservable(key) {
            this.intialiseFirstTime(key).unsubscribe();
            this.mySubjects[key] = null;
          }
        }]);

        return ObservablesService;
      }();

      ObservablesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ObservablesService);
      /***/
    },

    /***/
    "nt42":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/time-field/time-field.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nt42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item time-item\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <div class=\"time-field\">\n        <ion-datetime displayFormat=\"hh : mm\" pickerFormat=\"hh:mm\"\n                      placeholder=\"HH : mm\"\n                      [ngClass]=\"{'error': isError}\"\n                      [formControlName]=\"inputName\"\n                      display-timezone=\"utc\"></ion-datetime>\n\n        <ion-buttons class=\"am-pm-btns\">\n            <ion-button\n                    [ngClass]=\"{'active':(timePeriod==='am') || !timePeriod}\"\n                    (click)=\"timePeriodChange('am')\">\n                AM\n            </ion-button>\n            <ion-button\n                    [ngClass]=\"{'active':(timePeriod==='pm')}\"\n                    (click)=\"timePeriodChange('pm')\">\n                PM\n            </ion-button>\n        </ion-buttons>\n    </div>\n</ion-item>\n";
      /***/
    },

    /***/
    "oSVs":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/home-exit-dm/home-exit-dm.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oSVs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"description\">{{description}}</p>\n\n  <ion-button class=\"action-btn\" (click)=\"onDismiss(true)\">\n    {{okBtnText}}\n  </ion-button>\n\n  <br />\n\n  <ion-button class=\"cancel-btn\" fill=\"outline\" (click)=\"onDismiss(false)\">\n    {{cancelBtnText}}\n  </ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "obcd":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/singleline-text-field/singleline-text-field.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function obcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-input {\n  padding: 0 10px !important;\n  --color: #171538;\n  --placeholder-color: #A1A8CA;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  min-height: 42px;\n  width: 100%;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpbmdsZWxpbmUtdGV4dC1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzaW5nbGVsaW5lLXRleHQtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgLS1jb2xvcjogIzE3MTUzODtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0ExQThDQTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgbWluLWhlaWdodDogNDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQUNFRTE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "ofQr":
    /*!***************************************************************!*\
      !*** ./src/app/components/auth-input/auth-input.component.ts ***!
      \***************************************************************/

    /*! exports provided: AuthInputComponent */

    /***/
    function ofQr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInputComponent", function () {
        return AuthInputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-input.component.html */
      "37uJ");
      /* harmony import */


      var _auth_input_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-input.component.scss */
      "DbGL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthInputComponent = /*#__PURE__*/function () {
        function AuthInputComponent() {
          _classCallCheck(this, AuthInputComponent);

          this.type = 'text';
        }

        _createClass(AuthInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthInputComponent;
      }();

      AuthInputComponent.ctorParameters = function () {
        return [];
      };

      AuthInputComponent.propDecorators = {
        controlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autocapitalize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inputmode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AuthInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-input',
        template: _raw_loader_auth_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_input_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthInputComponent);
      /***/
    },

    /***/
    "oy0+":
    /*!***********************************************************************!*\
      !*** ./src/app/components/empty-message/empty-message.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function oy0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  padding: 12%;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.content ion-icon {\n  width: 68.44px;\n  height: 48px;\n}\n.content ion-label {\n  margin-top: 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtcHR5LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImVtcHR5LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIHBhZGRpbmc6IDEyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIHdpZHRoOiA2OC40NHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICMxNzE1Mzg7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "pEYU":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/warning-component/warning-component.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function pEYU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  width: 100%;\n  min-height: 45px;\n  background-color: #FFEDBD;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 8px;\n}\n.container ion-icon {\n  width: 16px;\n  height: 16px;\n  margin-left: 16px;\n}\n.container ion-label {\n  flex: 1;\n  margin-left: 14.33px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #836A27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dhcm5pbmctY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoid2FybmluZy1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkVEQkQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcblxuICBpb24taWNvbiB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAxNC4zM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzgzNkEyNztcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "puuh":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/back-continue-toolbar/back-continue-toolbar.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function puuh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: tranparent;\n  --border-color: transparent;\n  --border-width: 0;\n  --border-style: solid;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  padding: 30px;\n}\nion-toolbar ion-title {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #171538;\n}\nion-toolbar .arrow-button {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --border-radius: 2px;\n}\nion-toolbar .arrow-button ion-icon {\n  width: 16px;\n  height: 16px;\n}\nion-toolbar .arrow-button.left {\n  --color: #2A6FDB;\n  --background: #ffffff;\n}\nion-toolbar .arrow-button.right {\n  --color: #FFFFFF;\n  --background: #2A6FDB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhY2stY29udGludWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUROO0FBSUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBRk4iLCJmaWxlIjoiYmFjay1jb250aW51ZS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5wYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZzogMzBweDtcblxuICBpb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzE3MTUzODtcbiAgfVxuXG4gIC5hcnJvdy1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJi5sZWZ0IHtcbiAgICAgIC0tY29sb3I6ICMyQTZGREI7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgJi5yaWdodCB7XG4gICAgICAtLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMkE2RkRCO1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "qWu6":
    /*!*****************************************************!*\
      !*** ./src/app/directives/phone-input.directive.ts ***!
      \*****************************************************/

    /*! exports provided: PhoneInputDirective */

    /***/
    function qWu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhoneInputDirective", function () {
        return PhoneInputDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhoneInputDirective = /*#__PURE__*/function () {
        function PhoneInputDirective() {
          _classCallCheck(this, PhoneInputDirective);
        }

        _createClass(PhoneInputDirective, [{
          key: "onInput",
          value: function onInput(event) {
            var pattern = /[0-9]/; // without ., for integer only

            var inputChar = String.fromCharCode(event.which ? event.which : event.keyCode);

            if (!pattern.test(inputChar)) {
              // invalid character, prevent input
              event.preventDefault();
              return false;
            }

            return true;
          }
        }]);

        return PhoneInputDirective;
      }();

      PhoneInputDirective.ctorParameters = function () {
        return [];
      };

      PhoneInputDirective.propDecorators = {
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['keypress', ['$event']]
        }]
      };
      PhoneInputDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPhoneInput]'
      })], PhoneInputDirective);
      /***/
    },

    /***/
    "qje7":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/number-integer-field/number-integer-field.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: NumberIntegerFieldComponent */

    /***/
    function qje7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberIntegerFieldComponent", function () {
        return NumberIntegerFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_number_integer_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./number-integer-field.component.html */
      "Qkoa");
      /* harmony import */


      var _number_integer_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./number-integer-field.component.scss */
      "kEVF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NumberIntegerFieldComponent = /*#__PURE__*/function () {
        function NumberIntegerFieldComponent() {
          _classCallCheck(this, NumberIntegerFieldComponent);
        }

        _createClass(NumberIntegerFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NumberIntegerFieldComponent;
      }();

      NumberIntegerFieldComponent.ctorParameters = function () {
        return [];
      };

      NumberIntegerFieldComponent.propDecorators = {
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      NumberIntegerFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-number-integer-field',
        template: _raw_loader_number_integer_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_number_integer_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NumberIntegerFieldComponent);
      /***/
    },

    /***/
    "qy5q":
    /*!*************************************************************************!*\
      !*** ./src/app/components/modal-header-dm/modal-header-dm.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ModalHeaderDmComponent */

    /***/
    function qy5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalHeaderDmComponent", function () {
        return ModalHeaderDmComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_header_dm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-header-dm.component.html */
      "4aYp");
      /* harmony import */


      var _modal_header_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-header-dm.component.scss */
      "N8yO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ModalHeaderDmComponent = /*#__PURE__*/function () {
        function ModalHeaderDmComponent(navController) {
          _classCallCheck(this, ModalHeaderDmComponent);

          this.navController = navController;
          this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(ModalHeaderDmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            if (this.closeModal) {
              this.closeModal.emit();
            } else {
              this.navController.back();
            }
          }
        }]);

        return ModalHeaderDmComponent;
      }();

      ModalHeaderDmComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      ModalHeaderDmComponent.propDecorators = {
        modalTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        modalSubTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showEvacuation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closeModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ModalHeaderDmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-header-dm',
        template: _raw_loader_modal_header_dm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_header_dm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalHeaderDmComponent);
      /***/
    },

    /***/
    "rjB9":
    /*!*************************************************************!*\
      !*** ./src/app/components/exposure/exposure.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function rjB9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".exposure {\n  background-color: #F6F8FA;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px;\n  margin: 16px 8px;\n}\n.exposure ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  color: #171538;\n}\n.exposure .points {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8px;\n  background: #FFBA00;\n  border-radius: 3px;\n  min-width: 125px;\n  height: 38px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #000000;\n  padding: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V4cG9zdXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImV4cG9zdXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cG9zdXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjhGQTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTZweCA4cHg7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMTcxNTM4O1xuICB9XG5cbiAgLnBvaW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZCQTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "rz59":
    /*!*************************************************!*\
      !*** ./src/app/services/filehandler.service.ts ***!
      \*************************************************/

    /*! exports provided: FilehandlerService */

    /***/
    function rz59(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilehandlerService", function () {
        return FilehandlerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./util.service */
      "2Rin");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _static_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./static-data.service */
      "hYb0");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var FilehandlerService = /*#__PURE__*/function () {
        function FilehandlerService(fileOpener, platform, transfer, file, utilService, http) {
          _classCallCheck(this, FilehandlerService);

          this.fileOpener = fileOpener;
          this.platform = platform;
          this.transfer = transfer;
          this.file = file;
          this.utilService = utilService;
          this.http = http;
        }

        _createClass(FilehandlerService, [{
          key: "openFile",
          value: function openFile() {
            var fileUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://www.africau.edu/images/default/sample.pdf';
            var openInDefaultApp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              var _this56 = this;

              var fileName, extension;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions('File downloading...');
                      fileName = fileUrl.replace(/^.*[\\\/]/, '');
                      extension = fileName.split('.').pop();
                      this.http.downloadFile(fileUrl, {}, {}, this.file.dataDirectory + fileName).then(function (response) {
                        _this56.utilService.hideLoading();

                        var url = response.nativeURL;

                        var mimeType = _static_data_service__WEBPACK_IMPORTED_MODULE_7__["StaticDataService"].fileMimeTypes[extension.toLowerCase()];

                        if (extension.toLowerCase() === 'pdf' || openInDefaultApp) {
                          _this56.fileOpener.open(url, mimeType).then(function () {
                            return console.log('File is opened');
                          })["catch"](function (e) {
                            return console.log('Error opening file', e);
                          });
                        } else if (_this56.platform.is('ios')) {
                          _this56.fileOpener.open(url, mimeType).then(function () {
                            return console.log('File is opened');
                          })["catch"](function (e) {
                            return console.log('Error opening file', e);
                          });
                        } else {
                          _this56.fileOpener.showOpenWithDialog(url, mimeType).then(function () {
                            return console.log('File is opened');
                          })["catch"](function (e) {
                            return console.log('Error opening file', e);
                          });
                        }
                      })["catch"](function (error) {
                        _this56.utilService.hideLoading();

                        console.log('Error download file', error);
                      }); // const pdfUrl = 'http://www.africau.edu/images/default/sample.pdf';
                      // this.fileTransfer = this.transfer.create();
                      // this.fileTransfer
                      //     .download(encodeURI(demoFile), this.file.dataDirectory + 'form.pdf')
                      //     .then(entry => {
                      //         debugger;
                      //         this.utilService.hideLoading();
                      //         console.log('download complete: ' + entry.toURL());
                      //         const url = entry.toURL();
                      //         this.fileOpener
                      //             .showOpenWithDialog(url, 'application/pdf')
                      //             .then(() => console.log('File is opened'))
                      //             .catch(e => console.log('Error opening file', e));
                      //     }).catch((error) => {
                      //     debugger;
                      //     this.utilService.hideLoading();
                      //     console.log('Error download file', error);
                      // });

                    case 4:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }]);

        return FilehandlerService;
      }();

      FilehandlerService.ctorParameters = function () {
        return [{
          type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__["FileOpener"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
        }];
      };

      FilehandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FilehandlerService);
      /***/
    },

    /***/
    "s/8A":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multiple-choice-field/multiple-choice-field.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s8A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container [formGroup]=\"form\">\n\t<ng-container [formGroupName]=\"inputName\">\n\t\t<ion-item *ngFor=\"let item of list\">\n\t\t\t<ion-label class=\"ion-text-wrap\" [ngStyle]=\"{ color: UtilService.getColorForAnswerChoice(item.answerChoiceAttributeColor) }\">\n\t\t\t\t{{ UtilService.findObj(item.answerChoiceAttributeHeaders, 'answerChoiceAttributeHeaderLanguageId', sharedDataService.getLanguageIdForForm()).answerChoiceAttributeHeaderTitle }}\n\t\t\t</ion-label>\n\n\t\t\t<ion-checkbox mode=\"md\" slot=\"start\" [formControlName]=\"UtilService.SubFCName(inputName, item.answerChoiceAttributeId)\" [value]=\"item.answerChoiceAttributeId\"></ion-checkbox>\n\t\t</ion-item>\n\t</ng-container>\n</ng-container>\n";
      /***/
    },

    /***/
    "smf7":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/topnavigations-btns-dm/topnavigations-btns-dm.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function smf7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #F6F8FA;\n  --border-color: transparent;\n  --border-width: 0;\n  padding-top: 0 !important;\n}\nion-toolbar .toolbar-container {\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: var(--min-height);\n  contain: content;\n  overflow-x: auto !important;\n  z-index: 10;\n  box-sizing: border-box;\n}\nion-toolbar ion-buttons {\n  padding: 8px 12px;\n}\nion-toolbar ion-buttons ion-button {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n  --color: #575568;\n  padding: 0 16px;\n}\nion-toolbar ion-buttons ion-button ion-icon {\n  color: #575568;\n}\nion-toolbar ion-buttons ion-button ion-img {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n}\nion-toolbar ion-buttons ion-button.active {\n  --color: #2A6FDB;\n}\nion-toolbar ion-buttons ion-button.active ion-icon {\n  color: #2A6FDB;\n}\nion-toolbar ion-buttons .action-btn {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  --color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvcG5hdmlnYXRpb25zLWJ0bnMtZG0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUVNO0VBQ0UsY0FBQTtBQUFSO0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRFI7QUFJTTtFQUNFLGdCQUFBO0FBRlI7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQU9JO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMTiIsImZpbGUiOiJ0b3BuYXZpZ2F0aW9ucy1idG5zLWRtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGNkY4RkE7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5cbiAgLnRvb2xiYXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy10b3ApO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWJvdHRvbSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KTtcbiAgICBjb250YWluOiBjb250ZW50O1xuICAgIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLS1jb2xvcjogIzU3NTU2ODtcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzU3NTU2ODtcbiAgICAgIH1cblxuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIC0tY29sb3I6ICMyQTZGREI7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiAjMkE2RkRCO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC0tY29sb3I6ICNGRkZGRkY7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "tLjQ":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/single-choice-field/single-choice-field.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function tLjQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** App Primary Color**/\n  --ion-color-app-primary: #8A25B1;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n}\n.content-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.content-container .fill-vertical-space {\n  flex: 1;\n}\nion-footer {\n  background-color: #FFFFFF;\n}\nion-label {\n  white-space: normal !important;\n}\n.text-tiny {\n  font-size: 0.7em;\n}\n.text-small {\n  font-size: 0.85em;\n}\n.text-big {\n  font-size: 1.4em;\n}\n.text-huge {\n  font-size: 1.8em;\n}\nion-item {\n  --min-height: 18px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  margin: 0 23px;\n}\nion-item ion-radio {\n  --border-radius: 12px;\n  --color: #A1A8CA;\n  --color-checked: #A1A8CA;\n  --inner-border-radius: 11px;\n  margin-right: 13px;\n}\nion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2luZ2xlLWNob2ljZS1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNaRjtBRGdCQTtFQUNFOzs7SUFBQTtFQXNFQTs7O0lBQUE7RUF3Q0E7OztJQUFBO0FDaEhGO0FENEpBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUMxSkY7QUQ0SkU7RUFDRSxPQUFBO0FDMUpKO0FEK0pBO0VBQ0UseUJBQUE7QUM1SkY7QUQrSkE7RUFDRSw4QkFBQTtBQzVKRjtBRGdLQTtFQUNFLGdCQUFBO0FDN0pGO0FEZ0tBO0VBQ0UsaUJBQUE7QUM3SkY7QURnS0E7RUFDRSxnQkFBQTtBQzdKRjtBRGdLQTtFQUNFLGdCQUFBO0FDN0pGO0FBaEhBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFtSEY7QUFqSEU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBbUhKO0FBaEhFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWtISiIsImZpbGUiOiJzaW5nbGUtY2hvaWNlLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG4kcGFkZGluZ0hvcml6b250YWw6IDIzcHg7XG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzM4ODBmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC8qKiBBcHAgUHJpbWFyeSBDb2xvcioqL1xuICAtLWlvbi1jb2xvci1hcHAtcHJpbWFyeTogIzhBMjVCMTtcblxufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICAqIERhcmsgQ29sb3JzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgYm9keSB7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAgIC8vLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG5cbiAgLypcbiAgICogaU9TIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAuaW9zIGJvZHkge1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAgIC8vXG4gICAgLy8tLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC8vLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG4gICAgLy9cbiAgICAvLy0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzBkMGQwZDtcbiAgICAvL1xuICAgIC8vLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG4gIH1cblxuXG4gIC8qXG4gICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLm1kIGJvZHkge1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuICAgIC8vXG4gICAgLy8tLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC8vLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy9cbiAgICAvLy0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgICAvL1xuICAgIC8vLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAgIC8vXG4gICAgLy8tLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgLy9cbiAgICAvLy0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAvL1xuICAgIC8vLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICB9XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgLmZpbGwtdmVydGljYWwtc3BhY2Uge1xuICAgIGZsZXg6IDFcbiAgfVxufVxuXG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi8vQ2xhc3Nlc3MgZm9yIGluZHVjdGlvbiByaWNoIHRleHQgYW5kIGFncmVlbWVudCB0ZXh0ICwgY2xhc3Nlc3MgYXJlIGR5bmFtaWMgZnJvbSBhcGlcbi50ZXh0LXRpbnkge1xuICBmb250LXNpemU6IC43ZW07XG59XG5cbi50ZXh0LXNtYWxsIHtcbiAgZm9udC1zaXplOiAuODVlbTtcbn1cblxuLnRleHQtYmlnIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLnRleHQtaHVnZSB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG4iLCJAaW1wb3J0IFwiLi9zcmMvdGhlbWUvdmFyaWFibGVzXCI7XG5cbmlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbjogMCAkcGFkZGluZ0hvcml6b250YWw7XG5cbiAgaW9uLXJhZGlvIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLS1jb2xvcjogI0ExQThDQTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNBMUE4Q0E7XG4gICAgLS1pbm5lci1ib3JkZXItcmFkaXVzOiAxMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjMTcxNTM4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "tOsz":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/screen-inner-loading/screen-inner-loading.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tOsz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"loader-container\">\n    <ion-icon src=\"./assets/icon/Loader.svg\"></ion-icon>\n</div>\n";
      /***/
    },

    /***/
    "tqIm":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard-button/dashboard-button.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tqIm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button fill=\"clear\" (click)=\"click.emit()\">\n    <div class=\"inner\">\n        <ion-icon *ngIf=\"icon\" [src]=\"icon\"></ion-icon>\n        <ion-img *ngIf=\"img\" [src]=\"img\"></ion-img>\n        <ion-label>{{title}}</ion-label>\n    </div>\n</ion-button>\n";
      /***/
    },

    /***/
    "v4LO":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/exposure/exposure.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function v4LO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exposure\" [ngClass]=\"containerClassName\">\n    <ion-label>\n        {{label}}\n    </ion-label>\n    <div class=\"points\" [ngStyle]=\"{backgroundColor:getPointColor()}\">\n        {{points}} points\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "vHKI":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/custom-ion-refresh-loader/custom-ion-refresh-loader.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: CustomIonRefreshLoaderComponent */

    /***/
    function vHKI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomIonRefreshLoaderComponent", function () {
        return CustomIonRefreshLoaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_custom_ion_refresh_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./custom-ion-refresh-loader.component.html */
      "kLFY");
      /* harmony import */


      var _custom_ion_refresh_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./custom-ion-refresh-loader.component.scss */
      "1AA/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomIonRefreshLoaderComponent = /*#__PURE__*/function () {
        function CustomIonRefreshLoaderComponent() {
          _classCallCheck(this, CustomIonRefreshLoaderComponent);
        }

        _createClass(CustomIonRefreshLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomIonRefreshLoaderComponent;
      }();

      CustomIonRefreshLoaderComponent.ctorParameters = function () {
        return [];
      };

      CustomIonRefreshLoaderComponent.propDecorators = {
        isRefreshing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CustomIonRefreshLoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-custom-ion-refresh-loader',
        template: _raw_loader_custom_ion_refresh_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_custom_ion_refresh_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CustomIonRefreshLoaderComponent);
      /***/
    },

    /***/
    "vM/W":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/singleline-text-field/singleline-text-field.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vMW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <ion-input [formControlName]=\"inputName\" [ngClass]=\"{'error': isError}\"></ion-input>\n</ion-item>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./helpers/auth.guard */
      "C6wm");

      var routes = [{
        path: "tabs",
        data: {
          authGuardRedirect: "login"
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: "image-annotation",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-image-annotation-image-annotation-module */
          [__webpack_require__.e("default~pages-image-annotation-image-annotation-module~pages-signoff-digitalink-signoff-digitalink-module"), __webpack_require__.e("pages-image-annotation-image-annotation-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/image-annotation/image-annotation.module */
          "mu+s")).then(function (m) {
            return m.ImageAnnotationPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "forgot-password",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-forgot-password-forgot-password-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-login-login-module"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/forgot-password/forgot-password.module */
          "7CEM")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: "linksend-success",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-linksend-success-linksend-success-module */
          "pages-linksend-success-linksend-success-module").then(__webpack_require__.bind(null,
          /*! ./pages/linksend-success/linksend-success.module */
          "GV0p")).then(function (m) {
            return m.LinksendSuccessPageModule;
          });
        }
      }, {
        path: "checkin-fail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-fail-checkin-fail-module */
          "pages-checkin-fail-checkin-fail-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-fail/checkin-fail.module */
          "lMTh")).then(function (m) {
            return m.CheckinFailPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkin-success",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-success-checkin-success-module */
          "pages-checkin-success-checkin-success-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-success/checkin-success.module */
          "ChZ0")).then(function (m) {
            return m.CheckinSuccessPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkin-induction",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-checkin-induction-checkin-induction-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("pages-checkin-induction-checkin-induction-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/checkin-induction/checkin-induction.module */
          "VZQO")).then(function (m) {
            return m.CheckinInductionPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkin-induction-video-file",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-induction-video-file-checkin-induction-video-file-module */
          "pages-checkin-induction-video-file-checkin-induction-video-file-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-induction-video-file/checkin-induction-video-file.module */
          "PDnb")).then(function (m) {
            return m.CheckinInductionVideoFilePageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkin-induction-image-file",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-induction-image-file-checkin-induction-image-file-module */
          "pages-checkin-induction-image-file-checkin-induction-image-file-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-induction-image-file/checkin-induction-image-file.module */
          "mpyD")).then(function (m) {
            return m.CheckinInductionImageFilePageModule;
          });
        }
      }, {
        path: "checkin-induction-rich-text",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-induction-rich-text-checkin-induction-rich-text-module */
          "pages-checkin-induction-rich-text-checkin-induction-rich-text-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-induction-rich-text/checkin-induction-rich-text.module */
          "0SBH")).then(function (m) {
            return m.CheckinInductionRichTextPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkin-induction-form",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-checkin-induction-form-checkin-induction-form-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("pages-checkin-induction-form-checkin-induction-form-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/checkin-induction-form/checkin-induction-form.module */
          "B806")).then(function (m) {
            return m.CheckinInductionFormPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkin-induction-va",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-induction-va-checkin-induction-va-module */
          "pages-checkin-induction-va-checkin-induction-va-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-induction-va/checkin-induction-va.module */
          "zBir")).then(function (m) {
            return m.CheckinInductionVaPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "signoff-digitalink",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-signoff-digitalink-signoff-digitalink-module */
          [__webpack_require__.e("default~pages-image-annotation-image-annotation-module~pages-signoff-digitalink-signoff-digitalink-module"), __webpack_require__.e("pages-signoff-digitalink-signoff-digitalink-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/signoff-digitalink/signoff-digitalink.module */
          "Dm7m")).then(function (m) {
            return m.SignoffDigitalinkPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "dashboard-qrscan",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-dashboard-qrscan-dashboard-qrscan-module */
          "pages-dashboard-qrscan-dashboard-qrscan-module").then(__webpack_require__.bind(null,
          /*! ./pages/dashboard-qrscan/dashboard-qrscan.module */
          "vFn1")).then(function (m) {
            return m.DashboardQrscanPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "activity-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-activity-detail-activity-detail-module */
          "pages-activity-detail-activity-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/activity-detail/activity-detail.module */
          "7iFX")).then(function (m) {
            return m.ActivityDetailPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "form-cover",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-form-cover-form-cover-module */
          "pages-form-cover-form-cover-module").then(__webpack_require__.bind(null,
          /*! ./pages/form-cover/form-cover.module */
          "E/ln")).then(function (m) {
            return m.FormCoverPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "form-custom",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-custom-form-custom-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-custom-form-custom-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-custom/form-custom.module */
          "xev1")).then(function (m) {
            return m.FormCustomPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "form-riskassessment",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-riskassessment-form-riskassessment-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-riskassessment-form-riskassessment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-riskassessment/form-riskassessment.module */
          "9x/1")).then(function (m) {
            return m.FormRiskassessmentPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "my-profile-edit",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-my-profile-edit-my-profile-edit-module */
          "pages-my-profile-edit-my-profile-edit-module").then(__webpack_require__.bind(null,
          /*! ./pages/my-profile-edit/my-profile-edit.module */
          "KvTR")).then(function (m) {
            return m.MyProfileEditPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-confirm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-confirm-checkinout-confirm-module */
          "pages-checkinout-confirm-checkinout-confirm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-confirm/checkinout-confirm.module */
          "ekM1")).then(function (m) {
            return m.CheckoutConfirmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "form-hav",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-hav-form-hav-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-form-hav-form-hav-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-hav/form-hav.module */
          "cUWu")).then(function (m) {
            return m.FormHavPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "form-accident-report",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-accident-report-form-accident-report-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-form-accident-report-form-accident-report-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-accident-report/form-accident-report.module */
          "PtOF")).then(function (m) {
            return m.FormAccidentReportPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "new-account-setup",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-new-account-setup-new-account-setup-module */
          "pages-new-account-setup-new-account-setup-module").then(__webpack_require__.bind(null,
          /*! ./pages/new-account-setup/new-account-setup.module */
          "kDoP")).then(function (m) {
            return m.NewAccountSetupPageModule;
          });
        }
      }, {
        path: "terms-conditions",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-terms-conditions-terms-conditions-module */
          "pages-terms-conditions-terms-conditions-module").then(__webpack_require__.bind(null,
          /*! ./pages/terms-conditions/terms-conditions.module */
          "gbAl")).then(function (m) {
            return m.TermsConditionsPageModule;
          });
        }
      }, {
        path: "my-profile-changepass",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-my-profile-changepass-my-profile-changepass-module */
          "pages-my-profile-changepass-my-profile-changepass-module").then(__webpack_require__.bind(null,
          /*! ./pages/my-profile-changepass/my-profile-changepass.module */
          "SHSn")).then(function (m) {
            return m.MyProfileChangepassPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "signoff-photo",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-signoff-photo-signoff-photo-module */
          "pages-signoff-photo-signoff-photo-module").then(__webpack_require__.bind(null,
          /*! ./pages/signoff-photo/signoff-photo.module */
          "fz2Y")).then(function (m) {
            return m.SignoffPhotoPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "home-exit-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-home-exit-dm-home-exit-dm-module */
          "modals-home-exit-dm-home-exit-dm-module").then(__webpack_require__.bind(null,
          /*! ./modals/home-exit-dm/home-exit-dm.module */
          "3CgS")).then(function (m) {
            return m.HomeExitDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-option-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-option-dm-checkinout-option-dm-module */
          "pages-checkinout-option-dm-checkinout-option-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-option-dm/checkinout-option-dm.module */
          "wRUa")).then(function (m) {
            return m.CheckinoutOptionDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-name-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-name-dm-checkinout-name-dm-module */
          "pages-checkinout-name-dm-checkinout-name-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-name-dm/checkinout-name-dm.module */
          "cZuc")).then(function (m) {
            return m.CheckinoutNameDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-guest-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-guest-dm-checkinout-guest-dm-module */
          "pages-checkinout-guest-dm-checkinout-guest-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-guest-dm/checkinout-guest-dm.module */
          "Ku4i")).then(function (m) {
            return m.CheckinoutGuestDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-alreadycheckin-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-alreadycheckin-dm-checkinout-alreadycheckin-dm-module */
          "pages-checkinout-alreadycheckin-dm-checkinout-alreadycheckin-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-alreadycheckin-dm/checkinout-alreadycheckin-dm.module */
          "M96U")).then(function (m) {
            return m.CheckinoutAlreadycheckinDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-photoidentity-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-photoidentity-dm-checkinout-photoidentity-dm-module */
          "pages-checkinout-photoidentity-dm-checkinout-photoidentity-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-photoidentity-dm/checkinout-photoidentity-dm.module */
          "ht/t")).then(function (m) {
            return m.CheckinoutPhotoidentityDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "documents-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-documents-dm-documents-dm-module */
          "pages-documents-dm-documents-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/documents-dm/documents-dm.module */
          "p8aD")).then(function (m) {
            return m.DocumentsDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "permits-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-permits-dm-permits-dm-module */
          "pages-permits-dm-permits-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/permits-dm/permits-dm.module */
          "EODU")).then(function (m) {
            return m.PermitsDmPageModule;
          });
        }
      }, {
        path: "evacuation-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-evacuation-dm-evacuation-dm-module */
          "pages-evacuation-dm-evacuation-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/evacuation-dm/evacuation-dm.module */
          "aXpH")).then(function (m) {
            return m.EvacuationDmPageModule;
          });
        }
      }, {
        path: "forms-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forms-dm-forms-dm-module */
          "pages-forms-dm-forms-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/forms-dm/forms-dm.module */
          "eGHF")).then(function (m) {
            return m.FormsDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "permits-generate-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-permits-generate-dm-permits-generate-dm-module */
          "pages-permits-generate-dm-permits-generate-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/permits-generate-dm/permits-generate-dm.module */
          "sgAd")).then(function (m) {
            return m.PermitsGenerateDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "permit-issued-result-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-permit-issued-result-dm-permit-issued-result-dm-module */
          "pages-permit-issued-result-dm-permit-issued-result-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/permit-issued-result-dm/permit-issued-result-dm.module */
          "QmNT")).then(function (m) {
            return m.PermitIssuedResultDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "device-sync-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-device-sync-dm-device-sync-dm-module */
          "pages-device-sync-dm-device-sync-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/device-sync-dm/device-sync-dm.module */
          "UH/1")).then(function (m) {
            return m.DeviceSyncDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-guest-phone-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-guest-phone-dm-checkinout-guest-phone-dm-module */
          "pages-checkinout-guest-phone-dm-checkinout-guest-phone-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-guest-phone-dm/checkinout-guest-phone-dm.module */
          "5chN")).then(function (m) {
            return m.CheckinoutPhoneDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-success-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-success-dm-checkinout-success-dm-module */
          "pages-checkinout-success-dm-checkinout-success-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-success-dm/checkinout-success-dm.module */
          "vteb")).then(function (m) {
            return m.CheckinoutSuccessDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-fail-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-fail-dm-checkinout-fail-dm-module */
          "pages-checkinout-fail-dm-checkinout-fail-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-fail-dm/checkinout-fail-dm.module */
          "yYLy")).then(function (m) {
            return m.CheckinoutFailDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkinout-identityconfirm-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkinout-identityconfirm-dm-checkinout-identityconfirm-dm-module */
          "pages-checkinout-identityconfirm-dm-checkinout-identityconfirm-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkinout-identityconfirm-dm/checkinout-identityconfirm-dm.module */
          "54sU")).then(function (m) {
            return m.CheckinoutIdentityconfirmDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "document-openchoice-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-document-openchoice-dm-document-openchoice-dm-module */
          "pages-document-openchoice-dm-document-openchoice-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/document-openchoice-dm/document-openchoice-dm.module */
          "jkf7")).then(function (m) {
            return m.DocumentOpenchoiceDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "form-open-auth-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-form-open-auth-dm-form-open-auth-dm-module */
          "pages-form-open-auth-dm-form-open-auth-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/form-open-auth-dm/form-open-auth-dm.module */
          "U/mt")).then(function (m) {
            return m.FormOpenAuthDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "checkin-workpermit",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-workpermit-checkin-workpermit-module */
          "checkin-workpermit-checkin-workpermit-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-workpermit/checkin-workpermit.module */
          "wBB1")).then(function (m) {
            return m.CheckinWorkpermitPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "form-cover-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-form-cover-dm-form-cover-dm-module */
          "pages-form-cover-dm-form-cover-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/form-cover-dm/form-cover-dm.module */
          "7w9b")).then(function (m) {
            return m.FormCoverDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "choose-location",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-choose-location-choose-location-module */
          "pages-choose-location-choose-location-module").then(__webpack_require__.bind(null,
          /*! ./pages/choose-location/choose-location.module */
          "Y9YN")).then(function (m) {
            return m.ChooseLocationPageModule;
          });
        }
      }, {
        path: "dashboard-dm",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-dashboard-dm-dashboard-dm-module */
          "pages-dashboard-dm-dashboard-dm-module").then(__webpack_require__.bind(null,
          /*! ./pages/dashboard-dm/dashboard-dm.module */
          "Zhrm")).then(function (m) {
            return m.DashboardDmPageModule;
          });
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: "forgot-password-reset",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forgot-password-reset-forgot-password-reset-module */
          "pages-forgot-password-reset-forgot-password-reset-module").then(__webpack_require__.bind(null,
          /*! ./pages/forgot-password-reset/forgot-password-reset.module */
          "yo1j")).then(function (m) {
            return m.ForgotPasswordResetPageModule;
          });
        }
      }, {
        path: "form-workpermit",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-workpermit-form-workpermit-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-workpermit-form-workpermit-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-workpermit/form-workpermit.module */
          "YaHL")).then(function (m) {
            return m.FormWorkpermitPageModule;
          });
        }
      }, {
        path: "document-openchoice",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-document-openchoice-document-openchoice-module */
          "pages-document-openchoice-document-openchoice-module").then(__webpack_require__.bind(null,
          /*! ./pages/document-openchoice/document-openchoice.module */
          "Wo75")).then(function (m) {
            return m.DocumentOpenchoicePageModule;
          });
        }
      }, {
        path: "checkin-list",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkin-list-checkin-list-module */
          "checkin-list-checkin-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkin-list/checkin-list.module */
          "YFeQ")).then(function (m) {
            return m.CheckinListPageModule;
          });
        }
      }];
      var webAppRoutes = [{
        path: "",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-form-cover-form-cover-module */
          "pages-form-cover-form-cover-module").then(__webpack_require__.bind(null,
          /*! ./pages/form-cover/form-cover.module */
          "E/ln")).then(function (m) {
            return m.FormCoverPageModule;
          });
        }
      }, {
        path: "form-custom",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-custom-form-custom-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-custom-form-custom-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-custom/form-custom.module */
          "xev1")).then(function (m) {
            return m.FormCustomPageModule;
          });
        }
      }, {
        path: "form-riskassessment",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-riskassessment-form-riskassessment-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-riskassessment-form-riskassessment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-riskassessment/form-riskassessment.module */
          "9x/1")).then(function (m) {
            return m.FormRiskassessmentPageModule;
          });
        }
      }, {
        path: "form-hav",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-hav-form-hav-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-form-hav-form-hav-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-hav/form-hav.module */
          "cUWu")).then(function (m) {
            return m.FormHavPageModule;
          });
        }
      }, {
        path: "form-accident-report",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-accident-report-form-accident-report-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-form-accident-report-form-accident-report-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-accident-report/form-accident-report.module */
          "PtOF")).then(function (m) {
            return m.FormAccidentReportPageModule;
          });
        }
      }, {
        path: "form-workpermit",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-workpermit-form-workpermit-module */
          [__webpack_require__.e("default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-workpermit-form-workpermit-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-workpermit/form-workpermit.module */
          "YaHL")).then(function (m) {
            return m.FormWorkpermitPageModule;
          });
        }
      }, {
        path: "image-annotation",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-image-annotation-image-annotation-module */
          [__webpack_require__.e("default~pages-image-annotation-image-annotation-module~pages-signoff-digitalink-signoff-digitalink-module"), __webpack_require__.e("pages-image-annotation-image-annotation-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/image-annotation/image-annotation.module */
          "mu+s")).then(function (m) {
            return m.ImageAnnotationPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isWebApp ? webAppRoutes : routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
          onSameUrlNavigation: "reload"
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vZrh":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-time-field/date-time-field.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vZrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item class=\"question-item date-item\" [formGroup]=\"form\">\n    <ion-label position=\"stacked\" *ngIf=\"label\">{{label}}</ion-label>\n    <div class=\"date-field\" [ngClass]=\"{'error':isError}\">\n        <ion-icon slot=\"start\" src=\"./assets/icon/calendar.svg\"></ion-icon>\n        <ion-datetime\n                [placeholder]=\"placeholder\"\n                display-timezone=\"utc\"\n                displayFormat=\"DD MMM YYYY HH:mm\"\n                pickerFormat=\"DD MMM YYYY HH:mm\"\n                max=\"2050\"\n                [formControlName]=\"inputName\"\n        ></ion-datetime>\n    </div>\n</ion-item>\n";
      /***/
    },

    /***/
    "vpkv":
    /*!***************************************************************!*\
      !*** ./src/app/components/date-field/date-field.component.ts ***!
      \***************************************************************/

    /*! exports provided: DateFieldComponent */

    /***/
    function vpkv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateFieldComponent", function () {
        return DateFieldComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_date_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./date-field.component.html */
      "O6nd");
      /* harmony import */


      var _date_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-field.component.scss */
      "hbR+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateFieldComponent = /*#__PURE__*/function () {
        function DateFieldComponent() {
          _classCallCheck(this, DateFieldComponent);
        }

        _createClass(DateFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DateFieldComponent;
      }();

      DateFieldComponent.ctorParameters = function () {
        return [];
      };

      DateFieldComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inputName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DateFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-date-field',
        template: _raw_loader_date_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_date_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DateFieldComponent);
      /***/
    },

    /***/
    "w7Qz":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/topnavigations-btns-dm/topnavigations-btns-dm.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w7Qz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar style=\"overflow-x: auto !important;\">\n    <div class=\"toolbar-container\">\n        <ion-buttons slot=\"start\">\n            <ion-button [ngClass]=\"{active:activeBtn==='checkinout'}\" (click)=\"checkInOutClick()\">\n                <ion-img *ngIf=\"activeBtn === 'checkinout'\" slot=\"start\" src=\"./assets/icon/checkinout-active.png\"></ion-img>\n                <ion-img *ngIf=\"activeBtn !=='checkinout'\" slot=\"start\" src=\"./assets/icon/checkinout-inactive.png\"></ion-img>\n                Check In/Out\n            </ion-button>\n\n            <ion-button [ngClass]=\"{active:activeBtn==='document'}\" (click)=\"documentsClick()\">\n                <ion-img *ngIf=\"activeBtn === 'document'\" slot=\"start\" src=\"./assets/icon/document-active.png\"></ion-img>\n                <ion-img *ngIf=\"activeBtn !=='document'\" slot=\"start\" src=\"./assets/icon/document-inactive.png\"></ion-img>\n                Documents\n            </ion-button>\n\n            <ion-button [ngClass]=\"{active:activeBtn==='form'}\" (click)=\"formsClick()\">\n                <ion-img *ngIf=\"activeBtn === 'form'\" slot=\"start\" src=\"./assets/icon/form-active.png\"></ion-img>\n                <ion-img *ngIf=\"activeBtn !=='form'\" slot=\"start\" src=\"./assets/icon/form-inactive.png\"></ion-img>\n                Forms\n            </ion-button>\n\n            <ion-button [ngClass]=\"{active:activeBtn==='permit'}\" (click)=\"permitsClick()\">\n                <ion-img *ngIf=\"activeBtn === 'permit'\" slot=\"start\" src=\"./assets/icon/permit-active.png\"></ion-img>\n                <ion-img *ngIf=\"activeBtn !=='permit'\" slot=\"start\" src=\"./assets/icon/permit-inactive.png\"></ion-img>\n                Live Permits\n            </ion-button>\n\n            <ion-button [ngClass]=\"{active:activeBtn==='evacuation'}\" (click)=\"evacuationClick()\">\n                <ion-img *ngIf=\"activeBtn === 'evacuation'\" slot=\"start\" src=\"./assets/icon/evacuation-active.png\"></ion-img>\n                <ion-img *ngIf=\"activeBtn !=='evacuation'\" slot=\"start\" src=\"./assets/icon/evacuation-inactive.png\"></ion-img>\n                Evacuation\n            </ion-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"action-btn\" *ngIf=\"activeBtn === 'permit'\" (click)=\"generatePermitClick()\">\n                Generate Work Permit\n            </ion-button>\n        </ion-buttons>\n    </div>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "x1iz":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/device-info/device-info.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x1iz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu menuId=\"infoMenu\" side=\"end\" type=\"overlay\" contentId=\"infomenuContent\" (ionWillOpen)=\"menuWillOpen()\" swipeGesture=\"false\">\n\t<ion-header>\n\t\t<app-modal-header [modalTitle]=\"'Device Info'\" (closeModal)=\"closeInfoMenu()\"></app-modal-header>\n\t</ion-header>\n\n\t<ion-content mode=\"ios\">\n\t\t<div class=\"content\">\n\t\t\t<ion-list lines=\"full\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label *ngIf=\"sharedDataService.deviceUID && sharedDataService.deviceUID.length > 0\" style=\"flex: none !important; margin-right: 0 !important\" slot=\"start\">UID</ion-label>\n\t\t\t\t\t<ion-note color=\"medium\" slot=\"end\" class=\"selectable-text\">{{ UtilService.modifyUDID(sharedDataService.deviceUID) }}</ion-note>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label slot=\"start\">Device Status</ion-label>\n\t\t\t\t\t<ion-chip *ngIf=\"isOnline\" color=\"clear\" slot=\"end\">\n\t\t\t\t\t\t<ion-icon color=\"success\" name=\"ellipse\"></ion-icon>\n\t\t\t\t\t\t<ion-label color=\"success\">Online</ion-label>\n\t\t\t\t\t</ion-chip>\n\n\t\t\t\t\t<ion-chip *ngIf=\"!isOnline\" color=\"clear\" slot=\"end\">\n\t\t\t\t\t\t<ion-icon color=\"danger\" name=\"ellipse\"></ion-icon>\n\t\t\t\t\t\t<ion-label color=\"danger\">Offline</ion-label>\n\t\t\t\t\t</ion-chip>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label slot=\"start\">Last Sync</ion-label>\n\t\t\t\t\t<ion-note color=\"medium\" slot=\"end\" *ngIf=\"lastSyncTime()\">{{ lastSyncTime() | date: 'dd MMM yyyy HH:mm' }}</ion-note>\n\t\t\t\t\t<ion-note color=\"medium\" slot=\"end\" *ngIf=\"!lastSyncTime()\">No synced yet</ion-note>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\n\t\t\t<app-sync-warning-msg *ngIf=\"isOnline\"></app-sync-warning-msg>\n\n\t\t\t<ion-button [disabled]=\"!isOnline\" class=\"action-btn\" (click)=\"syncClick()\"> Synch Now </ion-button>\n\t\t</div>\n\t</ion-content>\n</ion-menu>\n";
      /***/
    },

    /***/
    "xeWq":
    /*!***************************************************************************!*\
      !*** ./src/app/components/date-time-field/date-time-field.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function xeWq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".date-item .date-field {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid #E8EAF2;\n  border-radius: 3px;\n  padding: 2px 16px;\n  width: 100%;\n}\n.date-item ion-datetime {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #777595;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGUtdGltZS1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0U7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoiZGF0ZS10aW1lLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUtaXRlbSB7XG4gIC5kYXRlLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFQUYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGlvbi1kYXRldGltZSB7XG4gICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjNzc3NTk1O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "yGae":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/next-prev-toolbar/next-prev-toolbar.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function yGae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  min-height: 44px;\n  --background: #F8F9FB;\n  --border-color: #E8EAF2;\n  --border-width: 0 0 1px;\n  --border-style: solid;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  padding-top: 0 !important;\n}\nion-toolbar.error {\n  --background: #FFEDBD;\n  --border-color: #E4D3A3;\n}\nion-toolbar ion-title {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #181639;\n}\nion-toolbar ion-title.light {\n  color: #777595;\n}\nion-toolbar .arrow-button {\n  --color: #2A6FDB;\n  width: 58px;\n  height: 44px;\n}\nion-toolbar .arrow-button ion-icon {\n  width: 16px;\n  height: 16px;\n}\nion-toolbar .arrow-button.left {\n  border-right: 1px solid #E8EAF2;\n}\nion-toolbar .arrow-button.right {\n  border-left: 1px solid #E8EAF2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25leHQtcHJldi10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtBQUFOO0FBSUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRk47QUFLSTtFQUNFLCtCQUFBO0FBSE47QUFNSTtFQUNFLDhCQUFBO0FBSk4iLCJmaWxlIjoibmV4dC1wcmV2LXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIC0tYmFja2dyb3VuZDogI0Y4RjlGQjtcbiAgLS1ib3JkZXItY29sb3I6ICNFOEVBRjI7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5cbiAgJi5lcnJvciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZFREJEO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjRTREM0EzO1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICMxODE2Mzk7XG5cbiAgICAmLmxpZ2h0IHtcbiAgICAgIGNvbG9yOiAjNzc3NTk1O1xuICAgIH1cbiAgfVxuXG4gIC5hcnJvdy1idXR0b24ge1xuICAgIC0tY29sb3I6ICMyQTZGREI7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJi5sZWZ0IHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFOEVBRjI7XG4gICAgfVxuXG4gICAgJi5yaWdodCB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFOEVBRjI7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "yWS4":
    /*!***********************************************************************!*\
      !*** ./src/app/components/archived-item/archived-item.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function yWS4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 40px;\n  --padding-end: 16px;\n  --border-color: #E8EAF2;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n  color: #444444;\n}\nion-item ion-img {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n}\nion-item ion-label {\n  white-space: normal;\n}\nion-item .text-style-1 {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  color: #444444;\n}\nion-item .text-style-2 {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  color: #888888;\n}\nion-item .col-one {\n  margin-right: 16px;\n  max-width: 40%;\n  min-width: 20%;\n  display: flex;\n  flex-direction: row;\n}\nion-item .col-one ion-img {\n  margin-right: 8px;\n}\nion-item .col-two {\n  white-space: nowrap;\n  margin-right: 16px;\n  flex: 0.4;\n}\nion-item .col-three {\n  margin-right: 16px;\n  white-space: nowrap;\n  flex: 0.6;\n}\nion-item .highlight {\n  font-family: SF Pro Display;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 17px;\n  color: #444444;\n}\nion-item .label-for-highlight-text {\n  white-space: nowrap;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FyY2hpdmVkLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBSUU7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBUUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVBKO0FBVUU7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVJKO0FBV0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBVEoiLCJmaWxlIjoiYXJjaGl2ZWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLWJvcmRlci1jb2xvcjogI0U4RUFGMjtcblxuICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzQ0NDQ0NDtcblxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWluLXdpZHRoOiAyNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cblxuICAudGV4dC1zdHlsZS0xIHtcbiAgICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgfVxuXG4gIC50ZXh0LXN0eWxlLTIge1xuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gRGlzcGxheTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICB9XG5cbiAgLmNvbC1vbmUge1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICBtaW4td2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBpb24taW1nIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb2wtdHdvIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBmbGV4OiAwLjQ7XG4gIH1cblxuICAuY29sLXRocmVlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmbGV4OiAwLjY7XG4gIH1cblxuICAuaGlnaGxpZ2h0IHtcbiAgICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gIH1cblxuICAubGFiZWwtZm9yLWhpZ2hsaWdodC10ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** App Primary Color**/\n  --ion-color-app-primary: #8A25B1;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n}\n.content-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.content-container .fill-vertical-space {\n  flex: 1;\n}\nion-footer {\n  background-color: #FFFFFF;\n}\nion-label {\n  white-space: normal !important;\n}\n.text-tiny {\n  font-size: 0.7em;\n}\n.text-small {\n  font-size: 0.85em;\n}\n.text-big {\n  font-size: 1.4em;\n}\n.text-huge {\n  font-size: 1.8em;\n}\n::ng-deep ion-item.question-item {\n  --min-height: 18px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  margin: 0 23px;\n}\n::ng-deep ion-item.question-item:last-child {\n  margin-bottom: 14px;\n}\n::ng-deep ion-item.question-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n::ng-deep .error {\n  --background: #FFF6DE !important;\n  background-color: #FFF6DE !important;\n  border: 1px solid #E4D3A3 !important;\n  border-radius: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEsdUJBQUE7RUFDQSxnQ0FBQTtBQ1pGO0FEZ0JBO0VBQ0U7OztJQUFBO0VBc0VBOzs7SUFBQTtFQXdDQTs7O0lBQUE7QUNoSEY7QUQ0SkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQzFKRjtBRDRKRTtFQUNFLE9BQUE7QUMxSko7QUQrSkE7RUFDRSx5QkFBQTtBQzVKRjtBRCtKQTtFQUNFLDhCQUFBO0FDNUpGO0FEZ0tBO0VBQ0UsZ0JBQUE7QUM3SkY7QURnS0E7RUFDRSxpQkFBQTtBQzdKRjtBRGdLQTtFQUNFLGdCQUFBO0FDN0pGO0FEZ0tBO0VBQ0UsZ0JBQUE7QUM3SkY7QUEvR0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWtISjtBQWhISTtFQUNFLG1CQUFBO0FBa0hOO0FBL0dJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWlITjtBQTdHRTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBK0dKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuJHBhZGRpbmdIb3Jpem9udGFsOiAyM3B4O1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAvKiogQXBwIFByaW1hcnkgQ29sb3IqKi9cbiAgLS1pb24tY29sb3ItYXBwLXByaW1hcnk6ICM4QTI1QjE7XG5cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAvLy0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC8vLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC8vLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAgIC8vLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLy8tLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAvLy0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAvLy0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC8vLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gICAgLy8tLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC8vLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAvLy0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC8vLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAvLy0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLy8tLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgICAvL1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gICAgLy8tLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAvLy0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAgIC8vLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAgIC8vXG4gICAgLy8tLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAvL1xuICAgIC8vLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgICAvL1xuICAgIC8vLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLy0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC8vXG4gICAgLy8tLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gICAgLy9cbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLy8tLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAvLy0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAgIC8vLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gICAgLy9cbiAgICAvLy0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAvL1xuICAgIC8vLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC8vXG4gICAgLy8tLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgLy9cbiAgICAvLy0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gIC5maWxsLXZlcnRpY2FsLXNwYWNlIHtcbiAgICBmbGV4OiAxXG4gIH1cbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4vL0NsYXNzZXNzIGZvciBpbmR1Y3Rpb24gcmljaCB0ZXh0IGFuZCBhZ3JlZW1lbnQgdGV4dCAsIGNsYXNzZXNzIGFyZSBkeW5hbWljIGZyb20gYXBpXG4udGV4dC10aW55IHtcbiAgZm9udC1zaXplOiAuN2VtO1xufVxuXG4udGV4dC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG59XG5cbi50ZXh0LWJpZyB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi50ZXh0LWh1Z2Uge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuIiwiQGltcG9ydCBcIi4vc3JjL3RoZW1lL3ZhcmlhYmxlc1wiO1xuXG46Om5nLWRlZXAge1xuICBpb24taXRlbS5xdWVzdGlvbi1pdGVtIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDE4cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIG1hcmdpbjogMCAkcGFkZGluZ0hvcml6b250YWw7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICB9XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRjZERSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY2REUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTREM0EzICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "2Zi2");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      }); // Call the element loader after the platform has been bootstrapped

      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
      /***/
    },

    /***/
    "zc+a":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-choose-photo/add-choose-photo.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zcA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"photo-buttons\" *ngIf=\"!image; else addPhotoTemplate;\">\n    <ion-button fill=\"clear\" class=\"left\" (click)=\"addPhotoFromCamera()\">\n        <ion-icon slot=\"start\" src=\"./assets/icon/image.svg\"></ion-icon>\n        Take a Photo\n    </ion-button>\n\n    <span>Or</span>\n\n    <ion-button fill=\"clear\" class=\"right\" (click)=\"addPhotoFromLibrary()\">\n        <ion-icon slot=\"start\" src=\"./assets/icon/folder.svg\"></ion-icon>\n        Choose Photo\n    </ion-button>\n</div>\n\n<ng-template #addPhotoTemplate>\n    <div class=\"image-view\">\n        <div class=\"close-btn\">\n            <ion-button class=\"edit-btn\" fill=\"clear\"\n                        (click)=\"editPhoto.emit()\">\n                <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" (click)=\"photoRemoved.emit()\">\n                <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </div>\n        <ion-img *ngIf=\"image\" [src]=\"image\"></ion-img>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map