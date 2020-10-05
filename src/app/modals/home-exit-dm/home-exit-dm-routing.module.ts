import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeExitDmPage } from './home-exit-dm.page';

const routes: Routes = [
  {
    path: '',
    component: HomeExitDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeExitDmPageRoutingModule {}
