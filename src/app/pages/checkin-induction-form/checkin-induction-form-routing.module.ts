import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinInductionFormPage } from './checkin-induction-form.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinInductionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinInductionFormPageRoutingModule {}
