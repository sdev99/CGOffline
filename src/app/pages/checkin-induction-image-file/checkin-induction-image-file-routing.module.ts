import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinInductionImageFilePage } from './checkin-induction-image-file.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinInductionImageFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinInductionImageFilePageRoutingModule {}
