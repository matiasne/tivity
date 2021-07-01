import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormConfiguracionAfipPage } from './form-configuracion-afip.page';

const routes: Routes = [
  {
    path: '',
    component: FormConfiguracionAfipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormConfiguracionAfipPageRoutingModule {}
