import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormHavPageRoutingModule } from './form-hav-routing.module';

import { FormHavPage } from './form-hav.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, FormHavPageRoutingModule, ComponentsModule, ReactiveFormsModule, TranslateModule],
	declarations: [FormHavPage],
})
export class FormHavPageModule {}
