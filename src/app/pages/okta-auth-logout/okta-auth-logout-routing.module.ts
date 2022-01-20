import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaAuthLogoutPage } from './okta-auth-logout.page';

const routes: Routes = [
  {
    path: '',
    component: OktaAuthLogoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OktaAuthLogoutPageRoutingModule {}
