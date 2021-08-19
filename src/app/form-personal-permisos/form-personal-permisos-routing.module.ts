import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPersonalPermisosPage } from './form-personal-permisos.page';

const routes: Routes = [
  {
    path: '',
    component: FormPersonalPermisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPersonalPermisosPageRoutingModule {}
