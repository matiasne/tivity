import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCardPaymentPageRoutingModule } from './form-card-payment-routing.module';

import { FormCardPaymentPage } from './form-card-payment.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FormCardPaymentPageRoutingModule
  ],
  declarations: [FormCardPaymentPage]
})
export class FormCardPaymentPageModule {}
