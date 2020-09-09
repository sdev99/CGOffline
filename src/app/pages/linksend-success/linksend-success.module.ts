import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinksendSuccessPageRoutingModule } from './linksend-success-routing.module';

import { LinksendSuccessPage } from './linksend-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinksendSuccessPageRoutingModule
  ],
  declarations: [LinksendSuccessPage]
})
export class LinksendSuccessPageModule {}
