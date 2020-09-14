import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutConfirmPage } from './checkout-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutConfirmPageRoutingModule {}
