import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOpenAuthDmPage } from './form-open-auth-dm.page';

const routes: Routes = [
  {
    path: '',
    component: FormOpenAuthDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOpenAuthDmPageRoutingModule {}
