import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinFailPageRoutingModule } from './checkin-fail-routing.module';

import { CheckinFailPage } from './checkin-fail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinFailPageRoutingModule
  ],
  declarations: [CheckinFailPage]
})
export class CheckinFailPageModule {}
