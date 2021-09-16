import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BConConsumidorFinalPage } from './b-con-consumidor-final.page';

const routes: Routes = [
  {
    path: '',
    component: BConConsumidorFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BConConsumidorFinalPageRoutingModule {}
