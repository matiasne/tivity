import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPedidosClientePage } from './list-pedidos-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ListPedidosClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPedidosClientePageRoutingModule {}
