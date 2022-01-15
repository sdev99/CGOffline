import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { CheckoktaenablePageRoutingModule } from "./checkoktaenable-routing.module";
import { CheckoktaenablePage } from "./checkoktaenable.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../../components/components.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckoktaenablePageRoutingModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],

  declarations: [CheckoktaenablePage],
})
export class CheckoktaenablePageModule {}
