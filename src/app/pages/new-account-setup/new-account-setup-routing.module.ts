import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAccountSetupPage } from './new-account-setup.page';

const routes: Routes = [
  {
    path: '',
    component: NewAccountSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAccountSetupPageRoutingModule {}
