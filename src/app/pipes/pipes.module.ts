import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SafeurlPipe} from './safeurl.pipe';
import { ListFilterPipe } from './list-filter.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
    declarations: [
        SafeurlPipe,
        ListFilterPipe,
        TimeAgoPipe,
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        SafeurlPipe,
        ListFilterPipe,
        TimeAgoPipe,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipesModule {
}
