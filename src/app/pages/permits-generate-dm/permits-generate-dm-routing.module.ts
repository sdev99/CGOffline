import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermitsGenerateDmPage } from './permits-generate-dm.page';

const routes: Routes = [
  {
    path: '',
    component: PermitsGenerateDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermitsGenerateDmPageRoutingModule {}
