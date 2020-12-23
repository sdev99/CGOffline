import {Component, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IonContent, ModalController, NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {PhotoService} from '../../services/photo.service';
import {SharedDataService} from '../../services/shared-data.service';
import {ExitConfirmationPage} from '../../modals/exit-confirmation/exit-confirmation.page';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EnumService} from '../../services/enum.service';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';
import {ObservablesService} from '../../services/observables.service';
import {Subscription} from 'rxjs';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {AccountService} from '../../services/account.service';
import {User} from '../../_models';
import {UtilService} from '../../services/util.service';
import {HavExposure} from '../../_models/havExposure';
import {HavModelItem} from '../../_models/havModelItem';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-form-custom',
    templateUrl: './form-custom.page.html',
    styleUrls: ['./form-custom.page.scss'],
})
export class FormCustomPage {
    @ViewChild(IonContent) content: IonContent;
    user: User;

    errorMessage = '';

    isSubmitted = false;
    formGroup: FormGroup;

    activityDetail;

    list = DemoDataService.activityCustomForm.clone();
    answer = {};


    totalPage = 32;

    screenOrientationSubscribe;
    isShowOritationPortrait = false;

    // formBuilderDetail = JSON.parse('{"formId":154,"title":"Complex Form Logics","description":null,"formVersionId":237,"formVersionNo":1,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":262,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":374,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section 1"}],"questions":[{"questionId":662,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":262,"questionTranslations":[{"questionTranslationId":753,"questionTranslationLanguageId":35,"questionTranslationTitle":"This Question has choices which each has a different logic rule to test.","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":660,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":779,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"1- if chosen, makes section 2 visible."}]},{"answerChoiceAttributeId":661,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":780,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"2- if chosen, makes question 2 hidden"}]},{"answerChoiceAttributeId":662,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":781,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"3- if chosen, duplicates Question 3"}]},{"answerChoiceAttributeId":663,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":782,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"4- if chosen, marks question as failed"}]},{"answerChoiceAttributeId":664,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":783,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"5- if chosen, notifies a user"}]},{"answerChoiceAttributeId":665,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":784,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"6- if chosen, makes section 3 hidden"}]}],"questionLogics":[{"questionLogicId":74,"questionChoiceSetSequence":1,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":1,"questionActionOnID":"2-0","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":75,"questionChoiceSetSequence":2,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":2,"questionActionOnID":"1-2","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":76,"questionChoiceSetSequence":3,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"1-3","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":77,"questionChoiceSetSequence":4,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":4,"questionActionOnID":"0","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":78,"questionChoiceSetSequence":5,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":5,"questionActionOnID":"0","questionID":662,"questionLogicOrder":0,"notificationID":65,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":true,"isSMSNotification":true,"selectedUsersAndGroups":[{"notifyUserAndGroupId":46,"notificationID":65,"userId":"b01f4cf5-c26c-4c8f-be94-a7c68fede752","groupId":null,"name":"Arvin2 Biricik2","notifyType":1}]}},{"questionLogicId":79,"questionChoiceSetSequence":6,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":2,"questionActionOnID":"3-0","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[]},{"questionId":663,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":2,"sectionID":262,"questionTranslations":[{"questionTranslationId":754,"questionTranslationLanguageId":35,"questionTranslationTitle":"This question will be hidden if Question 1-Choice 2 is chosen.","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":664,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":3,"sectionID":262,"questionTranslations":[{"questionTranslationId":755,"questionTranslationLanguageId":35,"questionTranslationTitle":"This question will be hidden if  Question 1-Choice 2 is chosen.","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":263,"sectionIsHidden":true,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":375,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section 2 - This section will be hidden by default. And shown when Section 1- Question 1-Choice 1 is chosen."}],"questions":[{"questionId":665,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":263,"questionTranslations":[{"questionTranslationId":756,"questionTranslationLanguageId":35,"questionTranslationTitle":"Section2-Question1","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":666,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":785,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"no logic option 1"}]},{"answerChoiceAttributeId":667,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":786,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"no logic option 2"}]}],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":264,"sectionIsHidden":false,"sectionDisplayOrder":3,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":376,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"section 3. This is visible by default and will be hidden if  Section 1- Question 1-Choice 6 is chosen."}],"questions":[{"questionId":666,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":1,"sectionID":264,"questionTranslations":[{"questionTranslationId":757,"questionTranslationLanguageId":35,"questionTranslationTitle":"Dummy question","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');
    formBuilderDetail = JSON.parse('{"formId":153,"title":"Full custom functionality test","description":null,"formVersionId":236,"formVersionNo":3,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":260,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":372,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"First Section demo demo demo demo demo demo"}],"questions":[{"questionId":650,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":260,"questionTranslations":[{"questionTranslationId":741,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question First demo demo demo demo demo demo demo demo demo demo demo demo","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":650,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":769,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"one"}]},{"answerChoiceAttributeId":651,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":770,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"two"}]},{"answerChoiceAttributeId":652,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":771,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"three"}]},{"answerChoiceAttributeId":653,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":772,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"four"}]},{"answerChoiceAttributeId":654,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":773,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"five"}]}],"questionLogics":[{"questionLogicId":71,"questionChoiceSetSequence":3,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":2,"questionActionOnID":"1-2","questionID":650,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[]},{"questionId":651,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":260,"questionTranslations":[{"questionTranslationId":742,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Two demo demo demo demo demo demo demo demo demo demo demo demo","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":655,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":774,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"one score 10"}]},{"answerChoiceAttributeId":656,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":5,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":775,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"two score 5"}]},{"answerChoiceAttributeId":657,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":4,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":776,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"three score 4"}]},{"answerChoiceAttributeId":658,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":777,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"score 10"}]},{"answerChoiceAttributeId":659,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":17,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":778,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"score 30"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":652,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":3,"sectionID":260,"questionTranslations":[{"questionTranslationId":743,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single line text demo","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":653,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":4,"questionDisplayOrder":4,"sectionID":260,"questionTranslations":[{"questionTranslationId":744,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiple line text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":654,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":5,"sectionID":260,"questionTranslations":[{"questionTranslationId":745,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number field test","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":655,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":6,"sectionID":260,"questionTranslations":[{"questionTranslationId":746,"questionTranslationLanguageId":35,"questionTranslationTitle":"Decimal Field Test","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":261,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":373,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Second Section demo demo demo demo demo demo"}],"questions":[{"questionId":656,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":1,"sectionID":261,"questionTranslations":[{"questionTranslationId":747,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date Field Test","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":657,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":true,"shouldShowOptionalComment":true,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":2,"sectionID":261,"questionTranslations":[{"questionTranslationId":748,"questionTranslationLanguageId":35,"questionTranslationTitle":"Time field Test","questionTranslationInstructionOrNote":"time type question","questionTranslationTextLabel":"time"}],"answerChoiceAttributes":[],"questionLogics":[{"questionLogicId":72,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":1,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":"02:04 am","hourFormatID":1,"questionActionTypeID":1,"questionActionOnID":"1-5","questionID":657,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":73,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":1,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":"02:04 am","hourFormatID":1,"questionActionTypeID":2,"questionActionOnID":"2-3","questionID":657,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[]},{"questionId":658,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":true,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":9,"questionDisplayOrder":3,"sectionID":261,"questionTranslations":[{"questionTranslationId":749,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date Time Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":"Enter correct date and time"}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":659,"questionIsHidden":true,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":4,"sectionID":261,"questionTranslations":[{"questionTranslationId":750,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single line text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":660,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":true,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":5,"sectionID":261,"questionTranslations":[{"questionTranslationId":751,"questionTranslationLanguageId":35,"questionTranslationTitle":"Time","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":"time"}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":661,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":true,"allowAttachment":true,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":10,"questionDisplayOrder":6,"sectionID":261,"questionTranslations":[{"questionTranslationId":752,"questionTranslationLanguageId":35,"questionTranslationTitle":"Attachment question","questionTranslationInstructionOrNote":"add your personal photo","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[{"questionAttachmentId":41,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"videoplayback.mp4","fileType":null,"fileExtension":"mp4","folderName":"Choose","questionID":661,"documentID":228,"folderID":null}]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');

    questionElementIds = [];
    currentQuestionIndex = 0;
    scrollingDetail: any;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
        public modalController: ModalController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
        private screenOrientation: ScreenOrientation,
        private ngZone: NgZone,
        private apiService: ApiService,
        private utilService: UtilService,
        public accountService: AccountService,
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }


        // Dynamic form controls add
        this.formGroup = new FormGroup({});
        const sections = this.formBuilderDetail.sections;
        if (sections) {
            sections.map((section) => {
                if (!section.sectionIsHidden) {
                    const questions = section.questions;
                    questions.map((question) => {
                        if (!question.questionIsHidden) {
                            this.utilService.addDynamicFormControls(question, this.formGroup, (value) => {
                                // this.checkAndApplyLogic(question, value, this.formGroup);
                            });
                            this.questionElementIds.push(UtilService.HtmlElementId(section.sectionId, question.questionId));
                        }
                    });
                }
            });
        }
        // --End

        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.activityDetail) {
                    this.activityDetail = JSON.parse(params.activityDetail);
                }
            }
            if (!this.activityDetail) {
                this.activityDetail = sharedDataService.viewFormDetail;
            }
        });
    }

    checkAndApplyLogic(question, value, formGroup) {
        console.log('On Value changed', event);
        console.log('allowQuestionLogic ', question.allowQuestionLogic);
        if (question.allowQuestionLogic) {
            const questionLogics = question.questionLogics;
            questionLogics.map((logic) => {
                if (EnumService.QuestionLogic.LogicApplicableForQuestionTypes.indexOf(question.selectedAnswerTypeId) !== -1) {
                    if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleChoiceSet || question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
                        const questionChoiceSetSequence = logic.questionChoiceSetSequence - 1;
                        const valueToBeCompare = question.answerChoiceAttributes[questionChoiceSetSequence];
                        const questionActionTypeID = logic.questionActionTypeID;

                        const questionActionOnID = logic.questionActionOnID;
                        const sectionAndQuestionNo = questionActionOnID.split('-');
                        const sectionIndex = sectionAndQuestionNo[0] - 1;
                        const questionIndex = sectionAndQuestionNo[1] - 1;

                        if ((questionActionTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.Selected && value === valueToBeCompare.answerChoiceAttributeId) ||
                            (questionActionTypeID === EnumService.QuestionLogic.SingleMultipleChoiceOperationType.NotSelected && value !== valueToBeCompare.answerChoiceAttributeId)) {
                            const sections = this.formBuilderDetail.sections;

                            let sectionObject;
                            let questionObject;

                            if (sectionIndex >= 0 && questionIndex >= 0) {
                                questionObject = sections[sectionIndex].questions[questionIndex];
                            } else if (sectionIndex >= 0 && questionIndex < 0) {
                                sectionObject = sections[sectionIndex];
                            }

                            if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Show) {
                                if (sectionObject) {
                                    sectionObject.showForLogic = true;
                                    const questions = sectionObject.questions;
                                    questions.map((questionItem) => {
                                        if (!question.questionIsHidden || question) {
                                            const tmpControl = this.formGroup.controls[UtilService.FCName(questionItem.questionId)];
                                            if (!tmpControl) {
                                                this.utilService.addDynamicFormControls(questionItem, this.formGroup, (val) => {
                                                    this.checkAndApplyLogic(questionItem, val, this.formGroup);
                                                });
                                            }
                                            this.questionElementIds.push(UtilService.HtmlElementId(sectionObject.sectionId, questionItem.questionId));
                                        }
                                    });
                                } else if (questionObject) {
                                    questionObject.showForLogic = true;
                                }
                            } else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Hide) {
                                if (sectionObject) {
                                    sectionObject.hideForLogic = true;
                                } else if (questionObject) {
                                    questionObject.hideForLogic = true;
                                }
                            } else if (questionActionTypeID === EnumService.QuestionLogic.ActionType.Duplicate) {

                            }
                        }
                    } else {

                    }


                }
            });
        }
    }


    handleOrientation = () => {
        if (this.sharedDataService.dedicatedMode) {
            if (this.screenOrientation.type.includes('landscape')) {
                this.screenOrientation.unlock();
                this.isShowOritationPortrait = true;
            } else {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }

            this.screenOrientationSubscribe = this.screenOrientation.onChange().subscribe(() => {
                this.ngZone.run(() => {
                    if (this.screenOrientation.type.includes('portrait')) {
                        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                        this.isShowOritationPortrait = false;
                    }
                    if (this.screenOrientation.type.includes('landscape')) {
                        this.isShowOritationPortrait = true;
                    }
                });
            });
        }
    };

    ionViewDidEnter() {
        this.sharedDataService.isOpenImageAnnotation = false;
    }

    ionViewWillEnter() {
        this.handleOrientation();
    }

    ionViewDidLeave(): void {
        if (this.sharedDataService.dedicatedMode) {
            if (!this.sharedDataService.isOpenImageAnnotation) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                this.screenOrientationSubscribe.unsubscribe();
            }
        }
    }

    async onClose() {
        const modal = await this.modalController.create({
            component: ExitConfirmationPage,
            swipeToClose: false,
            showBackdrop: false,
            backdropDismiss: false,
            animated: true,
            componentProps: {}
        });
        await modal.present();

        modal.onWillDismiss().then(({data}) => {
            if (data) {
                this.navCtrl.back();
            }
        });
    }


    onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = '';

        this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, (status, result) => {
            if (status) {

            } else {
                this.errorMessage = result;
            }
        });
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

    onScrollEnd = (event) => {
        if (this.scrollingDetail) {
            const scrollTop = this.scrollingDetail.scrollTop;
            if (scrollTop === 0) {
                this.currentQuestionIndex = 0;
            } else {
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

    onScroll = (event) => {
        this.scrollingDetail = event.detail;
    };

    scrollToQuestion = () => {
        const elementId = this.questionElementIds[this.currentQuestionIndex];
        const y = document.getElementById(elementId).offsetTop;
        this.content.scrollToPoint(0, y, 500);
    };

    // -- End -- Navigate to question


    // Unused

    addImage(index) {
        this.photoService.choosePhotoOption((photo) => {
            this.openImageAnnotation(index, photo);
        });
    }

    openImageAnnotation = (index, photo) => {
        this.sharedDataService.isOpenImageAnnotation = true;
        this.sharedDataService.setAnnotationImage(photo);
        this.sharedDataService.onAnnotationImageDone = (image) => {
            this.answer[index] = {
                ...this.answer[index],
                image
            };
        };

        this.navCtrl.navigateForward(['/image-annotation']);
    };

    addDateNote(index) {
        this.answer[index] = {
            ...this.answer[index],
            addNote: true,
        };
    }

    isValid(index, section) {
        let isValid = true;
        if (this.isSubmitted && section.required) {
            isValid = false;
            const answer = this.answer[index];
            if (answer) {
                switch (section.question_type) {
                    case 'date':
                        isValid = answer.date;
                        break;
                    case 'image_annotation':
                        isValid = answer.image;
                        break;
                    case 'options':
                        if (section.canMultipleAsnwer) {
                            section.options.map((item) => {
                                if (item.checked) {
                                    isValid = item.checked;
                                    return;
                                }
                            });
                        } else {
                            isValid = section.selectedValue;
                        }
                        break;
                    case 'photo':
                        isValid = answer.image;
                        break;
                    case 'time':
                        isValid = answer.time;
                        break;
                    default:
                        isValid = true;
                }
            }
        }
        return isValid;
    }

    photoAdded(index, photo) {
        this.openImageAnnotation(index, photo);
    }

    photoRemoved(index) {
        this.answer[index] = {
            ...this.answer[index],
            image: null,
        };
    }

    timeSelect(index, time) {
        this.answer[index] = {
            ...this.answer[index],
            timePeriod: time,
        };
    }

    openFile() {

    }
}
