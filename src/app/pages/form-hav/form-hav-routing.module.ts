import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormHavPage } from './form-hav.page';

const routes: Routes = [
  {
    path: '',
    component: FormHavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormHavPageRoutingModule {}
