import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSubdivisionPage } from './form-subdivision.page';

const routes: Routes = [
  {
    path: '',
    component: FormSubdivisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSubdivisionPageRoutingModule {}
