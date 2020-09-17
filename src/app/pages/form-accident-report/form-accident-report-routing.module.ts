import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAccidentReportPage } from './form-accident-report.page';

const routes: Routes = [
  {
    path: '',
    component: FormAccidentReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAccidentReportPageRoutingModule {}
