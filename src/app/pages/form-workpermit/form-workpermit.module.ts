import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormWorkpermitPageRoutingModule } from './form-workpermit-routing.module';

import { FormWorkpermitPage } from './form-workpermit.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormWorkpermitPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [FormWorkpermitPage]
})
export class FormWorkpermitPageModule {}
