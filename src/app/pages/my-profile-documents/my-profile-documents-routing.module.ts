import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProfileDocumentsPage } from './my-profile-documents.page';

const routes: Routes = [
  {
    path: '',
    component: MyProfileDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileDocumentsPageRoutingModule {}
