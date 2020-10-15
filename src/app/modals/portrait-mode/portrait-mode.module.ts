import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortraitModePageRoutingModule } from './portrait-mode-routing.module';

import { PortraitModePage } from './portrait-mode.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PortraitModePageRoutingModule,
        ComponentsModule
    ],
  declarations: [PortraitModePage]
})
export class PortraitModePageModule {}
