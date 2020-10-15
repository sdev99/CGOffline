import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCoverDmPage } from './form-cover-dm.page';

const routes: Routes = [
  {
    path: '',
    component: FormCoverDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCoverDmPageRoutingModule {}
