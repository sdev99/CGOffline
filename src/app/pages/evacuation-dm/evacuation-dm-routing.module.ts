import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvacuationDmPage } from './evacuation-dm.page';

const routes: Routes = [
  {
    path: '',
    component: EvacuationDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvacuationDmPageRoutingModule {}
