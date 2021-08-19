import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormImportarCatalogoCsvPageRoutingModule } from './form-importar-catalogo-csv-routing.module';

import { FormImportarCatalogoCsvPage } from './form-importar-catalogo-csv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormImportarCatalogoCsvPageRoutingModule
  ],
  declarations: [FormImportarCatalogoCsvPage]
})
export class FormImportarCatalogoCsvPageModule {}
