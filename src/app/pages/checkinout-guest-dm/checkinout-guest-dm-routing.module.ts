import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutGuestDmPage } from './checkinout-guest-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutGuestDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutGuestDmPageRoutingModule {}
