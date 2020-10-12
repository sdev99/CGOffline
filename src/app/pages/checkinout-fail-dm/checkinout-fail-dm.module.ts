import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutFailDmPageRoutingModule } from './checkinout-fail-dm-routing.module';

import { CheckinoutFailDmPage } from './checkinout-fail-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutFailDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinoutFailDmPage]
})
export class CheckinoutFailDmPageModule {}
