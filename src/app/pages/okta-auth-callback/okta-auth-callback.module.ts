import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OktaAuthCallbackPageRoutingModule } from './okta-auth-callback-routing.module';

import { OktaAuthCallbackPage } from './okta-auth-callback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OktaAuthCallbackPageRoutingModule
  ],
  declarations: [OktaAuthCallbackPage]
})
export class OktaAuthCallbackPageModule {}
