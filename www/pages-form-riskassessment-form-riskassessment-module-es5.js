(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-riskassessment-form-riskassessment-module"], {
    /***/
    "9x/1":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/form-riskassessment/form-riskassessment.module.ts ***!
      \*************************************************************************/

    /*! exports provided: FormRiskassessmentPageModule */

    /***/
    function x1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormRiskassessmentPageModule", function () {
        return FormRiskassessmentPageModule;
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


      var _form_riskassessment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-riskassessment-routing.module */
      "ISNC");
      /* harmony import */


      var _form_riskassessment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form-riskassessment.page */
      "RnVh");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var FormRiskassessmentPageModule = function FormRiskassessmentPageModule() {
        _classCallCheck(this, FormRiskassessmentPageModule);
      };

      FormRiskassessmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _form_riskassessment_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormRiskassessmentPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_form_riskassessment_page__WEBPACK_IMPORTED_MODULE_6__["FormRiskassessmentPage"]]
      })], FormRiskassessmentPageModule);
      /***/
    },

    /***/
    "ISNC":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/form-riskassessment/form-riskassessment-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: FormRiskassessmentPageRoutingModule */

    /***/
    function ISNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormRiskassessmentPageRoutingModule", function () {
        return FormRiskassessmentPageRoutingModule;
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


      var _form_riskassessment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form-riskassessment.page */
      "RnVh");

      var routes = [{
        path: '',
        component: _form_riskassessment_page__WEBPACK_IMPORTED_MODULE_3__["FormRiskassessmentPage"]
      }];

      var FormRiskassessmentPageRoutingModule = function FormRiskassessmentPageRoutingModule() {
        _classCallCheck(this, FormRiskassessmentPageRoutingModule);
      };

      FormRiskassessmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FormRiskassessmentPageRoutingModule);
      /***/
    },

    /***/
    "RnVh":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/form-riskassessment/form-riskassessment.page.ts ***!
      \***********************************************************************/

    /*! exports provided: FormRiskassessmentPage */

    /***/
    function RnVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormRiskassessmentPage", function () {
        return FormRiskassessmentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_riskassessment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-riskassessment.page.html */
      "bSGh");
      /* harmony import */


      var _form_riskassessment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-riskassessment.page.scss */
      "nzzo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/demo-data.service */
      "vH+u");
      /* harmony import */


      var _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modals/exit-confirmation/exit-confirmation.page */
      "GR7D");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");

      var FormRiskassessmentPage = /*#__PURE__*/function () {
        function FormRiskassessmentPage(navCtrl, modalController, route, filehandlerService, observablesService, sharedDataService, screenOrientation, apiService, utilService, ngZone, accountService, photoService) {
          var _this = this;

          _classCallCheck(this, FormRiskassessmentPage);

          var _a, _b;

          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.filehandlerService = filehandlerService;
          this.observablesService = observablesService;
          this.sharedDataService = sharedDataService;
          this.screenOrientation = screenOrientation;
          this.apiService = apiService;
          this.utilService = utilService;
          this.ngZone = ngZone;
          this.accountService = accountService;
          this.photoService = photoService;
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"];
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"];
          this.errorMessage = '';
          this.isSubmitted = false;
          this.list = _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__["DemoDataService"].riskAssesmentQuestions.clone();
          this.ionSelectInterface = 'popover';
          this.userGroupTypes = [{
            name: 'Users',
            id: 'users'
          }, {
            name: 'Groups',
            id: 'groups'
          }];
          this.isShowOritationPortrait = false; // formBuilderDetail = JSON.parse('{"formId":131,"title":"Risk Assessment Form","description":null,"formVersionId":197,"formVersionNo":3,"isDraft":false,"formTypeID":2,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":208,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":true,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":311,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Risk Assessmentssss"}],"questions":[],"tasks":[{"taskId":29,"isRequired":true,"shouldShowTaskTemplate":false,"allowInstructionOrNote":true,"shouldShowOptionalComment":false,"allowAttachment":true,"displayOrder":1,"sectionID":208,"selectedTaskTemplateID":null,"taskTranslations":[{"taskTranslationId":32,"taskTranslationLanguageId":35,"taskTranslationTitle":"Task One","taskTranslationInstructionOrNote":"Test Note for task one"}],"taskAttachments":[{"questionAttachmentId":0,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"demo51.png","fileType":null,"fileExtension":"png","folderName":"Choose","questionID":29,"documentID":125,"folderID":null}],"hazards":[{"hazardId":34,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":1,"taskID":29,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":38,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Hazard One Test"}],"controlMeasures":[{"controlMeasureId":38,"shouldShowControlMeasureTemplate":false,"displayOrder":1,"controlMeasureTranslations":[{"controlMeasureTranslationId":44,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Wight measure"}]},{"controlMeasureId":39,"shouldShowControlMeasureTemplate":false,"displayOrder":2,"controlMeasureTranslations":[{"controlMeasureTranslationId":45,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Height measure"}]},{"controlMeasureId":40,"shouldShowControlMeasureTemplate":false,"displayOrder":3,"controlMeasureTranslations":[{"controlMeasureTranslationId":46,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Width measure"}]}]},{"hazardId":35,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":2,"taskID":29,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":39,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Hazard Two Test"}],"controlMeasures":[]}]},{"taskId":30,"isRequired":false,"shouldShowTaskTemplate":false,"allowInstructionOrNote":false,"shouldShowOptionalComment":false,"allowAttachment":false,"displayOrder":2,"sectionID":208,"selectedTaskTemplateID":null,"taskTranslations":[{"taskTranslationId":33,"taskTranslationLanguageId":35,"taskTranslationTitle":"Task Two","taskTranslationInstructionOrNote":""}],"taskAttachments":[],"hazards":[{"hazardId":36,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":1,"taskID":30,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":40,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Task two hazard one"}],"controlMeasures":[{"controlMeasureId":41,"shouldShowControlMeasureTemplate":false,"displayOrder":1,"controlMeasureTranslations":[{"controlMeasureTranslationId":47,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Level measure"}]},{"controlMeasureId":42,"shouldShowControlMeasureTemplate":false,"displayOrder":2,"controlMeasureTranslations":[{"controlMeasureTranslationId":48,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Pressure measure"}]}]}]}]},{"sectionId":209,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":312,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Two Custom Questions"}],"questions":[{"questionId":475,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":1,"sectionID":209,"questionTranslations":[{"questionTranslationId":553,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single Line Text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":476,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":true,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":209,"questionTranslations":[{"questionTranslationId":554,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiple Choice Question","questionTranslationInstructionOrNote":"Choose multiple answers","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":527,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"turquoise","answerChoiceAttributeScoreOrWeight":3,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":646,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]},{"answerChoiceAttributeId":528,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"red","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":647,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]},{"answerChoiceAttributeId":529,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"blue","answerChoiceAttributeScoreOrWeight":3,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":648,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Wrong"}]},{"answerChoiceAttributeId":530,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"blue","answerChoiceAttributeScoreOrWeight":2,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":649,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Correct"}]}],"questionLogics":[],"questionAttachments":[{"questionAttachmentId":36,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"videoplayback.mp4","fileType":null,"fileExtension":"mp4","folderName":"Choose","questionID":476,"documentID":228,"folderID":null}]},{"questionId":477,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":3,"sectionID":209,"questionTranslations":[{"questionTranslationId":555,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Integer","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":478,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":4,"sectionID":209,"questionTranslations":[{"questionTranslationId":556,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number Field Decimal","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');

          this.formBuilderDetail = JSON.parse('{"formId":131,"title":"Risk Assessment Form","description":null,"formVersionId":197,"formVersionNo":3,"isDraft":false,"formTypeID":2,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":208,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":true,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":311,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Risk Assessmentssss"}],"questions":[],"tasks":[{"taskId":29,"isRequired":true,"shouldShowTaskTemplate":false,"allowInstructionOrNote":true,"shouldShowOptionalComment":false,"allowAttachment":true,"displayOrder":1,"sectionID":208,"selectedTaskTemplateID":null,"taskTranslations":[{"taskTranslationId":32,"taskTranslationLanguageId":35,"taskTranslationTitle":"Task One","taskTranslationInstructionOrNote":"Test Note for task one"}],"taskAttachments":[{"questionAttachmentId":0,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"demo51.png","fileType":null,"fileExtension":"png","folderName":"Choose","questionID":29,"documentID":125,"folderID":null}],"hazards":[{"hazardId":34,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":1,"taskID":29,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":38,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Hazard One Test"}],"controlMeasures":[{"controlMeasureId":38,"shouldShowControlMeasureTemplate":false,"displayOrder":1,"controlMeasureTranslations":[{"controlMeasureTranslationId":44,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Wight measure"}]},{"controlMeasureId":39,"shouldShowControlMeasureTemplate":false,"displayOrder":2,"controlMeasureTranslations":[{"controlMeasureTranslationId":45,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Height measure"}]},{"controlMeasureId":40,"shouldShowControlMeasureTemplate":false,"displayOrder":3,"controlMeasureTranslations":[{"controlMeasureTranslationId":46,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Width measure"}]}]},{"hazardId":35,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":2,"taskID":29,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":39,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Hazard Two Test"}],"controlMeasures":[]}]},{"taskId":30,"isRequired":false,"shouldShowTaskTemplate":false,"allowInstructionOrNote":false,"shouldShowOptionalComment":false,"allowAttachment":false,"displayOrder":2,"sectionID":208,"selectedTaskTemplateID":null,"taskTranslations":[{"taskTranslationId":33,"taskTranslationLanguageId":35,"taskTranslationTitle":"Task Two","taskTranslationInstructionOrNote":""}],"taskAttachments":[],"hazards":[{"hazardId":36,"riskRating":null,"residualRiskRating":null,"hasPersonnelExposedNotification":false,"displayOrder":1,"taskID":30,"personnelExposedNotificationID":null,"personnelExposedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"hazardTranslations":[{"hazardTranslationId":40,"hazardTranslationLanguageId":35,"hazardTranslationTitle":"Task two hazard one"}],"controlMeasures":[{"controlMeasureId":41,"shouldShowControlMeasureTemplate":false,"displayOrder":1,"controlMeasureTranslations":[{"controlMeasureTranslationId":47,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Level measure"}]},{"controlMeasureId":42,"shouldShowControlMeasureTemplate":false,"displayOrder":2,"controlMeasureTranslations":[{"controlMeasureTranslationId":48,"controlMeasureTranslationLanguageId":35,"controlMeasureTranslationTitle":"Pressure measure"}]}]}]}]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');
          this.questionElementIds = [];
          this.currentQuestionIndex = 0;

          this.putRiskRatingInVariable = function () {
            _this.riskRatings = _this.sharedDataService.riskRatingsList.clone();
            _this.residualRiskRatings = _this.sharedDataService.riskRatingsList.clone();
          };

          this.handleOrientation = function () {
            if (_this.sharedDataService.dedicatedMode) {
              if (_this.screenOrientation.type.includes('landscape')) {
                _this.screenOrientation.unlock();

                _this.isShowOritationPortrait = true;
              } else {
                if (!_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].isLocalHost()) {
                  _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                }
              }

              _this.screenOrientationSubscribe = _this.screenOrientation.onChange().subscribe(function () {
                _this.ngZone.run(function () {
                  if (_this.screenOrientation.type.includes('portrait')) {
                    if (!_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].isLocalHost()) {
                      _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                    }

                    _this.isShowOritationPortrait = false;
                  }

                  if (_this.screenOrientation.type.includes('landscape')) {
                    _this.isShowOritationPortrait = true;
                  }
                });
              });
            }
          };

          this.openImageAnnotation = function (question, photo) {
            _this.sharedDataService.isOpenImageAnnotation = true;

            _this.sharedDataService.setAnnotationImage(photo);

            _this.sharedDataService.onAnnotationImageDone = function (image) {
              question.answer = image;
            };

            _this.navCtrl.navigateForward(['/image-annotation']);
          };

          this.onScrollEnd = function (event) {
            if (_this.scrollingDetail) {
              var scrollTop = _this.scrollingDetail.scrollTop;

              if (scrollTop === 0) {
                _this.currentQuestionIndex = 0;
              } else {
                _this.questionElementIds.map(function (elementId, key) {
                  var y = document.getElementById(elementId).offsetTop;

                  if (scrollTop >= y) {
                    _this.currentQuestionIndex = key;
                    return;
                  }
                });
              }
            }
          };

          this.onScroll = function (event) {
            _this.scrollingDetail = event.detail;
          };

          this.scrollToQuestion = function () {
            var elementId = _this.questionElementIds[_this.currentQuestionIndex];
            var y = document.getElementById(elementId).offsetTop;

            _this.content.scrollToPoint(0, y, 500);
          };

          this.user = accountService.userValue;

          if (this.sharedDataService.dedicatedMode) {
            this.companyId = (_a = this.sharedDataService.dedicatedModeDeviceDetailData) === null || _a === void 0 ? void 0 : _a.companyID;
          } else {
            this.companyId = (_b = this.user) === null || _b === void 0 ? void 0 : _b.companyID;
          }

          if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
          }

          if (sharedDataService.riskRatingsList && sharedDataService.riskRatingsList.length > 0) {
            this.putRiskRatingInVariable();
          }

          var sections = this.formBuilderDetail.sections;

          if (sections) {
            sections.map(function (section, sectionIndex) {
              if (section.isRiskAssessmentSection) {
                var tasks = section.tasks;
                tasks.map(function (task) {
                  var hazards = task.hazards;
                  hazards.map(function (hazard) {
                    hazard.addedUsers = {};
                    hazard.addedGroups = {};
                    hazard.riskRating = null;
                    hazard.residualRiskRating = null;
                    hazard.selectedUserGroupType = _this.userGroupTypes[0];
                    hazard.selectedUser = null;
                    hazard.selectedGroup = null;
                    hazard.memberOfTheWorkForce = false;
                    hazard.memberOfThePublic = false;
                    hazard.memberOfThePublicDescription = '';
                  });
                });
              }
            });
          } // Add form controls for each type of fields


          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({});

          this.utilService.questionElementIdsUpdate = function (questionElementIds) {
            _this.questionElementIds = questionElementIds;
          };

          this.utilService.addFormControlsForVisibleFields(sections, this.formGroup); // -- End -- Add form controls for each type of fields
        }

        _createClass(FormRiskassessmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCompanyUserList();
            this.getRiskRatingOptionList();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.sharedDataService.isOpenImageAnnotation = false;
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
              if (!this.sharedDataService.isOpenImageAnnotation) {
                if (!_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"].isLocalHost()) {
                  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                  this.screenOrientationSubscribe.unsubscribe();
                }
              }
            }
          }
        }, {
          key: "getCompanyUserList",
          value: function getCompanyUserList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.utilService.presentLoadingWithOptions();
                      this.apiService.getCompanyUserList(this.companyId).subscribe(function (response) {
                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          _this2.users = response.Result;
                        }

                        _this2.utilService.hideLoading();

                        _this2.getCompanyUserGroupList();
                      }, function (error) {
                        _this2.utilService.hideLoading();

                        _this2.getCompanyUserGroupList();
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getRiskRatingOptionList",
          value: function getRiskRatingOptionList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.sharedDataService.riskRatingsList) {
                        this.utilService.presentLoadingWithOptions();
                      }

                      this.apiService.getRiskRatingOptionList().subscribe(function (response) {
                        _this3.utilService.hideLoading();

                        if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                          if (response.Result && response.Result.length > 0) {
                            _this3.sharedDataService.riskRatingsList = response.Result;

                            _this3.putRiskRatingInVariable();
                          }
                        }
                      }, function (error) {
                        _this3.utilService.hideLoading();
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCompanyUserGroupList",
          value: function getCompanyUserGroupList() {
            var _this4 = this;

            this.utilService.presentLoadingWithOptions();
            this.apiService.getCompanyUserGroupList(this.companyId).subscribe(function (response) {
              if (response.StatusCode === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ApiResponseCode.RequestSuccessful) {
                _this4.groups = response.Result;
              }

              _this4.utilService.hideLoading();
            }, function (error) {
              _this4.utilService.hideLoading();
            });
          }
        }, {
          key: "openFile",
          value: function openFile(taskItem) {
            this.filehandlerService.openFile();
          }
        }, {
          key: "addImage",
          value: function addImage(question) {
            var _this5 = this;

            this.photoService.choosePhotoOption(function (photo) {
              _this5.openImageAnnotation(question, photo);
            });
          }
        }, {
          key: "onClose",
          value: function onClose() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ExitConfirmationPage"],
                        swipeToClose: false,
                        showBackdrop: false,
                        backdropDismiss: false,
                        animated: true,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
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
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onBack",
          value: function onBack() {
            if (this.sharedDataService.viewFormFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].ViewFormForType.Induction) {
              this.navCtrl.navigateBack('/checkinout-confirm');
            } else {
              this.navCtrl.back();
            }
          } // Navigate to question

        }, {
          key: "previous",
          value: function previous() {
            if (this.currentQuestionIndex > 0) {
              this.currentQuestionIndex--;
              this.scrollToQuestion();
            }
          }
        }, {
          key: "next",
          value: function next() {
            if (this.currentQuestionIndex < this.questionElementIds.length - 1) {
              this.currentQuestionIndex++;
              this.scrollToQuestion();
            }
          } // -- End -- Navigate to question

        }, {
          key: "isValid",
          value: function isValid(index, question) {
            var isValid = true;

            if (this.isSubmitted && question.questionIsRequired) {
              isValid = false;
              var answer = question.answer;

              switch (question.selectedAnswerTypeId) {
                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.DateField:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.TimeField:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.DateTimeField:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.PhotoVideoUpload:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.SingleChoiceSet:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.SingleLineText:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.MultiLineText:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.NumberFieldInteger:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.NumberFieldDecimal:
                  isValid = answer;
                  break;

                case _services_enum_service__WEBPACK_IMPORTED_MODULE_8__["EnumService"].CustomAnswerType.MultipleChoiceSet:
                  question.answerChoiceAttributes.map(function (item) {
                    if (item.checked) {
                      isValid = item.checked;
                      return;
                    }
                  });
                  break;

                default:
                  isValid = true;
              }
            }

            return isValid;
          }
        }, {
          key: "addUser",
          value: function addUser(section) {
            if (!section.addedUsers) {
              section.addedUsers = {};
            }

            this.users.map(function (item) {
              if (item.userId === section.selectedUser) {
                section.addedUsers[section.selectedUser] = item;
                return;
              }
            });
            section.selectedUser = null;
          }
        }, {
          key: "addGroup",
          value: function addGroup(section) {
            if (!section.addedGroups) {
              section.addedGroups = {};
            }

            this.groups.map(function (item) {
              if (item.userGroupID === section.selectedGroup) {
                section.addedGroups[section.selectedGroup] = item;
                return;
              }
            });
            section.selectedGroup = null;
          }
        }, {
          key: "removeUser",
          value: function removeUser(section, id) {
            delete section.addedUsers[id];
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(section, id) {
            delete section.addedGroups[id];
          } // Check required field valid or not

        }, {
          key: "isTaskValid",
          value: function isTaskValid(task) {
            var _this7 = this;

            var isValid = true;

            if (this.isSubmitted && task.isRequired) {
              var hazards = task.hazards;
              hazards.map(function (hazard) {
                if (!_this7.isRiskRatingValid(task, hazard.riskRating) || !_this7.isRiskRatingValid(task, hazard.residualRiskRating) || !_this7.isMemberOfTheWorkForceValid(task, hazard) || !_this7.isMemberOfTheWorkForceValid(task, hazard)) {
                  isValid = false;
                  return;
                }
              });
            }

            return isValid;
          }
        }, {
          key: "isRiskRatingValid",
          value: function isRiskRatingValid(task, riskRating) {
            if (this.isSubmitted && task.isRequired && !riskRating) {
              return false;
            }

            return true;
          }
        }, {
          key: "isMemberOfTheWorkForceValid",
          value: function isMemberOfTheWorkForceValid(task, hazard) {
            if (this.isSubmitted && task.isRequired && hazard.memberOfTheWorkForce && Object.keys(hazard.addedUsers).length === 0 && Object.keys(hazard.addedGroups).length === 0) {
              return false;
            }

            return true;
          }
        }, {
          key: "isMemberOfThePublicValid",
          value: function isMemberOfThePublicValid(task, hazard) {
            if (this.isSubmitted && task.isRequired && hazard.memberOfThePublic && !hazard.memberOfThePublicDescription) {
              return false;
            }

            return true;
          } // --- End ---

        }, {
          key: "onContinue",
          value: function onContinue() {
            var _this8 = this;

            this.isSubmitted = true;
            this.errorMessage = '';
            this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, function (status, result) {
              if (status) {} else {
                _this8.errorMessage = result;
              }
            });
          }
        }]);

        return FormRiskassessmentPage;
      }();

      FormRiskassessmentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_10__["FilehandlerService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_11__["ObservablesService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_12__["SharedDataService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__["ScreenOrientation"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_16__["AccountService"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_17__["PhotoService"]
        }];
      };

      FormRiskassessmentPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]]
        }]
      };
      FormRiskassessmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-riskassessment',
        template: _raw_loader_form_riskassessment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_riskassessment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormRiskassessmentPage);
      /***/
    },

    /***/
    "bSGh":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-riskassessment/form-riskassessment.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bSGh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-portrait-orientation\n  *ngIf=\"isShowOritationPortrait;else formView\"\n  (close)=\"isShowOritationPortrait=false\"\n></app-portrait-orientation>\n\n<ng-template #formView>\n  <ion-header mode=\"ios\" *ngIf=\"formBuilderDetail\">\n    <ng-container *ngIf=\"sharedDataService.dedicatedMode; else personalMode\">\n      <app-modal-header-dm\n        [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n        (closeModal)=\"onClose()\"\n        [modalSubTitle]=\"formBuilderDetail?.title\"\n      ></app-modal-header-dm>\n    </ng-container>\n\n    <ng-template #personalMode>\n      <app-modal-header\n        [modalTitle]=\"formBuilderDetail?.title\"\n        (closeModal)=\"onClose()\"\n      ></app-modal-header>\n\n      <app-next-prev-toolbar\n        [isError]=\"(errorMessage && errorMessage.length>0)\"\n        [currentCount]=\"currentQuestionIndex\"\n        [totalCount]=\"questionElementIds.length\"\n        (next)=\"next()\"\n        (previous)=\"previous()\"\n      ></app-next-prev-toolbar>\n    </ng-template>\n\n    <app-warning-component\n      *ngIf=\"errorMessage\"\n      [message]=\"errorMessage\"\n    ></app-warning-component>\n  </ion-header>\n\n  <ion-content\n    #content\n    [scrollEvents]=\"true\"\n    (ionScrollEnd)=\"onScrollEnd($event)\"\n    (ionScroll)=\"onScroll($event)\"\n    mode=\"ios\"\n    [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\"\n  >\n    <div class=\"content-container\">\n      <ion-list lines=\"none\">\n        <ng-container\n          *ngFor=\"let section of formBuilderDetail?.sections; let sectionIndex=index\"\n        >\n          <ng-container *ngIf=\"utilService.shouldShowSection(section)\">\n            <app-section-title\n              [title]=\"UtilService.findObj(section.sectionTranslations, 'sectionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).sectionTranslationTitle\"\n            >\n            </app-section-title>\n\n            <!--  Risk Assessment Section-->\n            <ng-container\n              *ngIf=\"section.isRiskAssessmentSection; else customQuestions\"\n            >\n              <ng-container\n                *ngFor=\"let task of section.tasks; let questionIndex=index\"\n              >\n                <div\n                  class=\"list-item-container\"\n                  *ngIf=\"utilService.shouldShowQuestion(task)\"\n                  [ngClass]=\"{error:!isTaskValid(task)}\"\n                  [id]=\"UtilService.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, task.taskId)\"\n                >\n                  <app-question-list-header\n                    [questionTitle]=\" UtilService.findObj(task.taskTranslations, 'taskTranslationLanguageId', sharedDataService.getLanguageIdForForm()).taskTranslationTitle\"\n                    [note]=\"UtilService.findObj(task.taskTranslations, 'taskTranslationLanguageId', sharedDataService.getLanguageIdForForm()).taskTranslationInstructionOrNote\"\n                    [required]=\"task.isRequired\"\n                    [attachments]=\"task.taskAttachments\"\n                    [attachmentIcon]=\"task.taskAttachmentIconPath\"\n                    [qNo]=\"questionElementIds.indexOf(UtilService.HtmlElementIdUq(sectionIndex, questionIndex, section.sectionId, task.taskId))+1\"\n                  ></app-question-list-header>\n\n                  <div\n                    class=\"risk-assesment-component\"\n                    *ngFor=\"let hazard of task.hazards\"\n                  >\n                    <ion-item lines=\"full\">\n                      <ion-icon\n                        slot=\"start\"\n                        src=\"./assets/icon/thunder.svg\"\n                      ></ion-icon>\n                      <ion-label\n                        >{{UtilService.findObj(hazard.hazardTranslations,\n                        'hazardTranslationLanguageId',\n                        sharedDataService.getLanguageIdForForm()).hazardTranslationTitle}}</ion-label\n                      >\n                    </ion-item>\n\n                    <ion-item class=\"drop-down-item\" lines=\"none\">\n                      <ion-label position=\"fixed\"> Risk Rating </ion-label>\n                      <ion-select\n                        [(ngModel)]=\"hazard.riskRating\"\n                        placeholder=\"Choose\"\n                        [ngClass]=\"{error:!isRiskRatingValid(task, hazard.riskRating)}\"\n                        [interface]=\"ionSelectInterface\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let item of riskRatings\"\n                          [class]=\"'risk-rating-'+item.riskRatingOptionId\"\n                          [value]=\"item.riskRatingOptionId\"\n                          >{{item.riskRatingOptionTitle}}</ion-select-option\n                        >\n                      </ion-select>\n                    </ion-item>\n\n                    <div class=\"hr-line\" style=\"margin-top: 8px\"></div>\n\n                    <div class=\"options\" *ngIf=\"hazard.controlMeasures\">\n                      <ion-item\n                        *ngFor=\"let controlMeasure of hazard.controlMeasures\"\n                      >\n                        <ion-label\n                          >{{UtilService.findObj(controlMeasure.controlMeasureTranslations,\n                          'controlMeasureTranslationLanguageId',\n                          sharedDataService.getLanguageIdForForm()).controlMeasureTranslationTitle}}</ion-label\n                        >\n                        <ion-checkbox\n                          mode=\"md\"\n                          slot=\"start\"\n                          [(ngModel)]=\"controlMeasure.isSelected\"\n                        ></ion-checkbox>\n                      </ion-item>\n                    </div>\n\n                    <div class=\"hr-line\" style=\"margin-top: 8px\"></div>\n\n                    <ion-item class=\"drop-down-item\">\n                      <ion-label position=\"fixed\">\n                        Residual Risk Rating\n                      </ion-label>\n                      <ion-select\n                        [(ngModel)]=\"hazard.residualRiskRating\"\n                        placeholder=\"Choose\"\n                        [ngClass]=\"{error:!isRiskRatingValid(task, hazard.residualRiskRating)}\"\n                        [interface]=\"ionSelectInterface\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let item of residualRiskRatings\"\n                          [class]=\"'risk-rating-'+item.riskRatingOptionId\"\n                          [value]=\"item.riskRatingOptionId\"\n                          >{{item.riskRatingOptionTitle}}</ion-select-option\n                        >\n                      </ion-select>\n                    </ion-item>\n\n                    <div class=\"hr-line\" style=\"margin-top: 8px\"></div>\n\n                    <div class=\"radio-input-view\">\n                      <h2>Persons Exposed</h2>\n\n                      <ion-item>\n                        <ion-label>Members of the Workforce</ion-label>\n                        <ion-checkbox\n                          mode=\"md\"\n                          slot=\"start\"\n                          [(ngModel)]=\"hazard.memberOfTheWorkForce\"\n                        ></ion-checkbox>\n                      </ion-item>\n\n                      <ng-container *ngIf=\"hazard.memberOfTheWorkForce\">\n                        <div class=\"custom-segment-view\">\n                          <ion-button\n                            *ngFor=\"let item of userGroupTypes\"\n                            mode=\"ios\"\n                            fill=\"clear\"\n                            [ngClass]=\"{'active':(hazard.selectedUserGroupType && item.id===hazard.selectedUserGroupType.id)}\"\n                            (click)=\"hazard.selectedUserGroupType=item\"\n                          >\n                            {{item.name}}\n                          </ion-button>\n                        </div>\n\n                        <ion-item\n                          class=\"drop-down-item user-group-add-dropdown item-multiple-inputs\"\n                        >\n                          <ng-container\n                            *ngIf=\"hazard.selectedUserGroupType && hazard.selectedUserGroupType.id==='users'\"\n                          >\n                            <ion-select\n                              [interface]=\"ionSelectInterface\"\n                              placeholder=\"Choose\"\n                              [ngClass]=\"{error:!isMemberOfTheWorkForceValid(task, hazard)}\"\n                              [(ngModel)]=\"hazard.selectedUser\"\n                            >\n                              <ion-select-option\n                                *ngFor=\"let item of users\"\n                                [value]=\"item.userId\"\n                                >{{item.firstAndLastName}}</ion-select-option\n                              >\n                            </ion-select>\n                            <ion-button\n                              slot=\"end\"\n                              size=\"md\"\n                              expand=\"block\"\n                              (click)=\"addUser(hazard)\"\n                            >\n                              Add\n                            </ion-button>\n                          </ng-container>\n\n                          <ng-container\n                            *ngIf=\"hazard.selectedUserGroupType && hazard.selectedUserGroupType.id==='groups'\"\n                          >\n                            <ion-select\n                              [interface]=\"ionSelectInterface\"\n                              placeholder=\"Choose\"\n                              [ngClass]=\"{error:!isMemberOfTheWorkForceValid(task, hazard)}\"\n                              [(ngModel)]=\"hazard.selectedGroup\"\n                            >\n                              <ion-select-option\n                                *ngFor=\"let item of groups\"\n                                [value]=\"item.userGroupID\"\n                                >{{item.groupName}}</ion-select-option\n                              >\n                            </ion-select>\n                            <ion-button\n                              slot=\"end\"\n                              size=\"md\"\n                              expand=\"block\"\n                              (click)=\"addGroup(hazard)\"\n                            >\n                              Add\n                            </ion-button>\n                          </ng-container>\n                        </ion-item>\n\n                        <ng-container *ngIf=\"hazard.addedUsers\">\n                          <ion-item\n                            class=\"user-group-item\"\n                            lines=\"inset\"\n                            *ngFor=\"let item of hazard.addedUsers | keyvalue\"\n                          >\n                            <ion-label>\n                              {{item.value.firstAndLastName}}\n                            </ion-label>\n                            <ion-button\n                              slot=\"end\"\n                              shape=\"round\"\n                              (click)=\"removeUser(hazard, item.key)\"\n                            >\n                              <ion-icon\n                                slot=\"icon-only\"\n                                name=\"close\"\n                              ></ion-icon>\n                            </ion-button>\n                          </ion-item>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"hazard.addedGroups\">\n                          <ion-item\n                            class=\"user-group-item\"\n                            lines=\"inset\"\n                            *ngFor=\"let item of hazard.addedGroups | keyvalue\"\n                          >\n                            <ion-label> {{item.value.groupName}} </ion-label>\n                            <ion-button\n                              slot=\"end\"\n                              shape=\"round\"\n                              (click)=\"removeGroup(hazard, item.key)\"\n                            >\n                              <ion-icon\n                                slot=\"icon-only\"\n                                name=\"close\"\n                              ></ion-icon>\n                            </ion-button>\n                          </ion-item>\n                        </ng-container>\n                      </ng-container>\n\n                      <ion-item>\n                        <ion-label>Members of the Public</ion-label>\n                        <ion-checkbox\n                          mode=\"md\"\n                          slot=\"start\"\n                          [(ngModel)]=\"hazard.memberOfThePublic\"\n                        ></ion-checkbox>\n                      </ion-item>\n\n                      <ng-container *ngIf=\"hazard.memberOfThePublic\">\n                        <ion-textarea\n                          [ngClass]=\"{error:!isMemberOfThePublicValid(task, hazard)}\"\n                          rows=\"5\"\n                          [(ngModel)]=\"hazard.memberOfThePublicDescription\"\n                        ></ion-textarea>\n                      </ng-container>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n\n            <form [formGroup]=\"formGroup\">\n              <ng-template #customQuestions>\n                <app-custom-questions-container\n                  [sectionIndex]=\"sectionIndex\"\n                  [sectionId]=\"section.sectionId\"\n                  [questionElementIds]=\"questionElementIds\"\n                  [questions]=\"section.questions\"\n                  [isSubmitted]=\"isSubmitted\"\n                  [formGroup]=\"formGroup\"\n                  [section]=\"section\"\n                ></app-custom-questions-container>\n              </ng-template>\n            </form>\n          </ng-container>\n        </ng-container>\n\n        <!--        End of form -->\n        <ng-container *ngIf=\"!sharedDataService.dedicatedMode\">\n          <div class=\"hr-line-full ion-margin-top\"></div>\n\n          <ion-item class=\"text-bottom-msg\">\n            <ion-label class=\"ion-text-wrap ion-text-center\">\n              You've reached the end of the form. Please check your answers and\n              sign-off.\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical ion-padding-bottom\">\n            <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\"\n              >Sign-Off</ion-button\n            >\n          </ion-item>\n        </ng-container>\n      </ion-list>\n\n      <div class=\"fill-vertical-space\"></div>\n\n      <!--        End of form -->\n      <ng-container *ngIf=\"sharedDataService.dedicatedMode\">\n        <ion-item class=\"text-bottom-msg\" lines=\"none\">\n          <ion-label class=\"ion-text-wrap ion-padding\">\n            You've reached the end of the form. Please check your answers and\n            sign-off.\n          </ion-label>\n          <ion-button slot=\"end\" class=\"action-btn\" (click)=\"onContinue()\"\n            >Sign-Off</ion-button\n          >\n        </ion-item>\n      </ng-container>\n    </div>\n  </ion-content>\n</ng-template>\n";
      /***/
    },

    /***/
    "nzzo":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/form-riskassessment/form-riskassessment.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function nzzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ::ng-deep app-modal-header ion-title {\n  font-family: IBM Plex Sans !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-size: 14px !important;\n  color: #2A6FDB !important;\n}\n\nion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\n\nion-content.dedicated-mode ion-list {\n  margin-top: 20px;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n}\n\nion-content.dedicated-mode .text-bottom-msg {\n  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.3);\n  margin-top: 40px;\n  color: #171538;\n  padding: 0 16px;\n  background-color: #ffffff;\n}\n\nion-content.dedicated-mode .text-bottom-msg ion-label {\n  padding: 16px 0;\n}\n\nion-content.dedicated-mode .text-bottom-msg .action-btn {\n  width: 200px;\n  margin: 0;\n  margin-left: 16px;\n}\n\nion-content .hr-line {\n  margin: 0px 23px;\n  width: auto;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\n\nion-content .hr-line-full {\n  width: 100%;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\n\nion-content ion-list .list-item-container {\n  padding: 1px 0;\n}\n\nion-content ion-list ion-list-header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-top: 24px;\n  padding-left: 23px;\n  padding-right: 23px;\n  --border-width: 1px 0px 0px;\n  --border-style: solid;\n  --border-color: rgba(74, 144, 226, 0.2);\n}\n\nion-content ion-list ion-list-header h6 {\n  margin: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n\nion-content ion-list ion-list-header .note-item {\n  margin: 0;\n}\n\nion-content ion-list ion-list-header .note-item ion-label {\n  margin-top: 16px;\n  margin-bottom: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  color: #171538;\n}\n\nion-content ion-list ion-list-header .form-item {\n  margin: 0;\n}\n\nion-content ion-list ion-list-header ion-item:last-child {\n  margin-bottom: 12px;\n}\n\nion-content ion-list ion-item {\n  --min-height: 18px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  --border-color: #E8EAF2;\n  margin: 0px 23px;\n}\n\nion-content ion-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n\nion-content ion-list ion-item ion-radio {\n  --border-radius: 12px;\n  --color: #A1A8CA;\n  --color-checked: #A1A8CA;\n  --inner-border-radius: 11px;\n  margin-right: 13px;\n}\n\nion-content ion-list ion-item ion-checkbox {\n  --border-color: #A1A8CA;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius: 2px;\n  --background-checked: #2A6FDB;\n  --background: transparent;\n}\n\nion-content ion-list ion-item.form-item ion-icon {\n  width: 17.31px;\n  height: 20px;\n  margin-right: 12px;\n}\n\nion-content ion-list ion-item.form-item ion-label {\n  font-size: 10px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  color: #2A6FDB;\n}\n\nion-content ion-list ion-item.drop-down-item ion-label {\n  flex: 1;\n}\n\nion-content ion-list ion-item.drop-down-item ion-select {\n  height: 42px;\n  --padding-start: 44px;\n  --padding-end: 8px;\n  --color: #171538;\n  --placeholder-color: #171538;\n  margin-top: 9px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  --background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  background-image: url('arrow-down.svg');\n  background-position: 16px;\n  background-repeat: no-repeat;\n  background-color: #ffffff;\n  min-width: 122px;\n}\n\nion-content ion-list ion-item.drop-down-item ion-select::part(icon) {\n  display: none !important;\n}\n\nion-content ion-list ion-item.user-group-add-dropdown ion-select {\n  min-width: 100%;\n  margin-top: 0;\n}\n\nion-content ion-list ion-item.user-group-add-dropdown ion-button {\n  --background: #2A6FDB;\n  --color: #fff;\n  --border-radius: 3px;\n  height: 42px;\n}\n\nion-content ion-list ion-item.user-group-item {\n  --padding-top: 0px !important;\n  --padding-bottom: 0px !important;\n  --inner-padding-bottom: 8px;\n  --inner-padding-top: 8px;\n}\n\nion-content ion-list ion-item.user-group-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n\nion-content ion-list ion-item.user-group-item ion-button {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: #CACEE1;\n  width: 18px;\n  height: 18px;\n}\n\nion-content ion-list ion-item.user-group-item ion-button ion-icon {\n  font-size: 15px;\n}\n\nion-content ion-list .risk-assesment-component {\n  background-color: #F7FAFE;\n  margin: 20px 23px;\n  padding-bottom: 16px;\n}\n\nion-content ion-list .risk-assesment-component .hr-line {\n  margin: 0px 18px;\n}\n\nion-content ion-list .risk-assesment-component ion-item {\n  --padding-start: 18px;\n  --padding-end: 18px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin: 0;\n  --background: transparent;\n}\n\nion-content ion-list .risk-assesment-component ion-textarea {\n  background-color: #ffffff;\n  padding: 8px;\n  border: 1px solid #CACEE1;\n  border-radius: 3px;\n  margin: 0px 18px;\n  width: auto;\n}\n\nion-content ion-list .risk-assesment-component .radio-input-view {\n  margin-top: 18px;\n}\n\nion-content ion-list .risk-assesment-component .radio-input-view h2 {\n  margin: 0px 18px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\n\nion-content ion-list .risk-assesment-component ion-segment.segment {\n  width: 180px;\n  border-radius: 3px;\n  height: 44px;\n  margin: 0px 18px;\n  border: 1px solid #DCE7EF;\n}\n\nion-content ion-list .risk-assesment-component ion-segment.segment ion-segment-button {\n  --background-checked: #fff;\n  --background: #F6F8FA;\n  --border-radius: 0;\n  --margin-bottom: 0;\n  --margin-end: 0;\n  --margin-start: 0;\n  --margin-top: 0;\n  --border-color: #DCE7EF;\n  --color-checked: #2A6FDB;\n  --color: #777595;\n  --indicator-color: #ffffff;\n}\n\nion-content ion-list .risk-assesment-component ion-segment.segment ion-segment-button.segment-button-checked {\n  border: 1px solid #2A6FDB;\n}\n\nion-content ion-list .options {\n  margin-top: 8px;\n}\n\nion-content ion-list .options ion-item {\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\nion-content ion-list .text-bottom-msg {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #171538;\n  padding: 16px 32px;\n}\n\nion-content ion-list .action-btn {\n  width: 100%;\n  margin: 0;\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\nion-content .custom-segment-view {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #DCE7EF;\n  --border-radius: 0;\n  margin: 0 18px 5px;\n  width: 160px;\n}\n\nion-content .custom-segment-view ion-button {\n  flex: 1;\n  --border-radius: 0;\n  margin: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #777595;\n}\n\nion-content .custom-segment-view ion-button.active {\n  border: 1px solid #2A6FDB;\n  --background: #ffffff;\n  color: #2A6FDB;\n}\n\nion-item {\n  --background: transparent;\n}\n\n.brown-option {\n  --background: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0tcmlza2Fzc2Vzc21lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0UscUNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUhOOztBQVdFO0VBQ0UscUJBQUE7QUFSSjs7QUFVSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVJOOztBQVlJO0VBQ0UseUNBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFYTjs7QUFhTTtFQUNFLGVBQUE7QUFYUjs7QUFjTTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFaUjs7QUFpQkU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFmSjs7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBaEJKOztBQW9CSTtFQUNFLGNBQUE7QUFsQk47O0FBcUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQXhFYztFQXlFZCxtQkF6RWM7RUEwRWQsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0FBbkJOOztBQXFCTTtFQUNFLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbkJSOztBQXNCTTtFQUNFLFNBQUE7QUFwQlI7O0FBc0JRO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFwQlY7O0FBd0JNO0VBQ0UsU0FBQTtBQXRCUjs7QUF5Qk07RUFDRSxtQkFBQTtBQXZCUjs7QUEyQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXpCTjs7QUEyQk07RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBekJSOztBQTRCTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUExQlI7O0FBNkJNO0VBQ0UsdUJBQUE7RUFHQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBN0JSOztBQWtDUTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFoQ1Y7O0FBbUNRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWpDVjs7QUFzQ1E7RUFDRSxPQUFBO0FBcENWOztBQXVDUTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBckNWOztBQXVDVTtFQUNFLHdCQUFBO0FBckNaOztBQTJDUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBekNWOztBQTRDUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQTFDVjs7QUErQ007RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQTdDUjs7QUErQ1E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBN0NWOztBQWdEUTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTlDVjs7QUFnRFU7RUFDRSxlQUFBO0FBOUNaOztBQXNESTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXBETjs7QUFzRE07RUFDRSxnQkFBQTtBQXBEUjs7QUF1RE07RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQXJEUjs7QUF3RE07RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBdERSOztBQTBETTtFQUNFLGdCQUFBO0FBeERSOztBQTBEUTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXhEVjs7QUE2RE07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTNEUjs7QUE2RFE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQTNEVjs7QUE2RFU7RUFDRSx5QkFBQTtBQTNEWjs7QUFpRUk7RUFDRSxlQUFBO0FBL0ROOztBQWlFTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUEvRFI7O0FBbUVJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFqRU47O0FBb0VJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsRU47O0FBdUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXJFSjs7QUF1RUk7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBdEVOOztBQXdFTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBdEVSOztBQTZFQTtFQUNFLHlCQUFBO0FBMUVGOztBQTZFQTtFQUNFLGlCQUFBO0FBMUVGIiwiZmlsZSI6ImZvcm0tcmlza2Fzc2Vzc21lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZGRpbmdIb3Jpem9udGFsOiAyM3B4O1xuXG5pb24taGVhZGVyIHtcbiAgOjpuZy1kZWVwIGFwcC1tb2RhbC1oZWFkZXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucyAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMkE2RkRCICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cblxuaW9uLWNvbnRlbnQge1xuXG4gICYuZGVkaWNhdGVkLW1vZGUge1xuICAgIC0tYmFja2dyb3VuZDogI0Y2RjlGQjtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIH1cblxuXG4gICAgLnRleHQtYm90dG9tLW1zZyB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaHItbGluZSB7XG4gICAgbWFyZ2luOiAwcHggJHBhZGRpbmdIb3Jpem9udGFsO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICB9XG5cbiAgLmhyLWxpbmUtZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgLmxpc3QtaXRlbS1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMXB4IDA7XG4gICAgfVxuXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmdIb3Jpem9udGFsO1xuICAgICAgcGFkZGluZy1yaWdodDogJHBhZGRpbmdIb3Jpem9udGFsO1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweCAwcHggMHB4O1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuXG4gICAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICB9XG5cbiAgICAgIC5ub3RlLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tbWluLWhlaWdodDogMThweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRThFQUYyO1xuICAgICAgbWFyZ2luOiAwcHggJHBhZGRpbmdIb3Jpem9udGFsO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cblxuICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAtLWNvbG9yOiAjQTFBOENBO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNBMUE4Q0E7XG4gICAgICAgIC0taW5uZXItYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgfVxuXG4gICAgICBpb24tY2hlY2tib3gge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI0ExQThDQTtcbiAgICAgICAgLy8tLWJvcmRlci1jb2xvci1jaGVja2VkOiAjQTFBOENBO1xuICAgICAgICAvLy0tY2hlY2ttYXJrLWNvbG9yOiAjQTFBOENBO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzJBNkZEQjtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJi5mb3JtLWl0ZW0ge1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMTcuMzFweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjMkE2RkRCO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuZHJvcC1kb3duLWl0ZW0ge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0NHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgICAtLWNvbG9yOiAjMTcxNTM4O1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMxNzE1Mzg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQUNFRTE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ljb24vYXJyb3ctZG93bi5zdmcpO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIG1pbi13aWR0aDogMTIycHg7XG5cbiAgICAgICAgICAmOjpwYXJ0KGljb24pIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi51c2VyLWdyb3VwLWFkZC1kcm9wZG93biB7XG4gICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMkE2RkRCO1xuICAgICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgJi51c2VyLWdyb3VwLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogI0NBQ0VFMTtcbiAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cblxuICAgIC5yaXNrLWFzc2VzbWVudC1jb21wb25lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RkFGRTtcbiAgICAgIG1hcmdpbjogMjBweCAkcGFkZGluZ0hvcml6b250YWw7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgICAgLmhyLWxpbmUge1xuICAgICAgICBtYXJnaW46IDBweCAxOHB4O1xuICAgICAgfVxuXG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMThweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDRUUxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDE4cHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuXG5cbiAgICAgIC5yYWRpby1pbnB1dC12aWV3IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMThweDtcbiAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBpb24tc2VnbWVudC5zZWdtZW50IHtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMThweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RDRTdFRjtcblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogI0Y2RjhGQTtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgLS1tYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIC0tbWFyZ2luLWVuZDogMDtcbiAgICAgICAgICAtLW1hcmdpbi1zdGFydDogMDtcbiAgICAgICAgICAtLW1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNEQ0U3RUY7XG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjMkE2RkRCO1xuICAgICAgICAgIC0tY29sb3I6ICM3Nzc1OTU7XG4gICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJBNkZEQjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3B0aW9ucyB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1ib3R0b20tbXNnIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICB9XG5cblxuICAuY3VzdG9tLXNlZ21lbnQtdmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0U3RUY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbjogMCAxOHB4IDVweDtcbiAgICB3aWR0aDogMTYwcHg7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICM3Nzc1OTU7XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJBNkZEQjtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBjb2xvcjogIzJBNkZEQjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5icm93bi1vcHRpb24ge1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-form-riskassessment-form-riskassessment-module-es5.js.map