import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfileEditPageRoutingModule } from './my-profile-edit-routing.module';

import { MyProfileEditPage } from './my-profile-edit.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, MyProfileEditPageRoutingModule, ComponentsModule, ReactiveFormsModule, TranslateModule],
	declarations: [MyProfileEditPage],
})
export class MyProfileEditPageModule {}
