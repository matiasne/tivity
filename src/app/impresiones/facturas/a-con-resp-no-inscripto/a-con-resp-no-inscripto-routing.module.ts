import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AConRespNoInscriptoPage } from './a-con-resp-no-inscripto.page';

const routes: Routes = [
  {
    path: '',
    component: AConRespNoInscriptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AConRespNoInscriptoPageRoutingModule {}
