import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinInductionPageRoutingModule } from './checkin-induction-routing.module';

import { CheckinInductionPage } from './checkin-induction.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinInductionPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinInductionPage]
})
export class CheckinInductionPageModule {}
