import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutSuccessDmPage } from './checkinout-success-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutSuccessDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutSuccessDmPageRoutingModule {}
