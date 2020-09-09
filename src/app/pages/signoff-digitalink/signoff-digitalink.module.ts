import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignoffDigitalinkPageRoutingModule } from './signoff-digitalink-routing.module';

import { SignoffDigitalinkPage } from './signoff-digitalink.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignoffDigitalinkPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignoffDigitalinkPage]
})
export class SignoffDigitalinkPageModule {}
