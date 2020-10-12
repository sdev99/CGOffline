import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsDmPage } from './forms-dm.page';

const routes: Routes = [
  {
    path: '',
    component: FormsDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsDmPageRoutingModule {}
