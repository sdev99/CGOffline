import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinksendSuccessPage } from './linksend-success.page';

const routes: Routes = [
  {
    path: '',
    component: LinksendSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinksendSuccessPageRoutingModule {}
