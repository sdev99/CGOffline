(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-workpermit-form-workpermit-module"],{

/***/ "9dsd":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-workpermit/form-workpermit.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-portrait-orientation *ngIf=\"isShowOritationPortrait;else formView\"\n                          (close)=\"isShowOritationPortrait=false\"></app-portrait-orientation>\n\n<ng-template #formView>\n    <ion-header mode=\"ios\">\n        <ng-container *ngIf=\"sharedDataService.dedicatedMode; else personalMode\">\n            <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n                                 (closeModal)=\"onClose()\"\n                                 [modalSubTitle]=\"formBuilderDetail?.title\"></app-modal-header-dm>\n        </ng-container>\n\n        <ng-template #personalMode>\n            <app-modal-header [modalTitle]=\"formBuilderDetail?.title\" (closeModal)=\"onClose()\"></app-modal-header>\n\n            <app-next-prev-toolbar [isError]=\"(errorMessage && errorMessage.length>0)\"\n                                   [currentCount]=\"currentQuestionIndex\"\n                                   [totalCount]=\"questionElementIds.length\" (next)=\"next()\"\n                                   (previous)=\"previous()\"></app-next-prev-toolbar>\n        </ng-template>\n\n        <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n\n    </ion-header>\n\n\n    <ion-content\n        #content\n        [scrollEvents]=\"true\"\n        (ionScrollEnd)=\"onScrollEnd($event)\"\n        (ionScroll)=\"onScroll($event)\"\n        mode=\"ios\"\n        [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n\n\n        <div class=\"content-container\">\n\n            <Form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n\n                <ion-list lines=\"none\" mode=\"ios\">\n                    <ng-container *ngFor=\"let section of formBuilderDetail?.sections; let sectionIndex = index;\">\n                        <ng-container *ngIf=\"utilService.shouldShowSection(section)\">\n                            <app-section-title\n                                    [title]=\"UtilService.findObj(section.sectionTranslations, 'sectionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).sectionTranslationTitle\">\n                            </app-section-title>\n\n                            <app-custom-questions-container\n                                    [sectionIndex]=\"sectionIndex\"\n                                    [sectionId]=\"section.sectionId\"\n                                    [questionElementIds]=\"questionElementIds\"\n                                    [questions]=\"section.questions\"\n                                    [isSubmitted]=\"isSubmitted\"\n                                    [formGroup]=\"formGroup\"\n                                    [section]=\"section\"\n                            ></app-custom-questions-container>\n                        </ng-container>\n                    </ng-container>\n\n                    <!--        End of form -->\n                    <ng-container *ngIf=\"!sharedDataService.dedicatedMode\">\n\n                        <div class=\"hr-line-full ion-margin-top\"></div>\n\n                        <ion-item class=\"ion-margin-vertical text-bottom-msg\">\n                            <ion-label class=\"ion-text-wrap ion-text-center\">\n                                You've reached the end of the form.\n                                Please check your answers and sign-off.\n                            </ion-label>\n                        </ion-item>\n\n                        <ion-item class=\"ion-margin-vertical ion-padding-bottom\">\n                            <ion-button type=\"submit\" expand=\"full\" class=\"action-btn\">Sign-Off</ion-button>\n                        </ion-item>\n\n                    </ng-container>\n\n\n                </ion-list>\n            </Form>\n\n            <div class=\"fill-vertical-space\"></div>\n\n            <!--        End of form -->\n            <ng-container *ngIf=\"sharedDataService.dedicatedMode\">\n                <ion-item class=\"text-bottom-msg\" lines=\"none\">\n                    <ion-label class=\"ion-text-wrap ion-padding\">\n                        You've reached the end of the form.\n                        Please check your answers and sign-off.\n                    </ion-label>\n                    <ion-button slot=\"end\" class=\"action-btn\" (click)=\"onSubmit()\">Sign-Off</ion-button>\n                </ion-item>\n            </ng-container>\n        </div>\n\n    </ion-content>\n</ng-template>\n\n\n\n");

/***/ }),

/***/ "HJGP":
/*!*****************************************************************!*\
  !*** ./src/app/pages/form-workpermit/form-workpermit.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode ion-list {\n  width: 70%;\n  border-radius: 12px;\n  margin: 20px auto 0;\n}\nion-content.dedicated-mode .text-bottom-msg {\n  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.3);\n  margin-top: 40px;\n  color: #171538;\n  padding: 0 16px;\n  background-color: #ffffff;\n}\nion-content.dedicated-mode .text-bottom-msg ion-label {\n  padding: 16px 0;\n}\nion-content.dedicated-mode .text-bottom-msg .action-btn {\n  width: 200px;\n  margin: 0;\n  margin-left: 16px;\n}\nion-content ion-list .hr-line {\n  margin: 0 23px 16px;\n  width: auto;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\nion-content ion-list .hr-line-full {\n  width: 100%;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\nion-content ion-list .text-bottom-msg {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #171538;\n  padding: 16px 32px;\n}\nion-content ion-list .action-btn {\n  width: 100%;\n  margin: 0;\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0td29ya3Blcm1pdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxxQkFBQTtBQUZKO0FBSUk7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZOO0FBS0k7RUFDRSx5Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUpOO0FBTU07RUFDRSxlQUFBO0FBSlI7QUFPTTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQVlJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBVk47QUFhSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFYTjtBQWVJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWdCSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZE4iLCJmaWxlIjoiZm9ybS13b3JrcGVybWl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWRkaW5nSG9yaXpvbnRhbDogMjNweDtcblxuaW9uLWNvbnRlbnQge1xuICAmLmRlZGljYXRlZC1tb2RlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNkY5RkI7XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gICAgfVxuXG4gICAgLnRleHQtYm90dG9tLW1zZyB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tbGlzdCB7XG5cbiAgICAuaHItbGluZSB7XG4gICAgICBtYXJnaW46IDAgJHBhZGRpbmdIb3Jpem9udGFsIDE2cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gICAgfVxuXG4gICAgLmhyLWxpbmUtZnVsbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gICAgfVxuXG5cbiAgICAudGV4dC1ib3R0b20tbXNnIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "JArB":
/*!***************************************************************!*\
  !*** ./src/app/pages/form-workpermit/form-workpermit.page.ts ***!
  \***************************************************************/
/*! exports provided: FormWorkpermitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWorkpermitPage", function() { return FormWorkpermitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_workpermit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-workpermit.page.html */ "9dsd");
/* harmony import */ var _form_workpermit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-workpermit.page.scss */ "HJGP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/demo-data.service */ "vH+u");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/photo.service */ "6/gD");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/shared-data.service */ "msgi");
/* harmony import */ var _services_observables_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/observables.service */ "mxI+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/filehandler.service */ "rz59");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/util.service */ "2Rin");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../modals/exit-confirmation/exit-confirmation.page */ "GR7D");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/enum.service */ "AIDl");


















let FormWorkpermitPage = class FormWorkpermitPage {
    constructor(navCtrl, photoService, sharedDataService, observablesService, modalController, route, filehandlerService, screenOrientation, ngZone, apiService, utilService, accountService) {
        this.navCtrl = navCtrl;
        this.photoService = photoService;
        this.sharedDataService = sharedDataService;
        this.observablesService = observablesService;
        this.modalController = modalController;
        this.route = route;
        this.filehandlerService = filehandlerService;
        this.screenOrientation = screenOrientation;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.utilService = utilService;
        this.accountService = accountService;
        this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"];
        this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_17__["EnumService"];
        this.errorMessage = '';
        this.isSubmitted = false;
        this.list = _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__["DemoDataService"].activityCustomForm.clone();
        this.answer = {};
        this.totalPage = 32;
        this.isShowOritationPortrait = false;
        this.formBuilderDetail = JSON.parse('{"formId":124,"title":"Work Permit Two","description":null,"formVersionId":203,"formVersionNo":5,"isDraft":false,"formTypeID":3,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":218,"sectionIsHidden":true,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":321,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section One"}],"questions":[{"questionId":499,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":218,"questionTranslations":[{"questionTranslationId":577,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single Choice","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":550,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":669,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":551,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":670,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":500,"questionIsHidden":true,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":218,"questionTranslations":[{"questionTranslationId":578,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiple Choice","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":552,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":671,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":553,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":672,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":554,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":673,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]}],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":219,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":322,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Two"}],"questions":[{"questionId":501,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":1,"sectionID":219,"questionTranslations":[{"questionTranslationId":579,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single Line Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":502,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":4,"questionDisplayOrder":2,"sectionID":219,"questionTranslations":[{"questionTranslationId":580,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multi Line Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":503,"questionIsHidden":true,"questionIsRequired":false,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":3,"sectionID":219,"questionTranslations":[{"questionTranslationId":581,"questionTranslationLanguageId":35,"questionTranslationTitle":"Decimal Point","questionTranslationInstructionOrNote":"For eg 1.10","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":504,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":true,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":4,"sectionID":219,"questionTranslations":[{"questionTranslationId":582,"questionTranslationLanguageId":35,"questionTranslationTitle":"Integer value","questionTranslationInstructionOrNote":"For eg 1","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":26,"totalScore":10,"hasExpirationDate":true,"hasExpiresOn":true,"expiresOnDate":"01/12/2020","hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":2,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":203,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[{"userId":"e243237f-3147-4810-9dbd-6f5ea7bffb30","userName":"Demo Two App"}],"taskTemplates":[]}');
        this.questionElementIds = [];
        this.currentQuestionIndex = 0;
        this.handleOrientation = () => {
            if (this.sharedDataService.dedicatedMode) {
                if (this.screenOrientation.type.includes('landscape')) {
                    this.screenOrientation.unlock();
                    this.isShowOritationPortrait = true;
                }
                else {
                    if (!_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].isLocalHost()) {
                        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                    }
                }
                this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
                    this.ngZone.run(() => {
                        if (this.screenOrientation.type.includes('portrait')) {
                            if (!_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].isLocalHost()) {
                                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                            }
                            this.isShowOritationPortrait = false;
                        }
                        if (this.screenOrientation.type.includes('landscape')) {
                            this.isShowOritationPortrait = true;
                        }
                    });
                });
            }
        };
        this.onScrollEnd = (event) => {
            if (this.scrollingDetail) {
                const scrollTop = this.scrollingDetail.scrollTop;
                if (scrollTop === 0) {
                    this.currentQuestionIndex = 0;
                }
                else {
                    this.questionElementIds.map((elementId, key) => {
                        const y = document.getElementById(elementId).offsetTop;
                        if (scrollTop >= y) {
                            this.currentQuestionIndex = key;
                            return;
                        }
                    });
                }
            }
        };
        this.onScroll = (event) => {
            this.scrollingDetail = event.detail;
        };
        this.scrollToQuestion = () => {
            const elementId = this.questionElementIds[this.currentQuestionIndex];
            const y = document.getElementById(elementId).offsetTop;
            this.content.scrollToPoint(0, y, 500);
        };
        this.user = accountService.userValue;
        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }
        // Add form controls for each type of fields
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        const sections = this.formBuilderDetail.sections;
        this.utilService.questionElementIdsUpdate = (questionElementIds) => {
            this.questionElementIds = questionElementIds;
        };
        this.utilService.addFormControlsForVisibleFields(sections, this.formGroup);
        // -- End -- Add form controls for each type of fields
    }
    ionViewDidEnter() {
        this.sharedDataService.isOpenImageAnnotation = false;
    }
    ionViewWillEnter() {
        this.handleOrientation();
    }
    ionViewDidLeave() {
        if (this.sharedDataService.dedicatedMode) {
            if (!this.sharedDataService.isOpenImageAnnotation) {
                if (!_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].isLocalHost()) {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                    this.screenOrientationSubscribe.unsubscribe();
                }
            }
        }
    }
    onClose() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_16__["ExitConfirmationPage"],
                swipeToClose: false,
                showBackdrop: false,
                backdropDismiss: false,
                animated: true,
                componentProps: {}
            });
            yield modal.present();
            modal.onWillDismiss().then(({ data }) => {
                if (data) {
                    this.onBack();
                }
            });
        });
    }
    onBack() {
        if (this.sharedDataService.viewFormFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_17__["EnumService"].ViewFormForType.Induction) {
            this.navCtrl.navigateBack('/checkinout-confirm');
        }
        else {
            this.navCtrl.back();
        }
    }
    onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = '';
        let workPermitAnswer;
        if (this.formGroup.valid) {
            // Calculate score for work permit
            let scoreAchieved = 0;
            const sections = this.formBuilderDetail.sections;
            if (sections) {
                sections.map((section, sectionIndex) => {
                    if (this.utilService.shouldShowSection(section)) {
                        const isSectionDuplicate = section[_services_enum_service__WEBPACK_IMPORTED_MODULE_17__["EnumService"].QuestionLogic.ActionTypeForForm.Duplicate];
                        const questions = section.questions;
                        questions.map((question, questionIndex) => {
                            if (this.utilService.shouldShowQuestion(question)) {
                                const controlName = _services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].FCUniqueName(section, question);
                                if (question.selectedAnswerTypeId === _services_enum_service__WEBPACK_IMPORTED_MODULE_17__["EnumService"].CustomAnswerType.SingleChoiceSet) {
                                    const control = this.formGroup.controls[controlName];
                                    question.answerChoiceAttributes.map((choice) => {
                                        if (choice.answerChoiceAttributeId === control.value) {
                                            scoreAchieved = scoreAchieved + choice.answerChoiceAttributeScoreOrWeight;
                                        }
                                    });
                                }
                                else if (question.selectedAnswerTypeId === _services_enum_service__WEBPACK_IMPORTED_MODULE_17__["EnumService"].CustomAnswerType.MultipleChoiceSet) {
                                    const control = this.formGroup.controls[controlName];
                                    const formGroups = control.value;
                                    question.answerChoiceAttributes.map((choice) => {
                                        const choiceControl = formGroups[_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].SubFCName(controlName, choice.answerChoiceAttributeId)];
                                        if (choiceControl) {
                                            scoreAchieved = scoreAchieved + choice.answerChoiceAttributeScoreOrWeight;
                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            }
            workPermitAnswer = {
                workPermitId: this.formBuilderDetail.workPermitDetails.workPermitId,
                scoreAchieved,
                totalScore: this.formBuilderDetail.workPermitDetails.totalScore
            };
        }
        this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, (status, result) => {
            if (status) {
            }
            else {
                this.errorMessage = result;
            }
        }, null, workPermitAnswer);
    }
    // Navigate to question
    previous() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.scrollToQuestion();
        }
    }
    next() {
        if (this.currentQuestionIndex < this.questionElementIds.length - 1) {
            this.currentQuestionIndex++;
            this.scrollToQuestion();
        }
    }
};
FormWorkpermitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"] },
    { type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"] },
    { type: _services_observables_service__WEBPACK_IMPORTED_MODULE_9__["ObservablesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_11__["FilehandlerService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"] }
];
FormWorkpermitPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"],] }]
};
FormWorkpermitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-workpermit',
        template: _raw_loader_form_workpermit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_workpermit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormWorkpermitPage);



/***/ }),

/***/ "YaHL":
/*!*****************************************************************!*\
  !*** ./src/app/pages/form-workpermit/form-workpermit.module.ts ***!
  \*****************************************************************/
/*! exports provided: FormWorkpermitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWorkpermitPageModule", function() { return FormWorkpermitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _form_workpermit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-workpermit-routing.module */ "fBpu");
/* harmony import */ var _form_workpermit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-workpermit.page */ "JArB");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let FormWorkpermitPageModule = class FormWorkpermitPageModule {
};
FormWorkpermitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_workpermit_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormWorkpermitPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_form_workpermit_page__WEBPACK_IMPORTED_MODULE_6__["FormWorkpermitPage"]]
    })
], FormWorkpermitPageModule);



/***/ }),

/***/ "fBpu":
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-workpermit/form-workpermit-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: FormWorkpermitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWorkpermitPageRoutingModule", function() { return FormWorkpermitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_workpermit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-workpermit.page */ "JArB");




const routes = [
    {
        path: '',
        component: _form_workpermit_page__WEBPACK_IMPORTED_MODULE_3__["FormWorkpermitPage"]
    }
];
let FormWorkpermitPageRoutingModule = class FormWorkpermitPageRoutingModule {
};
FormWorkpermitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormWorkpermitPageRoutingModule);



/***/ })

}]);