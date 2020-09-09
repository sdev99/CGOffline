import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinListPageRoutingModule } from './checkin-list-routing.module';

import { CheckinListPage } from './checkin-list.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinListPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinListPage]
})
export class CheckinListPageModule {}
