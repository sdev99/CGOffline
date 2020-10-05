import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutOptionDmPage } from './checkinout-option-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutOptionDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutOptionDmPageRoutingModule {}
