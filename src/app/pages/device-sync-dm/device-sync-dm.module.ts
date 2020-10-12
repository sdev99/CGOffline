import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceSyncDmPageRoutingModule } from './device-sync-dm-routing.module';

import { DeviceSyncDmPage } from './device-sync-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceSyncDmPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeviceSyncDmPage]
})
export class DeviceSyncDmPageModule {}
