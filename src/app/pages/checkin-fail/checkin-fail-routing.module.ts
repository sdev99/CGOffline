import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinFailPage } from './checkin-fail.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinFailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinFailPageRoutingModule {}
