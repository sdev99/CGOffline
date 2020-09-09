import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinInductionVaPage } from './checkin-induction-va.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinInductionVaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinInductionVaPageRoutingModule {}
