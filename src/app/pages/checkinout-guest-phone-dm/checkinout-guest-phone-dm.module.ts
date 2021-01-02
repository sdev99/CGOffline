import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutPhoneDmPageRoutingModule } from './checkinout-guest-phone-dm-routing.module';

import { CheckinoutGuestPhoneDmPage } from './checkinout-guest-phone-dm.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';
import {DirectivesModule} from '../../directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutPhoneDmPageRoutingModule,
        ComponentsModule,
        PipesModule,
        DirectivesModule,
        ReactiveFormsModule
    ],
  declarations: [CheckinoutGuestPhoneDmPage]
})
export class CheckinoutPhoneDmPageModule {}
