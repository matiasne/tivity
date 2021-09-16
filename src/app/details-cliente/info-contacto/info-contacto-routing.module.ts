import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoContactoPage } from './info-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: InfoContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoContactoPageRoutingModule {}
