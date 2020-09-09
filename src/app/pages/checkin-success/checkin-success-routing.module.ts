import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinSuccessPage } from './checkin-success.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinSuccessPageRoutingModule {}
