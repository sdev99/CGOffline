import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardQrscanPage } from './dashboard-qrscan.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardQrscanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardQrscanPageRoutingModule {}
