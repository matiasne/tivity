import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAfipPage } from './form-afip.page';

const routes: Routes = [
  {
    path: '',
    component: FormAfipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAfipPageRoutingModule {}
