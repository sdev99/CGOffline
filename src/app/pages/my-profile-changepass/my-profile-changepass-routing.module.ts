import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProfileChangepassPage } from './my-profile-changepass.page';

const routes: Routes = [
  {
    path: '',
    component: MyProfileChangepassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileChangepassPageRoutingModule {}
