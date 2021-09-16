import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDivisionPage } from './select-division.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDivisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDivisionPageRoutingModule {}
