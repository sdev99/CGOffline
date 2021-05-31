import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseLocationPageRoutingModule } from './choose-location-routing.module';

import { ChooseLocationPage } from './choose-location.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ChooseLocationPageRoutingModule, TranslateModule],
	declarations: [ChooseLocationPage],
})
export class ChooseLocationPageModule {}
