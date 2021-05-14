import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAccountSetupPageRoutingModule } from './new-account-setup-routing.module';

import { NewAccountSetupPage } from './new-account-setup.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, NewAccountSetupPageRoutingModule, ComponentsModule, ReactiveFormsModule, TranslateModule],
	declarations: [NewAccountSetupPage],
})
export class NewAccountSetupPageModule {}
