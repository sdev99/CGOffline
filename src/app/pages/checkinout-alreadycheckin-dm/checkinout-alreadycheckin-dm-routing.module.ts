import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutAlreadycheckinDmPage } from './checkinout-alreadycheckin-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutAlreadycheckinDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutAlreadycheckinDmPageRoutingModule {}
