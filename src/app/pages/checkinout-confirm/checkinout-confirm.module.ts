import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutConfirmPageRoutingModule } from './checkinout-confirm-routing.module';

import { CheckinoutConfirmPage } from './checkinout-confirm.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CheckoutConfirmPageRoutingModule, ComponentsModule, TranslateModule],
	declarations: [CheckinoutConfirmPage],
})
export class CheckoutConfirmPageModule {}
