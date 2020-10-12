import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermitsGenerateDmPageRoutingModule } from './permits-generate-dm-routing.module';

import { PermitsGenerateDmPage } from './permits-generate-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PermitsGenerateDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [PermitsGenerateDmPage]
})
export class PermitsGenerateDmPageModule {}
