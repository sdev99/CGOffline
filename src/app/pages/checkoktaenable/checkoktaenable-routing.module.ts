import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoktaenablePage } from './checkoktaenable.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoktaenablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoktaenablePageRoutingModule {}
