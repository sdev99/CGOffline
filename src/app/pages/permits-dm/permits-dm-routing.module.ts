import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermitsDmPage } from './permits-dm.page';

const routes: Routes = [
  {
    path: '',
    component: PermitsDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermitsDmPageRoutingModule {}
