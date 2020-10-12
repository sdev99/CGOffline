import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermitIssuedResultDmPageRoutingModule } from './permit-issued-result-dm-routing.module';

import { PermitIssuedResultDmPage } from './permit-issued-result-dm.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PermitIssuedResultDmPageRoutingModule,
        ComponentsModule
    ],
  declarations: [PermitIssuedResultDmPage]
})
export class PermitIssuedResultDmPageModule {}
