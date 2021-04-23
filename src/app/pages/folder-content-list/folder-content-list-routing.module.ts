import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderContentListPage } from './folder-content-list.page';

const routes: Routes = [
  {
    path: '',
    component: FolderContentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderContentListPageRoutingModule {}
