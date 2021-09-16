import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReservasCalendarioPage } from './list-reservas-calendario.page';

const routes: Routes = [
  {
    path: '',
    component: ListReservasCalendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReservasCalendarioPageRoutingModule {}
