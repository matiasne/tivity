import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReservasClientePage } from './list-reservas-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ListReservasClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReservasClientePageRoutingModule {}
