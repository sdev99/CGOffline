import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCustomPageRoutingModule } from './form-custom-routing.module';

import { FormCustomPage } from './form-custom.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormCustomPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [FormCustomPage]
})
export class FormCustomPageModule {}
