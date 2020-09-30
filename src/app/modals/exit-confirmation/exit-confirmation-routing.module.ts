import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitConfirmationPage } from './exit-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: ExitConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitConfirmationPageRoutingModule {}
