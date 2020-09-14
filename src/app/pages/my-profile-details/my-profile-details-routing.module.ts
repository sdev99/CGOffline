import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProfileDetailsPage } from './my-profile-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyProfileDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileDetailsPageRoutingModule {}
