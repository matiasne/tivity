import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketFacturaPage } from './ticket-factura.page';

const routes: Routes = [
  {
    path: '',
    component: TicketFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketFacturaPageRoutingModule {}
