import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutNameDmPage } from './checkinout-name-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutNameDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutNameDmPageRoutingModule {}
