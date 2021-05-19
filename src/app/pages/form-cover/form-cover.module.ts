import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCoverPageRoutingModule } from './form-cover-routing.module';

import { FormCoverPage } from './form-cover.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, FormCoverPageRoutingModule, ComponentsModule, TranslateModule],
	declarations: [FormCoverPage],
})
export class FormCoverPageModule {}
