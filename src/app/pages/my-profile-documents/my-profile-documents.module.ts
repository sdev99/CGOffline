import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfileDocumentsPageRoutingModule } from './my-profile-documents-routing.module';

import { MyProfileDocumentsPage } from './my-profile-documents.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, MyProfileDocumentsPageRoutingModule, ComponentsModule, TranslateModule],
	declarations: [MyProfileDocumentsPage],
})
export class MyProfileDocumentsPageModule {}
