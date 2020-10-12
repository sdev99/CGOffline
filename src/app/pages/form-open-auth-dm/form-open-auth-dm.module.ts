import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOpenAuthDmPageRoutingModule } from './form-open-auth-dm-routing.module';

import { FormOpenAuthDmPage } from './form-open-auth-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormOpenAuthDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [FormOpenAuthDmPage]
})
export class FormOpenAuthDmPageModule {}
