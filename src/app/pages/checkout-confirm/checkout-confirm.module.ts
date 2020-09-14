import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutConfirmPageRoutingModule } from './checkout-confirm-routing.module';

import { CheckoutConfirmPage } from './checkout-confirm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckoutConfirmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckoutConfirmPage]
})
export class CheckoutConfirmPageModule {}
