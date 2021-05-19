import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitConfirmationPageRoutingModule } from './exit-confirmation-routing.module';

import { ExitConfirmationPage } from './exit-confirmation.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ExitConfirmationPageRoutingModule, TranslateModule],
	declarations: [ExitConfirmationPage],
})
export class ExitConfirmationPageModule {}
