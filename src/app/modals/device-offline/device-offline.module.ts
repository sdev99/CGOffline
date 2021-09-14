import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceOfflinePageRoutingModule } from './device-offline-routing.module';

import { DeviceOfflinePage } from './device-offline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceOfflinePageRoutingModule
  ],
  declarations: [DeviceOfflinePage]
})
export class DeviceOfflinePageModule {}
