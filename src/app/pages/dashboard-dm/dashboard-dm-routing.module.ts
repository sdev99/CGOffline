import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardDmPage } from './dashboard-dm.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardDmPageRoutingModule {}
