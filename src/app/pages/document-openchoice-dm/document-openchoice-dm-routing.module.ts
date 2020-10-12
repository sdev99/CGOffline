import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentOpenchoiceDmPage } from './document-openchoice-dm.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentOpenchoiceDmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentOpenchoiceDmPageRoutingModule {}
