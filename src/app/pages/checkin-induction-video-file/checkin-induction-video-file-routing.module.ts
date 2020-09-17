import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinInductionVideoFilePage } from './checkin-induction-video-file.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinInductionVideoFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinInductionVideoFilePageRoutingModule {}
