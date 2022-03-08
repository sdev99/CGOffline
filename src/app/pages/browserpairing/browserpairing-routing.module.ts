import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserpairingPage } from './browserpairing.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserpairingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserpairingPageRoutingModule {}
