import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsClientePage } from './details-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsClientePage,
    children: [
      {
        path: 'list-reservas-cliente',
        loadChildren: () => import('./list-reservas-cliente/list-reservas-cliente.module').then( m => m.ListReservasClientePageModule)
      },
      {
        path: 'list-reservas-cliente/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./list-reservas-cliente/list-reservas-cliente.module').then( m => m.ListReservasClientePageModule)
          }
        ]
      },
      {
        path: 'list-pedidos-cliente',
        loadChildren: () => import('./list-pedidos-cliente/list-pedidos-cliente.module').then( m => m.ListPedidosClientePageModule)
      },
      {
        path: 'list-pedidos-cliente/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./list-pedidos-cliente/list-pedidos-cliente.module').then( m => m.ListPedidosClientePageModule)
          }
        ]
      },
      {
        path: 'info-contacto',
        loadChildren: () => import('./info-contacto/info-contacto.module').then( m => m.InfoContactoPageModule)
      },
      {
        path: 'info-contacto/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./info-contacto/info-contacto.module').then( m => m.InfoContactoPageModule)
          }
        ]
      },
      {
        path: ':id',
        redirectTo: '/details-cliente/:id/list-pedidos-cliente/:id',
        pathMatch: 'full'
      }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsClientePageRoutingModule {}
