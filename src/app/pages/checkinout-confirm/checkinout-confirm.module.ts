import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutConfirmPageRoutingModule } from './checkinout-confirm-routing.module';

import { CheckinoutConfirmPage } from './checkinout-confirm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckoutConfirmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinoutConfirmPage]
})
export class CheckoutConfirmPageModule {}
