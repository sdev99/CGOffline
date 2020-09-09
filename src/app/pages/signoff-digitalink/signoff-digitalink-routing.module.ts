import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignoffDigitalinkPage } from './signoff-digitalink.page';

const routes: Routes = [
  {
    path: '',
    component: SignoffDigitalinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignoffDigitalinkPageRoutingModule {}
