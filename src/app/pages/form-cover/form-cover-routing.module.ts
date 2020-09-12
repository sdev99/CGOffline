import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCoverPage } from './form-cover.page';

const routes: Routes = [
  {
    path: '',
    component: FormCoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCoverPageRoutingModule {}
