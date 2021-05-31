import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeExitDmPageRoutingModule } from './home-exit-dm-routing.module';

import { HomeExitDmPage } from './home-exit-dm.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomeExitDmPageRoutingModule, TranslateModule],
	declarations: [HomeExitDmPage],
})
export class HomeExitDmPageModule {}
