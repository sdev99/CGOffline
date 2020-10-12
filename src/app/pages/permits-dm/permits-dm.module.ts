import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermitsDmPageRoutingModule } from './permits-dm-routing.module';

import { PermitsDmPage } from './permits-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PermitsDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [PermitsDmPage]
})
export class PermitsDmPageModule {}
