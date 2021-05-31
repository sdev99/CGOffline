import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinInductionFormPageRoutingModule } from './checkin-induction-form-routing.module';

import { CheckinInductionFormPage } from './checkin-induction-form.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CheckinInductionFormPageRoutingModule, ComponentsModule, TranslateModule],
	declarations: [CheckinInductionFormPage],
})
export class CheckinInductionFormPageModule {}
