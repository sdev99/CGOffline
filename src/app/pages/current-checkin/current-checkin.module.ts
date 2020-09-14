import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentCheckinPageRoutingModule } from './current-checkin-routing.module';

import { CurrentCheckinPage } from './current-checkin.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CurrentCheckinPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CurrentCheckinPage]
})
export class CurrentCheckinPageModule {}
