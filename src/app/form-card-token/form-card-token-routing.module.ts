import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCardTokenPage } from './form-card-token.page';

const routes: Routes = [
  {
    path: '',
    component: FormCardTokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCardTokenPageRoutingModule {}
