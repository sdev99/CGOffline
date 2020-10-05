import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutAlreadycheckinDmPageRoutingModule } from './checkinout-alreadycheckin-dm-routing.module';

import { CheckinoutAlreadycheckinDmPage } from './checkinout-alreadycheckin-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutAlreadycheckinDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinoutAlreadycheckinDmPage]
})
export class CheckinoutAlreadycheckinDmPageModule {}
