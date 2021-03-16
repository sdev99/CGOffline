(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-hav-form-hav-module"], {
    /***/
    "8/9j":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-hav/form-hav.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-portrait-orientation *ngIf=\"isShowOritationPortrait;else formView\"\n                          (close)=\"isShowOritationPortrait=false\"></app-portrait-orientation>\n\n<ng-template #formView>\n\n    <ion-header mode=\"ios\" *ngIf=\"formBuilderDetail\">\n        <app-modal-header *ngIf=\"!sharedDataService.dedicatedMode\" [modalTitle]=\"formBuilderDetail?.title\"\n                          (closeModal)=\"onClose()\"></app-modal-header>\n\n        <app-modal-header-dm *ngIf=\"sharedDataService.dedicatedMode\"\n                             [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\" (closeModal)=\"onClose()\"\n                             [modalSubTitle]=\"formBuilderDetail?.title\"></app-modal-header-dm>\n    </ion-header>\n\n\n    <ion-content mode=\"md\" [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n        <div class=\"content-container\">\n\n\n            <app-warning-component *ngIf=\"errorMessage && errorMessage.length>0\"\n                                   [message]=\"errorMessage\"></app-warning-component>\n\n            <app-exposure label=\"Your Current Exposure\" [points]=\"currentExposure\"\n                          containerClassName=\"top\"></app-exposure>\n\n            <Form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n\n                <ion-list lines=\"none\" mode=\"ios\"\n                          *ngFor=\"let section of formBuilderDetail?.sections; let sectionIndex = index\">\n                    <ng-container *ngIf=\"utilService.shouldShowSection(section)\">\n\n\n                        <app-section-title\n                                [title]=\"UtilService.findObj(section.sectionTranslations, 'sectionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).sectionTranslationTitle\">\n                        </app-section-title>\n\n                        <ng-container *ngIf=\"section.isHAVSection; else customQuestions\">\n                            <ng-container *ngFor=\"let question of section.questions;let questionIndex = index\">\n\n                                <ng-container *ngIf=\"utilService.shouldShowQuestion(question)\">\n\n                                    <app-date-field\n                                            *ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.DateField\"\n                                            [form]=\"formGroup\"\n                                            [inputName]=\"UtilService.FCUniqueName(section, question)\"\n                                            [label]=\"UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTitle\"\n                                            [isError]=\"isError(section, question)\"\n                                            placeholder=\"Choose\"\n                                    ></app-date-field>\n\n                                    <app-dropdown-field\n                                            *ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.ClassicDropdown\"\n                                            [form]=\"formGroup\"\n                                            [inputName]=\"UtilService.FCUniqueName(section, question)\"\n                                            [label]=\"UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTitle\"\n                                            [isError]=\"isError(section, question)\"\n                                            [list]=\"question.answerChoiceAttributes\"\n                                            [listLabelKey]=\"question.listLabelKey\"\n                                            [listValueKey]=\"question.listValueKey\"\n                                            (valueChange)=\"dropDownChange(section, question, sectionIndex,questionIndex)\"\n                                            placeholder=\"Choose\"\n                                    ></app-dropdown-field>\n\n\n                                    <app-number-integer-field\n                                            *ngIf=\"question.selectedAnswerTypeId === EnumService.CustomAnswerType.TimeField\"\n                                            [form]=\"formGroup\"\n                                            [inputName]=\"UtilService.FCUniqueName(section, question)\"\n                                            [label]=\"UtilService.findObj(question.questionTranslations, 'questionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).questionTranslationTitle\"\n                                            [isError]=\"isError(section,question)\"\n                                    ></app-number-integer-field>\n                                </ng-container>\n                            </ng-container>\n\n\n                            <app-exposure label=\"Calculated Exposure\" [points]=\"calculateExposure()\"\n                                          containerClassName=\"bottom\"></app-exposure>\n                            <app-exposure label=\"Total Exposure Will Be\"\n                                          [points]=\"calculateExposure(currentExposure)\"></app-exposure>\n\n                        </ng-container>\n\n                        <ng-template #customQuestions>\n                            <app-custom-questions-container\n                                    [sectionIndex]=\"sectionIndex\"\n                                    [sectionId]=\"section.sectionId\"\n                                    [questions]=\"section.questions\"\n                                    [isSubmitted]=\"isSubmitted\"\n                                    [formGroup]=\"formGroup\"\n                                    [questionElementIds]=\"questionElementIds\"\n                                    [section]=\"section\"\n                            ></app-custom-questions-container>\n                        </ng-template>\n                    </ng-container>\n                </ion-list>\n\n\n                <!--        End of form -->\n                <ng-container *ngIf=\"!sharedDataService.dedicatedMode\">\n\n                    <div class=\"hr-line-full ion-margin-top\"></div>\n\n                    <ion-item class=\"ion-margin-vertical text-bottom-msg\">\n                        <ion-label class=\"ion-text-wrap ion-text-center\">\n                            You've reached the end of the form.\n                            Please check your answers and sign-off.\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item class=\"ion-margin-vertical ion-padding-bottom\">\n                        <ion-button type=\"submit\" expand=\"full\" class=\"action-btn\">Sign-Off</ion-button>\n                    </ion-item>\n\n                </ng-container>\n\n            </Form>\n            <div class=\"fill-vertical-space\"></div>\n\n            <!--        End of form -->\n            <ng-container *ngIf=\"sharedDataService.dedicatedMode\">\n                <ion-item class=\"text-bottom-msg\" lines=\"none\">\n                    <ion-label class=\"ion-text-wrap ion-padding\">\n                        You've reached the end of the form.\n                        Please check your answers and sign-off.\n                    </ion-label>\n                    <ion-button slot=\"end\" class=\"action-btn\" (click)=\"onSubmit()\">Sign-Off</ion-button>\n                </ion-item>\n            </ng-container>\n        </div>\n\n    </ion-content>\n</ng-template>\n";
      /***/
    },

    /***/
    "D3So":
    /*!*************************************************!*\
      !*** ./src/app/pages/form-hav/form-hav.page.ts ***!
      \*************************************************/

    /*! exports provided: FormHavPage */

    /***/
    function D3So(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormHavPage", function () {
        return FormHavPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_hav_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-hav.page.html */
      "8/9j");
      /* harmony import */


      var _form_hav_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-hav.page.scss */
      "r+aF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../modals/exit-confirmation/exit-confirmation.page */
      "GR7D");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");

      var FormHavPage = /*#__PURE__*/function () {
        function FormHavPage(navCtrl, modalController, route, observablesService, sharedDataService, apiService, accountService, screenOrientation, ngZone, utilService) {
          var _this = this;

          _classCallCheck(this, FormHavPage);

          var _a, _b;

          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.observablesService = observablesService;
          this.sharedDataService = sharedDataService;
          this.apiService = apiService;
          this.accountService = accountService;
          this.screenOrientation = screenOrientation;
          this.ngZone = ngZone;
          this.utilService = utilService;
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"];
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"];
          this.isSubmitted = false;
          this.errorMessage = "";
          this.isShowOritationPortrait = false;
          this.formBuilderDetail = JSON.parse('{"formId":111,"title":"Hav Form Test 1","description":null,"formVersionId":176,"formVersionNo":7,"isDraft":false,"formTypeID":4,"companyId":27,"defaultLanguageId":0,"sections":[{"sectionId":171,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":true,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":274,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"HAVs Assessment"}],"questions":[{"questionId":364,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":1,"sectionID":171,"questionTranslations":[{"questionTranslationId":442,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date of Usage","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":365,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":2,"sectionID":171,"questionTranslations":[{"questionTranslationId":443,"questionTranslationLanguageId":35,"questionTranslationTitle":"Manufacturer","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":366,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":3,"sectionID":171,"questionTranslations":[{"questionTranslationId":444,"questionTranslationLanguageId":35,"questionTranslationTitle":"Type","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":367,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":11,"questionDisplayOrder":4,"sectionID":171,"questionTranslations":[{"questionTranslationId":445,"questionTranslationLanguageId":35,"questionTranslationTitle":"Model","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":368,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":5,"sectionID":171,"questionTranslations":[{"questionTranslationId":446,"questionTranslationLanguageId":35,"questionTranslationTitle":"Planned Time of Use (in minutes)","questionTranslationInstructionOrNote":null,"questionTranslationTextLabel":null}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":172,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":275,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"section 2"}],"questions":[{"questionId":369,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":true,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":172,"questionTranslations":[{"questionTranslationId":447,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single choice question","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":389,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":1,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":508,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"correct"}]},{"answerChoiceAttributeId":390,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":509,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"wrong"}]}],"questionLogics":[],"questionAttachments":[{"questionAttachmentId":29,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"demo51.png","fileType":null,"fileExtension":"png","folderName":"Choose","questionID":369,"documentID":125,"folderID":null}]},{"questionId":370,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":172,"questionTranslations":[{"questionTranslationId":448,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multi choice question","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":391,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"yellow","answerChoiceAttributeScoreOrWeight":3,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":510,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"correct"}]},{"answerChoiceAttributeId":392,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"purple","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":511,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"correct"}]},{"answerChoiceAttributeId":393,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":1,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":512,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"wrong"}]},{"answerChoiceAttributeId":394,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"grey","answerChoiceAttributeScoreOrWeight":1,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":513,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"wrong"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":371,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":3,"sectionID":172,"questionTranslations":[{"questionTranslationId":449,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single line text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":372,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":4,"questionDisplayOrder":4,"sectionID":172,"questionTranslations":[{"questionTranslationId":450,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiline Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":373,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":5,"sectionID":172,"questionTranslations":[{"questionTranslationId":451,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Integer","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":374,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":6,"sectionID":172,"questionTranslations":[{"questionTranslationId":452,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Decimal","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":375,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":7,"sectionID":172,"questionTranslations":[{"questionTranslationId":453,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":376,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":9,"questionDisplayOrder":8,"sectionID":172,"questionTranslations":[{"questionTranslationId":454,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date and Time Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":377,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":9,"sectionID":172,"questionTranslations":[{"questionTranslationId":455,"questionTranslationLanguageId":35,"questionTranslationTitle":"Time Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":378,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":10,"questionDisplayOrder":10,"sectionID":172,"questionTranslations":[{"questionTranslationId":456,"questionTranslationLanguageId":35,"questionTranslationTitle":"Photo Upload","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');
          this.currentExposure = 0;
          this.questionElementIds = [];

          this.setupDynamicChoiceList = function (listType, list) {
            var sections = _this.formBuilderDetail.sections;

            if (sections) {
              sections.map(function (section, key) {
                if (section.isHAVSection) {
                  _this.setupDynamicChoiceListForSection(key, listType, list);
                }
              });
            }
          };

          this.setupDynamicChoiceListForSection = function (sectionIndex, listType, list) {
            var sections = _this.formBuilderDetail.sections;

            if (sections) {
              var section = sections[sectionIndex];
              var questions = section.questions;
              questions.map(function (question, questionIndex) {
                if (question.questionDisplayOrder === listType) {
                  if (question.questionDisplayOrder === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Manufacturer) {
                    question.answerChoiceAttributes = list;
                    question.listValueKey = "havManufacturerID";
                    question.listLabelKey = "havManufacturerName";
                  } else if (question.questionDisplayOrder === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Type) {
                    question.answerChoiceAttributes = list;
                    question.listValueKey = "havTypeID";
                    question.listLabelKey = "havTypeName";
                  } else if (question.questionDisplayOrder === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Model) {
                    question.answerChoiceAttributes = list;
                    question.listValueKey = "havModelID";
                    question.listLabelKey = "model";
                  }

                  var controlName = _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].FCUniqueName(section, question);

                  var control = _this.formGroup.controls[controlName];
                  control.setValue("");
                }
              });
            }
          };

          this.handleOrientation = function () {
            if (_this.sharedDataService.dedicatedMode) {
              if (_this.screenOrientation.type.includes("landscape")) {
                _this.screenOrientation.unlock();

                _this.isShowOritationPortrait = true;
              } else {
                if (!_services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].isLocalHost()) {
                  _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                }
              }

              _this.screenOrientationSubscribe = _this.screenOrientation.onChange().subscribe(function () {
                _this.ngZone.run(function () {
                  if (_this.screenOrientation.type.includes("portrait")) {
                    if (!_services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].isLocalHost()) {
                      _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                    }

                    _this.isShowOritationPortrait = false;
                  }

                  if (_this.screenOrientation.type.includes("landscape")) {
                    _this.isShowOritationPortrait = true;
                  }
                });
              });
            }
          };

          this.user = accountService.userValue;

          if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
          }

          if (this.sharedDataService.dedicatedMode) {
            this.companyId = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
          } else {
            this.companyId = (_b = this.user) === null || _b === void 0 ? void 0 : _b.companyID;
          } // Add form controls for each type of fields


          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({});
          var sections = this.formBuilderDetail.sections;

          if (sections) {
            sections.map(function (section, sectionIndex) {
              if (section.isHAVSection) {
                var questions = section.questions;
                questions.map(function (question, questionIndex) {
                  if (question.questionDisplayOrder === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Model) {
                    _this.modelControlName = _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].FCUniqueName(section, question);
                  }

                  if (question.selectedAnswerTypeId === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.TimeField) {
                    _this.plannedTimeControlName = _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].FCUniqueName(section, question);
                  }
                });
              }
            });
          }

          this.utilService.questionElementIdsUpdate = function (questionElementIds) {
            _this.questionElementIds = questionElementIds;
          };

          this.utilService.addFormControlsForVisibleFields(sections, this.formGroup); // -- End -- Add form controls for each type of fields
        }

        _createClass(FormHavPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      this.apiService.getManufacturerList(this.companyId).subscribe(function (response) {
                        _this2.utilService.hideLoading();

                        var toolManufacturers = response.Result;

                        _this2.setupDynamicChoiceList(_services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Manufacturer, toolManufacturers);
                      }, function (error) {
                        _this2.utilService.hideLoading();
                      });
                      this.getUserTotalHAVExposureForToday();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getUserTotalHAVExposureForToday",
          value: function getUserTotalHAVExposureForToday() {
            var _this3 = this;

            var _a, _b;

            var userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userId;

            if (this.sharedDataService.dedicatedMode) {
              userId = (_b = this.sharedDataService.dedicatedModeUserDetail) === null || _b === void 0 ? void 0 : _b.userId;
            }

            this.apiService.getUserTotalHAVExposureForToday(userId).subscribe(function (response) {
              if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this3.currentExposure = _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].formattedNumberToNumber(response.Result);
              }
            });
          }
        }, {
          key: "getTypeList",
          value: function getTypeList(manufacturer, sectionIndex, questionIndex) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var sections, question;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      sections = this.formBuilderDetail.sections;
                      question = (_a = sections[sectionIndex]) === null || _a === void 0 ? void 0 : _a.questions[questionIndex];
                      this.setupDynamicChoiceListForSection(sectionIndex, _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Type, []);
                      this.setupDynamicChoiceListForSection(sectionIndex, _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Model, []);
                      this.utilService.presentLoadingWithOptions();
                      this.apiService.getTypeList(this.companyId, manufacturer).subscribe(function (response) {
                        _this4.utilService.hideLoading();

                        var toolTypes = response.Result;

                        _this4.setupDynamicChoiceListForSection(sectionIndex, _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Type, toolTypes);

                        _this4.setupDynamicChoiceListForSection(sectionIndex, _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Model, []);
                      }, function (error) {
                        _this4.utilService.hideLoading();
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getModelList",
          value: function getModelList(type, sectionIndex, questionIndex) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var sections, question;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      sections = this.formBuilderDetail.sections;
                      question = (_a = sections[sectionIndex]) === null || _a === void 0 ? void 0 : _a.questions[questionIndex];
                      this.setupDynamicChoiceListForSection(sectionIndex, _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Model, []);
                      this.utilService.presentLoadingWithOptions();
                      this.apiService.getModelList(this.companyId, type).subscribe(function (response) {
                        _this5.utilService.hideLoading();

                        var toolModels = response.Result;
                        _this5.toolModels = toolModels;

                        _this5.setupDynamicChoiceListForSection(sectionIndex, _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Model, toolModels);
                      }, function (error) {
                        _this5.utilService.hideLoading();
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dropDownChange",
          value: function dropDownChange(section, question, sectionIndex, questionIndex) {
            var controlName = _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].FCUniqueName(section, question);

            var control = this.formGroup.controls[controlName];

            if (question.questionDisplayOrder === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Manufacturer) {
              this.getTypeList(control.value, sectionIndex, questionIndex);
            } else if (question.questionDisplayOrder === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].HavFormFieldOrder.Type) {
              this.getModelList(control.value, sectionIndex, questionIndex);
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.handleOrientation();
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            if (this.sharedDataService.dedicatedMode) {
              if (!_services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].isLocalHost()) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                this.screenOrientationSubscribe.unsubscribe();
              }
            }
          }
        }, {
          key: "isError",
          value: function isError(section, question) {
            var controlName = _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].FCUniqueName(section, question);

            return this.isSubmitted && !this.formGroup.controls[controlName].valid;
          }
        }, {
          key: "calculatePointsPerHour",
          value: function calculatePointsPerHour() {
            var toolModel = this.formGroup.controls[this.modelControlName];

            if (toolModel) {
              var model;

              if (this.toolModels) {
                this.toolModels.map(function (item) {
                  if (item.havModelID === toolModel.value) {
                    model = item;
                    return;
                  }
                });
              }

              var vibrationValue = model ? _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].formattedNumberToNumber(model.vibrationValue) : 0;
              var kFactor = model ? _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].formattedNumberToNumber(model.kFactor) : 0;
              var vibrationMagnitude = vibrationValue + kFactor;
              return vibrationMagnitude * (vibrationMagnitude * 2);
            }

            return 0;
          }
        }, {
          key: "calculateExposure",
          value: function calculateExposure() {
            var exposure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var plannedTime = this.formGroup.controls[this.plannedTimeControlName];

            if (plannedTime) {
              var plannedTimeOfUse = plannedTime.value ? _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].formattedNumberToNumber(plannedTime.value) : 0;
              var pointsPerHour = this.calculatePointsPerHour();
              var calcualtedExposure = plannedTimeOfUse / 60 * pointsPerHour;
              return Math.ceil(calcualtedExposure + exposure);
            }

            return Math.ceil(exposure);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_5__["ExitConfirmationPage"],
                        swipeToClose: false,
                        showBackdrop: false,
                        backdropDismiss: false,
                        animated: true,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                      modal.onWillDismiss().then(function (_ref) {
                        var data = _ref.data;

                        if (data) {
                          _this6.onBack();
                        }
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onBack",
          value: function onBack() {
            if (this.sharedDataService.viewFormFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ViewFormForType.Induction) {
              this.navCtrl.navigateBack("/checkinout-confirm");
            } else {
              this.navCtrl.back();
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            this.isSubmitted = true;
            this.errorMessage = "";
            var havExposure = {
              vibrationMagnitude: 0,
              pointsPerHour: 0,
              exposurePoints: 0,
              hAVExposureId: 0,
              initialExposure: 0,
              totalExposure: 0
            };

            if (this.formGroup.valid) {
              var plannedTimeControl = this.formGroup.controls[this.plannedTimeControlName];

              if (plannedTimeControl.value > 0) {
                var toolModel = this.formGroup.controls[this.modelControlName];

                if (toolModel) {
                  var model;

                  if (this.toolModels) {
                    this.toolModels.map(function (item) {
                      if (item.havModelID === toolModel.value) {
                        model = item;
                        return;
                      }
                    });
                  }

                  havExposure.vibrationMagnitude = model ? _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].formattedNumberToNumber(model.vibrationValue) : 0;
                  havExposure.pointsPerHour = this.calculatePointsPerHour();
                  havExposure.exposurePoints = this.calculateExposure();
                  havExposure.hAVExposureId = 0;
                  havExposure.initialExposure = this.currentExposure;
                  havExposure.totalExposure = this.calculateExposure(this.currentExposure);
                }
              } else {
                this.errorMessage = '"Planned time of use" should be greater then zero.';
                return;
              }
            }

            this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, function (status, result) {
              if (status) {} else {
                _this7.errorMessage = result;
              }
            }, havExposure);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }]);

        return FormHavPage;
      }();

      FormHavPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_9__["ObservablesService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_10__["SharedDataService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_14__["AccountService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"]
        }];
      };

      FormHavPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-hav",
        template: _raw_loader_form_hav_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_hav_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormHavPage);
      /***/
    },

    /***/
    "cUWu":
    /*!***************************************************!*\
      !*** ./src/app/pages/form-hav/form-hav.module.ts ***!
      \***************************************************/

    /*! exports provided: FormHavPageModule */

    /***/
    function cUWu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormHavPageModule", function () {
        return FormHavPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _form_hav_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-hav-routing.module */
      "mN8a");
      /* harmony import */


      var _form_hav_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form-hav.page */
      "D3So");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var FormHavPageModule = function FormHavPageModule() {
        _classCallCheck(this, FormHavPageModule);
      };

      FormHavPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _form_hav_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormHavPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_form_hav_page__WEBPACK_IMPORTED_MODULE_6__["FormHavPage"]]
      })], FormHavPageModule);
      /***/
    },

    /***/
    "mN8a":
    /*!***********************************************************!*\
      !*** ./src/app/pages/form-hav/form-hav-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: FormHavPageRoutingModule */

    /***/
    function mN8a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormHavPageRoutingModule", function () {
        return FormHavPageRoutingModule;
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


      var _form_hav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form-hav.page */
      "D3So");

      var routes = [{
        path: '',
        component: _form_hav_page__WEBPACK_IMPORTED_MODULE_3__["FormHavPage"]
      }];

      var FormHavPageRoutingModule = function FormHavPageRoutingModule() {
        _classCallCheck(this, FormHavPageRoutingModule);
      };

      FormHavPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FormHavPageRoutingModule);
      /***/
    },

    /***/
    "r+aF":
    /*!***************************************************!*\
      !*** ./src/app/pages/form-hav/form-hav.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function rAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode app-exposure::ng-deep .exposure {\n  background-color: #ffffff;\n  flex-direction: row;\n  padding: 10px 20px;\n  border-radius: 12px;\n}\nion-content.dedicated-mode app-exposure::ng-deep .exposure ion-label {\n  flex: 1;\n  text-align: left;\n}\nion-content.dedicated-mode app-exposure::ng-deep .exposure.top {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content.dedicated-mode app-exposure::ng-deep .exposure.bottom {\n  background-color: #F6F9FB;\n  border-radius: 0;\n  margin: 12px 1px 0;\n}\nion-content.dedicated-mode app-exposure::ng-deep .exposure .points {\n  margin: 8px;\n}\nion-content.dedicated-mode ion-list {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n}\nion-content.dedicated-mode .text-bottom-msg {\n  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.3);\n  margin-top: 40px;\n  color: #171538;\n  padding: 0 16px;\n  background-color: #ffffff;\n}\nion-content.dedicated-mode .text-bottom-msg ion-label {\n  padding: 16px 0;\n}\nion-content.dedicated-mode .text-bottom-msg .action-btn {\n  width: 200px;\n  margin: 0;\n  margin-left: 16px;\n}\nion-content .hr-line-full {\n  width: 100%;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\nion-content app-exposure::ng-deep .points.total {\n  background: #E74731;\n  font-family: SF Pro Display;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n}\nion-content .text-bottom-msg {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #171538;\n  padding: 16px 32px;\n}\nion-content .action-btn {\n  width: 100%;\n  margin: 0;\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n}\nion-content app-number-integer-field::ng-deep .input-item ion-input {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0taGF2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHFCQUFBO0FBRko7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRk47QUFJTTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQUZSO0FBS007RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTU07RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9NO0VBQ0UsV0FBQTtBQUxSO0FBU0k7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUE47QUFVSTtFQUNFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBVE47QUFXTTtFQUNFLGVBQUE7QUFUUjtBQVlNO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQVZSO0FBZUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBYko7QUFrQk07RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFoQlI7QUFxQkU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQW5CSjtBQXNCRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcEJKO0FBeUJNO0VBQ0UsWUFBQTtBQXZCUiIsImZpbGUiOiJmb3JtLWhhdi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFkZGluZ0hvcml6b250YWw6IDIzcHg7XG5cbmlvbi1jb250ZW50IHtcbiAgJi5kZWRpY2F0ZWQtbW9kZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjZGOUZCO1xuXG4gICAgYXBwLWV4cG9zdXJlOjpuZy1kZWVwIC5leHBvc3VyZXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgJi50b3Age1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAmLmJvdHRvbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY5RkI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG1hcmdpbjogMTJweCAxcHggMDtcbiAgICAgIH1cblxuICAgICAgLnBvaW50cyB7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgfVxuXG4gICAgLnRleHQtYm90dG9tLW1zZyB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaHItbGluZS1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgfVxuXG4gIGFwcC1leHBvc3VyZTo6bmctZGVlcCB7XG4gICAgLnBvaW50cyB7XG4gICAgICAmLnRvdGFsIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0U3NDczMTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNGIFBybyBEaXNwbGF5O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGV4dC1ib3R0b20tbXNnIHtcbiAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgfVxuXG4gIC5hY3Rpb24tYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICBhcHAtbnVtYmVyLWludGVnZXItZmllbGQ6Om5nLWRlZXAge1xuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-form-hav-form-hav-module-es5.js.map