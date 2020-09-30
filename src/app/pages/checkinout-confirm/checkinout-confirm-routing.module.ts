import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutConfirmPage } from './checkinout-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutConfirmPageRoutingModule {}
