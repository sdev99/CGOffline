import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinInductionVideoFilePageRoutingModule } from './checkin-induction-video-file-routing.module';

import { CheckinInductionVideoFilePage } from './checkin-induction-video-file.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CheckinInductionVideoFilePageRoutingModule, ComponentsModule, PipesModule, TranslateModule],
	declarations: [CheckinInductionVideoFilePage],
})
export class CheckinInductionVideoFilePageModule {}
