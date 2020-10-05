import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutGuestDmPageRoutingModule } from './checkinout-guest-dm-routing.module';

import { CheckinoutGuestDmPage } from './checkinout-guest-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutGuestDmPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [CheckinoutGuestDmPage]
})
export class CheckinoutGuestDmPageModule {}
