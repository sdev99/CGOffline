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
import * as moment from 'moment/moment';

@Component({
    selector: 'app-form-custom',
    templateUrl: './form-custom.page.html',
    styleUrls: ['./form-custom.page.scss'],
})
export class FormCustomPage {
    EnumService = EnumService;
    UtilService = UtilService;
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
    formBuilderDetail = JSON.parse('{"formId":153,"title":"Full custom functionality test","description":null,"formVersionId":246,"formVersionNo":4,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":272,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":392,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"First Section demo demo demo demo demo demo"}],"questions":[{"questionId":680,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":272,"questionTranslations":[{"questionTranslationId":785,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question First demo demo demo demo demo demo demo demo demo demo demo demo","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":680,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":815,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"oneoneoneone oneoneone one oneoneoneoneoneone oneoneoneoneone oneoneoneoneone oneoneoneoneone oneoneone"}]},{"answerChoiceAttributeId":681,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":816,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"two"}]},{"answerChoiceAttributeId":682,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":817,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"three"}]},{"answerChoiceAttributeId":683,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":818,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"four"}]},{"answerChoiceAttributeId":684,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":819,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"five"}]}],"questionLogics":[{"questionLogicId":80,"questionChoiceSetSequence":3,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":2,"questionActionOnID":"1-2","questionID":680,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[]},{"questionId":681,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":2,"sectionID":272,"questionTranslations":[{"questionTranslationId":786,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Two demo demo demo demo demo demo demo demo demo demo demo demo","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":685,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":820,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"one score 10 Question Two demo demo demo demo demo demo demo demo demo demo demo demo"}]},{"answerChoiceAttributeId":686,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":5,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":821,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"two score 5"}]},{"answerChoiceAttributeId":687,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":4,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":822,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"three score 4"}]},{"answerChoiceAttributeId":688,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":10,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":823,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"score 10"}]},{"answerChoiceAttributeId":689,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":17,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":824,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"score 30"}]}],"questionLogics":[],"questionAttachments":[]},{"questionId":682,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":3,"sectionID":272,"questionTranslations":[{"questionTranslationId":787,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single line text demo","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":683,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":4,"questionDisplayOrder":4,"sectionID":272,"questionTranslations":[{"questionTranslationId":788,"questionTranslationLanguageId":35,"questionTranslationTitle":"Multiple line text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":684,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":5,"questionDisplayOrder":5,"sectionID":272,"questionTranslations":[{"questionTranslationId":789,"questionTranslationLanguageId":35,"questionTranslationTitle":"Number field test","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":685,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":6,"questionDisplayOrder":6,"sectionID":272,"questionTranslations":[{"questionTranslationId":790,"questionTranslationLanguageId":35,"questionTranslationTitle":"Decimal Field Test","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":273,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":393,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Second Section demo demo demo demo demo demo"}],"questions":[{"questionId":686,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":7,"questionDisplayOrder":1,"sectionID":273,"questionTranslations":[{"questionTranslationId":791,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date Field Test","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":687,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":true,"shouldShowOptionalComment":true,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":2,"sectionID":273,"questionTranslations":[{"questionTranslationId":792,"questionTranslationLanguageId":35,"questionTranslationTitle":"Time field Test","questionTranslationInstructionOrNote":"time type question","questionTranslationTextLabel":"time"}],"answerChoiceAttributes":[],"questionLogics":[{"questionLogicId":81,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":1,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":"02:04 am","hourFormatID":1,"questionActionTypeID":1,"questionActionOnID":"1-5","questionID":687,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":82,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":1,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":"02:04 am","hourFormatID":1,"questionActionTypeID":2,"questionActionOnID":"2-3","questionID":687,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[]},{"questionId":688,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":false,"allowTextLabel":true,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":9,"questionDisplayOrder":3,"sectionID":273,"questionTranslations":[{"questionTranslationId":793,"questionTranslationLanguageId":35,"questionTranslationTitle":"Date Time Field","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":"Enter correct date and time"}],"answerChoiceAttributes":[],"questionLogics":[{"questionLogicId":83,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":2,"integerValue":null,"decimalValue":null,"dateValue":"23/12/2020","timeValue":"12:45 am","hourFormatID":1,"questionActionTypeID":3,"questionActionOnID":"2-3","questionID":688,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":84,"questionChoiceSetSequence":0,"questionChoiceSetTypeID":0,"questionOperatorTypeID":6,"integerValue":null,"decimalValue":null,"dateValue":"09/12/2020","timeValue":"12:20 am","hourFormatID":2,"questionActionTypeID":4,"questionActionOnID":"0","questionID":688,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[]},{"questionId":689,"questionIsHidden":true,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":4,"sectionID":273,"questionTranslations":[{"questionTranslationId":794,"questionTranslationLanguageId":35,"questionTranslationTitle":"Single line text","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":690,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":true,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":8,"questionDisplayOrder":5,"sectionID":273,"questionTranslations":[{"questionTranslationId":795,"questionTranslationLanguageId":35,"questionTranslationTitle":"Time","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":"time"}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":691,"questionIsHidden":false,"questionIsRequired":true,"allowInstructionOrNote":true,"allowTextLabel":false,"shouldShowOptionalComment":true,"allowAttachment":true,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":10,"questionDisplayOrder":6,"sectionID":273,"questionTranslations":[{"questionTranslationId":796,"questionTranslationLanguageId":35,"questionTranslationTitle":"Attachment question","questionTranslationInstructionOrNote":"add your personal photo","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[{"questionAttachmentId":42,"isExistingFile":false,"shouldSaveFileToPlatform":false,"fileName":"videoplayback.mp4","fileType":null,"fileExtension":"mp4","folderName":"Choose","questionID":691,"documentID":228,"folderID":null}]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');

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
        public utilService: UtilService,
        public accountService: AccountService,
    ) {
        this.user = accountService.userValue;

        if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
        }


        // Dynamic form controls add
        this.formGroup = new FormGroup({});
        const sections = this.formBuilderDetail.sections;
        this.utilService.questionElementIdsUpdate = (questionElementIds) => {
            this.questionElementIds = questionElementIds;
        };
        this.utilService.addFormControlsForVisibleFields(sections, this.formGroup);
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
                this.onBack();
            }
        });
    }

    onBack() {
        if (this.sharedDataService.viewFormFor === EnumService.ViewFormForType.Induction) {
            this.navCtrl.navigateBack('/checkinout-confirm');
        } else {
            this.navCtrl.back();
        }
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
                    const y = document.getElementById(elementId)?.offsetTop;
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
        const y = document.getElementById(elementId)?.offsetTop;
        this.content.scrollToPoint(0, y, 500);
    };

    // -- End -- Navigate to question

}
