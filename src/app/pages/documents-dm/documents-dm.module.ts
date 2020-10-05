import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsDmPageRoutingModule } from './documents-dm-routing.module';

import { DocumentsDmPage } from './documents-dm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsDmPageRoutingModule
  ],
  declarations: [DocumentsDmPage]
})
export class DocumentsDmPageModule {}
