import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsDmPageRoutingModule } from './forms-dm-routing.module';

import { FormsDmPage } from './forms-dm.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormsDmPageRoutingModule,
        ComponentsModule,
        PipesModule
    ],
  declarations: [FormsDmPage]
})
export class FormsDmPageModule {}
