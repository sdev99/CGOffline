import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ImageAnnotationPageRoutingModule} from './image-annotation-routing.module';

import {ImageAnnotationPage} from './image-annotation.page';
import {ColorPickerComponent} from '../../components/color-picker/color-picker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImageAnnotationPageRoutingModule
    ],
    declarations: [ImageAnnotationPage, ColorPickerComponent],
    entryComponents: [ColorPickerComponent],
})
export class ImageAnnotationPageModule {
}
