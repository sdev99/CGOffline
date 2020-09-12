import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCustomPage } from './form-custom.page';

const routes: Routes = [
  {
    path: '',
    component: FormCustomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCustomPageRoutingModule {}
