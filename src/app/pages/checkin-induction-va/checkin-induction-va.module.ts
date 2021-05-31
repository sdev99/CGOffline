import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinInductionVaPageRoutingModule } from './checkin-induction-va-routing.module';

import { CheckinInductionVaPage } from './checkin-induction-va.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CheckinInductionVaPageRoutingModule, ComponentsModule, TranslateModule],
	declarations: [CheckinInductionVaPage],
})
export class CheckinInductionVaPageModule {}
