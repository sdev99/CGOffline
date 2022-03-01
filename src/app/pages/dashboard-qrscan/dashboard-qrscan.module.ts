import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardQrscanPageRoutingModule } from "./dashboard-qrscan-routing.module";

import { DashboardQrscanPage } from "./dashboard-qrscan.page";
import { ComponentsModule } from "../../components/components.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DashboardQrscanPageRoutingModule,
    ComponentsModule,
    TranslateModule,
  ],
  declarations: [DashboardQrscanPage],
})
export class DashboardQrscanPageModule {}
