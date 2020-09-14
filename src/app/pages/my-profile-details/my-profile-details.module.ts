import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfileDetailsPageRoutingModule } from './my-profile-details-routing.module';

import { MyProfileDetailsPage } from './my-profile-details.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyProfileDetailsPageRoutingModule,
        ComponentsModule
    ],
  declarations: [MyProfileDetailsPage]
})
export class MyProfileDetailsPageModule {}
