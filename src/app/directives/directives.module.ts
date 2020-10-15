import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {PhoneInputDirective} from './phone-input.directive';

@NgModule({
    declarations: [
        PhoneInputDirective,
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        PhoneInputDirective,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DirectivesModule {
}
