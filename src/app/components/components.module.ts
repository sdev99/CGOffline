import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {WarningComponentComponent} from './warning-component/warning-component.component';
import {ModalHeaderComponent} from './modal-header/modal-header.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {AuthInputComponent} from './auth-input/auth-input.component';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddChoosePhotoComponent} from './add-choose-photo/add-choose-photo.component';
import {EmptyMessageComponent} from './empty-message/empty-message.component';
import {NextPrevToolbarComponent} from './next-prev-toolbar/next-prev-toolbar.component';

@NgModule({
    declarations: [
        WarningComponentComponent,
        ModalHeaderComponent,
        ColorPickerComponent,
        AuthInputComponent,
        DashboardHeaderComponent,
        AddChoosePhotoComponent,
        EmptyMessageComponent,
        NextPrevToolbarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        WarningComponentComponent,
        ModalHeaderComponent,
        ColorPickerComponent,
        AuthInputComponent,
        DashboardHeaderComponent,
        AddChoosePhotoComponent,
        EmptyMessageComponent,
        NextPrevToolbarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
