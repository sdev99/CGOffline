import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutGuestPhoneDmPage } from './checkinout-guest-phone-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutGuestPhoneDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutPhoneDmPageRoutingModule {}
