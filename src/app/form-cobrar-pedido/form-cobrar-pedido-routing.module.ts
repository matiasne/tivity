import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCobrarPedidoPage } from './form-cobrar-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: FormCobrarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCobrarPedidoPageRoutingModule {}
