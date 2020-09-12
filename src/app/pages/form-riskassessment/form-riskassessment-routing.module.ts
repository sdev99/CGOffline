import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRiskassessmentPage } from './form-riskassessment.page';

const routes: Routes = [
  {
    path: '',
    component: FormRiskassessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRiskassessmentPageRoutingModule {}
