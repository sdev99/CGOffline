import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRiskassessmentPageRoutingModule } from './form-riskassessment-routing.module';

import { FormRiskassessmentPage } from './form-riskassessment.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormRiskassessmentPageRoutingModule,
        ComponentsModule
    ],
  declarations: [FormRiskassessmentPage]
})
export class FormRiskassessmentPageModule {}
