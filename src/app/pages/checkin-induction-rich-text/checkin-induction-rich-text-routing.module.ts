import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinInductionRichTextPage } from './checkin-induction-rich-text.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinInductionRichTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinInductionRichTextPageRoutingModule {}
