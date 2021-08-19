import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormImportarCatalogoCsvPage } from './form-importar-catalogo-csv.page';

const routes: Routes = [
  {
    path: '',
    component: FormImportarCatalogoCsvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormImportarCatalogoCsvPageRoutingModule {}
