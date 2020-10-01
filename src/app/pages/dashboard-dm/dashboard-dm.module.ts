import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardDmPageRoutingModule } from './dashboard-dm-routing.module';

import { DashboardDmPage } from './dashboard-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DashboardDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [DashboardDmPage]
})
export class DashboardDmPageModule {}
