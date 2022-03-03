import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TranslateModule } from "@ngx-translate/core";
import { ExitConfirmationPage } from "./exit-confirmation/exit-confirmation.page";
import { SearchLocationPage } from "./search-location/search-location.page";
import { VideorecordPage } from "./videorecord/videorecord.page";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [ExitConfirmationPage, SearchLocationPage, VideorecordPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [ExitConfirmationPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalsModule {}
