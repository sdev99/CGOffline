import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignoffPhotoPage } from './signoff-photo.page';

const routes: Routes = [
  {
    path: '',
    component: SignoffPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignoffPhotoPageRoutingModule {}
