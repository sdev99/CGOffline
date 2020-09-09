import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinInductionPage } from './checkin-induction.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinInductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinInductionPageRoutingModule {}
