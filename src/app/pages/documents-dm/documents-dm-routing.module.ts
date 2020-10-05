import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsDmPage } from './documents-dm.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsDmPageRoutingModule {}
