import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinInductionFormPageRoutingModule } from './checkin-induction-form-routing.module';

import { CheckinInductionFormPage } from './checkin-induction-form.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinInductionFormPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinInductionFormPage]
})
export class CheckinInductionFormPageModule {}
