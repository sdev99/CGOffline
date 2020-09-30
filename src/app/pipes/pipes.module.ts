import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SafeurlPipe} from './safeurl.pipe';
import { ListFilterPipe } from './list-filter.pipe';

@NgModule({
    declarations: [
        SafeurlPipe,
        ListFilterPipe,
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        SafeurlPipe,
        ListFilterPipe,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipesModule {
}
