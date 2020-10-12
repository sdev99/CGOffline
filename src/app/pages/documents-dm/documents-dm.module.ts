import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsDmPageRoutingModule } from './documents-dm-routing.module';

import { DocumentsDmPage } from './documents-dm.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocumentsDmPageRoutingModule,
        ComponentsModule,
        PipesModule
    ],
  declarations: [DocumentsDmPage]
})
export class DocumentsDmPageModule {}
