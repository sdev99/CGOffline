import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfileChangepassPageRoutingModule } from './my-profile-changepass-routing.module';

import { MyProfileChangepassPage } from './my-profile-changepass.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyProfileChangepassPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [MyProfileChangepassPage]
})
export class MyProfileChangepassPageModule {}
