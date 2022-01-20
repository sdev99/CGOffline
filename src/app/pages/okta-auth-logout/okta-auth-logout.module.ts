import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OktaAuthLogoutPageRoutingModule } from './okta-auth-logout-routing.module';

import { OktaAuthLogoutPage } from './okta-auth-logout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OktaAuthLogoutPageRoutingModule
  ],
  declarations: [OktaAuthLogoutPage]
})
export class OktaAuthLogoutPageModule {}
