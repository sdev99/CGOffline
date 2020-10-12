import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutFailDmPage } from './checkinout-fail-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutFailDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutFailDmPageRoutingModule {}
