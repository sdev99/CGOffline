import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {AuthInputComponent} from '../../components/auth-input/auth-input.component';
import {WarningComponentComponent} from '../../components/warning-component/warning-component.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        ComponentsModule,
    ],
  exports: [
    AuthInputComponent,
  ],
  declarations: [LoginPage, AuthInputComponent]
})
export class LoginPageModule {}
