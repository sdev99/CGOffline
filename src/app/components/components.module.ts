import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {WarningComponentComponent} from './warning-component/warning-component.component';
import {ModalHeaderComponent} from './modal-header/modal-header.component';

@NgModule({
    declarations: [WarningComponentComponent, ModalHeaderComponent],
    imports: [IonicModule],
    exports: [WarningComponentComponent, ModalHeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
