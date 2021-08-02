import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormConfigMercadopagoPage } from './form-config-mercadopago.page';

const routes: Routes = [
  {
    path: '',
    component: FormConfigMercadopagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormConfigMercadopagoPageRoutingModule {}
