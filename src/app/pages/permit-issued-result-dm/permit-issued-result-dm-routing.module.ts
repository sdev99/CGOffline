import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermitIssuedResultDmPage } from './permit-issued-result-dm.page';

const routes: Routes = [
  {
    path: '',
    component: PermitIssuedResultDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermitIssuedResultDmPageRoutingModule {}
