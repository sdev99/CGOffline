import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutIdentityconfirmDmPage } from './checkinout-identityconfirm-dm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinoutIdentityconfirmDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinoutIdentityconfirmDmPageRoutingModule {}
