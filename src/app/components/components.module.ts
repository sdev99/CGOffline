import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {WarningComponentComponent} from './warning-component/warning-component.component';
import {ModalHeaderComponent} from './modal-header/modal-header.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {AuthInputComponent} from './auth-input/auth-input.component';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [WarningComponentComponent, ModalHeaderComponent, ColorPickerComponent, AuthInputComponent, DashboardHeaderComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [WarningComponentComponent, ModalHeaderComponent, ColorPickerComponent, AuthInputComponent, DashboardHeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
