import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutPhotoidentityDmPage } from './checkinout-photoidentity-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutPhotoidentityDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutPhotoidentityDmPageRoutingModule {}
