import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnotationPreviewPageRoutingModule } from './annotation-preview-routing.module';

import { AnnotationPreviewPage } from './annotation-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnotationPreviewPageRoutingModule
  ],
  declarations: [AnnotationPreviewPage]
})
export class AnnotationPreviewPageModule {}
