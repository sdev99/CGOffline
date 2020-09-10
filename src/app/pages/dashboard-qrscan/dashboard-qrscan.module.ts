import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardQrscanPageRoutingModule } from './dashboard-qrscan-routing.module';

import { DashboardQrscanPage } from './dashboard-qrscan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardQrscanPageRoutingModule
  ],
  declarations: [DashboardQrscanPage]
})
export class DashboardQrscanPageModule {}
