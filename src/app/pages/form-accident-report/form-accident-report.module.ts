import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAccidentReportPageRoutingModule } from './form-accident-report-routing.module';

import { FormAccidentReportPage } from './form-accident-report.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormAccidentReportPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [FormAccidentReportPage]
})
export class FormAccidentReportPageModule {}
