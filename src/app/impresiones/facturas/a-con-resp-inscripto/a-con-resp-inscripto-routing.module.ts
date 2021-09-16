import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AConRespInscriptoPage } from './a-con-resp-inscripto.page';

const routes: Routes = [
  {
    path: '',
    component: AConRespInscriptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AConRespInscriptoPageRoutingModule {}
