import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentOpenchoiceDmPageRoutingModule } from './document-openchoice-dm-routing.module';

import { DocumentOpenchoiceDmPage } from './document-openchoice-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocumentOpenchoiceDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [DocumentOpenchoiceDmPage]
})
export class DocumentOpenchoiceDmPageModule {}
