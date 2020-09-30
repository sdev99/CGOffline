import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLocationPageRoutingModule } from './search-location-routing.module';

import { SearchLocationPage } from './search-location.page';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchLocationPageRoutingModule,
        PipesModule
    ],
  declarations: [SearchLocationPage]
})
export class SearchLocationPageModule {}
