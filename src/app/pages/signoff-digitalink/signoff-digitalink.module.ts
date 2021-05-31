import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignoffDigitalinkPageRoutingModule } from './signoff-digitalink-routing.module';

import { SignoffDigitalinkPage } from './signoff-digitalink.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, SignoffDigitalinkPageRoutingModule, ComponentsModule, TranslateModule],
	declarations: [SignoffDigitalinkPage],
})
export class SignoffDigitalinkPageModule {}
