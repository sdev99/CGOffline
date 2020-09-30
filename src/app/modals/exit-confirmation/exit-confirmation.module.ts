import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitConfirmationPageRoutingModule } from './exit-confirmation-routing.module';

import { ExitConfirmationPage } from './exit-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitConfirmationPageRoutingModule
  ],
  declarations: [ExitConfirmationPage]
})
export class ExitConfirmationPageModule {}
