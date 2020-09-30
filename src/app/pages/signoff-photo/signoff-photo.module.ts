import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignoffPhotoPageRoutingModule } from './signoff-photo-routing.module';

import { SignoffPhotoPage } from './signoff-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignoffPhotoPageRoutingModule
  ],
  declarations: [SignoffPhotoPage]
})
export class SignoffPhotoPageModule {}
