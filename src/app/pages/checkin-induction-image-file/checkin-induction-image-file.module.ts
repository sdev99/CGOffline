import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinInductionImageFilePageRoutingModule } from './checkin-induction-image-file-routing.module';

import { CheckinInductionImageFilePage } from './checkin-induction-image-file.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CheckinInductionImageFilePageRoutingModule, ComponentsModule, PipesModule, TranslateModule],
	declarations: [CheckinInductionImageFilePage],
})
export class CheckinInductionImageFilePageModule {}
