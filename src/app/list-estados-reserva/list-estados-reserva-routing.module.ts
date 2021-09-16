import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEstadosReservaPage } from './list-estados-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ListEstadosReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEstadosReservaPageRoutingModule {}
