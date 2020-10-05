import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutOptionDmPageRoutingModule } from './checkinout-option-dm-routing.module';

import { CheckinoutOptionDmPage } from './checkinout-option-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutOptionDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinoutOptionDmPage]
})
export class CheckinoutOptionDmPageModule {}
