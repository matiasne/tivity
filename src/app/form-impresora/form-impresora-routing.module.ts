import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormImpresoraPage } from './form-impresora.page';

const routes: Routes = [
  {
    path: '',
    component: FormImpresoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormImpresoraPageRoutingModule {}
