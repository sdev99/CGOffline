import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageAnnotationPageRoutingModule } from './image-annotation-routing.module';

import { ImageAnnotationPage } from './image-annotation.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ImageAnnotationPageRoutingModule, ComponentsModule, TranslateModule],
	declarations: [ImageAnnotationPage],
})
export class ImageAnnotationPageModule {}
