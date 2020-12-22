import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormWorkpermitPage } from './form-workpermit.page';

const routes: Routes = [
  {
    path: '',
    component: FormWorkpermitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormWorkpermitPageRoutingModule {}
