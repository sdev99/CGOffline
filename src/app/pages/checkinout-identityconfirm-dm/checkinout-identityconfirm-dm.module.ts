import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinoutIdentityconfirmDmPageRoutingModule } from './checkinout-identityconfirm-dm-routing.module';

import { CheckinoutIdentityconfirmDmPage } from './checkinout-identityconfirm-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinoutIdentityconfirmDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinoutIdentityconfirmDmPage]
})
export class CheckinoutIdentityconfirmDmPageModule {}
