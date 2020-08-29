import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnotationPreviewPage } from './annotation-preview.page';

const routes: Routes = [
  {
    path: '',
    component: AnnotationPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnotationPreviewPageRoutingModule {}
