import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import {LoginPageModule} from '../login/login.module';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForgotPasswordPageRoutingModule,
        LoginPageModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
