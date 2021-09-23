import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsDivisionPage } from './details-division.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsDivisionPage,
    children: [
      {
        path: 'list-pedidos',
        loadChildren: () => import('./list-pedidos/list-pedidos.module').then( m => m.ListPedidosPageModule)
      },
      {
        path: 'list-reservas',
        loadChildren: () => import('./list-reservas/list-reservas.module').then( m => m.ListReservasPageModule)
      },
      {
        path: 'form-configuracion',
        loadChildren: () => import('./form-configuracion/form-configuracion.module').then( m => m.FormConfiguracionPageModule)
      },
      {
        path: '',
        redirectTo: '/details-division/list-pedidos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsDivisionPageRoutingModule {}
