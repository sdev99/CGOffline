import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinWorkpermitPageRoutingModule } from './checkin-workpermit-routing.module';

import { CheckinWorkpermitPage } from './checkin-workpermit.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinWorkpermitPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinWorkpermitPage]
})
export class CheckinWorkpermitPageModule {}
