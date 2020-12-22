import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentOpenchoicePage } from './document-openchoice.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentOpenchoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentOpenchoicePageRoutingModule {}
