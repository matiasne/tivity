import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDivisionPage } from './form-division.page';

const routes: Routes = [
  {
    path: '',
    component: FormDivisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDivisionPageRoutingModule {}
