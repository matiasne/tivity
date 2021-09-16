import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEstadoReservaPage } from './form-estado-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: FormEstadoReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEstadoReservaPageRoutingModule {}
