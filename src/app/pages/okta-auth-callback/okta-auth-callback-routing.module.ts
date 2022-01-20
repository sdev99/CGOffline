import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaAuthCallbackPage } from './okta-auth-callback.page';

const routes: Routes = [
  {
    path: '',
    component: OktaAuthCallbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OktaAuthCallbackPageRoutingModule {}
