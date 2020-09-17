import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SafeurlPipe} from './safeurl.pipe';

@NgModule({
    declarations: [
        SafeurlPipe,
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        SafeurlPipe,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipesModule {
}
