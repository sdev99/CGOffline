import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvacuationDmPageRoutingModule } from './evacuation-dm-routing.module';

import { EvacuationDmPage } from './evacuation-dm.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EvacuationDmPageRoutingModule,
        ComponentsModule,
        PipesModule
    ],
  declarations: [EvacuationDmPage]
})
export class EvacuationDmPageModule {}
