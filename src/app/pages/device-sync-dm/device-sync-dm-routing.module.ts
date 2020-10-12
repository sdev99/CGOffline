import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceSyncDmPage } from './device-sync-dm.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceSyncDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceSyncDmPageRoutingModule {}
