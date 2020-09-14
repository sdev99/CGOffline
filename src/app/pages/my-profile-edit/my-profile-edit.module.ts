import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfileEditPageRoutingModule } from './my-profile-edit-routing.module';

import { MyProfileEditPage } from './my-profile-edit.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyProfileEditPageRoutingModule,
        ComponentsModule
    ],
  declarations: [MyProfileEditPage]
})
export class MyProfileEditPageModule {}
