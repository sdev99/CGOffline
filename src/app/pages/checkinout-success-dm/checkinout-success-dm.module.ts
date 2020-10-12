import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutSuccessDmPageRoutingModule } from './checkinout-success-dm-routing.module';

import { CheckinoutSuccessDmPage } from './checkinout-success-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutSuccessDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinoutSuccessDmPage]
})
export class CheckinoutSuccessDmPageModule {}
