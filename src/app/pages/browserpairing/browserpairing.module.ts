import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserpairingPageRoutingModule } from './browserpairing-routing.module';

import { BrowserpairingPage } from './browserpairing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserpairingPageRoutingModule
  ],
  declarations: [BrowserpairingPage]
})
export class BrowserpairingPageModule {}
