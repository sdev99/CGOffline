import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {WarningComponentComponent} from './warning-component/warning-component.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {AuthInputComponent} from './auth-input/auth-input.component';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddChoosePhotoComponent} from './add-choose-photo/add-choose-photo.component';
import {EmptyMessageComponent} from './empty-message/empty-message.component';
import {NextPrevToolbarComponent} from './next-prev-toolbar/next-prev-toolbar.component';
import {DashboardHeaderDmComponent} from './dashboard-header-dm/dashboard-header-dm.component';
import {DashboardButtonComponent} from './dashboard-button/dashboard-button.component';
import {DeviceInfoComponent} from './device-info/device-info.component';
import {ModalHeaderDmComponent} from './modal-header-dm/modal-header-dm.component';
import {BackContinueToolbarComponent} from './back-continue-toolbar/back-continue-toolbar.component';
import {TopnavigationsBtnsDmComponent} from './topnavigations-btns-dm/topnavigations-btns-dm.component';
import {TopnavigationsSegmentsDmComponent} from './topnavigations-segments-dm/topnavigations-segments-dm.component';
import {SyncWarningMsgComponent} from './sync-warning-msg/sync-warning-msg.component';
import {PortraitOrientationComponent} from './portrait-orientation/portrait-orientation.component';
import {ScreenInnerLoadingComponent} from './screen-inner-loading/screen-inner-loading.component';
import {SingleChoiceFieldComponent} from './single-choice-field/single-choice-field.component';
import {MultipleChoiceFieldComponent} from './multiple-choice-field/multiple-choice-field.component';
import {SinglelineTextFieldComponent} from './singleline-text-field/singleline-text-field.component';
import {MultilineTextFieldComponent} from './multiline-text-field/multiline-text-field.component';
import {DateFieldComponent} from './date-field/date-field.component';
import {DateTimeFieldComponent} from './date-time-field/date-time-field.component';
import {TimeFieldComponent} from './time-field/time-field.component';
import {NumberIntegerFieldComponent} from './number-integer-field/number-integer-field.component';
import {NumberDecimalFieldComponent} from './number-decimal-field/number-decimal-field.component';
import {DropdownFieldComponent} from './dropdown-field/dropdown-field.component';
import {ExposureComponent} from './exposure/exposure.component';
import {QuestionListHeaderComponent} from './question-list-header/question-list-header.component';
import {CustomQuestionsContainerComponent} from './custom-questions-container/custom-questions-container.component';
import {PhotoFieldComponent} from './photo-field/photo-field.component';
import {SectionTitleComponent} from './section-title/section-title.component';
import {ModelCloseButtonComponent} from './model-close-button/model-close-button.component';
import {ArchivedItemComponent} from './archived-item/archived-item.component';

@NgModule({
    declarations: [
        WarningComponentComponent,
        ColorPickerComponent,
        AuthInputComponent,
        DashboardHeaderComponent,
        AddChoosePhotoComponent,
        EmptyMessageComponent,
        NextPrevToolbarComponent,
        DashboardHeaderDmComponent,
        DashboardButtonComponent,
        DeviceInfoComponent,
        ModalHeaderDmComponent,
        BackContinueToolbarComponent,
        TopnavigationsBtnsDmComponent,
        TopnavigationsSegmentsDmComponent,
        SyncWarningMsgComponent,
        PortraitOrientationComponent,
        ScreenInnerLoadingComponent,
        SingleChoiceFieldComponent,
        MultipleChoiceFieldComponent,
        SinglelineTextFieldComponent,
        MultilineTextFieldComponent,
        DateFieldComponent,
        DateTimeFieldComponent,
        TimeFieldComponent,
        NumberIntegerFieldComponent,
        NumberDecimalFieldComponent,
        DropdownFieldComponent,
        ExposureComponent,
        QuestionListHeaderComponent,
        CustomQuestionsContainerComponent,
        PhotoFieldComponent,
        SectionTitleComponent,
        ModelCloseButtonComponent,
        ArchivedItemComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        WarningComponentComponent,
        ColorPickerComponent,
        AuthInputComponent,
        DashboardHeaderComponent,
        AddChoosePhotoComponent,
        EmptyMessageComponent,
        NextPrevToolbarComponent,
        DashboardHeaderDmComponent,
        DashboardButtonComponent,
        DeviceInfoComponent,
        ModalHeaderDmComponent,
        BackContinueToolbarComponent,
        TopnavigationsBtnsDmComponent,
        TopnavigationsSegmentsDmComponent,
        SyncWarningMsgComponent,
        PortraitOrientationComponent,
        ScreenInnerLoadingComponent,
        SingleChoiceFieldComponent,
        MultipleChoiceFieldComponent,
        SinglelineTextFieldComponent,
        MultilineTextFieldComponent,
        DateFieldComponent,
        DateTimeFieldComponent,
        TimeFieldComponent,
        NumberIntegerFieldComponent,
        NumberDecimalFieldComponent,
        DropdownFieldComponent,
        ExposureComponent,
        QuestionListHeaderComponent,
        CustomQuestionsContainerComponent,
        PhotoFieldComponent,
        SectionTitleComponent,
        ModelCloseButtonComponent,
        ArchivedItemComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
