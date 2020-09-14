import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinWorkpermitPage } from './checkin-workpermit.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinWorkpermitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinWorkpermitPageRoutingModule {}
