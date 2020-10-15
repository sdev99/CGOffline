import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortraitModePage } from './portrait-mode.page';

const routes: Routes = [
  {
    path: '',
    component: PortraitModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortraitModePageRoutingModule {}
