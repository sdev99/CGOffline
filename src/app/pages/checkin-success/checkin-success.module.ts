import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinSuccessPageRoutingModule } from './checkin-success-routing.module';

import { CheckinSuccessPage } from './checkin-success.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CheckinSuccessPageRoutingModule, TranslateModule],
	declarations: [CheckinSuccessPage],
})
export class CheckinSuccessPageModule {}
