import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCardPaymentPage } from './form-card-payment.page';

const routes: Routes = [
  {
    path: '',
    component: FormCardPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCardPaymentPageRoutingModule {}
