import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordResetPage } from './forgot-password-reset.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordResetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordResetPageRoutingModule {}
