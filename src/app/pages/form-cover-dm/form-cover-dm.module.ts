import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCoverDmPageRoutingModule } from './form-cover-dm-routing.module';

import { FormCoverDmPage } from './form-cover-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormCoverDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [FormCoverDmPage]
})
export class FormCoverDmPageModule {}
