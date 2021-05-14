import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRiskassessmentPageRoutingModule } from './form-riskassessment-routing.module';

import { FormRiskassessmentPage } from './form-riskassessment.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, FormRiskassessmentPageRoutingModule, ComponentsModule, ReactiveFormsModule, TranslateModule],
	declarations: [FormRiskassessmentPage],
})
export class FormRiskassessmentPageModule {}
