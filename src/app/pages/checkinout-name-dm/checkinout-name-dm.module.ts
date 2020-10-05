import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutNameDmPageRoutingModule } from './checkinout-name-dm-routing.module';

import { CheckinoutNameDmPage } from './checkinout-name-dm.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutNameDmPageRoutingModule,
        ComponentsModule,
        PipesModule
    ],
  declarations: [CheckinoutNameDmPage]
})
export class CheckinoutNameDmPageModule {}
