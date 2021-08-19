import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPersonalPage } from './select-personal.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPersonalPageRoutingModule {}
