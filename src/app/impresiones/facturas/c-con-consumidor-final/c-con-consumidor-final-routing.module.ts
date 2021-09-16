import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CConConsumidorFinalPage } from './c-con-consumidor-final.page';

const routes: Routes = [
  {
    path: '',
    component: CConConsumidorFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CConConsumidorFinalPageRoutingModule {}
