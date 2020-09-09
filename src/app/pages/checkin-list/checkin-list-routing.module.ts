import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinListPage } from './checkin-list.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinListPageRoutingModule {}
