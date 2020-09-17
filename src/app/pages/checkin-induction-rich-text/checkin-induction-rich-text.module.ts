import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinInductionRichTextPageRoutingModule } from './checkin-induction-rich-text-routing.module';

import { CheckinInductionRichTextPage } from './checkin-induction-rich-text.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckinInductionRichTextPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CheckinInductionRichTextPage]
})
export class CheckinInductionRichTextPageModule {}
