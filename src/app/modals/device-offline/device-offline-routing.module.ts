import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceOfflinePage } from './device-offline.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceOfflinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceOfflinePageRoutingModule {}
