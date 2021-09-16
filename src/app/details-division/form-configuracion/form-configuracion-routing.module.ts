import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormConfiguracionPage } from './form-configuracion.page';

const routes: Routes = [
  {
    path: '',
    component: FormConfiguracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormConfiguracionPageRoutingModule {}
