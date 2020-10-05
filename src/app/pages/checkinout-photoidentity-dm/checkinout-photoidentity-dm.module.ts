import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutPhotoidentityDmPageRoutingModule } from './checkinout-photoidentity-dm-routing.module';

import { CheckinoutPhotoidentityDmPage } from './checkinout-photoidentity-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutPhotoidentityDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinoutPhotoidentityDmPage]
})
export class CheckinoutPhotoidentityDmPageModule {}
