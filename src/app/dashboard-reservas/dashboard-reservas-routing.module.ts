import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardReservasPage } from './dashboard-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardReservasPageRoutingModule {}
